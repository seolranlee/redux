import React from "react";
import WaitingList from "../components/WaitingList";
import { connect } from "react-redux";
import { changeInput, create, enter, leave } from "../store/modules/waiting";

const WatingListContainer = ({
  input,
  list,
  changeInput,
  create,
  enter,
  leave
}) => {
  const onChange = e => {
    changeInput(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    create(input);
    changeInput("");
  };
  const onEnter = id => enter(id);
  const onLeave = id => leave(id);
  return (
    <WaitingList
      input={input}
      waitingList={list}
      onChange={onChange}
      onSubmit={onSubmit}
      onEnter={onEnter}
      onLeave={onLeave}
    />
  );
};

export default connect(
  ({ wating }) => ({
    input: wating.input,
    list: wating.list
  }),
  {
    changeInput,
    create,
    enter,
    leave
  }
)(WatingListContainer);
