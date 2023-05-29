import BasePage from "./base.page";

class PracticePage extends BasePage {

    static get url() {
        return ("/automation-practice-form");
    }

    static get inputName() {
        return cy.get("#firstName");
    }

    static get inputSurname() {
        return cy.get("#lastName");
    }

    static get inputEmail() {
        return cy.get("#userEmail");
    }

    static get radioButton() {
        return cy.get("#gender-radio-2");
    }

    static get inputNumber() {
        return cy.get("#userNumber");
    }

    static get dateOfBirthClick() {
        return cy.get("#dateOfBirthInput");
    }

    static get dobMonth() {
        return cy.get(".react-datepicker__month-select");
    }

    static get dobYear() {
        return cy.get(".react-datepicker__year-select");
    }

    static get dobDay() {
        return cy.get('[class="react-datepicker__day react-datepicker__day--028"]');
    }

    static get subjectPick() {
        return cy.get("#subjectsInput");
    }

    static get hobbyPick() {
        return cy.get("#hobbies-checkbox-3");
    }

    static get uploadPicture() {
        return cy.get('#uploadPicture');
    }

    static get addressInput() {
        return cy.get("#currentAddress");
    }

    static get submitButton() {
        return cy.get("#submit");
    }

    static get stateAndCityPick() {
        return cy.get('[class=" css-yk16xz-control"]');
    }


}

export default PracticePage;