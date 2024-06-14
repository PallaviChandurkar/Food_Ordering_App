import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import GroceryItems from "./components/GroceryItems";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Error from "./components/Error";
import Contact from "./components/Contact";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div>
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

const GroceryItems = lazy(() => import("./components/GroceryItems"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurantinfo/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <GroceryItems />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
