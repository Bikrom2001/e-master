import React from 'react';
import { RiSettings4Line } from "react-icons/ri";

const SettingIcons = () => {
    return (
        <div>
           <div className='w-10 h-10 cursor-pointer bg-[#4548A9] fixed right-0 top-40 flex justify-center items-center rounded-md text-white'>
           <RiSettings4Line size={25}></RiSettings4Line>
           </div>
        </div>
    );
};

export default SettingIcons;