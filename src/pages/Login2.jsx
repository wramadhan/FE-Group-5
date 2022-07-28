import '../styles/Login2.css';
import mychat from '../images/mychat.png';
import {Link} from 'react-router-dom';

const Login2 =()=> {
return(
    <div className="bg">
        <div className="wrapper">
    <img src={mychat} alt="mychat" className='mychat'/>
    <h2 className='subjek'>My Chat</h2>
        </div>
    <form className='form'action="#">
        <input type="text" placeholder='E-mail' className='input'/>
        <input type="text" placeholder='Kata Sandi' className='input'/>
        <button class='submit'type="submit" value="Submit">Masuk</button>
    </form>
    <div className="bawah">
    <p className='belum'>Belum mendaftar?</p>
    <p className='daftar'><Link to='/registrasi'>Daftar sekarang</Link></p>
    </div>
    </div>
)
};
export default Login2;