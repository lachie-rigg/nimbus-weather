import React from 'react';
import NimbusLogo from '../assets/Nimbus.png' 
import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
  return (
    <div className="flex m-2 justify-around items-center h-18 bg-[#4175c0] text-white rounded-xl">
      <div className='w-1/2 h-full flex justify-start items-center'>
        <img src={NimbusLogo} alt="Nimbus Logo" className="h-20 w-20 mr-2"/>
        <h1 className="text-2xl font-extralight">Nimbus Weather</h1>
      </div>
      <SearchBar/>
    </div>
  )
}
export default Navbar;
