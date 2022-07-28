import '../styles/HalamanUtama.css';
import NavBar from '../component/NavBar';
import CardHome1 from '../component/CardHome1';
import CardHome2 from '../component/CardHome2';


const HalamanUtama = ()=>{
    return(
        <>
        <div className="bg5">
        <NavBar/>
        <form action="form5">
            <input className='input5'type="text" placeholder='Apa yang anda pikirkan?'/>
            <button className="posting5" type='submit'>Posting</button>
        </form>
        <CardHome1 className='cardHome5'/>
        <CardHome2 className='cardHome6'/>
        </div>
        </>
    )
}
export default HalamanUtama;