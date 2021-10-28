import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }

    let validName = true;
    let reAlphanumeric = /^([a-zA-Z0-9 ]+)$/;
    if (!reAlphanumeric.test(name)) {
      validName = false;
    }
      
    if (getNegativeNumbersFromString(name).length > 0)
      validName = false;

    if (name.length > 15)
      validName = false;

    if(!validName)
      return;

    props.addTask(name);
    setName("");
  }

  function getNegativeNumbersFromString(value) {
    if (!value)
      return [];

    if (!value.match(/-?\d+/g))
      return [];

    var regx = value.match(/-?\d+/g).map(Number);
    regx = regx.filter((el, i) => {
      return el < 0;
    })
    return regx || [];
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} data-cy="addForm">
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg" data-testid="appTitle" data-cy="appTitle">
          What needs to be done?
        </label>
      </h2>

      <input
        type="text"
        data-testid="todoName"
        data-cy="todoName"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button data-cy="btnAdd" type="submit" data-testid="btnAdd" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
