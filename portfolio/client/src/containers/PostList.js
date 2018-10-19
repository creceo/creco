import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Post from "../components/Post";

// prettier-ignore
const arr = [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10
    ,  11,  12,  13,  14,  15,  16,  17,  18,  19,  20 ];

class PostList extends Component {
  componentDidMount() {}
  render() {
    return (
      // eslint-disable-next-line
      <ul className="mdc-list mdc-list--two-line" aria-orientation={"vertical"}>
        {(() =>
          arr.map((e, i) => (
            <Post {...{ title: e, preview: "preview" + e }} key={i} />
          )))()}
      </ul>
    );
  }
}

const mapStateToPrpos = state => {
  return {
    message: state.messageReducer.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChaneMessage: message => {
      dispatch(actions.changeMessage(message));
    }
  };
};
export default connect(
  mapStateToPrpos,
  mapDispatchToProps
)(PostList);
