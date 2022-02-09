import React from 'react';
import { FiSearch } from 'react-icons/fi';

function SearchBar(props) {
    return (
        <div className='row my-2 sidebar_search d-flex flex-row'>
            <input type="search" className='form form-control rounded' placeholder='Recherche...' />
            <FiSearch size={20}/>
        </div>
    );
}

export default SearchBar;