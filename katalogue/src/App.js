import logo from "./logo.svg";

import "./assets/stylesheets/App.css";

import axios from "axios";
import HeaderMenu from "./components/HeaderMenu";
import Home from "./screens/Home";
import FooterMain from "./components/FooterMain";
import Shop from "./screens/Shop";
import Product from "./screens/Product";

import { Route, Routes } from "react-router-dom";

import Authentification from "./screens/Authentication/Authentification";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import Account from "./screens/Account";
import Wishlist from "./screens/Wishlist";
import { Component } from "react";
import Dashboard from "./screens/admin/Dashboard";
import CategorieAdmin from "./components/admin/CategorieAdmin";
import DashboardAdmin from "./components/admin/DashboardAdmin";
import UserAdmin from "./components/admin/UserAdmin";
import ProductAdmin from "./components/admin/ProductAdmin";

class App extends Component {
  state = {
    categories: [],
    users: [],
    products: [],
    featured: [],
  };
  getData = async (link) => {
    const response = await fetch(link);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  componentDidMount() {
    axios.get(`http://localhost:9000/api/v1/categories/`).then((res) => {
      const categories = res.data;
      this.setState({ categories: categories });
    });

    this.getData("/api/v1/users").then((res) => {
      this.setState({
        users: res,
      });
    });
    this.getData("/api/v1/products").then((res) => {
      this.setState({
        products: res,
        featured: featuredChecker(res),
      });
    });
    const featuredChecker = (arr) => {
      return arr.filter((x) => x.featured);
    };
  }
  render() {
    return (
      <div className="App">
        <HeaderMenu data={{ categories: this.state.categories }} />
        <Routes>
          <Route
            path="/"
            caseSensitive={false}
            element={
              <Home
                data={{
                  categories: this.state.categories,
                  products: this.state.featured,
                }}
              />
            }
          ></Route>
          <Route
            path="/boutique"
            caseSensitive={false}
            element={
              <Shop
                data={{
                  categories: this.state.categories,
                  products: this.state.products,
                }}
              />
            }
          ></Route>
          <Route
            path="/boutique/:category"
            caseSensitive={false}
            element={
              <Shop
                data={{
                  categories: this.state.categories,
                  products: this.state.products,
                }}
              />
            }
          ></Route>
          <Route
            path="/boutique/produit/:produit"
            caseSensitive={false}
            element={<Product data={{ products: this.state.products }} />}
          ></Route>

          <Route
            path="/auth"
            caseSensitive={false}
            element={<Authentification />}
          ></Route>
          <Route
            path="/panier"
            caseSensitive={false}
            element={<Cart />}
          ></Route>
          <Route
            path="/wishlist"
            caseSensitive={false}
            element={<Wishlist />}
          ></Route>
          <Route
            path="/validation"
            caseSensitive={false}
            element={<Checkout />}
          ></Route>
          <Route
            path="/compte"
            caseSensitive={false}
            element={<Account />}
          ></Route>

          <Route path="/k-admin" caseSensitive={false} element={<Dashboard />}>
            <Route path="" element={<DashboardAdmin />} />
            <Route
              path="categories"
              element={
                <CategorieAdmin data={{ categories: this.state.categories }} />
              }
            />
            <Route
              path="products"
              element={
                <ProductAdmin
                  data={{
                    products: this.state.products,
                    categories: this.state.categories,
                  }}
                />
              }
            />

            <Route
              path="users"
              element={<UserAdmin data={{ users: this.state.users }} />}
            />
          </Route>
        </Routes>
        <FooterMain />
      </div>
    );
  }
}

export default App;
