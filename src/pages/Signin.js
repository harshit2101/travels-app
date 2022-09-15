import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../assets/signup.jpg";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error, setError]=useState('')
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('')
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      // console.log(error);
      setError(error.message)
    }
  };

  return (
    <div className=" w-full h-screen bg-zinc-900/90">
      <img
        className="hidden sm:block absolute w-full h-full object-cover mix-blend-overlay"
        src={login}
        alt="/"
      />

      <div className="flex justify-center items-center h-full">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-slate-200/90 p-8"
        >
          <h2 className="text-4xl font-bold text-center py-4 border-b-2">
            Sign In.
          </h2>
          {error?<p className="text-red-700">Enter the valid credentials</p>:null}

          <div className="flex flex-col my-4">
            <label className="font-bold">Email</label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              className="border relative bg-gray-100 p-2"
              type="text"
              placeholder="Enter Email"
            />
          </div>
          <div className="flex flex-col ">
            <label className="font-bold">Password</label>
            <input
              onChange={(event) => setPassword(event.target.value)}
              className="border relative bg-gray-100 p-2"
              type="password"
              placeholder="Enter Password"
            />
          </div>

          <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white">
            Sign In
          </button>

          <div className="flex justify-between items-center relative mt-2 text-sm text-black">
            <p>
              <input className="mr-2" type="checkbox" />
              Remember me
            </p>
            <p>Forgot Password?</p>
          </div>
          <p className="py-8 relative">
            <span className="text-black">Not a member of TRAVELS?</span>{" "}
            <Link to="/signup">
              <span className="font-bold text-blue-700">Sign Up</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;

// <div className='w-full h-screen'>
//       <img
//         className='hidden sm:block absolute w-full h-full object-cover'
//         src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
//         alt='/'
//       />
//       <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
//       <div className='fixed w-full px-4 py-24 z-50'>
//         <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
//           <div className='max-w-[320px] mx-auto py-16'>
//             <h1 className='text-3xl font-bold'>Sign In</h1>
//             {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
//             <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
//               <input
//                 onChange={(e) => setEmail(e.target.value)}
//                 className='p-3 my-2 bg-gray-700 rouded'
//                 type='email'
//                 placeholder='Email'
//                 autoComplete='email'
//               />
//               <input
//                 onChange={(e) => setPassword(e.target.value)}
//                 className='p-3 my-2 bg-gray-700 rouded'
//                 type='password'
//                 placeholder='Password'
//                 autoComplete='current-password'
//               />
//               <button className='bg-red-600 py-3 my-6 rounded font-bold'>
//                 Sign In
//               </button>
//               <div className='flex justify-between items-center text-sm text-gray-600'>
//                 <p>
//                   <input className='mr-2' type='checkbox' />
//                   Remember me
//                 </p>
//                 <p>Need Help?</p>
//               </div>
//               <p className='py-8'>
//                 <span className='text-gray-600'>New to Netflix?</span>{' '}
//                 <Link to='/signup'>Sign Up</Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
