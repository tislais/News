import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchTerm, onChange, onSubmit }) => {
  return (  
    <nav className="p-6 bg-indigo-400">
      <form onSubmit={onSubmit}>
        <label htmlFor="searchTerm" 
          className="text-white font-semibold">Search</label>
        <input 
          className="ml-3 rounded-sm p-2" 
          id="searchTerm" 
          type="text" 
          name="searchTerm"
          value={searchTerm}
          onChange={onChange} />
      </form>
    </nav>
  );
};

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Search;
