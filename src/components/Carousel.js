import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const sliderData = [
  {
    url: 'https://images.unsplash.com/photo-1593181629936-11c609b8db9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;
  // console.log(length)

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div name="destination" className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center itmes-center select-none'>
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className='absolute top-[50%] text-5xl text-white lg:text-black cursor-pointer left-8 hover:scale-110 select-none'
      />
      <BsArrowRightCircleFill
        onClick={nextSlide}
        // size={40}
        className='absolute top-[50%] text-5xl text-white lg:text-black cursor-pointer right-8  hover:scale-110 select-none'
      />
      {sliderData.map((item, index) => (
        <div key={index} className={index === slide ? 'opacity-100 lg:transition lg:duration-1000 lg:scale-110' : 'opacity-0 lg:transition lg:duration-1000 lg:ease-in-out'}>
          {index === slide && (
            <img className='w-full h-[500px] lg:w-[800px] lg:h-[550px] rounded-md' src={item.url} alt='travel image' />
          )}
          
        </div>
      ))}
    </div>
  );
};

export default Carousel;

// <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center itmes-center'>
//       <BsArrowLeftSquareFill
//         onClick={prevSlide}
//         className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'
//       />
//       <BsArrowRightSquareFill
//         onClick={nextSlide}
//         className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'
//       />
//       {sliderData.map((item, index) => (
//         <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
//           {index === slide && (
//             <img className='w-full rounded-md' src={item.url} alt='/' />
//           )}
//         </div>
//       ))}
//     </div>