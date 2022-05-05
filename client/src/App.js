import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CreateAccount from "./pages/Createaccount";
import TraderIndex from "./pages/TraderIndex";
import AddItem from "./pages/AddItem";
import UpdateItem from "./pages/UpdateItem";
import AddPromotion from "./pages/AddPromotion";
import ViewPromtions from "./pages/ViewPromtions";
import Users from "./pages/Users";
import Inventory from "./pages/Inventory";
import CustomerIndex from "./pages/CustomerIndex";
import CustomerCart from "./pages/CustomerCart";
import CustomerWishList from "./pages/CustomerWishList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/traderHome" element={<TraderIndex />} />
        <Route path="/AddItem" element={<AddItem />} />
        <Route
          path="/ItemUpdate/:id/:name/:price/:qty/:promo"
          element={<UpdateItem />}
        />
        <Route
          path="/addPromo/:id/:name/:price/:qty/:promo"
          element={<AddPromotion />}
        />
        <Route path="/viewPromtions" element={<ViewPromtions />} />
        <Route path="/users" element={<Users />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/customerHome" element={<CustomerIndex />} />
        <Route path="/myCart" element={<CustomerCart />} />
        <Route path="/myWishList" element={<CustomerWishList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
