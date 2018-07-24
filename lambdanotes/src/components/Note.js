import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap';

import { deleteNote } from '../actions'; 

import '../css/App.css';
import '../css/Note.css';


class Note extends Component {
    constructor() {
        super()
        this.state = {
            modal: false
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Card style={{display: 'flex'}}>
                    <CardBody style={{border:'1px solid black'}} >
                        <CardTitle style={{display: 'flex', justifyContent:'center'}}>{this.props.location.title}</CardTitle>
                        <CardText style={{display: 'flex', justifyContent:'center'}}>{this.props.location.body}</CardText>
                    <Link to={{pathname:`/update/${this.props.location.id}`, title: this.props.location.title, body: this.props.location.body, id: this.props.location.id}} ><Button color='info' className='button'> Update Note </Button></Link>
                    <Button color='danger' onClick={this.toggle}>Delete</Button>
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Confirm Delete</ModalHeader>
                    <ModalBody>
                        Are you sure you want to delete?
                    </ModalBody> 
                    <ModalFooter>
                        <Link to={`/`} className='button' onClick={ () => this.toggleDelete()}><Button color='danger'>Yes</Button></Link>
                        <Button color='success' onClick={this.toggle}>No</Button>
                    </ModalFooter>
                </Modal>
                </div>
            );
        }   

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    toggleDelete = () => {
        this.toggle()
        this.delete()
        this.props.history('/')
    }
        
    delete = () => {
        const id = this.props.location.id
        this.props.deleteNote(id)
    }

}
    
  export default connect(null, { deleteNote })(Note);
