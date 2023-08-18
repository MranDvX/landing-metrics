describe('Excel Download', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display DollarChart modal and allow downloading Excel', () => {
    cy.get('button.landing-btn').click();
    
    cy.get('#chart').should('be.visible');
    
    cy.get('button.button-primary').click();
    
  });
});
