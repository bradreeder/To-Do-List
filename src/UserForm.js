import React from 'react';
import List from './List.js';

class UserForm extends React.Component {
  constructor () {
    super();
    this.state = {
      items: [],
      value: ''
    }
  }
  updateItems() {
    const allItems = this.state.items.concat([this.state.value]);
    this.setState({items: allItems});
  }
  handleChange(e) {
    this.setState({value: e.target.value})
  }
  render () {
    return (
      <div>
        <input
          type="text"
          placeholder="get on with your shit"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.updateItems.bind(this)}
        >Submit</button>
        <List items={this.state.items} />
      </div>
    )
  }
}

export default UserForm;
