class AppointmentPage {
    static get url() {
        return "https://katalon-demo-cura.herokuapp.com/";
    }

    static visit() {
        cy.visit(this.url);
    }

    static get appointmentButton() {
        return cy.get("#btn-make-appointment");
    }

    static get usernameField() {
        return cy.get("#txt-username");
    }

    static get passwordField() {
        return cy.get("#txt-password");
    }

    static get loginButton() {
        return cy.get("#btn-login");
    }

    static get facilityList() {
        return cy.get("#combo_facility");
    }

    static get checkBox() {
        return cy.get("[name='hospital_readmission']");
    }

    static get medicaidRadio() {
        return cy.get("[value='Medicaid']");
    }

    static get calendar() {
        return cy.get("[name='visit_date']");
    }

    static get visitDate() {
        return cy.get(".day");
    }

    static get commentField() {
        return cy.get("[name='comment']");
    }

    static get bookAppointmentButton() {
        return cy.get("#btn-book-appointment");
    }

    static get facility() {
        return cy.get("#facility");
    }

    static get readmission() {
        return cy.get("#hospital_readmission");
    }

    static get program() {
        return cy.get("#program");
    }

    static get correctDate() {
        return cy.get("#visit_date");
    }

    static get comment() {
        return cy.get("#comment");
    }

    static get menuButton() {
        return cy.get("#menu-toggle");
    }

    static get sidebarOptions() {
        return cy.get("nav#sidebar-wrapper");
    }

    static get appointmentNotice() {
        return cy.get(".col-sm-12");
    }

}

export default AppointmentPage;