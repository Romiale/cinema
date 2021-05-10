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
    popularMovies:[],
    upcomingMovies: [],
    ActionMovies: [],
    MoviesCategories:[]
  })

  useEffect(() => {
  
  const getDataMovies = async () => {
    const resultPopularMovies = await axios("https://api.themoviedb.org/3/movie/popular?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US");
    const resultUpcomingMovies = await axios("https://api.themoviedb.org/3/movie/upcoming?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US&page=1")
    const resultMoviesCategories=await axios (`https://api.themoviedb.org/3/genre/movie/list?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US`)
    setMovies({ ...movies, popularMovies: resultPopularMovies.data.results, upcomingMovies: resultUpcomingMovies.data.results, MoviesCategories:resultMoviesCategories.data.genres});
    
  }
  getDataMovies()
 
}, [])

  
  
const [foundMovies, setFoundMovies] = useState([])
const [query, setQuery] = useState("")

  const handlClick = () => {
     const fecthMovies = async () => {
            const fecthFoundMovies = await axios(`https://api.themoviedb.org/3/search/movie?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US&query=${query}&page=all&include_adult=false`)
            setFoundMovies(fecthFoundMovies.data.results)
        }
        fecthMovies()
  }
       
  const handlChange = event => setQuery(event.target.value)

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
                
  return (
    
    <div>
      <Navbar handlClick={handlClick} handlChange={handlChange} />
      <Sidebar/>
      <Switch>

      <Route exact path="/">
          <UpcomingContext.Provider value={movies.upcomingMovies}>
              <PopularContext.Provider value={movies.popularMovies}>
                  <Home />
              </PopularContext.Provider>
          </UpcomingContext.Provider>
      </Route>

      <Route path="/movies">
          <Movies getMoviesByCategories={getMoviesByCategories} MoviesByGenre={MoviesByGenre} genres={movies.MoviesCategories}/>
      </Route>

      <Route path="/series">
        <TV/>
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
