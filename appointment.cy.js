import AppointmentPage from "./pageObjects/healthObjects.page";

describe("Doctor appointment", () => {
    beforeEach(() => {
        AppointmentPage.visit();
    });

    it("Make an appointment", () => {
        // actions
        AppointmentPage.appointmentButton.click();
        AppointmentPage.usernameField.type("John Doe");
        AppointmentPage.passwordField.type("ThisIsNotAPassword");
        AppointmentPage.loginButton.click();
        AppointmentPage.facilityList.select("Seoul CURA Healthcare Center");
        AppointmentPage.checkBox.check();
        AppointmentPage.medicaidRadio.check();
        AppointmentPage.calendar.click();
        AppointmentPage.visitDate.contains("30").not('.old day').click();
        AppointmentPage.commentField.type("CURA Healthcare Service");
        AppointmentPage.bookAppointmentButton.click();
        // validation
        AppointmentPage.facility.should('have.text', 'Seoul CURA Healthcare Center');
        AppointmentPage.readmission.should('have.text', 'Yes');
        AppointmentPage.program.should('have.text', 'Medicaid');
        AppointmentPage.correctDate.should('contain', '30');
        AppointmentPage.comment.should('have.text', 'CURA Healthcare Service');
    });

    it.only("Appointment history", () => {
        // actions
        AppointmentPage.appointmentButton.click();
        AppointmentPage.usernameField.type("John Doe");
        AppointmentPage.passwordField.type("ThisIsNotAPassword");
        AppointmentPage.loginButton.click();
        AppointmentPage.menuButton.click();
        // validation
        AppointmentPage.sidebarOptions.should('have.class', 'active');
        // action
        AppointmentPage.sidebarOptions.contains("History").click();
        // validation
        AppointmentPage.appointmentNotice.contains("No appointment").should('be.visible');
    });
});