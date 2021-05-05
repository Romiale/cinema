import {Route, Switch} from 'react-router-dom';
import {PopularContext} from '../src/components/Contexts'
import React , {useState , useEffect} from 'react' ;   
import axios from 'axios';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';





function App() {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
  
  const PopularMoviesRecuperation = async () => {
  const resultPopularMovies= await axios("https://api.themoviedb.org/3/movie/popular?api_key=e2a2f53fe94c336a47e632ddb6b9fc26&language=en-US");
    setPopularMovies(resultPopularMovies.data.results);
  }
  PopularMoviesRecuperation()
 
}, [])

  return (
    <div>
      <Navbar />
      <Sidebar/>
      <Switch>

      <Route exact path="/">
        <PopularContext.Provider value={popularMovies}>
            <Home />
        </PopularContext.Provider>
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
