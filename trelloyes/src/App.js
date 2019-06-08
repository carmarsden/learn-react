import React from 'react';
import List from './List';
import STORE from './store';
import './App.css';

const newRandomCardGenerator = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

class App extends React.Component {
  state = {
    lists: STORE.lists,
    allCards: STORE.allCards,
  }

  handleDeleteCard = (cardKey, listKey) => {
    // set a variable to work from instead of mapping directly onto this.state, as otherwise the map updates this.state directly
    const currentLists = this.state.lists;
    const newListsArray = currentLists.map((list) => {
      if (list.id === listKey) {
        list.cardIds = list.cardIds.filter(id => id !== cardKey)
      }
      return list
    })
    this.setState({
      lists: newListsArray
    })
  }

  handleAddCard = (listKey) => {
    const newCard = newRandomCardGenerator();

    const newListsArray = this.state.lists.map((list) => {
      if (list.id === listKey) {
        list.cardIds.push(newCard.id)
      }
      return list
    })

    this.setState({
      lists: newListsArray,
      allCards: {
        ...this.state.allCards,
        [newCard.id]: newCard
      }
    })
  }

  createListArray() {
    // work with variable store to avoid mapping/writing to this.state directly
    const store = this.state;
    return store.lists.map(listObj => (
      <List 
        key={listObj.id}
        listId={listObj.id}
        header={listObj.header} 
        cards={listObj.cardIds.map((cardId) => store.allCards[cardId])}
        onDeleteCard={this.handleDeleteCard}
        onAddCard={this.handleAddCard} 
      />
    ));
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.createListArray()}
        </div>
      </main>
    );
  }
}

export default App;
