import React from 'react';
import {MenuItem, Modal, Button} from 'react-bootstrap';
import CreateListsForm from './CreateListsForm';

export default class CustomModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <div>
                   
          <MenuItem eventKey="10"  onClick={this.handleShow}>Create List</MenuItem>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Create New List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreateListsForm handleClose={this.handleClose}/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
