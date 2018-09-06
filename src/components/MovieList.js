import React from 'react';
import ButtonList from './ButtonList';
import { DropdownButton, MenuItem  } from 'react-bootstrap';
import CustomModal from './Modal';
import { addMovieToList } from '../actions/movieLists';
import store from '../store';

const MovieList = (props) => {        
    const storeLists = store.getState().favLists;
    const storeListsNew = Object.assign([], storeLists)
    const listNames = storeListsNew.map(ele => {
        return ele.listName
    });
    return (
        <div className="col-sm-2">
            <div className="card">
                <img className="card-img-top" src={`http://image.tmdb.org/t/p/w342/${props.list.poster_path}`} />
                <div className="card-body">
                    <h5 className="card-title">{props.list.title}</h5>
                    <h6 className="">Release Date: {props.list.release_date}</h6>
                    <p className="card-text">Popularity: {props.list.popularity}</p>
                    <DropdownButton
                        bsStyle='primary'
                        title='Add to List'
                        key={1}
                        id={`dropdown-basic-1`}
                        >
                        {listNames.map((ele, index) => {                            
                                return <MenuItem eventKey={index} onClick={e => props.addMovieListHandler(props.list, ele, index)}>{ele}</MenuItem>
                            })                        
                        }
                        
                        <MenuItem divider />
                        <CustomModal />
                    </DropdownButton>                    
                </div>
            </div>
        </div>
    )
}

export default MovieList;
