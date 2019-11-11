import React from "react";
import { Link, Route } from "react-router-dom";

import StepOne from "../StepOne/StepOne";
import StepTwo from "../StepTwo/StepTwo";
import StepThree from "../StepThree/StepThree";

// React Redux
import { connect } from "react-redux";
import { clear } from "../../dux/reducer";

function Wizard(props) {
  return (
    <div>
      <Link to="/">
        <button onClick={() => props.clear()}>Cancel</button>
      </Link>
      <Route path="/wizard/1" component={StepOne} />
      <Route path="/wizard/2" component={StepTwo} />
      <Route path="/wizard/3" component={StepThree} />
    </div>
  );
}

const mapDispatchToProps = {
  clear
};

export default connect(
  null,
  mapDispatchToProps
)(Wizard);
