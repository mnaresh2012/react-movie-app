import React,{ Fragment } from 'react';
import store from '../store';
import { removeMovieFromLists } from '../actions/movieLists';
import WishListCard from './WishListCard';

export default class WishLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeList: 0
        }
    }
    
    showMovieLists = (index) => {
        this.setState({
            activeList: index
        })
        const storeLists = store.getState().favLists;
        const storeListsNew = Object.assign([], storeLists)
        this.setState({
            activeMovieLists: storeListsNew[index]
        })
    }

    removeMovieLists = (movieId) => {        
        store.dispatch(removeMovieFromLists(this.state.activeList, movieId))
    }

    componentDidMount() {
        this.showMovieLists(0)
    }

    render() {
        const storeLists = store.getState().favLists;
        const storeListsNew = Object.assign([], storeLists)
        const listNames = storeListsNew.map(ele => {
            return ele.listName
        });

        return (
            <div className="row">
                <div className="col-sm-12 wishlists-group">
                    <h3>Wishlists </h3>     
                    <div className="row">
                        <div className="col-sm-3">
                            <ul className="list-group list-group-flush">
                                {
                                    listNames.map((ele, index) => {
                                        return <li className={`list-group-item ${this.state.activeList===index?'active':''}`} key={index} onClick={() => this.showMovieLists(index)}>{ele}<span className="text-right"> ></span></li>                            
                                    })
                                }
                                
                            </ul>
                        </div>
                    

                        <div className="col-sm-9">
                            {
                                this.state.activeMovieLists ? 
                                <Fragment>  
                                    <h4>{this.state.activeMovieLists.listName}</h4>
                                    <hr />
                                    {   storeListsNew && storeListsNew[this.state.activeList].lists &&
                                        storeListsNew[this.state.activeList].lists.map(val => {
                                           return <WishListCard list={val} handleRemove={this.removeMovieLists}/> 
                                        })
                                    }                                    
                                </Fragment> 
                                : <p className="text-align">No Movies in the Lists</p>
                            }
                        </div>                    
                </div>
            </div>
            </div>
        )
    }
}


