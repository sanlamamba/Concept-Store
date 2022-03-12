import React from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const MainSlider = () => {
  return (
    <div className="row slider_container">
      <div className="col-12">
        <div id="mainSlider" className="row d-flex flex-row flex-nowrap">
          <SliderChild link="link" image="image" />
        </div>
      </div>
      {/* <div className="col-12">
            <FiArrowLeftCircle
            className="col-4 m-auto"
            size={20}
            width="auto"
            onPress={() => {
                alert("yes");
            }}
            />
            <FiArrowRightCircle className="col-4 m-auto" size={20} />
        </div>
        */}
    </div>
  );
};

const SliderChild = (props) => {
  return (
    <a href={props.link} className="m-1 p-3">
      <img className="rounded" src={props.image} height="350" width="100%" />
    </a>
  );
};

export default MainSlider;
