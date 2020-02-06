import React from 'react';
import Menufill from './Menufill.js';

class Dropdown extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      placeHolder: ''
    }
  }

  render () {
    return (
      <div id="jdropdown">
        <ul>
          {/* map over the data sent from the search and pass each data set down to the MenuFill property */}
          {
            this.props.searchData.map((data, i) => {
              return (
                <Menufill data={data} key={i} />
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Dropdown;