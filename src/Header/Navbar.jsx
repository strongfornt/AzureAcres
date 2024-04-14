import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../ContextProvider/ContextProvider";
import profile from "./../assets/house/deFaultProfile1.png";
import { useLocation } from "react-router-dom";
import { calculateScrollbarWidth } from "./ScrollBar";
import "./Nav.css";
import OutsideClickHandler from "react-outside-click-handler";
import { SiReactrouter } from "react-icons/si";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const { user, logOut, loading } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => console.log("log out "))
      .catch(() => console.log("something is wrong"));
  };

  useEffect(() => {
    if (menu) {
      const scrollbarWidth = calculateScrollbarWidth();

      document.body.style.paddingRight = `${scrollbarWidth}px`;

      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "0";

      document.body.style.overflow = "auto";
    }
  }, [menu]);

  const navRoute = (
    <>
      <NavLink
        to="/"
        onClick={() => setMenu(!menu)}
        className={({ isActive }) =>
          isActive
            ? ` text-accent w-fit text-sm font-medium  `
            : `text-sm w-fit  font-medium  ${
                location.pathname == "/" ? "text-white" : "text-black/60 "
              } `
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
            : `text-sm w-fit ${
                location.pathname == "/" ? "text-white" : "text-black/60 "
              } font-medium `
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
            : `text-sm ${
                location.pathname == "/" ? "text-white" : "text-black/60 "
              }  font-medium  w-fit `
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
      {loading ? (
        <NavLink
          to="/profile"
          onClick={() => setMenu(!menu)}
          className={({ isActive }) =>
            isActive
              ? "  text-accent text-sm font-medium w-fit "
              : ` text-sm ${
                  location.pathname == "/" ? "text-white" : "text-black/60 "
                }   font-medium w-fit `
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
      ) : (
        user && (
          <NavLink
            to="/profile"
            onClick={() => setMenu(!menu)}
            className={({ isActive }) =>
              isActive
                ? "  text-accent text-sm font-medium w-fit "
                : ` text-sm ${
                    location.pathname == "/" ? "text-white" : "text-black/60 "
                  }    font-medium w-fit `
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
        )
      )}

      <NavLink
        to="/GetTouch"
        onClick={() => setMenu(!menu)}
        className={({ isActive }) =>
          isActive
            ? "text-accent text-sm font-medium w-fit"
            : `text-sm ${
                location.pathname == "/" ? "text-white" : "text-black/60 "
              }  font-medium w-fit `
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

  return (
    <div className="">
      <div
        className={`navbar  px-4 md:px-6 lg:px-10 shadow-sm  ${
          location.pathname == "/" ? "bg-gray-800 z-10 shadow-lg" : "bg-white"
        }`}
      >
        {/* menu bar start */}
        <div className=" navbar-start relative gap-2  ">
          <div>
            <a className="font-extrabold  text-2xl  bg-300%  bg-gradient-to-r from-accent/75 via-info/75 to-success/75 text-transparent bg-clip-text animate-gradient">
              AzureAcres
            </a>
          </div>
        </div>
        {/* menu bar end*/}

        <div className="navbar-center hidden md:flex">
          <ul
            onClick={() => setMenu(false)}
            className="menu menu-horizontal px-1 md:gap-3  lg:gap-4 items-center  "
          >
            {navRoute}
          </ul>
        </div>
        <div className="navbar-end gap-2 flex  ">
          <OutsideClickHandler onOutsideClick={() => setMenu(false)}>
            <div className="items-center flex   md:hidden">
              <label className=" swap swap-rotate  border-none  ">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  onChange={() => {
                    setMenu(!menu);
                  }}
                  checked={menu ? true : false}
                />

                {/* hamburger icon */}

                <svg
                  className={`swap-off fill-current z-30 ${
                    location.pathname == "/" && "text-white"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className={`swap-on fill-current z-30 ${
                    location.pathname == "/" && "text-white"
                  }`}
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
              className={`menu absolute mr-6  -top-3 -right-64 min-w-56 menu-sm md:hidden text-xl  dropdown-content border-l border-t  border-success border-opacity-60 
                   mt-3 z-[10] shadow-lg ${
                     location.pathname == "/" ? "bg-gray-800" : "bg-base-100"
                   }  min-h-screen  rounded-l-xl w-max  gap-2    ${
                menu && "-right-[20px] duration-500 transition-all "
              }`}
            >
              {user && (
                <li className="flex  items-center    ">
                  <div className="avatar">
                    <div className="w-10 rounded-full ring-1 ring-accent ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL || profile} />
                    </div>
                  </div>
                  <div>
                    <h2
                      className={`text-lg font-bold  ${
                        location.pathname == "/"
                          ? "text-white"
                          : "text-[#191515]"
                      }`}
                    >
                      {user?.displayName || "Anonymous"}
                    </h2>
                  </div>
                </li>
              )}

              <li
                className={` rounded-sm ${
                  location.pathname == "/"
                    ? "bg-base-200 text-gray-900 "
                    : "bg-gray-800 text-white"
                } ${user ? "" : "mt-16"} `}
              >
                <p className={`flex items-center p-2 space-x-3 rounded-md  `}>
                  <SiReactrouter
                    className={`text-xl  ${
                      location.pathname == "/" ? "text-red-800" : "text-white"
                    } `}
                  />
                  <span>Route</span>
                </p>
              </li>
              {navRoute}

              <div
                className={`${
                  location.pathname == "/" ? "bg-base-200" : "bg-gray-800"
                } w-full inline-flex h-[1px] my-2`}
              ></div>
              <li className="">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className={`flex px-2 py-1 w-fit  relative rounded group overflow-hidden font-medium border-b  
              ${
                location.pathname == "/"
                  ? "border-base-200 text-base-200"
                  : "border-gray-800 text-gray-800"
              }
              `}
                  >
                    <span
                      className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 ${
                        location.pathname == "/" ? "bg-base-200" : "bg-gray-800"
                      } group-hover:h-full opacity-90`}
                    ></span>
                    <span
                      className={`relative ${
                        location.pathname == "/"
                          ? "group-hover:text-gray-800"
                          : "group-hover:text-white"
                      }`}
                    >
                      Logout
                    </span>
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMenu(false)}
                    className={`flex px-2 py-1 w-fit  relative rounded group overflow-hidden font-medium border-b  
              ${
                location.pathname == "/"
                  ? "border-base-200 text-base-200"
                  : "border-gray-800 text-gray-800"
              }
              `}
                  >
                    <span
                      className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 ${
                        location.pathname == "/" ? "bg-base-200" : "bg-gray-800"
                      } group-hover:h-full opacity-90`}
                    ></span>
                    <span
                      className={`relative ${
                        location.pathname == "/"
                          ? "group-hover:text-gray-800"
                          : "group-hover:text-white"
                      }`}
                    >
                      Login
                    </span>
                  </Link>
                )}
              </li>
            </ul>
          </OutsideClickHandler>

          {loading ? (
            <div className="  hidden md:flex items-center gap-1">
              <div
                className="tooltip-bottom tooltip flex items-center"
                data-tip={user?.displayName || "Anonymous"}
              >
                <div className="avatar">
                  <div className="w-8 rounded-full tooltip ">
                    <img src={user?.photoURL || profile} />
                  </div>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className=" hidden md:flex px-2 py-1   relative rounded group overflow-hidden font-medium border border-accent/20 text-accent "
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-accent group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">Logout</span>
              </button>
            </div>
          ) : user ? (
            <div className=" md:flex hidden  items-center gap-1">
              <div
                className=" tooltip-left md:tooltip-bottom tooltip  flex items-center "
                data-tip={user?.displayName || "Anonymous"}
              >
                <div className="avatar">
                  <div className="w-8 rounded-full tooltip  ">
                    <img src={user?.photoURL || profile} />
                  </div>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className=" hidden md:flex px-2 py-1 relative rounded group overflow-hidden font-medium border border-accent/20 text-accent "
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-accent group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">Logout</span>
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className=" md:flex hidden   px-2 py-1 relative rounded group overflow-hidden font-medium border border-accent/20 text-accent inline-block"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-accent group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Login</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
