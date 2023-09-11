import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <main className="app-main">
      <div className="left-main-container">
        <Header />
        <div className="login-container">
          <Login />
        </div>
      </div>
      <img id="agente" src="/images/agente.png" alt="agente" />
    </main>
  );
}

export default App;
