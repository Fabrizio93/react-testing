import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import {prettyDOM} from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import FilterButton from '../components/FilterButton';
import * as $ from 'jquery';

//Load component test
test('Render filter button component', () => {
  const data = {
    name: 'All',
    isPressed: true,
    setFilter: (name) => {

    }
  }

  const component = render(<FilterButton name={data.name} isPressed={data.isPressed} setFilter={data.setFilter}/>);

  //To load component
  // console.log(prettyDOM(component.container.querySelector('button')));
  // component.getByText('All');
});

test('Click on component', () => {
  const data = {
    name: 'All',
    isPressed: true,
  }
  const mockHandler = jest.fn();
  const component = render(<FilterButton name={data.name} isPressed={data.isPressed} setFilter={mockHandler}/>);
  const button = component.getByText('All')
  fireEvent.click(button);
  //expect(mockHandler.mock.calls).toHaveLength(1);
  expect(mockHandler).toHaveBeenCalledTimes(1);
});
