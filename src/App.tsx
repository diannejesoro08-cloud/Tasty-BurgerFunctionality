import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import { GlobalContextProvider } from "./context/store";

function App() {
  return (
    <GlobalContextProvider>
      <div className="min-h-screen bg-[url('/background.jpg')] bg-repeat bg-contain">
        <MainHeader />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
        <MainFooter />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
