import React, { Component } from "react";
import { connect } from "react-redux";

class JokeList extends Component {
  // state = {
  //   jokeList: [],
  // };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.jokeList.map((x) => (
          <p key={x.id}>{x.joke}</p>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state", state.joke);
  return { jokeList: state.joke };
};
export default connect(mapStateToProps)(JokeList);
