import React from "react";
// import { Link } from "react-router-dom";
import appLogo from "../image/mychat.png";

const Header = () => {
  return (
    <div>
      <p className="text-7xl text-center text-blue-600 font-medium mt-8">
        <img width="100px" src={appLogo} alt="logo" />
        My Chat
      </p>
    </div>
  );
};
export default Header;
