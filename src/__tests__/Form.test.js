import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { prettyDOM, queryByLabelText } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import Form from '../components/Form';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const addTask = jest.fn();

afterEach(cleanup);

test('Render filter button component', () => {
    const data = {
        addTask: () => { },
    }
    const component = render(<Form
        addTask={data.addTask} />);
});

test('Validate input avoid special characters', () => {
    render(<Form addTask={addTask} />);
    const btnAdd = screen.getByTestId('btnAdd');
    const input = screen.getByTestId('todoName');

    fireEvent.change(input, { target: { value: 'Todo Test 1.' } })
    fireEvent.click(btnAdd);

    expect(addTask).not.toHaveBeenCalled();
});

test('Validate input avoid negative numbers', () => {
    render(<Form addTask={addTask} />);
    const btnAdd = screen.getByTestId('btnAdd');
    const input = screen.getByTestId('todoName');

    fireEvent.change(input, { target: { value: 'Todo Test -1' } })
    fireEvent.click(btnAdd);

    expect(addTask).not.toHaveBeenCalled();
});

test('Validate input avoid values longer than 15 chars', () => {
    render(<Form addTask={addTask} />);
    const btnAdd = screen.getByTestId('btnAdd');
    const input = screen.getByTestId('todoName');

    fireEvent.change(input, { target: { value: 'This is a todo name longer than 15 characters' } })
    fireEvent.click(btnAdd);

    expect(addTask).not.toHaveBeenCalled();
});

test('Submit todo correctly', () => {
    render(<Form addTask={addTask} />);
    const btnAdd = screen.getByTestId('btnAdd');
    const input = screen.getByTestId('todoName');

    // expect(screen.getByTestId('').textContent).toBe('');
    // expect(screen.getByTestId('').tagName).not.toBe('');
    // expect(screen.getByTestId('')).not.toBeInTheDocument('');

    fireEvent.change(input, { target: { value: 'Todo Test' } })
    fireEvent.click(btnAdd);

    expect(addTask).toHaveBeenCalled();
    // expect(addTask).toHaveBeenCalledTimes(1);
});
