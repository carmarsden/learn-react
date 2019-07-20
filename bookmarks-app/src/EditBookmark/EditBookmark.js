import React, { Component } from  'react';
import BookmarksContext from '../BookmarksContext';
import config from '../config'

const Required = () => (
  <span className='AddBookmark__required'>*</span>
)

class EditBookmark extends Component {

    // note to self: I get "Uncaught TypeError: c.querySelectorAll is not a function" when updating form fields in this form
    // note to self: upon submit I also get "Unexpected end of JSON input" error and it doesn't go back to /
    
  static contextType = BookmarksContext;

  state = {
    error: null,
    id: '',
    title: '',
    url: '',
    description: '',
    rating: 1,
  };


  componentDidMount() {
      const bookmarkId = this.props.match.params.bookmarkId
      const fetchUrl = config.API_ENDPOINT + `/${bookmarkId}`;
    fetch(fetchUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(resData => {
          this.setState({
            id: resData.id,
            title: resData.title,
            url: resData.url,
            description: resData.description,
            rating: resData.rating,
          })
      })
      .catch(error => this.setState({ error }))
  }

  handleSubmit = e => {
    e.preventDefault()
    const { id, title, url, description, rating } = this.state
    const newBookmark = { id, title, url, description, rating }
    const bookmarkId = this.props.match.params.bookmarkId
    const fetchUrl = config.API_ENDPOINT + `/${bookmarkId}`

    fetch(fetchUrl, {
      method: 'PATCH',
      body: JSON.stringify(newBookmark),
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          // get the error message from the response,
          return res.json().then(error => {
            // then throw it
            throw error
          })
        }
        return res.json()
      })
      .then(() => {
          this.resetFields(newBookmark)
          this.context.updateBookmark(newBookmark)
          this.props.history.push('/')
      })
      .catch(error => {
        console.log(error)
        this.setState({ error })
      })
  }

  resetFields = (newFields) => {
    this.setState({
      id: newFields.id || '',
      title: newFields.title || '',
      url: newFields.url || '',
      description: newFields.description || '',
      rating: newFields.rating || '',
    })
  }

  handleChangeTitle = e => {
    this.setState({ title: e.target.value })
  };

  handleChangeUrl = e => {
    this.setState({ url: e.target.value })
  };

  handleChangeDescription = e => {
    this.setState({ description: e.target.value })
  };

  handleChangeRating = e => {
    this.setState({ rating: e.target.value })
  };

  handleClickCancel = () => {
    this.props.history.push('/')
  };

  render() {
    const { error } = this.state
    return (
      <section className='AddBookmark'>
        <h2>Edit bookmark</h2>
        <form
          className='AddBookmark__form'
          onSubmit={this.handleSubmit}
        >
          <div className='AddBookmark__error' role='alert'>
            {error && <p>{error.message}</p>}
          </div>
          <input type='hidden' name='id'/>
          <div>
            <label htmlFor='title'>
              Title
              {' '}
              <Required />
            </label>
            <input
              type='text'
              name='title'
              id='title'
              placeholder='Great website!'
              value={this.state.title}
              onChange={this.handleChangeTitle}
              required
            />
          </div>
          <div>
            <label htmlFor='url'>
              URL
              {' '}
              <Required />
            </label>
            <input
              type='url'
              name='url'
              id='url'
              placeholder='https://www.great-website.com/'
              required
              value={this.state.url}
              onChange={this.handleChangeUrl}
            />
          </div>
          <div>
            <label htmlFor='description'>
              Description
            </label>
            <textarea
              name='description'
              id='description'
              value={this.state.description}
              onChange={this.handleChangeDescription}
            />
          </div>
          <div>
            <label htmlFor='rating'>
              Rating
              {' '}
              <Required />
            </label>
            <input
              type='number'
              name='rating'
              id='rating'
              min='1'
              max='5'
              required
              value={this.state.rating}
              onChange={this.handleChangeRating}

            />
          </div>
          <div className='AddBookmark__buttons'>
            <button type='button' onClick={this.handleClickCancel}>
              Cancel
            </button>
            {' '}
            <button type='submit'>
              Save
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default EditBookmark;
