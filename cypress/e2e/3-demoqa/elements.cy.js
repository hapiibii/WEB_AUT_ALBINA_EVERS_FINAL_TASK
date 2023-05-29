/// <reference types="cypress" />

import PracticePage from "../pageObjects/practice.page";

describe('DemoQA testing HW Scenario1', () => {

    context("CURA making an appointment", () => {

        beforeEach(() => {
    
            //Open https://demoqa.com/automation-practice-form
            PracticePage.visit();
            //cy.visit("/automation-practice-form");

          })

          it("Practice scenario", () => {

            //Input all the necessary information in the text fields, buttons, etc, where it is not stated otherwise

            //input name
            PracticePage.inputName.type("DemoName");
            //input surname
            PracticePage.inputSurname.type("DemoSurname");
            //input email
            PracticePage.inputEmail.type("demo@demo.com");
            //picks female gender
            PracticePage.radioButton.click({force:true});
            //input number
            PracticePage.inputNumber.type("1234567890");
            //click to the date field
            PracticePage.dateOfBirthClick.click();


            //Set the - Date of Birth - with Calendar widget to - 28th of February, 1930
            //pick month
            PracticePage.dobMonth.select("1");
            //pick year
            PracticePage.dobYear.select("1930");
            //pick date
            PracticePage.dobDay.click();

            //Set Subjects to Economics

            PracticePage.subjectPick.type("Ec{enter}");
            
            //

            //Set Hobbies to Music

            PracticePage.hobbyPick.click({force: true});

            //Upload an image of your choice

            PracticePage.uploadPicture.selectFile('cypress/e2e/files/2a471be4043e9703e172fa9ade708bfe.jpg');

            //input current address
            PracticePage.addressInput.type("Demo Address");

            //Set State to NCR

            PracticePage.stateAndCityPick.click({force: true}).type("NCR{enter}");
            //cy.contains("NCR").click({force: true});
            

            //Set City to Delhi

            PracticePage.stateAndCityPick.click({force: true}).type("Delhi{enter}");

            //Click Submit

            PracticePage.submitButton.click({force: true});

            //Validate that each Labeled row contains the correct information

            //VALIDATION

            cy.get('td:contains("Student Name") + td').should('have.text', 'DemoName DemoSurname');

            cy.get('td:contains("Student Email") + td').should('have.text', 'demo@demo.com');

            cy.get('td:contains("Gender") + td').should('have.text', 'Female');

            cy.get('td:contains("Mobile") + td').should('have.text', '1234567890');

            cy.get('td:contains("Date of Birth") + td').should('have.text', '28 February,1930');

            cy.get('td:contains("Subjects") + td').should('have.text', 'Economics');

            cy.get('td:contains("Hobbies") + td').should('have.text', 'Music');

            cy.get('td:contains("Picture") + td').should('have.text', '2a471be4043e9703e172fa9ade708bfe.jpg');

            cy.get('td:contains("Address") + td').should('have.text', 'Demo Address');

            cy.get('td:contains("State and City") + td').should('have.text', 'NCR Delhi');

          });
    
    });
})