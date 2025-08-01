import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import UserContext from "./utils/userContext";

const Grocery = lazy(()=> import ("./components/Grocery"));

const AppLayout = () => {

    const [userName,setUserName] = useState();

    useEffect(()=>{
        const data = {
            name: "Pallavi Patil"
        };
        setUserName(data.name);
    },[]);

    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div>
        <Provider store={appStore}>
           <Header />
           <Outlet />
        </Provider>
        </div>
        </UserContext.Provider>
    )
}

let appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            // {
            //     path: "/grocery",
            //     element: (
            //         <Suspense fallback={<div>Loading.......</div>}>
            //             <Grocery />
            //         </Suspense>
            //     )
            // },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            },
        ],
        errorElement: <Error />
    }
])

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);