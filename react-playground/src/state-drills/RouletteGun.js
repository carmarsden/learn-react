import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }

    constructor(props) {
        super(props);
        this.state = {
            chamber: null,
            spinningTheChamber: false,
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    handleButtonClick = () => {
        this.setState({ spinningTheChamber: true });
        this.timeout = setTimeout(() => {
            let newnumber = Math.ceil(Math.random() * 8);
            this.setState({
                chamber: newnumber,
                spinningTheChamber: false,
            })
        }, 2000)
    }

    render() {
        let currentSpin = "you're safe!";

        if (this.state.spinningTheChamber) {
            currentSpin = "spinning the chamber and pulling the trigger! ...";
        } else if (this.state.chamber === this.props.bulletInChamber) {
            currentSpin = "BANG!!!!";
        } else {
            currentSpin = "you're safe!";
        }

        return (
            <div>
                <p>{currentSpin}</p>
                <button onClick={this.handleButtonClick}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;