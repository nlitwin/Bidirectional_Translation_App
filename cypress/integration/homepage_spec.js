describe('HomePage', () => {
  it('loads successfully', () => {
    // TODO save to constant
    cy.visit('/')
  })

  it('renders tasks', () => {
    cy.get('.task-wrapper')
      .should('have.length', 6)
  })
})
