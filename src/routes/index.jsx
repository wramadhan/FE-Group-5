import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registrasi from "../pages/Registrasi"
import SuntingProfil from "../pages/SuntingProfil";
import KomentarPenggguna from "../pages/KomentarPengguna"
import Login2 from "../pages/Login2";
import KomentarPengggunaLain from "../pages/KomentarPenggunaLain"
import HalamanUtama from "../pages/HalamanUtama";

const App =() => {
return(
<BrowserRouter>
<Routes>
    <Route path="/" element={<Login2 />} />
    <Route path="/home" element={<HalamanUtama />} />
    <Route path="/registrasi" element={<Registrasi />} />
    <Route path="/sunting" element={<SuntingProfil />} />
    <Route path="/komentar/id" element={<KomentarPenggguna />} />
    <Route path="/komentar/ln" element={<KomentarPengggunaLain />} />
</Routes>
</BrowserRouter>
)
}
export default App;