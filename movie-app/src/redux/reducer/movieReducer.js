import { AllMOVIES } from '../types/moviesType'

const initalValue = { movies: [], pageCount: 0 }

export const moviesReducer = (state = initalValue, action) => {
    switch (action.type) {
        case AllMOVIES:// the action name which will be sent to dispatch
            return { movies: action.data, pageCount: action.pages }
        default:
            return state;
    }
}


/* 
dispatch({type:'AllMOVIES' , data:[]})
here it sends action.type and action.data
*/      