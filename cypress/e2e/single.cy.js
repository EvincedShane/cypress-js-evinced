describe("Evinced", () => {
  it("Evinced basic example", () => {
    // Navigate to site
    cy.visit("https://demo.evinced.com/");
    //Scan for a11y issues, get the result and assert on the number of issues found
    // cy.evAnalyze().should((issues) => {
    //   expect(issues).to.be.empty();
    // });
    cy.evAnalyze().then((issues) => {
      cy.evSaveFile(issues, "html", './downloads/report.html');
    });
  });
});
