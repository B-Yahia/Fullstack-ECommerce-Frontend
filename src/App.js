import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductListingPages from "./Pages/ProductListingPages/ProductListingPages";
import Header from "./Components/Header/Header";
import CartModal from "./Components/CartModal/CartModal";
import { useSelector } from "react-redux";
import ProdutDetailsPage from "./Pages/ProdutDetailsPage/ProdutDetailsPage";

function App() {
  const modal = useSelector((state) => state.cart.hiden);
  return (
    <div className="app_container">
      <Header />
      {!modal && <CartModal />}

      <main>
        <Routes>
          <Route path="/" element={<ProductListingPages />} />
          <Route path="/:id" element={<ProductListingPages />} />
          <Route path="/product/:id" element={<ProdutDetailsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
