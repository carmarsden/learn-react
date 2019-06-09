import React from 'react';
import './ResultsPanel.css';
import Result from '../Result/Result';

class ResultsPanel extends React.Component {
    render() {
        const error = this.props.error ? <div className='error'>{this.props.error}</div> : '';
        const noresults = (this.props.searchResults && this.props.searchResults.length === 0) 
        ? <div className='noresults'>Nothing Found! Try another search?</div> : '';

        const resultsArray = this.props.searchResults.map((result, idx) => {
            return (
                <Result 
                    key={idx}
                    result={this.props.searchResults[idx]}/>
            )
        })

        return (
            <div className='resultspanel'>
                {error}
                {noresults}
                {resultsArray}
            </div>
        )
    }
}

export default ResultsPanel;