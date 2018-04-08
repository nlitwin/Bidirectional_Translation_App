describe('HomePage', function() {
  it('loads successfully', function() {
    cy.visit('/')
  })

  it('renders tasks', function() {
    cy.get('.task-wrapper')
      .should('have.length', 6)
  })
})
