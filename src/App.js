import './App.css';
import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount() {
    this.setState({
      loading: true
    });
    const response = await axios.get('https://api.github.com/users')
    this.setState({
      loading: false,
      users: response.data
    })
  }

  render() {
    return (
      <div className='App'>
        <Navbar title='Git Finder' icon='fab fa-github' />
        <Users userData={this.state.users} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
