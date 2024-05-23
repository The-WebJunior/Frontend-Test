import PropTypes from "prop-types";
import DarkMode from "./DarkMode";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-700 border-b border-b-slate-200/50 dark:border-b-slate-700 flex justify-between p-2">
        <div className="p-3 mr-7 text-xl font-bold text-center text-black dark:text-white">
          Where in the world?
        </div>
        <div className="flex items-center space-x-4">
          <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
          <span className="text-black dark:text-white">Dark mode</span>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
