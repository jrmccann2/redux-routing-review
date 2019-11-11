import React, { Component } from "react";
import { Link } from "react-router-dom";

// React-redux
import { connect } from "react-redux";
import { stepOne } from "../../dux/reducer";

class StepOne extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
  }

  componentDidMount() {
    const { name, address, city, state, zip } = this.props;
    this.setState({ name, address, city, state, zip });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, address, city, state, zip } = this.state;
    return (
      <div>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="address"
          value={address}
          placeholder="Address"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="city"
          value={city}
          placeholder="City"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="state"
          value={state}
          placeholder="State"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="zip"
          value={zip}
          placeholder="ZIP"
          onChange={this.handleChange}
        />
        <Link to="/wizard/2">
          <button
            onClick={() => this.props.stepOne(name, address, city, state, zip)}
          >
            Next
          </button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { name, address, city, state, zip } = reduxState;
  return {
    name,
    address,
    city,
    state,
    zip
  };
}

const mapDispatchToProps = {
  stepOne
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepOne);
