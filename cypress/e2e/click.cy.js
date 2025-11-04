// Test suite for the "Click" page on UI Testing Playground
describe('Click', () => {

  // Runs before each test case
  beforeEach(() => {
    // Visit the main UI Testing Playground homepage
    cy.visit('https://uitestingplayground.com/?authuser=0')

    // Click on the "Click" page link to navigate to the test page
    cy.get('a[href="/click"]').click()
  })

  // Positive test case: Verify that clicking the blue button turns it green
  it('Positive: Primary (blue) button click shows success (green) button', () => {
    // Select the blue button using its class selector
    cy.get('.btn-primary')
      .should('be.visible') // Ensure the button is visible before clicking
      .click() // Perform the click action

    // After clicking, verify that the success (green) button appears
    cy.get('.btn-success').should('be.visible')
  })

  // Negative test case: Ensure that the green button is not visible before clicking
  it('Negative: Success button should not exist if primary button is not clicked', () => {
    // Check that the success button does NOT exist on the page initially
    cy.get('.btn-success').should('not.exist')
  })
})
