import React, { useState } from "react";

import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import goa from "../assets/goa.jpg";
import shimla from "../assets/shimla.jpg";
import rishikesh from "../assets/rishikesh.jpg";
import manali from "../assets/manali.jpg";
import mountain4 from "../assets/mountain3.jpg";
import mountain3 from "../assets/mountain4.jpg";

const Destinations = () => {
  const [image, setImage] = useState(false);
  const handleImage = () => {
    setImage(!image);
  };

  return (
    <div
      name="travel"
      className="max-w-[1240px] mx-auto py-16 px-4 text-center"
    >
      <h1>All-Inclusive Hotel and Resorts</h1>
      <p className="py-4">On Some Of Our Most Beautiful Location</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4 select-none">
        <img
          onClick={handleImage}
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 cursor-pointer rounded-lg"
          src={!image ? rishikesh : BoraBora}
          alt="/"
        />
        <img
          className="w-full h-full object-cover hover:scale-105 rounded-lg"
          src={!image? manali:Maldives}
          alt="/"
        />
        <img
          className="w-full h-full object-cover hover:scale-105 rounded-lg"
          src={!image? shimla: Maldives2}
          alt="/"
        />
        <img
          className="w-full h-full object-cover hover:scale-105 rounded-lg"
          src={!image?mountain3: goa}
          alt="/"
        />
        <img
          className="w-full h-full object-cover hover:scale-105 rounded-lg"
          src={!image?mountain4: BoraBora2}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Destinations;
