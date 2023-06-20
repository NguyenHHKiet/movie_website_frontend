import { useEffect } from "react";
import SearchIcon from "../search/SearchIcon";

import classes from "./Navbar.module.scss";

const Navbar = () => {
    // next page handler
    function onClickHandler() {
        window.location.replace("/");
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
        <nav className={`${classes["showcase-top"]} header-navbar app`}>
            <h2 onClick={onClickHandler}>Movie App</h2>
            <SearchIcon />
        </nav>
    );
};

export default Navbar;
