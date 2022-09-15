import React from 'react'

import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import Maldives3 from '../assets/maldives3.jpg';
import KeyWest from '../assets/keywest.jpg';
import goa from '../assets/goa.jpg';
import shimla from '../assets/shimla.jpg';
import rishikesh from '../assets/rishikesh.jpg';
import manali from '../assets/manali.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div name="view" className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 select-none'>

    <SelectsCard bg={BoraBora} text='Bora Bora' />
    <SelectsCard bg={BoraBora2} text='Maldives' />
    <SelectsCard bg={goa} text='Goa' />
    <SelectsCard bg={manali} text='Manali' />
    <SelectsCard bg={shimla} text='Shimla' />
    <SelectsCard bg={rishikesh} text='Rishikesh' />
    
        
    </div>
  )
}

export default Selects