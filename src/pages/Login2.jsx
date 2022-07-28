import "../styles/Login2.css";
import mychat from "../images/mychat.png";

import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login2 = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", "asd");
    formData.append("password", "asd");
    axios
      .post("https://app.swaggerhub.com/apis/GolangProject/SosialMedia/1.0.1/users/", formData, { headers: { "Content-Type": "multipart/form-data" } })
      .then((response) => {
        console.log(response.data.data.token);
        alert("Good job!", "Succecss Login", "success");
        //navigate("/", { replace: true });
      })
      .catch((error) => {
        alert(error.message);
      });
    //.finally(() => {});
  };
  return (
    <div className="bg">
      <div className="wrapper">
        <img src={mychat} alt="mychat" className="mychat" />
        <h2 className="subjek">My Chat</h2>
      </div>
      <form className="form" action="#" onSubmit={(e) => HandleSubmit(e)}>
        <input type="text" placeholder="E-mail" className="input" value={username} onChange={(e) => setUserName(e.target.value)} />
        <input type="text" placeholder="Kata Sandi" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="submit" type="submit" value="Submit">
          Masuk
        </button>
      </form>
      <div className="bawah">
        <p className="belum">Belum mendaftar?</p>
        <p className="daftar">
          <Link to="/registrasi">Daftar sekarang</Link>
        </p>
      </div>
    </div>
  );
};
export default Login2;
