import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/Search';
import Alert from './components/layout/Alert';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

  // We can search our users now with this method but we gonna change it later
  searchUsers = async text => {
    this.setState({ loading: true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({ users: res.data.items, loading: false });
    
  }

  // Clear users from states

  clearUsers = () => {
    this.setState({ users: [], loading: false});
  }
  // set Alert 
  setAlert = (msg, type) => {
    this.setState( { alert: { msg, type } });
    setTimeout(() => {
      this.setState({alert: null})
    }, 5000);
  };
  render(){
    return (
      <div className="App">
        
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Alert alert={this.state.alert} />
            <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={ this.state.users.length > 0 ? true : false }
            setAlert={this.setAlert}/>

            <Users loading= {this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
    
  }
}

export default App;
