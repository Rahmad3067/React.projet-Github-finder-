import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/Search';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  state = {
    users: [],
    loading: false
  }

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
  //   this.setState({ users: res.data, loading: false });
  // }


  // We can search our users now with this method but we gonna change it later
  searchUsers = async text => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({ users: res.data.items, loading: false });
    
  }

  render(){
    return (
      <div className="App">
        
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Search searchUsers={this.searchUsers} />

        <Users loading= {this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
    
  }
}

export default App;
