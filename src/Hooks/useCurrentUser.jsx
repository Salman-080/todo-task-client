import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

const useCurrentUser = () => {
    const axiosSecure=useAxiosPrivate();
    const {user}=useContext(AuthContext);
    const { data: userInfo = {}, refetch } = useQuery({
        queryKey: ["userInfo", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/getAllUserInfo/${user?.email}`);
            console.log(res.data);
    
            return res.data;
        }
    })
    return [userInfo,refetch]
};

export default useCurrentUser;