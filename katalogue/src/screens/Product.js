import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import ProductThumbnails from "../components/sub-components/ProductThumbnails";
import { CgExport } from "react-icons/cg";
import { useParams } from "react-router-dom";
const Product = (props) => {
  const urlProduct = useParams().produit.split("-").join(" ");

  const selectedProduct = props.data.products.filter(
    (product) => product.titre === urlProduct
  )[0];

  let [productProperties, setProductProperties] = useState({
    product: selectedProduct.titre,
    base_price: selectedProduct.price,
    features: [],
  });

  class cartItemModel {
    constructor(type, value, fees) {
      this.type = type;
      this.value = value;
      this.fees = parseInt(fees);
    }
  }
  // new cartItemModel(
  //       e.target.name,
  //       e.target.value,
  //       e.target.options[e.target.options.selectedIndex].attributes.data.value
  //     )

  const change = (e) => {
    if (
      productProperties.features.some(
        (feature) => feature.type === e.target.name
      )
    ) {
      //IF FEATURE ALREADY EXISTS DELETE FROM FEATURES ARR
      setProductProperties(
        (productProperties = {
          product: productProperties.product,
          base_price: productProperties.base_price,
          features: productProperties.features.filter(
            (feature) => feature.type !== e.target.name
          ),
        })
      );
    }

    setProductProperties(
      (productProperties = {
        product: productProperties.product,
        base_price: productProperties.base_price,
        features: [
          ...productProperties.features,
          new cartItemModel(
            e.target.name,
            e.target.value,
            e.target.options[
              e.target.options.selectedIndex
            ].attributes.data.value
          ),
        ],
      })
    );
  };

  const totalSummer = (initialPrice, arrayFeatures) => {
    let total = 0;
    arrayFeatures.map((feature) => {
      total += feature.fees;
    });
    function formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
    }
    return formatNumber(total + initialPrice);
  };

  return (
    <div className="container">
      <div className="row pt-4">
        <div className="col-5 d-flex flex-column align-items-center ">
          <img
            className=" pt-3 sticky-top rounded row"
            src={`/assets/images/products/${selectedProduct.image}`}
            width="100%"
          />
          <div className="my-1 d-flex justify-content-between">
            {selectedProduct.otherImage.map((image) => (
              <img
                className="rounded mx-2"
                src={`/assets/images/products/${image}`}
                width="50"
              />
            ))}
          </div>
        </div>
        <div className="col-7">
          <h4 className="row m-3 mb-1 border-bottom p-2 sticky-top bg-white">
            <h4 className="col-8 text-start text-capitalize">
              {selectedProduct.titre}
            </h4>
            <h4 className="col-4 text-muted text-end">
              {totalSummer(
                productProperties.base_price,
                productProperties.features
              )}{" "}
              F
            </h4>
          </h4>
          <h6 className="d-flex row mx-3 px-2">
            <span className="col-12 d-flex">
              Marque :{" "}
              <span className="text-muted text-normal">
                {" "}
                Categorie, Brand, Type, Produit{" "}
              </span>{" "}
            </span>
          </h6>
          <p className="row mx-3 border-bottom p-2">
            <h6 className="text-start"> Description </h6>
            <span className="text-start">{selectedProduct.description}</span>
          </p>
          <div className="row mx-3 border-bottom p-2 d-flex align-items-center">
            {selectedProduct.features.map((feature) => {
              return (
                <div className="col-6">
                  <div className="row m-auto">
                    <h6 className="col-4 p-2">{feature.type} :</h6>
                    <select
                      className="form-select w-50 col-7"
                      aria-label="Default select example"
                      onChange={(e) => change(e)}
                      name={feature.type}
                    >
                      <option selected>Open this select menu</option>
                      {feature.options.map((option) => {
                        return (
                          <option value={option.value} data={option.fees}>
                            {option.value}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              );
            })}
            <div className="col-12 my-2 ml-5">
              <button class="btn btn-primary w-75 " type="button">
                Ajouter au panier
              </button>
              <button className="btn bg-light w-10 rounded-circle m-2">
                {" "}
                <FiHeart />{" "}
              </button>
              <button className="btn bg-light w-10 rounded-circle m-2">
                {" "}
                <CgExport />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-2">
        <h4 className="col-12 text-start"> Related Products</h4>
        <div className="col-12">
          <ProductThumbnails />
        </div>
      </div>
    </div>
  );
};

export default Product;
