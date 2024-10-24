import logo from "./logo.svg";
import "./App.css";
import Body from "./components/body";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createBrowserRouter } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Profile from "./components/ProfileClass";
import { lazy, Suspense } from "react";
import Test from "./components/Test";
import Home from "./components/Home";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";

const About = lazy(() => import("./components/About"));

function AppLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer /> {/* <Profile name={"saket"} surname={"patel"} /> */}{" "}
        </>
    );
}

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                // element: <Home />,
                element: <Body />,
            },
            {
                path: "/about",
                element: (
                    <Suspense>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "/test",
                element: <Test />,
                // element: <Body />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            // {
            //     path: "/profile",
            //     element: <Profile />,
            // },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);
export default AppLayout;
