import {useState, useEffect} from 'react' ;
import appLogo from '../images/mychat.png';
import '../styles/Registrasi.css'

const Registrasi =()=>{
    // const [userName, setUserName] = useState('');

    return(
        <div className="container w-full h-screen">
            <div className="flex">
        <img className='appLogo' src={appLogo} alt='appLogo'/>
        <h1 className='daftar' >Daftar Sekarang</h1>
            </div>
        </div>
    )
}
export default Registrasi;