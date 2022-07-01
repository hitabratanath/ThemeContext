import "./styles.css";
// import { ThemeContext } from ./App";
import { useTheme, ThemeContext } from "./ThemeContext";
const CustomButton = () => {
  const val = useTheme(ThemeContext);
  return (
    <button
      onClick={val.toggleDark}
      className={val.isDark ? "btn-style dark" : "btn-style light"}
    >
      click to toggle
    </button>
  );
};
export default CustomButton;
