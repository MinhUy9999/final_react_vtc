import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { user } = useSelector((state) => state.userSlice);
  // console.log(user)
  const classNameUl =
    ' md:bg-[white] sm:bg-[white] flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ';
  let classNameNav =
    'block py-2 px-3 rounded md:bg-transparent hover:text-primary md:p-0';
  const checkActive = ({ isActive }) => {
    return `${classNameNav} ${isActive ? 'text-primary' : 'text-[black]'}`;
  };
  return (
    <header className="opacity-75">
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/"
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* Logo header */}
            <img
              src="/logo.svg"
              className="h-8 rounded-lg"
              alt=""
            />
           
          </NavLink>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className={classNameUl}>
              <li>
                <NavLink to="/" className={checkActive}>
                <i className="fa-regular fa-house"></i> Home
                </NavLink>
              </li>
              <li>
                <NavLink to={'/booking'} className={checkActive}>
                <i className="fa-regular fa-loveseat"></i> Booking
                </NavLink>
              </li>
             
              <li>
                <NavLink to={'/admin'} className={checkActive}>
                <i className="fa-regular fa-loveseat"></i> To Admin
                </NavLink>
              </li>
              <li>
                <NavLink to={'/login-register'} className={checkActive}>
                <i className="fa-regular fa-loveseat"></i>login
                </NavLink>
              </li>

              {user ? (
               
                <li>{user.hoTen}</li>
                
              ) : (
               
                <li>
                  <NavLink to="/login-register" className={checkActive}>
                  <i class="fa-regular fa-right-to-bracket"></i> Login - Register
                  </NavLink>
                </li>
              )}
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 hover:text-primary  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto "
                >
                 <i className="fa-regular fa-list-dropdown block mr-2"></i> {' '} Dropdown
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 "
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 "
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 "
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
