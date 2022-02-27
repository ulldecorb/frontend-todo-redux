import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class ReduxTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static propTypes = {};

  static defaultProps = {};

  render() {
    const { className, children, ...others } = this.props;

    const cls = classnames({
      'components-redux-todo-render': true,
      [className]: !!className,
    });

    return (
      <div className={cls} {...others}>
        { children }
      </div>
    );
  }
}

export default ReduxTodo;
