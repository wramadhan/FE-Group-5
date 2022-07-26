// import {useState, useEffect} from "react";
import '../styles/SuntingProfil.css'
import profil from '../images/suntingprofil.png'
import appLogo from '../images/mychat.png'

const SuntingProfil = () => {
    return(
        <div className='kontainer'>
            <div className='atas'>
            <img src={appLogo} alt='appLogo' className='appLogo' />
            <h1 className='sunting'>Sunting Profil</h1>
            </div>
            <div className='konten-kiri'>
            <div className='unggah'>Unggah</div>
            <img className='profil' src={profil} alt="Foto Profil" />
            </div>
            <div className='konten-kanan'>
            <input className='input' type="text" placeholder='Nama Lengkap'/>
            <input className='input' type="text" placeholder='Nama Pengguna'/>
            <input className='input' type="text" placeholder='Password'/>
            <input className='input' type="text" placeholder='Email'/>
            </div>
            <div className='tombol'>
                <button className='batal'>Batalkan</button>
                <button className='simpan'>Simpan</button>
            </div>
        </div>
    )
}
export default SuntingProfil;