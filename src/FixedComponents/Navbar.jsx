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
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {});
  };
  const navLinks = (
    <div className="flex flex-col lg:flex-row gap-3">
    
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
    

      {user && (
        <li>
          <NavLink to="/dashboardHome">Dashboard</NavLink>
        </li>
      )}

      {user && (
        <li>
          <NavLink to="/createTask">Create New Task</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/contactUs">Contact Us</NavLink>
      </li>

    </div>
  );
  return (
    <div className="">
      <div className="navbar bg-base-100 px-16">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="">
            <img
              className="w-[45px] h-[45px] rounded-full"
              src="/taskManagementLogo.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end space-x-5">
          <div className="dropdown">
            {user ? (
              <img
                tabIndex={0}
                role="button"
                className="w-[45px] h-[45px] rounded-full hover:opacity-50"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <img
                tabIndex={0}
                role="button"
                className="w-[45px] h-[45px] rounded-full hover:opacity-50"
                src="/blankProfileUser.jpg"
                alt=""
              />
            )}

            <div
              tabIndex={0}
              className="dropdown-content card card-sm bg-base-100 z-50 w-64 shadow-md left-[-170px]"
            >
              {user ? (
                <div className="card-body space-y-2 text-sm">
                  <h2 className="font-semibold text-lg text-center">
                    Signed in as
                  </h2>
                  <p>
                    <span className="font-semibold">
                      Name: {userInfo?.username || "N/A"}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">
                      Email: {user?.email || "N/A"}
                    </span>
                  </p>

                  <button
                    onClick={handleLogOut}
                    className="mt-3 btn btn-sm text-white bg-red-500 hover:bg-red-600 "
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="card-body  text-center text-sm space-y-2 ">
                  <h2 className="font-semibold text-lg">Welcome!!</h2>
                  <p className="text-gray-500">
                    Please sign in or create an account.
                  </p>

                  <div className="flex gap-4 justify-center ">
                    <NavLink to="/login" className="btn btn-sm btn-primary">
                      Sign In
                    </NavLink>
                    <NavLink to="/register" className="btn btn-sm btn-outline">
                      Sign Up
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
