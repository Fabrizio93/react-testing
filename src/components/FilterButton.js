import React from "react";

function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      name="xxx"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <label className="visually-hidden">{props.isPressed ? 'on' : 'off'}</label>
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
