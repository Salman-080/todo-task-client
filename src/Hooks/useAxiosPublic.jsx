import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-management-server-chi-coral.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;