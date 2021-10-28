# React Tests with Jest
## Start the project

To start the project you need to execute the following commands on /react-testing folder.

### 1. yarn install
Install all the dependencies to start the project

### 2. yarn start
Start the project. By default the app runs on the 3000 port.

### 3. yarn test
Run the tests. These are located on the /react-testing/src/__tests __ folder.

## Testing

For the testings we are using __@testing-library__ for __react__ and __jest__.
To identify the elements which we are going to interact for our tests, we are using some indetifiers. One of them is the __data-testid__. It allow us to get some element and chage its value or trigger an event (click, change, focus).


- remainingTasksTitle: H2 element that shows the number os tasks listed
- todoList: UL element that contains all todo elements
- todo: LI element that contains the todo details 
- chbxComplete: INPUT type CHECKBOX that allows user marks a todo as completed
- btnEdit: BUTTON that open the edit form of every todo item
- btnDelete: BUTTON that allos user to delete one todo
- appTitle: LABEL that shows the add todo form title
- todoName: INPUT type TEXT used to enter the name for a new todo
- btnAdd: BUTTON that saves a new todo
- formEditTodo: FORM that allows edit the name of one todo
- inputEditTodo: INPUT type TEXT used to enter the new name for one todo

### Selectors

We can use the __data-testid__ with the __screen.getByTestId('testId')__ to get an specific element and do some action. Or we can use some other selectors, like text value.

    //To get one element by test id
    screen.getByTestId('testId')

    // To get all elements with a test id
    screen.queryAllByTestId('testId')

    // To get an element by its text content
    screen.getByText('Element text');

### Trigger events

To fire an event on some element we can use __fireEvent__ like this:

    fireEvent.click(button);
    fireEvent.change(input, { target: { value: 'Input value' } });

### Component functions

To execute component functions, we are using spy functions, this is a native __jest__ functionality that allows create funcions on our test with a behavior exactly as our component. we can define our spy functions like the code below:

    const myFunction = jest.fn();

Then we can call that function on our tests and it'll execute the code from the original function of our component.

    test('My tst to call an spy function', () => {
        render(<MyComponent myFunction={myFunction} />);
    })

### Check function execution

To ensure that a function is called correctly, we can use a __jest__ function that allows user to check if the function have been called correctly, on check how many times the function have ben called.

    // Check if the function have been called
    expect(myFunction).toHaveBeenCalled()

    // Check how many times the function have been called
    expect(myFunction).toHaveBeenCalledTimes(1)

### Verifiy test result

To do the test and verify that our code is executing correctly we can use the __expect__ function:

    // To match a value
    expect(2).toBe(2)

    // To avoid a value
    expect(2).not.toBe(3)


