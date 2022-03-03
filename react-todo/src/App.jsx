import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import TodoList from './components/TodoList/index';
import TodoAdder from './components/TodoAdder/index';
import './style/app.css';

function App() {
  return (
    <Provider store={store}>
      <header className="app__header">
        <h1>TODO LIST</h1>
      </header>
      <TodoList />
      <TodoAdder />
      <footer className="app__footer">
        App made on React + Flux = REDUX!
      </footer>
    </Provider>
  );
}

export default App;
