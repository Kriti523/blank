import React,{ Link } from "react-router-dom";
import clown from "../Images/Screenshot__521_-ai-brush-removebg-mqi3w5y8.png";

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl ="#"
}){
    return(
        <div className="flex flex-col justify-center align-middle h-screen mt-[-300px]">
            <div className=" ">
                <img 
                alt=" "
                src={clown}
                className="h-100 w-100"
                />
            </div>
            <div className=" flex flex-col justify-center items-center">
                <h2 className="mt-[-25px] text-centre flex justify-c text-3xl font-extrabold text-grey-900">
                    {heading}
                </h2>
                <p className="gap-2 mt-2 text-center flex justify-c text-sm text-gray-600">
                    {paragraph}{' '}
                <Link to={linkUrl} className="font-medium text-orange-600 hover:text-gray-700">
                    {linkName}
                </Link>
                </p>
            </div>
        </div>
    )
}