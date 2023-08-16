import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App.jsx";
import Profile from "./pages/Profile.jsx";
import Count from "./pages/Count.jsx";
import Timer from "./pages/Timer.jsx";
import NumberAdder from "./pages/NumberAdder.jsx";
import Dog from "./pages/Dog.jsx";

// setup router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/count",
    element: <Count />,
  },
  {
    path: "/timer",
    element: <Timer />,
  },
  {
    path: "/number-adder",
    element: <NumberAdder />,
  },
  {
    path: "/dog",
    element: <Dog />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
