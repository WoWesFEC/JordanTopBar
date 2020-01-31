import React from 'react';
import Logo from './Components/Logo';
import Search from './Components/Search';
import Userarea from './Components/Userarea';
import Deadlinks from './Components/Deadlinks';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({search: `${e.target.value}`})
  }

  render () {
    return (
      <>
      <Logo />
      <Search handleChange={this.handleChange}/>
      <Userarea />
      <Deadlinks />
      </>
    );
  }
}

export default App;