

import "./Theme.scss";

const Theme = () => {
  const setDarkMode = () => {
    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      bodyElement.setAttribute("dark-mode", "true");
      bodyElement.removeAttribute("light-mode");
    }
  };

  const setLightMode = () => {
    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      bodyElement.setAttribute("light-mode", "true");
      bodyElement.removeAttribute("dark-mode");
    }
  };

  const toggleTheme = () => {
    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      if (bodyElement.getAttribute("dark-mode") === "true") {
        setLightMode();
      } else {
        setDarkMode();
      }
    }
  };

  return (
    <button className="theme-toggle-button" onClick={toggleTheme}>
     dark mode
    </button>
  );
};

export default Theme;
