import profil from '../images/profilcard.png';
import sunting from '../images/edit.png';
import trash from '../images/trash.png';
import { useState } from 'react';
import '../styles/CardHome2.css';
import {Link} from 'react-router-dom';

const CardHome2 =()=>{
    const [paragraf] = useState('')
    return(
        <div className="kontainer7">
            <img src={profil} alt='profil' className='profil7'/>
            <h2 className="namauser7">Nama Pengguna Lain</h2>
            <div className="kolom7">
            <p className="paragraf7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In officia tempore est et qui molestiae, voluptatibus explicabo illo laboriosam dicta.</p>
            </div>
            <button className="komentarsendiri7" type='submit'><Link to='/komentar/ln'>Komentar</Link></button>
        </div>
    )
}
export default CardHome2;