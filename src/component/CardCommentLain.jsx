import { useState } from 'react';
import '../styles/CardCommentLain.css';
import profil from '../images/profilcard.png';
import KontenKomen from './KontenKomen';

const CardCommentLain = () => {
    const [postingan]= useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perferendis voluptatum fugiat! Iusto neque beatae minus eligendi. Unde, cupiditate consequatur?");
    const [komentar]= useState("<!-- Komentar -->");
return(
    <div className="card">
    <img className='profil' src={profil} alt="profil" />
    <h2 className='namauser'>Nama Pengguna</h2>
    <div className="boxstatus">{postingan}</div>
    <div className="simbolkomen">{komentar}</div>
    <input className='input' type="text" placeholder="Ketik komentar pada kolom ini" />
    <button className="posting">Posting</button>
    <KontenKomen />
    </div>
)
}
export default CardCommentLain;