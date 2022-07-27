import { useState } from 'react';
import profil from '../images/profilcard.png';
import '../styles/CardComment.css';
const KontenKomen = () => {
    const [komen]= useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perferendis voluptatum fugiat! Iusto neque beatae minus eligendi. Unde, cupiditate consequatur?");
    return (
        <div className="komen">
        <img className='profil' src={profil} alt="profil" />
        <h2 className='namakomentator'>Nama Pengguna</h2>
        <div className="kontenkomen">{komen}</div>
    </div>
    )
}
export default KontenKomen;