// import { useState, useEffect } from "react";
import keluar from '../images/logout.png';
import '../styles/NavBar.css';
import appLogoPutih from "../images/mychat-putih.png";
import profil from "../images/profilputih.png";
import {Link} from 'react-router-dom';

const NavBar =()=>{
    return(
        <div className="navbar">
            <Link to='/'>
            <img className='keluar' src={keluar} alt="Tombol Keluar" />
            </Link>
            <div className="tengah">
            <img className='appLogoPutih' src={appLogoPutih} alt="appLogoPutih" />
            <h1 className='subjek9'>Halaman Utama</h1>
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