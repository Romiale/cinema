import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';


function App() {
  return (
    <div>
      <Navbar />
      <Sidebar/>
      <Switch>

      <Route exact path="/">
        <Home/>
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
