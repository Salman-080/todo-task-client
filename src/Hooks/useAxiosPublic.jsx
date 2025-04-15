import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'https://task-management-server-chi-coral.vercel.app'
    baseURL: 'http://localhost:5000'
    // baseURL: 'http://192.168.0.100/api'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;