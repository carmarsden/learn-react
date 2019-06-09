import React from 'react';
import './App.css';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import FilterBar from './FilterBar/FilterBar';
import ResultsPanel from './ResultsPanel/ResultsPanel';

class App extends React.Component {
    state = {
        searchTerm: '',
        printType: 'all',
        bookType: '',
        searchResults: []
    }

    updateSearchTerm(term) {
        this.setState({
            searchTerm: term
        })
    }

    updatePrintType(type) {
        this.setState({
            printType: type
        })
    }

    updateBookType(type) {
        this.setState({
            bookType: type
        })
    }

    formatUrl() {
        let url = 'https://www.googleapis.com/books/v1/volumes?';
        url += `q=${this.state.searchTerm}`;
        url += `&printType=${this.state.printType}`;
        url += (this.state.bookType.length !== 0 ? `&filter=${this.state.bookType}` : '')
        console.log(`current url: ${url}`);
        return url;
    }

    handleSubmit(e) {
        e.preventDefault();
        const url = this.formatUrl();
        const options = {
            headers: {
                "x-api-key": "AIzaSyCJQE74TLjJhu7K8Y2ndamJmcGLpN7UY-Y",
            }
        };
    
        fetch(url, options)
        .then(res => {
            if(!res.ok) {
                throw new Error('Something went wrong, please try again later');
            }
            return res.json();
        })
        .then(data => {
            console.log(data.items);
            this.setState({
                searchResults: data.items
            })
        })
        .catch(err => {
            this.setState({
                error: err.message
            });
        });
    }
 

    render() {
        return (
            <div className="App">
            <Header />
            <SearchBar 
                searchTerm={this.state.searchTerm}
                handleUpdate={term => this.updateSearchTerm(term)}
                handleSubmit={e => this.handleSubmit(e)}/>
            <FilterBar 
                printType={this.state.printType}
                bookType={this.state.bookType}
                handlePrintUpdate={type => this.updatePrintType(type)}
                handleBookUpdate={type => this.updateBookType(type)}/>
            <ResultsPanel 
                searchResults={this.state.searchResults}
                error={this.state.error}/>
            </div>
        )
    }
}

export default App;