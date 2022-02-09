import React from 'react';

const PriceFilter = () => {
    return (
        <div className='row py-1'>
            <input type='number' className='col-5 p-2 rounded m-2 border' placeholder='min' />
            <input type='number' className='col-5 p-2 rounded m-2 border' placeholder='max' />
        </div>
    );
};

export default PriceFilter;