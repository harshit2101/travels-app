import React from 'react'
import { RiCustomerService2Full, RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";


const About = () => {
  return (
    <div name="about"
    className="max-w-[1240px] mx-auto py-16 px-4 mt-10 text-center flex justify-center">
        <div className="flex flex-col max-w-4xl justify-center items-center">
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
        <div className="grid sm:grid-cols-2 gap-8 py-4 my-16">
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
      </div>
    </div>
  )
}

export default About