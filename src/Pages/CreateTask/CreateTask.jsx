import { useForm } from "react-hook-form";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";
import useTaskDatas from "../../Hooks/useTaskDatas";
import { toast, ToastContainer } from "react-toastify";

const CreateTask = () => {
  const [allTasks, todo, inProgress, finished, handleDragging, refetch] =
    useTaskDatas();
  const axiosSecure = useAxiosPrivate();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset  } = useForm();
  const onSubmit = async (taskData) => {
    console.log(taskData);
    taskData.status = "to do";
    taskData.userEmail = user?.email;
    const res = await axiosSecure.post("/tasksData", taskData);
    console.log(res.data);
    if (res?.data?.msg) {
      toast.success("Task Created Successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      reset();
    }
    refetch();
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className=" py-14 md:py-12">
        <h2 className="text-center text-3xl font-bold ">Add a Task</h2>
        <br />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 w-[370px] md:w-[580px] lg:w-[700px] mx-auto bg-gray-100 px-4 py-8"
        >
          <input
            {...register("taskTitle", { required: true })}
            type="text"
            placeholder="Task Title"
            className="input input-bordered w-full"
          />

          <div className="flex gap-7">
            <select
              {...register("priority", { required: true })}
              className="select select-bordered w-full"
            >
              <option value="" disabled selected>
                Select Priority
              </option>
              <option value="High">High</option>
              <option value="Moderate">Moderate</option>
              <option value="Low">Low</option>
            </select>
            <input
              {...register("deadLine", { required: true })}
              type="date"
              placeholder="Deadline"
              className="input input-bordered w-full"
            />
          </div>

          <textarea
            {...register("taskDescription", { required: true })}
            placeholder="Description"
            className="textarea textarea-bordered textarea-lg w-full"
          ></textarea>

          <div className="text-center">
            <button className="btn bg-green-500">Add Task</button>
          </div>
        </form>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default CreateTask;
