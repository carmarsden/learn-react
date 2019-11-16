import React from 'react';
import { connect } from 'react-redux';
import { changeColor, incrementCounter, decrementCounter } from '../redux/actions';

class Grandchild extends React.Component {
    state = {
        color: ''
    }

    updateInput = e => {
        this.setState({
            color: e.target.value
        })
    }

    handleChangeColor = () => {
        this.props.changeColor(this.state.color);
        this.setState({
            color: ''
        })
    }

    render() {
        return (
          <section style={{borderColor: this.props.color}}>
              <p>This is the grandchild component.</p>
              <div>
                  <button onClick={this.props.incrementCounter}>
                      Increment!
                  </button>
                  <button onClick={this.props.decrementCounter}>
                      Decrement!
                  </button>
              </div>
              <div style={{margin: '10px'}}>
                  <input
                    type='text'
                    onChange={this.updateInput}
                    value={this.state.color}
                  />
                  <button onClick={this.handleChangeColor}>
                    Update border color
                  </button>
              </div>
          </section>
        );
    }
}

function mapStateToProps(state) {
    const { color } = state;
    return { color };
}

export default connect(
    mapStateToProps,
    { changeColor, incrementCounter, decrementCounter }
)(Grandchild);