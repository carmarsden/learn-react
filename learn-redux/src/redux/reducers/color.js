const initialState = 'lightskyblue';

export default function(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_COLOR': {
            return action.payload.color;
        }
        default: {
            return state;
        }
    }
}