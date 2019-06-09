import React from 'react';
import './FilterBar.css';

class FilterBar extends React.Component {
    render() {
        return (
            <div className='filterbar'>
                <label className='filterlabel' htmlFor='printtype'>Print Type:</label>
                <select 
                id='printtype' 
                name='printtype'
                value={this.props.printType}
                onChange={e => this.props.handlePrintUpdate(e.target.value)}>
                    <option value='all'>All</option>
                    <option value='books'>Books</option>
                    <option value='magazines'>Magazines</option>
                </select>

                <label className='filterlabel' htmlFor='booktype'>Book Type:</label>
                <select 
                id='booktype' 
                name='booktype'
                value={this.props.bookType}
                onChange={e => this.props.handleBookUpdate(e.target.value)}>
                    <option value=''>No Filter</option>
                    <option value='ebooks'>All Google eBooks</option>
                    <option value='free-ebooks'>Google eBook with full volume text viewability</option>
                    <option value='full'>Public can view entire volume text</option>
                    <option value='paid-ebooks'>Google eBook with a price</option>
                    <option value='partial'>Public able to see parts of text</option>
                </select>

            </div>
        )
    }
}

export default FilterBar;