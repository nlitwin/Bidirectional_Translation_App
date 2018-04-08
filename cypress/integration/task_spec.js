describe('Task', function() {
  beforeEach(function() {
    cy.visit('/')
    cy.fixture('task').as('taskData')
    cy.get('.task-wrapper').first().as('task')
  })

  it('enter in the # of times listened to audio', function() {
    cy.get('@task').find('[data-cy="task__times-listened-input"]')
      .type(this.taskData.numTimesListened)
      .should('have.value', this.taskData.numTimesListened)
  })

  it('use the stopwatch', function() {
    // TODO click the stopwatch and get value
  })

  it('enter notes', function() {
    console.log(this)
    cy.get('@task').find('[data-cy="task__notes"]')
      .type(this.taskData.notes)
      .should('have.value', this.taskData.notes)
  })

  it('save your data', function() {
    // TODO click the button
    // TODO verify the button does something
  })
})
