import React from "react";
import appLogo from "../images/mychat.png";

// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <h1 className="Chatting">
      <image className="appLogo" src={appLogo} alt="appLogo2" />; My Chat
    </h1>
  );
};
export default Header;
