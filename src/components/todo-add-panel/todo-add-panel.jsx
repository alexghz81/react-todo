import React, {Component} from 'react';
import './todo-add-panel.css';

export default class TodoAddPanel extends Component {

  state = {
    label: ''
  }

  onLabelChange = (evt) => {
    this.setState({
      label: evt.target.value,
    })
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onAdd(this.state.label);
    this.setState({
      label: '',
    })
  }

  render() {
    return (
      <form className='todo-add-panel d-flex' onSubmit={this.onSubmit}>
        <input type="text" className="form-control" onChange={this.onLabelChange} placeholder={'Enter Todo Name'} value={this.state.label}/>
        <button className='btn btn-outline-secondary'>Add Todo</button>
      </form>
    )
  }
}