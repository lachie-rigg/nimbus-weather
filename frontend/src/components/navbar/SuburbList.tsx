import React from "react";
import type { Suburb } from "../../types/Suburb";

const SuburbList: React.FC<{suburbs: Suburb[]}> = ({suburbs}) => {
return (
    <div className="h-40 w-1/3 border-2 border-black rounded-4xl">
        <ul className="mt-4 px-4">
            {suburbs.map((suburb) => (
                <li key={suburb.name} className="text-lg mb-2 border-b-2 border-gray-300">
                    {suburb.name}
                </li>
            ))}
        </ul>

    </div>
)};

export default SuburbList; 