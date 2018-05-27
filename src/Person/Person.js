import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class Person extends PureComponent {
  constructor (props) {
    super(props)
    console.log('[Person.js] Inside Constructor', props)
  }
  componentWillMount () {
    console.log('[Person.js] Inside componentWillMount()')
  }
  componentDidMount () {
    console.log('[Person.js] Inside componentDidMount()')
  }
  /* shouldComponentUpdate (nextProps, nextState) {
    console.log('[UPDATE Person.js] Inside shouldComponentUpdate', nextProps, nextState)
    return nextProps.changed !== this.props.changed ||
    nextProps.click !== this.props.click
  } */
  componentWillUpdate (nextProps, nextState) {
    console.log('[UPDATE Person.js] Inside componentWillUpdate', nextProps, nextState)
  }
  componentDidUpdate () {
    console.log('[UPDATE Person.js] Inside componentDidUpdate')
  }
  render () {
    console.log('[Person.js] Inside render()')
    return (
      <div className='Person'>
        <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type='text' onChange={this.props.changed} value={this.props.name} />
      </div>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default Person
