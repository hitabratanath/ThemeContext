import CustomButton from "./CustomButton";
import "./styles.css";
import { ThemeProvider } from "./ThemeContext";
export default function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <CustomButton />
      </div>
    </ThemeProvider>
  );
}
