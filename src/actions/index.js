import * as actionType from './ActionType';

// returns an object that describes our action
export const clickEvent = () => { // in mapDispatchToProps we have already binded this action to Navigation component
    return  {
        type: actionType.Click_Event,
        text: 'buttonClick'
    }
}; 