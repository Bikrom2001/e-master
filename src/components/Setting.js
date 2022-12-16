import React from 'react';
import { FaUserClock } from "react-icons/fa";

const Setting = () => {
    return (
        <div>
            <div className="h-full rounded-md relative left-0 top-1 p-4 space-y-2 w-80 lg:w-96 dark:bg-[#6465F1] dark:text-gray-100">
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
                        <FaUserClock size={22}></FaUserClock>
                    </div>

                    <div className='text-left'>
                        <h1 className='text-lg mb-1'>Account</h1>
                        <p className='text-justify w-72'>Lorem ipsum dolor sit <br />amet consectetur adipisicing elit.</p>
                    </div>


                </div>
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
                        <FaUserClock size={22}></FaUserClock>
                    </div>

                    <div className='text-left'>
                        <h1 className='text-lg mb-1'>Account</h1>
                        <p className='text-justify w-72'>Lorem ipsum dolor sit <br />amet consectetur adipisicing elit.</p>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Setting;