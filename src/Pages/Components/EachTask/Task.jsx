import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { FaEdit, FaMinus, FaRemoveFormat } from "react-icons/fa";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import useTaskDatas from "../../../Hooks/useTaskDatas";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Task = ({ eachTask, index }) => {
    const [allTasks, refetch, todo, inProgress, finished, handleDragging] = useTaskDatas();
    const axiosSecure = useAxiosPrivate();
    const [daysLeft, setDaysLeft] = useState(null);

    useEffect(()=>{
        const deadLine= new Date(eachTask.deadLine);
     
        console.log(deadLine);

        const currentDateTime= new Date();
        console.log(currentDateTime)

        const dayLeft = deadLine - currentDateTime;
        const result = Math.ceil(dayLeft / (1000 * 60 * 60 * 24));
        setDaysLeft(result);
    },[])
    const handleRemove = async (taskId) => {
        console.log(taskId)

        const res = await axiosSecure.delete(`/taskDelete/${taskId}`);
        console.log(res?.data);
        if (res?.data?.deletedCount > 0) {
            Swal.fire({
                icon: "Success",
                title: "Success",
                text: "Successfully Deleted",

            });
            refetch();
        }
    }

    return (
        <div>

            <Draggable draggableId={`${eachTask._id}`} key={eachTask._id} index={index}>
                {(provided, snapshot) => (
                    <div className={"rounded-lg shadow-xl p-8 text-black py-8 ml-10 mr-10 cursor-pointer flex flex-col justify-between space-y-2 "}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}

                    >
                        <div className="flex justify-between items-center" >
                            <h2 className="text-lg text-blue-500 font-semibold">{eachTask.taskTitle}</h2>
                            <p className="text-sm"><span>Priority: </span>{eachTask.priority}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">{eachTask.taskDescription}</p>
                        </div>


                        <div className="text-center">


                            <button className="px-[10px] py-[1px] rounded-xl bg-green-600  text-white" onClick={() => document.getElementById(`my_modal_5${eachTask._id}`).showModal()}>Check DeadLine</button>

                        </div>

                        <div
                            className=" flex gap-6 justify-center"
                        >

                            <Link to={`/update/${eachTask._id}`} >
                                <div>
                                    <FaEdit className="text-yellow-600"></FaEdit>
                                </div>
                            </Link>

                            <button onClick={() => handleRemove(eachTask._id)}>
                                <div className=" ">
                                    <FaMinus className="text-red-600"></FaMinus>
                                </div>
                            </button>

                        </div>


                        {provided.placeholder}
                    </div>
                )}
            </Draggable>

            <dialog id={`my_modal_5${eachTask._id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">DeadLine: <span>{eachTask.deadLine}</span></h3>
                    <p className="py-4">Days left: {daysLeft} </p>
                    <div className="modal-action">
                        <form method="dialog">

                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Task;