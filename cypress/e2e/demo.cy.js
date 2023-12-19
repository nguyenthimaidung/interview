const cypress = require("cypress")


describe('Demo test', () => {
    it('test', () => {
        cy.visit("https://google.com");
        cy.get("//a[@class='btn buy']").click();
        cy.get("//div[@class='cart-checkout']").click();
        cy.get("//div[@class='logo-store']").should('be.visible');
        const iframe = cy.get("//iframe[@id ='snap-midtrans']")
        .its("//img[@alt='VISA']")
        .should('be.visible')
        .then(cy.wrap)
        iframe.clear().click()

    })
})