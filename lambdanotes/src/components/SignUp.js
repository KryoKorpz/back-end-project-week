import React, { Component } from 'react';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {signUp} from '../actions';
import '../css/CreateNote.css';



class SignUp extends Component {
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
    this.props.signUp(this.state);
    this.setState({ username: '', password: ''});
  }

  render() {
      return (
          <div className='createNote'>
            <Form>
              <FormGroup className='form'>
                <Input type='text' name='username' value={this.state.username} onChange={this.handleChange}  placeholder='Username' />
                <Input type='text' name='password' value={this.state.password} onChange={this.handleChange} placeholder='Password' />
                <Button color='info' onClick={ this.handleSubmit }>SignUp</Button>
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
  
  export default connect(mapStateToProps, {signUp})(SignUp);