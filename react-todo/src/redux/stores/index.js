import { createStore } from 'react';
import tasksReducer from '../reducers/taskReducer';

const store = createStore(
  tasksReducer,
);

export default store;
