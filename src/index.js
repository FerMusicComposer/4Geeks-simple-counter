import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import SecondsCounter from './components/SecondsCounter';

const App = () => {
    return <SecondsCounter />;
};

ReactDOM.render(<App />, document.querySelector('#root'));
