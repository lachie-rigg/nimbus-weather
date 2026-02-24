import React from "react";
import type { Suburb } from "../types/Suburb";

const SuburbList: React.FC<{suburbs: Suburb[]}> = ({suburbs}) => {
return (
    <div className="border-black border-2 w-100 h-40 rounded-2xl">
        <ul>
            {suburbs.map((suburb, index) => (
                <li key={index} className="border-b-2 border-gray-300 p-2">
                    {suburb.name}, {suburb.state} {suburb.postcode}
                </li>
            ))}
        </ul> 
    </div>
)};

export default SuburbList; 