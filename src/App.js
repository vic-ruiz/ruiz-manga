import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { CartProvider } from "./context/CartContext";
import { ItemDetailContainer } from "./ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import {Order} from "./components/Order/Order"
import {ThankYou} from "./components/ThankYou/ThankYou"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<ItemListContainer />} />
            <Route path="category">
              <Route path=":categoryId" element={<ItemListContainer />} />
            </Route>
            <Route path="item">
              <Route path=":productId" element={<ItemDetailContainer />} />
            </Route>
            <Route path="cart" index element={<Cart />}></Route>
            <Route path="order" index element={<Order />}></Route>
            <Route path="thanks">
              <Route path=":orderId" element={<ThankYou />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
