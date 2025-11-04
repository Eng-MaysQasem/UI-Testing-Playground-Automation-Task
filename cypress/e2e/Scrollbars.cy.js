// Test suite for the "Scrollbars" page on UI Testing Playground
describe('Scrollbars', () => {

  // Runs before each test case
  beforeEach(() => {
    // Visit the main homepage of UI Testing Playground
    cy.visit('https://uitestingplayground.com/?authuser=0')

    // Click on the "Scrollbars" link to navigate to the test page
    cy.get('a[href="/scrollbars"]').click()
  })

  // Positive test: verifies that the hidden button can be revealed by scrolling and then clicked
  it('Positive: should scroll to the hidden button and click it', () => {
    // Locate the hidden button by its ID and scroll it into view
    cy.get('#hidingButton')
      .scrollIntoView()        // Scrolls until the element is visible in the viewport
      .should('be.visible')    // Asserts that the button is now visible
      .click()                 // Clicks the button once it’s visible
  })

  // Negative test: verifies that the button is NOT visible before scrolling
  it('Negative: button should not be visible before scrolling', () => {
    // Locate the button by its ID and confirm it’s hidden initially
    cy.get('#hidingButton')
      .should('not.be.visible')  // Checks that the element is outside the viewport before scrolling
  })
})
