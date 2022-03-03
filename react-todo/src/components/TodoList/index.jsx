import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {
  loadTasks, deleteTask, doneTask, updateTask
} from '../../redux/actions/actionCreator';
import TodoItem from '../TodoItem/index';
import './todoList.css';

function TodoList({ tasks, dispatch }) {
  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  const handleToggleTodoCheck = (id) => {
    dispatch(doneTask(id));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleUpdateTask = (id, task) => {
    const updatedTask = { id, task };
    dispatch(updateTask(updatedTask));
  };

  return (
    <section className="todo-list">
      <ol className="todo-list__list">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            todo={task}
            handleDeleteTask={handleDeleteTask}
            handleToggleTodoCheck={handleToggleTodoCheck}
            handleUpdateTask={handleUpdateTask}
          />
        ))}
      </ol>
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
