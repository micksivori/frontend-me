describe("Supplier component validation", () => {
    beforeEach(function () {
      cy.visit("/");
    });
  
    it("Render props to screen", function () {
      cy.get("[data-cy=supplier-title]").should("to.have.length", 1);
      cy.get("[data-cy=supplier-name]").should("to.have.length", 1);
      cy.get("[data-cy=supplier-code]").should("to.have.length", 1);
      cy.get("[data-cy=supplier-document-value]").should("to.have.length",1);
      cy.get("[data-cy=supplier-contact-name]").should("to.have.length", 1);
      cy.get("[data-cy=supplier-icon-user]").should("to.have.length", 1);
      cy.get("[data-cy=supplier-document-email]").should("to.have.length",1);
      cy.get("[data-cy=supplier-readat]").should("to.have.length", 1);
      cy.get("[data-cy=supplier-icon-eye]").should("to.have.length", 1);
      cy.get("[data-cy=supplier-address]").should("to.have.length", 1);
      cy.get("[data-cy=supplier-contact-phone]").should("to.have.length",1);
      cy.get("[data-cy=supplier-icon-phone]").should("to.have.length", 1);
      cy.get("[data-cy=supplier-contact-fax]").should("to.have.length", 1);
      cy.get("[data-cy=supplier-icon-fax]").should("to.have.length", 1);
      cy.get("[data-cy=supplier-last-replyat]").should("to.have.length", 1);
      cy.get("[data-cy=supplier-icon-reply]").should("to.have.length", 1);
    });
  });
  