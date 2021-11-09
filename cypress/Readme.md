# Testing with Cypress
## Start the project

To start the project you need to execute the following commands on /react-testing folder.

### 1. Install Cypress
To install Cypress we have to have a Node version above 12. and execute the command below.
        
    yarn add cypress

### 2. Run Cypress
To run cypress we have to run the following command

    ngx cypress open

This command will create a __cypress__ folder in the project with some examples of testing.
We'll use the __integration__ folder to create our tests.

### 3. Configure our Cypress client
We can configure our cypress client add some options to our __cypres.json__ file. For now we'll only use the following configuration:

    {
        "baseUrl": "http://localhost:3000/"
    }

We'll use this configuration to avoid write our app url in every test we need.

### 4. Creating tests
We'll create an __App.spec.js__ file. It'll contain our test cases for our project. I.e.

    describe('App', () => {
        it('Load App', () => {
            // Relative path - with the configuration file we avoid to write the complete URL
            cy.visit('/');

            //Check title load correctly
            cy.contains('label', 'What needs to be done?');
            cy.get('[data-cy=appTitle]')
                .invoke('text')
                .should('equal', 'What needs to be done?');

            //Check form loads correctly
            cy.get('[data-cy=addForm]')
                .should('exist');

            cy.get('[data-cy=btnAdd]')
                .should('exist')
                .should('have.class', 'btn__primary');
        });
    });

As the same as __Jest.js__ in __Cypress__ we can use attributes to identify our elements which we have to interact. __Cypress__ suggest use the __[data-cy]__ attribute. We can fins the element using that attribute below:

- addForm: FORM element for add a new Todo
- appTitle: LABEL that shows the add todo form title
- todoName: INPUT type TEXT used to enter the name for a new todo
- btnAdd: BUTTON that saves a new todo
- inputEditTodo: INPUT type TEXT used to enter the new name for one todo
- btnCancelEdit: BUTTON element to cancel a Todo edition
- btnSaveEdit: BUTTON element to save the changes
- labelTodoName: LABEL element that displays the name of a Todo
- btnEdit: BUTTON that open the edit form of every todo item
- btnDelete: BUTTON that allos user to delete one todo
- todo: LI element that contains the todo details 

We can use that names to get any element using the __get()__ function, i.e.

    cy.get('[data-cy=myTestingElement]')
                .someAction('someParameter');

We can find more information about selectors in the [Cypress website](https://docs.cypress.io/api/table-of-contents).

### 5. Run tests
With Cypress we can see our tests in the desktop client that cypress open when we run the __npx cypress open__ command. To run one file we only have to click on the file name, and it'll automatically open a browser with a list of our tests and our app UI.
