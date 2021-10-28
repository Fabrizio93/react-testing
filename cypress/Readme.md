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

We can find more information about selectors in the [Cypress website](https://docs.cypress.io/api/table-of-contents).

### 5. Run tests
With Cypress we can see our tests in the desktop client that cypress open when we run the __npx cypress open__ command. To run one file we only have to click on the file name, and it'll automatically open a browser with a list of our tests and our app UI.
