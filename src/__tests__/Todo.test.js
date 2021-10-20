import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Todo from '../components/Todo';
import * as $ from 'jquery';

const toggleTaskCompleted = jest.fn();
const deleteTask = jest.fn();
const editTask = jest.fn();
const data = {
    id: '1',
    name: 'Task',
    completed: true,
    key: '1',
    toggleTaskCompleted: toggleTaskCompleted,
    deleteTask: deleteTask,
    editTask: editTask,
}

test('Render filter button component', () => {
    const data = {
        id: '1',
        name: 'Task',
        completed: true,
        key: '1',
        toggleTaskCompleted: () => { },
        deleteTask: () => { },
        editTask: () => { },
    }
    const component = render(<Todo
        id={data.id}
        name={data.name}
        completed={data.completed}
        key={data.id}
        toggleTaskCompleted={data}
        deleteTask={data}
        editTask={data} />);
});

test('Edit Todo', () => {
    render(<Todo
        id={data.id}
        name={data.name}
        completed={data.completed}
        key={data.id}
        toggleTaskCompleted={data.toggleTaskCompleted}
        deleteTask={data.deleteTask}
        editTask={data.editTask} />);

    fireEvent.click(screen.getByTestId('btnEdit'));
    expect(screen.queryByText('New name for ' + data.name)).toBeInTheDocument();
});

test('Save Todo Edition', async () => {
    const newName = 'New name';
    render(<Todo
        id={data.id}
        name={data.name}
        completed={data.completed}
        key={data.id}
        toggleTaskCompleted={data.toggleTaskCompleted}
        deleteTask={data.deleteTask}
        editTask={data.editTask} />);

    fireEvent.click(screen.getByTestId('btnEdit'));
    fireEvent.change(screen.queryByTestId('inputEditTodo'), {
        target: {
            value: newName
        }
    })
    fireEvent.click(screen.getByTestId('btnSaveEdit'))
    
    expect(editTask).toHaveBeenCalled();
    // expect(screen.queryByText(newName)).toBeInTheDocument();
});
