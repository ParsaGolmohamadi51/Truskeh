import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Outlet /> {/* اینجا صفحات فرزند نمایش داده می‌شوند */}
    </div>
  );
}

export default App;
