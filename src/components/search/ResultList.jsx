import MovieItem from "../movies/MovieItem";

const ResultList = ({
    result,
    isLoading,
    error,
    check,
    onShowDetail,
    setMovieDetail,
}) => {
    let content = "";

    if (!check) {
        return (
            <div className="w-full text-center" style={{ height: "70vh" }}>
                No Found Movies
            </div>
        );
    }

    if (error) {
        return error;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    } else {
        content = (
            <div className="grid sm:grid-cols-4 lg:grid-cols-6 gap-4 my-4">
                {result.results.map((item) => (
                    <MovieItem
                        key={item.id}
                        movie={item}
                        frame={0}
                        onShowDetail={onShowDetail}
                        setMovieDetail={setMovieDetail}
                    />
                ))}
            </div>
        );
    }

    return <div>{content}</div>;
};

export default ResultList;
