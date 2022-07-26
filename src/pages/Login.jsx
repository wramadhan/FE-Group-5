import React from "react";

const Login = () => {
  return (
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
            <a href="#">Daftar Sekarang</a>{" "}
          </span>{" "}
        </div>
      </p>
    </div>
  );
};
// const Login = () => {
//   const userRef = useRef();
//   const errref = useRef();

//   const [user, setUser] = useState("");
//   const [pwd, setPwd] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState("");

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);
//   useEffect(() => {
//     setErrMsg("");
//   }, [user, pwd]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(user, pwd);
//     setUser("");
//     setPwd("");
//     setSuccess(true);
//   };

//   return (
//     <section>
//       <p
//         ref={errref}
//         className={errMsg ? "errmsg" : "offscreen"}
//         aria-live="assertive"
//       >
//         {errMsg}
//       </p>
//       <form onSubmit={handleSubmit}>
//         <label class="block">
//           <input
//             type="email"
//             name="email"
//             className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
//             placeholder="email"
//           />
//         </label>
//         <input
//           type="text"
//           id="Email"
//           ref={userRef}
//           autoComplete="off"
//           onChange={(e) => setUser(e.target.value)}
//           value={user}
//           required
//         />
//       </form>
//       <form>
//         <label htmlFor="Password">Password</label>
//         <input
//           type="password"
//           id="password"
//           onChange={(e) => setPwd(e.target.value)}
//           value={pwd}
//           required
//         />
//         <button>Masuk</button>
//       </form>
//       <p>
//         belum memiliki akun?
//         <br />
//         <span className="line">
//           {/* put router link here */}
//           <a href="#">Dafter Sekarang</a>
//         </span>
//       </p>
//     </section>
//   );
// };

export default Login;
