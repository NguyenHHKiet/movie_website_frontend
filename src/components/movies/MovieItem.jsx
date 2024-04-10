import React from "react";
import { hostImage } from "../../api/API";
import classes from "./MovieItem.module.scss";

const MovieItem = ({ movie, frame = 1, onShowDetail, setMovieDetail }) => {
    const url = `${hostImage}${
        frame === 0 ? movie.poster_path : movie.backdrop_path
    }`;

    // take information to detail from item
    const onClickHandler = () => {
        onShowDetail();
        setMovieDetail(movie);
    };

    return (
        <div>
            <img
                onClick={onClickHandler}
                className={classes["movie-item"]}
                src={url}
                alt="image"
                loading="lazy"
            />
        </div>
    );
};

export default MovieItem;
