import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage/homePage";
import Navbar from './components/Molecules/Navbar/navBar';
import { Aboutus } from "./components/Molecules/Aboutus/aboutUs";
import Footer from './components/Molecules/Footer/footer';
import BlogForm from './components/Molecules/Blog/blogForm';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <>
    
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/" exact component={Homepage}/>
      <Route path="/our-team" exact component={Aboutus}/>
      <Route path="/blog" exact component={BlogForm}/>
    </Switch>
    <Footer/>
      </Router>
    </>
  );
}

export default App;
