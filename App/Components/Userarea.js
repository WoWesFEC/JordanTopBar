import React from 'react';

class Userarea extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      placeHolder: ''
    }
  }

  render () {
    return (
      <div className="juserarea">User Area</div>
    );
  }
}

export default Userarea;