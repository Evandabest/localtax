import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet'
import { FaHome, FaUpload, FaComments, FaList } from 'react-icons/fa';
import '../assets/deepseek.png' 
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <>
        <Sheet>
            <SheetTrigger className="">
                <img className="w-12 rounded-full" src="../assets/deepseek.png"/>
            </SheetTrigger>
            <SheetContent className="w-36" side="left">
                <SheetTrigger className="mt-0">
                    <img className="w-12 rounded-full" src="../assets/deepseek.png"/>
                </SheetTrigger>
                <div className="flex flex-col items-center mt-12 gap-y-10">
                    <SheetTrigger>
                        <button 
                            onClick={() => {navigate("/home")}}
                            className="flex items-center gap-2 transition-colors hover:text-blue-500"
                        >
                            <FaHome className="text-xl" />
                            Home
                        </button>
                    </SheetTrigger>
                    <SheetTrigger>
                        <button 
                            onClick={() => {navigate("/view")}}
                            className="flex items-center gap-2 transition-colors hover:text-blue-500"
                        >
                            <FaList className="text-xl" />
                            View
                        </button>
                    </SheetTrigger>
                    <SheetTrigger>
                        <button 
                            onClick={() => {navigate("/upload")}}
                            className="flex items-center gap-2 transition-colors hover:text-blue-500"
                        >
                            <FaUpload className="text-xl" />
                            Upload
                        </button>
                    </SheetTrigger>
                    <SheetTrigger>
                        <button 
                            onClick={() => {navigate("/chat")}}
                            className="flex items-center gap-2 transition-colors hover:text-blue-500"
                        >
                            <FaComments className="text-xl" />
                            Chat
                        </button>
                    </SheetTrigger>
                </div>
            </SheetContent>
        </Sheet>
        </>
    )
}

export default NavBar;