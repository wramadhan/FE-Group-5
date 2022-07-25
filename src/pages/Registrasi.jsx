import {useState, useEffect} from 'react' ;
import appLogo from '../images/mychat.png';
import '../styles/Registrasi.css'

const Registrasi =()=>{
    // const [userName, setUserName] = useState('');

    return(
        <>
        <div className="kontainer w-full h-screen">
            <div>
        <img className='appLogo' src={appLogo} alt='appLogo'/>
        <h1 className='daftar' >Daftar Sekarang</h1>
            </div>
            <input className='input' placeholder='Nama Lengkap'></input>
            <input className='input' placeholder='Nama Pengguna'></input>
            <input className='input' placeholder='Kata Sandi'></input>
            <input className='input' placeholder='Password'></input>
            <button className='tombol'>Buat Akun</button>
        </div>
        </>
    )
}
export default Registrasi;