/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
/*import React from "react";
import Footer from "./container/Footer/Footer";
import Header from "./container/Header/Header";


const App = () => {
    return (
      <div> 
        <Header />
        <Footer />
      </div>
      );
};

export default App;*/
import React, { useState }  from "react";
import Footer from "./container/Footer/Footer";
import Header from "./container/Header/Header";
import { Provider } from "react-redux";
import store from "./container/ReduxMethods/store";

const App = () => {
    return (
      <div> 
        <Provider store={store}>
          <Header />
        </Provider>
        <Footer />
      </div>
      );
};

export default App;
