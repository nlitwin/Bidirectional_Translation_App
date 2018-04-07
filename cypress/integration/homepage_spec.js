describe('HomePage', () => {
  it('loads successfully', () => {
    // TODO save to constant
    cy.visit('localhost:8085')
  })

  it('renders tasks', () => {
    cy.get('.task-wrapper')
      .should('have.length', 6)
  })
})
