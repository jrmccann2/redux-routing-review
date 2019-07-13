import React from 'react'
import { Link, Route } from 'react-router-dom'

import StepOne from '../StepOne/StepOne'
import StepTwo from '../StepTwo/StepTwo'
import StepThree from '../StepThree/StepThree'

import store, { CLEAR } from '../../store'

export default function Wizard (props) {
  return (
    <div>
      <Link to="/">
        <button onClick={() => store.dispatch({type: CLEAR})}>Cancel</button>
      </Link>
      <Route path="/wizard/1" component={StepOne} />
      <Route path="/wizard/2" component={StepTwo} />
      <Route path="/wizard/3" component={StepThree} />
    </div>
  )
}