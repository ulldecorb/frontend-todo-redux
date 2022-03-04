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
});
