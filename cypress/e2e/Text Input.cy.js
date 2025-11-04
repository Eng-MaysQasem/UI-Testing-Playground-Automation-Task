// Test suite for the "Text Input" page on UI Testing Playground
describe('Text Input', () => {

  // Runs before each test case
  beforeEach(() => {
    // Visit the main UI Testing Playground homepage
    cy.visit('https://uitestingplayground.com/?authuser=0')

    // Click on the "Text Input" link to open the test page
    cy.get('a[href="/textinput"]').click()
  })

  // Positive test case: verifies that the button label updates correctly after entering text
  it('Positive: should update button label after entering text', () => {
    const inputText = 'Hi' // Text to input in the text field

    // Type the text into the input box
    cy.get('#newButtonName')
      .type(inputText)

    // Ensure the button is visible and click it
    cy.get('#updatingButton')
      .should('be.visible')
      .click()

    // Verify that the button label has changed to the entered text
    cy.get('#updatingButton')
      .should('contain.text', inputText)
  })

  // Negative test case: verifies that the button label does NOT change if input field is empty
  it('Negative: button label should not change if input is empty', () => {
    // Get the current text of the button before interaction
    cy.get('#updatingButton')
      .then(($btn) => {
        const originalText = $btn.text() // Save the original label text

        // Clear the input field (ensure it's empty)
        cy.get('#newButtonName').clear()

        // Click the button without typing any text
        cy.get('#updatingButton').click()

        // Verify that the button label remains unchanged
        cy.get('#updatingButton')
          .should('have.text', originalText)
      })
  })
})
