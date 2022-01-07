//rfce
import React from "react";
import { Outlet } from "react-router-dom";

export function SignIn() {
  return (
    <>
      <h1> New User check</h1>
    </>
  );
}
export function SignUp() {
  return (
    <>
      <h1> Old User Check</h1>
    </>
  );
}

export function Profile() {
  return (
    <div>
      <h1 className="profile">Profiles lol</h1>
      <Outlet />
    </div>
  );
}
