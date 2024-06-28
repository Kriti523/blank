import React from 'react';
import clown from '../Images/Screenshot__521_-ai-brush-removebg-mqi3w5y8.png';

// Welcome component
export default function Welcome({ loginData }) {
    console.log('signupState', loginData);

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div>
                <img 
                    alt="Clown"
                    src={clown}
                    className="mt-[-200px] animate-bounce object-cover h-100 w-100"
                />
            </div>
            <div className='flex flex-col items-center mt-[-25px]'>
                <h1 className="text-center text-2xl font-extrabold text-slate-500">
                    Heyyaaaaa!!!
                </h1>
                <h1 className='font-extrabold text-orange-500 text-3xl mt-3'>
                    {loginData?.username}
                </h1>
                <h1 className='mt-3 text-center text-3xl font-semibold text-gray-800'>
                    You are logged in :D 
                </h1>
            </div>
        </div>
    );
}
