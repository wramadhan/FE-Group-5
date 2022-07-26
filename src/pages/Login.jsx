import React from "react";
import Header from "../component/Header";

const Login = () => {
  return (
    <>
      <Header />
      <div className="item-center justify-between flex">
        <label class="">
          <input
            type="email"
            name="email"
            className="mt-1 px-3 py-2 bg-white border mx-auto shadow-sm border-slate-300 placeholder-slate-400 
          focus:outline-none focus:border-blue-500 focus:ring-sky-500 block w-1/2 rounded-md sm:text-sm focus:ring-1"
            placeholder="Email"
          />
          <br />
        </label>

        <label class="">
          <input
            type="password"
            name="password"
            class="mt-1 px-3 py-2 bg-white borde mx-autop shadow-sm border-slate-300 placeholder-slate-400 
          focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 rounded-md sm:text-sm focus:ring-1"
            placeholder="Password"
          />
          <br />
        </label>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Button
        </button>
        <p>
          belum memiliki akun? <br />{" "}
          <div className="text-blue ">
            <span className="line">
              {/* put router link here */}
              <a href="!#">Daftar Sekarang</a>{" "}
            </span>{" "}
          </div>
        </p>
      </div>
    </>
  );
};
export default Login;
