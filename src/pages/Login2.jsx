import '../styles/Login2.css';
import mychat from '../images/mychat.png';
import {Link} from 'react-router-dom';

const Login2 =()=> {
return(
    <div className="bg1">
        <div className="wrapper1">
    <img src={mychat} alt="mychat" className='mychat1'/>
    <h2 className='subjek1'>My Chat</h2>
        </div>
    <form className='form1'action="#">
        <input type="text" placeholder='E-mail' className='input1'/>
        <input type="text" placeholder='Kata Sandi' className='input1'/>
        <button class='submit1'type="submit" value="Submit"><Link to='/home'>Masuk</Link></button>
    </form>
    <div className="bawah1">
    <p className='belum1'>Belum mendaftar?</p>
    <p className='daftar1'><Link to='/registrasi'>Daftar sekarang</Link></p>
    </div>
    </div>
)
};
export default Login2;