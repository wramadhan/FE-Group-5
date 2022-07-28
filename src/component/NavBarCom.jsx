// import { useState, useEffect } from "react";
import home from '../images/home.png';
import '../styles/NavBarCom.css';
import appLogoPutih from "../images/mychat-putih.png";
import profil from "../images/profilputih.png";
import {Link} from 'react-router-dom';

const NavBar =()=>{
    return(
        <div className="navbar">
            <Link to='/home'>
            <img className='home' src={home} alt="Tombol home" />
            </Link>
            <div className="tengah">
            <img className='appLogoPutih' src={appLogoPutih} alt="appLogoPutih" />
            <h1 className='subjek'>Komentar</h1>
            </div>
            <div className="kanan">
            <p className='user'>Hai Pengguna,<br />Hari yang indah</p>
            <Link to='/sunting'>
            <img className='profil' src={profil} alt="profil" />
            </Link>
            </div>
        </div>
    )
}
export default NavBar;