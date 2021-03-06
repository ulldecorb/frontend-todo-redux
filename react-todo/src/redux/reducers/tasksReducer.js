import TASKS from '../../constants/tasks.mock';
import actionTypes from '../actions/actionTypes';

// eslint-disable-next-line default-param-last
function tasksReducer(tasks = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return TASKS;
    case actionTypes.ADD_TASK:
      return [...tasks, action.newTask];
    case actionTypes.DELETE_TASK:
      return tasks.filter((task) => task.id !== action.taskId);
    case actionTypes.UPDATE_TASK: {
      const newTodos = [...tasks];
      const newTodo = newTodos.find((task) => action.updatedTask.id === task.id);
      newTodo.task = action.updatedTask.task;
      return newTodos;
    }
    case actionTypes.COMPLETE_TASK: {
      const newTodos = [...tasks];
      const newTodo = newTodos.find((todo) => todo.id === action.taskId);
      newTodo.completed = !newTodo.completed;
      return newTodos;
    }
    default:
      return tasks;
  }
}

export default tasksReducer;
