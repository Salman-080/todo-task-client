import { useContext } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { AuthContext } from "../../Provider/Provider";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Update = () => {
    const axiosSecure = useAxiosPrivate();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const { data: updatingTask = {}, refetch } = useQuery({
        queryKey: ["updatingTask", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/updateTask/${id}`);
            console.log(res.data);

            return res.data;
        }
    })

    const onSubmit = async (UpdatingTaskData) => {
        console.log(UpdatingTaskData);
        console.log(id);
       
        
        const res = await axiosSecure.put(`/DoUpdateTasksData/${id}`, UpdatingTaskData);
        console.log(res.data);

    }
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
                <div className=" py-14 md:py-12">
                    <h2 className="text-center text-3xl font-bold ">Update Task</h2>
                    <br />

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-[700px] mx-auto bg-gray-100 px-4 py-8">
                        <div>
                            <h2>Task Title</h2>
                            <input {...register("taskTitle", { required: true })} type="text" defaultValue={updatingTask.taskTitle} className="input input-bordered w-full" />
                        </div>


                        <div className="flex gap-7">
                            <div>
                                <h2>Priority</h2>
                                <select defaultValue={updatingTask.priority} {...register("priority", { required: true })} className="select select-bordered w-full">
                                    
                                    <option value="High">High</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>

                            <div>
                                <h2>DeadLine</h2>
                                <input {...register("deadLine", { required: true })} type="date" defaultValue={updatingTask.deadLine} className="input input-bordered w-full" />
                            </div>

                        </div>

                        <div>
                            <h2>Description</h2>
                            <textarea {...register("taskDescription", { required: true })}  className="textarea textarea-bordered textarea-lg w-full" defaultValue={updatingTask.taskDescription} ></textarea>
                        </div>


                        <div className="text-center">
                            <button className="btn bg-green-500">
                                Update Task
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Update;