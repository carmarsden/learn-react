import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div className='searchbar'>
                <form className='searchform' onSubmit={e => this.props.handleSubmit(e)}>
                    <label htmlFor='searchquery'>Search:</label>
                    <input
                        type='text'
                        name='searchquery'
                        id='searchquery'
                        placeholder='search query'
                        value={this.props.searchTerm}
                        onChange={e => this.props.handleUpdate(e.target.value)}/>
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;