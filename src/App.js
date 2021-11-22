import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";

import Navbar from "./components/Navbar";
import Experience from "./components/Experience";

function App() {
  return(
    <BrowserRouter>
    <Navbar />
    
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about'/>
        <Route component={SinglePost} path='/post/:slug'/>
        <Route component={Post} path='/post'/>
        <Route component={Experience} path='/project'/>
       
      </Switch>
    
    </BrowserRouter>
  )   
}

export default App;
