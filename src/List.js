import React from 'react';

class List extends React.Component {
  render () {
    return (
      <div>
        <h2>List</h2>
        <ul>
        {this.props.items.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
        </ul>
      </div>
    )
  }
}

export default List;
