import './App.css';
import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  searchUsers = async val => {
    this.setState({loading: true});
    const response = await axios.get(`${process.env.REACT_APP_GIT_BASE_URL}search/users?q=${val}&client_id=${process.env.REACT_APP_GIT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GIT_CLIENT_SECRET}`)
    this.setState({ users: response.data.items, loading: false })
    return;
  }

  render() {
    return (
      <div className='App'>
        <Navbar title='Git Finder' icon='fab fa-github' />
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          <Users userData={this.state.users} loading={this.state.loading}/>
        </div>
      </div>
    );
  }
}

export default App;
