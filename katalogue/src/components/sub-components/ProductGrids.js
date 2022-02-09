import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { URL_CODER } from "../../assets/javascript/urlManager";

function ProductGrids(props) {
  return (
    <div className="row d-flex flex-wrap">
      {props.products.length === 0
        ? "Loading"
        : props.products.map((product) => (
            <SoloProduct
              size={props.size}
              image={product.image}
              titre={product.titre}
              price={product.price}
            />
          ))}
    </div>
  );
}

const SoloProduct = (props) => {
  return (
    <Link
      to={`/boutique/produit/${URL_CODER(props.titre)}`}
      className={"col-" + props.size + " py-2 border mr-3 mb-3"}
    >
      <div className="row">
        <img
          className="rounded"
          src={`/assets/images/products/${props.image}`}
          width="100%"
        />
      </div>
      <div className="row">
        <h6 className="px-2 my-2 fs-6">{props.titre}</h6>
      </div>
      <div className="row m-auto">
        <p className="text-muted col-12 text-center m-auto">{props.price} F</p>
      </div>
    </Link>
  );
};

export default ProductGrids;
