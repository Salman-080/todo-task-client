import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
import useCurrentUser from "../Hooks/useCurrentUser";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [userInfo] = useCurrentUser();
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(res => {
                navigate("/");
            })
            .catch(err => {

            })
    }
    const navLinks = <>

        <li><NavLink to="/">Home</NavLink></li>

        {
            user && <li><NavLink to="/dashboardHome">Dashboard</NavLink></li>



        }

        <li><NavLink to="/aboutUs">About Us</NavLink></li>
        {
            user && <li><NavLink to="/createTask">Create New Task</NavLink></li>
        }
        <li><NavLink to="/contactUs">Contact Us</NavLink></li>

        {
            user && <li><NavLink to="/myProfile">My Profile</NavLink></li>
        }

        {
            user ? <button onClick={handleLogOut} className="btn ml-6">LogOut</button>
                :
                <li><NavLink to="/login">Login</NavLink></li>
        }



    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {navLinks}
                        </ul>
                    </div>
                    <div className="">
                        <img className="w-[45px] h-[45px]" src="/taskLogo.png" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                {
                    user ? (
                        <div className="navbar-end space-x-5">
                            <h2 className="font-semibold"><span className="text-green-600">Currently signedIn: </span>{userInfo?.userName}</h2>
                            <img className="w-[45px] h-[45px] rounded-full" src={user?.photoURL} alt="" />
                        </div>
                    ) :
                        <div className="navbar-end">

                        </div>
                }


            </div>
        </div>
    );
};

export default Navbar;