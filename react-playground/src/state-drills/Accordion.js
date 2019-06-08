import React from 'react';

class Accordion extends React.Component {
    static defaultProps = { sections: [] }
    state = {
        currentSection: null
    }

    handleButtonClick(index) {
        if (this.state.currentSection === index) {
            this.setState({
                currentSection: null
            })
        } else {
            this.setState({
                currentSection: index
            })
        }
    }

    renderButtonList() {
        return this.props.sections.map((section, index) => (
            <li key={index}>
                <button onClick={() => this.handleButtonClick(index)}>
                    {section.title}
                </button>
                {(this.state.currentSection === index) && <p>{section.content}</p>}
            </li>
        ))
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderButtonList()}
                </ul>
            </div>
        )
    }
}

export default Accordion;