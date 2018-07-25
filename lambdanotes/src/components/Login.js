import React, { Component } from 'react';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {login} from '../actions';
import '../css/CreateNote.css';



class Login extends Component {
  constructor() {
    super()
    this.state={
      username: '',
      password: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state);
    this.setState({ username: '', password: ''});
    this.props.history.push('/users');
  }

  render() {
      return (
          <div className='createNote'>
            <Form>
              <FormGroup className='form'>
                <Input type='text' name='username' value={this.state.username} onChange={this.handleChange}  placeholder='Username' />
                <Input type='text' name='password' value={this.state.password} onChange={this.handleChange} placeholder='Password' />
                <Button color='info' onClick={ this.handleSubmit }>Login</Button>
              </FormGroup>
            </Form>
          </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      state: state,
    }

  }
  
  export default connect(mapStateToProps, {login})(Login);