import React from 'react';
import Navspace from './navbar/Navspace';

const Layout: React.FC = () => {
    return (
    <div className="h-screen w-screen flex flex-col"> 
        <Navspace/>
    </div>
    );
};  

export default Layout;