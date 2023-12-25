import { useContext } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import useCurrentUser from "../../Hooks/useCurrentUser";
import { AuthContext } from "../../Provider/Provider";
import Swal from "sweetalert2";

const MyProfile = () => {
    const [userInfo, refetch]= useCurrentUser();
    const {user}= useContext(AuthContext);
    const axiosSecure=useAxiosPrivate();

    const handleUpdate =async(e)=>{
        e.preventDefault();

        const name= e.target.name.value;
       

        const myProfileDatas= {
            name: name,
           
        }

        const res= await axiosSecure.patch(`/upDatingMyProfileData/${user?.email}`,myProfileDatas);
        console.log(res.data);

        if(res.data.modifiedCount>0){
            Swal.fire({
                icon: "success",
                title: "Successful",
                text: "Successfully Updated",

            });
            refetch();
        }


    }
    return (
        <div>
            <form onSubmit={handleUpdate} className="bg-gray-300 w-[450px] mx-auto mt-12 px-5 py-7 space-y-8">
                <div className="flex gap-3">
                    <h2 className="text-lg">Full Name: </h2>

                    <input className="px-2 rounded-md" defaultValue={userInfo?.userName} type="text" name="name" id="" />
                </div>

                <div className="flex gap-3">
                    <h2 className="text-lg">Email: </h2>

                    <input className="bg-gray-200 px-2 rounded-md cursor-not-allowed" defaultValue={userInfo?.userEmail} readOnly type="text" name="" id="" />
                </div>

                <br />
                <div className="text-center">
                    <button className="btn bg-green-600 text-white ">Update</button>
                </div>

            </form>
        </div>
    );
};

export default MyProfile;