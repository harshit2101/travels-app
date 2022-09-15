import { async } from "@firebase/util";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import login from "../assets/signup.jpg";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate=useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div className="w-full h-screen bg-zinc-900/90">
      <img
        className="sm:block absolute w-full h-full object-cover mix-blend-overlay"
        src={login}
        alt="/"
      />

      <div className="flex justify-center items-center h-full">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-slate-200/90 p-8"
        >
          <h2 className="text-4xl font-bold text-center py-4 border-b-2">
            Sign Up.
          </h2>

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
          {/* <Link to> */}
          <button className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white">
            Sign Up
          </button>
          {/* </Link> */}
          <div className="flex justify-between items-center relative mt-2 text-sm text-black">
            <p>
              <input className="mr-2" type="checkbox" />
              Remember me
            </p>
            <p>Forgot Password?</p>
          </div>
          <p className="py-8 relative">
            <span className="text-black">Already a member of TRAVELS?</span>{" "}
            <Link to="/login">
              <span className="font-bold text-blue-700">Sign In</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
