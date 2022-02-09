import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashboard(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 p-5">
          <div className="row shadow p-4 rounded">
            <div className="col-12">
              <div className="row">
                <h6 className="col-12">San Lamamba P.</h6>
                <p className="text-muted col-12">Super Admin</p>
                <button className="btn btn-outline-danger">Log out</button>
              </div>
              <div className="row my-4">
                <Link to="/k-admin/" className="p-2 text-start border-bottom">
                  Dashboard
                </Link>
                <Link
                  to="/k-admin/categories"
                  className="p-2 text-start border-bottom"
                >
                  Categories
                </Link>
                <Link
                  to="/k-admin/products"
                  className="p-2 text-start border-bottom"
                >
                  Products
                </Link>
                <Link
                  to="/k-admin/users"
                  className="p-2 text-start border-bottom"
                >
                  Users
                </Link>
                <Link
                  to="/k-admin/orders"
                  className="p-2 text-start border-bottom"
                >
                  Orders
                </Link>
                <Link
                  to="/k-admin/orders"
                  className="p-2 text-start border-bottom"
                >
                  Admins
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
