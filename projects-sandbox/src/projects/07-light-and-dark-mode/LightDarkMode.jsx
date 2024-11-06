import { useState, useEffect, React } from "react";
import Blog from "./Blog";
import { ThemeContext, themes } from "./context/theme-context";

export default function LightDarkMode() {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    const docBody = document.body;
    if (theme === themes.light) {
      docBody.classList.remove("bg-dark", "text-light");
      docBody.classList.add("bg-light", "text-dark");
    } else {
      docBody.classList.remove("bg-light", "text-dark");
      docBody.classList.add("bg-dark", "text-light");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Blog />
    </ThemeContext.Provider>
  );
}
