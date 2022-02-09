import { useState } from "react";
import PriceFilter from "./PriceFilter";
import SearchBar from "./SearchBar";

const Sidebar = (props) => {
  let [filter, activateFilter] = useState(false);
  return (
    <div className="row px-3 py-4 border rounded mx-2 p-2 sticky-top">
      <div className="col-12">
        <SearchBar />
        <h6 className="row border-bottom py-2">Filters</h6>
        <div className="d-flex flex-wrap">
          {props.categories.length === 0
            ? "Loading"
            : props.categories.map((categorie) => (
                <SoloBrand title={categorie.label} />
              ))}
        </div>
        <h6 className="row border-bottom py-1 pt-3">Filter by :</h6>
        <select className="form-select row" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">Plus Recent</option>
          <option value="2">Plus Cheres</option>
          <option value="3">Moins Cheres</option>
        </select>

        <h6 className="row border-bottom py-1 pt-3">
          <span className="col-9 text-start"> Prix : </span>
          <button
            className="col-2 bg-light border"
            onClick={() => activateFilter((filter = !filter))}
          >
            {" "}
            {filter ? "-" : "+"}{" "}
          </button>
        </h6>
        {filter ? <PriceFilter /> : <></>}
      </div>
    </div>
  );
};
const SoloBrand = (props) => {
  return (
    <button className="bg bg-white text-muted fs-6 m-1 px-3 rounded border">
      {props.title}
    </button>
  );
};
export default Sidebar;
