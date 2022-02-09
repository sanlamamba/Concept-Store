import React from 'react';
import { Link } from 'react-router-dom';

function SearchResult(props) {
    return (
        <Link to='#' className='row hover bg-light text-black p-2 border '>
            <img className='col-4' src={props.image} height="auto" />
            <div className='col-8 pt-1'>
                <h6 className='row'>{props.title}</h6>
                <p className='row px-1 text-muted text-start search_result_desc'>{props.description}</p>
            </div>
        </Link>
    );
}

export default SearchResult;