import {Route, Switch} from 'react-router-dom';
import { PopularContext } from '../src/components/Contexts';
import { UpcomingContext } from '../src/components/Contexts';
import React , {useState , useEffect,useContext} from 'react' ;   
import axios from 'axios';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import Home from './pages/Home';
import { searchContext,FoundsearchContext } from './components/Contexts';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';





function App() {
  const [movies, setMovies] = useState({
    popularMovies:[],
    upcomingMovies:[]
  })

  useEffect(() => {
  
  const getDataMovies = async () => {
    const resultPopularMovies = await axios("https://api.themoviedb.org/3/movie/popular?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US");
    const resultUpcomingMovies=await axios("https://api.themoviedb.org/3/movie/upcoming?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US&page=1")
    setMovies({...movies,popularMovies:resultPopularMovies.data.results,upcomingMovies:resultUpcomingMovies.data.results });
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

      <Route path="/contact">
        <Contact/>
      </Route>

      <Route path="/about">
        <About/>
      </Route>
        
        <Route path="/blog">
          <searchContext.Provider value={foundMovies}>
            <Blog/>
          </searchContext.Provider>
      </Route>
        
      </Switch>
        
      </div>
      
  );
}

export default App;
