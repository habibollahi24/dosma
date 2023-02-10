import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./app";
import CheckOut from "./pages/check-out";
import Repairman from "./pages/repairman";

import CartContext from "./context/cart-context";

const router = createBrowserRouter([
   {
      path: "/",
      element: (
         <div className="my-container">
            <App />
         </div>
      ),
   },
   {
      path: "check-out",
      element: (
         <div className="my-container">
            <CheckOut />
         </div>
      ),
   },
   {
      path: "repairman/refrigrator",
      element: (
         <div className="my-container">
            <Repairman title="یخچال و فریزر" />
         </div>
      ),
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   // <React.StrictMode>
   <CartContext>
      <RouterProvider router={router} />
   </CartContext>
   // </React.StrictMode>
);
