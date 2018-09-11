
import React from 'react';
import store from '../store';
import {createList} from '../actions//movieLists'

export default class CreateListsFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validate: false,
            listName: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            listName: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.listName !== "") {
            store.dispatch(createList(this.state.listName));
            this.props.handleClose();
            console.log(store.getState());
        } else {
            this.setState({
                validate: true
            })
        }
              
    }

    render() {
        return(           
           
                <form onSubmit={this.handleSubmit}>                    
                    <div className="form-group">
                        <label>List Name</label>
                        <input type="text" className="form-control" placeholder="" value={this.state.listName} onChange={this.handleChange} />
                        {this.state.validate && <span className="text-danger">Enter value</span>}
                    </div>                    
                    <button type="submit" className="btn btn-primary">Create List</button>
                </form>
             
        )
    }
}
