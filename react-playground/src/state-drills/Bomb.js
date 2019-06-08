import React from 'react';

class Bomb extends React.Component {
    state = { 
            count: 0,
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ count: this.state.count + 1 })            
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        let bombStatus = '';

        if (this.state.count > 7) {
            bombStatus = 'BOOM!!!!';
            clearInterval(this.interval)
        } else if (this.state.count % 2 === 0) {
            bombStatus = 'tick';
        } else {
            bombStatus = 'tock';
        }

        return (
            <div>
                <p>{bombStatus}</p>
            </div>
        )
    }
}

export default Bomb;