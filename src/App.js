import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'
import './Person/Person.css' 
const faker = require('faker')

class App extends Component {
  state = {
    persons: [
      { name: 'The Real McCoy!', age: Math.floor(Math.random()*50), id: Math.random()*9999999},
      { name: faker.name.firstName(), age: Math.floor(Math.random()*50), id: Math.random()*9999999},
      { name: faker.name.firstName(), age: Math.floor(Math.random()*50), id: Math.random()*9999999}
    ],
    showPersons: true
  }

  randomNameHandler = () => {
    //this.setState({
    //  persons: [
    //    { name: newName, age: 32},
    //    { name: "Bethany", age: 29}
    //  ]
    //})
      let persons = this.state.persons.map(person => ({...person, name:faker.name.firstName()}))
      this.setState({ persons: persons }) 
  }

    nameChangeHandler = ( event, id, index ) => {
    //To find index from person.id
    //const personIndex = this.state.persons.findIndex( p => p.id === id )
    const person = {...this.state.persons[index]}  
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[index] = person
    this.setState( {persons: persons} )
  } 
 
  togglePersonsHandler = () => {
    const isShowPersons = this.state.showPersons
    this.setState( { showPersons: !isShowPersons } )
  }

  deletePersonHandler (personIndex) {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState( { persons: persons } )
  }

  render() {
/* const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px'
} */
    /* let persons = this.state.showPersons ?         
    <div>
      <Person  {...this.state.persons[0]} 
        click={()=>this.switchNameHandler('Meow Face')} 
        changed={this.nameChangeHandler}>
          I have hobbies:
          First one!
      </Person>
      <Person  {...this.state.persons[1]} />
    </div> : null */
    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div className="row">
          {this.state.persons.map((person, index) => {
              return <div className="col-md-4"> <Person 
                click = { () => this.deletePersonHandler(index) }
                changed = { (event) => this.nameChangeHandler(event, person.id, index) }
                key = {person.id}
                name = {person.name} 
                age = {person.age} /></div>
            })}
        </div>
        )
    }

    return (
      <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <button className="btn btn-primary btnMain" onClick={this.randomNameHandler}>Randomize</button>
            <button className="btn btn-primary btnMain" onClick={this.togglePersonsHandler}>Toggle View</button>
        </header>
        <div className="container">
  
              {persons}
        
        </div>
      </div>
    )
  }
}

export default App;
