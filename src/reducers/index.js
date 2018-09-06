import {combineReducers} from 'redux';
import favList from './FavList';

const rootReducers = combineReducers({
    favLists: favList
})

export default rootReducers;
