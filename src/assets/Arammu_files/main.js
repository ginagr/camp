(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n\t<app-header></app-header>\n\t<router-outlet></router-outlet>\n</main>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/canyonranch/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/canyonranch/register/register.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!showDetails\">\n\t<h1>\n\t\tCanyon Ranch <> Arammu Register\n\t</h1>\n\t<form [formGroup]=\"registerForm\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12 col-md-6\">\n\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t<div class=\"square\">\n\t\t\t\t\t\tUser 1 Account\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\tFirst Initial\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"firstName\" class=\"form-control\" required>\n\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls.firstName.touched && registerForm.controls.firstName.errors\"\n\t\t\t\t\t\t\t\tclass=\"error\">\n\t\t\t\t\t\t\t\tFirst Initial is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\tMiddle Initial\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"lastName\" class=\"form-control\" required>\n\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls.lastName.touched && registerForm.controls.lastName.errors\"\n\t\t\t\t\t\t\t\tclass=\"error\">\n\t\t\t\t\t\t\t\tMiddle Initial is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\tPassword\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"password\">\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t*ngIf=\"registerForm.controls.password.touched && registerForm.controls.password.errors\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls.password.errors.required\" class=\"error\">Password is\n\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls.password.errors.minlength\" class=\"error\">Password must\n\t\t\t\t\t\t\t\t\tbe\n\t\t\t\t\t\t\t\t\tat\n\t\t\t\t\t\t\t\t\tleast\n\t\t\t\t\t\t\t\t\t6\n\t\t\t\t\t\t\t\t\tcharacters</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\tRetype Password\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\">\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t*ngIf=\"registerForm.controls.confirmPassword.touched && registerForm.controls.confirmPassword.errors\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls.confirmPassword.errors.required\" class=\"error\">Confirm\n\t\t\t\t\t\t\t\t\tpassword is\n\t\t\t\t\t\t\t\t\trequired</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls.confirmPassword.errors.mustMatch\" class=\"error\">\n\t\t\t\t\t\t\t\t\tPasswords must\n\t\t\t\t\t\t\t\t\tmatch\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-6\">\n\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t<div class=\"square\">\n\t\t\t\t\t\tUser 2 Account\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\tFirst Initial\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"partnerFirstName\" class=\"form-control\" required>\n\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls.partnerFirstName.touched && registerForm.controls.partnerFirstName.errors\"\n\t\t\t\t\t\t\t\tclass=\"error\">\n\t\t\t\t\t\t\t\tFirst Initial is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\tMiddle Initial\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"partnerLastName\" class=\"form-control\" required>\n\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls.partnerLastName.touched && registerForm.controls.partnerLastName.errors\"\n\t\t\t\t\t\t\t\tclass=\"error\">\n\t\t\t\t\t\t\t\tMiddle Initial is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\tPassword\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"partnerPassword\">\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t*ngIf=\"registerForm.controls.partnerPassword.touched && registerForm.controls.partnerPassword.errors\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls.partnerPassword.errors.required\" class=\"error\">\n\t\t\t\t\t\t\t\t\tpassword\n\t\t\t\t\t\t\t\t\tis\n\t\t\t\t\t\t\t\t\trequired</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls.partnerPassword.errors.minlength\" class=\"error\">\n\t\t\t\t\t\t\t\t\tpassword\n\t\t\t\t\t\t\t\t\tmust be\n\t\t\t\t\t\t\t\t\tat least 6 characters</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\tRetype Password\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"partnerConfirmPassword\">\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t*ngIf=\"registerForm.controls.partnerConfirmPassword.touched && registerForm.controls.partnerConfirmPassword.errors\">\n\t\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls.partnerConfirmPassword.errors.required\" class=\"error\">\n\t\t\t\t\t\t\t\t\tConfirm\n\t\t\t\t\t\t\t\t\tpassword is\n\t\t\t\t\t\t\t\t\trequired</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"registerForm.controls.partnerConfirmPassword.errors.mustMatch\"\n\t\t\t\t\t\t\t\t\tclass=\"error\">\n\t\t\t\t\t\t\t\t\tPasswords\n\t\t\t\t\t\t\t\t\tmust\n\t\t\t\t\t\t\t\t\tmatch</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<hr>\n\t\t<div class=\"inner\">\n\t\t\t<div class=\"square\">\n\t\t\t\tDetails\n\t\t\t</div>\n\t\t\t<div class=\"form-row\">\n\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t<label>\n\t\t\t\t\t\tLocation of Client\n\t\t\t\t\t</label>\n\t\t\t\t\t<select formControlName=\"location\" class=\"form-control\" required>\n\t\t\t\t\t\t<option value='lenox' selected>Lenox</option>\n\t\t\t\t\t\t<option value='tucson'>Tucson</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<div *ngIf=\"registerForm.controls.location.touched && registerForm.controls.location.errors\"\n\t\t\t\t\t\tclass=\"error\">\n\t\t\t\t\t\tLocation is required\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t<label>\n\t\t\t\t\t\tClinician Assigned\n\t\t\t\t\t</label>\n\t\t\t\t\t<select formControlName=\"clinician\" class=\"form-control\" required>\n\t\t\t\t\t\t<option value='lenox' selected>Lenox Clinician</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<div *ngIf=\"registerForm.controls.clinician.touched && registerForm.controls.clinician.errors\"\n\t\t\t\t\t\tclass=\"error\">\n\t\t\t\t\t\tClinician is required\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-row\">\n\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t<label>\n\t\t\t\t\t\tDate of Appointment\n\t\t\t\t\t</label>\n\t\t\t\t\t<input type=\"date\" formControlName=\"aptDate\" class=\"form-control\" required>\n\t\t\t\t\t<div *ngIf=\"registerForm.controls.aptDate.touched && registerForm.controls.aptDate.errors\"\n\t\t\t\t\t\tclass=\"error\">\n\t\t\t\t\t\tAppointment Date is required\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-check col-md-6\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n\t<hr>\n\t<button type=\"submit\" (click)=\"tryRegister(registerForm.value)\" class=\"btn btn-default square\"\n\t\t[disabled]=\"registerForm.invalid || disableBtn\">\n\t\t{{ btnText }}\n\t</button>\n\t<br>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-4\">\n\t\t\t<p>\n\t\t\t\tAlready have an account?\n\t\t\t\t<a routerLink=\"/canyonranch/login\">\n\t\t\t\t\tLogin\n\t\t\t\t</a>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"container\" *ngIf=\"showDetails\">\n\t<h1>\n\t\tCanyon Ranch <> Arammu Register Details\n\t</h1>\n\t<div class=\"row larger\">\n\t\t<div class=\"col-12 col-md-6\">\n\t\t\t<span class=\"bold\">Name:</span> {{ user1?.firstName }} {{ user1?.lastName }} <br>\n\t\t\t<span class=\"bold\">Unique ID:</span> {{ user1?.email.split('@')[0] }} <br>\n\t\t\t<span class=\"bold\">Password:</span> {{ registerForm.value?.password }} <br>\n\t\t</div>\n\t\t<div class=\"col-12 col-md-6\">\n\t\t\t<span class=\"bold\">Name:</span> {{ user2?.firstName }} {{ user2?.lastName }} <br>\n\t\t\t<span class=\"bold\">Unique ID:</span> {{ user2?.email.split('@')[0] }} <br>\n\t\t\t<span class=\"bold\">Password:</span> {{ registerForm.value?.partnerPassword }} <br>\n\t\t</div>\n\t</div>\n\t<hr>\n\t<div class=\"row larger\">\n\t\t<div class=\"col-4\">\n\t\t\t<span class=\"bold\">Appointment Date:</span> {{ registerForm.value?.aptDate | date: ['M/d/yy'] }}\n\t\t</div>\n\t\t<div class=\"col-4\">\n\t\t\t<span class=\"bold\">Location:</span> {{ registerForm.value?.location | titlecase }}\n\t\t</div>\n\t\t<div class=\"col-4\">\n\t\t\t<span class=\"bold\">Clinician:</span> {{ registerForm.value?.clinician | titlecase }} Clinician\n\t\t</div>\n\t</div>\n\t<hr>\n\t<br>\n\t<button type=\"submit\" (click)=\"reset()\" class=\"btn btn-default square\">\n\t\tBack to Register Page\n\t</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clinician/admin/admin-view-clinician/admin-view-clinician.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clinician/admin/admin-view-clinician/admin-view-clinician.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h3>\n\t\t<span class=\"fa fa-arrow-left\" routerLink=\"/admin-view\"></span>\n\t\t{{ clinician?.firstName + ' ' + clinician?.lastName }}\n\t\t<span class=\"status {{ status }}\">{{ status }} </span>\n\t</h3>\n\t<div *ngIf=\"status == 'active'\">\n\t\t<hr>\n\n\t</div>\n\t<div *ngIf=\"status == 'pending'\">\n\t\t<hr>\n\t\t<!--\n<div class=\"row\">\n<div class=\"col-8\">\n{{ clinician?.firstName + ' ' + clinician?.lastName }} has requested activation.\n</div>\n<div class=\"col-4\">\n<button class=\"actions green\" (click)=\"acceptClinician()\">Accept</button>\n<button class=\"actions red\" data-toggle=\"modal\" data-target=\"#declineModal\">Decline</button>\n</div>\n</div>\n-->\n\n\t\t<p class=\"text-center\">{{ clinician?.firstName + ' ' + clinician?.lastName }} has requested activation.\n\t\t\t<button class=\"actions red\" data-toggle=\"modal\" data-target=\"#declineModal\">Decline</button>\n\t\t\t<button class=\"actions green\" (click)=\"acceptClinician()\">Accept</button>\n\t\t</p>\n\n\t\t<hr>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-4\">\n\t\t\t\t<img class=\"img-fluid rounded\" *ngIf=\"clinician\" src=\"{{ clinician?.picture }}\" alt=\"Bio Img\">\n\t\t\t</div>\n\t\t\t<div class=\"col-8\">\n\t\t\t\t<strong>Email:</strong> {{ clinician?.email }} <br>\n\t\t\t\t<!--\t\t\t\t<strong>Organization:</strong> {{ getOrg(clinician?.organization) }} <br>-->\n\t\t\t\t<strong>Admin Creation Date:</strong>\n\t\t\t\t{{ clinician?.adminTimestampCreated?.seconds * 1000 | date:'mediumDate' }} <br>\n\t\t\t\t<strong>Clinician Creation Date:</strong>\n\t\t\t\t{{ clinician?.timestampCreated?.seconds * 1000 | date:'mediumDate' }} <br>\n\t\t\t\t<strong>Bio:</strong> {{ clinician?.bio?.length > 0 ? clinician?.bio : 'None' }}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"status == 'registered'\">\n\t\t<hr>\n\t\t<p class=\"text-center\">{{ clinician?.firstName + ' ' + clinician?.lastName }} has logged in but hasn't requested\n\t\t\tactivation.</p>\n\t</div>\n\t<div *ngIf=\"status == 'inactive'\">\n\t\t<hr>\n\t\t<p class=\"text-center\">{{ clinician?.firstName + ' ' + clinician?.lastName }} has not logged in yet.</p>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"declineModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"declineModalTitle\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"declineModalTitle\"> Decline\n\t\t\t\t\t{{ clinician?.firstName + ' ' + clinician?.lastName }}? </h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\tNotes:\n\t\t\t\t<textarea class=\"form-control\" placeholder=\"Notes for Clinician\" [(ngModel)]='notes'></textarea>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn\" style=\"width: 100%; margin: 0;\" data-dismiss=\"modal\"\n\t\t\t\t\t[disabled]=\"notes.length < 1\" (click)=\"declineClinician()\">Decline</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"infoModal\" *ngIf=\"showModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"infoModalTitle\"\n\taria-hidden=\"showModal\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"infoModalTitle\"> {{ modalTitle }} </h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"showModal = false\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t{{ modalBody }}\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn\" style=\"width: 75%; margin: 0;\" routerLink=\"/admin-view\"\n\t\t\t\t\tdata-dismiss=\"modal\" (click)=\"showModal = false\">Go To Dashboard</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clinician/admin/admin-view-organization/admin-view-organization.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clinician/admin/admin-view-organization/admin-view-organization.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h3>\n\t\t<span class=\"fa fa-arrow-left\" routerLink=\"/admin-view\"></span>\n\t\t{{ title }}\n\t</h3>\n</div>\n\n\n<div class=\"modal fade\" id=\"infoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"infoModalTitle\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"infoModalTitle\"> {{ modalTitle }} </h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" routerLink=\"/admin-view\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t{{ modalBody }}\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn\" style=\"width: 75%; margin: 0;\" routerLink=\"/admin-view\" data-dismiss=\"modal\">Go To Dashboard</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clinician/admin/admin-view/admin-view.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clinician/admin/admin-view/admin-view.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<h3>\n\t\t<span class=\"fa fa-arrow-left\" routerLink=\"/clinician-dashboard\"></span>\n\t\t{{ title }}\n\t\t<span class=\"choice {{ viewOrg ? '' : 'selected' }}\" (click)=\"viewOrg=false;title='Clinician List (All)'\">\n\t\t\tClinicians\n\t\t</span>\n\t\t<span *ngIf=\"!viewOrg\" class=\"fa fa-plus\" (click)=\"createForms()\" data-toggle=\"modal\"\n\t\t\tdata-target=\"#addClinician\"></span>\n\t\t<span class=\"choice {{ viewOrg ? 'selected' : '' }}\" (click)=\"viewOrg=true;title='Organization List'\">\n\t\t\tOrganizations\n\t\t</span>\n\t\t<span *ngIf=\"viewOrg\" class=\"fa fa-plus\" (click)=\"createForms()\" data-toggle=\"modal\"\n\t\t\tdata-target=\"#addOrganization\"></span>\n\t</h3>\n\t<hr />\n\t<div class=\"row justify-content-between\" style=\"margin-top: 1em;\">\n\t\t<div class=\"col-3\">\n\t\t\t<!--\t\t\t<input class=\"form-control\" placeholder=\"Search...\" type=\"text\"> //TODO -->\n\t\t</div>\n\t\t<div class=\"col-3\">\n\t\t\t<select *ngIf=\"!viewOrg\" class=\"form-control\" #filterClinician (change)=\"filterCli(filterClinician.value)\"\n\t\t\t\tstyle=\"float: right\">\n\t\t\t\t<option selected value='none'>Filter...</option>\n\t\t\t\t<option value='active'>Active</option>\n\t\t\t\t<option value='pending'>Pending</option>\n\t\t\t\t<option value='registered'>Registered</option>\n\t\t\t\t<option value='inactive'>Inactive</option>\n\t\t\t</select>\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"viewOrg\">\n\t\t<div class=\"row title\">\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<h4>\n\t\t\t\t\tOrganization\n\t\t\t\t</h4>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<h4>\n\t\t\t\t\tContact Name\n\t\t\t\t</h4>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<h4>\n\t\t\t\t\tContact Email\n\t\t\t\t</h4>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<h4>\n\t\t\t\t\tEmail Domain\n\t\t\t\t</h4>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngFor=\"let organization of organizations\" [routerLink]=\"['/admin-view-organization', organization.id]\">\n\t\t\t<div class=\"row clinician-row\">\n\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t{{ organization?.name }}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t{{ organization?.contactName }}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t{{ organization?.contactEmail }}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t{{ organization?.email }}\n\t\t\t\t\t<i class=\"fa fa-trash\"\n\t\t\t\t\t\t(click)=\"editOrg(organization); $event.preventDefault(); $event.stopPropagation()\"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"!viewOrg\">\n\t\t<div class=\"row title\">\n\t\t\t<div class=\"col-4\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\tFirst Name\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\tLast Name\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-8\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\tOrganization\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\tStatus\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngFor=\"let clinician of filteredClinicians\" [routerLink]=\"['/admin-view-clinician', clinician.id]\">\n\t\t\t<div\n\t\t\t\tclass=\"row clinician-row {{ clinician?.active ? 'active' : (clinician?.pending ? 'pending' : (clinician?.registered ? 'registered' : 'inactive' ) )}}\">\n\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t\t{{ clinician?.firstName }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t\t{{ clinician?.lastName }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t{{ clinician?.email }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t{{ getOrgName(clinician?.organization) }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t{{ clinician?.active ? 'Active' : (clinician?.pending ? 'Pending' : (clinician?.registered ? 'Registered' : 'Inactive' ) )}}\n\t\t\t\t\t\t\t<i class=\"fa fa-trash\"\n\t\t\t\t\t\t\t\t(click)=\"editCli(clinician); $event.preventDefault(); $event.stopPropagation()\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<a class=\"logout\" (click)=\"authService.doLogout()\" routerLink=\"/home\">\n\t\tLogout\n\t</a>\n</div>\n\n<div class=\"modal fade\" id=\"addClinician\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addClinicianLabel\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"addClinicianLabel\">Add New Clinician</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<form [formGroup]=\"newClinicianForm\">\n\t\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"firstName\" class=\"form-control\" required\n\t\t\t\t\t\t\t\tplaceholder=\"First Name\">\n\t\t\t\t\t\t\t<div *ngIf=\"newClinicianForm.controls.firstName.touched && newClinicianForm.controls.firstName.errors\"\n\t\t\t\t\t\t\t\tclass=\"error\">\n\t\t\t\t\t\t\t\tFirst Name is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"lastName\" class=\"form-control\" required\n\t\t\t\t\t\t\t\tplaceholder=\"Last Name\">\n\t\t\t\t\t\t\t<div *ngIf=\"newClinicianForm.controls.lastName.touched && newClinicianForm.controls.lastName.errors\"\n\t\t\t\t\t\t\t\tclass=\"error\">\n\t\t\t\t\t\t\t\tLast Name is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"email\" formControlName=\"email\" class=\"form-control\" required placeholder=\"Email\">\n\t\t\t\t\t\t<div *ngIf=\"newClinicianForm.controls.email.touched && newClinicianForm.controls.email.errors\">\n\t\t\t\t\t\t\t<div *ngIf=\"newClinicianForm.controls.email.errors.required\" class=\"error\">Email is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"newClinicianForm.controls.email.errors.email\" class=\"error\">Not a valid email\n\t\t\t\t\t\t\t\taddress</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"organization\" required>\n\t\t\t\t\t\t\t<option disabled selected value> Select Organization... </option>\n\t\t\t\t\t\t\t<option *ngFor=\"let o of organizations\" [value]=\"o.id\">\n\t\t\t\t\t\t\t\t{{ o.name }}\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\"\n\t\t\t\t\t\t\tautocomplete=\"password\">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"newClinicianForm.controls.password.touched && newClinicianForm.controls.password.errors\">\n\t\t\t\t\t\t\t<div *ngIf=\"newClinicianForm.controls.password.errors.required\" class=\"error\">Password is\n\t\t\t\t\t\t\t\trequired</div>\n\t\t\t\t\t\t\t<div *ngIf=\"newClinicianForm.controls.password.errors.minlength\" class=\"error\">Password must\n\t\t\t\t\t\t\t\tbe at least 6 characters</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\"\n\t\t\t\t\t\t\tplaceholder=\"Retype Password\" autocomplete=\"password\">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"newClinicianForm.controls.confirmPassword.touched && newClinicianForm.controls.confirmPassword.errors\">\n\t\t\t\t\t\t\t<div *ngIf=\"newClinicianForm.controls.confirmPassword.errors.required\" class=\"error\">Confirm\n\t\t\t\t\t\t\t\tpassword is required</div>\n\t\t\t\t\t\t\t<div *ngIf=\"newClinicianForm.controls.confirmPassword.errors.mustMatch\" class=\"error\">\n\t\t\t\t\t\t\t\tPasswords must match\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t\t<div class=\"form-group col-md-4\">\n\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" formControlName=\"canRefer\"\n\t\t\t\t\t\t\t\t\tid=\"canRefer\">\n\t\t\t\t\t\t\t\t<label for=\"canRefer\">Can Refer?</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group col-md-8\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"referCode\"\n\t\t\t\t\t\t\t\tplaceholder=\"Refer Code (no spaces please)\">\n\t\t\t\t\t\t\t<div *ngIf=\"newClinicianForm.value?.referCode?.split(' ')?.length > 1\" class=\"error\">\n\t\t\t\t\t\t\t\tRefer Code cannot contain spaces\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<!-- TODO: add slug for calendly -->\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"addClinician(newClinicianForm.value)\"\n\t\t\t\t\t[disabled]=\"newClinicianForm.invalid\" data-dismiss=\"modal\">\n\t\t\t\t\tAdd Clinician\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"addOrganization\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addOrganizationLabel\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"addOrganizationLabel\">Add New Organization</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<form [formGroup]=\"newOrganizationForm\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" formControlName=\"name\" class=\"form-control\" required\n\t\t\t\t\t\t\tplaceholder=\"Organization Name\">\n\t\t\t\t\t\t<div *ngIf=\"newOrganizationForm.controls.name.touched && newOrganizationForm.controls.name.errors\"\n\t\t\t\t\t\t\tclass=\"error\">\n\t\t\t\t\t\t\tOrganization Name is required\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"contactName\" class=\"form-control\" required\n\t\t\t\t\t\t\t\tplaceholder=\"Contact Name\">\n\t\t\t\t\t\t\t<div *ngIf=\"newOrganizationForm.controls.contactName.touched && newOrganizationForm.controls.contactName.errors\"\n\t\t\t\t\t\t\t\tclass=\"error\">\n\t\t\t\t\t\t\t\tContact Name is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group col-md-6\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"contactEmail\" class=\"form-control\" required\n\t\t\t\t\t\t\t\tplaceholder=\"Contact Email\">\n\t\t\t\t\t\t\t<div *ngIf=\"newOrganizationForm.controls.contactEmail.touched && newOrganizationForm.controls.contactEmail.errors\"\n\t\t\t\t\t\t\t\tclass=\"error\">\n\t\t\t\t\t\t\t\tContact Email is required\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"email\" formControlName=\"email\" class=\"form-control\" required\n\t\t\t\t\t\t\tplaceholder=\"Email Domain\">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t*ngIf=\"newOrganizationForm.controls.email.touched && newOrganizationForm.controls.email.errors\">\n\t\t\t\t\t\t\t<div *ngIf=\"newOrganizationForm.controls.email.errors.required\" class=\"error\">Contact Email\n\t\t\t\t\t\t\t\tis required</div>\n\t\t\t\t\t\t\t<div *ngIf=\"newOrganizationForm.controls.email.errors.email\" class=\"error\">Not a valid email\n\t\t\t\t\t\t\t\taddress</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"addOrganization(newOrganizationForm.value)\"\n\t\t\t\t\t[disabled]=\"newOrganizationForm.invalid\" data-dismiss=\"modal\">\n\t\t\t\t\tAdd Organization\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"infoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"infoModalTitle\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"infoModalTitle\"> {{ modalTitle }} </h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t{{ modalBody }}\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn\" *ngIf=\"check\" data-dismiss=\"modal\">Cancel</button>\n\t\t\t\t<button type=\"button\" class=\"btn\" *ngIf=\"check && dc\" data-dismiss=\"modal\"\n\t\t\t\t\t(click)=\"deleteClinician()\">Delete</button>\n\t\t\t\t<button type=\"button\" class=\"btn\" *ngIf=\"check && do\" data-dismiss=\"modal\"\n\t\t\t\t\t(click)=\"deleteOrganization()\">Delete</button>\n\t\t\t\t<button type=\"button\" class=\"btn\" *ngIf=\"!check\" data-dismiss=\"modal\">Okay</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clinician/clinician-dashboard/clinician-dashboard.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clinician/clinician-dashboard/clinician-dashboard.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h2 class=\"centered\">\n\t\t{{ companyName }} Clinician Dashboard\n\t\t<button *ngIf=\"admin\" class=\"schedule\" routerLink=\"/admin-view\">\n\t\t\tAdmin View\n\t\t</button>\n\t\t<!-- <button class=\"schedule\" routerLink=\"/clinician-scheduler\">\n\t\t\tScheduler View\n\t\t</button> -->\n\t</h2>\n\t<div *ngIf=\"checkups?.length == 0\">\n\t\t<hr>\n\t\t<h2 class=\"centered mt-4\">\n\t\t\tYou have no {{ company == 'canyonranch' ? 'checkins' : 'checkups' }} at this time\n\t\t</h2>\n\t</div>\n\t<div *ngIf=\"checkups?.length > 0\">\n\t\t<hr>\n\t\t<h3>\n\t\t\tActive Clients\n\t\t</h3>\n\t\t<div class=\"row title parent-table\">\n\t\t\t<div class=\"col-6\"></div>\n\t\t\t<div class=\"col-2\">\n\t\t\t\tQuestionnaire\n\t\t\t</div>\n\t\t\t<div class=\"col-2\">\n\t\t\t\tAppointment\n\t\t\t</div>\n\t\t\t<div class=\"col-2\">\n\t\t\t\tFeedback\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div *ngFor=\"let checkup of checkups\" class=\"row parent-table\">\n\t\t<div class=\"col-6 checkup-box\">\n\t\t\t<div class=\"purp\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t<strong>{{ checkup?.type }} <br>\n\t\t\t\t\t\t\t{{ company == 'canyonranch' ? 'Check In' : 'Checkup' }}</strong>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t{{ checkup?.user }}, <br>\n\t\t\t\t\t\t{{ checkup?.partner }}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-2 hover\" [routerLink]=\"['/view-surveys', checkup.id]\">\n\t\t\t<div class=\"purp\">\n\t\t\t\t{{ checkup?.userSurvey }}, <br>\n\t\t\t\t{{ checkup?.partnerSurvey }}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-2 hover\" [routerLink]=\"['/view-apt', checkup.id]\">\n\t\t\t<div class=\"purp\">\n\t\t\t\t<div *ngIf=\"checkDate(checkup?.appointment)\">\n\t\t\t\t\t{{ checkup?.appointment?.toDate() | date: ['M/d/yy'] : 'UTC' }}\n\t\t\t\t\t<br> COMPLETE\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"!checkDate(checkup?.appointment) && checkup?.appointment && company != 'canyonranch'\">\n\t\t\t\t\t{{ checkup?.appointment?.toDate() | date: ['M/d/yy, h:mm a'] }}\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"!checkDate(checkup?.appointment) && checkup?.appointment && company == 'canyonranch'\">\n\t\t\t\t\t{{ checkup?.appointment?.toDate() | date: ['EEEE, MMMM d, y'] : 'UTC' }}\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"!checkup?.appointment\">\n\t\t\t\t\tNot Scheduled\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-2 hover\">\n\t\t\t<div class=\"purp\" (click)=\"handleFeedback(checkup)\">\n\t\t\t\t{{ checkup?.feedback ? 'Download' : 'Edit' }}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clinician/clinician-feedback-report/clinician-feedback-report.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clinician/clinician-feedback-report/clinician-feedback-report.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Arammu - Clinician Feedback Report HTML -->\n<!-- Written by Grace Antedomenico -->\n<!-- May 2019 - June 2019 -->\n<p class=\"centered\">To save your changes, use your computers keyboard shortcut for 'Save' (<kbd>Ctrl</kbd> +\n\t<kbd>S</kbd> on Windows and <kbd>⌘</kbd> + <kbd>S</kbd> on Macs)</p>\n<div (keydown)=\"onKeyDown($event)\" tabindex=\"0\" class=\"container\" id=\"full-html\"\n\tstyle=\"background-color: white; border-radius: 5px; border: 1px solid lightgrey\">\n\t<section class=\"one\" id=\"header\">\n\t\t<img src=\"./assets/arammu_icon.png\" alt=\"Arammu\">\n\t\t<h1><b>FEEDBACK<br />REPORT</b></h1>\n\t\t<div>\n\t\t\t<h3 class=\"purple\">\n\t\t\t\t<b [(ngModel)]=\"feedbackReport.userName\" contenteditable></b>\n\t\t\t\t+ <br>\n\t\t\t\t<b [(ngModel)]=\"feedbackReport.partnerName\" contenteditable></b>\n\t\t\t</h3>\n\t\t\t<h3>PREPARED BY:<br><b [(ngModel)]=\"checkup.clinicianName\" contenteditable></b></h3>\n\t\t</div>\n\t</section>\n\t<!-- relationship history -->\n\t<section class=\"one\" id=\"relationship_history\">\n\t\t<div class=\"side_img_container\"><img src=\"./assets/relationship_history_icon.png\" alt=\"Relationship History\"\n\t\t\t\tclass=\"side_img\"></div>\n\t\t<p [(ngModel)]=\"checkup.history\" contenteditable></p>\n\t</section>\n\t<!-- top strengths -->\n\t<section class=\"one\">\n\t\t<div class=\"side_img_container\"><img src=\"./assets/top_strengths_icon.png\" alt=\"Top Strengths\" class=\"side_img\">\n\t\t</div>\n\t\t<div class=\"top_wrapper\">\n\t\t\t<span class=\"circle\">1</span>\n\t\t\t<p [(ngModel)]=\"feedbackReport.userFirstStr\" contenteditable></p>\n\t\t\t<div class=\"center_line\"></div>\n\t\t\t<span class=\"circle\">1</span>\n\t\t\t<p [(ngModel)]=\"feedbackReport.partnerFirstStr\" contenteditable></p>\n\t\t\t<span class=\"circle\">2</span>\n\t\t\t<p [(ngModel)]=\"feedbackReport.userSecondStr\" contenteditable></p>\n\t\t\t<span class=\"circle\">2</span>\n\t\t\t<p [(ngModel)]=\"feedbackReport.partnerSecondStr\" contenteditable></p>\n\t\t\t<span class=\"circle\">3</span>\n\t\t\t<p [(ngModel)]=\"feedbackReport.userThirdStr\" contenteditable></p>\n\t\t\t<span class=\"circle\">3</span>\n\t\t\t<p [(ngModel)]=\"feedbackReport.partnerThirdStr\" contenteditable></p>\n\t\t</div>\n\t</section>\n\t<!-- the specific areas of concern... -->\n\t<section class=\"one\" id=\"the_specific\">\n\t\t<div class=\"side_img_container\"></div>\n\t\t<div>\n\t\t\t<p>\n\t\t\t\tThe specific areas of concern that you identified are common stress points for many couples. Although\n\t\t\t\tthese are normal problems that almost all couples struggle with to one degree or another, it can be\n\t\t\t\thelpful to have a deeper understanding of the issues and to consider new ways of approaching them as\n\t\t\t\tthey arise.\n\t\t\t</p>\n\t\t</div>\n\t\t<img src=\"{{ imgNames[0] }}\" alt=\"Group of people putting a puzzle together\">\n\t</section>\n\t<!-- top concerns -->\n\t<section class=\"one\">\n\t\t<div class=\"side_img_container\"><img src=\"./assets/top_concerns_icon.png\" alt=\"Top Concerns\" class=\"side_img\">\n\t\t</div>\n\t\t<div class=\"top_wrapper\">\n\t\t\t<span class=\"circle\">1</span>\n\t\t\t<p [(ngModel)]=\"feedbackReport.userFirstCon\" contenteditable></p>\n\t\t\t<div class=\"center_line\"></div>\n\t\t\t<span class=\"circle\">1</span>\n\t\t\t<p [(ngModel)]=\"feedbackReport.partnerFirstCon\" contenteditable></p>\n\t\t\t<span class=\"circle\">2</span>\n\t\t\t<p [(ngModel)]=\"feedbackReport.userSecondCon\" contenteditable></p>\n\t\t\t<span class=\"circle\">2</span>\n\t\t\t<p [(ngModel)]=\"feedbackReport.partnerSecondCon\" contenteditable></p>\n\t\t\t<span class=\"circle\">3</span>\n\t\t\t<p [(ngModel)]=\"feedbackReport.userThirdCon\" contenteditable></p>\n\t\t\t<span class=\"circle\">3</span>\n\t\t\t<p [(ngModel)]=\"feedbackReport.partnerThirdCon\" contenteditable></p>\n\t\t</div>\n\t</section>\n\t<section class=\"one\" id=\"feedback\">\n\t\t<div class=\"side_img_container\"></div>\n\t\t<h1><b>FEEDBACK</b></h1>\n\t</section>\n\t<section class=\"one\">\n\t\t<div class=\"side_img_container\"><img src=\"./assets/primary_strength.png\" alt=\"Primary Strength\"\n\t\t\t\tclass=\"side_img\"></div>\n\t\t<div id=\"primary_strength\">\n\t\t\t<h2 class=\"purple\"><span [(ngModel)]=\"feedbackReport.userName\" contenteditable></span></h2>\n\t\t\t<div class=\"center_line\"></div>\n\t\t\t<h2 class=\"purple\"><span [(ngModel)]=\"feedbackReport.partnerName\" contenteditable></span></h2>\n\t\t\t<h3 [(ngModel)]=\"feedbackReport.userTopStr\" contenteditable></h3>\n\t\t\t<h3 [(ngModel)]=\"feedbackReport.partnerTopStr\" contenteditable></h3>\n\t\t\t<p [(ngModel)]=\"feedbackReport.userStrParagraph\" contenteditable></p>\n\t\t\t<p [(ngModel)]=\"feedbackReport.partnerStrParagraph\" contenteditable></p>\n\t\t</div>\n\t</section>\n\t<section class=\"one\">\n\t\t<div class=\"side_img_container\"><img src=\"./assets/primary_concern.png\" alt=\"Primary Concern\" class=\"side_img\">\n\t\t</div>\n\t\t<div class=\"primary_concern\">\n\t\t\t<div>\n\t\t\t\t<h2 class=\"left_item purple\"><b [(ngModel)]=\"feedbackReport.userName\" contenteditable></b></h2>\n\t\t\t\t<h2 class=\"right_item purple\" [(ngModel)]=\"feedbackReport.userTopCon\" contenteditable></h2>\n\t\t\t</div>\n\t\t\t<p [(ngModel)]=\"feedbackReport.userConParagraph\" contenteditable></p>\n\t\t</div>\n\t</section>\n\t<div class=\"options_header\">\n\t\t<h1><b>OPTIONS FOR:</b></h1>\n\t\t<h3 class=\"purple\" [(ngModel)]=\"feedbackReport.userTopCon\" contenteditable></h3>\n\t</div>\n\t<section>\n\t\t<div *ngFor=\"let opt of usrOptTitles; let i = index\">\n\t\t\t<div class=\"row\" *ngIf=\"i % 2 == 0\">\n\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t<img class=\"middle\" src=\"{{ imgNames[i+1] }}\" alt=\"{{ i + ' option' }}\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t<h3 [(ngModel)]=\"opt\" contenteditable></h3>\n\t\t\t\t\t<p [(ngModel)]=\"usrOptions[i]\" contenteditable></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\" *ngIf=\"i % 2 == 1\">\n\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t<h3 [(ngModel)]=\"opt\" contenteditable></h3>\n\t\t\t\t\t<p [(ngModel)]=\"usrOptions[i]\" contenteditable></p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t<img class=\"middle\" src=\"{{ imgNames[i+1] }}\" alt=\"{{ i + ' option' }}\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<section class=\"one\">\n\t\t<div class=\"side_img_container\"><img src=\"./assets/primary_concern.png\" alt=\"Primary Concern\" class=\"side_img\">\n\t\t</div>\n\t\t<div class=\"primary_concern\">\n\t\t\t<div>\n\t\t\t\t<h2 class=\"left_item purple\"><b [(ngModel)]=\"feedbackReport.partnerName\" contenteditable></b></h2>\n\t\t\t\t<h2 class=\"right_item purple\" [(ngModel)]=\"feedbackReport.partnerTopCon\" contenteditable></h2>\n\t\t\t</div>\n\t\t\t<p [(ngModel)]=\"feedbackReport.partnerConParagraph\" contenteditable></p>\n\t\t</div>\n\t</section>\n\n\t<div class=\"options_header\">\n\t\t<h1><b>OPTIONS FOR:</b></h1>\n\t\t<h3 class=\"purple\" [(ngModel)]=\"feedbackReport.partnerTopCon\" contenteditable></h3>\n\t</div>\n\t<section>\n\t\t<div *ngFor=\"let opt of partOptTitles; let i = index\">\n\t\t\t<div class=\"row\" *ngIf=\"i % 2 == 0\">\n\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t<img class=\"middle\" src=\"{{ imgNames[i+1] }}\" alt=\"{{ i + ' option' }}\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t<h3 [(ngModel)]=\"opt\" contenteditable></h3>\n\t\t\t\t\t<p [(ngModel)]=\"partOptions[i]\" contenteditable></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\" *ngIf=\"i % 2 == 1\">\n\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t<h3 [(ngModel)]=\"opt\" contenteditable></h3>\n\t\t\t\t\t<p [(ngModel)]=\"partOptions[i]\" contenteditable></p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t<img class=\"middle\" src=\"{{ imgNames[i+1] }}\" alt=\"{{ i + ' option' }}\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<section id=\"conclusion\">\n\t\t<h1><b>CONCLUSION:</b></h1>\n\t\t<p *ngIf=\"checkup?.type == 'professional'\">One of the goals of the Professional Checkup is to help coworkers\n\t\t\ttake advantage of their strengths and their own knowledge of their relationship to figure out how to start\n\t\t\ttaking even better care of the health of their work relationship. In other words, if brushing and flossing\n\t\t\tare the regular things we do to keep our teeth and gums healthy, what are the regular things that you can do\n\t\t\tto keep your relationship healthy? The following are options you generated to actively keep your\n\t\t\trelationship healthy in the future:</p>\n\t\t<p *ngIf=\"checkup?.type != 'professional'\">One of the goals of this proactive approach is to help couples take\n\t\t\tadvantage of their strengths and their own knowledge of their relationship to figure out how to start taking\n\t\t\teven better care of the health of their relationship. In other words, if brushing and flossing are the\n\t\t\tregular things we do to keep our teeth and gums healthy, what are the regular things that you can do to keep\n\t\t\tyour relationship healthy? The following are options you generated to actively keep your relationship\n\t\t\thealthy in the future:</p>\n\t\t<img src=\"{{ imgNames[6] }}\" alt=\"Lightbulb\">\n\t\t<h6><b>Option 1:</b></h6>\n\t\t<h6><b>Option 2:</b></h6>\n\t\t<h6><b>Option 3:</b></h6>\n\t\t<img id=\"bottom_icon\" src=\"./assets/arammu_icon.png\" alt=\"Arammu\">\n\t</section>\n</div>\n<div id=\"snackbar\" class=\"{{ showSnack }}\">{{ savingTxt }}</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clinician/clinician-scheduler/clinician-scheduler.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clinician/clinician-scheduler/clinician-scheduler.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-4 vert-line\">\n\t\t\t<h3>\n\t\t\t\tEdit Availability\n\t\t\t</h3>\n\t\t\t<div class=\"card\">\n\t\t\t\t<h5 class=\"card-header text-center\">\n\t\t\t\t\tAdd New Availability\n\t\t\t\t</h5>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"card-text\">\n\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">\n\t\t\t\t\t\t\t\tAvailability Type:\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" checked id=\"new-recurring\" name=\"new-av-type\" value=\"Recurring\" (change)=\"newAvailability.type='Recurring'\" required>\n\t\t\t\t\t\t\t<label for=\"new-recurring\">\n\t\t\t\t\t\t\t\tRecurring\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" id=\"new-one-time\" name=\"new-av-type\" value=\"One Time\" (change)=\"newAvailability.type='One Time'\" required>\n\t\t\t\t\t\t\t<label for=\"new-one-time\">\n\t\t\t\t\t\t\t\tOne Time\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\" style=\"margin-bottom: .75em;\">\n\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">\n\t\t\t\t\t\t\t\tTime:\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t<div class=\"row\" style=\"margin-top: .7em;\">\n\t\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t\t<select class=\"form-control hour\" #startHour (change)=\"newAvailability.startHour = startHour.value\">\n\t\t\t\t\t\t\t\t\t\t<option disabled selected value> Start Hour </option>\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let hour of hours\" [value]=\"hour\" [selected]=\"hour == newAvailability.startHour\">\n\t\t\t\t\t\t\t\t\t\t\t{{ hour }}\n\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t\t\t\t:\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" #startMin (change)=\"newAvailability.startMin = startMin.value\">\n\t\t\t\t\t\t\t\t\t\t<option disabled selected value> Start Minute </option>\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let min of mins\" [value]=\"min\" [selected]=\"min == newAvailability.startMin\">\n\t\t\t\t\t\t\t\t\t\t\t{{ min }}\n\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" #startDayNight (change)=\"newAvailability.startDayNight = startDayNight.value\">\n\t\t\t\t\t\t\t\t\t\t<option disabled selected value> AM/PM </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"AM\" [selected]=\"newAvailability.startDayNight == 'AM'\">\n\t\t\t\t\t\t\t\t\t\t\tAM\n\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"PM\" [selected]=\"newAvailability.startDayNight == 'PM'\">\n\t\t\t\t\t\t\t\t\t\t\tPM\n\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" #endHour (change)=\"newAvailability.endHour = endHour.value\">\n\t\t\t\t\t\t\t\t\t\t<option disabled selected value> End Hour </option>\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let hour of hours\" [value]=\"hour\" [selected]=\"hour == newAvailability.endHour\">\n\t\t\t\t\t\t\t\t\t\t\t{{ hour }}\n\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t\t\t\t:\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" #endMin (change)=\"newAvailability.endMin = endMin.value\">\n\t\t\t\t\t\t\t\t\t\t<option disabled selected value> End Minute </option>\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let min of mins\" [value]=\"min\" [selected]=\"min == newAvailability.endMin\">\n\t\t\t\t\t\t\t\t\t\t\t{{ min }}\n\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" #endDayNight (change)=\"newAvailability.endDayNight = endDayNight.value\">\n\t\t\t\t\t\t\t\t\t\t<option disabled selected value> AM/PM </option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"AM\" [selected]=\"newAvailability.endDayNight == 'AM'\">\n\t\t\t\t\t\t\t\t\t\t\tAM\n\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"PM\" [selected]=\"newAvailability.endDayNight == 'PM'\">\n\t\t\t\t\t\t\t\t\t\t\tPM\n\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"newAvailability.type == 'One Time'\">\n\t\t\t\t\t\t<h5 class=\"card-title\">\n\t\t\t\t\t\t\tDate:\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"newAvailability.type == 'Recurring'\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<h5 class=\"card-title\">\n\t\t\t\t\t\t\t\t\tDays of the Week:\n\t\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"monday\" name=\"monday\" [checked]=\"newAvailability.monday\"(change)=\"newAvailability.monday = !newAvailability.monday\">\n\t\t\t\t\t\t\t\t\t<label for=\"monday\">\n\t\t\t\t\t\t\t\t\t\tMonday\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"tuesday\" name=\"tuesday\" [checked]=\"newAvailability.tuesday\"(change)=\"newAvailability.tuesday = !newAvailability.tuesday\">\n\t\t\t\t\t\t\t\t\t<label for=\"tuesday\">\n\t\t\t\t\t\t\t\t\t\tTuesday\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"wednesday\" name=\"wednesday\" [checked]=\"newAvailability.wednesday\"(change)=\"newAvailability.wednesday = !newAvailability.wednesday\">\n\t\t\t\t\t\t\t\t\t<label for=\"wednesday\">\n\t\t\t\t\t\t\t\t\t\tWednesday\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"thursday\" name=\"thursday\" [checked]=\"newAvailability.thursday\"(change)=\"newAvailability.thursday = !newAvailability.thursday\">\n\t\t\t\t\t\t\t\t\t<label for=\"thursday\">\n\t\t\t\t\t\t\t\t\t\tThursday\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"friday\" name=\"friday\" [checked]=\"newAvailability.friday\"(change)=\"newAvailability.friday = !newAvailability.friday\">\n\t\t\t\t\t\t\t\t\t<label for=\"friday\">\n\t\t\t\t\t\t\t\t\t\tFriday\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"saturday\" name=\"saturday\" [checked]=\"newAvailability.saturday\"(change)=\"newAvailability.saturday = !newAvailability.saturday\">\n\t\t\t\t\t\t\t\t\t<label for=\"saturday\">\n\t\t\t\t\t\t\t\t\t\tSaturday\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-check\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"sunday\" name=\"sunday\" [checked]=\"newAvailability.sunday\"(change)=\"newAvailability.sunday = !newAvailability.sunday\">\n\t\t\t\t\t\t\t\t\t<label for=\"sunday\">\n\t\t\t\t\t\t\t\t\t\tSunday\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<div class=\"row text-center\">\n\t\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t\t<button class=\"btn clear\">\n\t\t\t\t\t\t\t\tClear\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t\t<button class=\"btn\">\n\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-8\">\n\t\t\t<h3>\n\t\t\t\tCurrent Availability\n\t\t\t</h3>\n\t\t\t{{ newAvailability | json }}\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clinician/clinician-view-apt/clinician-view-apt.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clinician/clinician-view-apt/clinician-view-apt.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>\n\t\t<span class=\"fa fa-arrow-left\" routerLink=\"/clinician-dashboard\"></span>\n\t\t<span class=\"type\">{{ checkup?.type | titlecase }} Checkup:</span> {{ user1?.firstName }} {{ user1?.lastName }}\n\t\t+ {{ user2?.firstName }} {{ user2?.lastName }}\n\t</h1>\n\t<section>\n\t\t<h2>Relationship History</h2>\n\t\t<form [formGroup]=\"historyForm\" *ngIf=\"historyForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"session-date\">Session Date</label>\n\t\t\t\t<input type=\"date\" class=\"form-control\" [value]=\"historyForm?.value?.date\" disabled>\n\t\t\t\t<!-- <input type=\"date\" class=\"form-control\" id=\"session-date\" aria-describedby=\"session-date\" -->\n\t\t\t\t<!-- placeholder=\"Date of Session\" formControlName=\"date\"> -->\n\t\t\t\t<!-- <div *ngIf=\"historyForm.controls.date.touched && historyForm.controls.date.errors\" class=\"error\">\n\t\t\t\t\tSession Date is required\n\t\t\t\t</div> -->\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"clinician-name\">Clinician Name</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"clinician-name\" placeholder=\"Clinician Name\"\n\t\t\t\t\tformControlName=\"clinician\">\n\t\t\t\t<div *ngIf=\"historyForm.controls.clinician.touched && historyForm.controls.clinician.errors\"\n\t\t\t\t\tclass=\"error\">\n\t\t\t\t\tClinician Name is required\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"relationship-history\">Relationship History</label>\n\t\t\t\t<textarea class=\"form-control\" id=\"relationship-history\" rows=\"2\" placeholder=\"Relationship History\"\n\t\t\t\t\tformControlName=\"history\"></textarea>\n\t\t\t\t<div *ngIf=\"historyForm.controls.history.touched && historyForm.controls.history.errors\" class=\"error\">\n\t\t\t\t\tRelationship History is required\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"relationship-history\">Clinician Notes <span class=\"optional\">- Optional</span></label>\n\t\t\t\t<textarea class=\"form-control\" id=\"relationship-history\" rows=\"2\" formControlName=\"notes\"\n\t\t\t\t\tplaceholder=\"Anything of significance that you want to include in the Feedback Report\"></textarea>\n\t\t\t</div>\n\t\t\t<button type=\"submit\" (click)=\"saveData();\" class=\"btn btn-primary\">Save Relationship\n\t\t\t\tHistory</button>\n\t\t</form>\n\t</section>\n\t<hr>\n\t<section>\n\t\t<h2>Relationship Strengths and Concerns</h2>\n\t\t<form [formGroup]=\"topForm\" *ngIf=\"topForm\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-12 col-md-6\">\n\t\t\t\t\t<h3><span class=\"purple bold\">{{ user1?.firstName }}</span> Top Three\n\t\t\t\t\t\t<span class=\"purple bold\">Strengths</span>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<div class=\"top\">\n\t\t\t\t\t\t<span class=\"number\">1</span>\n\t\t\t\t\t\t<span\n\t\t\t\t\t\t\tclass=\"bold\">{{ user1Survey?.results?.tops?.firstStrength?.txt || 'Survey Not Complete' }}</span><br>\n\t\t\t\t\t\t<span class=\"number\">2</span>\n\t\t\t\t\t\t<span\n\t\t\t\t\t\t\tclass=\"bold\">{{ user1Survey?.results?.tops?.secondStrength?.txt || 'Survey Not Complete' }}</span><br>\n\t\t\t\t\t\t<span class=\"number\">3</span>\n\t\t\t\t\t\t<span\n\t\t\t\t\t\t\tclass=\"bold\">{{ user1Survey?.results?.tops?.thirdStrength?.txt || 'Survey Not Complete' }}</span><br>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12 col-md-6\">\n\t\t\t\t\t<h3><span class=\"purple bold\">{{ user1?.firstName }}</span> Top Three\n\t\t\t\t\t\t<span class=\"purple bold\">Concerns</span>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<div class=\"top\">\n\t\t\t\t\t\t<span class=\"number\">1</span>\n\t\t\t\t\t\t<span class=\"bold\">{{ user1Survey?.results?.tops?.firstConcern?.txt || 'Survey Not Complete' }}</span><br>\n\t\t\t\t\t\t<span class=\"number\">2</span>\n\t\t\t\t\t\t<span\n\t\t\t\t\t\t\tclass=\"bold\">{{ user1Survey?.results?.tops?.secondConcern?.txt || 'Survey Not Complete' }}</span><br>\n\t\t\t\t\t\t<span class=\"number\">3</span>\n\t\t\t\t\t\t<span class=\"bold\">{{ user1Survey?.results?.tops?.thirdConcern?.txt || 'Survey Not Complete' }}</span><br>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-12 col-md-6\">\n\t\t\t\t\t<div class=\"form-group bottom\">\n\t\t\t\t\t\t<label for=\"user1-top-str\">\n\t\t\t\t\t\t\t<h3><span class=\"purple bold\">{{ user1?.firstName }}'s</span> Primary\n\t\t\t\t\t\t\t\t<span class=\"purple bold\">Strength</span></h3>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<select class=\"form-control\" id=\"user1-top-str\" required formControlName=\"user1-top-str\">\n\t\t\t\t\t\t\t<option disabled selected value> Select Top Strength... </option>\n\t\t\t\t\t\t\t<option *ngFor=\"let str of options?.strengths\" [value]=\"str\">\n\t\t\t\t\t\t\t\t{{ str }}\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12 col-md-6\">\n\t\t\t\t\t<div class=\"form-group bottom\">\n\t\t\t\t\t\t<label for=\"user1-top-con\">\n\t\t\t\t\t\t\t<h3><span class=\"purple bold\">{{ user1?.firstName }}'s</span> Primary\n\t\t\t\t\t\t\t\t<span class=\"purple bold\">Concern</span></h3>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<select class=\"form-control\" id=\"user1-top-con\" required formControlName=\"user1-top-con\">\n\t\t\t\t\t\t\t<option disabled selected value> Select Top Concern... </option>\n\t\t\t\t\t\t\t<option *ngFor=\"let con of options?.concerns\" [value]=\"con\">\n\t\t\t\t\t\t\t\t{{ con }}\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-12 col-md-6\">\n\t\t\t\t\t<h3><span class=\"purple bold\">{{ user2?.firstName }}</span> Top Three\n\t\t\t\t\t\t<span class=\"purple bold\">Strengths</span>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<div class=\"top\">\n\t\t\t\t\t\t<span class=\"number\">1</span>\n\t\t\t\t\t\t<span\n\t\t\t\t\t\t\tclass=\"bold\">{{ user2Survey?.results?.tops?.firstStrength?.txt || 'Survey Not Complete' }}</span><br>\n\t\t\t\t\t\t<span class=\"number\">2</span>\n\t\t\t\t\t\t<span\n\t\t\t\t\t\t\tclass=\"bold\">{{ user2Survey?.results?.tops?.secondStrength?.txt || 'Survey Not Complete' }}</span><br>\n\t\t\t\t\t\t<span class=\"number\">3</span>\n\t\t\t\t\t\t<span\n\t\t\t\t\t\t\tclass=\"bold\">{{ user2Survey?.results?.tops?.thirdStrength?.txt || 'Survey Not Complete' }}</span><br>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12 col-md-6\">\n\t\t\t\t\t<h3><span class=\"purple bold\">{{ user2?.firstName }}</span> Top Three\n\t\t\t\t\t\t<span class=\"purple bold\">Concerns</span>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<div class=\"top\">\n\t\t\t\t\t\t<span class=\"number\">1</span>\n\t\t\t\t\t\t<span class=\"bold\">{{ user2Survey?.results?.tops?.firstConcern?.txt || 'Survey Not Complete' }}</span><br>\n\t\t\t\t\t\t<span class=\"number\">2</span>\n\t\t\t\t\t\t<span\n\t\t\t\t\t\t\tclass=\"bold\">{{ user2Survey?.results?.tops?.secondConcern?.txt || 'Survey Not Complete' }}</span><br>\n\t\t\t\t\t\t<span class=\"number\">3</span>\n\t\t\t\t\t\t<span class=\"bold\">{{ user2Survey?.results?.tops?.thirdConcern?.txt || 'Survey Not Complete' }}</span><br>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-12 col-md-6\">\n\t\t\t\t\t<div class=\"form-group bottom\">\n\t\t\t\t\t\t<label for=\"user2-top-str\">\n\t\t\t\t\t\t\t<h3><span class=\"purple bold\">{{ user2?.firstName }}'s</span> Primary\n\t\t\t\t\t\t\t\t<span class=\"purple bold\">Strength</span></h3>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<select class=\"form-control\" id=\"user2-top-str\" required formControlName=\"user2-top-str\">\n\t\t\t\t\t\t\t<option disabled selected value> Select Top Strength... </option>\n\t\t\t\t\t\t\t<option *ngFor=\"let str of options?.strengths\" [value]=\"str\">\n\t\t\t\t\t\t\t\t{{ str }}\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-12 col-md-6\">\n\t\t\t\t\t<div class=\"form-group bottom\">\n\t\t\t\t\t\t<label for=\"user2-top-con\">\n\t\t\t\t\t\t\t<h3><span class=\"purple bold\">{{ user2?.firstName }}'s</span> Primary\n\t\t\t\t\t\t\t\t<span class=\"purple bold\">Concern</span></h3>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<select class=\"form-control\" id=\"user2-top-con\" required formControlName=\"user2-top-con\">\n\t\t\t\t\t\t\t<option disabled selected value> Select Top Concern... </option>\n\t\t\t\t\t\t\t<option *ngFor=\"let con of options?.concerns\" [value]=\"con\">\n\t\t\t\t\t\t\t\t{{ con }}\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<button class=\"btn btn-primary\" type=\"submit\" (click)=\"saveData()\">Save Primary Strengths &amp;\n\t\t\t\tConcerns</button>\n\t\t</form>\n\t</section>\n</div>\n\n<div class=\"modal fade\" id=\"infoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"infoModalTitle\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"infoModalTitle\"> {{ modalTitle }} </h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" routerLink=\"/admin-view\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t{{ modalBody }}\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn\" style=\"width: 75%; margin: 0;\" data-dismiss=\"modal\">Okay</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/clinician/clinician-view-surveys/clinician-view-surveys.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/clinician/clinician-view-surveys/clinician-view-surveys.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h2>\n\t\t<span class=\"fa fa-arrow-left\" routerLink=\"/clinician-dashboard\"></span>\n\t\t{{ checkup?.type | titlecase }} Checkup Questionnaires\n\t</h2>\n\t<div class=\"table-responsive-xl\">\n\t\t<table class=\"table table-sm table-hover\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th scope=\"col\" class=\"title\">Top</th>\n\t\t\t\t\t<th scope=\"col\" class=\"title\">{{ user1?.firstName }} {{ user1?.lastName }}</th>\n\t\t\t\t\t<th scope=\"col\" class=\"title\">{{ user2?.firstName }} {{ user2?.lastName }}</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<th scope=\"row\" style=\"width: 10%\">Strength #1</th>\n\t\t\t\t\t<td style=\"width: 45%\">{{ user1Results?.results?.tops?.firstStrength?.txt }}</td>\n\t\t\t\t\t<td style=\"width: 45%\">{{ user2Results?.results?.tops?.firstStrength?.txt }}</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<th scope=\"row\" style=\"width: 10%\">Strength #2</th>\n\t\t\t\t\t<td style=\"width: 45%\">{{ user1Results?.results?.tops?.secondStrength?.txt }}</td>\n\t\t\t\t\t<td style=\"width: 45%\">{{ user2Results?.results?.tops?.secondStrength?.txt }}</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<th scope=\"row\" style=\"width: 10%\">Strength #3</th>\n\t\t\t\t\t<td style=\"width: 45%\">{{ user1Results?.results?.tops?.thirdStrength?.txt }}</td>\n\t\t\t\t\t<td style=\"width: 45%\">{{ user2Results?.results?.tops?.thirdStrength?.txt }}</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<th scope=\"row\" style=\"width: 10%\">Concern #1</th>\n\t\t\t\t\t<td style=\"width: 45%\">{{ user1Results?.results?.tops?.firstConcern?.txt }}</td>\n\t\t\t\t\t<td style=\"width: 45%\">{{ user2Results?.results?.tops?.firstConcern?.txt }}</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<th scope=\"row\" style=\"width: 10%\">Concern #2</th>\n\t\t\t\t\t<td style=\"width: 45%\">{{ user1Results?.results?.tops?.secondConcern?.txt }}</td>\n\t\t\t\t\t<td style=\"width: 45%\">{{ user2Results?.results?.tops?.secondConcern?.txt }}</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<th scope=\"row\" style=\"width: 10%\">Concern #3</th>\n\t\t\t\t\t<td style=\"width: 45%\">{{ user1Results?.results?.tops?.thirdConcern?.txt }}</td>\n\t\t\t\t\t<td style=\"width: 45%\">{{ user2Results?.results?.tops?.thirdConcern?.txt }}</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t\t<table class=\"table table-sm table-hover\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th scope=\"col\" class=\"title\">Strengths</th>\n\t\t\t\t\t<th scope=\"col\" class=\"title\">{{ user1?.firstName }} {{ user1?.lastName }}</th>\n\t\t\t\t\t<th scope=\"col\" class=\"title\">{{ user2?.firstName }} {{ user2?.lastName }}</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let res of allStrengths\">\n\t\t\t\t\t<th scope=\"row\" style=\"width: 70%\">{{ res?.des }}</th>\n\t\t\t\t\t<td style=\"width: 15%\"> {{ res?.user1 }}</td>\n\t\t\t\t\t<td style=\"width: 15%\">{{ res?.user2 }}</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t\t<table class=\"table table-sm table-hover\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th scope=\"col\" class=\"title\">Concerns</th>\n\t\t\t\t\t<th scope=\"col\" class=\"title\">{{ user1?.firstName }} {{ user1?.lastName }}</th>\n\t\t\t\t\t<th scope=\"col\" class=\"title\">{{ user2?.firstName }} {{ user2?.lastName }}</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let res of allConcerns\">\n\t\t\t\t\t<th scope=\"row\" style=\"width: 70%\">{{ res?.des }}</th>\n\t\t\t\t\t<td style=\"width: 15%\"> {{ res?.user1 }}</td>\n\t\t\t\t\t<td style=\"width: 15%\">{{ res?.user2 }}</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/modal-action/modal-action.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/modal-action/modal-action.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\" ngbAutofocus>\n\t<h4 class=\"modal-title\">{{ modalTitle }}</h4>\n\t<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('cancel')\">\n\t\t<span aria-hidden=\"true\">&times;</span>\n\t</button>\n</div>\n<div class=\"modal-body\">\n\t<p>{{ modalContent }}</p>\n</div>\n<div class=\"modal-footer\">\n\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.close('cancel')\">{{ cancelText }}</button>\n\t<button type=\"button\" class=\"btn\" (click)=\"activeModal.close('ok')\">{{ actionText }}</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/front-facing/arammu-consultants/arammu-consultants.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/front-facing/arammu-consultants/arammu-consultants.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>\n\t\tArammu Consultants\n\t</h1>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/front-facing/blog/blog.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/front-facing/blog/blog.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>\n\t\tBlog\n\t</h1>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/front-facing/footer/footer.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/front-facing/footer/footer.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer *ngIf=\"feedback\">\n\t<div class=\"container\">\n\t\t<div class=\"row text-center small\">\n\t\t\t<div class=\"col-12 col-md-4\">\n\t\t\t\t<a routerLink=\"/what-we-do\">\n\t\t\t\t\t<h5>\n\t\t\t\t\t\tAbout\n\t\t\t\t\t</h5>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-4\">\n\t\t\t\t<a routerLink=\"/who-we-are\">\n\t\t\t\t\t<h5>\n\t\t\t\t\t\tContact\n\t\t\t\t\t</h5>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-4\">\n\t\t\t\t<a routerLink=\"/terms\">\n\t\t\t\t\t<h5>\n\t\t\t\t\t\tTerms\n\t\t\t\t\t</h5>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<hr>\n\t\t<div class=\"row\" style=\"margin-top: 1%\">\n\t\t\t<div class=\"col-12 text-center\">\n\t\t\t\t<h3 (click)=\"authService.doLogout()\">\n\t\t\t\t\tArammu, LLC.\n\t\t\t\t</h3>\n\t\t\t\t<h4>\n\t\t\t\t\t48 Cedar Street\n\t\t\t\t\t<br>\n\t\t\t\t\tWorcester, MA 01609\n\t\t\t\t</h4>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/front-facing/for-businesses/for-businesses.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/front-facing/for-businesses/for-businesses.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>\n\t\tFor Businesses\n\t</h1>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/front-facing/for-couples/for-couples.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/front-facing/for-couples/for-couples.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered\">\n\t<div id=\"carouselControls\" class=\"carousel slide lazy carousel-fade sCarousel\" data-ride=\"carousel\">\n\t\t<div class=\"carousel-inner\" role=\"listbox\">\n\t\t\t<div *ngFor=\"let slide of slides; let i = index; let first = first\" class=\"carousel-item\"\n\t\t\t\t[class.active]=\"first\">\n\t\t\t\t<img class=\"d-block w-100 top-img\" [src]=\"slide\" alt=\"Loading image...\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t\t<h2 class=\"subtitle\">\n\t\t\t\t\t\t\tFor\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<h1 class=\"title\">\n\t\t\t\t\t\t\tCouples\n\t\t\t\t\t\t</h1>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"container\">\n\t\t\t<h2 class=\"sec-title\">Health and Strength for Ourselves,\n\t\t\t\tfor Each Other, and for Our Children </h2>\n\t\t\t<p class=\"c-text\">\n\t\t\t\tVibrant relationships are like any other health system: they require regular attention and care. The\n\t\t\t\tRelationship Checkup™ brings partners closer together and keeps relationships strong and healthy for\n\t\t\t\tlife.\n\t\t\t\t<br />\n\t\t\t\t<br />\n\t\t\t\tThe Relationship Checkup™ is available for all couples. At Arammu, we are committed to the value of\n\t\t\t\tinclusivity.\n\t\t\t\tOur mission is to serve all relationships and all communities.\n\t\t\t</p>\n\t\t\t<span class=\"quote\">“</span>\n\t\t\t<p class=\"purp-text\">\n\t\t\t\t“Now is where love breathes.” - Rumi\n\t\t\t</p>\n\t\t\t<p class=\"c-text\">\n\t\t\t\tSign up for your Relationship Checkup™ now.\n\t\t\t</p>\n\t\t\t<button class=\"sign-up\" routerLink=\"/register\">\n\t\t\t\tSign Up\n\t\t\t</button>\n\t\t\t<hr>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/front-facing/header/header.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/front-facing/header/header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"feedback\" class=\"navbar navbar-expand-lg navbar-dark {{ header }}\">\n\t<a class=\"navbar-brand\" routerLink=\"/home\">\n\t\t<img class=\"img-responsive\" src=\"./assets/logo.png\">\n\t</a>\n\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\"\n\t\taria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\t\t<span class=\"navbar-toggler-icon\"></span>\n\t</button>\n\t<div *ngIf=\"authService?.userName?.length < 1\" class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n\t\t<ul class=\"navbar-nav ml-auto\">\n\t\t\t<li class=\"nav-item dropdown\">\n\t\t\t\t<a class=\"nav-link dropdown-toggle\" id=\"whatWeDoLink\" role=\"button\" data-toggle=\"dropdown\"\n\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\tWhat We Do\n\t\t\t\t</a>\n\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"whatWeDoLink\">\n\t\t\t\t\t<a class=\"dropdown-item\" routerLink=\"/what-we-do\">\n\t\t\t\t\t\tWhat We Do\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"dropdown-item\" routerLink=\"/for-businesses\">\n\t\t\t\t\t\tFor Businesses\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"dropdown-item\" routerLink=\"/for-couples\">\n\t\t\t\t\t\tFor Couples\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/research\">\n\t\t\t\t\tResearch\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item dropdown\">\n\t\t\t\t<a class=\"nav-link dropdown-toggle\" id=\"whoWeAreLink\" role=\"button\" data-toggle=\"dropdown\"\n\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\tWho we are\n\t\t\t\t</a>\n\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"whoWeAreLink\">\n\t\t\t\t\t<a class=\"dropdown-item\" routerLink=\"/who-we-are\">\n\t\t\t\t\t\tMeet the Team\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"dropdown-item\" routerLink=\"/arammu-consultants\">\n\t\t\t\t\t\tArammu Consultants\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/blog\">\n\t\t\t\t\tBlog\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/login\">\n\t\t\t\t\tLogin\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<div *ngIf=\"authService?.userName?.length > 0\" class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n\t\t<ul class=\"navbar-nav ml-auto\">\n\t\t\t<li class=\"nav-item dropdown\">\n\t\t\t\t<a class=\"nav-link dropdown-toggle\" id=\"welcomeLink\" role=\"button\" data-toggle=\"dropdown\"\n\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\tWelcome {{ authService?.userName }}\n\t\t\t\t</a>\n\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"welcomeLink\">\n\t\t\t\t\t<a class=\"dropdown-item\" routerLink=\"/login\">\n\t\t\t\t\t\tDashboard\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"dropdown-item\" routerLink=\"/change-password\">\n\t\t\t\t\t\tChange Password\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class=\"dropdown-item\" (click)=\"authService.doLogout()\">\n\t\t\t\t\t\tLogout\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/front-facing/home/home.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/front-facing/home/home.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered\">\n\t<div id=\"carouselControls\" class=\"carousel slide lazy carousel-fade sCarousel\" data-ride=\"carousel\">\n\t\t<div class=\"carousel-inner\" role=\"listbox\">\n\t\t\t<div *ngFor=\"let slide of slides; let i = index; let first = first\" class=\"carousel-item\"\n\t\t\t\t[class.active]=\"first\">\n\t\t\t\t<img class=\"d-block w-100 top-img\" [src]=\"slide\" alt=\"Loading image...\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t\t<h1 class='title'>\n\t\t\t\t\t\t\tArammu\n\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t<h2 class='subtitle'>\n\t\t\t\t\t\t\tThe Proactive Relationship Checkup&trade;\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<button class='sign-up' routerLink=\"/register\">\n\t\t\t\t\t\t\tSign Up\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='container'>\n\t\t\t<h2 class='sec-title'>Arammu: The Relationship Checkup&trade; </h2>\n\t\t\t<p class='c-text'>\n\t\t\t\tArammu: The Relationship Checkup&trade; is a proactive approach to improving and sustaining the health\n\t\t\t\tof our personal and professional relationships. The effectiveness of the Checkup is supported by 20\n\t\t\t\tyears of federally-funded research and offers coworkers and couples a fun, annual option for learning\n\t\t\t\tabout what makes their relationship tick, what their most significant strengths are, and how to address\n\t\t\t\tcommon communication and relationship concerns. The Checkup helps us to tap into what is best about our\n\t\t\t\trelationships, increase the quality of our relationship insight, and learn to move with grace,\n\t\t\t\tcreativity, and humor in our most important relationships.\n\t\t\t</p>\n\t\t\t<hr>\n\t\t\t<span class='quote'></span>\n\t\t\t<!-- <span class='quote'>“</span> -->\n\t\t\t<p class='purp-text'>\n\t\t\t\tThe name “Arammu” is ancient Sumerian for love. Sumerian is thought to be the first written language, so\n\t\t\t\tArammu is the very first known word for love. Love has existed before even the creation of words, so we\n\t\t\t\tchose this ancient language to represent what has always been true, what is eternal, and what transcends\n\t\t\t\teven the bounds of communication. Love and Work are the vibrancy of our lives, the places where we find\n\t\t\t\tmeaning and connection. It is in these relationships that we discover our best selves. The health of our\n\t\t\t\trelationships is the health of our lives. Research has clearly shown that healthy relationships are the\n\t\t\t\tkey to happiness, creativity and well-being, and that regular checkups are a powerful tool for\n\t\t\t\tmaintaining vibrant health. Love what matters.\n\t\t\t</p>\n\t\t\t<span class='quote'></span>\n\t\t\t<!-- <span class='quote'>”</span> -->\n\t\t\t<hr>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/front-facing/research/research.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/front-facing/research/research.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered\">\n\t<div id=\"carouselControls\" class=\"carousel slide lazy carousel-fade sCarousel\" data-ride=\"carousel\">\n\t\t<div class=\"carousel-inner\" role=\"listbox\">\n\t\t\t<div *ngFor=\"let slide of slides; let i = index; let first = first\" class=\"carousel-item\"\n\t\t\t\t[class.active]=\"first\">\n\t\t\t\t<img class=\"d-block w-100 top-img\" [src]=\"slide\" alt=\"Loading image...\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t\t<h1 class=\"title\">\n\t\t\t\t\t\t\tResearch\n\t\t\t\t\t\t</h1>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"container\">\n\t\t\t<h2 class=\"sec-title\">\n\t\t\t\tArammu: The Relationship Checkup™\n\t\t\t</h2>\n\t\t\t<p class=\"c-text\">\n\t\t\t\tThe Relationship Checkup™ is based on <strong>20 years of federally funded clinical research</strong>\n\t\t\t\tguiding it towards our goal of successfully intervening early in relationships to give couples tools and\n\t\t\t\ttechniques to help prevent deterioration and manage their stressors in a healthy way, together.\n\t\t\t\tRandomized clinical trials have demonstrated the efficacy of the Checkup for improving relationship\n\t\t\t\thealth, reducing depressive symptoms, and diminishing the incidence of divorce.\n\t\t\t</p>\n\t\t\t<hr>\n\t\t\t<div class=\"left\">\n\t\t\t\t<h3 class=\"text-color\">\n\t\t\t\t\tBOOKS\n\t\t\t\t</h3>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<ul class=\"col-8\">\n\t\t\t\t\t\t<li *ngFor=\"let book of books\" class=\"d-text\">\n\t\t\t\t\t\t\t<a href=\"{{ book.link }}\"> {{ book.title }}</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"d-flex col-4\">\n\t\t\t\t\t\t<div *ngFor=\"let book of books\">\n\t\t\t\t\t\t\t<a href=\"{{ book.link }}\"><img class=\"p-2 thumbnail\" [src]=\"book.image\"></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<h3 class=\"col-8 text-color\">\n\t\t\t\t\t\tRelationship Checkup papers\n\t\t\t\t\t</h3>\n\t\t\t\t\t<h3 class=\"col-4 text-color\">\n\t\t\t\t\t\tIn The Media\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<ul class=\"col-8 text-color\">\n\t\t\t\t\t\t<li *ngFor=\"let paper of papers\" class=\"d-text\">\n\t\t\t\t\t\t\t<a href=\"{{ paper.link }}\">{{ paper.title }}</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class=\"col-4\">\n\t\t\t\t\t\t<div *ngFor=\"let media of medias\" class=\"d-text\">\n\t\t\t\t\t\t\t<a href=\"{{ media.link }}\">{{ media.title }}</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/front-facing/terms/terms.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/front-facing/terms/terms.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>Consent to Treat Terms and Conditions</h1>\n\t<hr>\n\t<h2>What is Arammu: The Relationship Checkup</h2>\n\t<p>\n\t\tArammu: The Relationship Checkup is a proactive approach to improving and sustaining the health of our personal\n\t\tand professional relationships. The effectiveness of the Checkup is supported by 20 years of federally-funded\n\t\tresearch and offers coworkers and couples a fun, annual option for learning about what makes their relationship\n\t\ttick, what their most significant strengths are, and how to address common communication and relationship\n\t\tconcerns. The Checkup helps us to tap into what is best about our relationships, increase the quality of our\n\t\trelationship insight, and learn to move with grace, creativity, and humor in our most important relationships.\n\t</p>\n\t<h2>Procedures</h2>\n\t<p>\n\t\tThe Relationship Checkup consists of one 50-minute session with an expert relationship health consultant. Prior\n\t\tto your Checkup appointment you and your partner will complete a brief set of online questionnaires. The\n\t\tquestionnaires ask about the quality of your relationship, including your strengths and any concerns that you\n\t\tmight have. The completion of the questionnaires should take approximately 10 minutes.\n\t</p>\n\t<p>\n\t\tThen you will meet with your relationship health consultant via a video session from the comfort of your own\n\t\thome or work place. During the appointment, your relationship health consultant will spend time getting to know\n\t\tyou and your partner, and learn about your relationship. During this meeting you will discuss various aspects of\n\t\tyour relationship including your history, your strengths, and any concerns that you might have.\n\t</p>\n\t<p>\n\t\tThen, if you choose, you will participate in one final follow-up meeting approximately two weeks later. During\n\t\tthis meeting, your relationship health consultant will review your personalized feedback report with\n\t\tresearch-driven suggestions for maintaining your relationship health and addressing the concerns that you\n\t\tdiscussed.\n\t</p>\n\t<h2>Your Annual Checkup</h2>\n\t<p>\n\t\tBecause the model of the Relationship Checkup is the annual medical exam or annual dental checkup, we will\n\t\treceive a reminder email to schedule your Checkup at the one-year anniversary of your first Checkup.\n\t</p>\n\t<h2>Will my treatment be kept confidential?</h2>\n\t<p>\n\t\tAll communications between a relationship health consultant and the individuals with whom the consultant engages\n\t\tin treatment are confidential. Information you provide and the records of your treatment will be kept strictly\n\t\tconfidential. No one can find out information about your treatment without your written consent.\n\t</p>\n\t<p class=\"bold italics\">\n\t\tThe major limitations to this confidentiality occur when there is an immediate threat to life (such as suicide\n\t\tor homicide), when child abuse or neglect is known or suspected or when elder abuse or neglect is known, or when\n\t\ta Court of Law issues a valid subpoena.\n\t</p>\n\t<p>\n\t\tSpecifically, there are a few circumstances under which the clinician is ethically and legally bound to break\n\t\tthis agreement of confidentiality.  These are as follows:\n\t</p>\n\t<p>\n\t\t1) If the clinician becomes aware that a child under 18 is or has been abused, or a developmentally disabled\n\t\tperson or an elderly person is or has been abused, a report must be made to the appropriate authorities.\n\t</p>\n\t<p>\n\t\t2) If a participant threatens another person, the clinician must protect the other person by warning the person\n\t\tat risk and reporting the danger to the appropriate authorities.\n\t</p>\n\t<p>\n\t\t3) If a participant poses a danger to self or others or is unable to take care of basic needs, the clinician\n\t\twill take appropriate action to protect the participant’s safety including notifying the appropriate\n\t\tauthorities.\n\t</p>\n\t<p>\n\t\tIn addition, your relationship health consultant may consult with their own clinical supervisors about your\n\t\tinterviews as part of their own ongoing training. When this occurs, the supervisors will uphold the\n\t\tconfidentiality of your interviews to the same degree as your consultant. If you have any questions regarding\n\t\twhom your relationship health consultant will consult regarding her/his work with you, please ask her/him.\n\t</p>\n\t<h2>Clinician Information</h2>\n\t<p>\n\t\tYou may choose to work with a consultant who is licensed in a different state than where you reside. This will\n\t\tnot affect the quality of your treatment. All clinicians have been trained in the Relationship Checkup and have\n\t\ta license to practice. You may ask your consultant what state he/she is licensed in at any time.\n\t</p>\n\t<h2>Right to discontinue</h2>\n\t<p>\n\t\tParticipation in this Checkup is completely voluntary.  Even if you sign this consent form now, you are not\n\t\tpermanently committing yourself.  You are free to stop at any time.  If you stop, you may request that your data\n\t\tbe permanently delete from record.\n\t</p>\n\t<p>\n\t\tIf you have any questions concerning your consent to participate in the Checkup, you are welcome to contact the\n\t\tChief Operating Officer, Tatiana Gray: Tatiana@arammu.org.\n\t</p>\n\t<p>\n\t\tI have read and understand all the information above and agree to the policies outlined for the Relationship\n\t\tCheckup. By registering an account through Arammu.com, I voluntarily consent to participate in this activity.\n\t</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/front-facing/what-we-do/what-we-do.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/front-facing/what-we-do/what-we-do.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>\n\t\tWhat We Do\n\t</h1>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/front-facing/who-we-are/who-we-are.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/front-facing/who-we-are/who-we-are.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>\n\t\tMeet the Team\n\t</h1>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/payments/make-payment/make-payment.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/payments/make-payment/make-payment.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container centered\">\n\t<h1>Payment Page</h1>\n\t<button (click)=\"handlePayment()\">Purchase</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/change-password/change-password.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/change-password/change-password.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>Change Password</h1>\n\t<form [formGroup]='changeForm' style=\"margin: 0 25%; text-align: center\" method=\"POST\">\n\t\t<div class=\"form-group\">\n\t\t\t<label>\n\t\t\t\tCurrent Password\n\t\t\t</label>\n\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"curPassword\" autocomplete=\"password\">\n\t\t\t<div *ngIf=\"changeForm.controls.curPassword.touched && changeForm.controls.curPassword.errors\">\n\t\t\t\t<div *ngIf=\"changeForm.controls.curPassword.errors.required\" class=\"error\">Current password is\n\t\t\t\t\trequired</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>\n\t\t\t\tNew Password\n\t\t\t</label>\n\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"newPassword\" autocomplete=\"new-password\">\n\t\t\t<div *ngIf=\"changeForm.controls.newPassword.touched && changeForm.controls.newPassword.errors\">\n\t\t\t\t<div *ngIf=\"changeForm.controls.newPassword.errors.required\" class=\"error\">New password is\n\t\t\t\t\trequired</div>\n\t\t\t\t<div *ngIf=\"changeForm.controls.newPassword.errors.minlength\" class=\"error\">Password must be at least\n\t\t\t\t\t6 characters</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>\n\t\t\t\tRetype New Password\n\t\t\t</label>\n\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\"\n\t\t\t\tautocomplete=\"retype-new-password\">\n\t\t\t<div *ngIf=\"changeForm.controls.confirmPassword.touched && changeForm.controls.confirmPassword.errors\">\n\t\t\t\t<div *ngIf=\"changeForm.controls.confirmPassword.errors.required\" class=\"error\">Confirm password is\n\t\t\t\t\trequired</div>\n\t\t\t\t<div *ngIf=\"changeForm.controls.confirmPassword.errors.mustMatch\" class=\"error\">Passwords must match\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<button class=\"btn btn-default\" (click)=\"changePassword()\"\n\t\t\t[disabled]=\"changeForm.invalid\">{{ btnText }}</button>\n\t</form>\n</div>\n\n<div class=\"modal fade\" id=\"infoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"infoModalTitle\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"infoModalTitle\"> {{ modalTitle }} </h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t{{ modalBody }}\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\"\n\t\t\t\t\t(click)=\"btnText = 'Reset Password'\"> OK</button>\n\t\t\t\t<button type=\"button\" class=\"btn\" data-dismiss=\"modal\" routerLink=\"/login\">Back to\n\t\t\t\t\tDashboard</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/choose-clinician/choose-clinician.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/choose-clinician/choose-clinician.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>\n\t\t<span class=\"fa fa-arrow-left\" [routerLink]=\"['/dashboard']\"></span>\n\t\tChoose a Clinician\n\t</h1>\n\t<div class=\"row\">\n\t\t<!--\n<div class=\"col-12 col-sm-3\"> //\n<h3>\nFilter\n</h3>\n</div>\n-->\n\t\t<!--\t\t<div class=\"col-12 col-sm-9\" style=\"border-left: 3px solid lightgrey\">-->\n\t\t<div class=\"col-12\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-6 col-md-4\" *ngFor=\"let clinician of clinicians\">\n\t\t\t\t\t<div class=\"clinician\">\n\t\t\t\t\t\t<img *ngIf=\"clinician\" src=\"{{ clinician?.picture }}\">\n\t\t\t\t\t\t<div style=\"padding: 1em;\">\n\t\t\t\t\t\t\t<strong>{{ clinician?.firstName }} {{ clinician?.lastName }} </strong><br>\n\t\t\t\t\t\t\t<button class=\"book btn\" (click)=\"curClinician = clinician\" data-toggle=\"modal\"\n\t\t\t\t\t\t\t\tdata-target=\"#viewClinicianModal\">View Info</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"viewClinicianModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"viewClinicianTitle\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t<span aria-hidden=\"true\" style=\"color: white; float: right; margin: .25em .15em 0 0;\">&times;</span>\n\t\t\t</button>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12 col-md-6\">\n\t\t\t\t\t<img class=\"inside-pic\" *ngIf=\"curClinician\" src=\"{{ curClinician?.picture }}\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 col-md-6 text\">\n\t\t\t\t\t<strong>{{ curClinician?.firstName }} {{ curClinician?.lastName }}</strong>\n\t\t\t\t\t<p>{{ curClinician?.bio }}</p>\n\n\t\t\t\t\t<!--\n<div class=\"col-12 col-md-6\" *ngIf=\"viewCalendly\">\n<div class=\"calendly-inline-widget calendly\" attr.data-url=\"{{ 'https://calendly.com/info-arammu/' + curClinician?.firstName?.toLowerCase() + '-' + curClinician?.lastName?.toLowerCase() }}\"></div>\n</div>\n-->\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<button class=\"schedule btn\" data-dismiss=\"modal\"\n\t\t\t\t[routerLink]=\"['/schedule-clinician', checkup, curClinician?.id]\">Schedule Appointment</button>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/choose-sub-type/choose-sub-type.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/choose-sub-type/choose-sub-type.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>\n\t\t<span class=\"fa fa-arrow-left\" [routerLink]=\"['/choose-type', { user: user } ]\"></span>\n\t\tChoose Your Checkup Type:\n\t</h1>\n\t<div class=\"row\">\n\t\t<div class=\"col-5\">\n\t\t\t<div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n\t\t\t\t<a class=\"list-group-item list-group-item-action active\" id=\"list-relationship-list\" data-toggle=\"list\"\n\t\t\t\t\tdata-target=\"#list-relationship\" role=\"tab\" aria-controls=\"relationship\"\n\t\t\t\t\t(click)=\"type = 'personal'\">\n\t\t\t\t\tThe Relationship Checkup\n\t\t\t\t</a>\n\t\t\t\t<a class=\"list-group-item list-group-item-action\" id=\"list-baby-list\" data-toggle=\"list\"\n\t\t\t\t\tdata-target=\"#list-baby\" role=\"tab\" aria-controls=\"baby\" (click)=\"type = 'baby'\">\n\t\t\t\t\tThe Before the Baby Checkup\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-7\">\n\t\t\t<div class=\"tab-content\" id=\"nav-tabContent\">\n\t\t\t\t<div class=\"tab-pane fade show active\" id=\"list-relationship\" role=\"tabpanel\"\n\t\t\t\t\taria-labelledby=\"list-relationship-list\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe Relationship Checkup consists of a short questionnaire and one 50-minute meeting with an\n\t\t\t\t\t\texpert relationship health consultant. The Checkup has been proven to strengthen communication,\n\t\t\t\t\t\taffection, sex, intimacy, and overall happiness. After your Checkup you will receive a\n\t\t\t\t\t\tpersonalized Feedback Report with additional recommendations for how you can continue to\n\t\t\t\t\t\tstrengthen the long-term health and vibrancy of your relationship.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"tab-pane fade\" id=\"list-baby\" role=\"tabpanel\" aria-labelledby=\"list-baby-list\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\tIn the Before Baby Checkup you will fill out a short questionnaire, then work with an expert\n\t\t\t\t\t\trelationship health consultant to discuss the transformative experience of becoming parents –\n\t\t\t\t\t\ttogether. After your Checkup you will receive a personalized Feedback Report with additional\n\t\t\t\t\t\trecommendations for how you can continue strengthen the quality of your loving relationship as\n\t\t\t\t\t\tthe most important foundation for your baby’s future well being.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-12 text-center\">\n\t\t\t<button class=\"btn\" [routerLink]=\"['/select-personal-partner', { user: user, type: type }]\">\n\t\t\t\tBegin\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/choose-type/choose-type.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/choose-type/choose-type.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>\n\t\t<span class=\"fa fa-arrow-left\" routerLink=\"/dashboard\"></span>\n\t\tPlease choose your type of checkup\n\t</h1>\n\t<div class=\"row\">\n\t\t<div class=\"col-12 col-md-6\">\n\t\t\t<div class=\"top {{ type == 'personal' ? 'active' : '' }}\">\n\t\t\t\t<div class=\"content\" (click)=\"type = 'personal'\">\n\t\t\t\t\tPersonal\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-12 col-md-6\">\n\t\t\t<div class=\"top {{ type == 'professional' ? 'active' : '' }}\">\n\t\t\t\t<div class=\"content\" (click)=\"type = 'professional'\">\n\t\t\t\t\tProfessional\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-12 text-center\">\n\t\t\t<button class=\"btn\" (click)=\"toNextPage()\" [disabled]=\"!type\">\n\t\t\t\tNext\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/forgot-password/forgot-password.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/forgot-password/forgot-password.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t\t<h1>Find your Arammu account</h1>\n\t\t<h3 class=\"centered\">Please enter your email and we will send you a link to reset your password if the account\n\t\t\texists</h3>\n\t\t<form [formGroup]='emailForm' style=\"margin: 0 25%; text-align: center\">\n\t\t\t<input type=\"email\" formControlName=\"email\" class=\"form-control mb-2\" required placeholder=\"Email\"\n\t\t\t\tautocomplete=\"email\">\n\t\t\t<button class=\"btn btn-default\" (click)=\"changePassword()\">{{ btnText }}</button>\n\t\t\t<br>\n\t\t\t<div *ngIf=\" emailForm.controls.email.touched && emailForm.controls.email.errors\" class=\"centered\">\n\t\t\t\t<div *ngIf=\"emailForm.controls.email.errors.required\" class=\"error\">Email is required</div>\n\t\t\t\t<div *ngIf=\"emailForm.controls.email.errors.email\" class=\"error\">Not a valid email address</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\n\t<div class=\"modal fade\" id=\"infoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"infoModalTitle\" aria-hidden=\"true\">\n\t\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<h5 class=\"modal-title\" id=\"infoModalTitle\"> {{ modalTitle }} </h5>\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t{{ modalBody }}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\"\n\t\t\t\t\t\t(click)=\"btnText = 'Reset Password'\"> Try Another Email</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn\" data-dismiss=\"modal\" routerLink=\"/login\">Back to\n\t\t\t\t\t\tLogin</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/login/login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"header\">\n\t{{ companyName }} Login\n</h1>\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t\t<form [formGroup]=\"loginForm\" method=\"POST\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t{{ userType }}\n\t\t\t\t\t</label>\n\t\t\t\t\t<input type=\"text\" formControlName=\"userid\" class=\"form-control\" autocomplete=\"userid\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>\n\t\t\t\t\t\tPassword\n\t\t\t\t\t</label>\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"password\"\n\t\t\t\t\t\t(keyup.enter)=\"tryLogin(loginForm.value)\" autocomplete=\"current-password\">\n\t\t\t\t</div>\n\t\t\t\t<button type=\"submit\" (click)=\"tryLogin(loginForm.value)\" class=\"btn btn-default\" style=\"width:100%\">\n\t\t\t\t\t{{ loginMessage }}\n\t\t\t\t</button>\n\t\t\t\t<label class=\"error\">\n\t\t\t\t\t{{errorMessage}}\n\t\t\t\t</label>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\t<div class=\"row\" *ngIf=\"company != 'canyonranch'\">\n\t\t<div class=\"col\">\n\t\t\tNo account yet?\n\t\t\t<a routerLink=\"/register\">\n\t\t\t\tCreate an account\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\t<div class=\"row\" *ngIf=\"company != 'canyonranch'\">\n\t\t<div class=\"col\">\n\t\t\tForgot password?\n\t\t\t<a routerLink=\"/forgot-password\">\n\t\t\t\tReset here\n\t\t\t</a>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/personal/personal-survey/personal-survey.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/personal/personal-survey/personal-survey.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"show-info\" [hidden]=\"showSurvey\">\n\t\t<div class=\"row text-center info-line\">\n\t\t\t<div class=\"col-5\">\n\t\t\t</div>\n\t\t\t<div class=\"col-2\">\n\t\t\t\t<span class=\"fa fa-info\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"col-5\">\n\t\t\t</div>\n\t\t</div>\n\t\t<p class=\"info\">\n\t\t\tThe Arammu Team has found that couples get more out of the checkup if they complete the questionnaires <span\n\t\t\t\tclass=\"purple bold\">separately,</span> without looking at each other’s answers.\n\t\t\t<br>\n\t\t\tPlease complete these questionnaires on your own without discussing them with your partner.\n\t\t</p>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12 text-center\">\n\t\t\t\t<span class=\"terms\">By clicking Begin Survey, you agree to our <a routerLink=\"/terms\"\n\t\t\t\t\t\ttarget=\"_blank\">Consent to Treat Terms and Conditions</a></span>\n\t\t\t\t<br>\n\t\t\t\t<button class=\"btn first-btn\" (click)=\"showSurvey = true\">\n\t\t\t\t\tOkay\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"show-survey\" [hidden]=\"!showSurvey\">\n\t\t<h1>\n\t\t\t{{ checkup?.type | titlecase }} Questionnaire\n\t\t</h1>\n\t\t<div *ngIf=\"step1\">\n\t\t\t<h2>\n\t\t\t\tStrengths\n\t\t\t</h2>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-6 title\">\n\t\t\t\t\tPlease indicate the degree to which you experience each of the following areas as a strength in your\n\t\t\t\t\trelationship.\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 title upper text-center\">\n\t\t\t\t\tNot a <br>\n\t\t\t\t\tStrength\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 title upper text-center\">\n\t\t\t\t\tModerate <br>\n\t\t\t\t\tStrength\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 title upper text-center\">\n\t\t\t\t\tSignificant <br>\n\t\t\t\t\tStrength\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\" *ngFor=\"let s of strengthData; let i = index\">\n\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t<span class=\"number\">{{ i + 1 }}</span>\n\t\t\t\t\t{{ s.description }}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" checked id=\"{{ '1strength' + i }}\"\n\t\t\t\t\t\t\tname=\"{{ 'strength' + i }}\" value=\"Not a Strength\" (change)=\"s.answer='Not a Strength'\"\n\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t<label for=\"{{ '1strength' + i }}\"></label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" id=\"{{ '2strength' + i }}\"\n\t\t\t\t\t\t\tname=\"{{ 'strength' + i }}\" value=\"Moderate Strength\"\n\t\t\t\t\t\t\t(change)=\"s.answer='Moderate Strength'\" required>\n\t\t\t\t\t\t<label for=\"{{ '2strength' + i }}\"></label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" id=\"{{ '3strength' + i }}\"\n\t\t\t\t\t\t\tname=\"{{ 'strength' + i }}\" value=\"Significant Strength\"\n\t\t\t\t\t\t\t(change)=\"s.answer='Significant Strength'\" required>\n\t\t\t\t\t\t<label for=\"{{ '3strength' + i }}\"></label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-12 text-center\">\n\t\t\t\t\t<button class=\"btn\" (click)=\"step1 = false; step2 = true\">\n\t\t\t\t\t\tNext\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"step2\">\n\t\t\t<h3>\n\t\t\t\tNow, please rank order what you consider to be the <span class=\"purple\"\n\t\t\t\t\tstyle=\"text-decoration: underline\">top three strengths</span> in your relationship from the list on\n\t\t\t\tthe previous page.\n\t\t\t</h3>\n\t\t\t<p class=\"title\">\n\t\t\t\t*Note: Your consultant will bring up the top three strengths that you select during your checkup. This\n\t\t\t\twill give you an opportunity to thoroughly celebrate what you are doing well.\n\t\t\t</p>\n\t\t\t<h4 class=\"title upper\">\n\t\t\t\tChoose #1 Strength\n\t\t\t</h4>\n\t\t\t<select class=\"form-control\" [(ngModel)]=\"topData.firstStrength\">\n\t\t\t\t<option disabled selected [value]='{ \"idx\": -1, \"txt\": \"\" }'> Select... </option>\n\t\t\t\t<option *ngFor=\"let s of strengthData; let i = index\" [ngValue]=\"{ idx: i, txt: s.description }\">\n\t\t\t\t\t{{ s.description }}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<h4 class=\"title upper\">\n\t\t\t\tChoose #2 Strength\n\t\t\t</h4>\n\t\t\t<select class=\"form-control\" [(ngModel)]=\"topData.secondStrength\">\n\t\t\t\t<option disabled selected [value]='{ \"idx\": -1, \"txt\": \"\" }'> Select... </option>\n\t\t\t\t<option *ngFor=\"let s of strengthData; let i = index\" [ngValue]=\"{ idx: i, txt: s.description }\">\n\t\t\t\t\t{{ s.description }}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<h4 class=\"title upper\">\n\t\t\t\tChoose #3 Strength\n\t\t\t</h4>\n\t\t\t<select class=\"form-control\" [(ngModel)]=\"topData.thirdStrength\">\n\t\t\t\t<option disabled selected [value]='{ \"idx\": -1, \"txt\": \"\" }'> Select... </option>\n\t\t\t\t<option *ngFor=\"let s of strengthData; let i = index\" [ngValue]=\"{ idx: i, txt: s.description }\">\n\t\t\t\t\t{{ s.description }}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<div class=\"row\" style=\"background: transparent\">\n\t\t\t\t<div class=\"col-6 text-center\">\n\t\t\t\t\t<button class=\"btn\" (click)=\"step1 = true; step2 = false\">\n\t\t\t\t\t\tBack\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-6 text-center\">\n\t\t\t\t\t<button class=\"btn\" (click)=\"step2 = false; step3 = true\"\n\t\t\t\t\t\t[disabled]=\"!(topData['firstStrength']['idx'] != -1 && topData['secondStrength']['idx'] != -1 && topData['thirdStrength']['idx'] != -1)\">\n\t\t\t\t\t\tNext\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"step3\">\n\t\t\t<h2>\n\t\t\t\tConcerns\n\t\t\t</h2>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-6 title\">\n\t\t\t\t\tPlease indicate the degree to which you experience each of the following areas as a concern in your\n\t\t\t\t\trelationship.\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 title upper text-center\">\n\t\t\t\t\tNot a <br>\n\t\t\t\t\tConcern\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 title upper text-center\">\n\t\t\t\t\tModerate <br>\n\t\t\t\t\tConcern\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 title upper text-center\">\n\t\t\t\t\tSignificant <br>\n\t\t\t\t\tConcern\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\" *ngFor=\"let c of concernData; let i = index\">\n\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t<span class=\"number\">{{ i + 1 }}</span>\n\t\t\t\t\t{{ c.description }}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" checked id=\"{{ '1concern' + i }}\"\n\t\t\t\t\t\t\tname=\"{{ 'concern' + i }}\" value=\"Not a Concern\" (change)=\"c.answer='Not a Strength'\"\n\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t<label for=\"{{ '1concern' + i }}\"></label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" id=\"{{ '2concern' + i }}\"\n\t\t\t\t\t\t\tname=\"{{ 'concern' + i }}\" value=\"Moderate Concern\" (change)=\"c.answer='Moderate Concern'\"\n\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t<label for=\"{{ '2concern' + i }}\"></label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" id=\"{{ '3concern' + i }}\"\n\t\t\t\t\t\t\tname=\"{{ 'concern' + i }}\" value=\"Significant Concern\"\n\t\t\t\t\t\t\t(change)=\"c.answer='Significant Concern'\" required>\n\t\t\t\t\t\t<label for=\"{{ '3concern' + i }}\"></label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-6 text-center\">\n\t\t\t\t\t<button class=\"btn\" (click)=\"step2 = true; step3 = false\">\n\t\t\t\t\t\tBack\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-6 text-center\">\n\t\t\t\t\t<button class=\"btn\" (click)=\"step3 = false; step4 = true\">\n\t\t\t\t\t\tNext\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"step4\">\n\t\t\t<h3>\n\t\t\t\tNow, indicate the three things you are <span class=\"purple\" style=\"text-decoration: underline\">most\n\t\t\t\t\tconcerned or worried</span> about in your relationship from the list on the previous page.\n\t\t\t</h3>\n\t\t\t<p class=\"title\">\n\t\t\t\t*Note: Your consultant will bring up the top three concerns that you select during your checkup. This\n\t\t\t\twill give you an opportunity to explore your primary concerns more deeply.\n\t\t\t</p>\n\t\t\t<h4 class=\"title upper\">\n\t\t\t\tChoose #1 Concern\n\t\t\t</h4>\n\t\t\t<select class=\"form-control\" [(ngModel)]=\"topData.firstConcern\">\n\t\t\t\t<option disabled selected [value]='{ \"idx\": -1, \"txt\": \"\" }'> Select... </option>\n\t\t\t\t<option *ngFor=\"let s of concernData; let i = index\" [ngValue]=\"{ idx: i, txt: s.description }\">\n\t\t\t\t\t{{ s.description }}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<h4 class=\"title upper\">\n\t\t\t\tChoose #2 Concern\n\t\t\t</h4>\n\t\t\t<select class=\"form-control\" [(ngModel)]=\"topData.secondConcern\">\n\t\t\t\t<option disabled selected [value]='{ \"idx\": -1, \"txt\": \"\" }'> Select... </option>\n\t\t\t\t<option *ngFor=\"let s of concernData; let i = index\" [ngValue]=\"{ idx: i, txt: s.description }\">\n\t\t\t\t\t{{ s.description }}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<h4 class=\"title upper\">\n\t\t\t\tChoose #3 Concern\n\t\t\t</h4>\n\t\t\t<select class=\"form-control\" [(ngModel)]=\"topData.thirdConcern\">\n\t\t\t\t<option disabled selected [value]='{ \"idx\": -1, \"txt\": \"\" }'> Select... </option>\n\t\t\t\t<option *ngFor=\"let s of concernData; let i = index\" [ngValue]=\"{ idx: i, txt: s.description }\">\n\t\t\t\t\t{{ s.description }}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<div class=\"row\" style=\"background:transparent\">\n\t\t\t\t<div class=\"col-6 text-center\">\n\t\t\t\t\t<button class=\"btn\" (click)=\"step3 = true; step4 = false\">\n\t\t\t\t\t\tBack\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-6 text-center\">\n\t\t\t\t\t<button class=\"btn\"\n\t\t\t\t\t\t[disabled]=\"!(topData['firstConcern']['idx'] != -1 && topData['secondConcern']['idx'] != -1 && topData['thirdConcern']['idx'] != -1)\"\n\t\t\t\t\t\t(click)=\"finishSurvey()\">\n\t\t\t\t\t\t{{ submitText }}\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"surveyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"surveyModalTitle\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"surveyModalTitle\"> {{ modalTitle }} </h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" routerLink=\"/dashboard\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t{{ modalBody }}\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn\" style=\"width: 75%; margin: 0;\" routerLink=\"/dashboard\"\n\t\t\t\t\tdata-dismiss=\"modal\">Go To Dashboard</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/personal/select-personal-partner/select-personal-partner.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/personal/select-personal-partner/select-personal-partner.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>\n\t\t<span class=\"fa fa-arrow-left\" [routerLink]=\"['/choose-sub-type', { user: user } ]\"></span>\n\t\tSelect your Partner\n\t</h1>\n\t<h4>\n\t\tPlease enter the email of your partner you wish to have a Checkup with.\n\t</h4>\n\t<form [formGroup]=\"emailForm\">\n\t\t<div class=\"form-group\">\n\t\t\t<input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Partner's Email\">\n\t\t\t<div *ngIf=\"emailForm.controls.email.touched && emailForm.controls.email.errors\">\n\t\t\t\t<div *ngIf=\"emailForm.controls.email.errors.email\" class=\"error\">Not a valid email address</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n\t<div class=\"centered\">\n\t\t<button class=\"btn\" [disabled]=\"(emailForm.controls?.email?.errors && emailForm.controls?.email?.errors?.required) || emailForm.controls?.email?.errors?.email\" (click)=\"checkPartner()\">\n\t\t\tRequest {{ emailForm.value?.email }}!\n\t\t</button>\n\t</div>\n\n\t<button type=\"button\" id=\"modalButton\" data-toggle=\"modal\" data-target=\"#partnerModal\" *ngIf=\"false\"></button>\n</div>\n<div class=\"modal fade\" id=\"partnerModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"partnerModalTitle\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"partnerModalTitle\"> {{ modalTitle }} </h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t{{ modalBody }}\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button *ngIf=\"!errorMsg\" type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Try Different Email</button>\n\t\t\t\t<button type=\"button\" class=\"btn\" *ngIf=\"modalSave != 'hide' && !errorMsg\" (click)=\"choosePartner()\" data-dismiss=\"modal\">{{ modalSave }}</button>\n\t\t\t\t<button *ngIf=\"errorMsg\" type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" routerLink=\"/dashboard\">Go Back to Dashboard</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/professional/professional-survey/professional-survey.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/professional/professional-survey/professional-survey.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"show-info\" [hidden]=\"showSurvey\">\n\t\t<div class=\"row text-center info-line\">\n\t\t\t<div class=\"col-5\">\n\t\t\t</div>\n\t\t\t<div class=\"col-2\">\n\t\t\t\t<span class=\"fa fa-info\"></span>\n\t\t\t</div>\n\t\t\t<div class=\"col-5\">\n\t\t\t</div>\n\t\t</div>\n\t\t<p class=\"info\">\n\t\t\tThe Arammu Team has found that couples get more out of the checkup if they complete the questionnaires <span\n\t\t\t\tclass=\"purple bold\">separately,</span> without looking at each other’s answers.\n\t\t\t<br>\n\t\t\tPlease complete these questionnaires on your own without discussing them with your partner.\n\t\t</p>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12 text-center\">\n\t\t\t\t<span class=\"terms\">By clicking Begin Survey, you agree to our <a routerLink=\"/terms\"\n\t\t\t\t\t\ttarget=\"_blank\">Consent to Treat Terms and Conditions</a></span>\n\t\t\t\t<br>\n\t\t\t\t<button class=\"btn first-btn\" (click)=\"showSurvey = true\">\n\t\t\t\t\tOkay\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"show-survey\" [hidden]=\"!showSurvey\">\n\t\t<h1>\n\t\t\tProfessional Questionnaire\n\t\t</h1>\n\t\t<div *ngIf=\"step1\">\n\t\t\t<h2>\n\t\t\t\tStrengths\n\t\t\t</h2>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-6 title\">\n\t\t\t\t\tPlease indicate the degree to which you experience each of the following areas as a strength in your\n\t\t\t\t\trelationship.\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 title upper text-center\">\n\t\t\t\t\tNot a <br>\n\t\t\t\t\tStrength\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 title upper text-center\">\n\t\t\t\t\tModerate <br>\n\t\t\t\t\tStrength\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 title upper text-center\">\n\t\t\t\t\tSignificant <br>\n\t\t\t\t\tStrength\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\" *ngFor=\"let s of strengthData; let i = index\">\n\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t<span class=\"number\">{{ i + 1 }}</span>\n\t\t\t\t\t{{ s.description }}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" checked id=\"{{ '1strength' + i }}\"\n\t\t\t\t\t\t\tname=\"{{ 'strength' + i }}\" value=\"Not a Strength\" (change)=\"s.answer='Not a Strength'\"\n\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t<label for=\"{{ '1strength' + i }}\"></label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" id=\"{{ '2strength' + i }}\"\n\t\t\t\t\t\t\tname=\"{{ 'strength' + i }}\" value=\"Moderate Strength\"\n\t\t\t\t\t\t\t(change)=\"s.answer='Moderate Strength'\" required>\n\t\t\t\t\t\t<label for=\"{{ '2strength' + i }}\"></label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" id=\"{{ '3strength' + i }}\"\n\t\t\t\t\t\t\tname=\"{{ 'strength' + i }}\" value=\"Significant Strength\"\n\t\t\t\t\t\t\t(change)=\"s.answer='Significant Strength'\" required>\n\t\t\t\t\t\t<label for=\"{{ '3strength' + i }}\"></label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-12 text-center\">\n\t\t\t\t\t<button class=\"btn\" (click)=\"step1 = false; step2 = true\">\n\t\t\t\t\t\tNext\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"step2\">\n\t\t\t<h3>\n\t\t\t\tNow, please rank order what you consider to be the <span class=\"purple\"\n\t\t\t\t\tstyle=\"text-decoration: underline\">top three strengths</span> in your relationship from the list on\n\t\t\t\tthe previous page.\n\t\t\t</h3>\n\t\t\t<p class=\"title\">\n\t\t\t\t*Note: Your consultant will bring up the top three strengths that you select during your checkup. This\n\t\t\t\twill give you an opportunity to thoroughly celebrate what you are doing well.\n\t\t\t</p>\n\t\t\t<h4 class=\"title upper\">\n\t\t\t\tChoose #1 Strength\n\t\t\t</h4>\n\t\t\t<select class=\"form-control\" [(ngModel)]=\"topData.firstStrength\">\n\t\t\t\t<option disabled selected [value]='{ \"idx\": -1, \"txt\": \"\" }'> Select... </option>\n\t\t\t\t<option *ngFor=\"let s of strengthData; let i = index\" [ngValue]=\"{ idx: i, txt: s.description }\">\n\t\t\t\t\t{{ s.description }}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<h4 class=\"title upper\">\n\t\t\t\tChoose #2 Strength\n\t\t\t</h4>\n\t\t\t<select class=\"form-control\" [(ngModel)]=\"topData.secondStrength\">\n\t\t\t\t<option disabled selected [value]='{ \"idx\": -1, \"txt\": \"\" }'> Select... </option>\n\t\t\t\t<option *ngFor=\"let s of strengthData; let i = index\" [ngValue]=\"{ idx: i, txt: s.description }\">\n\t\t\t\t\t{{ s.description }}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<h4 class=\"title upper\">\n\t\t\t\tChoose #3 Strength\n\t\t\t</h4>\n\t\t\t<select class=\"form-control\" [(ngModel)]=\"topData.thirdStrength\">\n\t\t\t\t<option disabled selected [value]='{ \"idx\": -1, \"txt\": \"\" }'> Select... </option>\n\t\t\t\t<option *ngFor=\"let s of strengthData; let i = index\" [ngValue]=\"{ idx: i, txt: s.description }\">\n\t\t\t\t\t{{ s.description }}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<div class=\"row\" style=\"background: transparent\">\n\t\t\t\t<div class=\"col-6 text-center\">\n\t\t\t\t\t<button class=\"btn\" (click)=\"step1 = true; step2 = false\">\n\t\t\t\t\t\tBack\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-6 text-center\">\n\t\t\t\t\t<button class=\"btn\" (click)=\"step2 = false; step3 = true\"\n\t\t\t\t\t\t[disabled]=\"!(topData['firstStrength']['idx'] != -1 && topData['secondStrength']['idx'] != -1 && topData['thirdStrength']['idx'] != -1)\">\n\t\t\t\t\t\tNext\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"step3\">\n\t\t\t<h2>\n\t\t\t\tConcerns\n\t\t\t</h2>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-6 title\">\n\t\t\t\t\tPlease indicate the degree to which you experience each of the following areas as a concern in your\n\t\t\t\t\trelationship.\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 title upper text-center\">\n\t\t\t\t\tNot a <br>\n\t\t\t\t\tConcern\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 title upper text-center\">\n\t\t\t\t\tModerate <br>\n\t\t\t\t\tConcern\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 title upper text-center\">\n\t\t\t\t\tSignificant <br>\n\t\t\t\t\tConcern\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\" *ngFor=\"let c of concernData; let i = index\">\n\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t<span class=\"number\">{{ i + 1 }}</span>\n\t\t\t\t\t{{ c.description }}\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" checked id=\"{{ '1concern' + i }}\"\n\t\t\t\t\t\t\tname=\"{{ 'concern' + i }}\" value=\"Not a Concern\" (change)=\"c.answer='Not a Strength'\"\n\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t<label for=\"{{ '1concern' + i }}\"></label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" id=\"{{ '2concern' + i }}\"\n\t\t\t\t\t\t\tname=\"{{ 'concern' + i }}\" value=\"Moderate Concern\" (change)=\"c.answer='Moderate Concern'\"\n\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t<label for=\"{{ '2concern' + i }}\"></label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2 text-center\">\n\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" id=\"{{ '3concern' + i }}\"\n\t\t\t\t\t\t\tname=\"{{ 'concern' + i }}\" value=\"Significant Concern\"\n\t\t\t\t\t\t\t(change)=\"c.answer='Significant Concern'\" required>\n\t\t\t\t\t\t<label for=\"{{ '3concern' + i }}\"></label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-6 text-center\">\n\t\t\t\t\t<button class=\"btn\" (click)=\"step2 = true; step3 = false\">\n\t\t\t\t\t\tBack\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-6 text-center\">\n\t\t\t\t\t<button class=\"btn\" (click)=\"step3 = false; step4 = true\">\n\t\t\t\t\t\tNext\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"step4\">\n\t\t\t<h3>\n\t\t\t\tNow, indicate the three things you are <span class=\"purple\" style=\"text-decoration: underline\">most\n\t\t\t\t\tconcerned or worried</span> about in your relationship from the list on the previous page.\n\t\t\t</h3>\n\t\t\t<p class=\"title\">\n\t\t\t\t*Note: Your consultant will bring up the top three concerns that you select during your checkup. This\n\t\t\t\twill give you an opportunity to explore your primary concerns more deeply.\n\t\t\t</p>\n\t\t\t<h4 class=\"title upper\">\n\t\t\t\tChoose #1 Concern\n\t\t\t</h4>\n\t\t\t<select class=\"form-control\" [(ngModel)]=\"topData.firstConcern\">\n\t\t\t\t<option disabled selected [value]='{ \"idx\": -1, \"txt\": \"\" }'> Select... </option>\n\t\t\t\t<option *ngFor=\"let s of concernData; let i = index\" [ngValue]=\"{ idx: i, txt: s.description }\">\n\t\t\t\t\t{{ s.description }}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<h4 class=\"title upper\">\n\t\t\t\tChoose #2 Concern\n\t\t\t</h4>\n\t\t\t<select class=\"form-control\" [(ngModel)]=\"topData.secondConcern\">\n\t\t\t\t<option disabled selected [value]='{ \"idx\": -1, \"txt\": \"\" }'> Select... </option>\n\t\t\t\t<option *ngFor=\"let s of concernData; let i = index\" [ngValue]=\"{ idx: i, txt: s.description }\">\n\t\t\t\t\t{{ s.description }}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<h4 class=\"title upper\">\n\t\t\t\tChoose #3 Concern\n\t\t\t</h4>\n\t\t\t<select class=\"form-control\" [(ngModel)]=\"topData.thirdConcern\">\n\t\t\t\t<option disabled selected [value]='{ \"idx\": -1, \"txt\": \"\" }'> Select... </option>\n\t\t\t\t<option *ngFor=\"let s of concernData; let i = index\" [ngValue]=\"{ idx: i, txt: s.description }\">\n\t\t\t\t\t{{ s.description }}\n\t\t\t\t</option>\n\t\t\t</select>\n\t\t\t<div class=\"row\" style=\"background:transparent\">\n\t\t\t\t<div class=\"col-6 text-center\">\n\t\t\t\t\t<button class=\"btn\" (click)=\"step3 = true; step4 = false\">\n\t\t\t\t\t\tBack\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-6 text-center\">\n\t\t\t\t\t<button class=\"btn\"\n\t\t\t\t\t\t[disabled]=\"!(topData['firstConcern']['idx'] != -1 && topData['secondConcern']['idx'] != -1 && topData['thirdConcern']['idx'] != -1)\"\n\t\t\t\t\t\t(click)=\"finishSurvey()\">\n\t\t\t\t\t\t{{ submitText }}\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"surveyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"surveyModalTitle\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"surveyModalTitle\"> {{ modalTitle }} </h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" routerLink=\"/dashboard\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t{{ modalBody }}\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn\" style=\"width: 75%; margin: 0;\" routerLink=\"/dashboard\"\n\t\t\t\t\tdata-dismiss=\"modal\">Go To Dashboard</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/professional/select-professional-partner/select-professional-partner.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/professional/select-professional-partner/select-professional-partner.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>\n\t\t<span class=\"fa fa-arrow-left\" [routerLink]=\"['/choose-type', { user: user?.id } ]\"></span>\n\t\tSelect your Business Partner\n\t</h1>\n\t<h4>\n\t\tPlease enter the email of your partner you wish to have a Checkup with. As a business Checkup, it must be an email with the domain <strong class=\"purple\">{{ user?.email?.split('@')[1] }}</strong>.\n\t</h4>\n\t<form [formGroup]=\"emailForm\">\n\t\t<div class=\"form-group\">\n\t\t\t<input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Partner's Email\">\n\t\t\t<div *ngIf=\"emailForm.controls.email.touched && emailForm.controls.email.errors\">\n\t\t\t\t<div *ngIf=\"emailForm.controls.email.errors.email\" class=\"error\">Not a valid email address</div>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n\t<div class=\"centered\">\n\t\t<button class=\"btn\" [disabled]=\"(emailForm.controls?.email?.errors && emailForm.controls?.email?.errors?.required) || emailForm.controls?.email?.errors?.email\" (click)=\"checkPartner()\">\n\t\t\tRequest {{ emailForm.value?.email }}!\n\t\t</button>\n\t</div>\n\n\t<button type=\"button\" id=\"modalButton\" data-toggle=\"modal\" data-target=\"#partnerModal\" *ngIf=\"false\"></button>\n</div>\n<div class=\"modal fade\" id=\"partnerModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"partnerModalTitle\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"partnerModalTitle\"> {{ modalTitle }} </h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t{{ modalBody }}\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button *ngIf=\"!errorMsg\" type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Try Different Email</button>\n\t\t\t\t<button type=\"button\" class=\"btn\" *ngIf=\"modalSave != 'hide' && !errorMsg\" (click)=\"choosePartner()\" data-dismiss=\"modal\">{{ modalSave }}</button>\n\t\t\t\t<button *ngIf=\"errorMsg\" type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" routerLink=\"/dashboard\">Go Back to Dashboard</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/register/register.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/register/register.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<form [formGroup]=\"registerForm\">\n\t\t<h1>\n\t\t\tRegister New Account\n\t\t</h1>\n\t\t<div class=\"form-group\">\n\t\t\t<label>\n\t\t\t\tFirst Name\n\t\t\t</label>\n\t\t\t<input type=\"text\" formControlName=\"firstName\" class=\"form-control\" required>\n\t\t\t<div *ngIf=\"registerForm.controls.firstName.touched && registerForm.controls.firstName.errors\"\n\t\t\t\tclass=\"error\">\n\t\t\t\tFirst Name is required\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>\n\t\t\t\tLast Name\n\t\t\t</label>\n\t\t\t<input type=\"text\" formControlName=\"lastName\" class=\"form-control\" required>\n\t\t\t<div *ngIf=\"registerForm.controls.lastName.touched && registerForm.controls.lastName.errors\" class=\"error\">\n\t\t\t\tLast Name is required\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>\n\t\t\t\tEmail\n\t\t\t</label>\n\t\t\t<input type=\"email\" formControlName=\"email\" class=\"form-control\" required>\n\t\t\t<div *ngIf=\"registerForm.controls.email.touched && registerForm.controls.email.errors\">\n\t\t\t\t<div *ngIf=\"registerForm.controls.email.errors.required\" class=\"error\">Email is required</div>\n\t\t\t\t<div *ngIf=\"registerForm.controls.email.errors.email\" class=\"error\">Not a valid email address</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>\n\t\t\t\tPassword\n\t\t\t</label>\n\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"password\" autocomplete=\"password\">\n\t\t\t<div *ngIf=\"registerForm.controls.password.touched && registerForm.controls.password.errors\">\n\t\t\t\t<div *ngIf=\"registerForm.controls.password.errors.required\" class=\"error\">Password is required</div>\n\t\t\t\t<div *ngIf=\"registerForm.controls.password.errors.minlength\" class=\"error\">Password must be at least 6\n\t\t\t\t\tcharacters</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>\n\t\t\t\tRetype Password\n\t\t\t</label>\n\t\t\t<input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\" autocomplete=\"retype-password\">\n\t\t\t<div *ngIf=\"registerForm.controls.confirmPassword.touched && registerForm.controls.confirmPassword.errors\">\n\t\t\t\t<div *ngIf=\"registerForm.controls.confirmPassword.errors.required\" class=\"error\">Confirm password is\n\t\t\t\t\trequired</div>\n\t\t\t\t<div *ngIf=\"registerForm.controls.confirmPassword.errors.mustMatch\" class=\"error\">Passwords must match\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- <div class=\"form-group\">\n\t\t\t<label class=\"purple\">\n\t\t\t\tWere you referred by\n\t\t\t\t<span class=\"bold\">\n\t\t\t\t\ta counselor?\n\t\t\t\t</span>\n\t\t\t\t<span class=\"optional\">\n\t\t\t\t\t-- Optional\n\t\t\t\t</span>\n\t\t\t</label>\n\t\t\t<input type=\"text\" formControlName=\"counselor\" class=\"form-control\"\n\t\t\t\tplaceholder=\"Enter your counselor code here, if available\">\n\t\t</div> -->\n\t\t<div class=\"form-check\">\n\t\t\t<input class=\"form-check-input\" type=\"checkbox\" id=\"terms\" name=\"terms\" (change)=\"terms = !terms\">\n\t\t\t<label for=\"terms\">\n\t\t\t\tI agree to the <a routerLink=\"/terms\">Consent to Treat Terms and Conditions</a>\n\t\t\t</label>\n\t\t</div>\n\t</form>\n\t<button type=\"submit\" (click)=\"tryRegister(registerForm.value)\" class=\"btn btn-default\"\n\t\t[disabled]=\"registerForm.invalid || !terms\">\n\t\t{{ msgText }}\n\t</button>\n\t<hr>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-4\">\n\t\t\t<p>\n\t\t\t\tAlready have an account?\n\t\t\t\t<a routerLink=\"/login\">\n\t\t\t\t\tLogin\n\t\t\t\t</a>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/schedule-clinician/schedule-clinician.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/schedule-clinician/schedule-clinician.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h1>\n\t\t<span class=\"fa fa-arrow-left\" [routerLink]=\"['/choose-clinician', checkup]\"></span>\n\t\tSchedule an Appointment with {{ clinician?.firstName }} {{ clinician?.lastName }}\n\t\t<span class=\"fa fa-home\" routerLink=\"/dashboard\"></span>\n\t</h1>\n\t<hr>\n\t<h4>If blank, please copy and paste your Checkup ID in the Details section: </h4>\n\t<div class=\"input-group\" ngxClipboard [cbContent]=\"[checkup]\" (cbOnSuccess)=\"copied = true\">\n\t\t<strong id='checkup-copy'>{{ checkup }}</strong>\n\t\t<span class=\"input-group-append\">\n\t\t\t<button class=\"btn btn-default\" type=\"button\" [class.btn-success]=\"copied\">Copy</button>\n\t\t</span>\n\t</div>\n\n\t<div *ngIf=\"clinician && user && checkup\">\n\t\t<!-- <div class=\"calendly-inline-widget calendly\"\n\t\t\tattr.data-url=\"{{ 'https://calendly.com/info-arammu/firebase-clinician?name=' + user?.firstName + '%20' + user?.lastName + '&email=' + user?.email + '&a1=' + checkup  }}\">\n\t\t</div> -->\n\t\t<div class=\"calendly-inline-widget calendly\"\n\t\t\tattr.data-url=\"{{ 'https://calendly.com/info-arammu/' + clinician?.firstName?.toLowerCase() + '-' + clinician?.lastName?.toLowerCase() + '?name=' + user?.firstName + '%20' + user?.lastName + '&email=' + user?.email + '&a1=' + checkup }}\">\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user-dashboard/user-dashboard.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user-dashboard/user-dashboard.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div *ngIf=\"company != 'canyonranch'\">\n\t\t<h2>\n\t\t\tProduct Progress\n\t\t\t<span class=\"fa fa-plus\" (click)=\"newCheckup()\"></span>\n\t\t</h2>\n\t\t<div *ngIf=\"checkups?.length == 0 && requestedCheckups?.length == 0 && waitingCheckups?.length == 0\">\n\t\t\t<div class=\"large\">\n\t\t\t\tReady?\n\t\t\t</div>\n\t\t\t<div class=\"choose\" (click)=\"newCheckup()\">\n\t\t\t\tChoose your {{ company == 'canyonranch' ? 'Check In' : 'Checkup' }}\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div *ngIf=\"checkups?.length > 0\">\n\t\t\t<hr>\n\t\t\t<h3>\n\t\t\t\tActive {{ company == 'canyonranch' ? 'Check Ins' : 'Checkups' }}\n\t\t\t</h3>\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"company == 'canyonranch'\" class=\"centered\">\n\t\t<h1>Canyon Ranch <> Arammu</h1>\n\t\t<h2>Relationship Check In Dashboard</h2>\n\t</div>\n\t<div *ngFor=\"let checkup of checkups\">\n\t\t<div class=\"row parent-table\">\n\t\t\t<div class=\"col-9\">\n\t\t\t\t<div class=\"purp\">\n\t\t\t\t\t<strong class=\"text-uppercase\">\n\t\t\t\t\t\t{{ checkup.type }} {{ company == 'canyonranch' ? 'Check In' : 'Checkup' }}\n\t\t\t\t\t</strong>\n\t\t\t\t\twith\n\t\t\t\t\t<strong class=\"text-uppercase\">\n\t\t\t\t\t\t{{ checkup.partner }}\n\t\t\t\t\t</strong>\n\t\t\t\t\t<div class=\"info-table\">\n\t\t\t\t\t\t<div class=\"row progress-row\">\n\t\t\t\t\t\t\t<div class=\"col-4 filler {{ checkup?.userSurvey != '' ? 'full' : '' }}\"\n\t\t\t\t\t\t\t\tstyle=\"border-radius: 5px 0 0 5px;\"></div>\n\t\t\t\t\t\t\t<div class=\"col-4 filler {{ checkAppointment(checkup.appointment) }}\"></div>\n\t\t\t\t\t\t\t<div class=\"col-4 filler {{ checkup?.feedback != '' ? 'full' : '' }}\"\n\t\t\t\t\t\t\t\tstyle=\"border-radius: 0 5px 5px 0;\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row progress-row\">\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\tQuestionnaire\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\tAppointment\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\tFeedback\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-2\">\n\t\t\t\t<div class=\"purp white-link hover\" style=\"padding: 1em;\" (click)=\"getNextAction(checkup)\">\n\t\t\t\t\t<span class=\"text-uppercase\">Next Step: </span><br>\n\t\t\t\t\t{{ checkup?.nextStep }}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-1\">\n\t\t\t\t<div class=\"purp see-more hover\" data-toggle=\"modal\" data-target=\"#seeMoreModal\"\n\t\t\t\t\t(click)=\"seeMore = checkup\">\n\t\t\t\t\tSee More\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"requestedCheckups?.length > 0\">\n\t\t<hr>\n\t\t<h3>\n\t\t\tRequested {{ company == 'canyonranch' ? 'Check Ins' : 'Checkups' }}\n\t\t</h3>\n\t</div>\n\t<div *ngFor=\"let checkup of requestedCheckups\">\n\t\t<div class=\"row parent-table\">\n\t\t\t<div class=\"col-10\">\n\t\t\t\t<div class=\"grey\">\n\t\t\t\t\t<strong>\n\t\t\t\t\t\t{{ checkup.type | titlecase }} {{ company == 'canyonranch' ? 'Check In' : 'Checkup' }}\n\t\t\t\t\t</strong>\n\t\t\t\t\twith\n\t\t\t\t\t<strong>\n\t\t\t\t\t\t{{ checkup.partner | titlecase }}\n\t\t\t\t\t</strong>\n\t\t\t\t\t<br>\n\t\t\t\t\t<span style=\"text-transform: capitalize\">\n\t\t\t\t\t\tRequest sent on {{ checkup?.timestampRequested?.toDate() | date:'fullDate' }}\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-2\">\n\t\t\t\t<div class=\"row small-grey green\">\n\t\t\t\t\t<div class=\"col-12 hover\" data-toggle=\"modal\" data-target=\"#acceptModal\"\n\t\t\t\t\t\t(click)=\"modalBody = checkup.partner; curCheckup = checkup\">\n\t\t\t\t\t\tAccept\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row small-grey red bottom\">\n\t\t\t\t\t<div class=\"col-12 hover\" data-toggle=\"modal\" data-target=\"#declineModal\"\n\t\t\t\t\t\t(click)=\"modalBody = checkup.partner; curCheckup = checkup\">\n\t\t\t\t\t\tDecline\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"waitingCheckups?.length > 0\">\n\t\t<hr>\n\t\t<h3>\n\t\t\tPending {{ company == 'canyonranch' ? 'Check Ins' : 'Checkups' }}\n\t\t</h3>\n\t</div>\n\t<div *ngFor=\"let checkup of waitingCheckups\">\n\t\t<div class=\"row parent-table\">\n\t\t\t<div class=\"col-10\">\n\t\t\t\t<div class=\"purp-grey\">\n\t\t\t\t\t<strong>\n\t\t\t\t\t\t{{ checkup.type | titlecase }} {{ company == 'canyonranch' ? 'Check In' : 'Checkup' }}\n\t\t\t\t\t</strong>\n\t\t\t\t\twith\n\t\t\t\t\t<strong>\n\t\t\t\t\t\t{{ checkup.partner | titlecase }}\n\t\t\t\t\t</strong>\n\t\t\t\t\t<div class=\"info-table\">\n\t\t\t\t\t\t<div class=\"row progress-row\">\n\t\t\t\t\t\t\t<div class=\"col-4 filler {{ checkup.userSurvey != '' ? 'full' : '' }}\"\n\t\t\t\t\t\t\t\tstyle=\"border-radius: 5px 0 0 5px;\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4 filler {{ checkAppointment(checkup.appointment) }}\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4 filler {{ checkup.feedback != '' ? 'full' : '' }}\"\n\t\t\t\t\t\t\t\tstyle=\"border-radius: 0 5px 5px 0;\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row progress-row\">\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\tQuestionnaire\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\tAppointment\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\tFeedback\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-2\">\n\t\t\t\t<div class=\"purp-grey white-link see-more\">\n\t\t\t\t\tWait for Partner to Accept Request\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"acceptModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"acceptModalTitle\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"acceptModalTitle\"> Accept Request </h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\tAccept <strong>{{ modalBody }}'s</strong> Request?\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n\t\t\t\t<button type=\"button\" class=\"btn main-btn\" (click)=\"acceptRequest()\"\n\t\t\t\t\tdata-dismiss=\"modal\">Accept</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"declineModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"declineModalTitle\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"declineModalTitle\"> Decline Request </h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\tDecline <strong>{{ modalBody }}'s</strong> Request?\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n\t\t\t\t<button type=\"button\" class=\"btn main-btn\" (click)=\"declineRequest()\"\n\t\t\t\t\tdata-dismiss=\"modal\">Decline</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"seeMoreModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"seeMoreTitle\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered modal-lg\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header see-more-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"seeMoreTitle\"> Status </h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\" style=\"color: white\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" style=\"padding: 0 1em 1em; background: #401958;\">\n\t\t\t\t<div class=\"modal-inside\">\n\t\t\t\t\t<h3 style=\"text-align: center\">\n\t\t\t\t\t\t<strong>{{ seeMore?.type | titlecase }}\n\t\t\t\t\t\t\t{{ company == 'canyonranch' ? 'Check In' : 'Checkup' }}</strong>\n\t\t\t\t\t\twith <strong>{{ seeMore?.partner }}</strong>\n\t\t\t\t\t</h3>\n\t\t\t\t\t<div class=\"row\" style=\"margin: 0 2em 1em;\">\n\t\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t\t<h4 class=\"status\">\n\t\t\t\t\t\t\t\tStatus\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<div class=\"indent\">\n\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\tclass=\"fa {{ seeMore?.userSurvey?.length > 0 ? 'fa-check-square' : 'fa-square' }}\"></i>\n\t\t\t\t\t\t\t\tQuestionnaire\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\tclass=\"fa {{ seeMore?.userConfirmAppointment ? 'fa-check-square' : 'fa-square' }}\"></i>\n\t\t\t\t\t\t\t\tConfirm Appointment\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i class=\"fa {{ seeMore?.userViewedFeedback ? 'fa-check-square' : 'fa-square' }}\"></i>\n\t\t\t\t\t\t\t\tViewed Feedback Report\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t\t<h4 class=\"status\">\n\t\t\t\t\t\t\t\tPartner Status\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<div class=\"indent\">\n\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\tclass=\"fa {{ seeMore?.partnerSurvey?.length > 0 ? 'fa-check-square' : 'fa-square' }}\"></i>\n\t\t\t\t\t\t\t\tQuestionnaire\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\tclass=\"fa {{ seeMore?.partnerConfirmAppointment ? 'fa-check-square' : 'fa-square' }}\"></i>\n\t\t\t\t\t\t\t\tConfirm Appointment\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\tclass=\"fa {{ seeMore?.partnerViewedFeedback ? 'fa-check-square' : 'fa-square' }}\"></i>\n\t\t\t\t\t\t\t\tViewed Feedback Report\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _front_facing_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./front-facing/home/home.component */ "./src/app/front-facing/home/home.component.ts");
/* harmony import */ var _front_facing_what_we_do_what_we_do_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./front-facing/what-we-do/what-we-do.component */ "./src/app/front-facing/what-we-do/what-we-do.component.ts");
/* harmony import */ var _front_facing_for_businesses_for_businesses_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./front-facing/for-businesses/for-businesses.component */ "./src/app/front-facing/for-businesses/for-businesses.component.ts");
/* harmony import */ var _front_facing_for_couples_for_couples_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./front-facing/for-couples/for-couples.component */ "./src/app/front-facing/for-couples/for-couples.component.ts");
/* harmony import */ var _front_facing_research_research_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./front-facing/research/research.component */ "./src/app/front-facing/research/research.component.ts");
/* harmony import */ var _front_facing_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./front-facing/who-we-are/who-we-are.component */ "./src/app/front-facing/who-we-are/who-we-are.component.ts");
/* harmony import */ var _front_facing_arammu_consultants_arammu_consultants_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./front-facing/arammu-consultants/arammu-consultants.component */ "./src/app/front-facing/arammu-consultants/arammu-consultants.component.ts");
/* harmony import */ var _front_facing_blog_blog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./front-facing/blog/blog.component */ "./src/app/front-facing/blog/blog.component.ts");
/* harmony import */ var _front_facing_terms_terms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./front-facing/terms/terms.component */ "./src/app/front-facing/terms/terms.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/user-dashboard/user-dashboard.component */ "./src/app/user/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _user_choose_type_choose_type_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/choose-type/choose-type.component */ "./src/app/user/choose-type/choose-type.component.ts");
/* harmony import */ var _user_choose_sub_type_choose_sub_type_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/choose-sub-type/choose-sub-type.component */ "./src/app/user/choose-sub-type/choose-sub-type.component.ts");
/* harmony import */ var _user_choose_clinician_choose_clinician_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/choose-clinician/choose-clinician.component */ "./src/app/user/choose-clinician/choose-clinician.component.ts");
/* harmony import */ var _user_schedule_clinician_schedule_clinician_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/schedule-clinician/schedule-clinician.component */ "./src/app/user/schedule-clinician/schedule-clinician.component.ts");
/* harmony import */ var _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _user_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/change-password/change-password.component */ "./src/app/user/change-password/change-password.component.ts");
/* harmony import */ var _user_professional_professional_survey_professional_survey_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/professional/professional-survey/professional-survey.component */ "./src/app/user/professional/professional-survey/professional-survey.component.ts");
/* harmony import */ var _user_professional_select_professional_partner_select_professional_partner_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user/professional/select-professional-partner/select-professional-partner.component */ "./src/app/user/professional/select-professional-partner/select-professional-partner.component.ts");
/* harmony import */ var _user_personal_personal_survey_personal_survey_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/personal/personal-survey/personal-survey.component */ "./src/app/user/personal/personal-survey/personal-survey.component.ts");
/* harmony import */ var _user_personal_select_personal_partner_select_personal_partner_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user/personal/select-personal-partner/select-personal-partner.component */ "./src/app/user/personal/select-personal-partner/select-personal-partner.component.ts");
/* harmony import */ var _clinician_clinician_dashboard_clinician_dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./clinician/clinician-dashboard/clinician-dashboard.component */ "./src/app/clinician/clinician-dashboard/clinician-dashboard.component.ts");
/* harmony import */ var _clinician_clinician_scheduler_clinician_scheduler_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./clinician/clinician-scheduler/clinician-scheduler.component */ "./src/app/clinician/clinician-scheduler/clinician-scheduler.component.ts");
/* harmony import */ var _clinician_clinician_view_apt_clinician_view_apt_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./clinician/clinician-view-apt/clinician-view-apt.component */ "./src/app/clinician/clinician-view-apt/clinician-view-apt.component.ts");
/* harmony import */ var _clinician_clinician_view_surveys_clinician_view_surveys_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./clinician/clinician-view-surveys/clinician-view-surveys.component */ "./src/app/clinician/clinician-view-surveys/clinician-view-surveys.component.ts");
/* harmony import */ var _clinician_clinician_feedback_report_clinician_feedback_report_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./clinician/clinician-feedback-report/clinician-feedback-report.component */ "./src/app/clinician/clinician-feedback-report/clinician-feedback-report.component.ts");
/* harmony import */ var _clinician_admin_admin_view_admin_view_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./clinician/admin/admin-view/admin-view.component */ "./src/app/clinician/admin/admin-view/admin-view.component.ts");
/* harmony import */ var _clinician_admin_admin_view_clinician_admin_view_clinician_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./clinician/admin/admin-view-clinician/admin-view-clinician.component */ "./src/app/clinician/admin/admin-view-clinician/admin-view-clinician.component.ts");
/* harmony import */ var _clinician_admin_admin_view_organization_admin_view_organization_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./clinician/admin/admin-view-organization/admin-view-organization.component */ "./src/app/clinician/admin/admin-view-organization/admin-view-organization.component.ts");
/* harmony import */ var _payments_make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./payments/make-payment/make-payment.component */ "./src/app/payments/make-payment/make-payment.component.ts");
/* harmony import */ var _canyonranch_register_register_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./canyonranch/register/register.component */ "./src/app/canyonranch/register/register.component.ts");




































const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'register', component: _user_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard', component: _user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["UserDashboardComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'clinician-dashboard', component: _clinician_clinician_dashboard_clinician_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["ClinicianDashboardComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'home', component: _front_facing_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'choose-type', component: _user_choose_type_choose_type_component__WEBPACK_IMPORTED_MODULE_16__["ChooseTypeComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'choose-sub-type', component: _user_choose_sub_type_choose_sub_type_component__WEBPACK_IMPORTED_MODULE_17__["ChooseSubTypeComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'professional-survey', component: _user_professional_professional_survey_professional_survey_component__WEBPACK_IMPORTED_MODULE_22__["ProfessionalSurveyComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'personal-survey', component: _user_personal_personal_survey_personal_survey_component__WEBPACK_IMPORTED_MODULE_24__["PersonalSurveyComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'select-personal-partner', component: _user_personal_select_personal_partner_select_personal_partner_component__WEBPACK_IMPORTED_MODULE_25__["SelectPersonalPartnerComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'select-professional-partner', component: _user_professional_select_professional_partner_select_professional_partner_component__WEBPACK_IMPORTED_MODULE_23__["SelectProfessionalPartnerComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'clinician-scheduler', component: _clinician_clinician_scheduler_clinician_scheduler_component__WEBPACK_IMPORTED_MODULE_27__["ClinicianSchedulerComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'what-we-do', component: _front_facing_what_we_do_what_we_do_component__WEBPACK_IMPORTED_MODULE_5__["WhatWeDoComponent"] },
    { path: 'for-businesses', component: _front_facing_for_businesses_for_businesses_component__WEBPACK_IMPORTED_MODULE_6__["ForBusinessesComponent"] },
    { path: 'for-couples', component: _front_facing_for_couples_for_couples_component__WEBPACK_IMPORTED_MODULE_7__["ForCouplesComponent"] },
    { path: 'research', component: _front_facing_research_research_component__WEBPACK_IMPORTED_MODULE_8__["ResearchComponent"] },
    { path: 'who-we-are', component: _front_facing_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_9__["WhoWeAreComponent"] },
    { path: 'arammu-consultants', component: _front_facing_arammu_consultants_arammu_consultants_component__WEBPACK_IMPORTED_MODULE_10__["ArammuConsultantsComponent"] },
    { path: 'blog', component: _front_facing_blog_blog_component__WEBPACK_IMPORTED_MODULE_11__["BlogComponent"] },
    { path: 'admin-view', component: _clinician_admin_admin_view_admin_view_component__WEBPACK_IMPORTED_MODULE_31__["AdminViewComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'admin-view-clinician/:id', component: _clinician_admin_admin_view_clinician_admin_view_clinician_component__WEBPACK_IMPORTED_MODULE_32__["AdminViewClinicianComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'admin-view-organization/:id', component: _clinician_admin_admin_view_organization_admin_view_organization_component__WEBPACK_IMPORTED_MODULE_33__["AdminViewOrganizationComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'choose-clinician/:id', component: _user_choose_clinician_choose_clinician_component__WEBPACK_IMPORTED_MODULE_18__["ChooseClinicianComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'schedule-clinician/:checkup/:clinician', component: _user_schedule_clinician_schedule_clinician_component__WEBPACK_IMPORTED_MODULE_19__["ScheduleClinicianComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'view-apt/:checkup', component: _clinician_clinician_view_apt_clinician_view_apt_component__WEBPACK_IMPORTED_MODULE_28__["ClinicianViewAptComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'view-surveys/:checkup', component: _clinician_clinician_view_surveys_clinician_view_surveys_component__WEBPACK_IMPORTED_MODULE_29__["ClinicianViewSurveysComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'view-feedback-report/:checkup', component: _clinician_clinician_feedback_report_clinician_feedback_report_component__WEBPACK_IMPORTED_MODULE_30__["ClinicianFeedbackReportComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'payment', component: _payments_make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_34__["MakePaymentComponent"] },
    { path: 'terms', component: _front_facing_terms_terms_component__WEBPACK_IMPORTED_MODULE_12__["TermsComponent"] },
    { path: 'change-password', component: _user_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_21__["ChangePasswordComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'forgot-password', component: _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__["ForgotPasswordComponent"] },
    // CANYON RANCH
    { path: 'canyonranch/login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], data: { company: 'canyonranch' } },
    { path: 'canyonranch/dashboard', component: _user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["UserDashboardComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], data: { company: 'canyonranch' } },
    { path: 'canyonranch/register', component: _canyonranch_register_register_component__WEBPACK_IMPORTED_MODULE_35__["CRRegisterComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], data: { company: 'canyonranch' } },
    {
        path: 'canyonranch/clinician-dashboard', component: _clinician_clinician_dashboard_clinician_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["ClinicianDashboardComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: { company: 'canyonranch' }
    },
    { path: '**', redirectTo: 'home' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n\tbackground: #80808014;\n\tpadding-bottom: 1.5%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxxQkFBcUI7Q0FDckIsb0JBQW9CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcblx0YmFja2dyb3VuZDogIzgwODA4MDE0O1xuXHRwYWRkaW5nLWJvdHRvbTogMS41JTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_2__);



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Arammu';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js");
/* harmony import */ var _tinkoff_angular_contenteditable_accessor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tinkoff/angular-contenteditable-accessor */ "./node_modules/@tinkoff/angular-contenteditable-accessor/fesm2015/tinkoff-angular-contenteditable-accessor.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _common_modal_action_modal_action_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/modal-action/modal-action.component */ "./src/app/common/modal-action/modal-action.component.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_checkup_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/checkup.service */ "./src/app/core/checkup.service.ts");
/* harmony import */ var _core_clinician_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/clinician.service */ "./src/app/core/clinician.service.ts");
/* harmony import */ var _core_error_handler_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/error-handler.service */ "./src/app/core/error-handler.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _front_facing_home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./front-facing/home/home.component */ "./src/app/front-facing/home/home.component.ts");
/* harmony import */ var _front_facing_header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./front-facing/header/header.component */ "./src/app/front-facing/header/header.component.ts");
/* harmony import */ var _front_facing_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./front-facing/footer/footer.component */ "./src/app/front-facing/footer/footer.component.ts");
/* harmony import */ var _front_facing_what_we_do_what_we_do_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./front-facing/what-we-do/what-we-do.component */ "./src/app/front-facing/what-we-do/what-we-do.component.ts");
/* harmony import */ var _front_facing_for_businesses_for_businesses_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./front-facing/for-businesses/for-businesses.component */ "./src/app/front-facing/for-businesses/for-businesses.component.ts");
/* harmony import */ var _front_facing_for_couples_for_couples_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./front-facing/for-couples/for-couples.component */ "./src/app/front-facing/for-couples/for-couples.component.ts");
/* harmony import */ var _front_facing_research_research_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./front-facing/research/research.component */ "./src/app/front-facing/research/research.component.ts");
/* harmony import */ var _front_facing_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./front-facing/who-we-are/who-we-are.component */ "./src/app/front-facing/who-we-are/who-we-are.component.ts");
/* harmony import */ var _front_facing_arammu_consultants_arammu_consultants_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./front-facing/arammu-consultants/arammu-consultants.component */ "./src/app/front-facing/arammu-consultants/arammu-consultants.component.ts");
/* harmony import */ var _front_facing_blog_blog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./front-facing/blog/blog.component */ "./src/app/front-facing/blog/blog.component.ts");
/* harmony import */ var _front_facing_terms_terms_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./front-facing/terms/terms.component */ "./src/app/front-facing/terms/terms.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./user/user-dashboard/user-dashboard.component */ "./src/app/user/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _user_choose_type_choose_type_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./user/choose-type/choose-type.component */ "./src/app/user/choose-type/choose-type.component.ts");
/* harmony import */ var _user_choose_sub_type_choose_sub_type_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./user/choose-sub-type/choose-sub-type.component */ "./src/app/user/choose-sub-type/choose-sub-type.component.ts");
/* harmony import */ var _user_choose_clinician_choose_clinician_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./user/choose-clinician/choose-clinician.component */ "./src/app/user/choose-clinician/choose-clinician.component.ts");
/* harmony import */ var _user_schedule_clinician_schedule_clinician_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./user/schedule-clinician/schedule-clinician.component */ "./src/app/user/schedule-clinician/schedule-clinician.component.ts");
/* harmony import */ var _user_professional_professional_survey_professional_survey_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./user/professional/professional-survey/professional-survey.component */ "./src/app/user/professional/professional-survey/professional-survey.component.ts");
/* harmony import */ var _user_professional_select_professional_partner_select_professional_partner_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./user/professional/select-professional-partner/select-professional-partner.component */ "./src/app/user/professional/select-professional-partner/select-professional-partner.component.ts");
/* harmony import */ var _user_personal_personal_survey_personal_survey_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./user/personal/personal-survey/personal-survey.component */ "./src/app/user/personal/personal-survey/personal-survey.component.ts");
/* harmony import */ var _user_personal_select_personal_partner_select_personal_partner_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./user/personal/select-personal-partner/select-personal-partner.component */ "./src/app/user/personal/select-personal-partner/select-personal-partner.component.ts");
/* harmony import */ var _clinician_clinician_dashboard_clinician_dashboard_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./clinician/clinician-dashboard/clinician-dashboard.component */ "./src/app/clinician/clinician-dashboard/clinician-dashboard.component.ts");
/* harmony import */ var _clinician_clinician_scheduler_clinician_scheduler_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./clinician/clinician-scheduler/clinician-scheduler.component */ "./src/app/clinician/clinician-scheduler/clinician-scheduler.component.ts");
/* harmony import */ var _clinician_clinician_view_apt_clinician_view_apt_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./clinician/clinician-view-apt/clinician-view-apt.component */ "./src/app/clinician/clinician-view-apt/clinician-view-apt.component.ts");
/* harmony import */ var _clinician_clinician_view_surveys_clinician_view_surveys_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./clinician/clinician-view-surveys/clinician-view-surveys.component */ "./src/app/clinician/clinician-view-surveys/clinician-view-surveys.component.ts");
/* harmony import */ var _clinician_clinician_feedback_report_clinician_feedback_report_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./clinician/clinician-feedback-report/clinician-feedback-report.component */ "./src/app/clinician/clinician-feedback-report/clinician-feedback-report.component.ts");
/* harmony import */ var _clinician_admin_admin_view_admin_view_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./clinician/admin/admin-view/admin-view.component */ "./src/app/clinician/admin/admin-view/admin-view.component.ts");
/* harmony import */ var _clinician_admin_admin_view_clinician_admin_view_clinician_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./clinician/admin/admin-view-clinician/admin-view-clinician.component */ "./src/app/clinician/admin/admin-view-clinician/admin-view-clinician.component.ts");
/* harmony import */ var _clinician_admin_admin_view_organization_admin_view_organization_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./clinician/admin/admin-view-organization/admin-view-organization.component */ "./src/app/clinician/admin/admin-view-organization/admin-view-organization.component.ts");
/* harmony import */ var _canyonranch_register_register_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./canyonranch/register/register.component */ "./src/app/canyonranch/register/register.component.ts");
/* harmony import */ var _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./user/forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _user_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./user/change-password/change-password.component */ "./src/app/user/change-password/change-password.component.ts");
/* harmony import */ var _payments_make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./payments/make-payment/make-payment.component */ "./src/app/payments/make-payment/make-payment.component.ts");

























































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
            _user_login_login_component__WEBPACK_IMPORTED_MODULE_33__["LoginComponent"],
            _user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_35__["UserDashboardComponent"],
            _user_register_register_component__WEBPACK_IMPORTED_MODULE_34__["RegisterComponent"],
            _front_facing_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
            _user_choose_type_choose_type_component__WEBPACK_IMPORTED_MODULE_36__["ChooseTypeComponent"],
            _user_choose_sub_type_choose_sub_type_component__WEBPACK_IMPORTED_MODULE_37__["ChooseSubTypeComponent"],
            _user_professional_professional_survey_professional_survey_component__WEBPACK_IMPORTED_MODULE_40__["ProfessionalSurveyComponent"],
            _user_personal_personal_survey_personal_survey_component__WEBPACK_IMPORTED_MODULE_42__["PersonalSurveyComponent"],
            _front_facing_header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"],
            _front_facing_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__["FooterComponent"],
            _user_personal_select_personal_partner_select_personal_partner_component__WEBPACK_IMPORTED_MODULE_43__["SelectPersonalPartnerComponent"],
            _clinician_clinician_dashboard_clinician_dashboard_component__WEBPACK_IMPORTED_MODULE_44__["ClinicianDashboardComponent"],
            _clinician_clinician_scheduler_clinician_scheduler_component__WEBPACK_IMPORTED_MODULE_45__["ClinicianSchedulerComponent"],
            _front_facing_what_we_do_what_we_do_component__WEBPACK_IMPORTED_MODULE_25__["WhatWeDoComponent"],
            _front_facing_for_businesses_for_businesses_component__WEBPACK_IMPORTED_MODULE_26__["ForBusinessesComponent"],
            _front_facing_for_couples_for_couples_component__WEBPACK_IMPORTED_MODULE_27__["ForCouplesComponent"],
            _front_facing_research_research_component__WEBPACK_IMPORTED_MODULE_28__["ResearchComponent"],
            _front_facing_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_29__["WhoWeAreComponent"],
            _front_facing_arammu_consultants_arammu_consultants_component__WEBPACK_IMPORTED_MODULE_30__["ArammuConsultantsComponent"],
            _front_facing_blog_blog_component__WEBPACK_IMPORTED_MODULE_31__["BlogComponent"],
            _clinician_admin_admin_view_admin_view_component__WEBPACK_IMPORTED_MODULE_49__["AdminViewComponent"],
            _clinician_admin_admin_view_clinician_admin_view_clinician_component__WEBPACK_IMPORTED_MODULE_50__["AdminViewClinicianComponent"],
            _clinician_admin_admin_view_organization_admin_view_organization_component__WEBPACK_IMPORTED_MODULE_51__["AdminViewOrganizationComponent"],
            _user_professional_select_professional_partner_select_professional_partner_component__WEBPACK_IMPORTED_MODULE_41__["SelectProfessionalPartnerComponent"],
            _user_choose_clinician_choose_clinician_component__WEBPACK_IMPORTED_MODULE_38__["ChooseClinicianComponent"],
            _user_schedule_clinician_schedule_clinician_component__WEBPACK_IMPORTED_MODULE_39__["ScheduleClinicianComponent"],
            _clinician_clinician_view_apt_clinician_view_apt_component__WEBPACK_IMPORTED_MODULE_46__["ClinicianViewAptComponent"],
            _clinician_clinician_view_surveys_clinician_view_surveys_component__WEBPACK_IMPORTED_MODULE_47__["ClinicianViewSurveysComponent"],
            _clinician_clinician_feedback_report_clinician_feedback_report_component__WEBPACK_IMPORTED_MODULE_48__["ClinicianFeedbackReportComponent"],
            _front_facing_terms_terms_component__WEBPACK_IMPORTED_MODULE_32__["TermsComponent"],
            _canyonranch_register_register_component__WEBPACK_IMPORTED_MODULE_52__["CRRegisterComponent"],
            _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_53__["ForgotPasswordComponent"],
            _user_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_54__["ChangePasswordComponent"],
            _payments_make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_55__["MakePaymentComponent"],
            _common_modal_action_modal_action_component__WEBPACK_IMPORTED_MODULE_14__["ModalActionComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["routes"], { useHash: false }),
            _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_10__["ClipboardModule"],
            _tinkoff_angular_contenteditable_accessor__WEBPACK_IMPORTED_MODULE_11__["ContenteditableValueAccessorModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"]
        ],
        providers: [
            _core_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
            _core_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"],
            _core_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"],
            _core_checkup_service__WEBPACK_IMPORTED_MODULE_18__["CheckupService"],
            _core_clinician_service__WEBPACK_IMPORTED_MODULE_19__["ClinicianService"],
            _core_error_handler_service__WEBPACK_IMPORTED_MODULE_20__["ErrorHandlerService"],
            { provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["FirestoreSettingsToken"], useValue: {} }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]],
        entryComponents: [_common_modal_action_modal_action_component__WEBPACK_IMPORTED_MODULE_14__["ModalActionComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/canyonranch/register/register.component.css":
/*!*************************************************************!*\
  !*** ./src/app/canyonranch/register/register.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n\tfont-weight: 500;\n\tfont-size: 18px;\n\tmargin-bottom: 0;\n}\n\n.btn {\n\twidth: 100%;\n}\n\n.form-check {\n\tmargin-top: 2.25em;\n}\n\n.inner {\n\tborder-radius: 5px;\n\tborder: 1px solid #401958;\n\tpadding: 1em;\n}\n\n.square {\n\tfont-weight: normal;\n}\n\n.larger {\n\tfont-size: 1.25rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FueW9ucmFuY2gvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jYW55b25yYW5jaC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRmb250LXNpemU6IDE4cHg7XG5cdG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5idG4ge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tY2hlY2sge1xuXHRtYXJnaW4tdG9wOiAyLjI1ZW07XG59XG5cbi5pbm5lciB7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Ym9yZGVyOiAxcHggc29saWQgIzQwMTk1ODtcblx0cGFkZGluZzogMWVtO1xufVxuXG4uc3F1YXJlIHtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmxhcmdlciB7XG5cdGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/canyonranch/register/register.component.ts":
/*!************************************************************!*\
  !*** ./src/app/canyonranch/register/register.component.ts ***!
  \************************************************************/
/*! exports provided: CRRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRRegisterComponent", function() { return CRRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let CRRegisterComponent = class CRRegisterComponent {
    constructor(authService, fb) {
        this.authService = authService;
        this.fb = fb;
        this.showDetails = false;
        this.btnText = 'Sign Us Up';
        this.disableBtn = false;
        this.createForm();
        this.showDetails = false;
        this.btnText = 'Sign Us Up';
    }
    createForm() {
        this.registerForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['password', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirmPassword: ['password', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            partnerFirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            partnerLastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            partnerPassword: ['password', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            partnerConfirmPassword: ['password', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            location: ['lenox', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            clinician: ['lenox', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            aptDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        }, { validator: [this.mustMatch('password', 'confirmPassword')] });
    }
    tryRegister(value) {
        if (!this.registerForm.invalid) {
            this.btnText = 'Registering...';
            this.disableBtn = true;
            this.authService.doCRRegister(value)
                .then((res) => {
                console.log(res);
                if (res) {
                    [this.user1, this.user2] = res;
                    console.log(res);
                    this.showDetails = true;
                    this.btnText = 'Complete!';
                }
                else
                    alert('Something went wrong creating new accounts, please contact info@arammu.org');
            }).catch(err => alert(err.message));
        }
    }
    mustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch)
                return;
            if (control.value !== matchingControl.value)
                matchingControl.setErrors({ mustMatch: true });
            else
                matchingControl.setErrors(null);
        };
    }
    reset() {
        this.createForm();
        this.user1 = null;
        this.user2 = null;
        this.showDetails = false;
        this.btnText = 'Sign Us Up';
        this.disableBtn = false;
    }
};
CRRegisterComponent.ctorParameters = () => [
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
CRRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/canyonranch/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/canyonranch/register/register.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], CRRegisterComponent);



/***/ }),

/***/ "./src/app/clinician/admin/admin-view-clinician/admin-view-clinician.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/clinician/admin/admin-view-clinician/admin-view-clinician.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status {\n\tfloat: right;\n\tfont-size: 1.5vw;\n}\n.status::before {\n\tcontent: 'Status:';\n\tcolor: black;\n\tfont-weight: bold;\n}\n.active {\n\tcolor: rgb(0, 121, 0);\n}\n.pending {\n\tcolor: rgb(105, 0, 105);\n}\n.registered {\n\tcolor: rgb(217, 140, 0);\n}\n.inactive {\n\tcolor: rgb(181, 0, 0);\n}\n.img-fluid {\n\tmax-width: 60%;\n\tmargin: 0 20%;\n}\n.actions {\n\tfloat: right;\n\tpadding: 0.15em 1em;\n\tborder: none;\n\twidth: auto !important;\n\tborder-radius: 0.25em;\n\tmargin-right: .5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljaWFuL2FkbWluL2FkbWluLXZpZXctY2xpbmljaWFuL2FkbWluLXZpZXctY2xpbmljaWFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQyx1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixzQkFBc0I7Q0FDdEIscUJBQXFCO0NBQ3JCLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NsaW5pY2lhbi9hZG1pbi9hZG1pbi12aWV3LWNsaW5pY2lhbi9hZG1pbi12aWV3LWNsaW5pY2lhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cyB7XG5cdGZsb2F0OiByaWdodDtcblx0Zm9udC1zaXplOiAxLjV2dztcbn1cbi5zdGF0dXM6OmJlZm9yZSB7XG5cdGNvbnRlbnQ6ICdTdGF0dXM6Jztcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cbi5hY3RpdmUge1xuXHRjb2xvcjogcmdiKDAsIDEyMSwgMCk7XG59XG4ucGVuZGluZyB7XG5cdGNvbG9yOiByZ2IoMTA1LCAwLCAxMDUpO1xufVxuLnJlZ2lzdGVyZWQge1xuXHRjb2xvcjogcmdiKDIxNywgMTQwLCAwKTtcbn1cbi5pbmFjdGl2ZSB7XG5cdGNvbG9yOiByZ2IoMTgxLCAwLCAwKTtcbn1cbi5pbWctZmx1aWQge1xuXHRtYXgtd2lkdGg6IDYwJTtcblx0bWFyZ2luOiAwIDIwJTtcbn1cbi5hY3Rpb25zIHtcblx0ZmxvYXQ6IHJpZ2h0O1xuXHRwYWRkaW5nOiAwLjE1ZW0gMWVtO1xuXHRib3JkZXI6IG5vbmU7XG5cdHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcblx0bWFyZ2luLXJpZ2h0OiAuNWVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/clinician/admin/admin-view-clinician/admin-view-clinician.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/clinician/admin/admin-view-clinician/admin-view-clinician.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AdminViewClinicianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminViewClinicianComponent", function() { return AdminViewClinicianComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_clinician_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/clinician.service */ "./src/app/core/clinician.service.ts");




let AdminViewClinicianComponent = class AdminViewClinicianComponent {
    constructor(route, clinicianService) {
        this.route = route;
        this.clinicianService = clinicianService;
        this.modalTitle = '';
        this.modalBody = '';
        this.status = 'inactive';
        this.notes = '';
        this.showModal = false;
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.clinicianService.getClinician(params['id'])
                    .then(res => {
                    this.clinician = res;
                    this.status = this.clinician.active ? 'active' :
                        (this.clinician.pending ? 'pending' :
                            (this.clinician.registered ? 'registered' : 'inactive'));
                    // this.status = 'pending';
                }).catch(err => {
                    this.error(err);
                });
            }
            else {
                this.error('no params');
            }
        });
        this.showModal = false;
    }
    declineClinician() {
        this.clinician.pending = false;
        this.clinician.registered = true;
        this.clinician.active = false;
        this.clinician.activationNotes = this.notes;
        this.clinicianService.updateClinician(this.clinician)
            .then(_ => {
            this.modalTitle = 'Denied!';
            this.modalBody = `Successfully denied activation to ${this.clinician.firstName} ${this.clinician.lastName}.`;
            this.showModal = true;
        }).catch(err => {
            this.error(err);
        });
    }
    acceptClinician() {
        this.clinician.pending = false;
        this.clinician.registered = true;
        this.clinician.active = true;
        this.clinicianService.updateClinician(this.clinician)
            .then(_ => {
            this.modalTitle = 'Success!';
            this.modalBody = `Successfully activated ${this.clinician.firstName} ${this.clinician.lastName}.`;
            this.showModal = true;
        }).catch(err => {
            this.error(err);
        });
    }
    error(err) {
        console.error(err);
        this.modalTitle = 'Error!';
        this.modalBody = 'Unfortunately something went wrong! Please try again later or email info@arammu.org for support.';
        this.showModal = true;
    }
    ngOnInit() {
    }
};
AdminViewClinicianComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_clinician_service__WEBPACK_IMPORTED_MODULE_3__["ClinicianService"] }
];
AdminViewClinicianComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-view-clinician',
        template: __webpack_require__(/*! raw-loader!./admin-view-clinician.component.html */ "./node_modules/raw-loader/index.js!./src/app/clinician/admin/admin-view-clinician/admin-view-clinician.component.html"),
        styles: [__webpack_require__(/*! ./admin-view-clinician.component.css */ "./src/app/clinician/admin/admin-view-clinician/admin-view-clinician.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_clinician_service__WEBPACK_IMPORTED_MODULE_3__["ClinicianService"]])
], AdminViewClinicianComponent);



/***/ }),

/***/ "./src/app/clinician/admin/admin-view-organization/admin-view-organization.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/clinician/admin/admin-view-organization/admin-view-organization.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaW5pY2lhbi9hZG1pbi9hZG1pbi12aWV3LW9yZ2FuaXphdGlvbi9hZG1pbi12aWV3LW9yZ2FuaXphdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/clinician/admin/admin-view-organization/admin-view-organization.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/clinician/admin/admin-view-organization/admin-view-organization.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AdminViewOrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminViewOrganizationComponent", function() { return AdminViewOrganizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_clinician_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/clinician.service */ "./src/app/core/clinician.service.ts");




let AdminViewOrganizationComponent = class AdminViewOrganizationComponent {
    constructor(router, route, clinicianService) {
        this.router = router;
        this.route = route;
        this.clinicianService = clinicianService;
        this.title = 'Organization View';
        this.modalTitle = '';
        this.modalBody = '';
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.clinicianService.getOrganization(params['id'])
                    .then(res => {
                    this.organization = res;
                    this.title = this.organization.name;
                }).catch(err => {
                    this.error(err);
                });
            }
            else {
                this.error('no params');
            }
        });
    }
    error(err) {
        console.error(err);
        this.modalTitle = 'Error!';
        this.modalBody = 'Unfortunately something went wrong! Please try again later or email info@arammu.org for support.';
        $('#infoModal').modal('show');
        this.router.navigate(['/admin-view']);
    }
    ngOnInit() {
    }
};
AdminViewOrganizationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_clinician_service__WEBPACK_IMPORTED_MODULE_3__["ClinicianService"] }
];
AdminViewOrganizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-view-organization',
        template: __webpack_require__(/*! raw-loader!./admin-view-organization.component.html */ "./node_modules/raw-loader/index.js!./src/app/clinician/admin/admin-view-organization/admin-view-organization.component.html"),
        styles: [__webpack_require__(/*! ./admin-view-organization.component.css */ "./src/app/clinician/admin/admin-view-organization/admin-view-organization.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_clinician_service__WEBPACK_IMPORTED_MODULE_3__["ClinicianService"]])
], AdminViewOrganizationComponent);



/***/ }),

/***/ "./src/app/clinician/admin/admin-view/admin-view.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/clinician/admin/admin-view/admin-view.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title div {\n\tfont-weight: 600;\n\ttext-transform: uppercase;\n}\n\n.clinician-row {\n\tmargin: 0.15em -15px;\n}\n\n.clinician-row:hover {\n\tcolor: white;\n\tbackground: #401958;\n\tcursor: pointer;\n}\n\n.fa-pencil, .fa-trash {\n\tfloat: right;\n\ttransition: 0.5s;\n\tmargin: .25em .75em;\n}\n\n.fa-pencil:hover {\n\tcolor: green;\n\topacity: .8;\n\tcursor: pointer;\n}\n\n.fa-trash:hover {\n\tcolor: red;\n\topacity: .8;\n\tcursor: pointer;\n}\n\nh4 {\n\tfont-weight: 600;\n}\n\nh3 {\n\tcolor: darkgray;\n\ttext-align: left;\n}\n\n.choice {\n\tcolor: #401958;\n\tbackground: white;\n\tpadding: .2em;\n\tfloat: right;\n\tdisplay: inline-block;\n\tfont-weight: 400;\n\ttext-align: center;\n\tvertical-align: middle;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\tbackground-color: transparent;\n\tborder: 1px solid transparent;\n\tpadding: 0.375rem 0.75rem;\n\tfont-size: 1rem;\n\tline-height: 1.5;\n\tborder-radius: 0.25rem;\n\ttransition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.choice:hover {\n\tcursor: pointer;\n}\n\n.selected {\n\tbackground: #401958 !important;\n\tcolor: white !important;\n}\n\n.col-4, .col-3 {\n\toverflow-wrap: break-word;\n}\n\n.container-fluid {\n\tpadding: 0 5%;\n}\n\n/*\n.active {\nbackground: #401958;\n}\n.registered {\nbackground: rgba(64, 25, 88, 0.37);\ncolor: rgba(0, 0, 0, 0.55);\n}\n.inactive {\nbackground: rgba(198, 198, 198, 0.62);\ncolor: rgba(0, 0, 0, 0.55);\n}\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljaWFuL2FkbWluL2FkbWluLXZpZXcvYWRtaW4tdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLFdBQVc7Q0FDWCxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLFlBQVk7Q0FDWixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLDZCQUE2QjtDQUM3Qiw2QkFBNkI7Q0FDN0IseUJBQXlCO0NBQ3pCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsc0JBQXNCO0NBQ3RCLHFJQUFxSTtBQUN0STs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBOzs7Ozs7Ozs7Ozs7Q0FZQyIsImZpbGUiOiJzcmMvYXBwL2NsaW5pY2lhbi9hZG1pbi9hZG1pbi12aWV3L2FkbWluLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSBkaXYge1xuXHRmb250LXdlaWdodDogNjAwO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uY2xpbmljaWFuLXJvdyB7XG5cdG1hcmdpbjogMC4xNWVtIC0xNXB4O1xufVxuXG4uY2xpbmljaWFuLXJvdzpob3ZlciB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0YmFja2dyb3VuZDogIzQwMTk1ODtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmEtcGVuY2lsLCAuZmEtdHJhc2gge1xuXHRmbG9hdDogcmlnaHQ7XG5cdHRyYW5zaXRpb246IDAuNXM7XG5cdG1hcmdpbjogLjI1ZW0gLjc1ZW07XG59XG5cbi5mYS1wZW5jaWw6aG92ZXIge1xuXHRjb2xvcjogZ3JlZW47XG5cdG9wYWNpdHk6IC44O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS10cmFzaDpob3ZlciB7XG5cdGNvbG9yOiByZWQ7XG5cdG9wYWNpdHk6IC44O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmg0IHtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDMge1xuXHRjb2xvcjogZGFya2dyYXk7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jaG9pY2Uge1xuXHRjb2xvcjogIzQwMTk1ODtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdHBhZGRpbmc6IC4yZW07XG5cdGZsb2F0OiByaWdodDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0cGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRsaW5lLWhlaWdodDogMS41O1xuXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuXHR0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2hvaWNlOmhvdmVyIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VsZWN0ZWQge1xuXHRiYWNrZ3JvdW5kOiAjNDAxOTU4ICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uY29sLTQsIC5jb2wtMyB7XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuXHRwYWRkaW5nOiAwIDUlO1xufVxuXG4vKlxuLmFjdGl2ZSB7XG5iYWNrZ3JvdW5kOiAjNDAxOTU4O1xufVxuLnJlZ2lzdGVyZWQge1xuYmFja2dyb3VuZDogcmdiYSg2NCwgMjUsIDg4LCAwLjM3KTtcbmNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xufVxuLmluYWN0aXZlIHtcbmJhY2tncm91bmQ6IHJnYmEoMTk4LCAxOTgsIDE5OCwgMC42Mik7XG5jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU1KTtcbn1cbiovXG4iXX0= */"

/***/ }),

/***/ "./src/app/clinician/admin/admin-view/admin-view.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/clinician/admin/admin-view/admin-view.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminViewComponent", function() { return AdminViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_clinician_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/clinician.service */ "./src/app/core/clinician.service.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _core_all_models_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/all-models.model */ "./src/app/core/all-models.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let AdminViewComponent = class AdminViewComponent {
    constructor(clinicianService, authService, fb) {
        this.clinicianService = clinicianService;
        this.authService = authService;
        this.fb = fb;
        this.clinicians = [];
        this.filteredClinicians = [];
        this.clinicianFilter = '';
        this.organizations = [];
        this.filteredOrganizations = [];
        this.organizationFilter = '';
        this.modalTitle = '';
        this.modalBody = '';
        this.check = false;
        this.dc = false;
        this.do = false;
        this.viewOrg = true;
        this.title = 'Organization List';
        this.createForms();
    }
    ngOnInit() {
        this.clinicianService.getAllClinicians()
            .subscribe(data => {
            this.clinicians = data;
            this.filterCli(this.clinicianFilter);
        });
        this.clinicianService.getAllOrganization()
            .subscribe(data => {
            this.organizations = data;
            // 			this.filterOrg(this.organizationFilter);
        });
    }
    createForms() {
        this.newClinicianForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            organization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]],
            canRefer: [false],
            referCode: ['']
        }, { validator: [this.mustMatch('password', 'confirmPassword')] });
        this.newOrganizationForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            contactName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            contactEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    mustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch)
                return;
            if (control.value !== matchingControl.value)
                matchingControl.setErrors({ mustMatch: true });
            else
                matchingControl.setErrors(null);
        };
    }
    // 	filterOrg(sortBy) {
    // 		this.clinicianFilter = sortBy;
    // 		switch(sortBy) {
    // 			case 'active':
    // 				this.filteredClinicians = this.clinicians.filter(e => e.active == true);
    // 				break;
    // 			case 'pending':
    // 				this.filteredClinicians = this.clinicians.filter(e => e.pending == true);
    // 				break;
    // 			case 'registered':
    // 				this.filteredClinicians = this.clinicians.filter(e => e.registered == true);
    // 				break;
    // 			case 'inactive':
    // 				this.filteredClinicians = this.clinicians.filter(e => e.active == false && e.pending == false && e.registered == false);
    // 				break;
    // 			default:
    // 				this.filteredClinicians = this.clinicians;
    // 				break;
    // 		}
    // 	}
    filterCli(sortBy) {
        this.clinicianFilter = sortBy;
        switch (sortBy) {
            case 'active':
                this.filteredClinicians = this.clinicians.filter(e => e.active == true);
                break;
            case 'pending':
                this.filteredClinicians = this.clinicians.filter(e => e.pending == true);
                break;
            case 'registered':
                this.filteredClinicians = this.clinicians.filter(e => e.registered == true);
                break;
            case 'inactive':
                this.filteredClinicians = this.clinicians.filter(e => e.active == false && e.pending == false && e.registered == false);
                break;
            default:
                this.filteredClinicians = this.clinicians;
                break;
        }
    }
    getOrgName(id) {
        return this.organizations.filter(e => e.id === id)[0].name;
    }
    addClinician(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            value.clinician = true;
            if (!this.newClinicianForm.invalid) {
                const newClinician = new _core_all_models_model__WEBPACK_IMPORTED_MODULE_4__["ClinicianModel"](value.firstName, value.lastName, value.email.toLowerCase(), value.organization, '');
                newClinician.canRefer = value.canRefer;
                if (value.canRefer && !value.referCode)
                    newClinician.referCode = value.email;
                const [err, res] = yield this.authService.registerClinician(newClinician, value.password);
                if (!err) {
                    this.modalTitle = 'Success!';
                    this.modalBody = `${value.firstName} ${value.lastName} has been added as a Clinician`;
                    $('#infoModal').modal('show');
                }
                else
                    this.err(res, value);
            }
        });
    }
    err(err, value) {
        this.check = false;
        this.modalTitle = 'Error';
        this.modalBody = `At this time, ${value.firstName} ${value.lastName} could not be added as a Clinician`;
        $('#infoModal').modal('show');
        console.error(err);
    }
    addOrganization(value) {
        this.clinicianService.addOrganization(value)
            .then(() => {
            this.check = false;
            this.modalTitle = 'Success!';
            this.modalBody = `${value.name} has been added as a Organization`;
            $('#infoModal').modal('show');
        }).catch(err => {
            this.check = false;
            this.modalTitle = 'Error';
            this.modalBody = `At this time, ${value.name} could not be added as a Organization`;
            $('#infoModal').modal('show');
            console.error(err);
        });
    }
    deleteClinician() {
        this.clinicianService.deleteClinician(this.delClinician.id)
            .then(() => {
            this.check = false;
            this.modalTitle = 'Deleted';
            this.modalBody = `${this.delClinician.firstName} ${this.delClinician.lastName} has been deleted as a Clinician`;
            $('#infoModal').modal('show');
        }).catch(err => {
            this.check = false;
            this.modalTitle = 'Error';
            this.modalBody = `At this time, ${this.delClinician.firstName} ${this.delClinician.lastName} could not be deleted as a Clinician`;
            $('#infoModal').modal('show');
            console.error(err);
        });
        // TODO: make sure no breaking occurences of clinician
    }
    deleteOrganization() {
        this.clinicianService.deleteOrganization(this.delOrganization.id)
            .then(() => {
            this.check = false;
            this.modalTitle = 'Deleted';
            this.modalBody = `${this.delOrganization.name} has been deleted as a Organization`;
            $('#infoModal').modal('show');
        }).catch(err => {
            this.check = false;
            this.modalTitle = 'Error';
            this.modalBody = `At this time, ${this.delOrganization.name} could not be deleted as a Organization`;
            $('#infoModal').modal('show');
            console.error(err);
        });
        // TODO: make sure no breaking occurences of clinician
    }
    editOrg(org) {
        this.do = true;
        this.dc = false;
        this.delOrganization = org;
        this.check = true;
        this.modalTitle = 'Delete?';
        this.modalBody = `Are you sure you want to permanently delete the Organization ${org.name}?`;
        $('#infoModal').modal('show');
    }
    editCli(cli) {
        this.do = false;
        this.dc = true;
        this.delClinician = cli;
        this.check = true;
        this.modalTitle = 'Delete?';
        this.modalBody = `Are you sure you want to permanently delete the Clinician ${cli.firstName}  ${cli.lastName}?`;
        $('#infoModal').modal('show');
    }
};
AdminViewComponent.ctorParameters = () => [
    { type: _core_clinician_service__WEBPACK_IMPORTED_MODULE_2__["ClinicianService"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
AdminViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-view',
        template: __webpack_require__(/*! raw-loader!./admin-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/clinician/admin/admin-view/admin-view.component.html"),
        styles: [__webpack_require__(/*! ./admin-view.component.css */ "./src/app/clinician/admin/admin-view/admin-view.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_clinician_service__WEBPACK_IMPORTED_MODULE_2__["ClinicianService"], _core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
], AdminViewComponent);



/***/ }),

/***/ "./src/app/clinician/clinician-dashboard/clinician-dashboard.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/clinician/clinician-dashboard/clinician-dashboard.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".schedule {\n\tfloat: right;\n\tfont-size: 1vw;\n}\n\n.image {\n\twidth: 100%\n}\n\n.large {\n\tmargin-top: .5em;\n\ttext-align: center;\n\tfont-size: 8vw;\n\ttext-transform: uppercase;\n\tcolor: lightgrey;\n\tletter-spacing: .1em;\n\tfont-weight: 300;\n}\n\n.choose {\n\ttext-align: center;\n\tfont-size: 3vw;\n\ttext-transform: uppercase;\n\tcolor: lightgrey;\n\tletter-spacing: .1em;\n\tfont-weight: 500;\n\tborder: 5px solid lightgrey;\n\tmargin: 0 1em;\n\tcursor: pointer;\n}\n\n.logout {\n\tcolor: #401958;\n}\n\n.title {\n\tfont-weight: 400;\n\tcolor: white;\n\tfont-size: 1em;\n\ttext-align: center;\n}\n\n.purp, .grey, .purp-grey {\n\tcolor: white;\n\tpadding: 1em;\n\tmargin: 0 .5em;\n\ttext-transform: uppercase;\n\tletter-spacing: .1em;\n\tfont-size: .95vw;\n\theight: 100%;\n}\n\n.purp {\n\tbackground: rgb(64, 25, 88);\n}\n\n.grey {\n\tbackground: rgb(161, 161, 161);\n}\n\n.purp-grey {\n\tbackground: rgb(108, 86, 121);\n}\n\n.parent-table {\n\tcolor: white;\n\tmargin: 0;\n\tmargin-bottom: 1em;\n\tpadding: 0;\n\tline-height: 2vw;\n}\n\n.filler {\n\tbackground: lightgrey;\n\tpadding: .35em;\n}\n\n.see-more {\n\tborder: none;\n\tpadding: 1em;\n}\n\n.next-step div {\n\ttext-transform: capitalize;\n\tfont-size: .85vw;\n}\n\n.full {\n\tbackground: teal;\n\tborder: teal;\n}\n\n.half {\n\tbackground: darkgrey;\n\tborder: darkgrey;\n}\n\n.small-grey {\n\theight: 45%;\n\ttext-align: center;\n\twidth: 100%;\n\tmargin: 0;\n}\n\n.right-white {\n\tborder: none;\n}\n\n.right-white:after {\n\tcontent: \"\";\n\tbackground: white;\n\tposition: absolute;\n\tbottom: 10%;\n\tright: 0;\n\theight: 80%;\n\twidth: 1px;\n}\n\n.bottom {\n\tposition: absolute;\n\tbottom: 0;\n\twidth: 100%;\n}\n\n.progress-row {\n\tmargin: 0;\n\tpadding-top: .75em;\n}\n\n.col-9, .col-2, .col-1, .col-10 {\n\tpadding: 0;\n}\n\n.main-btn {\n\tbackground-color: #401958;\n\tborder-color: #401958;\n\tcolor: white;\n}\n\n.white-link {\n\tcolor: white !important;\n\tfont-size: .85vw !important;\n}\n\n.see-more-header {\n\tbackground: #401958;\n\tcolor: white;\n\tborder-radius: 0;\n\tborder-bottom: 0;\n\tfont-size: 1.5em;\n\tpadding-left: 1em;\n}\n\n.indent {\n\tmargin-left: 1vw;\n}\n\n.status {\n\ttext-decoration: underline;\n\tmargin: .5em 0;\n}\n\n.modal-inside {\n\tbackground: white;\n\tpadding: 2em;\n}\n\n.checkup-box {\n\tpadding: 0;\n\tmargin-left: 0;\n}\n\n.checkup-box .purp {\n\tmargin-left: 0;\n}\n\n.checkup-box .col-6 {\n\tfont-size: 1.25vw;\n}\n\n.title {\n\ttext-transform: uppercase;\n\tmargin-bottom: 0;\n\tcolor: black;\n\tfont-size: .95vw;\n}\n\n.title .col-2 {\n\tpadding-left: .5em;\n}\n\n.col-2 .purp {\n\ttext-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljaWFuL2NsaW5pY2lhbi1kYXNoYm9hcmQvY2xpbmljaWFuLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLGNBQWM7QUFDZjs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCx5QkFBeUI7Q0FDekIsZ0JBQWdCO0NBQ2hCLG9CQUFvQjtDQUNwQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLHlCQUF5QjtDQUN6QixnQkFBZ0I7Q0FDaEIsb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQiwyQkFBMkI7Q0FDM0IsYUFBYTtDQUNiLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGNBQWM7Q0FDZCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLGNBQWM7Q0FDZCx5QkFBeUI7Q0FDekIsb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQywyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osU0FBUztDQUNULGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixZQUFZO0FBQ2I7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsUUFBUTtDQUNSLFdBQVc7Q0FDWCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFdBQVc7QUFDWjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIscUJBQXFCO0NBQ3JCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NsaW5pY2lhbi9jbGluaWNpYW4tZGFzaGJvYXJkL2NsaW5pY2lhbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2hlZHVsZSB7XG5cdGZsb2F0OiByaWdodDtcblx0Zm9udC1zaXplOiAxdnc7XG59XG5cbi5pbWFnZSB7XG5cdHdpZHRoOiAxMDAlXG59XG5cbi5sYXJnZSB7XG5cdG1hcmdpbi10b3A6IC41ZW07XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1zaXplOiA4dnc7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGNvbG9yOiBsaWdodGdyZXk7XG5cdGxldHRlci1zcGFjaW5nOiAuMWVtO1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuXG4uY2hvb3NlIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDN2dztcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Y29sb3I6IGxpZ2h0Z3JleTtcblx0bGV0dGVyLXNwYWNpbmc6IC4xZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGJvcmRlcjogNXB4IHNvbGlkIGxpZ2h0Z3JleTtcblx0bWFyZ2luOiAwIDFlbTtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9nb3V0IHtcblx0Y29sb3I6ICM0MDE5NTg7XG59XG5cbi50aXRsZSB7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAxZW07XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnB1cnAsIC5ncmV5LCAucHVycC1ncmV5IHtcblx0Y29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiAxZW07XG5cdG1hcmdpbjogMCAuNWVtO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRsZXR0ZXItc3BhY2luZzogLjFlbTtcblx0Zm9udC1zaXplOiAuOTV2dztcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG4ucHVycCB7XG5cdGJhY2tncm91bmQ6IHJnYig2NCwgMjUsIDg4KTtcbn1cblxuLmdyZXkge1xuXHRiYWNrZ3JvdW5kOiByZ2IoMTYxLCAxNjEsIDE2MSk7XG59XG5cbi5wdXJwLWdyZXkge1xuXHRiYWNrZ3JvdW5kOiByZ2IoMTA4LCA4NiwgMTIxKTtcbn1cblxuLnBhcmVudC10YWJsZSB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0bWFyZ2luOiAwO1xuXHRtYXJnaW4tYm90dG9tOiAxZW07XG5cdHBhZGRpbmc6IDA7XG5cdGxpbmUtaGVpZ2h0OiAydnc7XG59XG5cbi5maWxsZXIge1xuXHRiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG5cdHBhZGRpbmc6IC4zNWVtO1xufVxuXG4uc2VlLW1vcmUge1xuXHRib3JkZXI6IG5vbmU7XG5cdHBhZGRpbmc6IDFlbTtcbn1cblxuLm5leHQtc3RlcCBkaXYge1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0Zm9udC1zaXplOiAuODV2dztcbn1cblxuLmZ1bGwge1xuXHRiYWNrZ3JvdW5kOiB0ZWFsO1xuXHRib3JkZXI6IHRlYWw7XG59XG5cbi5oYWxmIHtcblx0YmFja2dyb3VuZDogZGFya2dyZXk7XG5cdGJvcmRlcjogZGFya2dyZXk7XG59XG5cbi5zbWFsbC1ncmV5IHtcblx0aGVpZ2h0OiA0NSU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbjogMDtcbn1cblxuLnJpZ2h0LXdoaXRlIHtcblx0Ym9yZGVyOiBub25lO1xufVxuXG4ucmlnaHQtd2hpdGU6YWZ0ZXIge1xuXHRjb250ZW50OiBcIlwiO1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDEwJTtcblx0cmlnaHQ6IDA7XG5cdGhlaWdodDogODAlO1xuXHR3aWR0aDogMXB4O1xufVxuXG4uYm90dG9tIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDA7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZ3Jlc3Mtcm93IHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nLXRvcDogLjc1ZW07XG59XG5cbi5jb2wtOSwgLmNvbC0yLCAuY29sLTEsIC5jb2wtMTAge1xuXHRwYWRkaW5nOiAwO1xufVxuXG4ubWFpbi1idG4ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDAxOTU4O1xuXHRib3JkZXItY29sb3I6ICM0MDE5NTg7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuLndoaXRlLWxpbmsge1xuXHRjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcblx0Zm9udC1zaXplOiAuODV2dyAhaW1wb3J0YW50O1xufVxuXG4uc2VlLW1vcmUtaGVhZGVyIHtcblx0YmFja2dyb3VuZDogIzQwMTk1ODtcblx0Y29sb3I6IHdoaXRlO1xuXHRib3JkZXItcmFkaXVzOiAwO1xuXHRib3JkZXItYm90dG9tOiAwO1xuXHRmb250LXNpemU6IDEuNWVtO1xuXHRwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cblxuLmluZGVudCB7XG5cdG1hcmdpbi1sZWZ0OiAxdnc7XG59XG5cbi5zdGF0dXMge1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0bWFyZ2luOiAuNWVtIDA7XG59XG5cbi5tb2RhbC1pbnNpZGUge1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0cGFkZGluZzogMmVtO1xufVxuXG4uY2hlY2t1cC1ib3gge1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW4tbGVmdDogMDtcbn1cblxuLmNoZWNrdXAtYm94IC5wdXJwIHtcblx0bWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5jaGVja3VwLWJveCAuY29sLTYge1xuXHRmb250LXNpemU6IDEuMjV2dztcbn1cblxuLnRpdGxlIHtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0bWFyZ2luLWJvdHRvbTogMDtcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXNpemU6IC45NXZ3O1xufVxuXG4udGl0bGUgLmNvbC0yIHtcblx0cGFkZGluZy1sZWZ0OiAuNWVtO1xufVxuXG4uY29sLTIgLnB1cnAge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/clinician/clinician-dashboard/clinician-dashboard.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/clinician/clinician-dashboard/clinician-dashboard.component.ts ***!
  \********************************************************************************/
/*! exports provided: ClinicianDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicianDashboardComponent", function() { return ClinicianDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_clinician_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/clinician.service */ "./src/app/core/clinician.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_checkup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/checkup.service */ "./src/app/core/checkup.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);







let ClinicianDashboardComponent = class ClinicianDashboardComponent {
    constructor(clinicianService, router, activatedRoute, userService, checkupService) {
        this.clinicianService = clinicianService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.checkupService = checkupService;
        this.admin = false;
        this.checkups = [];
        this.company = '';
        this.companyName = '';
        this.activatedRoute.data.subscribe(data => {
            this.company = data.company || '';
            switch (data.company) {
                case 'canyonranch':
                    this.companyName = 'Canyon Ranch';
                    break;
                default:
                    this.companyName = '';
                    break;
            }
        });
        this.clinicianService.getCurrentClinician()
            .then(user => {
            if (user) {
                if (user.email == 'relationshipcheckin@canyonranch.com')
                    this.router.navigate(['/canyonranch/clinician-dashboard']);
                this.clinician = user;
                this.getCheckups();
                if (this.clinician.email == 'tatiana@arammu.org' || this.clinician.email == 'james@arammu.org') {
                    this.admin = true;
                }
                else
                    this.admin = false;
            }
            else {
                this.router.navigate(['/login']);
            }
        }).catch(() => this.router.navigate(['/login']));
    }
    ngOnInit() { }
    getCheckups() {
        this.clinicianService.getCheckups(this.clinician.id)
            .subscribe(checks => {
            checks.forEach(check => {
                this.getName(check.partner).then(name => check.partner = name);
                this.getName(check.user).then(name => check.user = name);
                this.getSurvey(check.userSurvey).then(sur => check.userSurvey = sur);
                this.getSurvey(check.partnerSurvey).then(sur => check.partnerSurvey = sur);
            });
            this.checkups = checks;
        });
    }
    getName(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.userService.getUser(id).then(user => {
                if (user) {
                    return `${user.firstName} ${user.lastName}`;
                }
                else {
                    console.error('Could not find user', id);
                    return 'Deleted User';
                }
            });
        });
    }
    getSurvey(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.checkupService.getByID('survey', id).then(survey => {
                if (survey) {
                    return `Complete`;
                }
                else {
                    return 'Incomplete';
                }
            });
        });
    }
    handleFeedback(checkup) {
        if (checkup.feedbackReady)
            this.router.navigate(['view-feedback-report', checkup.id]);
        else
            alert('Please complete all fields necessary for feedback report first.');
    }
    checkDate(date) {
        return date < firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].Timestamp.now();
    }
};
ClinicianDashboardComponent.ctorParameters = () => [
    { type: _core_clinician_service__WEBPACK_IMPORTED_MODULE_3__["ClinicianService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _core_checkup_service__WEBPACK_IMPORTED_MODULE_5__["CheckupService"] }
];
ClinicianDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clinician-dashboard',
        template: __webpack_require__(/*! raw-loader!./clinician-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/clinician/clinician-dashboard/clinician-dashboard.component.html"),
        styles: [__webpack_require__(/*! ./clinician-dashboard.component.css */ "./src/app/clinician/clinician-dashboard/clinician-dashboard.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_clinician_service__WEBPACK_IMPORTED_MODULE_3__["ClinicianService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _core_checkup_service__WEBPACK_IMPORTED_MODULE_5__["CheckupService"]])
], ClinicianDashboardComponent);



/***/ }),

/***/ "./src/app/clinician/clinician-feedback-report/clinician-feedback-report.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/clinician/clinician-feedback-report/clinician-feedback-report.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Arammu - Clinician Feedback Report CSS */\n\n/* Written by Grace Antedomenico */\n\n/* May 2019 - June 2019 */\n\nh1 {\n\ttext-align: left;\n\tcolor: black;\n}\n\nimg {\n\tmargin: auto 20%;\n\twidth: 60%;\n}\n\n/* class containing section with purple sidebar */\n\nsection.one {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 2fr 2fr;\n\tgrid-template-rows: auto;\n\tgrid-gap: 15px;\n}\n\n/* class conatining section with options */\n\nsection.two {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr;\n\tmargin-bottom: 33px;\n}\n\nsection.two>div {\n\tgrid-column: span 2;\n}\n\nsection.two>div>h3 {\n\tmargin-top: 20px;\n}\n\n/* class containing all images found in the sidebar\n   (not including arammu icon)                      */\n\nimg.side_img {\n\tdisplay: block;\n\tmargin: 5% auto;\n\twidth: auto;\n\tpadding: 8px;\n}\n\n/* class containing all of the divs that hold .side_img items */\n\ndiv.side_img_container {\n\tbackground: #6C4C97;\n}\n\n/* feedback report header */\n\n#header>div {\n\tjustify-self: center;\n\tmargin-top: 11px;\n}\n\n/* section containing relationship history */\n\n#relationship_history>p {\n\tgrid-column: span 2;\n\tborder-top-style: solid;\n\tborder-color: #e0e0e0;\n\tborder-width: 5px;\n\tpadding: 10px 0px;\n}\n\n/* class containg the informational sections of top strengths and top concerns\n   (this includes the circles for the numbers and a space for the center line) */\n\ndiv.top_wrapper {\n\tgrid-column: 2 / span 2;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 5fr 5px 1fr 5fr;\n\t/* 5px allows for center line */\n\tgrid-row-gap: 15px;\n\talign-items: center;\n\tborder-top-style: solid;\n\tborder-bottom-style: solid;\n\tborder-color: #e0e0e0;\n\tborder-width: 5px;\n}\n\ndiv.top_wrapper>img {\n\tjustify-self: center;\n\twidth: 35px;\n\theight: 35px;\n\tmargin: 10px;\n}\n\ndiv.top_wrapper>p {\n\tmargin-bottom: 0px;\n\tmargin-top: 0px;\n}\n\n/* class for the center line in the top strengths,\n   top concerns, and primary strength sections\n   (the center line is just a div with a grey background) */\n\ndiv.center_line {\n\tgrid-row: span 3;\n\tbackground: #e0e0e0;\n\theight: 100%;\n}\n\n/* class for the numbered circles in top strengths and top concerns */\n\nspan.circle {\n\theight: 35px;\n\twidth: 35px;\n\tbackground-color: #6C4C97;\n\tborder-radius: 50%;\n\tmargin: 10px;\n\tjustify-self: center;\n\tcolor: white;\n\ttext-align: center;\n\tfont-size: 25px;\n}\n\n/* unlabled section that starts out with \"The specific...\" */\n\n#the_specific>div>p {\n\tgrid-column: 2;\n\tpadding: 10px 0px;\n}\n\n/* feedback header */\n\n#feedback>h1 {\n\tgrid-column: 2 / span 2;\n\tjustify-self: center;\n}\n\n/* primary strengths section */\n\n#primary_strength {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 5px 1fr;\n\t/* 5px allows for center line */\n\tgrid-column: span 2;\n\tgrid-gap: 15px;\n\tborder-top-style: solid;\n\tborder-color: #e0e0e0;\n\tborder-width: 5px;\n}\n\n#primary_strength>h2, h3 {\n\tmargin-top: 10px;\n\tmargin-bottom: 0px;\n\tjustify-self: center;\n}\n\n/* class containing the primary concern sections */\n\ndiv.primary_concern {\n\tgrid-column: 2 / span 2;\n\tborder-top-style: solid;\n\tborder-bottom-style: solid;\n\tborder-color: #e0e0e0;\n\tborder-width: 5px;\n}\n\ndiv.primary_concern>p {\n\tmargin-bottom: 20px;\n}\n\ndiv.primary_concern>div {\n\tdisplay: grid;\n\tgrid-template-columns: auto auto;\n}\n\n/* .left_item and .right_item are a part of\n   .primary_concern this was the only way I\n   could get them to align propery          */\n\n/* name */\n\nh2.left_item {\n\tjustify-self: left;\n\tmargin: 20px 30px 20px 0px;\n}\n\n/* primary concern */\n\nh2.right_item {\n\tjustify-self: center;\n\ttext-align: center;\n\tmargin: 20px 0px;\n}\n\n/* header of options sections */\n\ndiv.options_header>h1 {\n\tmargin-bottom: 0px;\n}\n\ndiv.options_header>h3 {\n\tmargin-top: 0px;\n\tborder-bottom-style: solid;\n\tborder-color: #e0e0e0;\n\tborder-width: 5px;\n}\n\n/* conclusion section */\n\n#conclusion>h1 {\n\tmargin-bottom: 20px;\n}\n\n#conclusion>p {\n\tborder-top-style: solid;\n\tborder-color: #e0e0e0;\n\tborder-width: 5px;\n\tmargin-bottom: 30px;\n}\n\n#conclusion>h6 {\n\tmargin-top: 30px;\n\tmargin-bottom: 70px;\n}\n\n/* small arammu icon on bottom of page */\n\n#bottom_icon {\n\twidth: 60px;\n\tfloat: right;\n\tmargin: 10px;\n}\n\n.not-done {\n\tcolor: #00cf16;\n}\n\ninput {\n\tall: unset;\n}\n\n/* The snackbar - position it at the bottom and in the middle of the screen */\n\n#snackbar {\n\tvisibility: hidden;\n\t/* Hidden by default. Visible on click */\n\tmin-width: 250px;\n\t/* Set a default minimum width */\n\tmargin-left: -125px;\n\t/* Divide value of min-width by 2 */\n\tbackground-color: #333;\n\t/* Black background color */\n\tcolor: #fff;\n\t/* White text color */\n\ttext-align: center;\n\t/* Centered text */\n\tborder-radius: 2px;\n\t/* Rounded borders */\n\tpadding: 16px;\n\t/* Padding */\n\tposition: fixed;\n\t/* Sit on top of the screen */\n\tz-index: 1;\n\t/* Add a z-index if needed */\n\tleft: 50%;\n\t/* Center the snackbar */\n\tbottom: 30px;\n\t/* 30px from the bottom */\n}\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n\n#snackbar.show {\n\tvisibility: visible;\n\t/* Show the snackbar */\n\t/* Add animation: Take 0.5 seconds to fade in and out the snackbar.\n\tHowever, delay the fade out process for 2.5 seconds */\n\t-webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n\tanimation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n/* Animations to fade the snackbar in and out */\n\n@-webkit-keyframes fadein {\n\tfrom {\n\t\tbottom: 0;\n\t\topacity: 0;\n\t}\n\tto {\n\t\tbottom: 30px;\n\t\topacity: 1;\n\t}\n}\n\n@keyframes fadein {\n\tfrom {\n\t\tbottom: 0;\n\t\topacity: 0;\n\t}\n\tto {\n\t\tbottom: 30px;\n\t\topacity: 1;\n\t}\n}\n\n@-webkit-keyframes fadeout {\n\tfrom {\n\t\tbottom: 30px;\n\t\topacity: 1;\n\t}\n\tto {\n\t\tbottom: 0;\n\t\topacity: 0;\n\t}\n}\n\n@keyframes fadeout {\n\tfrom {\n\t\tbottom: 30px;\n\t\topacity: 1;\n\t}\n\tto {\n\t\tbottom: 0;\n\t\topacity: 0;\n\t}\n}\n\nkbd {\n\tbackground-color: #eee;\n\tborder-radius: 3px;\n\tborder: 1px solid #b4b4b4;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, .2), 0 2px 0 0 rgba(255, 255, 255, .7) inset;\n\tcolor: #333;\n\tdisplay: inline-block;\n\tfont-size: .85em;\n\tfont-weight: 700;\n\tline-height: 1;\n\tpadding: 2px 4px;\n\twhite-space: nowrap;\n}\n\n.middle {\n\tvertical-align: middle;\n\theight: 80%;\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\tmargin-top: 5%;\n}\n\n.col-4 {\n\twhite-space: nowrap;\n\ttext-align: center;\n\tmargin: 1em 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljaWFuL2NsaW5pY2lhbi1mZWVkYmFjay1yZXBvcnQvY2xpbmljaWFuLWZlZWRiYWNrLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQzs7QUFFM0Msa0NBQWtDOztBQUVsQyx5QkFBeUI7O0FBRXpCO0NBQ0MsZ0JBQWdCO0NBQ2hCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixVQUFVO0FBQ1g7O0FBRUEsaURBQWlEOztBQUVqRDtDQUNDLGFBQWE7Q0FDYixrQ0FBa0M7Q0FDbEMsd0JBQXdCO0NBQ3hCLGNBQWM7QUFDZjs7QUFFQSwwQ0FBMEM7O0FBRTFDO0NBQ0MsYUFBYTtDQUNiLGtDQUFrQztDQUNsQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7cURBQ3FEOztBQUVyRDtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQSwrREFBK0Q7O0FBRS9EO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBLDJCQUEyQjs7QUFFM0I7Q0FDQyxvQkFBb0I7Q0FDcEIsZ0JBQWdCO0FBQ2pCOztBQUVBLDRDQUE0Qzs7QUFFNUM7Q0FDQyxtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLHFCQUFxQjtDQUNyQixpQkFBaUI7Q0FDakIsaUJBQWlCO0FBQ2xCOztBQUVBO2dGQUNnRjs7QUFFaEY7Q0FDQyx1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLDBDQUEwQztDQUMxQywrQkFBK0I7Q0FDL0Isa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsMEJBQTBCO0NBQzFCLHFCQUFxQjtDQUNyQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsV0FBVztDQUNYLFlBQVk7Q0FDWixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjs7QUFFQTs7MkRBRTJEOztBQUUzRDtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiOztBQUVBLHFFQUFxRTs7QUFFckU7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLG9CQUFvQjtDQUNwQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7O0FBRUEsNERBQTREOztBQUU1RDtDQUNDLGNBQWM7Q0FDZCxpQkFBaUI7QUFDbEI7O0FBRUEsb0JBQW9COztBQUVwQjtDQUNDLHVCQUF1QjtDQUN2QixvQkFBb0I7QUFDckI7O0FBRUEsOEJBQThCOztBQUU5QjtDQUNDLGFBQWE7Q0FDYixrQ0FBa0M7Q0FDbEMsK0JBQStCO0NBQy9CLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsdUJBQXVCO0NBQ3ZCLHFCQUFxQjtDQUNyQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLG9CQUFvQjtBQUNyQjs7QUFFQSxrREFBa0Q7O0FBRWxEO0NBQ0MsdUJBQXVCO0NBQ3ZCLHVCQUF1QjtDQUN2QiwwQkFBMEI7Q0FDMUIscUJBQXFCO0NBQ3JCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixnQ0FBZ0M7QUFDakM7O0FBRUE7OzZDQUU2Qzs7QUFFN0MsU0FBUzs7QUFFVDtDQUNDLGtCQUFrQjtDQUNsQiwwQkFBMEI7QUFDM0I7O0FBRUEsb0JBQW9COztBQUVwQjtDQUNDLG9CQUFvQjtDQUNwQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCOztBQUVBLCtCQUErQjs7QUFFL0I7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsMEJBQTBCO0NBQzFCLHFCQUFxQjtDQUNyQixpQkFBaUI7QUFDbEI7O0FBRUEsdUJBQXVCOztBQUV2QjtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEI7O0FBRUEsd0NBQXdDOztBQUV4QztDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osWUFBWTtBQUNiOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBLDZFQUE2RTs7QUFFN0U7Q0FDQyxrQkFBa0I7Q0FDbEIsd0NBQXdDO0NBQ3hDLGdCQUFnQjtDQUNoQixnQ0FBZ0M7Q0FDaEMsbUJBQW1CO0NBQ25CLG1DQUFtQztDQUNuQyxzQkFBc0I7Q0FDdEIsMkJBQTJCO0NBQzNCLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCLGFBQWE7Q0FDYixZQUFZO0NBQ1osZUFBZTtDQUNmLDZCQUE2QjtDQUM3QixVQUFVO0NBQ1YsNEJBQTRCO0NBQzVCLFNBQVM7Q0FDVCx3QkFBd0I7Q0FDeEIsWUFBWTtDQUNaLHlCQUF5QjtBQUMxQjs7QUFFQSw4RUFBOEU7O0FBRTlFO0NBQ0MsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0QjtzREFDcUQ7Q0FDckQsaURBQWlEO0NBQ2pELHlDQUF5QztBQUMxQzs7QUFFQSwrQ0FBK0M7O0FBRS9DO0NBQ0M7RUFDQyxTQUFTO0VBQ1QsVUFBVTtDQUNYO0NBQ0E7RUFDQyxZQUFZO0VBQ1osVUFBVTtDQUNYO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLFNBQVM7RUFDVCxVQUFVO0NBQ1g7Q0FDQTtFQUNDLFlBQVk7RUFDWixVQUFVO0NBQ1g7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsWUFBWTtFQUNaLFVBQVU7Q0FDWDtDQUNBO0VBQ0MsU0FBUztFQUNULFVBQVU7Q0FDWDtBQUNEOztBQUVBO0NBQ0M7RUFDQyxZQUFZO0VBQ1osVUFBVTtDQUNYO0NBQ0E7RUFDQyxTQUFTO0VBQ1QsVUFBVTtDQUNYO0FBQ0Q7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixnRkFBZ0Y7Q0FDaEYsV0FBVztDQUNYLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLFdBQVc7Q0FDWCxvQkFBaUI7SUFBakIsaUJBQWlCO0NBQ2pCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsYUFBYTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY2xpbmljaWFuL2NsaW5pY2lhbi1mZWVkYmFjay1yZXBvcnQvY2xpbmljaWFuLWZlZWRiYWNrLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXJhbW11IC0gQ2xpbmljaWFuIEZlZWRiYWNrIFJlcG9ydCBDU1MgKi9cblxuLyogV3JpdHRlbiBieSBHcmFjZSBBbnRlZG9tZW5pY28gKi9cblxuLyogTWF5IDIwMTkgLSBKdW5lIDIwMTkgKi9cblxuaDEge1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRjb2xvcjogYmxhY2s7XG59XG5cbmltZyB7XG5cdG1hcmdpbjogYXV0byAyMCU7XG5cdHdpZHRoOiA2MCU7XG59XG5cbi8qIGNsYXNzIGNvbnRhaW5pbmcgc2VjdGlvbiB3aXRoIHB1cnBsZSBzaWRlYmFyICovXG5cbnNlY3Rpb24ub25lIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDJmcjtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuXHRncmlkLWdhcDogMTVweDtcbn1cblxuLyogY2xhc3MgY29uYXRpbmluZyBzZWN0aW9uIHdpdGggb3B0aW9ucyAqL1xuXG5zZWN0aW9uLnR3byB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG5cdG1hcmdpbi1ib3R0b206IDMzcHg7XG59XG5cbnNlY3Rpb24udHdvPmRpdiB7XG5cdGdyaWQtY29sdW1uOiBzcGFuIDI7XG59XG5cbnNlY3Rpb24udHdvPmRpdj5oMyB7XG5cdG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi8qIGNsYXNzIGNvbnRhaW5pbmcgYWxsIGltYWdlcyBmb3VuZCBpbiB0aGUgc2lkZWJhclxuICAgKG5vdCBpbmNsdWRpbmcgYXJhbW11IGljb24pICAgICAgICAgICAgICAgICAgICAgICovXG5cbmltZy5zaWRlX2ltZyB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXJnaW46IDUlIGF1dG87XG5cdHdpZHRoOiBhdXRvO1xuXHRwYWRkaW5nOiA4cHg7XG59XG5cbi8qIGNsYXNzIGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBkaXZzIHRoYXQgaG9sZCAuc2lkZV9pbWcgaXRlbXMgKi9cblxuZGl2LnNpZGVfaW1nX2NvbnRhaW5lciB7XG5cdGJhY2tncm91bmQ6ICM2QzRDOTc7XG59XG5cbi8qIGZlZWRiYWNrIHJlcG9ydCBoZWFkZXIgKi9cblxuI2hlYWRlcj5kaXYge1xuXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcblx0bWFyZ2luLXRvcDogMTFweDtcbn1cblxuLyogc2VjdGlvbiBjb250YWluaW5nIHJlbGF0aW9uc2hpcCBoaXN0b3J5ICovXG5cbiNyZWxhdGlvbnNoaXBfaGlzdG9yeT5wIHtcblx0Z3JpZC1jb2x1bW46IHNwYW4gMjtcblx0Ym9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG5cdGJvcmRlci1jb2xvcjogI2UwZTBlMDtcblx0Ym9yZGVyLXdpZHRoOiA1cHg7XG5cdHBhZGRpbmc6IDEwcHggMHB4O1xufVxuXG4vKiBjbGFzcyBjb250YWluZyB0aGUgaW5mb3JtYXRpb25hbCBzZWN0aW9ucyBvZiB0b3Agc3RyZW5ndGhzIGFuZCB0b3AgY29uY2VybnNcbiAgICh0aGlzIGluY2x1ZGVzIHRoZSBjaXJjbGVzIGZvciB0aGUgbnVtYmVycyBhbmQgYSBzcGFjZSBmb3IgdGhlIGNlbnRlciBsaW5lKSAqL1xuXG5kaXYudG9wX3dyYXBwZXIge1xuXHRncmlkLWNvbHVtbjogMiAvIHNwYW4gMjtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDVweCAxZnIgNWZyO1xuXHQvKiA1cHggYWxsb3dzIGZvciBjZW50ZXIgbGluZSAqL1xuXHRncmlkLXJvdy1nYXA6IDE1cHg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuXHRib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcblx0Ym9yZGVyLWNvbG9yOiAjZTBlMGUwO1xuXHRib3JkZXItd2lkdGg6IDVweDtcbn1cblxuZGl2LnRvcF93cmFwcGVyPmltZyB7XG5cdGp1c3RpZnktc2VsZjogY2VudGVyO1xuXHR3aWR0aDogMzVweDtcblx0aGVpZ2h0OiAzNXB4O1xuXHRtYXJnaW46IDEwcHg7XG59XG5cbmRpdi50b3Bfd3JhcHBlcj5wIHtcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHRtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi8qIGNsYXNzIGZvciB0aGUgY2VudGVyIGxpbmUgaW4gdGhlIHRvcCBzdHJlbmd0aHMsXG4gICB0b3AgY29uY2VybnMsIGFuZCBwcmltYXJ5IHN0cmVuZ3RoIHNlY3Rpb25zXG4gICAodGhlIGNlbnRlciBsaW5lIGlzIGp1c3QgYSBkaXYgd2l0aCBhIGdyZXkgYmFja2dyb3VuZCkgKi9cblxuZGl2LmNlbnRlcl9saW5lIHtcblx0Z3JpZC1yb3c6IHNwYW4gMztcblx0YmFja2dyb3VuZDogI2UwZTBlMDtcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBjbGFzcyBmb3IgdGhlIG51bWJlcmVkIGNpcmNsZXMgaW4gdG9wIHN0cmVuZ3RocyBhbmQgdG9wIGNvbmNlcm5zICovXG5cbnNwYW4uY2lyY2xlIHtcblx0aGVpZ2h0OiAzNXB4O1xuXHR3aWR0aDogMzVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzZDNEM5Nztcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRtYXJnaW46IDEwcHg7XG5cdGp1c3RpZnktc2VsZjogY2VudGVyO1xuXHRjb2xvcjogd2hpdGU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1zaXplOiAyNXB4O1xufVxuXG4vKiB1bmxhYmxlZCBzZWN0aW9uIHRoYXQgc3RhcnRzIG91dCB3aXRoIFwiVGhlIHNwZWNpZmljLi4uXCIgKi9cblxuI3RoZV9zcGVjaWZpYz5kaXY+cCB7XG5cdGdyaWQtY29sdW1uOiAyO1xuXHRwYWRkaW5nOiAxMHB4IDBweDtcbn1cblxuLyogZmVlZGJhY2sgaGVhZGVyICovXG5cbiNmZWVkYmFjaz5oMSB7XG5cdGdyaWQtY29sdW1uOiAyIC8gc3BhbiAyO1xuXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLyogcHJpbWFyeSBzdHJlbmd0aHMgc2VjdGlvbiAqL1xuXG4jcHJpbWFyeV9zdHJlbmd0aCB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVweCAxZnI7XG5cdC8qIDVweCBhbGxvd3MgZm9yIGNlbnRlciBsaW5lICovXG5cdGdyaWQtY29sdW1uOiBzcGFuIDI7XG5cdGdyaWQtZ2FwOiAxNXB4O1xuXHRib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcblx0Ym9yZGVyLWNvbG9yOiAjZTBlMGUwO1xuXHRib3JkZXItd2lkdGg6IDVweDtcbn1cblxuI3ByaW1hcnlfc3RyZW5ndGg+aDIsIGgzIHtcblx0bWFyZ2luLXRvcDogMTBweDtcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLyogY2xhc3MgY29udGFpbmluZyB0aGUgcHJpbWFyeSBjb25jZXJuIHNlY3Rpb25zICovXG5cbmRpdi5wcmltYXJ5X2NvbmNlcm4ge1xuXHRncmlkLWNvbHVtbjogMiAvIHNwYW4gMjtcblx0Ym9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG5cdGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuXHRib3JkZXItY29sb3I6ICNlMGUwZTA7XG5cdGJvcmRlci13aWR0aDogNXB4O1xufVxuXG5kaXYucHJpbWFyeV9jb25jZXJuPnAge1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5kaXYucHJpbWFyeV9jb25jZXJuPmRpdiB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xufVxuXG4vKiAubGVmdF9pdGVtIGFuZCAucmlnaHRfaXRlbSBhcmUgYSBwYXJ0IG9mXG4gICAucHJpbWFyeV9jb25jZXJuIHRoaXMgd2FzIHRoZSBvbmx5IHdheSBJXG4gICBjb3VsZCBnZXQgdGhlbSB0byBhbGlnbiBwcm9wZXJ5ICAgICAgICAgICovXG5cbi8qIG5hbWUgKi9cblxuaDIubGVmdF9pdGVtIHtcblx0anVzdGlmeS1zZWxmOiBsZWZ0O1xuXHRtYXJnaW46IDIwcHggMzBweCAyMHB4IDBweDtcbn1cblxuLyogcHJpbWFyeSBjb25jZXJuICovXG5cbmgyLnJpZ2h0X2l0ZW0ge1xuXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW46IDIwcHggMHB4O1xufVxuXG4vKiBoZWFkZXIgb2Ygb3B0aW9ucyBzZWN0aW9ucyAqL1xuXG5kaXYub3B0aW9uc19oZWFkZXI+aDEge1xuXHRtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmRpdi5vcHRpb25zX2hlYWRlcj5oMyB7XG5cdG1hcmdpbi10b3A6IDBweDtcblx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG5cdGJvcmRlci1jb2xvcjogI2UwZTBlMDtcblx0Ym9yZGVyLXdpZHRoOiA1cHg7XG59XG5cbi8qIGNvbmNsdXNpb24gc2VjdGlvbiAqL1xuXG4jY29uY2x1c2lvbj5oMSB7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNjb25jbHVzaW9uPnAge1xuXHRib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcblx0Ym9yZGVyLWNvbG9yOiAjZTBlMGUwO1xuXHRib3JkZXItd2lkdGg6IDVweDtcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuI2NvbmNsdXNpb24+aDYge1xuXHRtYXJnaW4tdG9wOiAzMHB4O1xuXHRtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuXG4vKiBzbWFsbCBhcmFtbXUgaWNvbiBvbiBib3R0b20gb2YgcGFnZSAqL1xuXG4jYm90dG9tX2ljb24ge1xuXHR3aWR0aDogNjBweDtcblx0ZmxvYXQ6IHJpZ2h0O1xuXHRtYXJnaW46IDEwcHg7XG59XG5cbi5ub3QtZG9uZSB7XG5cdGNvbG9yOiAjMDBjZjE2O1xufVxuXG5pbnB1dCB7XG5cdGFsbDogdW5zZXQ7XG59XG5cbi8qIFRoZSBzbmFja2JhciAtIHBvc2l0aW9uIGl0IGF0IHRoZSBib3R0b20gYW5kIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbiAqL1xuXG4jc25hY2tiYXIge1xuXHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdC8qIEhpZGRlbiBieSBkZWZhdWx0LiBWaXNpYmxlIG9uIGNsaWNrICovXG5cdG1pbi13aWR0aDogMjUwcHg7XG5cdC8qIFNldCBhIGRlZmF1bHQgbWluaW11bSB3aWR0aCAqL1xuXHRtYXJnaW4tbGVmdDogLTEyNXB4O1xuXHQvKiBEaXZpZGUgdmFsdWUgb2YgbWluLXdpZHRoIGJ5IDIgKi9cblx0YmFja2dyb3VuZC1jb2xvcjogIzMzMztcblx0LyogQmxhY2sgYmFja2dyb3VuZCBjb2xvciAqL1xuXHRjb2xvcjogI2ZmZjtcblx0LyogV2hpdGUgdGV4dCBjb2xvciAqL1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdC8qIENlbnRlcmVkIHRleHQgKi9cblx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHQvKiBSb3VuZGVkIGJvcmRlcnMgKi9cblx0cGFkZGluZzogMTZweDtcblx0LyogUGFkZGluZyAqL1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdC8qIFNpdCBvbiB0b3Agb2YgdGhlIHNjcmVlbiAqL1xuXHR6LWluZGV4OiAxO1xuXHQvKiBBZGQgYSB6LWluZGV4IGlmIG5lZWRlZCAqL1xuXHRsZWZ0OiA1MCU7XG5cdC8qIENlbnRlciB0aGUgc25hY2tiYXIgKi9cblx0Ym90dG9tOiAzMHB4O1xuXHQvKiAzMHB4IGZyb20gdGhlIGJvdHRvbSAqL1xufVxuXG4vKiBTaG93IHRoZSBzbmFja2JhciB3aGVuIGNsaWNraW5nIG9uIGEgYnV0dG9uIChjbGFzcyBhZGRlZCB3aXRoIEphdmFTY3JpcHQpICovXG5cbiNzbmFja2Jhci5zaG93IHtcblx0dmlzaWJpbGl0eTogdmlzaWJsZTtcblx0LyogU2hvdyB0aGUgc25hY2tiYXIgKi9cblx0LyogQWRkIGFuaW1hdGlvbjogVGFrZSAwLjUgc2Vjb25kcyB0byBmYWRlIGluIGFuZCBvdXQgdGhlIHNuYWNrYmFyLlxuXHRIb3dldmVyLCBkZWxheSB0aGUgZmFkZSBvdXQgcHJvY2VzcyBmb3IgMi41IHNlY29uZHMgKi9cblx0LXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcblx0YW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XG59XG5cbi8qIEFuaW1hdGlvbnMgdG8gZmFkZSB0aGUgc25hY2tiYXIgaW4gYW5kIG91dCAqL1xuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcblx0ZnJvbSB7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cblx0dG8ge1xuXHRcdGJvdHRvbTogMzBweDtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcblx0ZnJvbSB7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cblx0dG8ge1xuXHRcdGJvdHRvbTogMzBweDtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcblx0ZnJvbSB7XG5cdFx0Ym90dG9tOiAzMHB4O1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblx0dG8ge1xuXHRcdGJvdHRvbTogMDtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgZmFkZW91dCB7XG5cdGZyb20ge1xuXHRcdGJvdHRvbTogMzBweDtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cdHRvIHtcblx0XHRib3R0b206IDA7XG5cdFx0b3BhY2l0eTogMDtcblx0fVxufVxuXG5rYmQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNiNGI0YjQ7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCAycHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjcpIGluc2V0O1xuXHRjb2xvcjogIzMzMztcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRmb250LXNpemU6IC44NWVtO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRsaW5lLWhlaWdodDogMTtcblx0cGFkZGluZzogMnB4IDRweDtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm1pZGRsZSB7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdGhlaWdodDogODAlO1xuXHRvYmplY3QtZml0OiBjb3Zlcjtcblx0bWFyZ2luLXRvcDogNSU7XG59XG5cbi5jb2wtNCB7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luOiAxZW0gMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/clinician/clinician-feedback-report/clinician-feedback-report.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/clinician/clinician-feedback-report/clinician-feedback-report.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ClinicianFeedbackReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicianFeedbackReportComponent", function() { return ClinicianFeedbackReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_checkup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/checkup.service */ "./src/app/core/checkup.service.ts");
/* harmony import */ var src_app_core_all_models_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/all-models.model */ "./src/app/core/all-models.model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _common_modal_action_modal_action_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/modal-action/modal-action.component */ "./src/app/common/modal-action/modal-action.component.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");









let ClinicianFeedbackReportComponent = class ClinicianFeedbackReportComponent {
    constructor(authService, route, checkupService, modalService, router, db) {
        this.authService = authService;
        this.route = route;
        this.checkupService = checkupService;
        this.modalService = modalService;
        this.router = router;
        this.db = db;
        this.checkup = new src_app_core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["CheckupModel"]();
        this.usr1 = new src_app_core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["UserModel"]('', '', '', '', '');
        this.usr2 = new src_app_core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["UserModel"]('', '', '', '', '');
        this.usr1Survey = new src_app_core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["SurveyModel"]();
        this.usr2Survey = new src_app_core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["SurveyModel"]();
        this.savingTxt = 'Saving...';
        this.showSnack = '';
        this.modalTitle = '';
        this.modalContent = '';
        this.feedbackReport = new src_app_core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["FeedbackModel"]('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
        this.usrOptions = [];
        this.usrOptTitles = [];
        this.partOptions = [];
        this.partOptTitles = [];
        this.imgNames = [];
        this.authService.getName();
        this.route.params.subscribe(params => {
            if (params['checkup']) {
                this.checkupService.getByID('checkup', params['checkup']).then(res => {
                    if (res) {
                        this.checkup = res;
                        this.getImages();
                        if (this.checkup.feedback && this.checkup.feedback.length > 0)
                            this.getFeedback();
                        else
                            this.generateCheck();
                    }
                    else {
                        alert('No checkup found');
                    }
                }).catch(err => alert(err));
            }
            else
                alert('no params');
        });
    }
    ngOnInit() { }
    generateCheck() {
        this.modalRef = this.modalService.open(_common_modal_action_modal_action_component__WEBPACK_IMPORTED_MODULE_7__["ModalActionComponent"], { centered: true, ariaLabelledBy: 'modal-basic-title' });
        this.modalRef.componentInstance.modalTitle = 'No Feedback Report!';
        this.modalRef.componentInstance.modalContent = `No feedback report has been generated yet.
		 By clicking Generate, all information previously saved within the appointment page will be
		 analyzed and evaluated to automatically generate a Feedback Report.`;
        this.modalRef.componentInstance.cancelText = 'Back to Appointment Page';
        this.modalRef.componentInstance.actionText = 'Generate';
        this.modalRef.result.then(res => {
            if (res == 'ok') {
                this.createFeedback();
            }
            else
                this.router.navigate(['/view-apt', this.checkup.id]);
        }, () => this.router.navigate(['/clinician-dashboard']));
    }
    getImages() {
        if (this.checkup.type != 'professional') {
            this.imgNames = ['./assets/dogs_water.png', './assets/elephant.png', './assets/horses.png',
                './assets/dogs.png', './assets/cats.png', './assets/squirrels.png', './assets/swans.png', './assets/beavers.jpg'];
        }
        else {
            this.imgNames = ['./assets/puzzle.jpg', './assets/group_hands.jpg', './assets/desk_hands.jpg',
                './assets/jenga_hands.jpg', './assets/computer_hands.jpg', './assets/handshake.jpg',
                './assets/block_hands.jpg', './assets/lightbulb.jpg'];
        }
    }
    createFeedback() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const type = (this.checkup.type != 'professional') ? 'personal-mapping' : 'professional-mapping';
            const p1 = this.checkupService.getByID('user', this.checkup.user);
            const p2 = this.checkupService.getByID('user', this.checkup.partner);
            const p3 = this.checkupService.getByID('survey', this.checkup.userSurvey);
            const p4 = this.checkupService.getByID('survey', this.checkup.partnerSurvey);
            const p5 = this.checkupService.getByID('survey-questions', type);
            Promise.all([p1, p2, p3, p4, p5])
                .then(data => {
                console.log(this.checkup);
                const u1 = data[0];
                const u2 = data[1];
                const s1 = data[2];
                const s2 = data[3];
                const mapping = data[4];
                const userName = `${u1.firstName} ${u1.lastName}`;
                const userFirstStr = s1.results.tops.firstStrength.txt;
                const userSecondStr = s1.results.tops.secondStrength.txt;
                const userThirdStr = s1.results.tops.thirdStrength.txt;
                const userFirstCon = s1.results.tops.firstConcern.txt;
                const userSecondCon = s1.results.tops.secondConcern.txt;
                const userThirdCon = s1.results.tops.thirdConcern.txt;
                const userTopStr = this.checkup.userTopStr.txt;
                const userStrParagraph = mapping.strengths[this.checkup.userTopStr.idx];
                const userTopCon = this.checkup.userTopCon.txt;
                const userConParagraph = mapping.concerns[this.checkup.userTopCon.idx];
                const userOpt1Title = mapping['opt1-title'][this.checkup.userTopCon.idx];
                const userOpt2Title = mapping['opt2-title'][this.checkup.userTopCon.idx];
                const userOpt3Title = mapping['opt3-title'][this.checkup.userTopCon.idx];
                const userOpt4Title = mapping['opt4-title'][this.checkup.userTopCon.idx];
                const userOpt5Title = mapping['opt5-title'][this.checkup.userTopCon.idx];
                const userOpt6Title = mapping['opt6-title'][this.checkup.userTopCon.idx];
                const userOpt1 = mapping.opt1[this.checkup.userTopCon.idx];
                const userOpt2 = mapping.opt2[this.checkup.userTopCon.idx];
                const userOpt3 = mapping.opt3[this.checkup.userTopCon.idx];
                const userOpt4 = mapping.opt4[this.checkup.userTopCon.idx];
                const userOpt5 = mapping.opt5[this.checkup.userTopCon.idx];
                const userOpt6 = mapping.opt6[this.checkup.userTopCon.idx];
                const partnerName = `${u2.firstName} ${u2.lastName}`;
                const partnerFirstStr = s2.results.tops.firstStrength.txt;
                const partnerSecondStr = s2.results.tops.secondStrength.txt;
                const partnerThirdStr = s2.results.tops.thirdStrength.txt;
                const partnerFirstCon = s2.results.tops.firstConcern.txt;
                const partnerSecondCon = s2.results.tops.secondConcern.txt;
                const partnerThirdCon = s2.results.tops.thirdConcern.txt;
                const partnerTopStr = this.checkup.partnerTopStr.txt;
                const partnerStrParagraph = mapping.strengths[this.checkup.partnerTopStr.idx];
                const partnerTopCon = this.checkup.partnerTopCon.txt;
                const partnerConParagraph = mapping.concerns[this.checkup.partnerTopCon.idx];
                const partnerOpt1Title = mapping['opt1-title'][this.checkup.partnerTopCon.idx];
                const partnerOpt2Title = mapping['opt2-title'][this.checkup.partnerTopCon.idx];
                const partnerOpt3Title = mapping['opt3-title'][this.checkup.partnerTopCon.idx];
                const partnerOpt4Title = mapping['opt4-title'][this.checkup.partnerTopCon.idx];
                const partnerOpt5Title = mapping['opt5-title'][this.checkup.partnerTopCon.idx];
                const partnerOpt6Title = mapping['opt6-title'][this.checkup.partnerTopCon.idx];
                const partnerOpt1 = mapping.opt1[this.checkup.partnerTopCon.idx];
                const partnerOpt2 = mapping.opt2[this.checkup.partnerTopCon.idx];
                const partnerOpt3 = mapping.opt3[this.checkup.partnerTopCon.idx];
                const partnerOpt4 = mapping.opt4[this.checkup.partnerTopCon.idx];
                const partnerOpt5 = mapping.opt5[this.checkup.partnerTopCon.idx];
                const partnerOpt6 = mapping.opt6[this.checkup.partnerTopCon.idx];
                const user = u1.id;
                const partner = u2.id;
                this.feedbackReport = new src_app_core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["FeedbackModel"](userName, userFirstStr, userSecondStr, userThirdStr, userFirstCon, userSecondCon, userThirdCon, userTopStr, userStrParagraph, userTopCon, userConParagraph, userOpt1Title, userOpt2Title, userOpt3Title, userOpt4Title, userOpt5Title, userOpt6Title, userOpt1, userOpt2, userOpt3, userOpt4, userOpt5, userOpt6, partnerName, partnerFirstStr, partnerSecondStr, partnerThirdStr, partnerFirstCon, partnerSecondCon, partnerThirdCon, partnerTopStr, partnerStrParagraph, partnerTopCon, partnerConParagraph, partnerOpt1Title, partnerOpt2Title, partnerOpt3Title, partnerOpt4Title, partnerOpt5Title, partnerOpt6Title, partnerOpt1, partnerOpt2, partnerOpt3, partnerOpt4, partnerOpt5, partnerOpt6, user, partner);
                this.usrOptions = [userOpt1, userOpt2, userOpt3, userOpt4, userOpt5, userOpt6]
                    .filter(Boolean);
                this.usrOptTitles = [userOpt1Title, userOpt2Title, userOpt3Title, userOpt4Title, userOpt5Title, userOpt6Title]
                    .filter(Boolean);
                this.partOptions = [partnerOpt1, partnerOpt2, partnerOpt3, partnerOpt4, partnerOpt5, partnerOpt6]
                    .filter(Boolean);
                this.partOptTitles = [partnerOpt1Title, partnerOpt2Title, partnerOpt3Title, partnerOpt4Title, partnerOpt5Title, partnerOpt6Title]
                    .filter(Boolean);
                console.log(this.feedbackReport);
            }).catch(err => {
                console.error(err);
                alert('Could not load all data, please check to see if all inputs have been submitted.');
            });
        });
    }
    generatePersonal() {
    }
    onKeyDown($event) {
        if (navigator.platform.match('Mac'))
            this.handleMacKeyEvents($event);
        else
            this.handleWindowsKeyEvents($event);
    }
    handleMacKeyEvents($event) {
        const charCode = String.fromCharCode($event.which).toLowerCase();
        if ($event.metaKey && charCode === 's') {
            this.updateFeedback();
            $event.preventDefault();
        }
    }
    handleWindowsKeyEvents($event) {
        const charCode = String.fromCharCode($event.which).toLowerCase();
        if ($event.ctrlKey && charCode === 's') { // Action on Ctrl + S
            this.updateFeedback();
            $event.preventDefault();
        }
    }
    updateFeedback() {
        this.savingTxt = 'Saving...';
        this.showSnack = 'show';
        this.checkupService.updateFeedback(this.feedbackReport)
            .then(done => {
            if (done) {
                this.savingTxt = 'Saved!';
                setTimeout(() => this.showSnack = '', 5000);
            }
            else {
                this.savingTxt = 'Could not save at this time, please try again later';
                setTimeout(() => this.showSnack = '', 10000);
            }
        });
    }
    saveFeedback() {
        this.checkupService.createFeedback(this.feedbackReport, this.checkup.id)
            .then((done) => {
            if (done) {
                this.savingTxt = 'Saved!';
                setTimeout(() => this.showSnack = '', 5000);
            }
            else {
                this.savingTxt = 'Could not generate at this time, please try again later';
                setTimeout(() => this.showSnack = '', 10000);
            }
        }).catch(err => {
            this.savingTxt = 'Could not generate at this time, please try again later';
            setTimeout(() => this.showSnack = '', 5000);
            console.error(err);
        });
    }
    getFeedback() {
        this.checkupService.getByID('feedback', this.checkup.feedback)
            .then(feedback => this.feedback = feedback)
            .catch(err => { alert('Could not find feedback report'); console.log(err); });
    }
    exportToWord() {
        const preHtml = '<html xmlns:o=\'urn:schemas-microsoft-com:office:office\' ' + '' +
            ' xmlns:w=\'urn:schemas-microsoft-com:office:word\' xmlns=\'http://www.w3.org/TR/REC-html40\'><head><meta charset=\'utf-8\'>' +
            '<title>Export HTML To Doc</title></head><body>';
        const postHtml = '</body></html>';
        const innerHtml = document.getElementById('full-html').innerHTML;
        const filename = `${this.usr1.firstName}${this.usr1.lastName}${this.usr2.firstName}${this.usr2.lastName}.doc`;
        const html = preHtml + innerHtml + postHtml;
        const blob = new Blob(['\ufeff', html], { type: 'application/msword' });
        const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html); // Specify link url
        const downloadLink = document.createElement('a');
        document.body.appendChild(downloadLink);
        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, filename);
        }
        else {
            downloadLink.href = url; // Create a link to the file
            downloadLink.download = filename; // Setting the file name
            downloadLink.click(); // triggering the function
        }
        document.body.removeChild(downloadLink);
    }
};
ClinicianFeedbackReportComponent.ctorParameters = () => [
    { type: src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_checkup_service__WEBPACK_IMPORTED_MODULE_4__["CheckupService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] }
];
ClinicianFeedbackReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clinician-feedback-report',
        template: __webpack_require__(/*! raw-loader!./clinician-feedback-report.component.html */ "./node_modules/raw-loader/index.js!./src/app/clinician/clinician-feedback-report/clinician-feedback-report.component.html"),
        styles: [__webpack_require__(/*! ./clinician-feedback-report.component.css */ "./src/app/clinician/clinician-feedback-report/clinician-feedback-report.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_core_checkup_service__WEBPACK_IMPORTED_MODULE_4__["CheckupService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]])
], ClinicianFeedbackReportComponent);



/***/ }),

/***/ "./src/app/clinician/clinician-scheduler/clinician-scheduler.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/clinician/clinician-scheduler/clinician-scheduler.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n\ttext-align: center;\n\tborder-bottom: 1px solid lightgrey;\n\tpadding-bottom: .5em;\n}\n.vert-line {\n\tborder-right: 1px solid lightgrey;\n}\nlabel {\n\tletter-spacing: .025vw;\n}\n.col-1 {\n\tflex: 0 0 5%;\n\tmax-width: 5%;\n\tmargin: 0;\n\tpadding: .15em;\n\tline-height: 1.1em;\n\tfont-size: 1.25em;\n}\n.no-pad {\n\tpadding: 0;\n}\n.to {\n\tmargin: .4em;\n\tmargin-right: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljaWFuL2NsaW5pY2lhbi1zY2hlZHVsZXIvY2xpbmljaWFuLXNjaGVkdWxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0NBQ2xCLGtDQUFrQztDQUNsQyxvQkFBb0I7QUFDckI7QUFDQTtDQUNDLGlDQUFpQztBQUNsQztBQUNBO0NBQ0Msc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLFNBQVM7Q0FDVCxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY2xpbmljaWFuL2NsaW5pY2lhbi1zY2hlZHVsZXIvY2xpbmljaWFuLXNjaGVkdWxlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG5cdHBhZGRpbmctYm90dG9tOiAuNWVtO1xufVxuLnZlcnQtbGluZSB7XG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbn1cbmxhYmVsIHtcblx0bGV0dGVyLXNwYWNpbmc6IC4wMjV2dztcbn1cbi5jb2wtMSB7XG5cdGZsZXg6IDAgMCA1JTtcblx0bWF4LXdpZHRoOiA1JTtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAuMTVlbTtcblx0bGluZS1oZWlnaHQ6IDEuMWVtO1xuXHRmb250LXNpemU6IDEuMjVlbTtcbn1cbi5uby1wYWQge1xuXHRwYWRkaW5nOiAwO1xufVxuLnRvIHtcblx0bWFyZ2luOiAuNGVtO1xuXHRtYXJnaW4tcmlnaHQ6IDJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/clinician/clinician-scheduler/clinician-scheduler.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/clinician/clinician-scheduler/clinician-scheduler.component.ts ***!
  \********************************************************************************/
/*! exports provided: ClinicianSchedulerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicianSchedulerComponent", function() { return ClinicianSchedulerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClinicianSchedulerComponent = class ClinicianSchedulerComponent {
    constructor() {
        //	= {
        //		type: 'Recurring',
        //		startDayNight: '',
        //		endDayNight: '',
        //		startHour: '',
        //		startMin: '',
        //		endHour: '',
        //		endMin: '',
        //		AM
        //	};
        this.hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        this.mins = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
        this.newAvailability['type'] = 'Recurring';
    }
    ngOnInit() {
    }
};
ClinicianSchedulerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clinician-scheduler',
        template: __webpack_require__(/*! raw-loader!./clinician-scheduler.component.html */ "./node_modules/raw-loader/index.js!./src/app/clinician/clinician-scheduler/clinician-scheduler.component.html"),
        styles: [__webpack_require__(/*! ./clinician-scheduler.component.css */ "./src/app/clinician/clinician-scheduler/clinician-scheduler.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ClinicianSchedulerComponent);



/***/ }),

/***/ "./src/app/clinician/clinician-view-apt/clinician-view-apt.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/clinician/clinician-view-apt/clinician-view-apt.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".type {\n\tcolor: black;\n}\n\nlabel {\n\tmargin-bottom: 0;\n}\n\n.number {\n\tbackground: #401958;\n\tcolor: white;\n\tborder-radius: 50%;\n\tmargin-right: 1em;\n\tfloat: left;\n\twidth: 30px;\n\tline-height: 30px;\n\ttext-align: center;\n}\n\nbr {\n\tline-height: 2.5;\n}\n\n/*\n.bottom {\n\tposition: absolute;\n\tbottom: 0;\n\twidth: 95%;\n} */\n\n.btn {\n\twidth: 100%;\n}\n\nh3 {\n\tmargin-top: 0;\n}\n\n.top {\n\tmargin-bottom: 15px;\n}\n\n.form-control {\n\tcolor: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljaWFuL2NsaW5pY2lhbi12aWV3LWFwdC9jbGluaWNpYW4tdmlldy1hcHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsV0FBVztDQUNYLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Ozs7O0dBS0c7O0FBRUg7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jbGluaWNpYW4vY2xpbmljaWFuLXZpZXctYXB0L2NsaW5pY2lhbi12aWV3LWFwdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR5cGUge1xuXHRjb2xvcjogYmxhY2s7XG59XG5cbmxhYmVsIHtcblx0bWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm51bWJlciB7XG5cdGJhY2tncm91bmQ6ICM0MDE5NTg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRtYXJnaW4tcmlnaHQ6IDFlbTtcblx0ZmxvYXQ6IGxlZnQ7XG5cdHdpZHRoOiAzMHB4O1xuXHRsaW5lLWhlaWdodDogMzBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5iciB7XG5cdGxpbmUtaGVpZ2h0OiAyLjU7XG59XG5cbi8qXG4uYm90dG9tIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDA7XG5cdHdpZHRoOiA5NSU7XG59ICovXG5cbi5idG4ge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuaDMge1xuXHRtYXJnaW4tdG9wOiAwO1xufVxuXG4udG9wIHtcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG5cdGNvbG9yOiBibGFjaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/clinician/clinician-view-apt/clinician-view-apt.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/clinician/clinician-view-apt/clinician-view-apt.component.ts ***!
  \******************************************************************************/
/*! exports provided: ClinicianViewAptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicianViewAptComponent", function() { return ClinicianViewAptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_checkup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/checkup.service */ "./src/app/core/checkup.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");








let ClinicianViewAptComponent = class ClinicianViewAptComponent {
    constructor(router, route, checkupService, fb, datePipe, authService) {
        this.router = router;
        this.route = route;
        this.checkupService = checkupService;
        this.fb = fb;
        this.datePipe = datePipe;
        this.authService = authService;
        this.modalTitle = '';
        this.modalBody = '';
        this.authService.getName();
        this.route.params.subscribe(params => {
            if (params['checkup']) {
                this.checkupService.getByID('checkup', params['checkup']).then(res => {
                    if (res) {
                        this.checkup = res;
                        this.getUsers();
                        this.getSurveys();
                        this.createForm();
                        this.getTopOptions();
                    }
                    else {
                        this.error('No checkup found');
                    }
                }).catch(err => this.error(err));
            }
            else {
                this.error('no params');
            }
        });
    }
    createForm() {
        const date = this.datePipe.transform(this.checkup.appointment.toDate().toISOString(), 'y-MM-dd', 'UTC');
        this.historyForm = this.fb.group({
            date: [date || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            clinician: [this.checkup.clinicianName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            history: [this.checkup.history || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            notes: [this.checkup.notes || '']
        }, {});
        this.topForm = this.fb.group({
            'user1-top-str': [this.checkup.userTopStr.txt || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'user1-top-con': [this.checkup.userTopCon.txt || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'user2-top-str': [this.checkup.partnerTopStr.txt || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'user2-top-con': [this.checkup.partnerTopCon.txt || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }, {});
    }
    ngOnInit() { }
    getTopOptions() {
        const type = this.checkup.type == 'baby' ? 'personal' : this.checkup.type; // TODO: fix once baby survey is created
        this.checkupService.getByID(`survey-questions`, type).then(opt => {
            if (opt) {
                this.options = opt;
            }
            else
                this.error('No survey options found');
        });
    }
    getUsers() {
        this.checkupService.getByID('user', this.checkup.user).then(usr => {
            if (usr) {
                this.user1 = usr;
                this.checkupService.getByID('user', this.checkup.partner).then(usr2 => {
                    if (usr2) {
                        this.user2 = usr2;
                    }
                    else {
                        this.error('No partner found');
                    }
                });
            }
            else
                this.error('No user found');
        });
    }
    getSurveys() {
        this.checkupService.getByID('survey', this.checkup.userSurvey)
            .then(survey => { if (survey)
            this.user1Survey = survey; });
        this.checkupService.getByID('survey', this.checkup.partnerSurvey)
            .then(survey => { if (survey)
            this.user2Survey = survey; });
    }
    error(err) {
        console.error(err);
        this.modalTitle = 'Error!';
        this.modalBody = 'Unfortunately something went wrong! Please try again later or email info@arammu.org for support.';
        $('#infoModal').modal('show');
        this.router.navigate(['/clinician-dashboard']);
    }
    saveData() {
        const date = this.historyForm.value.date.split('-');
        const d = new Date(date[0], date[1] - 1, date[2]).getTime();
        this.checkup.history = this.historyForm.value.history || this.checkup.history || '';
        this.checkup.notes = this.historyForm.value.notes || this.checkup.notes || '';
        this.checkup.clinicianName = this.historyForm.value.clinician || this.checkup.clinicianName || '';
        this.checkup.appointment = firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].Timestamp.fromMillis(d) || this.checkup.appointment;
        this.checkup.userTopStr = {
            txt: this.topForm.value['user1-top-str'] || this.checkup.userTopStr || '',
            idx: this.options['strengths'].indexOf(this.topForm.value['user1-top-str'] || this.checkup.userTopStr || '')
        };
        this.checkup.userTopCon = {
            txt: this.topForm.value['user1-top-con'] || this.checkup.userTopCon || '',
            idx: this.options['concerns'].indexOf(this.topForm.value['user1-top-con'] || this.checkup.userTopCon || '')
        };
        this.checkup.partnerTopStr = {
            txt: this.topForm.value['user2-top-str'] || this.checkup.partnerTopStr || '',
            idx: this.options['strengths'].indexOf(this.topForm.value['user2-top-str'] || this.checkup.partnerTopStr || '')
        };
        this.checkup.partnerTopCon = {
            txt: this.topForm.value['user2-top-con'] || this.checkup.partnerTopCon || '',
            idx: this.options['concerns'].indexOf(this.topForm.value['user2-top-con'] || this.checkup.partnerTopCon || '')
        };
        const areDone = ['history', 'clinicianName', 'appointment', 'userTopStr', 'userTopCon', 'partnerTopStr', 'partnerTopCon'];
        this.checkup.feedbackReady = Object.keys(this.checkup).map(e => areDone.indexOf(e) == -1 ||
            areDone.indexOf(e) > -1 && !!this.checkup[e]).every(e => !!e);
        this.checkupService.updateCheckup(this.checkup.id, this.checkup)
            .then(() => {
            this.modalTitle = 'Success!';
            this.modalBody = 'Successfully Saved.';
            $('#infoModal').modal('show');
        }).catch(err => this.error(err));
    }
};
ClinicianViewAptComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_checkup_service__WEBPACK_IMPORTED_MODULE_3__["CheckupService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
ClinicianViewAptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clinician-view-apt',
        template: __webpack_require__(/*! raw-loader!./clinician-view-apt.component.html */ "./node_modules/raw-loader/index.js!./src/app/clinician/clinician-view-apt/clinician-view-apt.component.html"),
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        styles: [__webpack_require__(/*! ./clinician-view-apt.component.css */ "./src/app/clinician/clinician-view-apt/clinician-view-apt.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_checkup_service__WEBPACK_IMPORTED_MODULE_3__["CheckupService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
], ClinicianViewAptComponent);



/***/ }),

/***/ "./src/app/clinician/clinician-view-surveys/clinician-view-surveys.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/clinician/clinician-view-surveys/clinician-view-surveys.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".type {\n\tcolor: black;\n}\n\n.title {\n\tcolor: #401958;\n\tfont-size: 150%;\n\tfont-weight: bold;\n\ttext-align: left;\n\ttext-transform: uppercase;\n}\n\n.container {\n\tpadding: 0;\n}\n\nh2 {\n\ttext-align: center;\n\tmargin-bottom: 1em;\n}\n\ntbody {\n\tborder-bottom: .25em solid #401958;\n\tborder-top: .25em solid #401958;\n}\n\nthead th {\n\tborder-top: none;\n}\n\n@media (min-width: 1200px) {\n\t.container {\n\t\tmax-width: 90vw;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljaWFuL2NsaW5pY2lhbi12aWV3LXN1cnZleXMvY2xpbmljaWFuLXZpZXctc3VydmV5cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQ0FBa0M7Q0FDbEMsK0JBQStCO0FBQ2hDOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0M7RUFDQyxlQUFlO0NBQ2hCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9jbGluaWNpYW4vY2xpbmljaWFuLXZpZXctc3VydmV5cy9jbGluaWNpYW4tdmlldy1zdXJ2ZXlzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHlwZSB7XG5cdGNvbG9yOiBibGFjaztcbn1cblxuLnRpdGxlIHtcblx0Y29sb3I6ICM0MDE5NTg7XG5cdGZvbnQtc2l6ZTogMTUwJTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250YWluZXIge1xuXHRwYWRkaW5nOiAwO1xufVxuXG5oMiB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG50Ym9keSB7XG5cdGJvcmRlci1ib3R0b206IC4yNWVtIHNvbGlkICM0MDE5NTg7XG5cdGJvcmRlci10b3A6IC4yNWVtIHNvbGlkICM0MDE5NTg7XG59XG5cbnRoZWFkIHRoIHtcblx0Ym9yZGVyLXRvcDogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuXHQuY29udGFpbmVyIHtcblx0XHRtYXgtd2lkdGg6IDkwdnc7XG5cdH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/clinician/clinician-view-surveys/clinician-view-surveys.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/clinician/clinician-view-surveys/clinician-view-surveys.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ClinicianViewSurveysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicianViewSurveysComponent", function() { return ClinicianViewSurveysComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_checkup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/checkup.service */ "./src/app/core/checkup.service.ts");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");





let ClinicianViewSurveysComponent = class ClinicianViewSurveysComponent {
    constructor(router, route, checkupService, authService) {
        this.router = router;
        this.route = route;
        this.checkupService = checkupService;
        this.authService = authService;
        this.modalTitle = '';
        this.modalBody = '';
        this.allConcerns = [];
        this.allStrengths = [];
        this.authService.getName();
        this.route.params.subscribe(params => {
            if (params['checkup']) {
                this.checkupService.getByID('checkup', params['checkup']).then(res => {
                    if (res) {
                        this.checkup = res;
                        this.getUsers();
                        this.getResults();
                    }
                    else {
                        this.error('No checkup found');
                    }
                }).catch(err => this.error(err));
            }
            else {
                this.error('no params');
            }
        });
    }
    ngOnInit() { }
    getResults() {
        this.checkupService.getByID('survey', this.checkup.userSurvey).then(sur => {
            if (sur) {
                this.user1Results = sur;
            }
            else {
                this.user1Results = null;
            }
            this.checkupService.getByID('survey', this.checkup.partnerSurvey).then(sur2 => {
                if (sur2) {
                    this.user2Results = sur2;
                }
                else {
                    this.user2Results = null;
                }
                this.parseResults();
            });
        });
    }
    parseResults() {
        if (this.user1Results && this.user1Results && this.user2Results && this.user2Results.results) { // both complete
            const tempStr1 = this.user1Results.results.strengths.map(e => ({ des: e.description, user1: e.answer }));
            const tempStr2 = this.user2Results.results.strengths.map(e => ({ des: e.description, user2: e.answer }));
            this.allStrengths = tempStr1.map(e => Object.assign(e, tempStr2.find(e2 => e2.des == e.des)));
            const tempCon1 = this.user1Results.results.concerns.map(e => ({ des: e.description, user1: e.answer }));
            const tempCon2 = this.user2Results.results.concerns.map(e => ({ des: e.description, user2: e.answer }));
            this.allConcerns = tempCon1.map(e => Object.assign(e, tempCon2.find(e2 => e2.des == e.des)));
        }
        else if (this.user1Results && this.user1Results) { // one complete
            this.allStrengths = this.user1Results.results.strengths.map(e => ({ 'res': e.description, 'user1': e.answer, 'user2': '' }));
            this.allConcerns = this.user1Results.results.concerns.map(e => ({ 'res': e.description, 'user1': e.answer, 'user2': '' }));
        }
        else if (this.user2Results && this.user2Results.results) { // one complete
            this.allStrengths = this.user1Results.results.strengths.map(e => ({ 'res': e.description, 'user1': '', 'user2': e.answer }));
            this.allConcerns = this.user1Results.results.concerns.map(e => ({ 'res': e.description, 'user1': '', 'user2': e.answer }));
        }
    }
    getUsers() {
        this.checkupService.getByID('user', this.checkup.user).then(usr => {
            if (usr) {
                this.user1 = usr;
                this.checkupService.getByID('user', this.checkup.partner).then(usr2 => {
                    if (usr2) {
                        this.user2 = usr2;
                    }
                    else {
                        this.error('No partner found');
                    }
                });
            }
            else {
                this.error('No user found');
            }
        });
    }
    error(err) {
        console.error(err);
        this.modalTitle = 'Error!';
        this.modalBody = 'Unfortunately something went wrong! Please try again later or email info@arammu.org for support.';
        $('#infoModal').modal('show');
        this.router.navigate(['/clinician-dashboard']);
    }
};
ClinicianViewSurveysComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_checkup_service__WEBPACK_IMPORTED_MODULE_3__["CheckupService"] },
    { type: src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
ClinicianViewSurveysComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clinician-view-surveys',
        template: __webpack_require__(/*! raw-loader!./clinician-view-surveys.component.html */ "./node_modules/raw-loader/index.js!./src/app/clinician/clinician-view-surveys/clinician-view-surveys.component.html"),
        styles: [__webpack_require__(/*! ./clinician-view-surveys.component.css */ "./src/app/clinician/clinician-view-surveys/clinician-view-surveys.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_checkup_service__WEBPACK_IMPORTED_MODULE_3__["CheckupService"],
        src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], ClinicianViewSurveysComponent);



/***/ }),

/***/ "./src/app/common/modal-action/modal-action.component.css":
/*!****************************************************************!*\
  !*** ./src/app/common/modal-action/modal-action.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9tb2RhbC1hY3Rpb24vbW9kYWwtYWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/common/modal-action/modal-action.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/modal-action/modal-action.component.ts ***!
  \***************************************************************/
/*! exports provided: ModalActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalActionComponent", function() { return ModalActionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let ModalActionComponent = class ModalActionComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.actionText = '';
        this.cancelText = '';
        this.modalContent = 'This is the content.';
        this.modalTitle = 'Alert';
    }
    ngOnInit() {
    }
};
ModalActionComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalActionComponent.prototype, "actionText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalActionComponent.prototype, "cancelText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalActionComponent.prototype, "modalContent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalActionComponent.prototype, "modalTitle", void 0);
ModalActionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-action',
        template: __webpack_require__(/*! raw-loader!./modal-action.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/modal-action/modal-action.component.html"),
        styles: [__webpack_require__(/*! ./modal-action.component.css */ "./src/app/common/modal-action/modal-action.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
], ModalActionComponent);



/***/ }),

/***/ "./src/app/core/all-models.model.ts":
/*!******************************************!*\
  !*** ./src/app/core/all-models.model.ts ***!
  \******************************************/
/*! exports provided: ClinicianModel, OrganizationModel, CheckupModel, UserModel, SurveyModel, FeedbackModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicianModel", function() { return ClinicianModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationModel", function() { return OrganizationModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckupModel", function() { return CheckupModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyModel", function() { return SurveyModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackModel", function() { return FeedbackModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);



class ClinicianModel {
    constructor(firstName, lastName, email, organization, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.bio = '';
        this.picture = './assets/default-pic.png';
        this.organization = organization;
        this.registered = false;
        this.active = false;
        this.pending = false;
        this.activationNotes = '';
        this.timestampCreated = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].Timestamp.now();
        this.canRefer = false;
        this.referCode = '';
        this.slug = '';
        this.id = id;
    }
}
ClinicianModel.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String }
];
class OrganizationModel {
    constructor(name, contactName, contactEmail, email, id) {
        this.name = name;
        this.contactName = contactName;
        this.contactEmail = contactEmail;
        this.email = email;
        this.confirmed = false;
        this.timestampCreated = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].Timestamp.now();
        this.id = id;
    }
}
OrganizationModel.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String }
];
class CheckupModel {
    constructor() {
        this.user = '';
        this.partner = '';
        this.userSurvey = '';
        this.partnerSurvey = '';
        this.userConfirmAppointment = false;
        this.partnerConfirmAppointment = false;
        this.clinician = '';
        this.appointment = null;
        this.feedback = '';
        this.userViewedFeedback = false;
        this.partnerViewedFeedback = false;
        this.partnerAccepted = false;
        this.timestampRequested = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].Timestamp.now();
        this.type = '';
        this.history = '';
        this.notes = '';
        this.zoom = '';
        this.clinicianName = '';
        this.userTopStr = { idx: -1, txt: '' };
        this.userTopCon = { idx: -1, txt: '' };
        this.partnerTopStr = { idx: -1, txt: '' };
        this.partnerTopCon = { idx: -1, txt: '' };
        this.location = 'zoom';
        this.feedbackReady = false;
        this.complete = false;
        this.id = '';
    }
}
class UserModel {
    constructor(firstName, lastName, email, id, company) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.checkups = [];
        this.picture = '';
        this.id = id;
        this.timestampCreated = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].Timestamp.now();
        this.counselorCode = '';
        this.shouldPay = true;
        this.company = company;
    }
}
UserModel.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Type"])(() => CheckupModel),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], UserModel.prototype, "checkups", void 0);
class SurveyModel {
    constructor() {
        this.results = {
            concerns: [], strengths: [],
            tops: {
                firstStrength: { idx: -1, txt: '' }, secondStrength: { idx: -1, txt: '' }, thirdStrength: { idx: -1, txt: '' },
                firstConcern: { idx: -1, txt: '' }, secondConcern: { idx: -1, txt: '' }, thirdConcern: { idx: -1, txt: '' }
            }
        };
        this.date = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].Timestamp.now();
        this.user = '';
        this.partner = '';
        this.id = '';
    }
}
class FeedbackModel {
    constructor(userName, userFirstStr, userSecondStr, userThirdStr, userFirstCon, userSecondCon, userThirdCon, userTopStr, userStrParagraph, userTopCon, userConParagraph, userOpt1Title, userOpt2Title, userOpt3Title, userOpt4Title, userOpt5Title, userOpt6Title, userOpt1, userOpt2, userOpt3, userOpt4, userOpt5, userOpt6, partnerName, partnerFirstStr, partnerSecondStr, partnerThirdStr, partnerFirstCon, partnerSecondCon, partnerThirdCon, partnerTopStr, partnerStrParagraph, partnerTopCon, partnerConParagraph, partnerOpt1Title, partnerOpt2Title, partnerOpt3Title, partnerOpt4Title, partnerOpt5Title, partnerOpt6Title, partnerOpt1, partnerOpt2, partnerOpt3, partnerOpt4, partnerOpt5, partnerOpt6, user, partner) {
        this.userName = userName;
        this.userFirstStr = userFirstStr;
        this.userSecondStr = userSecondStr;
        this.userThirdStr = userThirdStr;
        this.userFirstCon = userFirstCon;
        this.userSecondCon = userSecondCon;
        this.userThirdCon = userThirdCon;
        this.userTopStr = userTopStr;
        this.userStrParagraph = userStrParagraph;
        this.userTopCon = userTopCon;
        this.userConParagraph = userConParagraph;
        this.userOpt1Title = userOpt1Title;
        this.userOpt2Title = userOpt2Title;
        this.userOpt3Title = userOpt3Title;
        this.userOpt4Title = userOpt4Title;
        this.userOpt5Title = userOpt5Title;
        this.userOpt6Title = userOpt6Title;
        this.userOpt1 = userOpt1;
        this.userOpt2 = userOpt2;
        this.userOpt3 = userOpt3;
        this.userOpt4 = userOpt4;
        this.userOpt5 = userOpt5;
        this.userOpt6 = userOpt6;
        this.partnerName = partnerName;
        this.partnerFirstStr = partnerFirstStr;
        this.partnerSecondStr = partnerSecondStr;
        this.partnerThirdStr = partnerThirdStr;
        this.partnerFirstCon = partnerFirstCon;
        this.partnerSecondCon = partnerSecondCon;
        this.partnerThirdCon = partnerThirdCon;
        this.partnerTopStr = partnerTopStr;
        this.partnerStrParagraph = partnerStrParagraph;
        this.partnerTopCon = partnerTopCon;
        this.partnerConParagraph = partnerConParagraph;
        this.partnerOpt1Title = partnerOpt1Title;
        this.partnerOpt2Title = partnerOpt2Title;
        this.partnerOpt3Title = partnerOpt3Title;
        this.partnerOpt4Title = partnerOpt4Title;
        this.partnerOpt5Title = partnerOpt5Title;
        this.partnerOpt6Title = partnerOpt6Title;
        this.partnerOpt1 = partnerOpt1;
        this.partnerOpt2 = partnerOpt2;
        this.partnerOpt3 = partnerOpt3;
        this.partnerOpt4 = partnerOpt4;
        this.partnerOpt5 = partnerOpt5;
        this.partnerOpt6 = partnerOpt6;
        this.user = user;
        this.partner = partner;
        this.timestampSaved = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].Timestamp.now();
    }
}
FeedbackModel.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/core/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);






let AuthGuard = class AuthGuard {
    constructor(afAuth, userService, router) {
        this.afAuth = afAuth;
        this.userService = userService;
        this.router = router;
    }
    canActivate(route, state) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // const user = auth().currentUser;
            return this.getCurrentUser().then(user => {
                const preURL = (route.data && route.data.company) ? route.data.company : '';
                const url = (route.data && route.data.company) ? state.url.replace(`/${route.data.company}`, '') : state.url;
                if (user) { // logged in
                    switch (url) {
                        case '/login':
                        case '/register':
                            if (user['displayName'] == 'clinician')
                                return this.router.parseUrl(preURL + '/clinician-dashboard');
                            else
                                return this.router.parseUrl(preURL + '/dashboard');
                        default:
                            return true;
                    }
                }
                else { // not logged in DENY! >:)
                    return (url == '/login' || url == '/register') ? true : this.router.parseUrl(preURL + '/login');
                }
            });
        });
    }
    getCurrentUser() {
        return new Promise((resolve, reject) => {
            const unsubscribe = Object(firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"])().onAuthStateChanged(user => {
                unsubscribe();
                resolve(user);
            }, reject);
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _core_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _core_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_all_models_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/all-models.model */ "./src/app/core/all-models.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-handler.service */ "./src/app/core/error-handler.service.ts");








let AuthService = class AuthService {
    constructor(db, afAuth, router, errorHandler) {
        this.db = db;
        this.afAuth = afAuth;
        this.router = router;
        this.errorHandler = errorHandler;
        this.userName = '';
        this.getName();
    }
    registerUser(user, p) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let [err, res] = yield this.errorHandler.handleErrors(Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().createUserWithEmailAndPassword(user.email, p), 'Could not sign up user.');
            if (err)
                return [err, res];
            [err, res] = yield this.errorHandler.handleErrors(Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().currentUser.updateProfile({ displayName: 'user' }), 'Could not update user type.');
            if (err)
                return [err, res];
            user.id = Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().currentUser.uid;
            [err, res] = yield this.errorHandler.handleErrors(this.db.collection('user').doc(user.id).set(Object.assign({}, user)), 'Could not add user to database.');
            if (err)
                return [err, res];
            this.userName = user.firstName;
            if (user.company != 'canyonranch')
                this.checkCheckups(user.email, user.id); // TODO: unhard code company check
            return [null, user];
        });
    }
    registerClinician(clinician, p) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let [err, res] = yield this.errorHandler.handleErrors(Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().createUserWithEmailAndPassword(clinician.email, p), 'Could not sign up clinician.');
            if (err)
                return [err, res];
            [err, res] = yield this.errorHandler.handleErrors(Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().currentUser.updateProfile({ displayName: 'clinician' }), 'Could not update clinician type.');
            if (err)
                return [err, res];
            clinician.id = Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().currentUser.uid;
            [err, res] = yield this.errorHandler.handleErrors(this.db.collection('clinician').doc(clinician.id).set(Object.assign({}, clinician)), 'Could not add clinician to database.');
            if (err)
                return [err, res];
            if (clinician.canRefer) {
                [err, res] = yield this.errorHandler.handleErrors(this.db.collection('refer-codes')
                    .add({ clinician: clinician.id, code: clinician.referCode, active: true, created: firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].Timestamp.now() }), 'Could not add clinician refer code.');
                if (err)
                    return [err, res];
            }
            this.userName = clinician.firstName;
            return [null, clinician];
        });
    }
    doRegister(value) {
        return new Promise((resolve, reject) => {
            Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().createUserWithEmailAndPassword(value.email, value.password)
                .then(() => {
                const newUser = value.clinician ? new _core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["ClinicianModel"](value.firstName, value.lastName, value.email, value.organization, Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().currentUser.uid) :
                    new _core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["UserModel"](value.firstName, value.lastName, value.email, Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().currentUser.uid, value.company || '');
                const type = (value.clinician) ? 'clinician' : 'user';
                Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().currentUser.updateProfile({ displayName: type, photoURL: '' })
                    .then(() => {
                    this.db.collection(type).doc(Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().currentUser.uid).set(Object.assign({}, newUser))
                        .then(() => {
                        this.userName = value.company ? `${value.firstName} ${value.firstName}` : value.firstName;
                        if (value.company != 'canyonranch')
                            this.checkCheckups(newUser.email, newUser.id);
                        resolve(newUser);
                    }).catch(err => {
                        console.error(err);
                        resolve(null);
                    });
                }).catch(err => {
                    console.error(err);
                    resolve(null);
                });
            }).catch(err => {
                console.error(err);
                resolve(null);
            });
        });
    }
    checkCheckups(email, id) {
        this.db.collection('checkup', ref => ref.where('partner', '==', email)).ref.get()
            .then(checkups => {
            if (!checkups.empty) {
                checkups.forEach(checkup => {
                    if (checkup.data().partner == email)
                        checkup.ref.update({ partner: id });
                });
            }
        });
    }
    doCRRegister(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const usr1 = yield this.doRegister({
                email: `${new Date().getTime()}@canyon.ranch`, password: value.password, firstName: value.firstName,
                lastName: value.lastName, company: 'canyonranch'
            });
            const usr2 = yield this.doRegister({
                email: `${new Date().getTime()}@canyon.ranch`, password: value.partnerPassword, firstName: value.partnerFirstName,
                lastName: value.partnerLastName, company: 'canyonranch'
            });
            if (!usr1 || !usr2) {
                console.error('Could not register both CR users', usr1, usr2);
                return Promise.reject(null);
            }
            this.afAuth.auth.signOut();
            const checkup = new _core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["CheckupModel"]();
            const date = value.aptDate.split('-');
            const d = new Date(date[0], date[1] - 1, date[2]).getTime();
            checkup.user = usr1.id;
            checkup.partner = usr2.id;
            checkup.clinician = 'ATi8CfJabaXmHURVMTG9mSsylgi2'; // TODO: unhard code from CR clinician email!!!
            checkup.appointment = firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].Timestamp.fromMillis(d);
            checkup.type = 'personal';
            checkup.location = value.location;
            checkup.partnerAccepted = true;
            const id = this.db.createId();
            checkup.id = id;
            this.afAuth.auth.signOut();
            this.userName = '';
            try {
                this.db.collection('checkup').doc(id).set(Object.assign({}, checkup));
                return Promise.resolve([usr1, usr2]);
            }
            catch (e) {
                console.log('error', e);
                return Promise.resolve(null);
            }
        });
    }
    doLogin(value) {
        return new Promise((resolve, reject) => {
            Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().signInWithEmailAndPassword(value.userid, value.password)
                .then(res => {
                this.getName();
                resolve(res);
            }, err => reject(err));
        });
    }
    doLogout() {
        this.userName = '';
        if (Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().currentUser) {
            this.router.navigate(['/home']);
            this.afAuth.auth.signOut();
        }
        else {
            console.log('No user logged in');
            this.router.navigate(['/home']);
        }
    }
    getName() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().currentUser;
            if (user) {
                this.db.collection(user.displayName).doc(user.uid).ref.get()
                    .then(doc => {
                    if (!doc.exists)
                        this.userName = '';
                    else
                        this.userName = doc.data().firstName;
                }).catch(err => {
                    this.userName = '';
                    console.error('no user found', err);
                });
            }
            else
                this.userName = '';
        });
    }
    changePassword(email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.getName();
            return Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().sendPasswordResetEmail(email)
                .then(_ => true).catch(err => {
                if (err.code == 'auth/user-not-found')
                    return true;
                console.log('coulnt send email', err);
                return false;
            });
        });
    }
    updatePassword(values) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.getName();
            const cred = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].EmailAuthProvider.credential(Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().currentUser.email, values.curPassword);
            return Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().currentUser.reauthenticateWithCredential(cred)
                .then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                return Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().currentUser.updatePassword(values.newPassword)
                    .then(() => [true]).catch(err => {
                    console.log('coulnt update password', err);
                    return [false, err];
                });
            })).catch(err => {
                console.log('coulnt authenticate', err);
                return [false, err];
            });
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _error_handler_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlerService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _error_handler_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlerService"]])
], AuthService);



/***/ }),

/***/ "./src/app/core/checkup.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/checkup.service.ts ***!
  \*****************************************/
/*! exports provided: CheckupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckupService", function() { return CheckupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);







let CheckupService = class CheckupService {
    constructor(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
    }
    addSurvey(survey) {
        survey.date = firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].Timestamp.now();
        return new Promise((resolve, reject) => {
            const id = this.db.createId();
            survey.id = id;
            this.db.collection('survey').doc(id).set(Object.assign({}, survey))
                .then(() => {
                resolve(id);
            }).catch(err => {
                console.error('Error adding survey: ', err);
                reject(false);
            });
        });
    }
    getByID(collection, id) {
        return new Promise((resolve, reject) => {
            if (collection && collection.length > 0 && id && id.length > 0) {
                this.db.collection(collection).doc(id).ref.get()
                    .then(doc => {
                    if (!doc.exists) {
                        console.error(`Could not find ${collection} ${id}`);
                        resolve(false);
                    }
                    else {
                        resolve(doc.data());
                    }
                }).catch(err => {
                    console.error('error getting ${collection}', err);
                    reject(false);
                });
            }
            else {
                resolve(false);
            }
        });
    }
    addCheckup(checkup) {
        return new Promise((resolve, reject) => {
            const id = this.db.createId();
            checkup.id = id;
            this.db.collection('checkup').doc(id).set(Object.assign({}, checkup))
                .then(() => {
                resolve(id);
            }).catch(err => {
                console.error('Error adding checkup: ', err);
                reject(false);
            });
        });
    }
    updateCheckup(id, json) {
        return new Promise((resolve, reject) => {
            this.db.collection('checkup').doc(id).ref
                .update(json).then(doc => {
                resolve(doc);
            }).catch(err => {
                reject('Could not update user at this time');
                console.error(err);
            });
        });
    }
    checkCheckupExists(uid1, uid2) {
        const userRef = this.db.collection('checkup', ref => ref.where('partner', '==', uid1).where('user', '==', uid2));
        const partnerRef = this.db.collection('checkup', ref => ref.where('partner', '==', uid2).where('user', '==', uid1));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([userRef.valueChanges(), partnerRef.valueChanges()])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((checkups) => {
            const [userCheckups, partnerCheckups] = checkups;
            const combined = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(userCheckups.concat(partnerCheckups));
            return combined;
        }));
    }
    getCheckups(uid) {
        const userRef = this.db.collection('checkup', ref => ref.where('user', '==', uid));
        const partnerRef = this.db.collection('checkup', ref => ref.where('partner', '==', uid));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([userRef.valueChanges(), partnerRef.valueChanges()])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((checkups) => {
            const [userCheckups, partnerCheckups] = checkups;
            const combined = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(userCheckups.concat(partnerCheckups));
            return combined;
        }));
    }
    updateFeedback(feedback) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.db.collection('feedback').doc(feedback.id)
                .update(feedback).then(() => true).catch(err => {
                console.log('Could not update feedback report', err);
                return false;
            });
        });
    }
    createFeedback(feedback, checkupID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            feedback.id = feedback.id || this.db.createId();
            return this.db.collection('feedback').doc(feedback.id)
                .set(feedback).then(() => {
                return this.updateCheckup(checkupID, { feedback: feedback.id });
            }).catch(err => {
                console.log('Could not create feedback report', err);
                return false;
            });
        });
    }
};
CheckupService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
CheckupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
], CheckupService);



/***/ }),

/***/ "./src/app/core/clinician.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/clinician.service.ts ***!
  \*******************************************/
/*! exports provided: ClinicianService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicianService", function() { return ClinicianService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_all_models_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/all-models.model */ "./src/app/core/all-models.model.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");








let ClinicianService = class ClinicianService {
    constructor(db, afAuth, authService) {
        this.db = db;
        this.afAuth = afAuth;
        this.authService = authService;
    }
    getCurrentClinician() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.authService.getName();
            const user = Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().currentUser;
            if (user) {
                return this.db.collection('clinician').doc(user.uid).ref.get()
                    .then(doc => {
                    if (!doc.exists)
                        return null;
                    else
                        return Object(class_transformer__WEBPACK_IMPORTED_MODULE_6__["plainToClass"])(_core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["ClinicianModel"], doc.data());
                }).catch(_ => null);
            }
            else
                return Promise.resolve(null);
        });
    }
    updateCurrentClinician(value) {
        const t = this;
        return new Promise((resolve, reject) => {
            const user = Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().currentUser;
            const updatedUser = Object(class_transformer__WEBPACK_IMPORTED_MODULE_6__["plainToClass"])(_core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["ClinicianModel"], value);
            if (user.uid != value.id) {
                console.error('User ids don\'t match');
                reject('User ids don\'t match');
            }
            else {
                t.db.collection('clinician').doc(user.uid).ref
                    .update(updatedUser).then(doc => {
                    resolve(doc);
                }).catch(err => {
                    reject('Could not update clinician at this time');
                    console.error(err);
                });
            }
        });
    }
    getAllClinicians() {
        return this.db.collection('clinician').valueChanges();
    }
    getAllOrganization() {
        return this.db.collection('organization').valueChanges();
    }
    getAllActiveClinicians() {
        return this.db.collection('clinician', ref => ref.where('active', '==', true)).valueChanges();
    }
    getCheckups(id) {
        return this.db.collection('checkup', ref => ref.where('clinician', '==', id)).valueChanges();
    }
    addClinician(clinician) {
        return new Promise((resolve, reject) => {
            const id = this.db.createId();
            const newClinician = new _core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["ClinicianModel"](clinician.firstName, clinician.lastName, clinician.email, clinician.organization, id);
            this.db.collection('clinician').doc(id).set(Object.assign({}, newClinician))
                .then(() => {
                resolve(id);
            }).catch(err => {
                console.error('Error adding clinician: ', err);
                reject(false);
            });
        });
    }
    addOrganization(organization) {
        return new Promise((resolve, reject) => {
            const id = this.db.createId();
            const newOrganization = new _core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["OrganizationModel"](organization.name, organization.contactName, organization.contactEmail, organization.email, id);
            this.db.collection('organization').doc(id).set(Object.assign({}, newOrganization))
                .then(() => {
                resolve(id);
            }).catch(err => {
                console.error('Error adding organization: ', err);
                reject(false);
            });
        });
    }
    getOrganization(id) {
        return new Promise((resolve, reject) => {
            this.db.collection('organization').doc(id).ref.get()
                .then(doc => {
                if (!doc.exists)
                    reject('Organization does not exist.');
                else {
                    const newOrg = Object(class_transformer__WEBPACK_IMPORTED_MODULE_6__["plainToClass"])(_core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["OrganizationModel"], doc.data());
                    resolve(newOrg);
                }
            }).catch(err => {
                reject('Organization does not exist.');
                console.error(err);
            });
        });
    }
    getClinician(id) {
        return new Promise((resolve, reject) => {
            this.db.collection('clinician').doc(id).ref.get()
                .then(doc => {
                if (!doc.exists) {
                    reject('Clinician does not exist.');
                }
                else {
                    const newCli = Object(class_transformer__WEBPACK_IMPORTED_MODULE_6__["plainToClass"])(_core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["ClinicianModel"], doc.data());
                    resolve(newCli);
                }
            }).catch(() => {
                reject('Clinician does not exist.');
            });
        });
    }
    deleteClinician(id) {
        return new Promise((resolve, reject) => {
            this.db.collection('clinician').doc(id).delete()
                .then(_ => {
                resolve(true);
            }).catch(err => {
                console.error('Error deleting clinician: ', err);
                reject(false);
            });
        });
        // TODO: delete all occurrences
    }
    deleteOrganization(id) {
        return new Promise((resolve, reject) => {
            this.db.collection('organization').doc(id).delete()
                .then(_ => {
                resolve(true);
            }).catch(err => {
                console.error('Error deleting organization: ', err);
                reject(false);
            });
        });
        // TODO: delete all occurrences
    }
    updateClinician(clinician) {
        return new Promise((resolve, reject) => {
            this.db.collection('clinician').doc(clinician.id).ref
                .update(Object.assign({}, clinician)).then(doc => {
                resolve(doc);
            }).catch(err => {
                reject('Could not update clinician at this time');
                console.error(err);
            });
        });
    }
};
ClinicianService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
ClinicianService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
], ClinicianService);



/***/ }),

/***/ "./src/app/core/error-handler.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/error-handler.service.ts ***!
  \***********************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorHandlerService = class ErrorHandlerService {
    constructor() { }
    // TODO: add modal option if needed
    handleErrors(promise, errorMsg = 'Something went wrong, please try again or contact info@arammu.org for support.') {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return promise.then((data) => [null, data])
                .catch((err) => [err, errorMsg]);
        });
    }
};
ErrorHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ErrorHandlerService);



/***/ }),

/***/ "./src/app/core/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_all_models_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/all-models.model */ "./src/app/core/all-models.model.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! class-transformer */ "./node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");








let UserService = class UserService {
    constructor(db, afAuth, authService) {
        this.db = db;
        this.afAuth = afAuth;
        this.authService = authService;
    }
    getCurrentUser() {
        this.authService.getName();
        const id = Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().currentUser ? Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().currentUser.uid : false;
        if (id)
            return this.getUser(Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().currentUser.uid);
        else
            return Promise.resolve(null);
    }
    getUser(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.db.collection('user').doc(id).ref.get()
                .then(doc => {
                if (!doc.exists) {
                    console.error(`Could not find user ${id}`);
                    return null;
                }
                else
                    return Object(class_transformer__WEBPACK_IMPORTED_MODULE_6__["plainToClass"])(_core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["UserModel"], doc.data());
            }).catch(err => {
                console.error('error getting user', err);
                return null;
            });
        });
    }
    checkPartner(email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.db.collection('user', ref => ref.where('email', '==', email.toLowerCase())).ref.get()
                .then(doc => {
                doc.forEach(d => {
                    console.log(d.data());
                });
                if (!doc.empty)
                    return Object(class_transformer__WEBPACK_IMPORTED_MODULE_6__["plainToClass"])(_core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["UserModel"], doc[0]);
                else
                    return null;
            }).catch(() => null);
        });
    }
    updateCurrentUser(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = Object(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"])().currentUser;
            const updatedUser = Object(class_transformer__WEBPACK_IMPORTED_MODULE_6__["plainToClass"])(_core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["UserModel"], value);
            if (user.uid != value.id) {
                console.error('User ids don\'t match');
                return Promise.resolve(false);
            }
            else {
                return this.db.collection('user').doc(user.uid).ref
                    .update(updatedUser)
                    .then(doc => doc)
                    .catch(err => {
                    console.error('Could not update user at this time', err);
                    return false;
                });
            }
        });
    }
    checkBusiness(id) {
        return new Promise((resolve, reject) => {
            this.getUser(id).then(user => {
                if (user != null) {
                    this.db.collection('organization', ref => ref.where('email', '==', user.email.split('@')[1]).limit(1))
                        .valueChanges().subscribe(doc => {
                        if (doc.length == 1) {
                            resolve(user);
                        }
                        else {
                            resolve(false);
                        }
                    });
                }
                else {
                    console.error('could not find user');
                    reject(false);
                }
            }).catch(err => {
                console.error('error getting user', err);
                reject(false);
            });
        });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
], UserService);



/***/ }),

/***/ "./src/app/front-facing/arammu-consultants/arammu-consultants.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/front-facing/arammu-consultants/arammu-consultants.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250LWZhY2luZy9hcmFtbXUtY29uc3VsdGFudHMvYXJhbW11LWNvbnN1bHRhbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/front-facing/arammu-consultants/arammu-consultants.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/front-facing/arammu-consultants/arammu-consultants.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ArammuConsultantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArammuConsultantsComponent", function() { return ArammuConsultantsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArammuConsultantsComponent = class ArammuConsultantsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ArammuConsultantsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-arammu-consultants',
        template: __webpack_require__(/*! raw-loader!./arammu-consultants.component.html */ "./node_modules/raw-loader/index.js!./src/app/front-facing/arammu-consultants/arammu-consultants.component.html"),
        styles: [__webpack_require__(/*! ./arammu-consultants.component.css */ "./src/app/front-facing/arammu-consultants/arammu-consultants.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ArammuConsultantsComponent);



/***/ }),

/***/ "./src/app/front-facing/blog/blog.component.css":
/*!******************************************************!*\
  !*** ./src/app/front-facing/blog/blog.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250LWZhY2luZy9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/front-facing/blog/blog.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/front-facing/blog/blog.component.ts ***!
  \*****************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlogComponent = class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
};
BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blog',
        template: __webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/front-facing/blog/blog.component.html"),
        styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/front-facing/blog/blog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BlogComponent);



/***/ }),

/***/ "./src/app/front-facing/footer/footer.component.css":
/*!**********************************************************!*\
  !*** ./src/app/front-facing/footer/footer.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3, h4 {\n\tcolor: rgba(255, 255, 255, .4);\n}\n\nh5 {\n\tcolor: rgba(255, 255, 255, 0.75);\n\tfont-weight: 300;\n}\n\nh5:hover {\n\tcolor: #fff;\n}\n\nfooter {\n\tbackground: #401958;\n\t/* margin-top: 2.5%; */\n}\n\n.container {\n\tpadding: 2% 0 1%;\n}\n\n.small {\n\tmargin: 0 20%;\n}\n\nhr {\n\tborder-color: #ffffff30;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnQtZmFjaW5nL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGdDQUFnQztDQUNoQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZnJvbnQtZmFjaW5nL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzLCBoNCB7XG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC40KTtcbn1cblxuaDUge1xuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcblx0Zm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuaDU6aG92ZXIge1xuXHRjb2xvcjogI2ZmZjtcbn1cblxuZm9vdGVyIHtcblx0YmFja2dyb3VuZDogIzQwMTk1ODtcblx0LyogbWFyZ2luLXRvcDogMi41JTsgKi9cbn1cblxuLmNvbnRhaW5lciB7XG5cdHBhZGRpbmc6IDIlIDAgMSU7XG59XG5cbi5zbWFsbCB7XG5cdG1hcmdpbjogMCAyMCU7XG59XG5cbmhyIHtcblx0Ym9yZGVyLWNvbG9yOiAjZmZmZmZmMzA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/front-facing/footer/footer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/front-facing/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");




let FooterComponent = class FooterComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.feedback = true;
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])
                this.changeColor(event);
        });
    }
    changeColor(event) {
        if (event.url == '/view-feedback-report')
            this.feedback = false;
    }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/front-facing/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/front-facing/footer/footer.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], FooterComponent);



/***/ }),

/***/ "./src/app/front-facing/for-businesses/for-businesses.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/front-facing/for-businesses/for-businesses.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250LWZhY2luZy9mb3ItYnVzaW5lc3Nlcy9mb3ItYnVzaW5lc3Nlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/front-facing/for-businesses/for-businesses.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/front-facing/for-businesses/for-businesses.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForBusinessesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForBusinessesComponent", function() { return ForBusinessesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForBusinessesComponent = class ForBusinessesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForBusinessesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-for-businesses',
        template: __webpack_require__(/*! raw-loader!./for-businesses.component.html */ "./node_modules/raw-loader/index.js!./src/app/front-facing/for-businesses/for-businesses.component.html"),
        styles: [__webpack_require__(/*! ./for-businesses.component.css */ "./src/app/front-facing/for-businesses/for-businesses.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ForBusinessesComponent);



/***/ }),

/***/ "./src/app/front-facing/for-couples/for-couples.component.css":
/*!********************************************************************!*\
  !*** ./src/app/front-facing/for-couples/for-couples.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered {\n\tposition: relative;\n\ttop: -15vh;\n\twidth: 100%;\n}\n\n.top-img {\n\tz-index: -1;\n\t-webkit-filter: brightness(75%);\n\t        filter: brightness(75%);\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\theight: 550px;\n}\n\nbutton {\n\tborder-color: transparent;\n}\n\n.title {\n\tcolor: white;\n\ttext-transform: uppercase;\n\tfont-size: 5vw;\n\tmargin: 0;\n\tletter-spacing: 0.0588235em;\n}\n\n.subtitle {\n\tfont-style: italic;\n\ttext-transform: none;\n\tcolor: white;\n\tmargin: .5em 0 0;\n}\n\n.sign-up {\n\tbackground: #401958;\n\tborder: .15em solid white;\n\tmargin-bottom: 2em;\n\tfont-size: 20px;\n}\n\n.container {\n\tpadding: 0px 8vw;\n}\n\n.sec-title {\n\tcolor: #401958;\n\ttext-transform: none;\n\tmargin-top: 4em;\n\tpadding: 0px 13vw;\n}\n\n.c-text {\n\tcolor: #5E5E5E;\n\tletter-spacing: 0.0588235em;\n\tline-height: 1.75em;\n\tmargin: 2em 0 3em;\n\tfont-size: 1.15vw;\n\tcolor: rgba(26, 26, 26, .7);\n\tpadding: 0px 9vw;\n}\n\n.quote {\n\tfont-size: 5em;\n\tdisplay: block;\n\topacity: .3;\n\tline-height: .5em;\n\tcolor: #401958;\n\tmargin-top: .75em;\n}\n\n.purp-text {\n\tcolor: #401958;\n\tfont-style: italic;\n\tline-height: 2em;\n\tfont-size: 1.15vw;\n}\n\n.sCarousel {\n\twidth: 100%;\n\theight: auto;\n}\n\n.carousel-caption {\n\tz-index: 1;\n\tleft: 10%;\n\tright: 10%;\n\ttop: 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnQtZmFjaW5nL2Zvci1jb3VwbGVzL2Zvci1jb3VwbGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCwrQkFBdUI7U0FBdkIsdUJBQXVCO0NBQ3ZCLG9CQUFpQjtJQUFqQixpQkFBaUI7Q0FDakIsYUFBYTtBQUNkOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2QsU0FBUztDQUNULDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Qsb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsMkJBQTJCO0NBQzNCLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLDJCQUEyQjtDQUMzQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsY0FBYztDQUNkLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsY0FBYztDQUNkLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsU0FBUztDQUNULFVBQVU7Q0FDVixRQUFRO0FBQ1QiLCJmaWxlIjoic3JjL2FwcC9mcm9udC1mYWNpbmcvZm9yLWNvdXBsZXMvZm9yLWNvdXBsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJlZCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiAtMTV2aDtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi50b3AtaW1nIHtcblx0ei1pbmRleDogLTE7XG5cdGZpbHRlcjogYnJpZ2h0bmVzcyg3NSUpO1xuXHRvYmplY3QtZml0OiBjb3Zlcjtcblx0aGVpZ2h0OiA1NTBweDtcbn1cblxuYnV0dG9uIHtcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRpdGxlIHtcblx0Y29sb3I6IHdoaXRlO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRmb250LXNpemU6IDV2dztcblx0bWFyZ2luOiAwO1xuXHRsZXR0ZXItc3BhY2luZzogMC4wNTg4MjM1ZW07XG59XG5cbi5zdWJ0aXRsZSB7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XG5cdGNvbG9yOiB3aGl0ZTtcblx0bWFyZ2luOiAuNWVtIDAgMDtcbn1cblxuLnNpZ24tdXAge1xuXHRiYWNrZ3JvdW5kOiAjNDAxOTU4O1xuXHRib3JkZXI6IC4xNWVtIHNvbGlkIHdoaXRlO1xuXHRtYXJnaW4tYm90dG9tOiAyZW07XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNvbnRhaW5lciB7XG5cdHBhZGRpbmc6IDBweCA4dnc7XG59XG5cbi5zZWMtdGl0bGUge1xuXHRjb2xvcjogIzQwMTk1ODtcblx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XG5cdG1hcmdpbi10b3A6IDRlbTtcblx0cGFkZGluZzogMHB4IDEzdnc7XG59XG5cbi5jLXRleHQge1xuXHRjb2xvcjogIzVFNUU1RTtcblx0bGV0dGVyLXNwYWNpbmc6IDAuMDU4ODIzNWVtO1xuXHRsaW5lLWhlaWdodDogMS43NWVtO1xuXHRtYXJnaW46IDJlbSAwIDNlbTtcblx0Zm9udC1zaXplOiAxLjE1dnc7XG5cdGNvbG9yOiByZ2JhKDI2LCAyNiwgMjYsIC43KTtcblx0cGFkZGluZzogMHB4IDl2dztcbn1cblxuLnF1b3RlIHtcblx0Zm9udC1zaXplOiA1ZW07XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRvcGFjaXR5OiAuMztcblx0bGluZS1oZWlnaHQ6IC41ZW07XG5cdGNvbG9yOiAjNDAxOTU4O1xuXHRtYXJnaW4tdG9wOiAuNzVlbTtcbn1cblxuLnB1cnAtdGV4dCB7XG5cdGNvbG9yOiAjNDAxOTU4O1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGxpbmUtaGVpZ2h0OiAyZW07XG5cdGZvbnQtc2l6ZTogMS4xNXZ3O1xufVxuXG4uc0Nhcm91c2VsIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogYXV0bztcbn1cblxuLmNhcm91c2VsLWNhcHRpb24ge1xuXHR6LWluZGV4OiAxO1xuXHRsZWZ0OiAxMCU7XG5cdHJpZ2h0OiAxMCU7XG5cdHRvcDogMzUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/front-facing/for-couples/for-couples.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/front-facing/for-couples/for-couples.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForCouplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForCouplesComponent", function() { return ForCouplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForCouplesComponent = class ForCouplesComponent {
    constructor() {
        this.slides = [
            './assets/banner-7.jpg'
        ];
    }
    ngOnInit() {
    }
};
ForCouplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-for-couples',
        template: __webpack_require__(/*! raw-loader!./for-couples.component.html */ "./node_modules/raw-loader/index.js!./src/app/front-facing/for-couples/for-couples.component.html"),
        styles: [__webpack_require__(/*! ./for-couples.component.css */ "./src/app/front-facing/for-couples/for-couples.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ForCouplesComponent);



/***/ }),

/***/ "./src/app/front-facing/header/header.component.css":
/*!**********************************************************!*\
  !*** ./src/app/front-facing/header/header.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".opaque {\n\tbackground-color: #401958 !important;\n\tmargin-bottom: 2.5%;\n}\n\n.see-through {\n\tz-index: 2;\n\theight: 15vh;\n\tpadding-top: 1em;\n}\n\na {\n\tcolor: white !important;\n\tfont-weight: 500;\n\tfont-size: 1vw;\n\ttext-decoration: none;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.1em;\n\tz-index: 100;\n}\n\nimg {\n\twidth: 5vw;\n\theight: auto;\n\tmargin: 0 1em;\n}\n\n.dropdown-menu {\n\tbackground: #401958;\n\tleft: -20%;\n}\n\n.dropdown-item:hover {\n\tbackground: #401958;\n}\n\n.nav-item {\n\tmargin: 0 .5em;\n}\n\n.navbar-toggler {\n\tborder: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnQtZmFjaW5nL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLG9DQUFvQztDQUNwQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLHFCQUFxQjtDQUNyQix5QkFBeUI7Q0FDekIscUJBQXFCO0NBQ3JCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixZQUFZO0NBQ1osYUFBYTtBQUNkOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLFVBQVU7QUFDWDs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2Zyb250LWZhY2luZy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3BhcXVlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzQwMTk1OCAhaW1wb3J0YW50O1xuXHRtYXJnaW4tYm90dG9tOiAyLjUlO1xufVxuXG4uc2VlLXRocm91Z2gge1xuXHR6LWluZGV4OiAyO1xuXHRoZWlnaHQ6IDE1dmg7XG5cdHBhZGRpbmctdG9wOiAxZW07XG59XG5cbmEge1xuXHRjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Zm9udC1zaXplOiAxdnc7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0bGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuXHR6LWluZGV4OiAxMDA7XG59XG5cbmltZyB7XG5cdHdpZHRoOiA1dnc7XG5cdGhlaWdodDogYXV0bztcblx0bWFyZ2luOiAwIDFlbTtcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuXHRiYWNrZ3JvdW5kOiAjNDAxOTU4O1xuXHRsZWZ0OiAtMjAlO1xufVxuXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XG5cdGJhY2tncm91bmQ6ICM0MDE5NTg7XG59XG5cbi5uYXYtaXRlbSB7XG5cdG1hcmdpbjogMCAuNWVtO1xufVxuXG4ubmF2YmFyLXRvZ2dsZXIge1xuXHRib3JkZXI6IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/front-facing/header/header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/front-facing/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.header = 'see-through';
        this.feedback = true;
        this.user = '';
        this.router.events.subscribe((event) => {
            // if (event instanceof NavigationStart) {
            // 	this.changeColor(event);
            // }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.changeColor(event);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                console.log('nav error', event.error);
            }
        });
    }
    changeColor(event) {
        if (event.url === '/home' || event.url === '/what-we-do' || event.url === '/or-businesses' ||
            event.url === '/for-couples' || event.url === '/research' || event.url === '/who-we-are' ||
            event.url === '/blog' || event.url === '/' || event.urlAfterRedirects === '/home') {
            this.header = 'see-through';
        }
        else {
            this.header = 'opaque';
        }
        if (event.url == '/view-feedback-report')
            this.feedback = false;
    }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/front-facing/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/front-facing/header/header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/front-facing/home/home.component.css":
/*!******************************************************!*\
  !*** ./src/app/front-facing/home/home.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered {\n\tposition: relative;\n\ttop: -15vh;\n\twidth: 100%;\n}\n.top-img {\n\tz-index: -1;\n\t-webkit-filter: brightness(75%);\n\t        filter: brightness(75%);\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\theight: 700px;\n}\nbutton {\n\tborder-color: transparent;\n}\n.title {\n\tcolor: white;\n\ttext-transform: uppercase;\n\tfont-size: 4vw;\n\tmargin: 0;\n}\n.subtitle {\n\tfont-style: italic;\n    text-transform: none;\n    color: white;\n    margin: .5em 0 0;\n    font-family: adobe-garamond-pro;\n    font-size: 28px;\n    letter-spacing: 1px;\n    margin: 20px auto;\n}\n.sign-up {\n    background: transparent;\n    border: .15em solid white;\n    margin-top: 2em;\n    font-size: 18px;\n    letter-spacing: 2px;\n    padding: .75em 1.75em;\n\tline-height: 1em;\n\tmargin: 10px auto;\n}\n.sign-up:hover {\n\tbackground: white;\n\tcolor: black;\n}\n.container {\n\tpadding: 0px 8vw;\n}\n.sec-title {\n\tcolor: #401958;\n\ttext-transform: none;\n\tmargin-top: 2em;\n}\n.c-text {\n\tletter-spacing: 0px;\n\tline-height: 1.5em;\n\tmargin: 1em 0 3em;\n\tfont-size: 1.15vw;\n\tcolor: rgba(26, 26, 26, .7);\n}\n.quote {\n\tfont-size: 5em;\n\tdisplay: block;\n\topacity: .3;\n\tline-height: .5em;\n\tcolor: #401958;\n\tmargin-top: .75em;\n}\n.purp-text {\n\tcolor: #401958;\n\tfont-style: italic;\n\tline-height: 1.65em;\n\tfont-size: 1.15vw;\n\tfont-family: adobe-garamond-pro;\n}\n.sCarousel {\n\twidth: 100%;\n\theight: auto;\n}\n.carousel-caption {\n\tz-index: 1;\n\tleft: 10%;\n\tright: 10%;\n    top: 35%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnQtZmFjaW5nL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixXQUFXO0FBQ1o7QUFDQTtDQUNDLFdBQVc7Q0FDWCwrQkFBdUI7U0FBdkIsdUJBQXVCO0NBQ3ZCLG9CQUFpQjtJQUFqQixpQkFBaUI7Q0FDakIsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsY0FBYztDQUNkLFNBQVM7QUFDVjtBQUNBO0NBQ0Msa0JBQWtCO0lBQ2Ysb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHFCQUFxQjtDQUN4QixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxvQkFBb0I7Q0FDcEIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsY0FBYztDQUNkLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQiwrQkFBK0I7QUFDaEM7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7QUFDQTtDQUNDLFVBQVU7Q0FDVixTQUFTO0NBQ1QsVUFBVTtJQUNQLFFBQVE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2Zyb250LWZhY2luZy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJlZCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiAtMTV2aDtcblx0d2lkdGg6IDEwMCU7XG59XG4udG9wLWltZyB7XG5cdHotaW5kZXg6IC0xO1xuXHRmaWx0ZXI6IGJyaWdodG5lc3MoNzUlKTtcblx0b2JqZWN0LWZpdDogY292ZXI7XG5cdGhlaWdodDogNzAwcHg7XG59XG5idXR0b24ge1xuXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnRpdGxlIHtcblx0Y29sb3I6IHdoaXRlO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRmb250LXNpemU6IDR2dztcblx0bWFyZ2luOiAwO1xufVxuLnN1YnRpdGxlIHtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IC41ZW0gMCAwO1xuICAgIGZvbnQtZmFtaWx5OiBhZG9iZS1nYXJhbW9uZC1wcm87XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG4uc2lnbi11cCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAuMTVlbSBzb2xpZCB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZzogLjc1ZW0gMS43NWVtO1xuXHRsaW5lLWhlaWdodDogMWVtO1xuXHRtYXJnaW46IDEwcHggYXV0bztcbn1cbi5zaWduLXVwOmhvdmVyIHtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdGNvbG9yOiBibGFjaztcbn1cbi5jb250YWluZXIge1xuXHRwYWRkaW5nOiAwcHggOHZ3O1xufVxuLnNlYy10aXRsZSB7XG5cdGNvbG9yOiAjNDAxOTU4O1xuXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcblx0bWFyZ2luLXRvcDogMmVtO1xufVxuLmMtdGV4dCB7XG5cdGxldHRlci1zcGFjaW5nOiAwcHg7XG5cdGxpbmUtaGVpZ2h0OiAxLjVlbTtcblx0bWFyZ2luOiAxZW0gMCAzZW07XG5cdGZvbnQtc2l6ZTogMS4xNXZ3O1xuXHRjb2xvcjogcmdiYSgyNiwgMjYsIDI2LCAuNyk7XG59XG4ucXVvdGUge1xuXHRmb250LXNpemU6IDVlbTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdG9wYWNpdHk6IC4zO1xuXHRsaW5lLWhlaWdodDogLjVlbTtcblx0Y29sb3I6ICM0MDE5NTg7XG5cdG1hcmdpbi10b3A6IC43NWVtO1xufVxuLnB1cnAtdGV4dCB7XG5cdGNvbG9yOiAjNDAxOTU4O1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGxpbmUtaGVpZ2h0OiAxLjY1ZW07XG5cdGZvbnQtc2l6ZTogMS4xNXZ3O1xuXHRmb250LWZhbWlseTogYWRvYmUtZ2FyYW1vbmQtcHJvO1xufVxuLnNDYXJvdXNlbCB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG59XG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG5cdHotaW5kZXg6IDE7XG5cdGxlZnQ6IDEwJTtcblx0cmlnaHQ6IDEwJTtcbiAgICB0b3A6IDM1JTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/front-facing/home/home.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/front-facing/home/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.slides = [
            './assets/banner-1.jpg',
            './assets/banner-2.jpg',
            './assets/banner-3.jpg',
            './assets/banner-4.jpg',
            './assets/banner-5.jpg',
            './assets/banner-6.jpg',
        ];
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/front-facing/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/front-facing/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/front-facing/research/research.component.css":
/*!**************************************************************!*\
  !*** ./src/app/front-facing/research/research.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered {\n\tposition: relative;\n\ttop: -15vh;\n\twidth: 100%;\n}\n\n.top-img {\n\tz-index: -1;\n\t-webkit-filter: brightness(70%);\n\t        filter: brightness(70%);\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\theight: 500px;\n}\n\nbutton {\n\tborder-color: transparent;\n}\n\n.title {\n\tcolor: white;\n\ttext-transform: uppercase;\n\tfont-size: 5vw;\n\tmargin: 0;\n\tletter-spacing: 0.0588235em;\n}\n\n.subtitle {\n\tfont-style: italic;\n\ttext-transform: none;\n\tcolor: white;\n\tmargin: .5em 0 0;\n}\n\n.container {\n\tpadding: 0px 8vw;\n}\n\n.sec-title {\n\tcolor: #401958;\n\ttext-transform: none;\n\tmargin-top: 4em;\n\tpadding: 0px 12vw;\n}\n\n.left {\n\ttext-align: left;\n\tmargin-top: 4em;\n\tpadding: 0px 3.1vw;\n}\n\n.thumbnail {\n\tdisplay: inline-block;\n\ttop: -12.6473px;\n\twidth: 97px;\n\theight: 154px;\n\tposition: relative;\n}\n\n.text-color {\n\tcolor: #5E5E5E;\n}\n\n.c-text {\n\tcolor: #5E5E5E;\n\ttext-align: left;\n\tletter-spacing: 0.0588235em;\n\tline-height: 1.75em;\n\tmargin: 2em 0 3em;\n\tfont-size: 1.15vw;\n\tcolor: rgba(26, 26, 26, .7);\n\tpadding: 0px 9vw;\n}\n\n.d-text {\n\tcolor: #401958;\n\tfont-size: 1.15vw;\n\tletter-spacing: 0.0688235em;\n\tmargin: 10px;\n}\n\n.purp-text {\n\tcolor: #401958;\n\tfont-style: italic;\n\tline-height: 2em;\n\tfont-size: 1.15vw;\n}\n\n.sCarousel {\n\twidth: 100%;\n\theight: auto;\n}\n\n.carousel-caption {\n\tz-index: 1;\n\tleft: 10%;\n\tright: 10%;\n\ttop: 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJvbnQtZmFjaW5nL3Jlc2VhcmNoL3Jlc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCwrQkFBdUI7U0FBdkIsdUJBQXVCO0NBQ3ZCLG9CQUFpQjtJQUFqQixpQkFBaUI7Q0FDakIsYUFBYTtBQUNkOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2QsU0FBUztDQUNULDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixXQUFXO0NBQ1gsYUFBYTtDQUNiLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsMkJBQTJCO0NBQzNCLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLDJCQUEyQjtDQUMzQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLDJCQUEyQjtDQUMzQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0MsVUFBVTtDQUNWLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsUUFBUTtBQUNUIiwiZmlsZSI6InNyYy9hcHAvZnJvbnQtZmFjaW5nL3Jlc2VhcmNoL3Jlc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyZWQge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRvcDogLTE1dmg7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4udG9wLWltZyB7XG5cdHotaW5kZXg6IC0xO1xuXHRmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTtcblx0b2JqZWN0LWZpdDogY292ZXI7XG5cdGhlaWdodDogNTAwcHg7XG59XG5cbmJ1dHRvbiB7XG5cdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi50aXRsZSB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Zm9udC1zaXplOiA1dnc7XG5cdG1hcmdpbjogMDtcblx0bGV0dGVyLXNwYWNpbmc6IDAuMDU4ODIzNWVtO1xufVxuXG4uc3VidGl0bGUge1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdHRleHQtdHJhbnNmb3JtOiBub25lO1xuXHRjb2xvcjogd2hpdGU7XG5cdG1hcmdpbjogLjVlbSAwIDA7XG59XG5cbi5jb250YWluZXIge1xuXHRwYWRkaW5nOiAwcHggOHZ3O1xufVxuXG4uc2VjLXRpdGxlIHtcblx0Y29sb3I6ICM0MDE5NTg7XG5cdHRleHQtdHJhbnNmb3JtOiBub25lO1xuXHRtYXJnaW4tdG9wOiA0ZW07XG5cdHBhZGRpbmc6IDBweCAxMnZ3O1xufVxuXG4ubGVmdCB7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdG1hcmdpbi10b3A6IDRlbTtcblx0cGFkZGluZzogMHB4IDMuMXZ3O1xufVxuXG4udGh1bWJuYWlsIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR0b3A6IC0xMi42NDczcHg7XG5cdHdpZHRoOiA5N3B4O1xuXHRoZWlnaHQ6IDE1NHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50ZXh0LWNvbG9yIHtcblx0Y29sb3I6ICM1RTVFNUU7XG59XG5cbi5jLXRleHQge1xuXHRjb2xvcjogIzVFNUU1RTtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0bGV0dGVyLXNwYWNpbmc6IDAuMDU4ODIzNWVtO1xuXHRsaW5lLWhlaWdodDogMS43NWVtO1xuXHRtYXJnaW46IDJlbSAwIDNlbTtcblx0Zm9udC1zaXplOiAxLjE1dnc7XG5cdGNvbG9yOiByZ2JhKDI2LCAyNiwgMjYsIC43KTtcblx0cGFkZGluZzogMHB4IDl2dztcbn1cblxuLmQtdGV4dCB7XG5cdGNvbG9yOiAjNDAxOTU4O1xuXHRmb250LXNpemU6IDEuMTV2dztcblx0bGV0dGVyLXNwYWNpbmc6IDAuMDY4ODIzNWVtO1xuXHRtYXJnaW46IDEwcHg7XG59XG5cbi5wdXJwLXRleHQge1xuXHRjb2xvcjogIzQwMTk1ODtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRsaW5lLWhlaWdodDogMmVtO1xuXHRmb250LXNpemU6IDEuMTV2dztcbn1cblxuLnNDYXJvdXNlbCB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi5jYXJvdXNlbC1jYXB0aW9uIHtcblx0ei1pbmRleDogMTtcblx0bGVmdDogMTAlO1xuXHRyaWdodDogMTAlO1xuXHR0b3A6IDM1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/front-facing/research/research.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/front-facing/research/research.component.ts ***!
  \*************************************************************/
/*! exports provided: ResearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearchComponent", function() { return ResearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResearchComponent = class ResearchComponent {
    constructor() {
        this.slides = [
            './assets/banner-8.jpg'
        ];
        this.books = [{
                id: 1,
                title: 'THE MARRIAGE CHECKUP:  A SCIENTIFIC PROGRAM FOR SUSTAINING AND STRENGTHENING MARITAL HEALTH',
                image: './assets/marriage-checkup.jpg',
                link: 'https://www.amazon.com/The-Marriage-Checkup-Scientific-Strengthening/dp/0765706393/' +
                    'ref=sr_1_2?ie=UTF8&qid=1410011507&sr=8-2&keywords=the+marriage+checkup'
            },
            {
                id: 2,
                title: 'THE MARRIAGE CHECKUP PRACTITIONER\'S GUIDE:  PROMOTING LIFELONG RELATIONSHIP HEALTH',
                image: './assets/practitioner-guide.jpg',
                link: 'https://www.amazon.com/The-Marriage-Checkup-Practitioners-Guide/dp/1433815524/ref=sr_1_3?ie=' +
                    'UTF8&qid=1410011507&sr=8-3&keywords=the+marriage+checkup'
            }];
        this.papers = [{
                id: 1,
                title: 'INCREASING ACCESS TO MARITAL HEALTH CARE',
                link: 'http://files.ccfcheckup-admin.gethifi.com/research/The_Marriage_Checkup_-_Increasing_access_to_marital_health_care.pdf'
            },
            {
                id: 2,
                title: 'AN INDICATED PREVENTIVE INTERVENTION FOR TREATMENT-AVOIDANT COUPLES AT RISK FOR MARITAL DETERIORATION',
                link: 'http://files.ccfcheckup-admin.gethifi.com/research/The_MC-_Cordova_et_al_2005.pdf'
            },
            {
                id: 3,
                title: 'A PUBLIC HEALTH APPROACH TO MARITAL WELL-BEING',
                link: 'http://files.ccfcheckup-admin.gethifi.com/research/Behavior_Therapist_Published_Paper_Dec_2013.pdf'
            },
            {
                id: 4,
                title: 'A RANDOMIZE CONTROLLED TRIAL OF ANNUAL RELATIONSHIP HEALTH CHECKUPS',
                link: 'http://files.ccfcheckup-admin.gethifi.com/research/The_Marraige_Checkup_-_RCT_of_Annual_Realtionship_Health_Checkups.pdf'
            }];
        this.medias = [{
                id: 1,
                title: 'RACHAEL RAY',
                link: 'https://www.youtube.com/watch?v=JnSkhJLKtlQ&feature=youtu.be'
            },
            {
                id: 2,
                title: 'CNN',
                link: 'https://www.youtube.com/watch?v=pQE95SzNYW4&feature=youtu.be'
            },
            {
                id: 3,
                title: 'THE NEW YORK TIMES',
                link: 'https://well.blogs.nytimes.com/2010/06/28/seeking-to-pre-empt-marital-strife/?_php=true&amp;' +
                    '_type=blogs&amp;_php=true&amp;_type=blogs&amp;module=Search&amp;mabReward=relbias%3Ar&amp;_r=1'
            },
            {
                id: 4,
                title: 'THE OPRAH MAGAZINE',
                link: 'http://www.oprah.com/relationships/new-school-love/7'
            },
            {
                id: 5,
                title: 'USA TODAY',
                link: 'http://usatoday30.usatoday.com/news/health/2008-11-15-marriage-checkup_N.htm'
            },
            {
                id: 6,
                title: 'REDBOOK',
                link: 'http://www.redbookmag.com/love-sex/advice/marriage-checkup'
            }];
    }
    ngOnInit() {
    }
};
ResearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-research',
        template: __webpack_require__(/*! raw-loader!./research.component.html */ "./node_modules/raw-loader/index.js!./src/app/front-facing/research/research.component.html"),
        styles: [__webpack_require__(/*! ./research.component.css */ "./src/app/front-facing/research/research.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ResearchComponent);



/***/ }),

/***/ "./src/app/front-facing/terms/terms.component.css":
/*!********************************************************!*\
  !*** ./src/app/front-facing/terms/terms.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250LWZhY2luZy90ZXJtcy90ZXJtcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/front-facing/terms/terms.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/front-facing/terms/terms.component.ts ***!
  \*******************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TermsComponent = class TermsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms',
        template: __webpack_require__(/*! raw-loader!./terms.component.html */ "./node_modules/raw-loader/index.js!./src/app/front-facing/terms/terms.component.html"),
        styles: [__webpack_require__(/*! ./terms.component.css */ "./src/app/front-facing/terms/terms.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TermsComponent);



/***/ }),

/***/ "./src/app/front-facing/what-we-do/what-we-do.component.css":
/*!******************************************************************!*\
  !*** ./src/app/front-facing/what-we-do/what-we-do.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250LWZhY2luZy93aGF0LXdlLWRvL3doYXQtd2UtZG8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/front-facing/what-we-do/what-we-do.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/front-facing/what-we-do/what-we-do.component.ts ***!
  \*****************************************************************/
/*! exports provided: WhatWeDoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatWeDoComponent", function() { return WhatWeDoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WhatWeDoComponent = class WhatWeDoComponent {
    constructor() { }
    ngOnInit() {
    }
};
WhatWeDoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-what-we-do',
        template: __webpack_require__(/*! raw-loader!./what-we-do.component.html */ "./node_modules/raw-loader/index.js!./src/app/front-facing/what-we-do/what-we-do.component.html"),
        styles: [__webpack_require__(/*! ./what-we-do.component.css */ "./src/app/front-facing/what-we-do/what-we-do.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WhatWeDoComponent);



/***/ }),

/***/ "./src/app/front-facing/who-we-are/who-we-are.component.css":
/*!******************************************************************!*\
  !*** ./src/app/front-facing/who-we-are/who-we-are.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zyb250LWZhY2luZy93aG8td2UtYXJlL3doby13ZS1hcmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/front-facing/who-we-are/who-we-are.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/front-facing/who-we-are/who-we-are.component.ts ***!
  \*****************************************************************/
/*! exports provided: WhoWeAreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhoWeAreComponent", function() { return WhoWeAreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WhoWeAreComponent = class WhoWeAreComponent {
    constructor() { }
    ngOnInit() {
    }
};
WhoWeAreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-who-we-are',
        template: __webpack_require__(/*! raw-loader!./who-we-are.component.html */ "./node_modules/raw-loader/index.js!./src/app/front-facing/who-we-are/who-we-are.component.html"),
        styles: [__webpack_require__(/*! ./who-we-are.component.css */ "./src/app/front-facing/who-we-are/who-we-are.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WhoWeAreComponent);



/***/ }),

/***/ "./src/app/payments/make-payment/make-payment.component.css":
/*!******************************************************************!*\
  !*** ./src/app/payments/make-payment/make-payment.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnRzL21ha2UtcGF5bWVudC9tYWtlLXBheW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/payments/make-payment/make-payment.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/payments/make-payment/make-payment.component.ts ***!
  \*****************************************************************/
/*! exports provided: MakePaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakePaymentComponent", function() { return MakePaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../payment.service */ "./src/app/payments/payment.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/auth.service */ "./src/app/core/auth.service.ts");






let MakePaymentComponent = class MakePaymentComponent {
    constructor(paymentService, userService, authService) {
        this.paymentService = paymentService;
        this.userService = userService;
        this.authService = authService;
        this.amount = 20000;
    }
    ngOnInit() {
        this.userService.getCurrentUser()
            .then(usr => {
            if (usr) {
                this.user = usr;
                this.startHandler();
            }
            else {
                console.error('Could not find user.');
                alert('Something went wrong, please log out and try again, or email info@arammu.org for support.');
                this.authService.doLogout();
            }
        }).catch(err => {
            console.error('Could not find user.', err);
            alert('Something went wrong, please log out and try again, or email info@arammu.org for support.');
            this.authService.doLogout();
        });
    }
    startHandler() {
        this.handler = StripeCheckout.configure({
            key: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].stripeKey,
            image: './assets/default-pic.png',
            locale: 'auto',
            token: (token) => this.paymentService.processPayment(token, this.amount)
        });
    }
    handlePayment() {
        this.handler.open({
            name: 'Arammu',
            description: '1 Checkup ($200)',
            amount: this.amount,
            email: this.user.email
        });
    }
    onPopState() {
        this.handler.close();
    }
};
MakePaymentComponent.ctorParameters = () => [
    { type: _payment_service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"] },
    { type: src_app_core_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:popstate'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], MakePaymentComponent.prototype, "onPopState", null);
MakePaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-make-payment',
        template: __webpack_require__(/*! raw-loader!./make-payment.component.html */ "./node_modules/raw-loader/index.js!./src/app/payments/make-payment/make-payment.component.html"),
        styles: [__webpack_require__(/*! ./make-payment.component.css */ "./src/app/payments/make-payment/make-payment.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_payment_service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"], src_app_core_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_core_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], MakePaymentComponent);



/***/ }),

/***/ "./src/app/payments/payment.service.ts":
/*!*********************************************!*\
  !*** ./src/app/payments/payment.service.ts ***!
  \*********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");




let PaymentService = class PaymentService {
    constructor(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(auth => { if (auth)
            this.userId = auth.uid; });
    }
    processPayment(token, amount) {
        const id = this.db.createId();
        return this.db.collection(`payments`).doc(this.userId).collection('payments').add({ token: token, amount: amount, id: id });
    }
};
PaymentService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
PaymentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
], PaymentService);



/***/ }),

/***/ "./src/app/user/change-password/change-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/change-password/change-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(authService, fb) {
        this.authService = authService;
        this.fb = fb;
        this.modalTitle = '';
        this.modalBody = '';
        this.btnText = 'Change Password';
        this.changeForm = this.fb.group({
            curPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        }, { validator: [this.mustMatch('newPassword', 'confirmPassword')] });
    }
    ngOnInit() {
    }
    changePassword() {
        this.btnText = 'Updating password...';
        this.authService.updatePassword(this.changeForm.value)
            .then(done => {
            if (done[0]) {
                this.modalBody = 'Successfully updated your password.';
                this.modalTitle = 'Success';
            }
            else {
                switch (done[1].code) {
                    case 'auth/wrong-password':
                        this.modalBody = 'Incorrect current password. Please try again or email info@arammu.org for support.';
                        this.modalTitle = 'Error';
                        break;
                    default:
                        this.modalBody = done[1].message + ' Please try again or email info@arammu.org for support.';
                        this.modalTitle = 'Error';
                        break;
                }
            }
            $('#infoModal').modal('show');
        });
    }
    mustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
        // return (formGroup: FormGroup) => {
        // 	const control = formGroup.controls[controlName];
        // 	const matchingControl = formGroup.controls[matchingControlName];
        // 	if (matchingControl.errors && !matchingControl.errors.mustMatch) return;
        // 	if (control.value !== matchingControl.value) matchingControl.setErrors({ mustMatch: true });
        // 	else matchingControl.setErrors(null);
        // };
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/change-password/change-password.component.html"),
        styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/user/change-password/change-password.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/user/choose-clinician/choose-clinician.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/user/choose-clinician/choose-clinician.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clinician {\n\tbackground: lightgrey;\n\tmargin: 1em 0;\n\tborder-radius: .1em;\n\ttext-align: center;\n}\n.text {\n\tpadding: 0 3em;\n}\n.book {\n\tbackground: darkgrey !important;\n\tborder: none;\n\tmargin-top: 1em;\n\twidth: 100% !important;\n}\nimg {\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\twidth: 100%;\n\tborder-radius: .1em .1em 0 0;\n}\n.inside-pic {\n\tmargin: 1em 12.5%;\n\twidth: 75%;\n\tborder: 1px solid white;\n}\n.schedule {\n\tbackground: #210d2e !important;\n\tborder-color: #210d2e !important;\n\tmargin: 0 25%;\n\twidth: 50% !important;\n}\n.modal-content {\n\tpadding: 1em; \n\tbackground: #401958;\n\tcolor: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jaG9vc2UtY2xpbmljaWFuL2Nob29zZS1jbGluaWNpYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHFCQUFxQjtDQUNyQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQywrQkFBK0I7Q0FDL0IsWUFBWTtDQUNaLGVBQWU7Q0FDZixzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLG9CQUFpQjtJQUFqQixpQkFBaUI7Q0FDakIsV0FBVztDQUNYLDRCQUE0QjtBQUM3QjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLFVBQVU7Q0FDVix1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLDhCQUE4QjtDQUM5QixnQ0FBZ0M7Q0FDaEMsYUFBYTtDQUNiLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0MsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC91c2VyL2Nob29zZS1jbGluaWNpYW4vY2hvb3NlLWNsaW5pY2lhbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaW5pY2lhbiB7XG5cdGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcblx0bWFyZ2luOiAxZW0gMDtcblx0Ym9yZGVyLXJhZGl1czogLjFlbTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRleHQge1xuXHRwYWRkaW5nOiAwIDNlbTtcbn1cbi5ib29rIHtcblx0YmFja2dyb3VuZDogZGFya2dyZXkgIWltcG9ydGFudDtcblx0Ym9yZGVyOiBub25lO1xuXHRtYXJnaW4tdG9wOiAxZW07XG5cdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5pbWcge1xuXHRvYmplY3QtZml0OiBjb3Zlcjtcblx0d2lkdGg6IDEwMCU7XG5cdGJvcmRlci1yYWRpdXM6IC4xZW0gLjFlbSAwIDA7XG59XG4uaW5zaWRlLXBpYyB7XG5cdG1hcmdpbjogMWVtIDEyLjUlO1xuXHR3aWR0aDogNzUlO1xuXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cbi5zY2hlZHVsZSB7XG5cdGJhY2tncm91bmQ6ICMyMTBkMmUgIWltcG9ydGFudDtcblx0Ym9yZGVyLWNvbG9yOiAjMjEwZDJlICFpbXBvcnRhbnQ7XG5cdG1hcmdpbjogMCAyNSU7XG5cdHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1jb250ZW50IHtcblx0cGFkZGluZzogMWVtOyBcblx0YmFja2dyb3VuZDogIzQwMTk1ODtcblx0Y29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/choose-clinician/choose-clinician.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/user/choose-clinician/choose-clinician.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChooseClinicianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseClinicianComponent", function() { return ChooseClinicianComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_clinician_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/clinician.service */ "./src/app/core/clinician.service.ts");




let ChooseClinicianComponent = class ChooseClinicianComponent {
    constructor(router, route, clinicianService) {
        this.router = router;
        this.route = route;
        this.clinicianService = clinicianService;
        this.clinicians = [];
        this.filteredClinicians = [];
        this.checkup = '';
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.checkup = params['id'];
                this.getClinicians();
            }
            else {
                alert('Something went wrong, please try again later.');
                console.error('No checkup id', params);
                this.router.navigate(['/dashboard']);
            }
        });
    }
    ngOnInit() { }
    getClinicians() {
        this.clinicianService.getAllActiveClinicians()
            .subscribe(data => {
            this.clinicians = data;
        });
    }
};
ChooseClinicianComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_clinician_service__WEBPACK_IMPORTED_MODULE_3__["ClinicianService"] }
];
ChooseClinicianComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-choose-clinician',
        template: __webpack_require__(/*! raw-loader!./choose-clinician.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/choose-clinician/choose-clinician.component.html"),
        styles: [__webpack_require__(/*! ./choose-clinician.component.css */ "./src/app/user/choose-clinician/choose-clinician.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_clinician_service__WEBPACK_IMPORTED_MODULE_3__["ClinicianService"]])
], ChooseClinicianComponent);



/***/ }),

/***/ "./src/app/user/choose-sub-type/choose-sub-type.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/choose-sub-type/choose-sub-type.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n\ttext-transform: uppercase;\n\tcolor: #401958 !important;\n\tfont-size: 1.5vw;\n}\n\n.list-group-item:hover {\n\tbackground: #401958 !important;\n\tcolor: white !important;\n}\n\n.list-group-item.active {\n\tbackground: lightgrey !important;\n\tborder-color: lightgrey !important;\n}\n\n.list-group-item {\n\tborder-color: transparent;\n\tbackground-color: transparent;\n\tborder-radius: 0;\n}\n\n.tab-content .active {\n\tbackground: lightgrey;\n\tpadding: 2em;\n\tfont-size: 1vw;\n\tline-height: 1.75vw;\n}\n\n.col-5, .col-7 {\n\tpadding: 0;\n}\n\nbutton {\n\tmargin-top: 2em;\n\twidth: 25%;\n\theight: 3em;\n\tborder-radius: 8px;\n\tfont-size: 150%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jaG9vc2Utc3ViLXR5cGUvY2hvb3NlLXN1Yi10eXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx5QkFBeUI7Q0FDekIseUJBQXlCO0NBQ3pCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLDhCQUE4QjtDQUM5Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMsa0NBQWtDO0FBQ25DOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLDZCQUE2QjtDQUM3QixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsWUFBWTtDQUNaLGNBQWM7Q0FDZCxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsVUFBVTtDQUNWLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY2hvb3NlLXN1Yi10eXBlL2Nob29zZS1zdWItdHlwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGNvbG9yOiAjNDAxOTU4ICFpbXBvcnRhbnQ7XG5cdGZvbnQtc2l6ZTogMS41dnc7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xuXHRiYWNrZ3JvdW5kOiAjNDAxOTU4ICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XG5cdGJhY2tncm91bmQ6IGxpZ2h0Z3JleSAhaW1wb3J0YW50O1xuXHRib3JkZXItY29sb3I6IGxpZ2h0Z3JleSAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1ncm91cC1pdGVtIHtcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi50YWItY29udGVudCAuYWN0aXZlIHtcblx0YmFja2dyb3VuZDogbGlnaHRncmV5O1xuXHRwYWRkaW5nOiAyZW07XG5cdGZvbnQtc2l6ZTogMXZ3O1xuXHRsaW5lLWhlaWdodDogMS43NXZ3O1xufVxuXG4uY29sLTUsIC5jb2wtNyB7XG5cdHBhZGRpbmc6IDA7XG59XG5cbmJ1dHRvbiB7XG5cdG1hcmdpbi10b3A6IDJlbTtcblx0d2lkdGg6IDI1JTtcblx0aGVpZ2h0OiAzZW07XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0Zm9udC1zaXplOiAxNTAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/user/choose-sub-type/choose-sub-type.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/choose-sub-type/choose-sub-type.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChooseSubTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseSubTypeComponent", function() { return ChooseSubTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ChooseSubTypeComponent = class ChooseSubTypeComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.type = 'personal';
        this.user = '';
        this.route.params.subscribe(params => {
            if (params['user']) {
                this.user = params['user'];
            }
            else {
                alert('Something went wrong, please try again later.');
                this.router.navigate(['/dashboard']);
            }
        });
    }
    ngOnInit() {
    }
};
ChooseSubTypeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ChooseSubTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-choose-sub-type',
        template: __webpack_require__(/*! raw-loader!./choose-sub-type.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/choose-sub-type/choose-sub-type.component.html"),
        styles: [__webpack_require__(/*! ./choose-sub-type.component.css */ "./src/app/user/choose-sub-type/choose-sub-type.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ChooseSubTypeComponent);



/***/ }),

/***/ "./src/app/user/choose-type/choose-type.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/choose-type/choose-type.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top {\n\tposition: relative;\n\twidth: 90%;\n\tmargin: 0 5%;\n\tbackground: lightgrey;\n\tcolor: #401958;\n\ttext-transform: uppercase;\n\ttext-align: center;\n\tfont-weight: 600;\n\tfont-size: 3vw;\n\tcursor: pointer;\n\tmargin-top: 10%;\n}\n.top:after {\n\tcontent: \"\";\n\tdisplay: block;\n\tpadding-bottom: 50%;\n}\n.active {\n\tbackground: #401958;\n\tcolor: white;\n}\n.content {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\ttop: 35%;\n}\nbutton {\n\tmargin-top: 10%;\n\twidth: 25%;\n\theight: 40%;\n\tborder-radius: 8px;\n\tfont-size: 1.5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jaG9vc2UtdHlwZS9jaG9vc2UtdHlwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixZQUFZO0NBQ1oscUJBQXFCO0NBQ3JCLGNBQWM7Q0FDZCx5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QsZUFBZTtDQUNmLGVBQWU7QUFDaEI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWixRQUFRO0FBQ1Q7QUFDQTtDQUNDLGVBQWU7Q0FDZixVQUFVO0NBQ1YsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2Nob29zZS10eXBlL2Nob29zZS10eXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogOTAlO1xuXHRtYXJnaW46IDAgNSU7XG5cdGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcblx0Y29sb3I6ICM0MDE5NTg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0Zm9udC1zaXplOiAzdnc7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0bWFyZ2luLXRvcDogMTAlO1xufVxuLnRvcDphZnRlciB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwYWRkaW5nLWJvdHRvbTogNTAlO1xufVxuLmFjdGl2ZSB7XG5cdGJhY2tncm91bmQ6ICM0MDE5NTg7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cbi5jb250ZW50IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHR0b3A6IDM1JTtcbn1cbmJ1dHRvbiB7XG5cdG1hcmdpbi10b3A6IDEwJTtcblx0d2lkdGg6IDI1JTtcblx0aGVpZ2h0OiA0MCU7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0Zm9udC1zaXplOiAxLjV2dztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/choose-type/choose-type.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/choose-type/choose-type.component.ts ***!
  \***********************************************************/
/*! exports provided: ChooseTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseTypeComponent", function() { return ChooseTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ChooseTypeComponent = class ChooseTypeComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.type = '';
        this.user = '';
        this.route.params.subscribe(params => {
            if (params['user']) {
                this.user = params['user'];
            }
            else {
                alert('Something went wrong, please try again later.');
                this.router.navigate(['/dashboard']);
            }
        });
    }
    ngOnInit() {
    }
    toNextPage() {
        if (this.type == 'personal') {
            this.router.navigate(['/choose-sub-type', { user: this.user }]);
        }
        else {
            this.router.navigate(['/select-professional-partner', { user: this.user }]);
        }
    }
};
ChooseTypeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ChooseTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-choose-type',
        template: __webpack_require__(/*! raw-loader!./choose-type.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/choose-type/choose-type.component.html"),
        styles: [__webpack_require__(/*! ./choose-type.component.css */ "./src/app/user/choose-type/choose-type.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ChooseTypeComponent);



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(authService, fb) {
        this.authService = authService;
        this.fb = fb;
        this.modalTitle = '';
        this.modalBody = '';
        this.btnText = 'Reset Password';
        this.emailForm = this.fb.group({ email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]] });
    }
    ngOnInit() {
    }
    changePassword() {
        this.btnText = 'Sending link...';
        this.authService.changePassword(this.emailForm.value.email)
            .then(done => {
            if (done) {
                this.modalBody = 'If an account with that email exists, it has been sent a reset link.';
                this.modalTitle = 'Success';
            }
            else {
                this.modalBody = 'Something went wrong, please try again later or email info@arammu.org for support.';
                this.modalTitle = 'Error';
            }
            $('#infoModal').modal('show');
        });
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/forgot-password/forgot-password.component.html"),
        styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/user/forgot-password/forgot-password.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n\ttext-align: center;\n\tfont-size: 30px;\n\tmargin-bottom: 40px;\n}\n.row {\n\tmargin-top: 10px;\n}\n.error {\n\tcolor: red;\n}\n.col {\n\tmargin: 0 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxhQUFhO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDMwcHg7XG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ucm93IHtcblx0bWFyZ2luLXRvcDogMTBweDtcbn1cbi5lcnJvciB7XG5cdGNvbG9yOiByZWQ7XG59XG4uY29sIHtcblx0bWFyZ2luOiAwIDI1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let LoginComponent = class LoginComponent {
    constructor(authService, router, fb, activatedRoute) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.errorMessage = '';
        this.loginMessage = 'Login';
        this.companyName = '';
        this.company = '';
        this.userType = 'Email Address';
        this.activatedRoute.data.subscribe(data => {
            this.company = data.company || '';
            switch (data.company) {
                case 'canyonranch':
                    this.companyName = 'Canyon Ranch';
                    this.userType = 'Unique ID';
                    break;
                default:
                    this.companyName = '';
                    this.userType = 'Email Address';
                    break;
            }
        });
        this.createForm();
    }
    createForm() {
        this.loginForm = this.fb.group({
            userid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    tryLogin(value) {
        this.loginMessage = 'Logging in...';
        if (this.company == 'canyonranch' && value['userid'] != 'relationshipcheckin@canyonranch.com') {
            value['userid'] = `${value['userid']}@canyon.ranch`;
        }
        this.authService.doLogin(value)
            .then(res => {
            if (res.user.displayName == 'clinician')
                this.router.navigate([`${this.company}/clinician-dashboard`]);
            else
                this.router.navigate([`${this.company}/dashboard`]);
        }, err => {
            console.log(err);
            this.errorMessage = err.message;
            this.loginMessage = 'Login';
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/user/personal/personal-survey/personal-survey.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/user/personal/personal-survey/personal-survey.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info {\n\tpadding: 2% 5%;\n\tborder-bottom: 1px solid #401958;\n}\n\n.col-5 {\n\tborder-top: 1px solid #401958;\n\tmargin-top: 1.5vw;\n}\n\n.fa-info {\n\tfont-size: 3vw;\n\tcolor: #401958;\n}\n\n.info-line {\n\tmargin: 0;\n}\n\nbutton {\n\tmargin-top: 5%;\n\twidth: 25%;\n\tborder-radius: 8px;\n\tfont-size: 1.5vw;\n}\n\n.first-btn {\n\tmargin-top: .5em;\n}\n\n.terms {\n\tcolor: #5a5a5a;\n\tfont-size: 85%\n}\n\n.title {\n\tfont-weight: 600;\n}\n\n.upper {\n\ttext-transform: uppercase;\n}\n\n.number {\n\tbackground: #401958;\n\tcolor: white;\n\tpadding: .5em 1em;\n\tborder-radius: 2em;\n\tmargin-right: 1em;\n\tfloat: left;\n\tfont-weight: 600;\n}\n\n.show-survey .row {\n\tmargin-bottom: 1em;\n\tpadding: 1em 0;\n}\n\n.show-survey .row:nth-child(odd) {\n\tbackground: rgb(236, 236, 236);\n}\n\n.footer-btn {\n\twidth: 90%;\n\tmargin: 0;\n}\n\n.modal-footer {\n\tjustify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wZXJzb25hbC9wZXJzb25hbC1zdXJ2ZXkvcGVyc29uYWwtc3VydmV5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxjQUFjO0NBQ2QsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsNkJBQTZCO0NBQzdCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Q7QUFDRDs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsU0FBUztBQUNWOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wZXJzb25hbC9wZXJzb25hbC1zdXJ2ZXkvcGVyc29uYWwtc3VydmV5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mbyB7XG5cdHBhZGRpbmc6IDIlIDUlO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQwMTk1ODtcbn1cblxuLmNvbC01IHtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICM0MDE5NTg7XG5cdG1hcmdpbi10b3A6IDEuNXZ3O1xufVxuXG4uZmEtaW5mbyB7XG5cdGZvbnQtc2l6ZTogM3Z3O1xuXHRjb2xvcjogIzQwMTk1ODtcbn1cblxuLmluZm8tbGluZSB7XG5cdG1hcmdpbjogMDtcbn1cblxuYnV0dG9uIHtcblx0bWFyZ2luLXRvcDogNSU7XG5cdHdpZHRoOiAyNSU7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0Zm9udC1zaXplOiAxLjV2dztcbn1cblxuLmZpcnN0LWJ0biB7XG5cdG1hcmdpbi10b3A6IC41ZW07XG59XG5cbi50ZXJtcyB7XG5cdGNvbG9yOiAjNWE1YTVhO1xuXHRmb250LXNpemU6IDg1JVxufVxuXG4udGl0bGUge1xuXHRmb250LXdlaWdodDogNjAwO1xufVxuXG4udXBwZXIge1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubnVtYmVyIHtcblx0YmFja2dyb3VuZDogIzQwMTk1ODtcblx0Y29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiAuNWVtIDFlbTtcblx0Ym9yZGVyLXJhZGl1czogMmVtO1xuXHRtYXJnaW4tcmlnaHQ6IDFlbTtcblx0ZmxvYXQ6IGxlZnQ7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zaG93LXN1cnZleSAucm93IHtcblx0bWFyZ2luLWJvdHRvbTogMWVtO1xuXHRwYWRkaW5nOiAxZW0gMDtcbn1cblxuLnNob3ctc3VydmV5IC5yb3c6bnRoLWNoaWxkKG9kZCkge1xuXHRiYWNrZ3JvdW5kOiByZ2IoMjM2LCAyMzYsIDIzNik7XG59XG5cbi5mb290ZXItYnRuIHtcblx0d2lkdGg6IDkwJTtcblx0bWFyZ2luOiAwO1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/user/personal/personal-survey/personal-survey.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/user/personal/personal-survey/personal-survey.component.ts ***!
  \****************************************************************************/
/*! exports provided: PersonalSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalSurveyComponent", function() { return PersonalSurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_all_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/all-models.model */ "./src/app/core/all-models.model.ts");
/* harmony import */ var _core_checkup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/checkup.service */ "./src/app/core/checkup.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/user.service */ "./src/app/core/user.service.ts");






let PersonalSurveyComponent = class PersonalSurveyComponent {
    constructor(router, route, checkupService, userService) {
        this.router = router;
        this.route = route;
        this.checkupService = checkupService;
        this.userService = userService;
        this.checkup = new _core_all_models_model__WEBPACK_IMPORTED_MODULE_3__["CheckupModel"]();
        this.survey = new _core_all_models_model__WEBPACK_IMPORTED_MODULE_3__["SurveyModel"]();
        this.showSurvey = false;
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
        this.step4 = false;
        // TODO: use db for survey data
        this.strengthData = [];
        this.concernData = [];
        this.topData = {
            firstStrength: { idx: -1, txt: '' },
            secondStrength: { idx: -1, txt: '' },
            thirdStrength: { idx: -1, txt: '' },
            firstConcern: { idx: -1, txt: '' },
            secondConcern: { idx: -1, txt: '' },
            thirdConcern: { idx: -1, txt: '' }
        };
        this.modalTitle = '';
        this.modalBody = '';
        this.submitText = 'Submit';
        this.fromDash = false;
        this.checkupId = '';
        this.user = '';
        // TODO: refractor to use less url params
        this.route.params.subscribe(params => {
            // from choose partner: partner, user, type
            // from dashboard: partner, user, checkup (id)
            this.getSurveyQ();
            if (!params['partner'] || !params['user'])
                this.error('no params');
            else if (!params['dashboard']) { // new from select partner
                if (!params['type'])
                    this.error('no params');
                else {
                    this.checkup.user = params['user'];
                    this.checkup.partner = params['partner'];
                    this.checkup.type = params['type'];
                }
            }
            else if (params['checkup']) { // from dashboard, checkup already exists
                this.checkupService.getByID('checkup', params['checkup'])
                    .then(cu => this.checkup = cu)
                    .catch(err => this.error(err));
                this.checkupId = params['checkup'];
                this.user = params['user'];
            }
            else
                this.error('no params');
            this.survey.user = params['user'];
            this.survey.partner = params['partner'];
            this.fromDash = params['dashboard'] ? true : false;
        });
    }
    getSurveyQ() {
        this.checkupService.getByID('survey-questions', 'personal')
            .then(data => {
            if (data) {
                this.strengthData = data.strengths.map((e) => {
                    return { 'description': e, 'answer': 'Not a Strength' };
                });
                this.concernData = data.concerns.map((e) => {
                    return { 'description': e, 'answer': 'Not a Concern' };
                });
            }
            else
                this.error('No survey data found.');
        });
    }
    error(err) {
        console.error(err);
        this.modalTitle = 'Error!';
        this.modalBody = 'Unfortunately something went wrong! Please try again later or email info@arammu.org for support.';
        $('#surveyModal').modal('show');
        this.router.navigate(['/dashboard']);
    }
    ngOnInit() { }
    finishSurvey() {
        this.submitText = 'Saving...';
        this.survey.results = { strengths: this.strengthData, concerns: this.concernData, tops: this.topData };
        if (!this.fromDash) { // get User ID from email
            this.userService.checkPartner(this.survey.partner)
                .then(res => {
                if (res) { // found user;
                    this.survey.partner = res.id;
                    this.checkup.partner = res.id;
                }
                this.finishUp();
            }, () => this.finishUp()); // didn't find user
        }
        else {
            this.finishUp();
        }
    }
    finishUp() {
        this.checkupService.addSurvey(this.survey)
            .then(res => {
            if (this.fromDash) { // checkup already exists, so update
                const json = this.checkup.user == this.user ? { 'userSurvey': res } : { 'partnerSurvey': res }; // TODO: check partner exists also
                this.checkupService.updateCheckup(this.checkupId, json)
                    .then(() => {
                    this.submitText = 'Done!';
                    this.modalTitle = 'Success!';
                    this.modalBody = 'Thank you for completing the questionnaire. Please navigate to the dashboard for your next steps!';
                    $('#surveyModal').modal('show');
                }, err => this.error(err));
            }
            else { // create new checkup
                this.checkup.userSurvey = res;
                this.checkupService.addCheckup(this.checkup)
                    .then(() => {
                    this.submitText = 'Done!';
                    this.modalTitle = 'Success!';
                    this.modalBody = 'Thank you for completing the questionnaire. Once your partner has completed their questionnaire, ' +
                        ' you will be able to schedule a checkup.';
                    $('#surveyModal').modal('show');
                }, err => this.error(err));
            }
        }, err => this.error(err));
    }
};
PersonalSurveyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_checkup_service__WEBPACK_IMPORTED_MODULE_4__["CheckupService"] },
    { type: _core_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
PersonalSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-survey',
        template: __webpack_require__(/*! raw-loader!./personal-survey.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/personal/personal-survey/personal-survey.component.html"),
        styles: [__webpack_require__(/*! ./personal-survey.component.css */ "./src/app/user/personal/personal-survey/personal-survey.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_checkup_service__WEBPACK_IMPORTED_MODULE_4__["CheckupService"],
        _core_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], PersonalSurveyComponent);



/***/ }),

/***/ "./src/app/user/personal/select-personal-partner/select-personal-partner.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/user/personal/select-personal-partner/select-personal-partner.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcGVyc29uYWwvc2VsZWN0LXBlcnNvbmFsLXBhcnRuZXIvc2VsZWN0LXBlcnNvbmFsLXBhcnRuZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/personal/select-personal-partner/select-personal-partner.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/user/personal/select-personal-partner/select-personal-partner.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SelectPersonalPartnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPersonalPartnerComponent", function() { return SelectPersonalPartnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_checkup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/checkup.service */ "./src/app/core/checkup.service.ts");






let SelectPersonalPartnerComponent = class SelectPersonalPartnerComponent {
    constructor(userService, router, route, checkupService, fb) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.checkupService = checkupService;
        this.fb = fb;
        this.type = '';
        this.user = '';
        this.modalTitle = '';
        this.modalBody = '';
        this.modalSave = '';
        this.errorMsg = false;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            if (!params['user'] || !params['type']) {
                this.error();
            }
            else {
                this.type = params['type'];
                this.user = params['user'];
            }
            this.emailForm = this.fb.group({ email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]] });
        });
    }
    error() {
        this.errorMsg = true;
        this.modalTitle = 'Error!';
        this.modalBody = 'Unfortunately something went wrong! Please try again or email info@arammu.org for support.';
        $('#partnerModal').modal('show');
    }
    checkPartner() {
        this.userService.checkPartner(this.emailForm.value.email)
            .then(partner => {
            if (partner) {
                this.checkupService.checkCheckupExists(partner.id, this.user)
                    .subscribe(res => {
                    if (res.length > 0) { // at least one checkup exists
                        const uncomplete = res.filter(e => ((e.complete == false) && (e.type == this.type))); // check if any are incomplete or same type
                        if (uncomplete.length > 0) {
                            this.modalTitle = `Checkup Incomplete`;
                            this.modalBody = `Looks like your last checkup with ${this.emailForm.value.email.toUpperCase()}
									 has not been completed. Please select a different email or complete this checkup from your dashboard.`;
                            this.modalSave = 'hide';
                            $('#partnerModal').modal('show');
                        }
                        else { // no incomplete checkups exist
                            this.regularMessage();
                        }
                    }
                    else { // no checkups exists
                        this.regularMessage();
                    }
                }, err => {
                    console.log('error', err);
                    this.modalTitle = `Something went wrong!`;
                    this.modalBody = `Looks like an error happened on our side. Please try again or email info@arammu.org for support.`;
                    this.modalSave = 'hide';
                    $('#partnerModal').modal('show');
                });
            }
            else {
                console.log('partner not found');
                // TODO: send email
                this.regularMessage();
            }
        }).catch(() => {
            console.log('partner not found');
            // TODO: send email
            this.regularMessage();
        });
    }
    regularMessage() {
        this.errorMsg = false;
        this.modalTitle = `Request ${this.emailForm.value.email}`;
        this.modalBody = `Are you sure you want to request a ${this.type.toUpperCase()}
		 CHECKUP with ${this.emailForm.value.email.toUpperCase()}?`;
        this.modalSave = 'Send Request';
        $('#partnerModal').modal('show');
    }
    choosePartner() {
        this.router.navigate(['/personal-survey', { user: this.user, type: this.type, partner: this.emailForm.value.email }]);
    }
};
SelectPersonalPartnerComponent.ctorParameters = () => [
    { type: _core_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _core_checkup_service__WEBPACK_IMPORTED_MODULE_5__["CheckupService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
SelectPersonalPartnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-personal-partner',
        template: __webpack_require__(/*! raw-loader!./select-personal-partner.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/personal/select-personal-partner/select-personal-partner.component.html"),
        styles: [__webpack_require__(/*! ./select-personal-partner.component.css */ "./src/app/user/personal/select-personal-partner/select-personal-partner.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _core_checkup_service__WEBPACK_IMPORTED_MODULE_5__["CheckupService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], SelectPersonalPartnerComponent);



/***/ }),

/***/ "./src/app/user/professional/professional-survey/professional-survey.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/user/professional/professional-survey/professional-survey.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info {\n\tpadding: 2% 5%;\n\tborder-bottom: 1px solid #401958;\n}\n\n.col-5 {\n\tborder-top: 1px solid #401958;\n\tmargin-top: 1.5vw;\n}\n\n.fa-info {\n\tfont-size: 3vw;\n\tcolor: #401958;\n}\n\n.info-line {\n\tmargin: 0;\n}\n\nbutton {\n\tmargin-top: 5%;\n\twidth: 25%;\n\tborder-radius: 8px;\n\tfont-size: 1.5vw;\n}\n\n.first-btn {\n\tmargin-top: .5em;\n}\n\n.terms {\n\tcolor: #5a5a5a;\n\tfont-size: 85%\n}\n\n.title {\n\tfont-weight: 600;\n}\n\n.upper {\n\ttext-transform: uppercase;\n}\n\n.number {\n\tbackground: #401958;\n\tcolor: white;\n\tpadding: .5em 1em;\n\tborder-radius: 2em;\n\tmargin-right: 1em;\n\tfloat: left;\n\tfont-weight: 600;\n}\n\n.show-survey .row {\n\tmargin-bottom: 1em;\n\tpadding: 1em 0;\n}\n\n.show-survey .row:nth-child(odd) {\n\tbackground: rgb(236, 236, 236);\n}\n\n.footer-btn {\n\twidth: 90%;\n\tmargin: 0;\n}\n\n.modal-footer {\n\tjustify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9mZXNzaW9uYWwvcHJvZmVzc2lvbmFsLXN1cnZleS9wcm9mZXNzaW9uYWwtc3VydmV5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxjQUFjO0NBQ2QsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsNkJBQTZCO0NBQzdCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Q7QUFDRDs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsU0FBUztBQUNWOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm9mZXNzaW9uYWwvcHJvZmVzc2lvbmFsLXN1cnZleS9wcm9mZXNzaW9uYWwtc3VydmV5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mbyB7XG5cdHBhZGRpbmc6IDIlIDUlO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQwMTk1ODtcbn1cblxuLmNvbC01IHtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICM0MDE5NTg7XG5cdG1hcmdpbi10b3A6IDEuNXZ3O1xufVxuXG4uZmEtaW5mbyB7XG5cdGZvbnQtc2l6ZTogM3Z3O1xuXHRjb2xvcjogIzQwMTk1ODtcbn1cblxuLmluZm8tbGluZSB7XG5cdG1hcmdpbjogMDtcbn1cblxuYnV0dG9uIHtcblx0bWFyZ2luLXRvcDogNSU7XG5cdHdpZHRoOiAyNSU7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0Zm9udC1zaXplOiAxLjV2dztcbn1cblxuLmZpcnN0LWJ0biB7XG5cdG1hcmdpbi10b3A6IC41ZW07XG59XG5cbi50ZXJtcyB7XG5cdGNvbG9yOiAjNWE1YTVhO1xuXHRmb250LXNpemU6IDg1JVxufVxuXG4udGl0bGUge1xuXHRmb250LXdlaWdodDogNjAwO1xufVxuXG4udXBwZXIge1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubnVtYmVyIHtcblx0YmFja2dyb3VuZDogIzQwMTk1ODtcblx0Y29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiAuNWVtIDFlbTtcblx0Ym9yZGVyLXJhZGl1czogMmVtO1xuXHRtYXJnaW4tcmlnaHQ6IDFlbTtcblx0ZmxvYXQ6IGxlZnQ7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zaG93LXN1cnZleSAucm93IHtcblx0bWFyZ2luLWJvdHRvbTogMWVtO1xuXHRwYWRkaW5nOiAxZW0gMDtcbn1cblxuLnNob3ctc3VydmV5IC5yb3c6bnRoLWNoaWxkKG9kZCkge1xuXHRiYWNrZ3JvdW5kOiByZ2IoMjM2LCAyMzYsIDIzNik7XG59XG5cbi5mb290ZXItYnRuIHtcblx0d2lkdGg6IDkwJTtcblx0bWFyZ2luOiAwO1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/user/professional/professional-survey/professional-survey.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/user/professional/professional-survey/professional-survey.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProfessionalSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalSurveyComponent", function() { return ProfessionalSurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_all_models_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/all-models.model */ "./src/app/core/all-models.model.ts");
/* harmony import */ var _core_checkup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/checkup.service */ "./src/app/core/checkup.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/user.service */ "./src/app/core/user.service.ts");






let ProfessionalSurveyComponent = class ProfessionalSurveyComponent {
    constructor(router, route, checkupService, userService) {
        this.router = router;
        this.route = route;
        this.checkupService = checkupService;
        this.userService = userService;
        this.checkup = new _core_all_models_model__WEBPACK_IMPORTED_MODULE_3__["CheckupModel"]();
        this.survey = new _core_all_models_model__WEBPACK_IMPORTED_MODULE_3__["SurveyModel"]();
        this.showSurvey = false;
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
        this.step4 = false;
        this.strengthData = [];
        this.concernData = [];
        this.topData = {
            firstStrength: { idx: -1, txt: '' },
            secondStrength: { idx: -1, txt: '' },
            thirdStrength: { idx: -1, txt: '' },
            firstConcern: { idx: -1, txt: '' },
            secondConcern: { idx: -1, txt: '' },
            thirdConcern: { idx: -1, txt: '' }
        };
        this.modalTitle = '';
        this.modalBody = '';
        this.submitText = 'Submit';
        this.fromDash = false;
        this.checkupId = '';
        this.getSurveyQ();
        this.route.params.subscribe(params => {
            // from choose partner: partner, user
            // from dashboard: partner, user, checkup (id)
            if (!params['partner'] || !params['user']) {
                this.error('no params');
            }
            else if (!params['dashboard']) { // new from select partner
                this.checkup.user = params['user'];
                this.checkup.partner = params['partner'];
                this.checkup.type = 'professional';
            }
            else if (params['checkup']) {
                this.checkupId = params['checkup'];
            }
            else {
                this.error('no params');
            }
            this.survey.user = params['user'];
            this.survey.partner = params['partner'];
            this.fromDash = params['dashboard'] ? true : false;
        });
    }
    getSurveyQ() {
        this.checkupService.getByID('survey-questions', 'professional')
            .then(data => {
            if (data) {
                this.strengthData = data.strengths.map((e) => {
                    return { 'description': e, 'answer': 'Not a Strength' };
                });
                this.concernData = data.concerns.map((e) => {
                    return { 'description': e, 'answer': 'Not a Concern' };
                });
            }
            else
                this.error('No survey data found.');
        });
    }
    error(err) {
        console.error(err);
        this.modalTitle = 'Error!';
        this.modalBody = 'Unfortunately something went wrong! Please try again later or email info@arammu.org for support.';
        $('#surveyModal').modal('show');
        this.router.navigate(['/dashboard']);
    }
    ngOnInit() { }
    finishSurvey() {
        this.submitText = 'Saving...';
        this.survey.results = { strengths: this.strengthData, concerns: this.concernData, tops: this.topData };
        if (!this.fromDash) { // get User ID from email
            this.userService.checkPartner(this.survey.partner)
                .then(res => {
                if (res) { // found user;
                    this.survey.partner = res.id;
                    this.checkup.partner = res.id;
                }
                this.finishUp();
            }, () => this.finishUp()); // didn't find user
        }
        else {
            this.finishUp();
        }
    }
    finishUp() {
        this.checkupService.addSurvey(this.survey)
            .then(res => {
            if (this.fromDash) { // checkup already exists, so update
                this.checkupService.updateCheckup(this.checkupId, { partnerSurvey: res })
                    .then(() => {
                    this.submitText = 'Done!';
                    this.modalTitle = 'Success!';
                    this.modalBody = 'Thank you for completing the questionnaire. Please navigate to the dashboard for your next steps!';
                    $('#surveyModal').modal('show');
                }, err => this.error(err));
            }
            else { // create new checkup
                this.checkup.userSurvey = res;
                this.checkupService.addCheckup(this.checkup)
                    .then(() => {
                    this.submitText = 'Done!';
                    this.modalTitle = 'Success!';
                    this.modalBody = 'Thank you for completing the questionnaire. Once your partner has completed their questionnaire,' +
                        ' you will be able to schedule a checkup.';
                    $('#surveyModal').modal('show');
                }, err => this.error(err));
            }
        }, err => this.error(err));
    }
};
ProfessionalSurveyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_checkup_service__WEBPACK_IMPORTED_MODULE_4__["CheckupService"] },
    { type: _core_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
ProfessionalSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-professional-survey',
        template: __webpack_require__(/*! raw-loader!./professional-survey.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/professional/professional-survey/professional-survey.component.html"),
        styles: [__webpack_require__(/*! ./professional-survey.component.css */ "./src/app/user/professional/professional-survey/professional-survey.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_checkup_service__WEBPACK_IMPORTED_MODULE_4__["CheckupService"],
        _core_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], ProfessionalSurveyComponent);



/***/ }),

/***/ "./src/app/user/professional/select-professional-partner/select-professional-partner.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/user/professional/select-professional-partner/select-professional-partner.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcHJvZmVzc2lvbmFsL3NlbGVjdC1wcm9mZXNzaW9uYWwtcGFydG5lci9zZWxlY3QtcHJvZmVzc2lvbmFsLXBhcnRuZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/professional/select-professional-partner/select-professional-partner.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/user/professional/select-professional-partner/select-professional-partner.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: SelectProfessionalPartnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectProfessionalPartnerComponent", function() { return SelectProfessionalPartnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_checkup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/checkup.service */ "./src/app/core/checkup.service.ts");






let SelectProfessionalPartnerComponent = class SelectProfessionalPartnerComponent {
    constructor(userService, router, route, checkupService, fb) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.checkupService = checkupService;
        this.fb = fb;
        this.modalTitle = '';
        this.modalBody = '';
        this.modalSave = '';
        this.errorMsg = false;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            if (!params['user']) {
                this.error('Unfortunately something went wrong! Please try again or email info@arammu.org for support.');
            }
            else {
                this.user = params['user'];
                this.checkBusinessAccount();
            }
            this.emailForm = this.fb.group({ email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]] });
        });
    }
    error(text) {
        this.errorMsg = true;
        this.modalTitle = 'Error!';
        this.modalBody = text;
        $('#partnerModal').modal('show');
    }
    checkBusinessAccount() {
        this.userService.checkBusiness(this.user)
            .then(check => {
            if (check == false) {
                this.error(`Unfortunately, your email is not registerd with any Organization.
				 If you think this is a mistake, or would like to refer your company to Arammu, please email info@arammu.org.`);
            }
            else
                this.user = check;
        }).catch(err => {
            this.error('Unfortunately something went wrong! Please try again or email info@arammu.org for support.');
            console.error(err);
        });
    }
    checkPartner() {
        if (this.emailForm.value.email.split('@')[1] != this.user.email.split('@')[1]) {
            this.modalTitle = `Checkup Restricted`;
            this.modalBody = `Looks like ${this.emailForm.value.email.toUpperCase()} does not have the same business email domain as you.
			 Please choose a email that has the same domain as you (${this.user.email.split('@')[1].toUpperCase()})`;
            this.modalSave = 'hide';
            $('#partnerModal').modal('show');
        }
        else if (this.emailForm.value.email.toLowerCase().trim() === this.user.email.toLowerCase().trim()) {
            this.modalTitle = `Checkup Restricted`;
            this.modalBody = `Looks like you input in your own email ${this.emailForm.value.email.toUpperCase()}! Please choose a different email.`;
            this.modalSave = 'hide';
            $('#partnerModal').modal('show');
        }
        else {
            this.userService.checkPartner(this.emailForm.value.email)
                .then(partner => {
                if (partner) {
                    this.checkupService.checkCheckupExists(partner.id, this.user.id)
                        .subscribe(res => {
                        if (res.length > 0) { // at least one checkup exists
                            // check if any are incomplete or same type
                            const uncomplete = res.filter(e => ((e.complete == false) && (e.type == 'professional')));
                            if (uncomplete.length > 0) {
                                this.modalTitle = `Checkup Incomplete`;
                                this.modalBody = `Looks like your last checkup with ${this.emailForm.value.email.toUpperCase()} has not been completed.
										 Please select a different email or complete this checkup from your dashboard.`;
                                this.modalSave = 'hide';
                                $('#partnerModal').modal('show');
                            }
                            else { // no incomplete checkups exist
                                this.regularMessage();
                            }
                        }
                        else { // no checkups exists
                            this.regularMessage();
                        }
                    }, err => {
                        console.log('error', err);
                        this.modalTitle = `Something went wrong!`;
                        this.modalBody = `Looks like an error happened on our side. Please try again or email info@arammu.org for support.`;
                        this.modalSave = 'hide';
                        $('#partnerModal').modal('show');
                    });
                }
                else {
                    console.log('partner not found');
                    // TODO: send email
                    this.regularMessage();
                }
            }).catch(() => {
                console.log('partner not found');
                // TODO: send email
                this.regularMessage();
            });
        }
    }
    regularMessage() {
        this.errorMsg = false;
        this.modalTitle = `Request ${this.emailForm.value.email}`;
        this.modalBody = `Are you sure you want to request a BUSINESS CHECKUP with ${this.emailForm.value.email.toUpperCase()}?`;
        this.modalSave = 'Send Request';
        $('#partnerModal').modal('show');
    }
    choosePartner() {
        this.router.navigate(['/professional-survey', { user: this.user.id, partner: this.emailForm.value.email }]);
    }
};
SelectProfessionalPartnerComponent.ctorParameters = () => [
    { type: _core_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _core_checkup_service__WEBPACK_IMPORTED_MODULE_5__["CheckupService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
SelectProfessionalPartnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-professional-partner',
        template: __webpack_require__(/*! raw-loader!./select-professional-partner.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/professional/select-professional-partner/select-professional-partner.component.html"),
        styles: [__webpack_require__(/*! ./select-professional-partner.component.css */ "./src/app/user/professional/select-professional-partner/select-professional-partner.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _core_checkup_service__WEBPACK_IMPORTED_MODULE_5__["CheckupService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], SelectProfessionalPartnerComponent);



/***/ }),

/***/ "./src/app/user/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n\tfont-weight: 500;\n\tfont-size: 18px;\n\tmargin-bottom: 0;\n}\n\n.btn {\n\twidth: 100%;\n}\n\n.square {\n\tbackground: transparent;\n\tcolor: #401958;\n}\n\n.form-check {\n\tpadding-left: 0;\n\tmargin-bottom: 1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsY0FBYztBQUNmOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uYnRuIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5zcXVhcmUge1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0Y29sb3I6ICM0MDE5NTg7XG59XG5cbi5mb3JtLWNoZWNrIHtcblx0cGFkZGluZy1sZWZ0OiAwO1xuXHRtYXJnaW4tYm90dG9tOiAxZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_all_models_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/all-models.model */ "./src/app/core/all-models.model.ts");






let RegisterComponent = class RegisterComponent {
    constructor(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.terms = false;
        this.msgText = 'Sign Me Up';
        this.createForm();
        this.msgText = 'Sign Me Up';
    }
    createForm() {
        this.registerForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            counselor: [''],
        }, { validator: [this.mustMatch('password', 'confirmPassword')] });
    }
    tryRegister(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.registerForm.invalid) {
                this.msgText = 'Registering...';
                const newUser = new src_app_core_all_models_model__WEBPACK_IMPORTED_MODULE_5__["UserModel"](value.firstName, value.lastName, value.email.toLowerCase(), '', '');
                newUser.counselorCode = value.counselor;
                const [err, res] = yield this.authService.registerUser(newUser, value.password);
                if (!err)
                    this.router.navigate(['/dashboard']);
                else
                    alert(res);
            }
        });
    }
    mustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch)
                return;
            if (control.value !== matchingControl.value)
                matchingControl.setErrors({ mustMatch: true });
            else
                matchingControl.setErrors(null);
        };
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/user/register/register.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/user/schedule-clinician/schedule-clinician.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/user/schedule-clinician/schedule-clinician.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".calendly {\n\tmargin-top: 1em;\n\twidth: 95%;\n\theight: 95vh;\n}\n\n#checkup-copy {\n\tpadding: .5em 1em;\n\tborder: 1px solid black;\n\tborder-radius: 0.25rem 0 0 0.25rem;\n}\n\n.btn-success {\n\tbackground-color: #266900 !important;\n}\n\n.input-group:hover {\n\tcursor: pointer;\n}\n\n.fa-home:hover {\n\tcursor: pointer;\n}\n\n.fa-home {\n\tfloat: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zY2hlZHVsZS1jbGluaWNpYW4vc2NoZWR1bGUtY2xpbmljaWFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0NBQ2YsVUFBVTtDQUNWLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsa0NBQWtDO0FBQ25DOztBQUVBO0NBQ0Msb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC91c2VyL3NjaGVkdWxlLWNsaW5pY2lhbi9zY2hlZHVsZS1jbGluaWNpYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxlbmRseSB7XG5cdG1hcmdpbi10b3A6IDFlbTtcblx0d2lkdGg6IDk1JTtcblx0aGVpZ2h0OiA5NXZoO1xufVxuXG4jY2hlY2t1cC1jb3B5IHtcblx0cGFkZGluZzogLjVlbSAxZW07XG5cdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAgMCAwLjI1cmVtO1xufVxuXG4uYnRuLXN1Y2Nlc3Mge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjY2OTAwICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dC1ncm91cDpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZhLWhvbWU6aG92ZXIge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYS1ob21lIHtcblx0ZmxvYXQ6IHJpZ2h0O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/user/schedule-clinician/schedule-clinician.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/user/schedule-clinician/schedule-clinician.component.ts ***!
  \*************************************************************************/
/*! exports provided: ScheduleClinicianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleClinicianComponent", function() { return ScheduleClinicianComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_clinician_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/clinician.service */ "./src/app/core/clinician.service.ts");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm2015/ngx-clipboard.js");






let ScheduleClinicianComponent = class ScheduleClinicianComponent {
    constructor(router, route, clinicianService, userService, clipboardService) {
        this.router = router;
        this.route = route;
        this.clinicianService = clinicianService;
        this.userService = userService;
        this.clipboardService = clipboardService;
        this.checkup = '';
        this.copied = false;
        this.route.params.subscribe(params => {
            if (params['checkup'] && params['clinician']) {
                this.checkup = params['checkup'];
                this.userService.getCurrentUser().then(user => {
                    if (user)
                        this.user = user;
                    else {
                        alert('Something went wrong, please try again later.');
                        console.error('Missing user id');
                        this.router.navigate(['/dashboard']);
                    }
                }).catch(err => {
                    alert('Something went wrong, please try again later.');
                    console.error('Missing user id', err);
                    this.router.navigate(['/dashboard']);
                });
                this.clinicianService.getClinician(params['clinician'])
                    .then(cli => {
                    this.clinician = cli;
                    this.loadCalendlyScript();
                }).catch(err => {
                    alert('Could not find clinician, please try again later.');
                    console.error('Missing clinician', err);
                    this.router.navigate(['/dashboard']);
                });
            }
            else {
                alert('Something went wrong, please try again later.');
                console.error('Missing checkup id or clinician', params);
                this.router.navigate(['/dashboard']);
            }
        });
    }
    ngOnInit() { }
    copy() {
        this.clipboardService.copyFromContent(this.checkup);
    }
    loadCalendlyScript() {
        const calendlyScript = document.createElement('script');
        calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
        calendlyScript.type = 'text/javascript';
        calendlyScript.async = false;
        calendlyScript.id = 'calendlyScript';
        document.getElementsByTagName('head')[0].appendChild(calendlyScript);
    }
};
ScheduleClinicianComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_clinician_service__WEBPACK_IMPORTED_MODULE_3__["ClinicianService"] },
    { type: _core_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardService"] }
];
ScheduleClinicianComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-schedule-clinician',
        template: __webpack_require__(/*! raw-loader!./schedule-clinician.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/schedule-clinician/schedule-clinician.component.html"),
        styles: [__webpack_require__(/*! ./schedule-clinician.component.css */ "./src/app/user/schedule-clinician/schedule-clinician.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_clinician_service__WEBPACK_IMPORTED_MODULE_3__["ClinicianService"],
        _core_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardService"]])
], ScheduleClinicianComponent);



/***/ }),

/***/ "./src/app/user/user-dashboard/user-dashboard.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/user-dashboard/user-dashboard.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image {\n\twidth: 100%\n}\n\n.large {\n\tmargin: 1em 0 .5em 0;\n\ttext-align: center;\n\tfont-size: 8vw;\n\tcolor: lightgrey;\n\tletter-spacing: .1em;\n\tfont-weight: 300;\n}\n\n.choose {\n\ttext-align: center;\n\tfont-size: 3vw;\n\tcolor: lightgrey;\n\tletter-spacing: .1em;\n\tfont-weight: 500;\n\tborder: 5px solid lightgrey;\n\tmargin: 0 1em;\n\tcursor: pointer;\n\tpadding: .5em 1em;\n}\n\n.logout {\n\tcolor: #401958;\n}\n\n.titles {\n\tfont-weight: 400;\n\tcolor: white;\n\tfont-size: 1em;\n}\n\n.purp, .grey, .purp-grey {\n\tcolor: white;\n\tpadding: 1em 2em;\n\tborder-right: 1em solid white;\n\t/* text-transform: uppercase; */\n\tletter-spacing: .1em;\n\tfont-size: .95vw;\n\theight: 100%;\n}\n\n.purp {\n\tbackground: rgb(64, 25, 88);\n}\n\n.grey {\n\tbackground: rgb(161, 161, 161);\n}\n\n.purp-grey {\n\tbackground: rgb(108, 86, 121);\n}\n\n.parent-table {\n\tcolor: white;\n\tmargin: 0;\n\tmargin-bottom: 1em;\n\tpadding: 0;\n}\n\n.filler {\n\tbackground: lightgrey;\n\tpadding: .35em;\n}\n\n.see-more {\n\tborder: none;\n\tpadding: 1em;\n}\n\n.next-step div {\n\ttext-transform: capitalize;\n\tfont-size: .85vw;\n}\n\n.full {\n\tbackground: teal;\n\tborder: teal;\n}\n\n.half {\n\tbackground: darkgrey;\n\tborder: darkgrey;\n}\n\n.small-grey {\n\theight: 45%;\n\ttext-align: center;\n\tline-height: 2;\n\twidth: 100%;\n\tmargin: 0;\n}\n\n.right-white {\n\tborder: none;\n}\n\n.right-white:after {\n\tcontent: \"\";\n\tbackground: white;\n\tposition: absolute;\n\tbottom: 10%;\n\tright: 0;\n\theight: 80%;\n\twidth: 1px;\n}\n\n.bottom {\n\tposition: absolute;\n\tbottom: 0;\n\twidth: 100%;\n}\n\n.progress-row {\n\tmargin: 0;\n\tpadding-top: .75em;\n}\n\n.col-9, .col-2, .col-1, .col-10 {\n\tpadding: 0;\n}\n\n.hover:hover {\n\tcursor: pointer;\n}\n\n.main-btn {\n\tbackground-color: #401958;\n\tborder-color: #401958;\n\tcolor: white;\n}\n\n.white-link {\n\tcolor: white !important;\n\tfont-size: .85vw !important;\n}\n\n.see-more-header {\n\tbackground: #401958;\n\tcolor: white;\n\tborder-radius: 0;\n\tborder-bottom: 0;\n\tfont-size: 1.5em;\n\tpadding-left: 1em;\n}\n\n.indent {\n\tmargin-left: 1vw;\n}\n\n.status {\n\ttext-decoration: underline;\n\tmargin: .5em 0;\n}\n\n.modal-inside {\n\tbackground: white;\n\tpadding: 2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWRhc2hib2FyZC91c2VyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQiwyQkFBMkI7Q0FDM0IsYUFBYTtDQUNiLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsNkJBQTZCO0NBQzdCLCtCQUErQjtDQUMvQixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0NBQ2hCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixTQUFTO0NBQ1Qsa0JBQWtCO0NBQ2xCLFVBQVU7QUFDWDs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtBQUNiOztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsV0FBVztDQUNYLFNBQVM7QUFDVjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxRQUFRO0NBQ1IsV0FBVztDQUNYLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsV0FBVztBQUNaOztBQUVBO0NBQ0MsU0FBUztDQUNULGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIscUJBQXFCO0NBQ3JCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLWRhc2hib2FyZC91c2VyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlIHtcblx0d2lkdGg6IDEwMCVcbn1cblxuLmxhcmdlIHtcblx0bWFyZ2luOiAxZW0gMCAuNWVtIDA7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1zaXplOiA4dnc7XG5cdGNvbG9yOiBsaWdodGdyZXk7XG5cdGxldHRlci1zcGFjaW5nOiAuMWVtO1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuXG4uY2hvb3NlIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDN2dztcblx0Y29sb3I6IGxpZ2h0Z3JleTtcblx0bGV0dGVyLXNwYWNpbmc6IC4xZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGJvcmRlcjogNXB4IHNvbGlkIGxpZ2h0Z3JleTtcblx0bWFyZ2luOiAwIDFlbTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRwYWRkaW5nOiAuNWVtIDFlbTtcbn1cblxuLmxvZ291dCB7XG5cdGNvbG9yOiAjNDAxOTU4O1xufVxuXG4udGl0bGVzIHtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDFlbTtcbn1cblxuLnB1cnAsIC5ncmV5LCAucHVycC1ncmV5IHtcblx0Y29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiAxZW0gMmVtO1xuXHRib3JkZXItcmlnaHQ6IDFlbSBzb2xpZCB3aGl0ZTtcblx0LyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cblx0bGV0dGVyLXNwYWNpbmc6IC4xZW07XG5cdGZvbnQtc2l6ZTogLjk1dnc7XG5cdGhlaWdodDogMTAwJTtcbn1cblxuLnB1cnAge1xuXHRiYWNrZ3JvdW5kOiByZ2IoNjQsIDI1LCA4OCk7XG59XG5cbi5ncmV5IHtcblx0YmFja2dyb3VuZDogcmdiKDE2MSwgMTYxLCAxNjEpO1xufVxuXG4ucHVycC1ncmV5IHtcblx0YmFja2dyb3VuZDogcmdiKDEwOCwgODYsIDEyMSk7XG59XG5cbi5wYXJlbnQtdGFibGUge1xuXHRjb2xvcjogd2hpdGU7XG5cdG1hcmdpbjogMDtcblx0bWFyZ2luLWJvdHRvbTogMWVtO1xuXHRwYWRkaW5nOiAwO1xufVxuXG4uZmlsbGVyIHtcblx0YmFja2dyb3VuZDogbGlnaHRncmV5O1xuXHRwYWRkaW5nOiAuMzVlbTtcbn1cblxuLnNlZS1tb3JlIHtcblx0Ym9yZGVyOiBub25lO1xuXHRwYWRkaW5nOiAxZW07XG59XG5cbi5uZXh0LXN0ZXAgZGl2IHtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdGZvbnQtc2l6ZTogLjg1dnc7XG59XG5cbi5mdWxsIHtcblx0YmFja2dyb3VuZDogdGVhbDtcblx0Ym9yZGVyOiB0ZWFsO1xufVxuXG4uaGFsZiB7XG5cdGJhY2tncm91bmQ6IGRhcmtncmV5O1xuXHRib3JkZXI6IGRhcmtncmV5O1xufVxuXG4uc21hbGwtZ3JleSB7XG5cdGhlaWdodDogNDUlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGxpbmUtaGVpZ2h0OiAyO1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luOiAwO1xufVxuXG4ucmlnaHQtd2hpdGUge1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbi5yaWdodC13aGl0ZTphZnRlciB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMTAlO1xuXHRyaWdodDogMDtcblx0aGVpZ2h0OiA4MCU7XG5cdHdpZHRoOiAxcHg7XG59XG5cbi5ib3R0b20ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMDtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5wcm9ncmVzcy1yb3cge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmctdG9wOiAuNzVlbTtcbn1cblxuLmNvbC05LCAuY29sLTIsIC5jb2wtMSwgLmNvbC0xMCB7XG5cdHBhZGRpbmc6IDA7XG59XG5cbi5ob3Zlcjpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1haW4tYnRuIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzQwMTk1ODtcblx0Ym9yZGVyLWNvbG9yOiAjNDAxOTU4O1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbi53aGl0ZS1saW5rIHtcblx0Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG5cdGZvbnQtc2l6ZTogLjg1dncgIWltcG9ydGFudDtcbn1cblxuLnNlZS1tb3JlLWhlYWRlciB7XG5cdGJhY2tncm91bmQ6ICM0MDE5NTg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Ym9yZGVyLXJhZGl1czogMDtcblx0Ym9yZGVyLWJvdHRvbTogMDtcblx0Zm9udC1zaXplOiAxLjVlbTtcblx0cGFkZGluZy1sZWZ0OiAxZW07XG59XG5cbi5pbmRlbnQge1xuXHRtYXJnaW4tbGVmdDogMXZ3O1xufVxuXG4uc3RhdHVzIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdG1hcmdpbjogLjVlbSAwO1xufVxuXG4ubW9kYWwtaW5zaWRlIHtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdHBhZGRpbmc6IDJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/user-dashboard/user-dashboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/user-dashboard/user-dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/user.service */ "./src/app/core/user.service.ts");
/* harmony import */ var _core_checkup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/checkup.service */ "./src/app/core/checkup.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let UserDashboardComponent = class UserDashboardComponent {
    constructor(userService, router, checkupService, datePipe, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.checkupService = checkupService;
        this.datePipe = datePipe;
        this.activatedRoute = activatedRoute;
        this.checkups = []; // active checkups: currently in the process of completion
        this.requestedCheckups = []; // requested checkups: other user has requested a checkup with current user
        this.waitingCheckups = []; // pending checkups: current user has requested a checkup with other user, waiting on accept
        this.modalBody = '';
        this.company = '';
        this.companyName = '';
        this.userService.checkPartner('gina@arammu.org').then(res => console.log(res)).catch(err => console.error(err));
        this.activatedRoute.data.subscribe(data => {
            this.company = data.company || '';
            switch (data.company) {
                case 'canyonranch':
                    this.companyName = 'Canyon Ranch';
                    break;
                default:
                    this.companyName = '';
                    break;
            }
        });
    }
    ngOnInit() {
        this.userService.getCurrentUser()
            .then(user => {
            if (user) {
                this.user = user;
                if (this.user.email.includes('canyon.ranch'))
                    this.router.navigate(['/canyonranch/dashboard']);
                this.checkupService.getCheckups(this.user.id).subscribe(data => {
                    this.checkups = [];
                    this.requestedCheckups = [];
                    this.waitingCheckups = [];
                    data.forEach((checkup) => {
                        if (checkup.partner == this.user.id) { // partner == user, need to switch
                            const tempUser = checkup.user;
                            const tempSurvey = checkup.userSurvey;
                            const tempUserSurvey = checkup.partnerSurvey;
                            checkup['user'] = this.user.id;
                            checkup['userSurvey'] = tempUserSurvey;
                            checkup['partner'] = tempUser;
                            checkup['partnerSurvey'] = tempSurvey;
                            if (checkup.partnerAccepted)
                                this.getName(checkup, this.checkups); // user has accepted request
                            else
                                this.getName(checkup, this.requestedCheckups); // user needs to accept request
                        }
                        else if (!checkup.partnerAccepted) { // waiting on partner
                            if (!checkup.partner.includes('@'))
                                this.getEmail(checkup, this.waitingCheckups); // user has registered, so get email
                            else
                                this.waitingCheckups.push(checkup);
                        }
                        else
                            this.getName(checkup, this.checkups); // partner has accepted
                        checkup = this.getNextText(checkup);
                    });
                });
            }
            else {
                console.error('no profile found');
                this.router.navigate(['/login']);
            }
        }, err => {
            console.error('no profile found', err);
            this.router.navigate(['/login']);
        });
    }
    getName(checkup, arr) {
        this.userService.getUser(checkup.partner).then(data => {
            if (data) {
                checkup['tempPartner'] = checkup.partner;
                checkup.partner = `${data.firstName} ${data.lastName}`;
                arr.push(checkup);
            }
            else {
                console.error('Could not find info', checkup);
                alert('Could not find partner data, please try again or contact info@arammu.org for support');
            }
        }).catch(err => {
            console.log(err);
            alert('Could not find partner data, please try again or contact info@arammu.org for support');
        });
    }
    getEmail(checkup, arr) {
        this.userService.getUser(checkup.partner).then(data => {
            if (data) {
                checkup['tempPartner'] = checkup.partner;
                checkup.partner = data.email;
                arr.push(checkup);
            }
            else {
                console.error('Could not find info', checkup);
                alert('Could not find partner data, please try again or contact info@arammu.org for support');
            }
        }).catch(err => {
            console.log(err);
            alert('Could not find partner data, please try again or contact info@arammu.org for support');
        });
    }
    checkAppointment(apt) {
        if (!apt)
            return '';
        else if (apt.toDate() > new Date())
            return 'half';
        else
            return 'full';
    }
    getNextText(checkup) {
        if (!checkup.partnerAccepted) {
            checkup['nextStep'] = 'Wait for Partner to Accept Request';
            checkup['nextIndex'] = 1;
        }
        else if (!checkup.userSurvey) {
            checkup['nextStep'] = 'Fill Out Questionnaire';
            checkup['nextIndex'] = 2;
        }
        else if (!checkup.partnerSurvey) {
            checkup['nextStep'] = 'Wait for Partner to Complete Questionnaire';
            checkup['nextIndex'] = 4;
        }
        else if (!checkup.appointment) {
            checkup['nextStep'] = 'Schedule Appointment';
            checkup['nextIndex'] = 5;
        }
        else if (checkup.appointment.toDate() > new Date()) {
            if (this.company == 'canyonranch') {
                checkup['nextStep'] = `Check In on \n ${this.datePipe.transform(checkup.appointment.toDate(), 'EEEE, MMMM d, y')}`;
            }
            else
                checkup['nextStep'] = `Checkup on \n ${this.datePipe.transform(checkup.appointment.toDate(), 'MMM d, y, h:mm a')}`;
            checkup['nextIndex'] = 3;
        }
        else if (!checkup.feedback) {
            checkup['nextStep'] = 'Feedback Report Coming Soon!';
            checkup['nextIndex'] = 6;
        }
        else {
            checkup['nextStep'] = 'View Feedback Report';
            checkup['nextIndex'] = 7;
        }
        return checkup;
    }
    getNextAction(checkup) {
        switch (Number(checkup.nextIndex)) {
            case 1: // Wait for Partner to Accept Request
                break;
            case 2: // Fill Out Questionnaire
                if (checkup.type != 'professional') { // personal
                    this.router.navigate(['/personal-survey', { user: checkup.user, partner: checkup.tempPartner, checkup: checkup.id, dashboard: true }]);
                }
                else { // business
                    this.router.navigate(['/professional-survey',
                        { user: checkup.user, partner: checkup.tempPartner, checkup: checkup.id, dashboard: true }]);
                }
                break;
            case 3: // Time for your Checkup
                break;
            case 4: // Wait for Partner to Complete Questionnaire
                break;
            case 5: // Schedule Appointment
                this.router.navigate(['/choose-clinician', checkup.id]);
                break;
            case 6: // View Feedback Report
                break;
            case 7: // Checkup Complete!
                break;
            default: // error
                console.error(checkup, checkup.nextIndex);
                break;
        }
    }
    newCheckup() {
        this.router.navigate(['/choose-type', { user: this.user.id }]);
    }
    acceptRequest() {
        console.log('Accepting', this.curCheckup);
        this.checkupService.updateCheckup(this.curCheckup.id, { partnerAccepted: true });
        // TODO: email partner
    }
    declineRequest() {
        console.log('Declining', this.curCheckup);
    }
};
UserDashboardComponent.ctorParameters = () => [
    { type: _core_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _core_checkup_service__WEBPACK_IMPORTED_MODULE_3__["CheckupService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
UserDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-dashboard',
        template: __webpack_require__(/*! raw-loader!./user-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user-dashboard/user-dashboard.component.html"),
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        styles: [__webpack_require__(/*! ./user-dashboard.component.css */ "./src/app/user/user-dashboard/user-dashboard.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _core_checkup_service__WEBPACK_IMPORTED_MODULE_3__["CheckupService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], UserDashboardComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyDqeKlZFIwFluqA2Xlu_OQZ5Xb8MHSLAYU',
        authDomain: 'arammu-site.firebaseapp.com',
        databaseURL: 'https://arammu-site.firebaseio.com',
        projectId: 'arammu-site',
        storageBucket: 'arammu-site.appspot.com',
        messagingSenderId: '901664366598'
    },
    stripeKey: 'pk_test_06Wq0o7cNfQosp2rqwgp6L5z'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node ./src/main.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Gina/Desktop/Desktop/arammu/arammu.nosync/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node");
module.exports = __webpack_require__(/*! /Users/Gina/Desktop/Desktop/arammu/arammu.nosync/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map