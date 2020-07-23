import React from 'react';
import {CardList} from './components/CardList/CardList.js'
import {SearchBox} from './components/SearchBox/SearchBox.js'
import './App.css';

class App extends React.Component {

  constructor()
  {
    super();
      this.state = {
        monsters: [],
        searchField: ''
      };
  }
  
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>
    {
      this.setState({monsters: users});
    });
  }

  searchOnChangeHandler(e)
  {
    this.setState({searchField: e.target.value});
  }

  render()
  {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <SearchBox placeholder="Search for monsters" handleChange={this.searchOnChangeHandler.bind(this)} />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
  
}

export default App;
