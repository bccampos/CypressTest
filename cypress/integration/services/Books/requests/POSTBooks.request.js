/// <reference types="cypress" />

const payloadAddBook = require('../payloads/Book_Add.json');

function addBook() {
  return cy.request({
    method: 'POST',
    url: 'Books',
    failOnStatusCode: false,
    body: payloadAddBook
  })
}

export { addBook };