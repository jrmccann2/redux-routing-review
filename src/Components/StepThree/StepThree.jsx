import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// React Redux
import { connect } from "react-redux";
import { stepThree, clear } from "../../dux/reducer";

class StepThree extends Component {
  constructor() {
    super();

    this.state = {
      mortgage: 0,
      rent: 0
    };
  }

  componentDidMount() {
    const { mortgage, rent } = this.props;
    this.setState({ mortgage, rent });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { mortgage, rent } = this.state;
    const { name, address, city, state, zip, image } = this.props;

    const body = { name, address, city, state, zip, image, mortgage, rent };

    axios
      .post(`/api/houses`, body)
      .then(() => {
        this.setState({
          mortgage: 0,
          rent: 0
        });
        this.props.clear();
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    const { mortgage, rent } = this.state;
    return (
      <div>
        <input
          type="text"
          name="mortgage"
          onChange={this.handleChange}
          value={this.state.mortgage}
          placeholder="Mortgage"
        />
        <input
          type="text"
          name="rent"
          onChange={this.handleChange}
          value={this.state.rent}
          placeholder="Rent"
        />
        <Link to="/wizard/2">
          <button onClick={() => this.props.stepThree(mortgage, rent)}>
            Previous
          </button>
        </Link>
        <button onClick={this.handleSubmit}>Complete</button>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { name, address, city, state, zip, image, mortgage, rent } = reduxState;
  return {
    name,
    address,
    city,
    state,
    zip,
    image,
    mortgage,
    rent
  };
}

const mapDispatchToProps = {
  stepThree,
  clear
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepThree);
