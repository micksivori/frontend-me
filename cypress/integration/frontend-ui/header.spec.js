describe("Header component validation", () => {
    beforeEach(function () {
      cy.visit("/");
    });
  
    it("Render props to screen", function () {
      cy.get("[data-cy=header-wrapper]").should("to.have.length", 1);
      cy.get("[data-cy=header-purchase-order]").should("to.have.length", 1);
      cy.get("[data-cy=header-purchase-number]").should("to.have.length",1);
      cy.get("[data-cy=header-serial-number]").should("to.have.length", 1);
      cy.get("[data-cy=header-logo-me]").should("to.have.length", 1);
      cy.get("[data-cy=header-buyer]").should("to.have.length", 1);
      cy.get("[data-cy=header-contact-name]").should("to.have.length", 1);
      cy.get("[data-cy=header-icon-users]").should("to.have.length", 1);
      cy.get("[data-cy=header-icon-info-circle]").should("to.have.length",1);
      cy.get("[data-cy=header-contact-email]").should("to.have.length", 1);
      cy.get("[data-cy=header-icon-email]").should("to.have.length", 1);
      cy.get("[data-cy=header-contact-phone]").should("to.have.length", 1);
      cy.get("[data-cy=header-icon-phone]").should("to.have.length", 1);
      cy.get("[data-cy=header-contact-fax]").should("to.have.length", 1);
      cy.get("[data-cy=header-icon-fax]").should("to.have.length", 1);
      cy.get("[data-cy=header-price]").should("to.have.length", 1);
      cy.get("[data-cy=header-status]").should("to.have.length", 1);
      cy.get("[data-cy=header-createdat]").should("to.have.length", 1);
    });
  });
  