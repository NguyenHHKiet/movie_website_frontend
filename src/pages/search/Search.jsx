import { Fragment, useEffect, useState } from "react";
import SearchForm from "../../components/search/form/SearchForm";
import ResultList from "../../components/search/ResultList";
import MovieDetail from "../../components/movies/MovieDetail";

import useFetch from "../../hooks/useFetch";
import { requests } from "../../api/API";

const Search = () => {
    const [text, setText] = useState("");
    const [result, setResult] = useState(null);

    // show popup details
    const [detail, setDetail] = useState(null);
    const [popUp, setPopUp] = useState(false);

    const { error, isLoading, sendRequest } = useFetch();

    // check keyword don't empty
    const checkContent = text.trim() !== "";

    useEffect(() => {
        if (checkContent) {
            sendRequest(
                { url: `${requests.fetchSearch}&query=${text}` },
                setResult,
            );
        }
    }, [sendRequest, text, checkContent]);

    // show and hide about description detail
    const showPopUpHandler = () => setPopUp(true);
    const hidePopUpHandler = () => setPopUp(false);

    const contentResultList = result ? (
        <ResultList
            result={result}
            isLoading={isLoading}
            error={error}
            check={checkContent}
            onShowDetail={showPopUpHandler}
            setMovieDetail={setDetail}
        />
    ) : (
        <div className="w-full" style={{ height: "70vh" }}></div>
    );

    return (
        <Fragment>
            {popUp && <MovieDetail movie={detail} onClose={hidePopUpHandler} />}
            <div className="container">
                <div className="pt-20">
                    <SearchForm setText={setText} />
                    <h2 className="py-2">Result List</h2>
                    {contentResultList}
                </div>
            </div>
        </Fragment>
    );
};

export default Search;
