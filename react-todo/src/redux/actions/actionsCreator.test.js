import '@testing-library/jest-dom';
import {
  loadTasks, addTask, deleteTask, updateTask, completeTask
} from './actionCreator';

describe('actionsCreators', () => {
  test('loadTasks return his own action creator', () => {
    const expected = loadTasks();
    const result = { type: 'LOAD_TASKS' };
    expect(expected).toEqual(result);
  });
  test('addTask return his own action creator', () => {
    const mockTask = 'new task';
    const expected = addTask(mockTask);
    const result = { type: 'ADD_TASK', newTask: mockTask };
    expect(expected).toEqual(result);
  });
  test('deleteTask return his own action creator', () => {
    const mockId = '1234';
    const expected = deleteTask(mockId);
    const result = { type: 'DELETE_TASK', taskId: mockId };
    expect(expected).toEqual(result);
  });
  test('updateTask return his own action creator', () => {
    const mockUpdatedTask = 'new task';
    const expected = updateTask(mockUpdatedTask);
    const result = { type: 'UPDATE_TASK', updatedTask: mockUpdatedTask };
    expect(expected).toEqual(result);
  });
  test('doneTask return his own action creator', () => {
    const mockTaskId = '1234';
    const expected = completeTask(mockTaskId);
    const result = { type: 'COMPLETE_TASK', taskId: mockTaskId };
    expect(expected).toEqual(result);
  });
});
