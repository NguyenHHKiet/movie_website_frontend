import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import SearchForm from "../../components/search/SearchForm";
import ResultList from "../../components/search/ResultList";
import MovieDetail from "../../components/movies/MovieDetail";

import useHTTP from "../../hooks/use-http";
import { hosting, requests } from "../../utils/API";

const Search = () => {
    const [text, setText] = useState("");
    const [result, setResult] = useState(null);

    // show popup details
    const [detail, setDetail] = useState(null);
    const [popUp, setPopUp] = useState(false);

    const { error, isLoading, sendRequest } = useHTTP();

    const checkContent = text.trim().length !== 0;

    useEffect(() => {
        if (checkContent) {
            sendRequest(
                { url: `${hosting}${requests.fetchSearch}&query=${text}` },
                setResult
            );
        }
    }, [sendRequest, text, checkContent]);

    // show and hide about description detail
    const showPopUpHandler = () => setPopUp(true);
    const hidePopUpHandler = () => setPopUp(false);

    return (
        <Fragment>
            {popUp && <MovieDetail movie={detail} onClose={hidePopUpHandler} />}
            <Navbar modal={true} />
            <div className="app relative top-20">
                <SearchForm setText={setText} />
                <h2 className="py-2">Result List</h2>
                <ResultList
                    result={result}
                    isLoading={isLoading}
                    error={error}
                    check={checkContent}
                    onShowDetail={showPopUpHandler}
                    setMovieDetail={setDetail}
                />
            </div>
        </Fragment>
    );
};

export default Search;
