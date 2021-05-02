import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import NavigationBar from './components/NavigationBar/NavigationBar';
import AllProject from './components/AllProject/AllProject';
import AllBlog from './components/AllBlog/AllBlog';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

function App() {
  return (
    <div style={{ backgroundColor: '#0e1529' }}>
      <Router>
        <div className="container">
          <NavigationBar></NavigationBar>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/blog">
            <AllBlog />
          </Route>
          <Route path="/project">
            <AllProject />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
