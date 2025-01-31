import { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <NavDropdown
      title={
        theme === "dark" ? (
          <i className="bi bi-moon-fill "></i>
        ) : (
          <i className="bi bi-sun-fill "></i>
        )
      }
      drop="down-centered"
      className="mx-2"
    >
      <NavDropdown.Item
        onClick={() => setTheme(theme === "light" ? "dark" : "dark")}
      >
        <i className="bi bi-moon-fill"></i> Dark
      </NavDropdown.Item>

      <NavDropdown.Divider />

      <NavDropdown.Item
        className="link-warning"
        onClick={() => setTheme(theme === "dark" ? "light" : "light")}
      >
        <i className="bi bi-sun-fill"></i> Light
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default DarkModeToggle;
