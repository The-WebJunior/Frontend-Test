import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryDetails from "./component/CountryDetails"; // Assuming CountryDetails component exists
import Contenu from "./component/contenu";
import Navbar from "./component/navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div
        className={`h-screen ${
          darkMode ? "dark bg-gray-800 text-white" : "bg-zinc-100 text-black"
        }`}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="container">
          <Routes>
            <Route path="/" element={<Contenu />} />
            <Route path="/:name" element={<CountryDetails />} lo />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
