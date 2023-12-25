import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://task-management-server-chi-coral.vercel.app'
})
const useAxiosPrivate = () => {
    return axiosSecure;
};

export default useAxiosPrivate;