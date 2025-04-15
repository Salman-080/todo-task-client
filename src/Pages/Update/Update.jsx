import { useContext } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { AuthContext } from "../../Provider/Provider";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const Update = () => {
    const axiosSecure = useAxiosPrivate();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    console.log(id);
    const { data: updatingTask = {}, refetch } = useQuery({
        queryKey: ["getTaskForUpdate", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/getTaskForUpdate/${id}`);
            console.log(res?.data);

            return res?.data;
        }
    })
console.log(updatingTask);
    const onSubmit = async (UpdatingTaskData) => {
        console.log(UpdatingTaskData);
        console.log(id);
       
        
        const res = await axiosSecure.put(`/updateTasksData/${id}`, UpdatingTaskData);
        console.log(res.data);
        if (res?.data?.msg == "Done") {
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Task Successfully Updated",

            });
            refetch();
        }

    }
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
                <div className=" py-14 md:py-12">
                    <h2 className="text-center text-3xl font-bold ">Update Task</h2>
                    <br />

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-[370px] md:w-[580px] lg:w-[700px] mx-auto bg-gray-100 px-4 py-8">
                        <div>
                            <h2>Task Title</h2>
                            <input {...register("tasktitle", { required: true })} type="text" defaultValue={updatingTask?.tasktitle} className="input input-bordered w-full" />
                        </div>


                        <div className="flex gap-7">
                            <div>
                                <h2>Priority</h2>
                                <select defaultValue={updatingTask?.priority} {...register("priority", { required: true })} className="select select-bordered w-full">
                                    
                                    <option value="High">High</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>

                            <div>
                                <h2>DeadLine</h2>
                                <input {...register("deadline", { required: true })} type="date" defaultValue={updatingTask?.deadline?.slice(0, 10)} className="input input-bordered w-full" />
                            </div>

                        </div>

                        <div>
                            <h2>Description</h2>
                            <textarea {...register("taskdescription", { required: true })}  className="textarea textarea-bordered textarea-lg w-full" defaultValue={updatingTask?.taskdescription} ></textarea>
                        </div>


                        <div className="text-center">
                            <button className="btn bg-green-500 ">
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