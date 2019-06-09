import React from 'react';
import './Result.css';

class Result extends React.Component {
    render() {
        const price = this.props.result.saleInfo.listPrice 
            ? new Intl.NumberFormat('en-US', 
                { style: 'currency', currency: this.props.result.saleInfo.listPrice.currencyCode})
                .format(this.props.result.saleInfo.listPrice.amount)
            : 'unknown'
        const img = this.props.result.volumeInfo.imageLinks.thumbnail
            ? <img src={this.props.result.volumeInfo.imageLinks.thumbnail} alt='book cover thumbnail' className='thumbnail' />
            : ''
        const desc = this.props.result.searchInfo
            ? this.props.result.searchInfo.textSnippet
            : this.props.result.volumeInfo.description

        return (
            <div className='result'>
                <h1>{this.props.result.volumeInfo.title}</h1>
                {img}
                <p>Author: {this.props.result.volumeInfo.authors[0]}</p>
                <p>Price: {price}</p>
                <p>{desc}</p>
            </div>
        )
    }
}

export default Result;