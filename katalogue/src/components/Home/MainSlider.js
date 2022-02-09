import React, {useState} from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

const sliders = [
    {
        "link":"#",
        "image":""
    }
]

const MainSlider = () => {
    let [sliderPosition, setSliderPosition]= useState(0);

    const sliderStyle= {
        imageCont:{
            transform:"translatex(-"+sliderPosition*100+"%)"
        }
    }
    // const sliderInteval = setTim(()=>{
    //     alert("Yes")
    //     if(sliderPosition >= sliders.length)return setSliderPosition(sliderPosition=0)
    //     return setSliderPosition(sliderPosition +=1 )        
    // },5000)
    return (
        <div className='row slider_container'>
            <div className='col-12'>
                <div style={sliderStyle.imageCont} className='row d-flex flex-row flex-nowrap'>
                    <SliderChild link='#' image="null" />
                    <SliderChild link='#' image="null" />
                    <SliderChild link='#' image="null" />
                    
                </div>
            </div>
            <div className='col-12'>
                <FiArrowLeftCircle className='col-4 m-auto' size={20} width="auto" onPress={()=>{
                    alert("yes")
                }} />
                <FiArrowRightCircle className='col-4 m-auto' size={20} />
    
            </div>
            
        </div>
        
    );
};

const SliderChild = props =>{
    return (
        <a href={props.link} className='m-1 p-3'>
            <img className="rounded" src={props.image} height='350' width='100%'/>
        </a>
    )
}

export default MainSlider;