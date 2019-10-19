import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Home from "./containers/Home/index.js";
import Developers from "./containers/Developers/index.js";
import About from "./containers/About/index.js";
import PrivacyPolicy from "./containers/PrivacyPolicy/index.js";
import Auth from "./containers/Auth/index.js";
import Feedback from "./containers/Feedback/index.js"
import ProfilePage from "containers/ProfilePage/ProfilePage.js";

var history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/developers" component={Developers} />
      <Route path="/about" component={About} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/auth" component={Auth} />
      <Route path="/feedback" component={Feedback} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
