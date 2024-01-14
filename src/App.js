import "./css/style.css";

import { DataProvider } from "./context/DataContext";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./components/Pages/LoginPage";
import HomePage from "./components/Pages/HomePage";
import Profile from "./components/Pages/ProfilePage";

function App() {
  return (
    <div>
      <DataProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
