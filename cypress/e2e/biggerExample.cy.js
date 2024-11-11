context("Evinced Demo Site tests", () => {
    before(() => {
        // Start the Evinced engine
        cy.evStart();
    });

    after(() => {
        // Conclude the scan, print issues to cy.log with logIssues and print the report JSON object to browser's console
        cy.evStop({ logIssues: true }).should((report) => {
            console.log(JSON.stringify(report, null, 2));
        });
    });

    it("Search Test", () => {
        cy.visit("https://demo.evinced.com/");
        const BASE_FORM_SELECTOR =
            "#gatsby-focus-wrapper > main > div.wrapper-banner > div.filter-container";
        const SELECT_HOME_DROPDOWN = `${BASE_FORM_SELECTOR} > div:nth-child(1) > div > div.dropdown.line`;
        const SELECT_WHERE_DROPDOWN = `${BASE_FORM_SELECTOR} > div:nth-child(2) > div > div.dropdown.line`;
        const TINY_HOME_OPTION = `${BASE_FORM_SELECTOR} > div:nth-child(1) > div > ul > li:nth-child(2)`;
        const EAST_COST_OPTION = `${BASE_FORM_SELECTOR} > div:nth-child(2) > div > ul > li:nth-child(3)`;
        cy.get(SELECT_HOME_DROPDOWN).click();
        cy.get(TINY_HOME_OPTION).click();
        cy.get(SELECT_WHERE_DROPDOWN).click();
        cy.get(EAST_COST_OPTION).click();
    });
});