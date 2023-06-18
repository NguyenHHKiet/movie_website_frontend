import { Fragment, useMemo } from "react";
import SearchIcon from "../search/SearchIcon";
import { hostImage } from "../../utils/API";
import Banner from "../banner/Banner";

import classes from "./Navbar.module.scss";

const Navbar = ({
    image = { results: [] },
    error,
    isLoading,
    modal = false,
}) => {
    // random number generator of objects position
    const numRandom = useMemo(() => {
        return Math.floor(Math.random() * image.results.length - 1);
    }, [image]);

    const { backdrop_path, original_name, overview } = image.results[numRandom]
        ? image.results[numRandom]
        : {};

    // next page handler
    function onClickHandler() {
        window.location.replace("/");
    }

    // effect scrolling
    window.addEventListener("scroll", () => {
        const navbarHeight = document.querySelector(".header-navbar");
        if (window.scrollY > 100) {
            navbarHeight.classList.add(`${classes["header-scrolled"]}`);
        } else if (window.scrollY <= 100) {
            navbarHeight.classList.remove(`${classes["header-scrolled"]}`);
        }
    });

    if (error) {
        return error;
    }

    // it take for search page don't need banner
    if (modal) {
        return (
            <header className={`${classes["showcase-top"]} header-navbar app`}>
                <h2 onClick={onClickHandler}>Movie App</h2>
                <SearchIcon />
            </header>
        );
    }

    // slice overview content to brief
    let brief = "";
    if (overview.length > 300) {
        brief = overview.substring(0, 300) + " .......";
    }

    return (
        <Fragment>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <Banner
                    className={classes.showcase}
                    url={`${hostImage}${backdrop_path}`}>
                    <header
                        className={`${classes["showcase-top"]} header-navbar app`}>
                        <h2 onClick={onClickHandler}>Movie App</h2>
                        <SearchIcon />
                    </header>
                    <div className="app">
                        <h1>{original_name}</h1>
                        <button>Play</button>
                        <button>My List</button>
                        <p>{brief}</p>
                    </div>
                </Banner>
            )}
        </Fragment>
    );
};

export default Navbar;
