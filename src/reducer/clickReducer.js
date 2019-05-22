import * as actionType from '../actions/ActionType';

// reducer must be a pure function, which should not mutate any store state, just take the old state value, use it as needed, assign it to a new variable and return the new state of our application.
const clickReducer = (state= { Choice: 'About'}, action) => { 
    let newState;

    switch(action.type) {
        case actionType.Click_Event: 
            if(action.text == "About")
            {
                newState = { Choice: 'About' }
                return newState;
            }    
            else if(action.text == "Gallery")
            {
                newState = {Choice: 'Gallery'}
                return newState;
            }
            else if(action.text == "GridFeature")
            {
                newState = {Choice: "GridFeature"}
                return newState;
            }
        
        default:
        return state; // necessary
    }
}

export default clickReducer;