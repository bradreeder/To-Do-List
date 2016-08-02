import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title.js';
import UserForm from './UserForm.js';

class Root extends React.Component {
  render () {
    return (
      <div>
        <Title />
        <UserForm />
      </div>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('container'));
