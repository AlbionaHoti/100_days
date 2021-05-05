describe('My First Test', function () {
  it('Gets, types and asserts', function () {
    // Arrange - setup the application state
    // - visit a web page
    // - query for an element
    // Act - take an action
    // - Interact with that element
    // Assert - make an assertion about the updated application state
    // - make an assertion about page content

    // accessing cypress commands through the global cy object
    cy.visit('https://example.cypress.io');

    cy.pause();

    cy.contains('type').click();

    cy.url().should('include', '/commands/actions');

    cy.get('.action-email')
      .type('fake@gmail.com')
      .should('have.value', 'fake@gmail.com');
  });
});
