const api_key = process.env.REACT_APP_API_KEY


const requests = {
    'trending': `/trending/all/day?api_key=${api_key}`,    
    'movie_list': `/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    'tv_list': `/tv/popular?api_key=${api_key}&language=en-US&page=1`,
    'discover': `/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
}

export default requests