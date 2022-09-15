import React, { useState } from "react";
import beachVid from "../assets/beachVid.mp4";
import beachVid2 from "../assets/beachVid2.mp4";
import beachVid3 from "../assets/beachVid3.mp4";
import mountain from "../assets/mountain.mp4";
import mountain2 from "../assets/mountain2.mp4";
import Destinations from "../components/Destinations";
import Search from "../components/Search";
import Selects from "../components/Selects";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";

const backgroundVideos = {
  1: mountain,
  // 2:  beachVid ,
  2: mountain2,
  3: beachVid2,
  4: beachVid3,
};

const Home = () => {
  const [background, setBackground] = useState(backgroundVideos[1]);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleBackground = () => {
    setBackground(backgroundVideos[randomNumberInRange(1, 5)]);
  };

  return (
    <div name="home" className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={background}
        autoPlay
        loop
        muted
      />

      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <div className="border-b-8 rounded-sm max-w-3xl mx-auto">
          <h1
            onClick={handleBackground}
            className="cursor-pointer hover:text-black contents select-none"
          >
            Your Next Travel Destination
          </h1>
          <h2 className="py-4">Top Locations You're Looking For</h2>
        </div>
      </div>

      <Destinations />
      <Search />
      <Selects />
      <Carousel />
      <About />
      <Footer />
    </div>
  );
};

export default Home;

// SEARCH FORM
//  <form
//         className="flex justify-between items-center max-w-[600px] mx-auto w-full border p-1
//         rounded-md text-black bg-gray-100/90"
//       >
//         <div>
//           <input
//             className="pl-4 bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none
//                 "
//             type="text"
//             placeholder="Search Destinations"
//           />
//         </div>
//         <div>
//           <button className="hover:scale-105">
//           <AiOutlineSearch
//               size={20}
//               className="icon"
//               style={{ color: "#ffffff" }}
//             />
//           </button>
//         </div>
//       </form>

// ROUTES
{
  /*       
                  <Routes>
                    <Route path="/destination" element={<Destinations/>}/>
                    <Route path="/book" element={<Search/>}/>
                    <Route path="/travel" element={<Selects/>}/>
                    <Route path="/view" element={<Carousel/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/footer" element={<Footer/>}/>
                  </Routes> */
}
