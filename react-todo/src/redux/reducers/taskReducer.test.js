import '@testing-library/jest-dom';
import tasksReducer from './tasksReducer';

describe('tasksReducer', () => {
  test('new task is add to task state', () => {
    const actionCreator = { type: 'ADD_TASK', newTask: { task: 'task added' } };
    const mockTasks = [];
    const expected = tasksReducer(mockTasks, actionCreator);
    const result = [{ task: 'task added' }];
    expect(expected).toEqual(result);
  });
  test('delete task from task state by id', () => {
    const actionCreator = {
      type: 'DELETE_TASK',
      taskId: '1234'
    };
    const mockTasks = [{ id: '1234' }];
    const expected = tasksReducer(mockTasks, actionCreator);
    const result = [];
    expect(expected).toEqual(result);
  });
  test('delete task from task state by id', () => {
    const actionCreator = {
      type: 'UPDATE_TASK',
      updatedTask: {
        id: '1234',
        task: 'updated task'
      }
    };
    const mockTasks = [{ id: '1234', task: 'initial task' }];
    const expected = tasksReducer(mockTasks, actionCreator);
    const result = [{ id: '1234', task: 'updated task' }];
    expect(expected).toEqual(result);
  });
});
