import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { BackgroundCircles } from "./design/Hero";
import { GradientLight } from "./design/Benefits";





const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();

    const handelSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
            })
        });
        const json = await response.json();
        console.log(json);
    
        if (json.success) {
          //save the auth token and redirect
          localStorage.setItem('token', json.authtoken);
          navigate("/mediasign");
        }
        else {
          alert("Invalid credentials");
          toast.error("Logged in  failed! ");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <>
       
        <div className="flex min-h-screen flex-1 flex-col  px-6 py-12 lg:px-8  ">
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-[#dbd1e3]  hover:underline">
                Login
            </h2>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-opacity-50 bg-[#3b3c40] bg-blur-md border-2 border-stone-50 backdrop-filter backdrop-blur-md backdrop-saturate-150 rounded-lg p-6 shadow-2xl z-50">
                <form className="space-y-6" onSubmit={handelSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-100">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                onChange={onChange}
                                required
                                placeholder="Enter your email address"
                                className="block w-full  rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-100">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                onChange={onChange}
                                placeholder="shhuu.....🤫"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-[#000000] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#2e285b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

Login

</button>
      
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
    );
}

export default Login;