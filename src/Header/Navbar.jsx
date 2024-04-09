import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../ContextProvider/ContextProvider";
import profile from "./../assets/house/deFaultProfile1.png";

export default function Navbar() {
  const { user,logOut } = useContext(AuthContext);
  const handleLogout =() =>{
    logOut()
    .then(()=>console.log('log out '))
    .catch(()=>console.log('something is wrong'))
  }

  // console.log(user.email);
  const navRoute = (
    <>
      <NavLink
        to="/"
        onClick={() => setMenu(!menu)}
        className={({ isActive }) =>
          isActive
            ? " text-accent w-fit text-sm font-medium "
            : "text-sm w-fit text-black/60 font-medium "
        }
      >
        <p className="relative group overflow-hidden">
          Home
          <span
            className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                       w-full bg-accent inline-flex absolute left-0 bottom-0"
          />
        </p>
      </NavLink>

      <NavLink
        to="/register"
        onClick={() => setMenu(!menu)}
        className={({ isActive }) =>
          isActive
            ? "text-accent w-fit text-sm font-medium "
            : "text-sm w-fit text-black/60 font-medium "
        }
      >
        <p className="relative group overflow-hidden">
          Register
          <span
            className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                       w-full bg-accent inline-flex absolute left-0 bottom-0"
          />
        </p>
      </NavLink>
      <NavLink
        to="/login"
        onClick={() => setMenu(!menu)}
        className={({ isActive }) =>
          isActive
            ? "text-accent text-sm font-medium w-fit"
            : "text-sm text-black/60 font-medium  w-fit"
        }
      >
        <p className="relative group overflow-hidden">
          Login
          <span
            className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                       w-full bg-accent inline-flex absolute left-0 bottom-0"
          />
        </p>
      </NavLink>
      {user && (
        <NavLink
          to="/profile"
          onClick={() => setMenu(!menu)}
          className={({ isActive }) =>
            isActive
              ? "  text-accent text-sm font-medium w-fit "
              : "text-sm text-black/60 font-medium w-fit "
          }
        >
          <p className="relative group overflow-hidden   ">
            Update Profile
            <span
              className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                       w-full bg-accent inline-flex absolute left-0 bottom-0"
            />
          </p>
        </NavLink>
      )}
      <NavLink
        to="/GetTouch"
        onClick={() => setMenu(!menu)}
        className={({ isActive }) =>
          isActive
            ? "text-accent text-sm font-medium w-fit"
            : "text-sm text-black/60 font-medium w-fit "
        }
      >
        <p className="relative group overflow-hidden">
          Get in Touch
          <span
            className="h-[2px] -translate-x-44  group-hover:translate-x-0 transition-transform duration-300
                       w-full bg-accent inline-flex absolute left-0 bottom-0"
          />
        </p>
      </NavLink>
    </>
  );
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="navbar bg-base-100 px-4 lg:px-10 shadow-sm ">
        {/* menu bar start */}
        <div className=" navbar-start relative gap-2  ">
          <div className="items-center flex   lg:hidden">
            <label className=" swap swap-rotate bg-transparent border-none ">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onChange={() => setMenu(!menu)}
                checked={menu ? true : false}
              />

              {/* hamburger icon */}

              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
          <ul
            tabIndex={0}
            className={`menu absolute top-10 -left-60  menu-sm lg:hidden   text-xl  dropdown-content border-r border-t border-b border-success border-opacity-60 
                   mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-r-xl w-max  gap-3 py-5  ${
                     menu && "-left-[16px] duration-300  "
                   }`}
          >
            {navRoute}

            <li className="mt-5">
              <a className="relative inline-flex items-center justify-start border border-success btn btn-sm cursor-pointer overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-success absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Sign in
                </span>
              </a>
            </li>
            <li>
              <a className="relative inline-flex items-center justify-start border border-info btn btn-sm overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-info absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Sign up
                </span>
              </a>
            </li>
          </ul>
          <div>
            <a className="font-extrabold  text-2xl  bg-300%  bg-gradient-to-r from-accent/75 via-info/75 to-success/75 text-transparent bg-clip-text animate-gradient">
              AzureAcres
            </a>
          </div>
        </div>
        {/* menu bar end*/}

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 items-center ">
            {navRoute}
          </ul>
        </div>
        <div className="navbar-end gap-2 hidden lg:flex">
          {user ? (
            <>
              <div className="tooltip-bottom tooltip" data-tip={user?.displayName || 'Name: Null'}>
                <div className="avatar">
                  <div className="w-8 rounded-full tooltip ">
                    <img src={user?.photoURL || profile} />
                  </div>
                </div>
              </div>
              <button 
              onClick={handleLogout}
              className=" px-2 py-1 relative rounded group overflow-hidden font-medium border border-accent/20 text-accent inline-block">
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-accent group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">Logout</span>
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="    px-2 py-1 relative rounded group overflow-hidden font-medium border border-accent/20 text-accent inline-block"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-accent group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Login</span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
