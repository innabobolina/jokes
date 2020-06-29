import React, { Component } from "react";
import { connect } from "react-redux";
import { addJoke, getJokes } from "../actions/joke";

class JokeList extends Component {
  // state = {
  //   jokeList: [],
  // };
  componentDidMount() {
    this.props.getJokes();
  }

  render() {
    console.log(this.props);
    const { jokeList, addJoke } = this.props;
    return (
      <div>
        {this.props.jokeList.map((x) => (
          <p key={x.id}>{x.joke}</p>
        ))}
        <button onClick={() => {}}>Add joke</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state", state.joke);
  return { jokeList: state.joke };
};

const mapDispatch = { getJokes };
export default connect(mapStateToProps, mapDispatch)(JokeList);
