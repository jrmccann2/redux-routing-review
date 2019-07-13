import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import House from '../House/House'

export default class Dashboard extends Component {
  constructor(){
    super()

    this.state = {
      houses: []
    }
  }

  componentDidMount(){
    this.getHouses()
  }

  getHouses = () => {
    axios.get(`/api/houses`)
      .then( houses => {
        this.setState({
          houses: houses.data
        })
      })
      .catch( err => {
        console.log(err)
      })
  }

  deleteHouse = (id) => {
    axios.delete(`/api/houses/${id}`)
      .then( () => {
        this.getHouses()
      })
      .catch( err => {
        console.log(err)
      })
  }

  render(){

    const houses = this.state.houses.map( house => {
      return (
        <House
          key={house.id}
          house={house} 
          deleteHouse={this.deleteHouse}
        />
      )
    })
    return (
      <div>
        <h1>Dashboard</h1>
        {houses}
        <Link to="/wizard/1">
          <button>Add New Property</button>
        </Link>
      </div>
    )
  }
}