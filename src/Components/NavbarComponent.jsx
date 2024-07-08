import { useTranslation } from "react-i18next";
import useFontClass from "../common/useFontClass";
import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { LanguageDropdown } from "../common/LanguageDropdown";
import { useState } from "react";

export default function NavbarComponent() {
  const { t } = useTranslation();
  const { fontClass } = useFontClass();
  const [isOpen, setIsOpen] = useState(false);

  const menuList = [
    { path: "/", title: t("navbar.home") },
    { path: "/jobs", title: t("navbar.jobs") },
    { path: "/media", title: t("navbar.media") },
    { path: "/about-us", title: t("navbar.about-us") },
    { path: "/contact-us", title: t("navbar.contact-us") },
  ];

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar fluid className="bg-primary-800 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-4">
        <Navbar.Brand href="/" className="flex items-center">
          <img
            alt="Logo"
            loading="lazy"
            width="100"
            height="100"
            decoding="async"
            data-nimg="1"
            className="mr-3 w-9 h-9 object-contain"
            src="https://surveybox.istad.co/surveybox-logo.png"
          />
          <span className="self-center font-extrabold whitespace-nowrap text-md sm:text-xl uppercase text-secondary-300 dark:text-blue-600">
            Job Finder
          </span>
        </Navbar.Brand>

        <div className="flex flex-grow justify-center order-2 md:order-1 w-full md:w-auto">
          <Navbar.Collapse className={`flex justify-center space-x-4 ${isOpen ? 'block' : 'hidden'} md:flex`}>
            {menuList.map((menu, index) => (
              <NavLink
                to={menu.path}
                className={({ isActive }) =>
                  isActive
                    ? `${fontClass} text-lg font-medium text-white`
                    : `${fontClass} font-medium text-lg text-gray-300`
                }
                key={index}
                onClick={() => setIsOpen(false)}
              >
                {menu.title}
              </NavLink>
            ))}
          </Navbar.Collapse>
        </div>

        <div className="relative flex order-1 md:order-2 gap-x-6 items-center">
          <LanguageDropdown fontClass={fontClass} />

          <NavLink to="/login">
            <button
              type="button"
              className="group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 focus:outline-none text-white bg-primary-900 hover:bg-primary-850 focus:ring-primary-650 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-full focus:ring-2"
            >
              <span className="flex items-stretch transition-all duration-200 rounded-md text-sm px-4 py-2">
                <span className="lg:px-3 uppercase flex gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="h-5 w-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M192 176v-40a40 40 0 0140-40h160a40 40 0 0140 40v240a40 40 0 01-40 40H240c-22.09 0-48-17.91-48-40v-40"
                    ></path>
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M288 336l80-80-80-80M80 256h272"
                    ></path>
                  </svg>
                  <span className={`${fontClass} hidden lg:inline font-medium`}>
                    {t("auth.login")}
                  </span>
                </span>
              </span>
            </button>
          </NavLink>

          <NavLink to="/register">
            <button
              type="button"
              className="group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 focus:outline-none text-white bg-primary-900 hover:bg-primary-850 focus:ring-primary-650 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-full focus:ring-2"
            >
              <span className="flex items-stretch transition-all duration-200 rounded-md text-sm px-4 py-2">
                <span className="lg:px-3 uppercase flex gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    className="h-5 w-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                  </svg>
                  <span className={`${fontClass} hidden lg:inline font-medium`}>
                    {t("auth.register")}
                  </span>
                </span>
              </span>
            </button>
          </NavLink>

          <button
            onClick={toggleNavbar}
            className="md:hidden ml-3 p-2 text-white bg-primary-900 hover:bg-primary-850 focus:ring-primary-650 rounded-lg focus:ring-2"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </Navbar>
  );
}
