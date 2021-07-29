import React from 'react';

const Search = ({ searchTerm, onChange }) => {
  console.log();
  return <nav className="p-6 bg-indigo-400">
    <label htmlFor="searchTerm" 
      className="text-white font-semibold">Search</label>
    <input 
      className="ml-3 rounded-sm p-2" 
      id="searchTerm" 
      type="text" 
      name="searchTerm"
      value={searchTerm}
      onChange={onChange} />
    <p>You typed... {searchTerm}</p>
  </nav>;
};


export default Search;
