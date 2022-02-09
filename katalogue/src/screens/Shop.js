import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Shop/Sidebar";
import ProductGrids from "../components/sub-components/ProductGrids";

const Shop = (props) => {
  let { category } = useParams();

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-3 mt-2">
          <Sidebar filter={category} categories={props.data.categories} />
        </div>
        <div className="col-9">
          <ProductGrids
            size={3}
            filter={category}
            products={props.data.products}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
