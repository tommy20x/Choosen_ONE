import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
function Header() {
  const [currentNav, setCurrentNav] = useState("");
  const [menu, setMenu] = useState(false);
  const currentPath = useLocation();

  useEffect(() => {
    setCurrentNav(currentPath.pathname);
  }, [currentPath]);

  return (
    <div className="dark:bg-black  dark:text-slate-50 min-h-screen bg-[url('http://localhost:3000/images/co-bg.png')]">
      <header className="flex py-4  md:items-center  md:w-5/6 md:pt-8">
        <button
          className="px-8 md:hidden"
          onClick={() => setMenu(!menu)}
        >
          ⇉
        </button>
        <img
          src={
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? `images/choosen-ones-dark-logo.png`
              : `images/choosen-ones-logo.png`
          }
          alt="Choosen ones logo"
          width={visualViewport.width < 700 ? 200 : 300}
          className="md:ml-"
        />
        <div className="flex justify-center w-full">
          <nav className="hidden md:block">
            <ul className="flex font-semibold text-2xl">
              <li className="mx-14 ">
                <Link to="/">
                  <div className="parent">
                    <span> HOME</span>
                    <div
                      className={`child rounded transition-all h-1 w-0  bg-red-600 ${
                        currentNav === "/" ? "w-1/2" : "w-0"
                      }`}
                    ></div>
                  </div>
                </Link>
              </li>
              <li className="mx-14 ">
                <Link to="/utility">
                  {" "}
                  <div className="parent">
                    <span> UTILITY</span>
                    <div
                      className={`child rounded transition-all h-1 w-0  bg-red-600 ${
                        currentNav === "/utility" ? "w-1/2" : "w-0"
                      }`}
                    ></div>
                  </div>
                </Link>
              </li>
              <li className="mx-14 ">
                <Link to="/roadmap">
                  {" "}
                  <div className="parent">
                    <span> ROADMAP</span>
                    <div
                      className={`child rounded transition-all h-1 w-0  bg-red-600 ${
                        currentNav === "/roadmap" ? "w-1/2" : "w-0"
                      }`}
                    ></div>
                  </div>
                </Link>
              </li>
              <li className="mx-14 ">
                <Link to="/team">
                  {" "}
                  <div className="parent">
                    <span> TEAM</span>
                    <div
                      className={`child rounded transition-all h-1 w-0  bg-red-600 ${
                        currentNav === "/team" ? "w-1/2" : "w-0"
                      }`}
                    ></div>
                  </div>
                </Link>
              </li>
              <li className="mx-14 ">
                <Link to="/about">
                  {" "}
                  <div className="parent">
                    <span> ABOUT</span>
                    <div
                      className={`child rounded transition-all h-1 w-0  bg-red-600 ${
                        currentNav === "/about" ? "w-1/2" : "w-0"
                      }`}
                    ></div>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div
        className={`transition-all absolute h-screen z-50 flex sm:hidden ${
          menu ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col  font-semibold text-2xl">
          <li className="mx-14 ">
            <Link to="/">
              <div className="parent">
                <span> HOME</span>
                <div
                  className={`child rounded transition-all h-1 w-0  bg-red-600 ${
                    currentNav === "/" ? "w-1/2" : "w-0"
                  }`}
                ></div>
              </div>
            </Link>
          </li>
          <li className="mx-14 mt-4">
            <Link to="/utility">
              <div className="parent">
                <span> UTILITY</span>
                <div
                  className={`child rounded transition-all h-1 w-0  bg-red-600 ${
                    currentNav === "/utility" ? "w-1/2" : "w-0"
                  }`}
                ></div>
              </div>
            </Link>
          </li>
          <li className="mx-14 mt-4">
            <Link to="/roadmap">
              <div className="parent">
                <span> ROADMAP</span>
                <div
                  className={`child rounded transition-all h-1 w-0  bg-red-600 ${
                    currentNav === "/roadmap" ? "w-1/2" : "w-0"
                  }`}
                ></div>
              </div>
            </Link>
          </li>
          <li className="mx-14 mt-4">
            <Link to="/team">
              <div className="parent">
                <span> TEAM</span>
                <div
                  className={`child rounded transition-all h-1 w-0  bg-red-600 ${
                    currentNav === "/team" ? "w-1/2" : "w-0"
                  }`}
                ></div>
              </div>
            </Link>
          </li>
          <li className="mx-14 mt-4">
            <Link to="/about">
              <div className="parent">
                <span> ABOUT</span>
                <div
                  className={`child rounded transition-all h-1 w-0  bg-red-600 ${
                    currentNav === "/about" ? "w-1/2" : "w-0"
                  }`}
                ></div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${menu ? "opacity-5" : "opacity-100"} transition-all`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Header;
