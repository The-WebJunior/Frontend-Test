import "./App.css";
import Contenu from "./component/contenu";
import Navbar from "./component/navbar";

function App() {
  return (
    <div className="bg-zinc-100 h-screen  ">
      <Navbar />
      <main className="container ">
        <Contenu />
      </main>
    </div>
  );
}

export default App;
