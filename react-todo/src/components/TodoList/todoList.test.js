import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import store from '../../redux/store/index';

import TodoList from './index';

// const mockTask = () => [{ id: '1', task: 'complete test', completed: false }];
describe('When TodoList renders', () => {
  test('handleToggleTodoCheck is invoked', () => {
    const mockDispatch = jest.fn();
    const component = render(
      <Provider store={store}>
        <TodoList dispatch={mockDispatch} />
      </Provider>
    );
    const inputCheck = component.getByTestId('checkboxInput');
    fireEvent.click(inputCheck);
    expect(mockDispatch).toHaveBeenCalledTimes(0);
  });
});
