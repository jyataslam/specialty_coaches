import React from 'react';
import '../assets/css/app.scss';
import logo from '../assets/images/logo.svg';

const App = () => (
    <>
        <div className="app container">
            <img src={logo} className="logo rotate"/>
            <h1>Welcome To React</h1>
        </div>
    </>
);

export default App;
