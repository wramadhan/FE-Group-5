import { useState } from 'react';
import '../styles/CardCommentLain.css';
import profil from '../images/profilcard.png';
import KontenKomen from './KontenKomen';
import {Link} from 'react-router-dom';

const CardComment = () => {
    const [postingan]= useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perferendis voluptatum fugiat! Iusto neque beatae minus eligendi. Unde, cupiditate consequatur?");
    const [komentar]= useState("<!-- Komentar -->");
return(
    // <BrowserRouter>
    <div className="card4">
    <Link to="/sunting">
        <img className='profil4' src={profil} alt="profil"/>
    </Link>
    <h2 className='namauser4'>Nama Pengguna</h2>
    <div className="boxstatus4">{postingan}</div>
    <div className="simbolkomen4">{komentar}</div>
    <input className='input4' type="text" placeholder="Ketik komentar pada kolom ini" />
    <button className="posting4">Posting</button>
    <KontenKomen />
    </div>
    // </BrowserRouter>
)
}
export default CardComment;