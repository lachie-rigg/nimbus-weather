import React, { useEffect, useState } from "react";
import SuburbList from "./SuburbList";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");

  // Function to call backend API to retrieve suburbs list for every 
  // change in character after at least 3 characters entered. 
  // TODO: Implement logic to extract suburb info from postcode 

  const getSuburbs = (postcode: Number) => { 
    // Call backend API 

    // Creates a list to render for the user
  }

  useEffect(() => {
    if (query.length >= 3) {
      // Call getSuburbs with postcode when query length is sufficient
      
    }
  }, [query]);

  

  return (
      <div className="relative w-1/3">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">  
            🔎 
          </span>
          <input
            type="search"
            name="suburbSearch"
            autoCapitalize="words"
            placeholder="Search your Address, City or Postcode..."
            className="h-8 w-full rounded-full bg-white pl-10 pr-4 text-black focus:outline-none"
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
          />
      </div>
  );
};

export default SearchBar;

