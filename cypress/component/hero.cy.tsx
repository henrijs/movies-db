import Hero from '../../components/Hero'

describe('<Hero />', () => {
  it('should render and display expected content', () => {
    cy.mount(<Hero />)
    cy.get('h1').contains('Welcome')
    cy.get('.hero .btn-primary').should('be.visible')
  })
})