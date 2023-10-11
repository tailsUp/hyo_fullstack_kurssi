Cypress.Commands.add('login', ({ username, password }) => {
  //cy.request('POST', 'http://localhost:3001/api/login', { username, password }).then(({ body }) => {
  cy.request('POST', 'http://localhost:3003/api/login', { username, password }).then(({ body }) => {
    localStorage.setItem('loggedNoteappUser', JSON.stringify(body))
    cy.visit('http://localhost:5173')
  })
})

Cypress.Commands.add('createBlog', ({ title, author, url, likes, user }) => {
  cy.request({
    //url: 'http://localhost:3001/api/blogs',
    url: 'http://localhost:3003/api/blogs',
    method: 'POST',
    body: { title, author, url, likes, user },
    headers: {
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('loggedNoteappUser')).token}`
    }
  })
  cy.visit('http://localhost:5173')
})