import React from 'react';
import NimbusLogo from '../assets/Nimbus.png' 

const Navbar: React.FC = () => {
  return (
    <div className="flex m-2 justify-around items-center h-20 bg-gray-800 text-white rounded-4xl">
      <img src={NimbusLogo} alt="Nimbus Logo" className="h-24 w-24 mr-4"/>
      <h1 className="text-2xl font-bold">Nimbus Weather</h1>
    </div>
  )
}
export default Navbar;
