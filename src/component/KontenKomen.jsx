import { useState } from 'react';
import profil from '../images/profilcard.png';
import '../styles/CardComment.css';
const KontenKomen = () => {
    const [komen]= useState("");
    return (
        <div className="komen">
        <img className='profil' src={profil} alt="profil" />
        <h2 className='namakomentator'>Nama Pengguna</h2>
        <div className="kontenkomen">{komen}</div>
    </div>
    )
}
export default KontenKomen;