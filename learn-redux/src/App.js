import React from 'react';
import { connect } from 'react-redux';
import Child from './components/Child';

function App({ buttonClicks }) {
  return (
    <section style={{borderColor: 'gray'}}>
        <p>This is the parent App component.</p>
        <p>You've clicked the buttons <b>{buttonClicks}</b> times.</p>
        <Child />
    </section>
  );
}

function mapStateToProps(state) {
    const { counters } = state;
    const { buttonClicks } = counters;
    console.log(state);
    return { buttonClicks };
}

export default connect(mapStateToProps)(App);
