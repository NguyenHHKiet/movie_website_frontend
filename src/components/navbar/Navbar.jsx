import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../search/SearchIcon";

import classes from "./Navbar.module.scss";

const Navbar = () => {
    const navigate = useNavigate();
    // next page handler
    function onClickHandler() {
        navigate("/");
    }

    useEffect(() => {
        // effect scrolling
        const handleScroller = () => {
            const navbarHeight = document.querySelector(".header-navbar");
            if (window.scrollY > 100) {
                navbarHeight.classList.add(`${classes["header-scrolled"]}`);
            } else if (window.scrollY <= 100) {
                navbarHeight.classList.remove(`${classes["header-scrolled"]}`);
            }
        };

        window.addEventListener("scroll", handleScroller);

        return () => {
            window.removeEventListener("scroll", handleScroller);
        };
    }, []);

    // 1. Add the event listener in the useEffect hook.
    // 2. Return a function from the useEffect hook.
    // 3. Use the removeEventListener method to remove the event listener when the component unmounts.

    return (
        <nav className={`${classes.showcase} w-full z-10 fixed header-navbar`}>
            <div className="container flex justify-between items-center h-24 ">
                <h2
                    className="text-red-500 cursor-pointer"
                    onClick={onClickHandler}
                >
                    Movie App
                </h2>
                <SearchIcon />
            </div>
        </nav>
    );
};

export default Navbar;
