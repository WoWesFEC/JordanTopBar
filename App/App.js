import React from 'react';
import Logo from './Components/Logo';
import Search from './Components/Search';
import Userarea from './Components/Userarea';
import Deadlinks from './Components/Deadlinks';
import axios from 'axios';
class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      search: '',
      data: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({search: e.target.value}, () => {
      axios.post('/search', {search: this.state.search})
      .then ((data) => {
        this.setState({data: data.data})
      })
      .catch((err) => {
        console.log(err);
      })
    })
    console.log(this.state.data);
  }

  handleEnterPressed (e) {
    let code = e.keyCode || e.which;
    if(code === 13) { 
      // needs to make a request to my database, 
      //get back the info, 
      //then send that info off to the other components
    } 
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