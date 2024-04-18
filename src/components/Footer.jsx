import { IoBarChart } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaScaleBalanced } from "react-icons/fa6";
import '../index.css'

function Footer() {
    return (
        <div className='bg-black h-[300px] text-gray-200 gotu'>
            <div className="h-[90%] flex flex-col gap-10 justify-center items-center">
                <div className='h-[60px] flex items-center'>
                    <img src="siteLogo.png" alt="logo" className='size-[70px] rounded-l-full rounded-tr-full ml-5' />
                    <div className='text-5xl font-medium font-serif'>Splitz</div>
                </div>
                <div className="text-green-400 cursor-pointer flex gap-14">
                    <div className="flex text-2xl items-center gap-2 hover:text-red-500"><IoBarChart className="text-blue-400" /> About Splitz</div>
                    <div className="flex text-2xl items-center gap-2 hover:text-red-500"><MdOutlineManageAccounts className="text-blue-400" /> About Creator</div>
                </div>
                <div className="flex text-2xl items-center gap-2 text-yellow-500"><FaScaleBalanced className="text-orange-600" /> MIT License</div>
            </div>
            <div className="h-[10%] text-center">Copyright © 2024 ANAND YADAV</div>
        </div>
    )
}

export default Footer