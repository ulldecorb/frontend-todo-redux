import React, { useRef } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { v4 as randomNewId } from 'uuid';
import { addTask } from '../../redux/actions/actionCreator';
import './todoAdder.css';

function TodoAdder({ dispatch }) {
  const newTaskRef = useRef();

  const handleCreateNewTask = () => {
    if (newTaskRef.current.value !== '') {
      const newId = randomNewId();
      const newTask = newTaskRef.current.value;
      const newTodo = { id: newId, task: newTask, completed: false };
      dispatch(addTask(newTodo));
      newTaskRef.current.value = null;
    }
  };

  const handleEnterTask = (event) => {
    if (event.key === 'Enter') {
      handleCreateNewTask();
    }
  };

  return (
    <section className="add-task-box">
      <input
        type="text"
        placeholder="Add new task"
        name="addtask"
        id="addtask"
        ref={newTaskRef}
        onKeyPress={handleEnterTask}
        className="add-task-box__input"
        autoComplete="off"
        maxLength="35"
      />
      <button
        type="button"
        onClick={() => handleCreateNewTask()}
        className="add-task-box__handle-add-button"
        data-testid="addButton"
      >
        <i className="fas fa-plus-circle fa-2x" />
      </button>
    </section>
  );
}

TodoAdder.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(tasks) {
  return {
    tasks
  };
}

export default connect(mapStateToProps)(TodoAdder);
