import React, {Component} from 'react';
import './todo-list-item.css'
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamation, faTrash} from "@fortawesome/free-solid-svg-icons";

export default class TodoListItem extends Component {

  render() {
    const {label, onDeleted, onToggleImportant, onToggleDone, important, done} = this.props;

    let classNames = 'todo-list-item';
    library.add(faExclamation, faTrash);
    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }

    return (
      <>
      <span className={classNames}>
       <span
         className={'todo-list-item-label'}
         onClick={onToggleDone}>
         {label}
      </span>
        <div className="btn-wrapper">
         <button type="button"
                 className="btn btn-outline-success btn-sm float-right"
                 onClick={onToggleImportant}>
        <FontAwesomeIcon icon="exclamation"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right" onClick={onDeleted}>
        <FontAwesomeIcon icon='trash'/>
      </button>
        </div>
    </span>
      </>
    );
  }

}
