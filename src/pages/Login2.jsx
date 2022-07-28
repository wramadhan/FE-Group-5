import React, { useState } from "react";
import "../styles/Login2.css";
import mychat from "../images/mychat.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", "asd");
    formData.append("password", "asd");
    axios
      .post("https://virtserver.swaggerhub.com/GolangProject/SosialMedia/1.0.1/users/", formData, { headers: { "Content-Type": "multipart/form-data" } })
      .then((response) => {
        console.log(response);
        alert("Good job!", "Succecss Sign Up", "success");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        alert(error.message);
      });
    //.finally(() => {});
  };
  return (
    <div className="bg1">
      <div className="wrapper1">
        <img src={mychat} alt="mychat" className="mychat1" />
        <h2 className="subjek1">My Chat</h2>
      </div>
      <form className="form1" action="#" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="E-mail" className="input1" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Kata Sandi" className="input1" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="submit1" type="submit" value="Submit">
          <Link to="/">Masuk</Link>
        </button>
      </form>
      <div className="bawah1">
        <p className="belum1">Belum mendaftar?</p>
        <p className="daftar1">
          <Link to="/registrasi">Daftar sekarang</Link>
        </p>
      </div>
    </div>
  );
};
export default Login2;