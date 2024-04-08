import React, { Fragment, useEffect, useState } from "react";
import Modal from "../UI/Modal";
import YouTube from "../UI/YouTube";
import { API_KEY, hostImage } from "../../utils/API";
import useHTTP from "../../hooks/use-http";

import classes from "./MovieDetail.module.scss";

const MovieDetail = ({ onClose, movie }) => {
    const [detail, setDetail] = useState(null);

    const { isLoading, sendRequest } = useHTTP();

    let key = "";

    useEffect(() => {
        sendRequest(
            {
                url: `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&&language=en-US`,
            },
            setDetail,
        );
    }, [sendRequest, movie.id]);

    if (detail) {
        for (const item of detail.results) {
            if (
                item.site === "YouTube" &&
                (item.type === "Trailer" || item.type === "Teaser")
            ) {
                key = item.key;
                break;
            }
        }
    }

    // left content detail
    const detailContent = !movie ? (
        <h1>No movie found.</h1>
    ) : (
        <Fragment>
            <h1 className={classes["header-line"]}>
                {movie.original_title ? movie.original_title : movie.name}
            </h1>
            <div style={{ fontWeight: "bold" }}>
                Release Date:{" "}
                {movie.release_date ? movie.release_date : movie.first_air_date}
                <br />
                Vote: {movie.vote_average}/10
            </div>
            <p>
                {movie.overview.trim() !== ""
                    ? movie.overview
                    : "Empty Overview"}
            </p>
        </Fragment>
    );

    // right content detail
    const detailVideo = !detail ? (
        <img
            src={`${hostImage}${
                movie.backdrop_path ? movie.backdrop_path : movie.poster_path
            }`}
            style={{
                width: `${movie.backdrop_path ? "100%" : "auto"}`,
                height: `${movie.poster_path ? "50vh" : "auto"}`,
                objectFit: "cover",
            }}
            alt="image"
        />
    ) : (
        <YouTube videoId={key} />
    );

    return (
        <Fragment>
            <Modal onClose={onClose}>
                <div className={classes.showcase}>
                    <div>{detailContent}</div>
                    <div className={classes.teaser}>
                        {isLoading ? "Loading..." : detailVideo}
                    </div>
                </div>
            </Modal>
        </Fragment>
    );
};

export default MovieDetail;
