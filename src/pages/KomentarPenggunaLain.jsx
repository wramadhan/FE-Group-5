import CardCommentLain from '../component/CardCommentLain';
import NavBarCom from '../component/NavBarCom';
import '../styles/KomentarPengguna.css'

const KomentarPengggunaLain =()=>{
    return(
        <div className='page'>
            <NavBarCom className='navbar'/>
            <CardCommentLain className='card'/>
        </div>
    )
}

export default KomentarPengggunaLain;