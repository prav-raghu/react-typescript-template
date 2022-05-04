import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserCircle,
  faSearch,
  faBars,
  faEnvelope,
  faMars,
  faVenus,
  faGenderless,
  faCheck,
  faCheckDouble,
  faFlag,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import "./styles/index.scss";
import * as serviceWorker from "./serviceWorker";
import { PrivateRoute } from "./routes/protected.route";
import Home from "./views/public/home/home.view";
import Login from "./views/auth/login/login.view";
import Dashboard from "./views/dashboard/dashboard.view";
export const history = createBrowserHistory();
library.add(
  faUserCircle,
  faSearch,
  faBars,
  faEnvelope,
  faMars,
  faVenus,
  faGenderless,
  faCheck,
  faCheckDouble,
  faFlag,
  faChevronLeft,
  faFacebook,
  faTwitter,
  faInstagram,
  faGoogle
);
ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <PrivateRoute path={"/dashboard"} component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
