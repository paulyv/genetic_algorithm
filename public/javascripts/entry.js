import React from 'react';
import ReactDOM from 'react-dom';


import Heading from './components/heading.jsx';
import App from './components/app.jsx';

const head = document.getElementById('heading_div');
const react = document.getElementById('react');

ReactDOM.render(<Heading />, head);
ReactDOM.render(<App />, react);
