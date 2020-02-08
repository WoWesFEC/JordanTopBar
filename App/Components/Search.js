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
        {/* <picture>
          <img id="jsearchglass" src="./images/searchglass.png"></img>
        </picture> */}
          <input
            type="text" 
            id="jsearch" 
            placeholder="What are you looking for today?" 
            onChange={this.props.handleChange}
            value={this.props.search}>
          </input>
        <div className={this.props.search.length ? "jddvisible" : "jddinvisible"} searchData={this.props.searchData}>
          <Dropdown className={this.props.search.length ? "jddvisible" : "jddinvisible"} searchData={this.props.searchData}/>
        </div>
      </div>
    );
  }
}

export default Search;