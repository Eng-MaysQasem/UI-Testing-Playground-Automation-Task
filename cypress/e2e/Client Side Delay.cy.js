// Test suite for the "Client Side Delay" page on UI Testing Playground
describe('Client Side Delay', () => {

  // Runs before each test case
  beforeEach(() => {
    // Visit the main UI Testing Playground homepage
    cy.visit('https://uitestingplayground.com/?authuser=0')

    // Navigate to the "Client Side Delay" page by clicking its link
    cy.get('a[href="/clientdelay"]').click()

    // Click the AJAX button to trigger client-side processing (simulated delay)
    cy.get('#ajaxButton').click()
  })

  // Positive test case: verifies that the success message appears after the delay
  it('Positive: Should display "Data calculated on the client side." after AJAX button click', () => {
    // Wait (up to 15.5 seconds) for the result paragraph to appear after the simulated delay
    cy.get('p.bg-success', { timeout: 15500 })
      .should('be.visible') // Ensure that the success message becomes visible
      .and('contain.text', 'Data calculated on the client side.') // Verify the exact message text
  })

  // Negative test case: verifies that the message does NOT appear immediately after clicking
  it('Negative: paragraph should not contain text immediately after button click', () => {
    // Check within 1 second that the success message does not yet exist
    cy.get('p.bg-success', { timeout: 1000 })
      .should('not.exist') // The paragraph should not be in the DOM right away
  })
})
