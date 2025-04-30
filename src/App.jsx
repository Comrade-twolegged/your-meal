import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Shop from "./pages/Shop/Shop.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Product from "./pages/Product/Product.jsx";

function App() {

  const Root = () => {
    return (
      <div className="container">
        <Outlet />
      </div>
    );
  };

  return (
    <>
      <Header />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Shop />} />
            <Route path="About-us" element={<AboutUs />} />
            <Route path="product/:id" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  )
}

export default App
