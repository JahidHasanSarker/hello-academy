import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Services from "./Component/Services/Services";
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./Component/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
