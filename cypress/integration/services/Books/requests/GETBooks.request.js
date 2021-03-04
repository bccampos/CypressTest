/// <reference types="cypress" />

function allBooks(){
    
    //cy.request = ClientHttp
    return cy.request({
        method: 'GET',
        url: 'Books',
        failOnStatusCode: false,
    })

}

export { allBooks}