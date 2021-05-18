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
    ActionMovies: [],
    MoviesCategories: [],
    TvCategories:[],
    
  })

  useEffect(() => {
  
  const getDataMovies = async () => {
    const resultUpcomingMovies = await axios("https://api.themoviedb.org/3/movie/upcoming?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US&page=1")
    const resultMoviesCategories = await axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US`)
    const resultTvCategories = await axios(`https://api.themoviedb.org/3/genre/tv/list?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US`)
    
    setMovies({ ...movies, upcomingMovies: resultUpcomingMovies.data.results, MoviesCategories:resultMoviesCategories.data.genres,TvCategories:resultTvCategories.data.genres});
    
  }
  getDataMovies()
  }, [])
  



  const [pageNumber, setpageNumber] = useState(1)
  const [popularMovies, setPopularMovies] = useState([])
  useEffect(() => {
    const getPopularMovies = async () => {
       const resultPopularMovies = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US&page=${pageNumber}`);
      setPopularMovies(resultPopularMovies.data.results)
      
    }
    getPopularMovies()
  }, [pageNumber])

  const onclickNextPage=() => {
  setpageNumber(pageNumber+1)
  }
  
  const onclickPreviewPage = () => {
      if (pageNumber>1) {
        setpageNumber(pageNumber-1)
      }
}
  
  
const [foundMovies, setFoundMovies] = useState([])
const [query, setQuery] = useState("")

  const handleClick = () => {
    const fecthMovies = async () => {
            const fecthFoundMovies = await axios(`https://api.themoviedb.org/3/search/multi?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US&query=${query}&page=1&include_adult=false`)
      setFoundMovies(fecthFoundMovies.data.results)
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
  const [serieGenreId, setSerieGenreId] = useState("")
  
  useEffect(() => {

    const getSeriesBygenreId = async () => {
      const resultSeriesByGenreId = await axios(`https://api.themoviedb.org/3/discover/tv?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${serieGenreId}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`)
      setSeriesByGenre(resultSeriesByGenreId.data.results);
    }
    getSeriesBygenreId()
    
  }, [serieGenreId])

  const getSeriesByCategories = (genreId) => {
    setSerieGenreId(genreId)
  }


  return (
    <div>
      <Navbar handleClick={handleClick} handleChange={handleChange} />
      <Sidebar/>
      <Switch>

      <Route exact path="/">
          <UpcomingContext.Provider value={movies.upcomingMovies}>
              <PopularContext.Provider value={popularMovies}>
              <Home onclickNextPage={onclickNextPage} onclickPreviewPage={onclickPreviewPage}/>
              </PopularContext.Provider>
          </UpcomingContext.Provider>
      </Route>

      <Route path="/movies">
          <Movies getMoviesByCategories={getMoviesByCategories} MoviesByGenre={MoviesByGenre} genres={movies.MoviesCategories}/>
      </Route>

      <Route path="/series">
          <TV getSeriesByCategories={getSeriesByCategories} seriesByGenre={seriesByGenre} genres={movies.TvCategories}/>
      </Route>
        
        <Route path="/fiction">
          <searchContext.Provider value={foundMovies}>
            <Search/>
          </searchContext.Provider>
      </Route>
        
      </Switch>
        
      </div>
      
  );
}

export default App;
