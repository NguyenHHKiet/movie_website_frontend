import { useMemo, Fragment } from "react";
import { hostImage } from "../../api/API";

import Button from "../UI/button/Button";
import classes from "./Banner.module.scss";

const Banner = ({ image }) => {
    // random number generator of objects position in banner run for once
    const numRandom = useMemo(() => {
        return Math.floor(Math.random() * image.results.length - 1);
    }, [image]);

    const {
        backdrop_path: backdropPath,
        original_name: originalName,
        overview,
    } = image.results[numRandom] ? image.results[numRandom] : {};

    const url = `${hostImage}${backdropPath}`;

    const content = (
        <div
            className="w-full"
            style={{
                background: `linear-gradient(to bottom, rgba(255, 0, 0, 0.1), rgba(0, 0, 0, 1)),
                    url(${url}) no-repeat center center/cover`,
                height: "80vh",
            }}
        >
            <div
                className={`${classes.showcase} w-full h-full container relative`}
            >
                <div className="absolute block bottom-6 w-1/2">
                    <h1>{originalName}</h1>
                    <Button className="mr-4">Play</Button>
                    <Button>My List</Button>
                    <p
                        className="overflow-hidden"
                        style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 4,
                        }}
                    >
                        {overview}
                    </p>
                </div>
            </div>
        </div>
    );

    // should be splitting banner and navbar to be 2 components
    // do not interlocking in navbar
    return <Fragment>{content}</Fragment>;
};

export default Banner;
