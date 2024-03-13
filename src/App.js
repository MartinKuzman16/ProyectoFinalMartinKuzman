import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/JSX/Navbar";
import ItemListContainer from "./components/JSX/ItemListContainer";
import ItemDetailContainer from "./components/JSX/ItemDetailContainer";
import { CartProvider } from "./components/JSX/CartContext";
import Cart from "./components/JSX/Cart";
import NewProduct from "./components/JSX/newProduct";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer gretting={"Salinas BarberShop"} />}
          />
          <Route exact path="/cart" element={<Cart />} />
          <Route
            exact
            path="/category/:idcategoria"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:iditem" element={<ItemDetailContainer />} />
          <Route exact path="/newProduct" element={<NewProduct />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
