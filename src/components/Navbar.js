import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as Link1, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const [color, setColor] = useState(false);

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const handleLogout = async () => {
    // event.preventDefault();
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  
  return (
    <div
      className={
        color
          ? "bg-gray-900/90 flex w-full fixed justify-between items-center h-20 px-4 z-10 text-white"
          : "flex w-full fixed justify-between items-center h-20 px-4 z-10 text-white"
      }
    >
      <div>
        <h1 className={!nav?"block cursor-pointer":"hidden"}>
          <Link1 to="/">
            {/* <Link to="home" smooth={true} duration={500}> */}
            TRAVELS.
            {/* </Link> */}
          </Link1>
        </h1>
      </div>
      <ul className="hidden lg:flex text-2xl">
        <li className="cursor-pointer hover:text-[#FF2E63]">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer hover:text-[#FF2E63]">
          <Link to="destination" smooth={true} duration={500}>
            Destination
          </Link>
        </li>
        <li className="cursor-pointer hover:text-[#FF2E63]">
          <Link to="travel" smooth={true} duration={500}>
            Travel
          </Link>
        </li>
        <li className="cursor-pointer hover:text-[#FF2E63]">
          <Link to="view" smooth={true} duration={500}>
            View
          </Link>
        </li>
        <li className="cursor-pointer hover:text-[#FF2E63]">
          <Link to="book" smooth={true} duration={500}>
            Book
          </Link>
        </li>
        <li className="cursor-pointer hover:text-[#FF2E63]">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
      </ul>
      {/* <div className="hidden md:flex">
        <BiSearch className="mr-2 w-14 cursor-pointer" size={30} />
         <BsPerson className="mr-10 cursor-pointer" size={40} />
      </div> */}

      {user?.email ? (
        <div className="hidden lg:flex">
          {/* <Link1 to="/booking">
            <button className="mx-2 px-6 cursor-pointer hover:scale-105 ">
              My Bookings
            </button>
          </Link1> */}

          <button onClick={handleLogout} className="mx-2 px-6 cursor-pointer hover:scale-105 ">
            Logout
          </button>
        </div>
      ) : (
        <div className="hidden lg:flex">
          <Link1 to="/login">
            <button className="mx-2 px-6 cursor-pointer hover:scale-105 ">
              SignIn
            </button>
          </Link1>
          <Link1 to="/signup">
            <button className="mx-2 px-6 cursor-pointer hover:scale-105 ">
              SignUp
            </button>
          </Link1>
        </div>
      )}

      
      <div onClick={handleNav} className="lg:hidden text-white z-10">
        {!nav ? <FaBars size={30} /> : <FaTimes  size={40}/>}
      </div>

      

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute text-white left-0 top-0 w-full bg-gray-900/90 px-4 py-7 flex flex-col"
        }
      >
        <Link1 onClick={handleNav} to="/">
          <h1 >TRAVELS.</h1>
        </Link1>
        <li className="border-b mt-3 cursor-pointer">
          <Link onClick={handleNav} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b cursor-pointer">
          <Link
            onClick={handleNav}
            to="destination"
            smooth={true}
            duration={500}
          >
            Destination
          </Link>
        </li>
        <li className="border-b cursor-pointer">
          <Link onClick={handleNav} to="travel" smooth={true} duration={500}>
            Travel
          </Link>
        </li>
        <li className="border-b cursor-pointer">
          <Link onClick={handleNav} to="view" smooth={true} duration={500}>
            View
          </Link>
        </li>
        <li className="border-b cursor-pointer">
          <Link onClick={handleNav} to="book" smooth={true} duration={500}>
            Book
          </Link>
        </li>
        <li className=" mb-4 border-b cursor-pointer">
          <Link onClick={handleNav} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        {user?.email ? (
        <div className="flex justify-around">
          {/* <Link1 onClick={handleNav} to="/booking">
            <button className="px-16 cursor-pointer ">
              My Bookings
            </button>
          </Link1> */}
          <Link1 onClick={handleNav} to='/'>
          <button onClick={handleLogout} className="px-16 cursor-pointer ">
            Logout
          </button>
          </Link1>
        </div>
      ) : (
        <div className="flex justify-around">
          <Link1 onClick={handleNav} to="/login">
            <button className="px-20 cursor-pointer ">
              SignIn
            </button>
          </Link1>
          <Link1 onClick={handleNav} to="/signup">
            <button className="px-20 cursor-pointer ">
              SignUp
            </button>
          </Link1>
        </div>
      )}
      </ul>
    </div>
  );
};

export default Navbar;


// <div className="flex justify-around">
//           <Link1 to="/login">
//             <button className="px-16 cursor-pointer">SignIn</button>
//           </Link1>
//           <Link1 to="/signup">
//             <button className="px-16 cursor-pointer">SignUp</button>
//           </Link1>
//         </div>
