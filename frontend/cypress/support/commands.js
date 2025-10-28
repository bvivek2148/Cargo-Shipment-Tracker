// Custom command for login
Cypress.Commands.add('login', (email, password) => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}/auth/login`,
    body: {
      email,
      password
    }
  }).then((response) => {
    window.localStorage.setItem('token', response.body.data.token);
    window.localStorage.setItem('user', JSON.stringify(response.body.data.user));
  });
});

// Custom command to visit with auth
Cypress.Commands.add('loginAndVisit', (url, email = 'admin@cargotracker.com', password = 'Admin123!@#') => {
  cy.login(email, password);
  cy.visit(url);
});

// Custom command to check if element is visible
Cypress.Commands.add('shouldBeVisible', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).should('be.visible');
});
