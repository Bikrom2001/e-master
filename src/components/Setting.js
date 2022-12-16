import React from 'react';
import { FaUserClock } from "react-icons/fa";

const Setting = () => {
    return (
        <div>
            <div className="h-screen rounded-md relative left-0 top-1 p-4 space-y-2 w-80 lg:w-[340px] dark:bg-[#6465F1] dark:text-gray-100">
                <h2 className='text-left mb-4 pl-4 text-lg font-semibold'>Settings</h2>
                <div class="flex w-72 p-4 rounded-md items-start gap-3 hover:bg-[#4548A9]">
                    <div>
                        <FaUserClock size={22}></FaUserClock>
                    </div>
                    <div className='text-left'>
                        <h1 className='text-lg mb-1'>Account</h1>
                        <p className='text-justify w-72'>Lorem ipsum dolor sit <br />amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="flex w-72 p-4 rounded-md items-start gap-3 hover:bg-[#4548A9]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                        </svg>

                    </div>
                    <div className='text-left'>
                        <h1 className='text-lg mb-1'>Inbox</h1>
                        <p className='text-justify w-72'>Lorem ipsum dolor sit <br />amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="flex w-72 p-4 rounded-md items-start gap-3 hover:bg-[#4548A9]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                        </svg>
                    </div>
                    <div className='text-left'>
                        <h1 className='text-lg mb-1'>Sales</h1>
                        <p className='text-justify w-72'>Lorem ipsum dolor sit <br />amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="flex w-72 p-4 rounded-md items-start gap-3 hover:bg-[#4548A9]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>

                    </div>
                    <div className='text-left'>
                        <h1 className='text-lg mb-1'>Privacy</h1>
                        <p className='text-justify w-72'>Lorem ipsum dolor sit <br />amet consectetur adipisicing elit.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Setting;