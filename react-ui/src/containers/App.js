import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Loading Containers
import Home from "../containers/Home/Home";
import AboutUs from "../containers/AboutUs/AboutUs";
import TheStaff from "../containers/TheStaff/TheStaff";
import Gallery from "../containers/Gallery/Gallery";
import ExploreAround from "../containers/ExploreAround/ExploreAround";
import Partners from "../containers/Partners/Partners";
import Accomodation from "../containers/Accomodation/Accomodation";
import Food from "../containers/Food/Food";
import FAQ from "../containers/FAQ/FAQ";
import Testimonials from "../containers/Testimonials/Testimonials";
import Contact from "../containers/Contact/Contact";
import Covid19 from "../containers/Covid19/Covid19";
import Page404 from "../containers/Page404/Page404";

// Loading Components
import NavigationBar from "../components/NavigationBar/NavigationBar";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Footer from "../components/Footer/Footer";

import "../scss/app.scss";

import AOS from "aos";

export default class App extends Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <Router>
        <ScrollToTop />

        <NavigationBar />
        <Switch>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
          <Route path="/about-us" component={AboutUs}>
            <AboutUs />
          </Route>
          <Route path="/the-staff" component={TheStaff}>
            <TheStaff />
          </Route>
          <Route path="/gallery" component={Gallery}>
            <Gallery />
          </Route>
          <Route path="/explore-around" component={ExploreAround}>
            <ExploreAround />
          </Route>
          <Route path="/partners" component={Partners}>
            <Partners />
          </Route>
          <Route path="/accomodation" component={Accomodation}>
            <Accomodation />
          </Route>
          <Route path="/food" component={Food}>
            <Food />
          </Route>
          <Route path="/faq" component={FAQ}>
            <FAQ />
          </Route>
          <Route path="/testimonials" component={Testimonials}>
            <Testimonials />
          </Route>
          <Route path="/contact" component={Contact}>
            <Contact />
          </Route>
          <Route path="/covid-19" component={Covid19}>
            <Covid19 />
          </Route>
          <Route component={Page404} />
        </Switch>

        <Footer />
      </Router>
    );
  }
}
