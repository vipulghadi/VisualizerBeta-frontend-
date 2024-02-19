import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return ( <
        BrowserRouter >
        <
        ToastContainer / >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = "/home"
        element = { < Home / > }
        />{" "} <
        Route path = "/about"
        element = { < About / > }
        /> <
        Route path = "/"
        element = { < Home / > }
        />{" "} <
        /Routes>{" "} <
        /BrowserRouter>
    );
}

export default App;