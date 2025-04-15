import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

const useCurrentUser = () => {
    const axiosSecure=useAxiosPrivate();
    const {user}=useContext(AuthContext);
    const userEmail=user?.email;
    const { data: userInfo = {}, refetch } = useQuery({
        queryKey: ["userInfo", userEmail],
        enabled: !!userEmail,
        queryFn: async () => {
            const res = await axiosSecure.get(`/getAllUserInfo/${userEmail}`);
            // console.log(res.data);
    
            return res.data;
        }
    })
    return [userInfo,refetch]
};

export default useCurrentUser;