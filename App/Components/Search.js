import React from 'react';

class Search extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      placeHolder: ''
    }
  }

  render () {
    return (
      <div className="search">
        <input 
        type="text" 
        id="search" 
        placeholder="Search" 
        onChange={this.props.handleChange}>
        </input>
      </div>
    );
  }
}

export default Search;