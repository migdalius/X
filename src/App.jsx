import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

import StepTwo from "./pages/stepTwo/StepTwo";
import StepThree from "./pages/stepThree/StepThree";
import StepFour from "./pages/stepFour/StepFour";
import StepFive from "./pages/stepFive/StepFive";
import StepOne from "./pages/stepOne/StepOne";

import SingleProduct from "./pages/singleProduct/SingleProduct";
import HomeAdmin from "./pages/admin/home/HomeAdmin";
import AdressAdmin from "./pages/admin/adress/AdressAdmin";
import OrderAdmin from "./pages/admin/order/OrderAdmin";
import Login from "./pages/auth/login/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/krok-1" element={<StepOne />} />
        <Route path="/krok-2" element={<StepTwo />} />
        <Route path="/krok-3" element={<StepThree />} />
        <Route path="/krok-4" element={<StepFour />} />
        <Route path="/krok-5" element={<StepFive />} />
        <Route path="/krok-6" element={<StepFive />} />
        <Route path="/lista-produktow/:id" element={<SingleProduct />} />
        <Route path="/admin/dashboard" element={<HomeAdmin />} />
        <Route path="/admin/adres-dostawy" element={<AdressAdmin />} />
        <Route path="/admin/moje-zamowienia" element={<OrderAdmin />} />

        <Route path="/auth/logowanie" element={<Login />} />
        <Route path="/auth/rejestracja" element={<OrderAdmin />} />

        {/* 

          -login-
          login form
          register form

          -just page-
          All product (view)
          error 404
          contact form

          -order-
          shopinng cart 
          empty shopping cart
          Deliver (page with form for delivery)
          Payment (page with payment methods)
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
