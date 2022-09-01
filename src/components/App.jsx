import "../css/App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./layout/Landing";
import Auth from "../pages/Home";
function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Auth authRoute="login" />} />
          <Route path="/register" element={<Auth authRoute="register" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
