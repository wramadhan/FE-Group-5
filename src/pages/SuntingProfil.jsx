// import {useState, useEffect} from "react";
import '../styles/SuntingProfil.css'
import profil from '../images/suntingprofil.png'
import appLogo from '../images/mychat.png'
import {Link} from 'react-router-dom';

const SuntingProfil = () => {
    return(
        <div className='kontainer2'>
            <div className='atas2'>
            <img src={appLogo} alt='appLogo' className='appLogo2' />
            <h1 className='sunting2'>Sunting Profil</h1>
            </div>
            <div className='konten-kiri2'>
            <div className='unggah2'>Unggah</div>
            <img className='profil2' src={profil} alt="Foto Profil" />
            </div>
            <form>
            <div className='konten-kanan2'>
            <input className='input2' type="text" placeholder='Nama Lengkap'/>
            <input className='input2' type="text" placeholder='Nama Pengguna'/>
            <input className='input2' type="text" placeholder='Password'/>
            <input className='input2' type="text" placeholder='Email'/>
            </div>
            <div className='tombol2'>
                <button type='submit' className='batal2'><Link to='/home'>Batalkan</Link></button>
                <button type='submit' className='simpan2'><Link to='/home'>Simpan</Link></button>
            </div>
            </form>
        </div>
    )
}
export default SuntingProfil;