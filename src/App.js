import AppRoutes from "./routes";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
