import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Loading Containers
import Home from "../containers/Home/Home";
import AboutUs from "../containers/AboutUs/AboutUs";
import TheStaff from "../containers/TheStaff/TheStaff";
import Arrivals from "../containers/Arrivals/Arrivals";
import Gallery from "../containers/Gallery/Gallery";
import ExploreAround from "../containers/ExploreAround/ExploreAround";
import Partners from "../containers/Partners/Partners";
import TheProgram from "../containers/TheProgram/TheProgram";
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

// Importing custom css for the whole app
import "react-tabs/style/react-tabs.scss";
import "../scss/app.scss";

import AOS from "aos";

// Global variables
var dateStart = formatDate(new Date(2021, 2, 3)); // 3rd March, 2021
var dateEnd = formatDate(new Date(2021, 2, 24)); // 24th March, 2021
var tuitionPrice = 2500; // in USD

function formatDate(date) {
  date = date.toDateString().slice(3);
  return `${date.slice(0, 7)}, ${date.slice(7)}`;
}

export default class App extends Component {
  // Initialize Animate On Scroll librairy
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
            <Home
              dateStart={dateStart}
              dateEnd={dateEnd}
              tuitionPrice={tuitionPrice}
            />
          </Route>
          <Route path="/about-us" component={AboutUs}>
            <AboutUs />
          </Route>
          <Route path="/the-staff" component={TheStaff}>
            <TheStaff />
          </Route>
          <Route path="/arrivals" component={Arrivals}>
            <Arrivals
              dateStart={dateStart}
              dateEnd={dateEnd}
              tuitionPrice={tuitionPrice}
            />
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
          <Route path="/the-program" component={TheProgram}>
            <TheProgram />
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
            <Contact
              dateStart={dateStart}
              dateEnd={dateEnd}
              tuitionPrice={tuitionPrice}
            />
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
