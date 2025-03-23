import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../src/context/ThemeContext";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Outlet /> {/* اینجا صفحات فرزند نمایش داده می‌شوند */}
      </ThemeProvider>
    </div>
  );
};

export default App;
