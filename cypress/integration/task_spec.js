describe('Task', function() {
  before(function() {
    cy.visit('/')
  })

  beforeEach(function() {
    cy.fixture('task').as('taskData')
    cy.get('.task-wrapper').first().as('task')
  })

  it('enter in the # of times listened to audio', function() {
    cy.get('@task').find('[data-cy="task__times-listened-input"]')
      .type(this.taskData.numTimesListened)
      .should('have.value', this.taskData.numTimesListened)
  })

  it('use the stopwatch', function() {
    cy.get('@task').find('[data-cy="stopwatch__toggle-btn"]')
      .as('toggle')
      .click()

    cy.wait(2000)

    cy.get('@toggle').click()

    cy.get('@task').find('[data-cy="stopwatch__current-time"]')
      // Be any single digit number, just not 00:00
      .contains(/00:0[1-9]/)
  })

  it('enter notes', function() {
    cy.get('@task').find('[data-cy="task__notes"]')
      .type(this.taskData.notes)
      .should('have.value', this.taskData.notes)
  })

  it('save your data', function() {
    cy.get('@task').find('[data-cy="task__save-btn"]')
      .click()

    // TODO: verify the button does something
  })
})
