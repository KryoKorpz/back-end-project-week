import React, { Component } from 'react';
import { 
  BrowserRouter as Router, Route, Link, NavLink
} from 'react-router-dom';
import { Button, NavItem } from 'reactstrap';
import { connect } from 'react-redux';

import Notes from './Notes';
import Note from './Note';
import CreateNote from './CreateNote';
import UpdateNote  from './UpdateNote';
import SignUp from './SignUp';
import Login from './Login'
import Users from './Users'
import { getNotes } from '../actions'

import '../css/App.css';

class App extends Component {
  notes = () => {
    return <NavLink className='link' to={'/'}>View Your Notes</NavLink>
  }
  render() {
    return (
      <Router>
        <div className='home'>
              <div className='home-nav'>
                <h1 className='home-nav-banner'> Lambda Notes </h1>
                <NavLink to='/register'><Button color="primary" className='home-nav-link'>Sign Up</Button></NavLink>
                <NavLink to='/login'><Button color="primary" className='home-nav-link'>Login</Button></NavLink>
                <NavLink to='/'><Button color="info" className='home-nav-link'>View Your Notes</Button></NavLink>
                <NavLink to='/create'><Button color="info" className='home-nav-link'>+ Create New Note</Button></NavLink>
                <NavLink to='/users'><Button color="info" className='home-nav-link'>Authorized Users</Button></NavLink>
              </div>
              <div className='content'>
                <Route exact path='/' component={ Notes }/>
                <Route path='/notes/:id' component={ Note } />
                <Route path='/create' component={ CreateNote } />
                <Route path='/update/:id' component={ UpdateNote } />
                <Route path='/register' component={ SignUp } />
                <Route path='/login' component={ Login } />
                <Route path='/users' component={ Users } />

              </div> 
        </div>
      </Router>
    );
  }
      componentDidMount() {
        this.props.getNotes();
    }
}

export default connect(null, {getNotes})(App);