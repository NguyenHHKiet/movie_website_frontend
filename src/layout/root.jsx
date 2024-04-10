import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "./footer/Footer";

export default function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
