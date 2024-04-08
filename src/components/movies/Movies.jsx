// import Swiper core and required modules
import { Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import MovieItem from "./MovieItem";

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
                className="py-2"
                modules={[Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={"auto"}
                // breakpoints={{
                //     768: {
                //         slidesPerView: frame === 0 ? 10 : 5,
                //     },
                // }}
                scrollbar={{ draggable: true }}
                direction={"horizontal"}
            >
                {movies?.results.map((movie) => (
                    <SwiperSlide key={movie.original_title}>
                        <MovieItem
                            movie={movie}
                            frame={frame}
                            onShowDetail={onShowDetail}
                            setMovieDetail={setMovieDetail}
                        />
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

    return <div className="py-2">{content}</div>;
};

export default Movies;
