import React, { useState } from "react";
import appLogo from "../images/mychat.png";
import "../styles/Registrasi.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registrasi = () => {
  //1
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [file, setFile] = useState("");
  //2
  const navigate = useNavigate();

  //3
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://app.swaggerhub.com/apis/GolangProject/SosialMedia/1.0.1/users`, {
        username: "asd",
        password: "asd",
        email: "email@mail.com",
        fullname: "asd",
        file: "asd",
      })
      .then((response) => {
        alert("Good Job!", "Success Sign Up", "Success");
      })
      .catch(function (err) {
        alert(err);
      });
  };

  return (
    <div className="container w-full h-screen">
      <div className="flex">
        <img className="appLogo" src={appLogo} alt="appLogo" />
        <h1 className="daftar">Daftar Sekarang</h1>
      </div>
    </div>
  );
};
export default Registrasi;
