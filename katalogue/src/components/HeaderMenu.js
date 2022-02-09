import React, { useState } from "react";
import { MenuLink } from "./sub-components/MenuLink";
import { FiHeart, FiSearch, FiShoppingCart, FiXCircle } from "react-icons/fi";
import SearchResult from "./sub-components/SearchResult";
import { Link } from "react-router-dom";

const HeaderMenu = (props) => {
  const results = [
    {
      title: "some Title like that",
      description:
        "Some Description Like that is epic and truly remarquable to grab client attention",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUArP////8Aqf8Aqv8Ap/8Apf8Arf8Ar/8As//v+v+V2//j8/8Asf+p4/+N2P+Z3f/3/f+34/92z//e9f/X8//L7f/p9//a7//I6P+d1f+W1/8vt/+w4f/x+/9Huv9Uw/9oxf+J0P+m2v+Bzv9dv/9Dvv+D0/8nuv/E6/9wy/95y/+l4f/O6v+a1f9fyP/Z9f/J8sepAAADKklEQVR4nO3XbVPqSBCG4emeQBKDmvASPASICiGgHPf//7vtRIHobun5tGSr7qvKKozTVfM4Mz3BOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/EXV1pL79GERR8P4wGEWDrwODqB7qe4mvVd2Xkt7SsYhM1k3EYioyDdunM3tWfx4Y7W3gri3Z2adN+7BT0l+p7Geyt4UIlzKby9Ky6kKmM8k+zdwvJF+m6aP9uZY4k1XluyU9Vsu0qGKxPbmOZVTGeWHLlazKUNJ1d1yYyViX8kudvsqzu5U77Zb0ly/T12E0k9D5R9kPXJIevC9XyXCwl4N2Bo6ytNY3y+ZcsnoMHmUWdEquNf0/EZWFaxPagbwNdC5Pqi/pXG2lbJV8uXF+vbBxw6oM9dAkjJK40q3kQafk2im+5b0Wudh07+Regwfbh/okx0Bv7FcXTOQQzqRsFsnr4F6e1RV5XltC29iXkmuH+F4xnsqrHa97udEgswz6Wx4Cm/2tTbyYSC537YXg317TifWXukm4TpuE55JrZ/iWf7GGb73Cpnun2ib8JVmb0ILpIZVs2A4M/hJrNs5VeV7oeiXaKblyhh8Uh2kT5l8S2sTtiEr63nL823063fpzwuB/k9BpEUvk7ODdfJzDj11q51CnchclUrXN0g+eZel8u0u37S49l1w7wk9soSp/ahtP505jvVTHi6HfLj/ufrstspG3TtP00tWlOfW7lxb1qHkhK/2p9W/UH+y2CG5l10x8+PET1rXtU9mP3CiJS0s4udwWmz4ntFP0O7C3y8J5m/TAZl95X8XJaDCVbfcib5pnsGte5YKjvAzGTfu9lFxt/j+zt+hjvRFx7cVQjdPEdmSYpONKJp9exuy/8FbPZOGbvZnZvj5ot6THIpE8bRbEuYXEq/Y+sPO2itsXtI6lpLm0yxWu7I6ctvnPJT2m1TGZt1+KnN/Zp/ZyD8bzZPdl4HCRJMeoCeOLhyQr/OeSHvManr7O2hfh0yfn/rEw6oanZzo8pbqUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL3wN/+OMASYO+AqAAAAAElFTkSuQmCC",
    },
    {
      title: "some Title like that",
      description:
        "Some Description Like that is epic and truly remarquable to grab client attention",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUArP////8Aqf8Aqv8Ap/8Apf8Arf8Ar/8As//v+v+V2//j8/8Asf+p4/+N2P+Z3f/3/f+34/92z//e9f/X8//L7f/p9//a7//I6P+d1f+W1/8vt/+w4f/x+/9Huv9Uw/9oxf+J0P+m2v+Bzv9dv/9Dvv+D0/8nuv/E6/9wy/95y/+l4f/O6v+a1f9fyP/Z9f/J8sepAAADKklEQVR4nO3XbVPqSBCG4emeQBKDmvASPASICiGgHPf//7vtRIHobun5tGSr7qvKKozTVfM4Mz3BOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/EXV1pL79GERR8P4wGEWDrwODqB7qe4mvVd2Xkt7SsYhM1k3EYioyDdunM3tWfx4Y7W3gri3Z2adN+7BT0l+p7Geyt4UIlzKby9Ky6kKmM8k+zdwvJF+m6aP9uZY4k1XluyU9Vsu0qGKxPbmOZVTGeWHLlazKUNJ1d1yYyViX8kudvsqzu5U77Zb0ly/T12E0k9D5R9kPXJIevC9XyXCwl4N2Bo6ytNY3y+ZcsnoMHmUWdEquNf0/EZWFaxPagbwNdC5Pqi/pXG2lbJV8uXF+vbBxw6oM9dAkjJK40q3kQafk2im+5b0Wudh07+Regwfbh/okx0Bv7FcXTOQQzqRsFsnr4F6e1RV5XltC29iXkmuH+F4xnsqrHa97udEgswz6Wx4Cm/2tTbyYSC537YXg317TifWXukm4TpuE55JrZ/iWf7GGb73Cpnun2ib8JVmb0ILpIZVs2A4M/hJrNs5VeV7oeiXaKblyhh8Uh2kT5l8S2sTtiEr63nL823063fpzwuB/k9BpEUvk7ODdfJzDj11q51CnchclUrXN0g+eZel8u0u37S49l1w7wk9soSp/ahtP505jvVTHi6HfLj/ufrstspG3TtP00tWlOfW7lxb1qHkhK/2p9W/UH+y2CG5l10x8+PET1rXtU9mP3CiJS0s4udwWmz4ntFP0O7C3y8J5m/TAZl95X8XJaDCVbfcib5pnsGte5YKjvAzGTfu9lFxt/j+zt+hjvRFx7cVQjdPEdmSYpONKJp9exuy/8FbPZOGbvZnZvj5ot6THIpE8bRbEuYXEq/Y+sPO2itsXtI6lpLm0yxWu7I6ctvnPJT2m1TGZt1+KnN/Zp/ZyD8bzZPdl4HCRJMeoCeOLhyQr/OeSHvManr7O2hfh0yfn/rEw6oanZzo8pbqUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL3wN/+OMASYO+AqAAAAAElFTkSuQmCC",
    },
    {
      title: "some Title like that",
      description:
        "Some Description Like that is epic and truly remarquable to grab client attention",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUArP////8Aqf8Aqv8Ap/8Apf8Arf8Ar/8As//v+v+V2//j8/8Asf+p4/+N2P+Z3f/3/f+34/92z//e9f/X8//L7f/p9//a7//I6P+d1f+W1/8vt/+w4f/x+/9Huv9Uw/9oxf+J0P+m2v+Bzv9dv/9Dvv+D0/8nuv/E6/9wy/95y/+l4f/O6v+a1f9fyP/Z9f/J8sepAAADKklEQVR4nO3XbVPqSBCG4emeQBKDmvASPASICiGgHPf//7vtRIHobun5tGSr7qvKKozTVfM4Mz3BOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/EXV1pL79GERR8P4wGEWDrwODqB7qe4mvVd2Xkt7SsYhM1k3EYioyDdunM3tWfx4Y7W3gri3Z2adN+7BT0l+p7Geyt4UIlzKby9Ky6kKmM8k+zdwvJF+m6aP9uZY4k1XluyU9Vsu0qGKxPbmOZVTGeWHLlazKUNJ1d1yYyViX8kudvsqzu5U77Zb0ly/T12E0k9D5R9kPXJIevC9XyXCwl4N2Bo6ytNY3y+ZcsnoMHmUWdEquNf0/EZWFaxPagbwNdC5Pqi/pXG2lbJV8uXF+vbBxw6oM9dAkjJK40q3kQafk2im+5b0Wudh07+Regwfbh/okx0Bv7FcXTOQQzqRsFsnr4F6e1RV5XltC29iXkmuH+F4xnsqrHa97udEgswz6Wx4Cm/2tTbyYSC537YXg317TifWXukm4TpuE55JrZ/iWf7GGb73Cpnun2ib8JVmb0ILpIZVs2A4M/hJrNs5VeV7oeiXaKblyhh8Uh2kT5l8S2sTtiEr63nL823063fpzwuB/k9BpEUvk7ODdfJzDj11q51CnchclUrXN0g+eZel8u0u37S49l1w7wk9soSp/ahtP505jvVTHi6HfLj/ufrstspG3TtP00tWlOfW7lxb1qHkhK/2p9W/UH+y2CG5l10x8+PET1rXtU9mP3CiJS0s4udwWmz4ntFP0O7C3y8J5m/TAZl95X8XJaDCVbfcib5pnsGte5YKjvAzGTfu9lFxt/j+zt+hjvRFx7cVQjdPEdmSYpONKJp9exuy/8FbPZOGbvZnZvj5ot6THIpE8bRbEuYXEq/Y+sPO2itsXtI6lpLm0yxWu7I6ctvnPJT2m1TGZt1+KnN/Zp/ZyD8bzZPdl4HCRJMeoCeOLhyQr/OeSHvManr7O2hfh0yfn/rEw6oanZzo8pbqUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL3wN/+OMASYO+AqAAAAAElFTkSuQmCC",
    },
  ];

  let [searchQuery, setSearchQuery] = useState({ active: false, string: "" });
  return (
    <div className="container-fluid header">
      <div className="container py-2">
        <div className="row">
          <div className="container">
            <div className="row px-2 py-1">
              <div className="col-2 d-flex justify-content-between align-items-start">
                LOGO
              </div>
              <div className="col-9 d-flex justify-content-end px-2">
                <MenuLink align="center" link="/" title="Home" />

                {props.data.categories.map((categorie) => (
                  <MenuLink
                    link={`/boutique/${categorie.label}`}
                    title={categorie.label}
                  />
                ))}
                <MenuLink link="/boutique" title="Support" />
              </div>
              <div className="col-1">
                <div className="row">
                  <Link to="wishlist" className="col-4">
                    <FiHeart />
                  </Link>
                  <Link to="panier" className="col-4 header_cart">
                    <FiShoppingCart />
                  </Link>
                  <div className="col-4 header_search">
                    <FiSearch
                      onClick={() => {
                        setSearchQuery(
                          (searchQuery = {
                            active: !searchQuery.active,
                            string: searchQuery.string,
                          })
                        );
                      }}
                    />
                    <div
                      className={
                        searchQuery.active
                          ? "active header_search_cont"
                          : "header_search_cont"
                      }
                    >
                      <div className="row search_input_cont">
                        <input
                          type="text"
                          className="form-control bg-light text-dark"
                          placeholder="Faire une recherche..."
                        />
                      </div>
                      {searchQuery.active ? (
                        <div className="row searchResults">
                          <div className="col-12 mt-1">
                            {results.map((result) => (
                              <SearchResult
                                title={result.title}
                                image={result.image}
                                description={result.description}
                              />
                            ))}
                            <div className="row bg-light border text-muted">
                              <Link to="#"> view all</Link>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
