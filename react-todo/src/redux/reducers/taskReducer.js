import actionTypes from '../actions/actionTypes';

function tasksReducer(action, tasks = []) {
  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      return tasks;
    case actionTypes.ADD_TASK:
      return [...tasks, action.newTask];
    case actionTypes.DELETE_TASK:
      return tasks.filter((task) => task.id !== action.taskId);
    case actionTypes.UPDATE_TASK: {
      const newTasks = [...tasks];
      const newTodo = newTasks.find((action.newTask.id));
      newTodo.todo = action.newTask.newTodo;
      return newTodo;
    }
    case actionTypes.DONE_TASK:
      return tasks.map((task) => ((
        task.id === action.taskId) ? { ...task, state: true } : task));
    default:
      return tasks;
  }
}

export default tasksReducer;
