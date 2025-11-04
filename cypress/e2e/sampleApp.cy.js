// Test suite for the "Sample App" page on UI Testing Playground
describe('Sample App', () => {

  // Runs before each test case
  beforeEach(() => {
    // Visit the main UI Testing Playground homepage
    cy.visit('https://uitestingplayground.com/?authuser=0')

    // Click on the "Sample App" link to open the login test page
    cy.get('a[href="/sampleapp"]').click()
  })

  // Positive test case: successful login with valid username and correct password
  it('Positive: should log in successfully with valid username and correct password', () => {
    const username = 'Aya Khalifa'
    const password = 'pwd'  // Correct password according to the playground instructions

    // Type the username into the username input field
    cy.get('input[name="UserName"]')
      .type(username)

    // Type the password into the password input field
    cy.get('input[name="Password"]')
      .type(password)

    // Click the login button to submit the form
    cy.get('#login')
      .click()

    // Verify that the login status text contains the welcome message with the username
    cy.get('#loginstatus')
      .should('contain.text', `Welcome, ${username}`)
  })

  // Negative test case: login attempt with invalid password should fail
  it('Negative: login fails with incorrect credentials', () => {
    const username = 'Mays Qasem'
    const password = '123'  // Wrong password to simulate a failed login attempt

    // Type the username
    cy.get('input[name="UserName"]')
      .type(username)

    // Type the incorrect password
    cy.get('input[name="Password"]')
      .type(password)

    // Click the login button
    cy.get('#login')
      .click()

    // Verify that the login status shows an invalid credentials message
    cy.get('#loginstatus')
      .should('contain.text', 'Invalid username/password')
  })
})
