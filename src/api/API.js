const API_KEY = import.meta.env.VITE_API_KEY;
const hosting = "https://api.themoviedb.org/3";
const hostImage = "https://image.tmdb.org/t/p/original";
const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

const urls = [];
// call multiple api
for (const key in requests) {
    if (Object.hasOwnProperty.call(requests, key)) {
        if (key !== "fetchSearch") {
            const element = requests[key];
            urls.push(`${hosting}${element}`);
        }
    }
}

export { hostImage, hosting, requests, urls };
