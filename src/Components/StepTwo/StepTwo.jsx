import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import store, { STEP_TWO } from '../../store'

export default class Wizard extends Component {
  constructor(){
    super();

    const reduxState = store.getState()

    this.state = {
      image: reduxState.image
    }
  }

  componentDidMount(){
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        image: reduxState.image
      })
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  render (){
    return (
      <div>
        <h1>Wizard</h1>
        <input type="text" name="image" onChange={this.handleChange} value={this.state.image} placeholder="Image URL" />
        <Link to="/wizard/1">
          <button onClick={() => store.dispatch({type: STEP_TWO, payload: this.state})}>Previous</button>
        </Link>
        <Link to="/wizard/3">
          <button onClick={() => store.dispatch({type: STEP_TWO, payload: this.state})}>Next</button>
        </Link>
      </div>
    )
  }
}