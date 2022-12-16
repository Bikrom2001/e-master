import React, { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { FiFolder } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Setting from './Setting';

const Navbar = () => {

    const [open, setOpen] = useState(true);

    return (
        <section className="fixed top-0 bottom-0">
            <div
                className={`bg-[#0e0e0e] min-h-screen ${open ? "w-64" : "w-16"
                    } duration-500 text-gray-100 px-4`}
            >
                <div className="py-2 flex justify-end">
                    <HiMenuAlt3
                        size={26}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">

                    <Link
                        to='/'
                        className="group flex items-center text-sm  gap-3.5 font-medium p-2 rounded-md"
                    >
                        <div>{React.createElement(FaCodepen, { size: "20" })}</div>
                        <h2
                            style={{
                                transitionDelay: `${1 + 2}00ms`,
                            }}
                            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                        >
                        </h2>
                        <h2
                            className={`${open && "hidden"
                                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                        >

                        </h2>
                    </Link>

                    <Link
                        to='/'
                        className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                    >
                        <div>{React.createElement(FaHome, { size: "20" })}</div>
                        <h2
                            style={{
                                transitionDelay: `${1 + 2}00ms`,
                            }}
                            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                        >
                            <h3>Home</h3>
                        </h2>
                        <h2
                            className={`${open && "hidden"
                                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                        >
                            <h3>Home</h3>

                        </h2>
                    </Link>

                    <Link
                        to='/'
                        className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                    >
                        <div>{React.createElement(FaRegBookmark, { size: "20" })}</div>
                        <h2
                            style={{
                                transitionDelay: `${1 + 3}00ms`,
                            }}
                            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                        >
                            <h3>Bookmark</h3>
                        </h2>
                        <h2
                            className={`${open && "hidden"
                                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                        >
                            <h3>Bookmark</h3>

                        </h2>
                    </Link>

                    <Link
                        to='/'
                        className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                    >
                        <div>{React.createElement(FaUserClock, { size: "20" })}</div>
                        <h2
                            style={{
                                transitionDelay: `${1 + 4}00ms`,
                            }}
                            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                        >
                            <h3>User</h3>
                        </h2>
                        <h2
                            className={`${open && "hidden"
                                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                        >
                            <h3>User</h3>

                        </h2>
                    </Link>

                    <Link
                        to='/'
                        className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                    >
                        <div>{React.createElement(TbReportAnalytics, { size: "20" })}</div>
                        <h2
                            style={{
                                transitionDelay: `${1 + 5}00ms`,
                            }}
                            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                        >
                            <h3>Analytics</h3>
                        </h2>
                        <h2
                            className={`${open && "hidden"
                                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                        >
                            <h3>Analytics</h3>

                        </h2>
                    </Link>

                    <Link
                        to='/'
                        className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                    >
                        <div>{React.createElement(FiFolder, { size: "20" })}</div>
                        <h2
                            style={{
                                transitionDelay: `${1 + 6}00ms`,
                            }}
                            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                        >
                            <h3>File Manager</h3>
                        </h2>
                        <h2
                            className={`${open && "hidden"
                                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                        >
                            <h3>File Manager</h3>

                        </h2>
                    </Link>

                    <Link
                        to='/'
                        className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md"
                    >
                        <div className=''>{React.createElement(RiSettings4Line, { size: "20" })}</div>
                        <h2
                            style={{
                                transitionDelay: `${1 + 7}00ms`,
                            }}
                            className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                        >
                            <h3>Setting</h3>
                        </h2>
                        <h2
                            className={`${open && "hidden"
                                } absolute left-44 top-1 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-0 group-hover:py-1 group-hover:left-9 group-hover:duration-300 group-hover:w-fit  `}
                        >
                            <Setting></Setting>

                        </h2>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default Navbar;