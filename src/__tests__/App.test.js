import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from "enzyme";
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

// configure({ adapter: new Adapter() });

// describe("App", () => {
//  it("renders correctly", () => {
//    shallow(<App />);
//  });
// });


test('App loads correctly', () => {
  const wrapper = render(<App />);
  // wrapper.debug();
  expect(screen.getByText('What needs to be done?')).toBeInTheDocument();
  expect(screen.getByTestId('appTitle').textContent).toBe('What needs to be done?');
});

test('Add todo correctly', async () => {
  render(<App />);

  const btnAdd = screen.getByTestId('btnAdd');
  const input = screen.getByTestId('todoName');

  let todos = screen.queryAllByTestId('todo');

  fireEvent.change(input, { target: { value: 'Todo Test' } })
  fireEvent.click(btnAdd);

  let newTodos = screen.queryAllByTestId('todo');

  expect(todos.length).toBe(newTodos.length - 1);
  expect(newTodos).toMatchSnapshot();
});

test('Delete todo correctly', () => {
  render(<App />);

  //Save Todo
  const btnAdd = screen.getByTestId('btnAdd');
  const input = screen.getByTestId('todoName');
  fireEvent.change(input, { target: { value: 'Todo Test' } })
  fireEvent.click(btnAdd);

  //Delete Todo
  const btnDelete = screen.queryAllByTestId('btnDelete');

  let todos = screen.queryAllByTestId('todo');

  fireEvent.click(btnDelete[0]);

  let newTodos = screen.queryAllByTestId('todo');

  expect(todos.length).toBe(newTodos.length + 1);
});

test('Filter All todos correctly', () => {
  render(<App />);

  const btnAdd = screen.getByTestId('btnAdd');
  const input = screen.getByTestId('todoName');
  const btnAll = screen.getByText('All');

  fireEvent.change(input, { target: { value: 'Active Todo' } })
  fireEvent.click(btnAdd);

  fireEvent.change(input, { target: { value: 'Completed Todo' } })
  fireEvent.click(btnAdd);

  const chbxComplete = screen.queryAllByTestId('chbxComplete');
  fireEvent.click(chbxComplete[1]);

  fireEvent.click(btnAll);

  let todos = screen.queryAllByTestId('todo');
  expect(todos.length).toBe(2);
});

test('Show All todos heading text correctly', () => {
  render(<App />);

  const btnAdd = screen.getByTestId('btnAdd');
  const input = screen.getByTestId('todoName');
  const btnAll = screen.getByText('All');

  fireEvent.change(input, { target: { value: 'Active Todo' } })
  fireEvent.click(btnAdd);

  fireEvent.change(input, { target: { value: 'Completed Todo' } })
  fireEvent.click(btnAdd);

  const chbxComplete = screen.queryAllByTestId('chbxComplete');
  fireEvent.click(chbxComplete[1]);

  fireEvent.click(btnAll);

  const heading = screen.getByTestId('remainingTasksTitle');
  expect(heading.textContent).toBe('2 tasks remaining');
});

test('Filter Active todos correctly', () => {
  render(<App />);

  const btnAdd = screen.getByTestId('btnAdd');
  const input = screen.getByTestId('todoName');
  const btnAll = screen.getByText('Active');

  fireEvent.change(input, { target: { value: 'Active Todo' } })
  fireEvent.click(btnAdd);

  fireEvent.change(input, { target: { value: 'Completed Todo' } })
  fireEvent.click(btnAdd);

  const chbxComplete = screen.queryAllByTestId('chbxComplete');
  fireEvent.click(chbxComplete[1]);

  fireEvent.click(btnAll);

  let todos = screen.queryAllByTestId('todo');
  expect(todos.length).toBe(1);
});

test('Filter Completed todos correctly', () => {
  render(<App />);

  const btnAdd = screen.getByTestId('btnAdd');
  const input = screen.getByTestId('todoName');
  const btnAll = screen.getByText('Completed');

  fireEvent.change(input, { target: { value: 'Active Todo' } })
  fireEvent.click(btnAdd);

  fireEvent.change(input, { target: { value: 'Completed Todo' } })
  fireEvent.click(btnAdd);

  const chbxComplete = screen.queryAllByTestId('chbxComplete');
  fireEvent.click(chbxComplete[1]);

  fireEvent.click(btnAll);

  let todos = screen.queryAllByTestId('todo');
  expect(todos.length).toBe(1);
});

// test('Verify scroll on more than six todo items', () => {
//   const wrapper = render(<App />);

//   const btnAdd = screen.getByTestId('btnAdd');
//   const input = screen.getByTestId('todoName');

//   let todos = screen.queryAllByTestId('todo');

//   for (let index = 0; index < 7; index++) {
//     fireEvent.change(input, { target: { value: 'Todo Test ' + index } })
//     fireEvent.click(btnAdd);
//   }
  
//   const todoList = screen.getByTestId('todoList');
//   // const todoList = document.getElementById('todoList');
//   wrapper.debug();
//   // console.log()
//   expect(todoList.scrollHeight > todoList.clientHeight).toBe(true);
// });

test('Verify outline on todo input', async () => {
  const wrapper = render(<App />);

const input = screen.getByTestId('todoName');
input.focus();
fireEvent.focus(input);

const styles = window.getComputedStyle(input);
console.log(styles.borderColor);
  // const input = screen.getByTestId('todoName');
  // fireEvent.focus(input);
  // expect(input).toHaveFocus();
  
  // await wait(() => {
  //   // expect(document.activeElement).toBe(container.querySelector('input'))
  //   expect(input).toHaveStyle('outline-color: rgb(34, 139, 236)');
  // });
})
