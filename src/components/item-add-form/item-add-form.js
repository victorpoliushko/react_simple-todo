import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {

  state = {
    label: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label); 
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  }

  render() {

    return (
      <form className="item-add-form d-flex"
      onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What need to be done"
        />
        <button
          className="btn btn-outline-secondary"
        >
          Add item
        </button>
      </form>
    );
  }
}
