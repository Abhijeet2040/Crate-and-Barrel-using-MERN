import { Route, Routes } from "react-router-dom";
import Products from "./pages/product/Products";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Account from "./pages/account/Account";
import Cart from "./pages/cart/Cart";
import ProductDetails from "./pages/productdetails/ProductDetails";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/products/:category" element={<Products />}></Route>
        <Route
          path="/products/:category/:id"
          element={<ProductDetails />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
