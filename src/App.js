import "./css/style.css";
import HomePage from "./components/Pages/HomePage";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div>
      <DataProvider>
        <HomePage />
      </DataProvider>
    </div>
  );
}

export default App;
