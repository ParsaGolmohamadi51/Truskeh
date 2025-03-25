import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
