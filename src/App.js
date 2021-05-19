import {Route, Switch} from 'react-router-dom';
import { PopularContext } from '../src/components/Contexts';
import { UpcomingContext } from '../src/components/Contexts';
import React , {useState , useEffect} from 'react' ;   
import axios from 'axios';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import Home from './pages/Home';
import { searchContext} from './components/Contexts';
import Movies from './pages/Movies';
import TV from './pages/TV';
import Search from './pages/Search';





function App() {
  const [movies, setMovies] = useState({
    upcomingMovies: [],
    popularMovies:[],
    moviesCategories: [],
    tvCategories:[],
    
  })

  useEffect(() => {
  const getMovies = async () => {
    const resultUpcomingMovies = await axios("https://api.themoviedb.org/3/movie/upcoming?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US&page=1")
    const resultOfPopularMovies = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US&page=1`);
    const resultMoviesCategories = await axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US`)
    const resultTvCategories = await axios(`https://api.themoviedb.org/3/genre/tv/list?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US`)
    setMovies({ ...movies, upcomingMovies: resultUpcomingMovies.data.results,popularMovies:resultOfPopularMovies.data.results,moviesCategories:resultMoviesCategories.data.genres,tvCategories:resultTvCategories.data.genres});
  }
  getMovies()
  }, [movies])



  const goToNextPage = () => {
  }
  
  const goToPreviewPage = () => {
}
  
  
const [moviesFound, setFoundMovies] = useState([])
const [query, setQuery] = useState("")

  const handleClick = () => {
    const fecthMovies = async () => {
            const resultsOfFoundMovies = await axios(`https://api.themoviedb.org/3/search/multi?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US&query=${query}&page=1&include_adult=true`)
      setFoundMovies(resultsOfFoundMovies.data.results)
        }
        fecthMovies()
  }
  const handleChange = event => setQuery(event.target.value)


  const [MoviesByGenre, setMoviesBygenre] = useState([])
  const [movieGenreId, setMovieGenreId] = useState("")
  
  useEffect(() => {

    const getMoviesBygenreId = async () => {
      const resultMoviesByGenreId = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${movieGenreId}&with_watch_monetization_types=flatrate`)
      setMoviesBygenre(resultMoviesByGenreId.data.results);
    }
    getMoviesBygenreId()
    
  }, [movieGenreId])

  const getMoviesByCategories = (genreId) => {
      setMovieGenreId(genreId)
  }
  
  

  const [seriesByGenre, setSeriesByGenre] = useState([])
  const [seriesGenreId, setSeriesGenreId] = useState("")
  
  useEffect(() => {

    const getSeriesBygenreId = async () => {
      const resultSeriesByGenreId = await axios(`https://api.themoviedb.org/3/discover/tv?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${seriesGenreId}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`)
      setSeriesByGenre(resultSeriesByGenreId.data.results);
    }
    getSeriesBygenreId()
    
  }, [seriesGenreId])

  const getSeriesByCategories = (genreId) => {
    setSeriesGenreId(genreId)
  }


  return (
    <div>
      <Navbar handleClick={handleClick} handleChange={handleChange} />
      <Sidebar/>
      <Switch>

      <Route exact path="/">
          <UpcomingContext.Provider value={movies.upcomingMovies}>
              <PopularContext.Provider value={movies.popularMovies}>
              <Home goToNextPage={goToNextPage} goToPreviewPage={goToPreviewPage}/>
              </PopularContext.Provider>
          </UpcomingContext.Provider>
      </Route>

      <Route path="/movies">
          <Movies getMoviesByCategories={getMoviesByCategories} MoviesByGenre={MoviesByGenre} genres={movies.moviesCategories}/>
      </Route>

      <Route path="/series">
          <TV getSeriesByCategories={getSeriesByCategories} seriesByGenre={seriesByGenre} genres={movies.tvCategories}/>
      </Route>
        
        <Route path="/fiction">
          <searchContext.Provider value={moviesFound}>
            <Search/>
          </searchContext.Provider>
      </Route>
        
      </Switch>
        
      </div>
      
  );
}

export default App;
