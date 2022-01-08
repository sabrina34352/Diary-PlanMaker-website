//rfce
import React from "react";
import { Outlet, Link } from "react-router-dom";

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
      <div>
        <Link to="SignIn">Sign In</Link>
        <Link to="SignUp">Sign Up</Link>
      </div>
      <Outlet />
    </div>
  );
}
