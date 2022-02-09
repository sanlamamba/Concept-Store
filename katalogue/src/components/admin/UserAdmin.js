import React, { useState } from "react";

function UserAdmin(props) {
  return (
    <div className="row p-4">
      <div className="col-12">
        <div className="row text-muted">
          Admin {">"} Users {">"} biew
        </div>
        <div className="row">
          <div className="col-6">filters</div>
        </div>
        <div className="row">
          <UserCard users={props.data.users} />
        </div>
      </div>
    </div>
  );
}

const UserCard = (props) => {
  return (
    <>
      {props.users.length === 0
        ? "No users available"
        : props.users.map((user) => {
            return (
              <div className="col-2 p-3 m-2 shadow rounded">
                <div className="row">
                  <div className="col-12">
                    <img
                      className="rounded bordered"
                      src={`/assets/images/general/users/${user.profile_pic}`}
                      width={"99%"}
                      alt={`katogue user ${user.name}`}
                    />
                  </div>
                  <div className="col-12 px-4">
                    <h5 className="row">{user.name}</h5>
                    <p className="row text-muted">{user.email}</p>
                    <p className="row text-muted">{user.telephone}</p>
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
};
export default UserAdmin;
