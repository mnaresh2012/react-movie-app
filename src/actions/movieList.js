import React, { Component } from 'react';
import MovieList from "../components/MovieList";
import SearchBox from '../components/SearchBox';
import { API_KEY } from '../constants';
import Header from '../components/Header';
import NoResult from '../components/NoResult';

import store from '../store';
import {addMovieToList} from '../actions/movieLists';
import WishLists from '../components/WishLists';

export default class MovieApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            searchLists: [],
            showWishLists: false
        }
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.fetchMovieLists(this.state.searchTerm).then(data => {
            this.setState({
                searchLists :data
            })
        })        
    }

    handleAddToList = (list) => {
        store.dispatch(addMovieToList(list));
    }

    addMovieListHandler = (movieList, listName, index) => {
        store.dispatch(addMovieToList(movieList, listName, index))
    }    

    fetchMovieLists = (searchTerm) => {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`)
        .then(data => data.json())
        .then(data => this.movieLists = data.results)
    }   
    
    handleToggleWishlist = () => {
        this.setState({
            showWishLists: !this.state.showWishLists
        })
    }

    render() {
        return( 
            <div className="container">
                <Header handleToggleWishlist={this.handleToggleWishlist} 
                    showWishLists={this.state.showWishLists}/>
                {
                    this.state.showWishLists && 
                    <WishLists />
                }                 
                <div className="row">
                <br />
                    <div className="col-sm-10">
                        <SearchBox 
                            searchTerm={this.state.searchTerm}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            />
                    </div>    
                    <div className="col-sm-2"></div>               
                </div>

                 <div className="row">                                         
                    {this.state.searchLists.length > 0 ? this.state.searchLists.map(list => {
                        return <MovieList 
                                    list={list} 
                                    handleAddToList={this.handleAddToList}
                                    handleCreateList={this.handleCreateList} 
                                    addMovieListHandler={this.addMovieListHandler}
                                />
                    }) : (
                        <NoResult />
                    )                
                }                         
                </div>

            </div>
        )
    }
}
