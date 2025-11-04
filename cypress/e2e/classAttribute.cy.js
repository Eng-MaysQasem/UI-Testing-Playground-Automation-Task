describe('Class Attribute page - UI Testing Playground', () => {
  // Run before each test
  beforeEach(() => {
    // Visit the Class Attribute page
    cy.visit('https://uitestingplayground.com/classattr')
      .should('exist') // Ensure the page loaded successfully
  })

 it('Positive: click the primary button and accept alert', () => {
  // Intercept window:alert to automatically accept it
  cy.on('window:alert', (str) => {
    // Verify that the alert contains the expected text
    expect(str).to.equal('Primary button pressed') 
  })

  // Select the button using class selector
  cy.get('button.btn-primary')
    .should('be.visible') 
    .click()
})

  it('Negative: wrong class does not exist', () => {
    // Verify that a non-existent class does not select any button
    cy.get('button.btn-nonexistent').should('not.exist')
  })
})
