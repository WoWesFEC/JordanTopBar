import React from 'react';
import Dropdown from './Dropdown';

class Search extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      search: this.props.search
    }
  }

  render () {
    return (
      <div className="jsearch">
        <input 
          type="text" 
          id="jsearch" 
          placeholder="did someone say thunderfury blessed blade of the windseeker?" 
          onChange={this.props.handleChange}
          value={this.props.search}>
        </input>
        <Dropdown className={this.props.search.length ? "jddvisible" : "jddinvisible"} searchData={this.props.searchData}/>
      </div>
    );
  }
}

export default Search;