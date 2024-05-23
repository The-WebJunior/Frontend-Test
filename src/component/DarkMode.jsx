import { Moon, Sun } from "lucide-react";
import PropTypes from "prop-types"; // Importer PropTypes

export default function DarkMode({ darkMode, setDarkMode }) {
  return (
    <div className="dark_mode">
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <input
          type="checkbox"
          id="darkmode-toggle"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className="hidden"
        />
        {darkMode ? <Sun /> : <Moon />}
      </label>
    </div>
  );
}

// Validation des propriétés
DarkMode.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};
