import React, { useState } from "react";
import appLogo from "../images/mychat.png";
import "../styles/Registrasi.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registrasi = () => {
  // 1
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  //2
  const navigate = useNavigate();

  //3
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", "asd");
    formData.append("password", "asd");
    formData.append("email", "email@mail.com");
    formData.append("fullname", "asd");
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
    <>
      <div className="kontainer3">
        <div>
          <img className="appLogo3" src={appLogo} alt="appLogo" />
          <h1 className="daftar3">Daftar Sekarang</h1>
        </div>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <input className="input3" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)} />
          <input className="input3" placeholder="Passsword" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input className="input3" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="input3" placeholder="Full name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
          <button className="tombol3">Buat Akun</button>
        </form>
      </div>
    </>
  );
};
export default Registrasi;
