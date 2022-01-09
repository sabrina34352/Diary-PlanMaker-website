//rfce
import React from "react";
import {userInfo} from "./register";

function Profile() {
  return (
    <>
      <div>
        <div className="profileHolder">
          <p>name: {userInfo[0]}</p>
          <hr />
          <p>surname: {userInfo[1]}</p>
          <hr />
          <p>age: {userInfo[2]}</p>
          <hr />
          <p>email: {userInfo[3]}</p>
        </div>
      </div>
    </>
  );
}

export default Profile;
