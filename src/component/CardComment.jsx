import { useState } from 'react';
import '../styles/CardComment.css';
import sunting from '../images/edit.png';
import trash from '../images/trash.png';
import profil from '../images/profilcard.png';
import KontenKomen from './KontenKomen';

const CardComment = () => {
    const [postingan]= useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perferendis voluptatum fugiat! Iusto neque beatae minus eligendi. Unde, cupiditate consequatur?");
    const [komentar]= useState("<!-- Komentar -->");
return(
    <div className="card">
    <img className='profil' src={profil} alt="profil" />
    <h2 className='namauser'>Nama Pengguna</h2>
    <img className='sunting' src={sunting} alt="sunting" />
    <img className='trash' src={trash} alt="trash" />
    <div className="boxstatus">{postingan}</div>
    <div className="simbolkomen">{komentar}</div>
    <input className='input' type="text" placeholder="Ketik komentar pada kolom ini" />
    <button className="posting">Posting</button>
    <KontenKomen />
    </div>
)
}
export default CardComment;