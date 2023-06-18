import { Fragment, useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { hosting, requests } from "../../utils/API";
import useHTTP from "../../hooks/use-http";
import Movies from "../../components/movies/Movies";
import MovieDetail from "../../components/movies/MovieDetail";

function Browse() {
    const [movies, setMovies] = useState([]);
    const [flag, setFlag] = useState(false);

    const [detail, setDetail] = useState(null);
    const [popUp, setPopUp] = useState(false);

    // custom Hook for
    const { isLoading, error, sendRequest: fetchMovies } = useHTTP();

    useEffect(() => {
        // transform data into
        let temp = [];
        const transformData = (key, movie) => {
            temp.push({ ...SubTitleUl(key), key, movie });
            const uniqueArr = temp
                .filter(
                    (obj, index, self) =>
                        index === self.findIndex((t) => t?.id === obj?.id)
                )
                .sort((a, b) => a.id - b.id);
            setMovies(uniqueArr);
            setFlag(true);
        };
        // call multiple api
        for (const key in requests) {
            if (Object.hasOwnProperty.call(requests, key)) {
                if (key !== "fetchSearch") {
                    const element = requests[key];
                    fetchMovies(
                        { url: `${hosting}${element}` },
                        transformData.bind(null, key)
                    );
                }
            }
        }
    }, [fetchMovies]);

    // custom transform object for rendering
    function SubTitleUl(title) {
        switch (title) {
            case "fetchNetflixOriginals":
                return { id: 0, title: "Original" };
            case "fetchTrending":
                return { id: 1, title: "Xu hướng" };
            case "fetchTopRated":
                return { id: 2, title: "Xếp hạng cao" };
            case "fetchActionMovies":
                return { id: 3, title: "Hành động" };
            case "fetchComedyMovies":
                return { id: 4, title: "Hài" };
            case "fetchHorrorMovies":
                return { id: 5, title: "Kinh dị" };
            case "fetchRomanceMovies":
                return { id: 6, title: "Lãng mạn" };
            case "fetchDocumentaries":
                return { id: 7, title: "Tài liệu" };
            default:
                break;
        }
    }

    const HeaderTitle = ({ item }) =>
        item.trim() !== "Original" ? (
            <h1 style={{ marginBottom: "0" }}>{item}</h1>
        ) : (
            <></>
        );

    // show and hide about description detail
    const showPopUpHandler = () => setPopUp(true);
    const hidePopUpHandler = () => setPopUp(false);

    return (
        <Fragment>
            {popUp && <MovieDetail movie={detail} onClose={hidePopUpHandler} />}
            {flag ? (
                <Navbar
                    image={movies[0].movie}
                    error={error}
                    isLoading={isLoading}
                />
            ) : (
                <p>Loading......</p>
            )}
            <div className="app">
                {isLoading ? (
                    <p>Loading......</p>
                ) : (
                    movies.map((item, index) => (
                        <>
                            <HeaderTitle item={item.title} />
                            <Movies
                                key={item.key}
                                movies={item.movie}
                                error={error}
                                isLoading={isLoading}
                                frame={index}
                                onShowDetail={showPopUpHandler}
                                setMovieDetail={setDetail}
                            />
                        </>
                    ))
                )}
            </div>
        </Fragment>
    );
}

export default Browse;
