import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/stores';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>TODO LIST</h1>
        </header>
        <footer>
          App made on React + Flux = REDUX!
        </footer>
      </div>
    </Provider>
  );
}

export default App;
