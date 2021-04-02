it('loads examples', () => {
  cy.visit('/');
  cy.contains('NSN');
  // cy.contains('Not Valid');
});
