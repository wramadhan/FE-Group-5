// import { useState, useEffect } from "react";
import home from '../images/home.png';
import '../styles/NavBarCom.css';
import appLogoPutih from "../images/mychat-putih.png";
import profil from "../images/profilputih.png";

const NavBar =()=>{
    return(
        <div className="navbar">
            <img className='home' src={home} alt="Tombol home" />
            <div className="tengah">
            <img className='appLogoPutih' src={appLogoPutih} alt="appLogoPutih" />
            <h1 className='subjek'>Halaman Utama</h1>
            </div>
            <div className="kanan">
            <p className='user'>Hai Pengguna,<br />Hari yang indah</p>
            <img className='profil' src={profil} alt="profil" />
            </div>
        </div>
    )
}
export default NavBar;