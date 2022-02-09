import React from 'react';

const BrandFilter = () => {
    return (
        <div className='d-flex flex-wrap'>
            
            <SoloBrand title='iPhone' />
            <SoloBrand title='iMac' />
            <SoloBrand title='airPods' />
            <SoloBrand title='iPhone' />
            <SoloBrand title='iPhone' />
        </div>
    );
};
const SoloBrand = props=>{
    return(
        <button className='bg bg-white text-muted fs-6 m-1 px-3 rounded border'> {props.title}</button>

    )
}
export default BrandFilter;