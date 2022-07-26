import React from "react";
import Header from '../component/Header';
import '../styles/Login.css'
const Login = () => {
  return (
    <>
    <Header />
    <div className="items-center text-center justify-between ">
      <label className="">
        <input
          type="email"
          id="inputID"
          name="email"
          className="mt-1 px-3 py-2 bg-white mx-auto border border-slate-300 placeholder-slate-400 
          focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 rounded-md sm:text-sm focus:ring-1"
          placeholder="E-mail"
        />
        <br />
      </label>

      <label className="">
        <input
          type="password"
          id="inputPWD"
          name="password"
          className="mt-1 px-3 py-2 bg-white border mx-auto  border-slate-300 placeholder-slate-400 
          focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 rounded-md sm:text-sm focus:ring-1"
          placeholder="Kata Sandi"
          />
        <br />
      </label>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Button
      </button>
      <p>
        belum memiliki akun?
      </p>
      <p className="daftar ">Daftar Sekarang
      </p>
</div>
          </>
  );
};
export default Login;
