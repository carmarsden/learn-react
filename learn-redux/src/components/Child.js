import React from 'react';
import { connect } from 'react-redux';
import Grandchild from './Grandchild';

function Child(props) {
  return (
    <section style={{borderColor: 'lightcoral'}}>
        <p>This is the first child.</p>
        <p>The current count is: <b>{props.counter}</b></p>
        <Grandchild />
    </section>
  );
}

function mapStateToProps(state) {
    const { counters } = state;
    const { counter } = counters;
    return { counter };
}

export default connect(mapStateToProps)(Child);
