import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { BackgroundCircles } from "./design/Hero";
import { GradientLight } from "./design/Benefits";

const Mediasign = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
const handelSubmit = async (e) => {
        e.preventDefault();
       
    }
    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    return (
        <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  bg-yellow " >
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-[#c0bfc2]  hover:underline">
                Continue To YouTube
            </h2>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-opacity-50 bg-[#3b3c40] bg-blur-md border-2 border-stone-50 backdrop-filter backdrop-blur-md backdrop-saturate-150 rounded-lg p-6 shadow-2xl z-50">
                <form className="space-y-6 z-40" onSubmit={handelSubmit}>
                    <div className="my -5">
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-100">
                            Enter YouTube Video/Channel ID
                        </label>
                        <div className="mt-2 my-5">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                onChange={onchange}
                                placeholder="Enter your name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-[#000000] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#2e285b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

    Submit
 
</button>

                    </div>
                    <div >
                    <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-[#c0bfc2]  hover:underline">
                Continue To Instagram
            </h2>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-100">
                            Enter Username
                        </label>
                        <div className="mt-2 my-5">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                onChange={onchange}
                                placeholder="Enter your name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>



                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-100">
                           Enter Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            onChange={onchange}
                            placeholder="shhuu....."
                            className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    
                    <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-[#000000] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#2e285b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-3">

    Submit
 
</button>
</div>
                    </div>
                </form>

            </div>
        </div>

        <div className=' mt-28'>
    <BackgroundCircles />
 
</div>

<div className="fixed top-0 left-0 w-full h-full">
<GradientLight />
        </div>
        </>
    )
}

export default Mediasign;

