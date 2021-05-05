import {Route, Switch} from 'react-router-dom';
import { PopularContext } from '../src/components/Contexts';
import { UpcomingContext } from '../src/components/Contexts';
import React , {useState , useEffect} from 'react' ;   
import axios from 'axios';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import Home from './pages/Home';
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

  return (
    
    <div>
      <Navbar />
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
        <Blog/>
      </Route>
        
      </Switch>
        
      </div>
      
  );
}

export default App;
