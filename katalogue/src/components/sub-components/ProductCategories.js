import React from "react";
import { Link } from "react-router-dom";

const ProductCategories = (props) => {
  return (
    <>
      {props.categories.length === 0 ? (
        "Loading..."
      ) : (
        <div className="row">
          {props.categories.map((categorie) => (
            <ProductCategory title={categorie.label} image={categorie.image} />
          ))}
        </div>
      )}
    </>
  );
};

const ProductCategory = (props) => {
  return (
    <Link
      to={`/boutique/${props.title}`}
      className="col m-1 p-3"
      style={{ transform: "scale(0.95)" }}
    >
      <div className="row">
        <div>
          <img
            className="rounded-circle bordered"
            src={`/assets/images/general/categories/${props.image}`}
            width="125"
            alt={`katogue produit ${props.title}`}
          />
        </div>
      </div>
      <h6 className="row d-flex justify-content-center mt-2">{props.title}</h6>
    </Link>
  );
};

export default ProductCategories;
