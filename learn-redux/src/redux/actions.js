export const changeColor = color => ({
    type: 'CHANGE_COLOR',
    payload: { color }
});

export const incrementCounter = () => ({
  type: 'INCREMENT_COUNTER'
});

export const decrementCounter = () => ({
    type: 'DECREMENT_COUNTER'
});