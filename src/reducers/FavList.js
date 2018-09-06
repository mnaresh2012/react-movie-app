import { ADD_MOVIE_TO_LIST, CREATE_LIST, GET_LOCALSTORAGE_VALUE, REMOVE_MOVIE_FROM_LIST } from '../constants';

const initialState = [
    {
        listName: "Favorites",
        lists: []
    }
]

const favList = (state = initialState, action) => {
    switch (action.type){
        case ADD_MOVIE_TO_LIST:  
            const newState = Object.assign([], state)
            return [ ...newState.slice(0, action.index), 
                    {...newState[action.index], ...{lists: newState[action.index].lists.concat(action.movie)}},
                    ...newState.slice(action.index + 1)
                    ];

        case CREATE_LIST:
            const newList = {listName: action.listName, lists: []}
            return [
                ...state, newList
            ];

        case GET_LOCALSTORAGE_VALUE:
            return {
                ...action.movieLists
            }

        case REMOVE_MOVIE_FROM_LIST:
            const newState1 = Object.assign([], state)
            return [ 
                    ...newState1.slice(0, action.index), 
                    {...newState1[action.index], ...{lists: newState1[action.index].lists.filter(val => {
                        if(val.id !== action.movieId) {
                            return val;
                        }
                    })  }},
                    ...newState1.slice(action.index + 1)
                ];
        default: 
        return state;
    }
} 

export default favList;
