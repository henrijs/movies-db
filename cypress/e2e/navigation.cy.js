describe('Navigation', () => {
  it('should navigate to the movies search page', () => {

    // Start from the index page
    cy.visit('http://localhost:3000/')
 
    // Find a link with an href attribute containing "search" and click it
    cy.get('header a[href*="search"]').click()
 
    // The new url should include "/search"
    cy.url().should('include', '/search')
 
    // The new page should contain an h1 with "results"
    cy.get('h1').contains('Search')
  })
})

describe('Navigation', () => {
  it('should navigate to the movies details page', () => {

    // Visit movie details page for "Star trek"
    cy.visit('http://localhost:3000/movie/tt0796366')
  
    // The page should contain an h1 with "Star Trek"
    cy.get('h1').contains('Star Trek')
  })
})