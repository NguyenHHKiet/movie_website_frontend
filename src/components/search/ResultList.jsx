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
        return "No Found Movies";
    }

    if (error) {
        return error;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    } else {
        content = (
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                }}
            >
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
