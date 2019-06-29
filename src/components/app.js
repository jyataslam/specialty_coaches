import React from 'react';
import Nav from './nav';
import Header from './landing_header';
import Mission from './mission_statement';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';

const App = () => (
    <>
        <div className="app-container">
            <Nav/>
            <Header/>
            <Mission/>
        </div>
    </>
);

export default App;
