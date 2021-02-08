import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "../components/NavigationBar/NavigationBar";
import Home from "../containers/Home/Home";
import Footer from "../containers/Footer/Footer";

import "../scss/app.scss";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/" component={Home} exact>
          <Home />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
