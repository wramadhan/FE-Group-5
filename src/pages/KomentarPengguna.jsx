import CardComment from '../component/CardComment';
import NavBarCom from '../component/NavBarCom';
import '../styles/KomentarPengguna.css'

const KomentarPenggguna =()=>{
    return(
        <div className='page'>
            <NavBarCom className='navbar'/>
            <CardComment className='card'/>
        </div>
    )
}

export default KomentarPenggguna;