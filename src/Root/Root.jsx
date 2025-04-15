import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../FixedComponents/Navbar";
import Footer from "../FixedComponents/Footer";

const Root = () => {
    const location= useLocation();
    console.log(location);
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            {
                location.pathname!=="/" && <Footer></Footer>
            }
            
         
        </div>
    );
};

export default Root;