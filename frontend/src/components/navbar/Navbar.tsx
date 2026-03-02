import React from 'react';
import NimbusLogo from '../../assets/Nimbus.png' 
import SearchBar from './SearchBar';
import SuburbList from './SuburbList';

const Navbar: React.FC = () => {
  return (
    <div className='w-full h-full flex-col items-center'>
        <div className="flex m-2 justify-around items-center h-18 bg-[#4175c0] text-white rounded-xl">
          <div className='w-1/2 h-full flex justify-start items-center'> 
            <img src={NimbusLogo} alt="Nimbus Logo" className="h-20 w-20 mr-2"/> <h1 className="text-2xl font-extralight">Nimbus Weather</h1>
          </div>
          <div className='w-1/2 h-full flex justify-end items-center p-10'>
            <SearchBar/>
          </div>
        </div>
    </div>
  )
}
export default Navbar;
