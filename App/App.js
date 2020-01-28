import React from 'react';
import Logo from './Components/Logo';
import Search from './Components/Search';
import Userarea from './Components/Userarea';
import Deadlinks from './Components/Deadlinks';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      placeHolder: ''
    }
  }

  render () {
    return (
      <>
      <Logo />
      <Search />
      <Userarea />
      <Deadlinks />
      </>
    );
  }
}

export default App;