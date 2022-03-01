import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {
  loadTasks
} from '../../redux/actions/actionCreator';
import TodoItem from '../TodoItem/index';
import './todoList.css';

function TodoList({ tasks, dispatch }) {
  useEffect(() => {
    if (!tasks.length) {
      dispatch(loadTasks());
    }
  });

  return (
    <section className="todo-list">
      <ul className="todo-list__list">
        {tasks.map((task) => (
          <TodoItem key={task.id} todo={task} />
        ))}
      </ul>
    </section>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(tasks) {
  return {
    tasks
  };
}

export default connect(mapStateToProps)(TodoList);
