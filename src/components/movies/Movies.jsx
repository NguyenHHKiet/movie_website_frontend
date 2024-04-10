// import Swiper core and required modules
import { Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import MovieItem from "./MovieItem";
import Card from "../UI/card/Card";

const Movies = ({
    movies,
    error,
    isLoading,
    frame,
    onShowDetail,
    setMovieDetail,
}) => {
    let movieList = <h2>No movies found.</h2>;

    // render the movie list horizontally
    if (movies?.results?.length > 0) {
        movieList = (
            <Swiper
                className="pb-10 pt-8 px-8"
                modules={[Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={"auto"}
                scrollbar={{ draggable: true }}
                direction={"horizontal"}
            >
                {movies?.results.map((movie) => (
                    <SwiperSlide key={movie.original_title}>
                        <Card frame={frame}>
                            <MovieItem
                                movie={movie}
                                frame={frame}
                                onShowDetail={onShowDetail}
                                setMovieDetail={setMovieDetail}
                            />
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }

    let content = movieList;

    if (error) {
        content = <button>Try again</button>;
    }

    if (isLoading) {
        content = "Loading movies...";
    }

    return <div>{content}</div>;
};

export default Movies;
