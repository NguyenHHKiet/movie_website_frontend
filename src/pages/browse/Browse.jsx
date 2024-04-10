import { Fragment, useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import Movies from "../../components/movies/Movies";
import MovieDetail from "../../components/movies/MovieDetail";
import SkeletalMovie from "../../components/UI/skeleton/MovieItem";

import { hosting, requests } from "../../api/API";

import useFetch from "../../hooks/useFetch";

function Browse() {
    const [movies, setMovies] = useState([]);
    const [detail, setDetail] = useState(null);
    const [popUp, setPopUp] = useState(false);

    // custom Hook for
    const { isLoading, error, sendRequest: fetchMovies } = useFetch();

    useEffect(() => {
        // transform data into
        const temp = [];
        const transformData = (key, movie) => {
            temp.push({ ...SubTitleUl[key], key, movie });
            const uniqueArr = temp.sort((a, b) => a.id - b.id);
            setMovies(uniqueArr);
        };
        // call multiple api
        for (const key in requests) {
            if (Object.hasOwnProperty.call(requests, key)) {
                if (key !== "fetchSearch") {
                    const element = requests[key];
                    fetchMovies(
                        { url: `${hosting}${element}` },
                        transformData.bind(null, key),
                    );
                }
            }
        }
    }, [fetchMovies]);

    // custom transform object for rendering
    const SubTitleUl = {
        fetchNetflixOriginals: { id: 0, title: "Original" },
        fetchTrending: { id: 1, title: "Xu hướng" },
        fetchTopRated: { id: 2, title: "Xếp hạng cao" },
        fetchActionMovies: { id: 3, title: "Hành động" },
        fetchComedyMovies: { id: 4, title: "Hài" },
        fetchHorrorMovies: { id: 5, title: "Kinh dị" },
        fetchRomanceMovies: { id: 6, title: "Lãng mạn" },
        fetchDocumentaries: { id: 7, title: "Tài liệu" },
    };

    const HeaderTitle = ({ item }) =>
        item.trim() !== "Original" ? (
            <h1 className="container">{item}</h1>
        ) : (
            <></>
        );

    // show and hide about description detail
    const showPopUpHandler = () => setPopUp(true);
    const hidePopUpHandler = () => setPopUp(false);

    const headerContent =
        !isLoading && movies[0]?.key ? (
            <Fragment>
                <Banner image={movies[0].movie} />
            </Fragment>
        ) : (
            <div
                style={{ width: "100%", height: "80vh" }}
                className="animate-pulse bg-slate-900"
            ></div>
        );

    const mainContent = !isLoading ? (
        movies.map((item, index) => (
            <div key={item.key} className="my-4">
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
            </div>
        ))
    ) : (
        <div className="container my-4">
            <SkeletalMovie />
        </div>
    );

    return (
        <Fragment>
            {popUp && <MovieDetail movie={detail} onClose={hidePopUpHandler} />}
            <header>{headerContent}</header>
            <main className="my-8">{mainContent}</main>
        </Fragment>
    );
}

export default Browse;
