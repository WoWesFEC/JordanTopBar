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
        placeholder="did someone say thunderfury blessed blade of the windseeker?" 
        onChange={this.props.handleChange}>
        </input>
      </div>
    );
  }
}

export default Search;