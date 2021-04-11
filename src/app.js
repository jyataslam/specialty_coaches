import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home-page";
import SuccessPage from "./pages/success-page";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import "./assets/css/app.scss";

const App = () => (
    <div className="app-container">
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/success" component={SuccessPage} />
        </Switch>
    </div>
);

export default App;
