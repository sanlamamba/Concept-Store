import axios from "axios";
import React, { useState } from "react";
import { FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

function CategorieAdmin(props) {
  let [navCat, setNavCat] = useState("view");
  return (
    <div className="row p-4">
      <div className="col-12">
        <div className="row text-muted">
          Admin {">"} Categorie {">"} {navCat}
        </div>

        <div className="row mt-2">
          <button
            className={`btn btn-outline-primary w-auto mr-2 ${
              navCat == "view" ? "active" : ""
            }`}
            onClick={() => setNavCat((navCat = "view"))}
          >
            View All
          </button>
          <button
            className={`btn btn-outline-primary w-auto mx-2  ${
              navCat == "create" ? "active" : ""
            }`}
            onClick={() => setNavCat((navCat = "create"))}
          >
            Create New
          </button>
        </div>
        <div className="row py-2 mt-3">
          {navCat === "edit" ? (
            "some"
          ) : navCat === "create" ? (
            <CreateCategorie />
          ) : (
            <ViewCategories data={props.data.categories} />
          )}
        </div>
      </div>
    </div>
  );
}

const CreateCategorie = (props) => {
  return (
    <div className="col-12">
      <div className="row d-flex justify-content-center align-items-center">
        <form
          id="form"
          method="GET"
          enctype="multipart/form-data"
          className="col-6 shadow py-4 px-5 rounded"
        >
          <h5>Create a new Categorie</h5>
          <div className="row mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Categorie Label"
              name="label"
              required
            />
          </div>
          <div className="row mt-4">
            <label
              for="cat_img"
              className="w-auto d-flex justify-content-center align-items-center "
            >
              Categorie Image
            </label>
            <input
              name="image"
              type="file"
              className="form-control col"
              placeholder="Categorie Label"
              required
            />
          </div>
          <div className="row mt-4 d-flex justify-content-end align-items-center">
            <input
              type="submit"
              className="form-control btn-primary w-auto px-5"
              value={"Create New Categorie"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const ViewCategories = (props) => {
  const removeItem = (id) => {
    fetch(`http://localhost:9000/api/v1/categories/delete`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((res) => res.json())
      .then((res) => alert(res.message));
  };

  return (
    <>
      {props.data.length === 0
        ? "Nothing new"
        : props.data.map((categorie) => (
            <div className="col-2 p-2 m-2 shadow rounded">
              <img
                className="rounded bordered"
                src={`/assets/images/general/categories/${categorie.image}`}
                width={"99%"}
                alt={`katogue produit ${categorie.label}`}
              />
              <p className="mt-2 px-2 justify-content-between d-flex align-items-center">
                {categorie.label}{" "}
                <FiTrash
                  onClick={() => {
                    removeItem(categorie["_id"]);
                  }}
                />
              </p>
            </div>
          ))}
    </>
  );
};

export default CategorieAdmin;
