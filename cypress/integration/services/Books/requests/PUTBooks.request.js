/// <reference types="cypress" />

const payloadUpdateBook = require('../payloads/Book_Update.json')

function updateBook(idBook) {
  return cy.request({
    method: 'PUT',
    url: `Books/${idBook}`,
    headers: {
      'Content-Type': 'application/json',  
    },
    failOnStatusCode: false,
    body: payloadUpdateBook
  })
}

export { updateBook };