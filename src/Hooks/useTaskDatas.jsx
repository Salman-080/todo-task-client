import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Provider";
import useAxiosPrivate from "./useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const useTaskDatas = () => {
    const { user } = useContext(AuthContext);
    const [todo, setTodo] = useState([])
    const [inProgress, setInProgress] = useState([])
    const [finished, setFinished] = useState([])
    const axiosSecure = useAxiosPrivate();
    const { data: allTasks = [], refetch } = useQuery({
        queryKey: ["allTasks", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/getAllTasks/${user?.email}`);
            console.log(res.data);
    
            return res.data;
        }
    })

    console.log(todo)

    useEffect(()=>{
        setTodo(allTasks?.filter((task) => task.status == "to do"));
        setInProgress(allTasks?.filter((task) => task.status == "in progress"));
        setFinished(allTasks?.filter((task) => task.status == "completed"));
    },[allTasks])

    const handleDragging = async(res) => {
        
        const { destination, source, draggableId } = res;
        console.log(res)

        if (source.droppableId == destination.droppableId) {
            return;
        }

        //REMOVE FROM SOURCE ARRAY

        if (source.droppableId == 2) {
            setInProgress(removeItemById(draggableId, inProgress));
        }
        else if (source.droppableId == 3) {
            setFinished(removeItemById(draggableId, finished));
        }
        else {
            setTodo(removeItemById(draggableId, todo));
        }

        // GET ITEM

        const task = findItemById(draggableId, [...todo, ...inProgress, ...finished]);
        console.log(task)
        //ADD ITEM
        if (destination.droppableId == 2) {
            setInProgress([{ ...task }, ...inProgress]);
            const res =await axiosSecure.patch(`/updateStatus/${draggableId}/${"in progress"}`);
            console.log(res.data);
        }
        else if (destination.droppableId == 3) {
            setFinished([{ ...task }, ...finished]);
            const res =await axiosSecure.patch(`/updateStatus/${draggableId}/${"completed"}`);
            console.log(res.data);
        }
        else {
            setTodo([{ ...task}, ...todo]);
            const res =await axiosSecure.patch(`/updateStatus/${draggableId}/${"to do"}`);
            console.log(res.data);
        }
    };
    console.log(inProgress)
    console.log(todo)
    console.log(finished)

    function findItemById(id, items) {
        return items.find((item) => item._id == id);
    }

    function removeItemById(id, items) {
        return items.filter((item) => item._id != id);

    }



    return [allTasks, refetch, todo, inProgress, finished, handleDragging]
};

export default useTaskDatas;