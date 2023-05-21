///<reference types="Cypress"/>
Cypress._.times(1, () => {
describe('Automation Demo using Cypress', () => {
   
    before(function () {
        cy.fixture('example').then((data) => {
            globalThis.data = data;

        })

        cy.visit("https://automationdemo.capsulecrm.com/");
    })


    it('To Validate  various CRM Operations', () => {
        cy.get("input[id='login:usernameDecorate:username']").type(globalThis.data.crm_username);
        cy.get("input[type='password']").type(globalThis.data.crm_password);
        cy.get("input[id='login:login']").click();

        cy.get("a[aria-label ='People & Organisations']").click();

        cy.get(".page-header__right :nth-child(3)").click();
        cy.get("[class='form-field '] .select-box:nth-child(2)").click();
       cy.get(".select-box.select.title-select .select__dropdown div:nth-child(2)").click();
        cy.get("[class*='form-first-name']").then((elm) => {


            var currentDateTime = new Date();
            var formattedDateTime = currentDateTime.toLocaleString();
            var firstName = globalThis.data.FirstName;
            var modifiedFirstname = firstName + " " + formattedDateTime;
            console.log(modifiedFirstname);
            globalThis.fullName = modifiedFirstname;
            console.log("Fullname=" + globalThis.fullName);
            cy.wrap(elm).type(modifiedFirstname);
        })

        cy.get("[class*='form-job-title']").type(globalThis.data.JobTitle);
        cy.get("[placeholder='Find an organisation']").type(globalThis.data.Organisation).then(() => {

            cy.get(".select-box__options:nth-child(2)").click();
            // cy.get(".select-box__options.search-select__dropdown [class*='search-select__'] [role='option']").each((el, index, list) => {

            //     if (list.length > 1) {
            //         cy.wrap(el).eq(1).click();
            //     }
            //     else {
            //         cy.wrap(el).eq(0).click();
            //     }
            // })
        });


        cy.get(".filter-select__input-container").type(globalThis.data.Tags);
        cy.get("button[type='submit']").click();

        cy.get(".party-details__title").then((elm) => {

            const text = elm.text();
            expect(text).includes(globalThis.fullName);
        })




        //Test cASE 2
        cy.get("[aria-label='Projects']").click();
        cy.get("[class*='nav-bar-item-add-text']").click();
        cy.get(".select-box__options a:nth-child(4)").click();
        cy.get("[class*='ember-text-field ember-view form-input']").type(globalThis.data.ProjectName);
        cy.get("[placeholder='Find a person or organisation']").then((elm)=>{
           cy.wrap(elm).type(globalThis.fullName);
        })
        cy.get(".search-select__option-party").click();
        cy.get(".ember-text-area.ember-view.form-input-text").type(globalThis.data.Description);
        cy.get(".filter-select__input-container .select-box__input").type(globalThis.data.Tags);
        cy.get("button[type='submit']").click();

        cy.get(".entity-details__title").then((elm)=>{
            const text = elm.text();
            expect(text).includes(globalThis.data.ProjectName);
        })

        cy.get(".kase-summary__status-blob").then((elm)=>{
            const text = elm.text();
            expect(text).includes("Open");
        })

    })


})
})