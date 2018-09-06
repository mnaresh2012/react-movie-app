import React from 'react';
import ReactDOM from 'react-dom';   
import MovieApp from './container/MovieApp';
import store from './store';
import { getLocalStorageValue } from './actions/movieLists';

if(localStorage.getItem("movieLists") !== null) {
    store.dispatch(getLocalStorageValue(JSON.parse(localStorage.getItem("movieLists"))));
}
const render = () => {    
    ReactDOM.render(<MovieApp />, document.getElementById('root'));
}
render();
store.subscribe(()=> {
    console.log(store.getState());
    localStorage.setItem('movieLists', JSON.stringify(store.getState().favLists));   
    render();
})
