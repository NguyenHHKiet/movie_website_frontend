import { useMemo, Fragment } from "react";
import { hostImage } from "../../utils/API";
import classes from "./Banner.module.scss";

const Banner = ({ image, error, isLoading }) => {
    // random number generator of objects position in banner run for once
    const numRandom = useMemo(() => {
        return Math.floor(Math.random() * image.results.length - 1);
    }, [image]);

    const {
        backdrop_path: backdropPath,
        original_name: originalName,
        overview,
    } = image.results[numRandom] ? image.results[numRandom] : {};

    // slice overview content to brief
    let content = "No found background of banner";
    let brief = "";
    if (overview.length > 300) {
        brief = overview.substring(0, 300) + " .......";
    } else {
        brief = overview;
    }

    const url = `${hostImage}${backdropPath}`;

    if (error) {
        return error;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    } else {
        content = (
            <div
                className={classes.showcase}
                style={{
                    background: `url(${url}) no-repeat center center/cover`,
                }}
            >
                <div className="app">
                    <h1>{originalName}</h1>
                    <button>Play</button>
                    <button>My List</button>
                    <p>{brief}</p>
                </div>
            </div>
        );
    }

    // should be splitting banner and navbar to be 2 components
    // do not interlocking in navbar
    return <Fragment>{content}</Fragment>;
};

export default Banner;
