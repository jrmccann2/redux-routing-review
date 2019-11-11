import React, { Component } from "react";
import { Link } from "react-router-dom";

// React Redux
import { connect } from "react-redux";
import { stepTwo } from "../../dux/reducer";

class StepTwo extends Component {
  constructor() {
    super();

    this.state = {
      image: ""
    };
  }

  componentDidMount() {
    const { image } = this.props;
    this.setState({ image });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { image } = this.state;
    return (
      <div>
        <h1>Wizard</h1>
        <input
          type="text"
          name="image"
          value={this.state.image}
          placeholder="Image URL"
          onChange={this.handleChange}
        />
        <Link to="/wizard/1">
          <button onClick={() => this.props.stepTwo(image)}>Previous</button>
        </Link>
        <Link to="/wizard/3">
          <button onClick={() => this.props.stepTwo(image)}>Next</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { image } = reduxState;
  return {
    image
  };
}

const mapDispatchToProps = {
  stepTwo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepTwo);
