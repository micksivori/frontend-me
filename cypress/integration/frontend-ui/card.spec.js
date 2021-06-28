describe("CardAddresses component validation", () => {
    beforeEach(function () {
      cy.visit("/");
    });
  
    //validate addresses information in card component
    it("Render props to screen", function () {
      cy.get("[data-cy=address-label]").should("to.have.length", 3);
      cy.get("[data-cy=address-name]").should("to.have.length", 3);
      cy.get("[data-cy=address-code]").should("to.have.length", 3);
      cy.get("[data-cy=address-icon-map-marker]").should("to.have.length",3);
      cy.get("[data-cy=address-address]").should("to.have.length", 3);
      cy.get("[data-cy=address-icon-user]").should("to.have.length", 3);
      cy.get("[data-cy=address-contact-name]").should("to.have.length", 3);
      cy.get("[data-cy=address-icon-email]").should("to.have.length", 3);
      cy.get("[data-cy=address-contact-email]").should("to.have.length", 3);
      cy.get("[data-cy=address-icon-phone]").should("to.have.length", 3);
      cy.get("[data-cy=address-contact-phone]").should("to.have.length", 3);
      cy.get("[data-cy=address-icon-fax]").should("to.have.length", 3);
      cy.get("[data-cy=address-contact-fax]").should("to.have.length", 3);
    });
  });
  