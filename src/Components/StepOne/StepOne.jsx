import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import store, { STEP_ONE } from '../../store'

export default class Wizard extends Component {
  constructor(){
    super();

    const reduxState = store.getState()

    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip
    }
  }

  componentDidMount(){
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState({
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip
      })
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  render (){
    const { name, address, city, state, zip } = this.state;
    return (
      <div>
        <input type="text" name="name" onChange={this.handleChange} value={name} placeholder="Name" />
        <input type="text" name="address" onChange={this.handleChange} value={address} placeholder="Address" />
        <input type="text" name="city" onChange={this.handleChange} value={city} placeholder="City" />
        <input type="text" name="state" onChange={this.handleChange} value={state} placeholder="State" />
        <input type="text" name="zip" onChange={this.handleChange} value={zip} placeholder="ZIP" />
        <Link to="/wizard/2">
          <button onClick={() => store.dispatch({type: STEP_ONE, payload: this.state})}>Next</button>
        </Link>
      </div>
    )
  }
}