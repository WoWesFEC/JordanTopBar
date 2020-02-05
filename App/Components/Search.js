import React from 'react';
import Dropdown from './Dropdown';

class Search extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      placeHolder: ''
    }
  }

  render () {
    return (
      <div className="jsearch">
        <input 
        type="text" 
        id="jsearch" 
        placeholder="did someone say thunderfury blessed blade of the windseeker?" 
        onChange={this.props.handleChange}>
        </input>
      </div>
    );
  }
}

export default Search;