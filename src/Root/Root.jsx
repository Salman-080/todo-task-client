import { Outlet } from "react-router-dom";
import Navbar from "../FixedComponents/Navbar";
import Footer from "../FixedComponents/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
         
        </div>
    );
};

export default Root;