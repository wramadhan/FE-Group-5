import Header from "./component/Header";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="Login">
        <Login />
      </div>
    </div>
  );
}

export default App;
