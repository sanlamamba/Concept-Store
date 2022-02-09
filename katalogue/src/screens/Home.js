import React from "react";
import MainSlider from "../components/Home/MainSlider";
import ProductCategories from "../components/sub-components/ProductCategories";
import ProductGrids from "../components/sub-components/ProductGrids";
import ProductThumbnails from "../components/sub-components/ProductThumbnails";

const Home = (props) => {
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-12 ">
          <MainSlider />
        </div>
      </div>

      <div className="row my-4">
        <div className="col-12 ">
          <h4 className="row">
            <span className="col-3 text-start">Explore our categories</span>
          </h4>
          <ProductCategories categories={props.data.categories} />
        </div>
      </div>

      <div className="row my-4">
        <div className="col-12 ">
          <h4 className="row">
            <span className="col-3 text-start">Featured Products</span>
          </h4>
          <ProductGrids products={props.data.products} size={2} />
          <p className="row d-flex justify-content-end">
            <a href="#" className="col-1 text-end">
              View all
            </a>
          </p>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-12 ">
          <h4 className="row">
            <span className="col-3 text-start">Recently Viewed</span>
          </h4>
          <ProductThumbnails />
          <p className="row d-flex justify-content-end mx-2 my-1">
            <a href="#" className="col-1 text-end">
              View all
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
