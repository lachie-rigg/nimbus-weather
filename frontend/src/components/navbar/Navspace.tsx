import React, {useState} from "react";
import Navbar from "./Navbar";
import SuburbList from "./SuburbList";

const Navspace: React.FC = () => {
    const [suburbs, setSuburbs] = useState([]);

   return (
    <div className="h-1/3 bg-black w-full">
        <Navbar/>
        {suburbs.length > 0 ? <SuburbList suburbs={suburbs}/> : <></>}
</div>
    );
}

export default Navspace;