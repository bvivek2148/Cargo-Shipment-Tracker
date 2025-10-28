describe('Dashboard E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the dashboard page', () => {
    cy.url().should('include', '/');
    cy.contains('Cargo Shipment Tracker').should('be.visible');
  });

  it('should display navigation menu', () => {
    cy.get('nav').should('be.visible');
    cy.contains('Dashboard').should('be.visible');
    cy.contains('Shipments').should('be.visible');
  });

  it('should navigate to shipments page', () => {
    cy.contains('Shipments').click();
    cy.url().should('include', '/shipments');
  });

  it('should display shipment statistics', () => {
    cy.visit('/');
    // Check for common dashboard elements
    cy.get('body').should('contain', 'Shipment');
  });

  it('should be responsive', () => {
    // Test mobile viewport
    cy.viewport('iphone-x');
    cy.visit('/');
    cy.get('body').should('be.visible');

    // Test tablet viewport
    cy.viewport('ipad-2');
    cy.visit('/');
    cy.get('body').should('be.visible');

    // Test desktop viewport
    cy.viewport(1920, 1080);
    cy.visit('/');
    cy.get('body').should('be.visible');
  });
});
