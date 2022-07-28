import { useState } from 'react';
import '../styles/CardComment.css';
import sunting from '../images/edit.png';
import trash from '../images/trash.png';
import profil from '../images/profilcard.png';
import KontenKomen from './KontenKomen';
import {Link} from 'react-router-dom';

const CardComment = () => {
    const [postingan]= useState("");
    const [komentar]= useState("<!-- Komentar -->");
return(
    // <BrowserRouter>
    <div className="card">
    <Link to="/sunting">
        <img className='profil' src={profil} alt="profil"/>
    </Link>
    <h2 className='namauser1'>Nama Pengguna</h2>
    <img className='sunting' src={sunting} alt="sunting" />
    <img className='trash' src={trash} alt="trash" />
    <div className="boxstatus">{postingan}</div>
    <div className="simbolkomen">{komentar}</div>
    <input className='input' type="text" placeholder="Ketik komentar pada kolom ini" />
    <button className="posting">Posting</button>
    <KontenKomen />
    </div>
    // </BrowserRouter>
)
}
export default CardComment;