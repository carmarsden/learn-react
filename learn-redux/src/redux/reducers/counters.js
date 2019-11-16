const initialState = {
    counter: 0,
    buttonClicks: 0,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT_COUNTER': {
            console.log('increment counter called!');
            return {
                counter: state.counter + 1,
                buttonClicks: state.buttonClicks + 1
            };
        }
        case 'DECREMENT_COUNTER': {
            return {
                ...state,
                counter: state.counter - 1,
                buttonClicks: state.buttonClicks + 1
            };
        }
        default: {
            return state;
        }
    }
}