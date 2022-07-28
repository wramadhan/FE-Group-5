import profil from '../images/profilcard.png';
import sunting from '../images/edit.png';
import trash from '../images/trash.png';
import { useState } from 'react';
import '../styles/CardHome1.css';
import {Link} from 'react-router-dom';

const CardHome1 =()=>{
    const [paragraf] = useState('')
    return(
        <div className="kontainer6">
            <img src={profil} alt='profil' className='profil6'/>
            <h2 className="namauser6">Nama Pengguna</h2>
            <img src={sunting} alt='sunting' className='sunting6'/>
            <img src={trash} alt='trash' className='trash6'/>
            <div className="kolom6">
            <p className="paragraf6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In officia tempore est et qui molestiae, voluptatibus explicabo illo laboriosam dicta.</p>
            </div>
            <button className="komentarsendiri6" type='submit'><Link to='/komentar/id'>Komentar</Link></button>
        </div>
    )
}
export default CardHome1;