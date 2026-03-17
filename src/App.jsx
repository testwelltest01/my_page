import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import MainPage from "./pages/MainPage";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import Cat from "./pages/cat";
import RandomAnimal from "./pages/RandomAnimal";
import TrafficFast from "./pages/TrafficFast";
import DesignSystemDemo from "./pages/DesignSystemDemo";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/FirstPage" element={<FirstPage />} />
          <Route path="/SecondPage" element={<SecondPage />} />
          <Route path="/Cat" element={<Cat />} />
          <Route path="/RandomAnimal" element={<RandomAnimal />} />
          <Route path="/Traffic" element={<TrafficFast />} />
          <Route path="/DesignSystemDemo" element={<DesignSystemDemo />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
