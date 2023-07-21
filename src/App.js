import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GeneralProvider } from "./Context";
import Home from "./views/Home";
import ProductDetail from "./views/ProductDetail";
import Tienda from "./views/Tienda";
import Cart from "./views/Cart";
import Registration from "./views/Registration"

function App() {
  
  return (
    <div className="App">
      <GeneralProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tienda" element={<Tienda />} />
            <Route path="/pizza/:id" element={<ProductDetail />} />
            <Route path="/ShopCart" element={<Cart />} />
            <Route path="/Registration" element={<Registration />} />

          </Routes>
        </BrowserRouter>
      </GeneralProvider>
    </div>
  );
}

export default App;
