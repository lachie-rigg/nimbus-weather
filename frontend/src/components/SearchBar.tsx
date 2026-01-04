import React, {useEffect, useState} from 'react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState(""); 
  const [results, setResults] = useState(""); 

  // Updates suburb options based on the users entry in search
  useEffect(() => {
    if (query.length < 2) return; 
    
    const timer = setTimeout(async () => {
      const res = await fetch(`https://australiansuburbs.au/api/lookup_suburb?search=${query}`);
      const data = await res.json();
      setResults(data); 
      console.log(results); 
    }, 500);

    return () => clearTimeout(timer); 
  }, [query]); 

return (
<div className="relative w-1/3">
  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
    🔎
  </span>
  <input
    type="search"
    autoCapitalize='words'
    placeholder="Search your Address, City or Postcode..."
    className="h-8 w-full rounded-full bg-white pl-10 pr-4 text-black focus:outline-none"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
</div>
)    
}

export default SearchBar;
