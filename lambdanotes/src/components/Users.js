import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap';

import { getUsers } from '../actions'


import '../css/\Notes.css';


class Users extends Component {
    render() {
        return (
            <div className="notes">
                    { this.props.loading ?
                        <h2> loading users</h2>: null}
                    <div style={{display:'flex', flexWrap:'wrap'}}>
                    <Row >
                        {console.log(this.props.users)}
                        {this.props.users.map((user) =>{
                            return(
                                <Col xs='auto'>
                                    <NavLink to={{pathname:`/users/${user._id}`, username: user.username, id: user._id}} style={{textDecoration:'none', color:'black'}}>
                                        <Card style={{display: 'flex'}}>
                                            <CardBody style={{border:'1px solid black'}} >
                                                <CardTitle style={{display: 'flex', justifyContent:'center'}}>{user.username}</CardTitle>
                                            </CardBody>
                                        </Card>
                                    </NavLink>
                                </Col>
                        )})}
                    </Row>
                    </div>
            </div>
      );
    }

    componentDidMount() {
        this.props.getUsers();
    }
}
    
    const mapStateToProps = (state) => {
        return {
            users:state.users
        }
    }
    
  export default connect(mapStateToProps, {getUsers})(Users);

