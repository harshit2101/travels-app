import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiCustomerService2Full, RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import KeyWest from "../assets/keywest.jpg";
import goa from "../assets/goa.jpg";
import shimla from "../assets/shimla.jpg";
import rishikesh from "../assets/rishikesh.jpg";
import manali from "../assets/manali.jpg";

const Search = () => {
  const [image, setImage] = useState("Manali");

  const handleImage = (event) => {
    setImage(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div
      name="book"
      className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-[80px] px-4 py-16 select-none"
    >
      <div className="lg:col-span-2 flex flex-col w-full h-full object-cover">
        <img src={manali} className='rounded-md' alt="" />
      </div>

      <div className="flex flex-col justify-center items-center ">
        <div>
          <form className="w-[400px] border rounded-md bg-gray-800">
            <div>
              <input
                className="pl-4 py-3 bg-transparent w-[400px] sm:w-[400px] font-[Poppins] focus:outline-none"
                type="text"
                placeholder="Search Your Destinations..."
              />
            </div>
          </form>
          <div>
            <button className="hover:scale-105 w-[400px] flex justify-center items-center mt-2 mb-6">
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#ffffff" }}
              />
              <span className="ml-1">Search</span>
            </button>
          </div>
        </div>

        <form className="w-[400px]">
          <div className="flex flex-col my-2">
            <label>
              Destinations <span className="text-blue-700">(Recommended)</span>
            </label>
            <select onChange={handleImage} className="border rounded-md p-2">
              <option>Manali</option>
              <option>Shimla</option>
              <option>Rishikesh</option>
              <option>Goa</option>
              <option>Maldives</option>
              <option>Bora Bora</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-In</label>
            <input className="border rounded-md p-2 select-none" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2 select-none" type="date" />
          </div>
          <button className="w-full my-4 hover:scale-105">
            Hotel & Resorts
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;

{
  /* <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className="py-4">
            Come experience the very pinnacle of luxury travel all-inclusive
            vacations for couples at TRAVELS Hotel and Resorts. Our luxury beach
            resorts, set along the most gorgeous tropical settings and exquisite
            beaches in Goa, Borabora, Maldives and more. Our mountain package
            includes some of the luxurious and very peaceful places like
            Rishikesh, Manali, Shimla and more. We feature unlimited gourmet
            dining, unique bars serving premium liquors and wines, and every
            land and water sport, including complimentary green fees at our golf
            resorts and certified scuba diving at most resorts and paragliding
            in the mountain ranges. If you are planning a wedding, TRAVELS is
            the leader in travel destination weddings and honeymoon packages.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
          <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICES</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
            <h3 className="py-2">LEADING SUPPORT</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
        </div>
      </div> */
}

{
  /* <div className="border text-center bg-blue-100">
              <p className="pt-3">Get an Additional 10% discount</p>
              <p className="py-4">12 hours left</p>
              <p className="bg-gray-900 text-gray-100 py-2 cursor-pointer hover:scale-105">
                Hurry! and Book Now
              </p>
            </div> */
}
