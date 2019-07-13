import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import store, { STEP_THREE, CLEAR } from '../../store'

export default class Wizard extends Component {
  constructor(){
    super();

    const reduxState = store.getState();

    this.state = {
      mortgage: reduxState.mortgage,
      rent: reduxState.rent
    }
  }

  componentDidMount(){
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        mortgage: reduxState.mortgage,
        rent: reduxState.rent
      })
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  handleSubmit = () => {
    const reduxState = store.getState();
    const { mortgage, rent } = this.state;
    const { name, address, city, state, zip, image } = reduxState;
    const body = { name, address, city, state, zip, image, mortgage, rent };

    axios.post(`/api/houses`, body)
      .then( () => {
        this.setState({
          mortgage: 0,
          rent: 0
        })
        store.dispatch({type: CLEAR})
        this.props.history.push("/")
      })
      .catch( err => console.log(err))
  }

  render (){
    return (
      <div>
        <input type="text" name="mortgage" onChange={this.handleChange} value={this.state.mortgage} placeholder="Mortgage" />
        <input type="text" name="rent" onChange={this.handleChange} value={this.state.rent} placeholder="Rent" />
        <Link to="/wizard/2">
          <button onClick={() => store.dispatch({type: STEP_THREE, payload: this.state})}>Previous</button>
        </Link>
        <button onClick={this.handleSubmit}>Complete</button>
      </div>
    )
  }
}