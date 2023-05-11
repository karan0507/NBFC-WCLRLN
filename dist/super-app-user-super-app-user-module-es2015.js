(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["super-app-user-super-app-user-module"],{

/***/ "Q8ZH":
/*!***************************************************************************!*\
  !*** ./src/app/super-app-user/super-app-user/super-app-user.component.ts ***!
  \***************************************************************************/
/*! exports provided: SuperAppUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAppUserComponent", function() { return SuperAppUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var src_app_shared_globalservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/globalservices.service */ "Wum+");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var _applications_common_document_actions_common_document_actions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../applications/common-document-actions/common-document-actions.component */ "D2SG");
























function SuperAppUserComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuperAppUserComponent_ng_template_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.getUsersData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SuperAppUserComponent_nz_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 42);
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r19.pk)("nzLabel", item_r19.name);
} }
function SuperAppUserComponent_ng_container_68_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r21 + 1);
} }
function SuperAppUserComponent_ng_container_68_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r23.page - 1) * ctx_r23.globalPageSize + (i_r21 + 1), " ");
} }
function SuperAppUserComponent_ng_container_68_i_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 66);
} }
function SuperAppUserComponent_ng_container_68_i_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 67);
} }
function SuperAppUserComponent_ng_container_68_i_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 66);
} }
function SuperAppUserComponent_ng_container_68_i_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 67);
} }
function SuperAppUserComponent_ng_container_68_i_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 66);
} }
function SuperAppUserComponent_ng_container_68_i_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 67);
} }
function SuperAppUserComponent_ng_container_68_a_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTrigger", "click")("nzPlacement", "bottomRight")("nzDropdownMenu", _r31);
} }
function SuperAppUserComponent_ng_container_68_a_74_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuperAppUserComponent_ng_container_68_a_74_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r39._currentModalData = ctx_r39.selfie; return ctx_r39._isViewDocument = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SuperAppUserComponent_ng_container_68_a_75_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuperAppUserComponent_ng_container_68_a_75_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r41._isVerify = true; return ctx_r41._currentModalData = ctx_r41.selfie; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SuperAppUserComponent_ng_container_68_a_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r35.selfie["file_url"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SuperAppUserComponent_ng_container_68_a_77_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuperAppUserComponent_ng_container_68_a_77_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r43._isUpload = true; return ctx_r43._currentModalData = ctx_r43.selfie; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SuperAppUserComponent_ng_container_68_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzExpandChange", function SuperAppUserComponent_ng_container_68_Template_td_nzExpandChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const data_r20 = ctx.$implicit; const i_r21 = ctx.index; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.onExpandChange(data_r20.id, $event, i_r21); })("click", function SuperAppUserComponent_ng_container_68_Template_td_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const data_r20 = ctx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.getUserDetails(data_r20.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SuperAppUserComponent_ng_container_68_td_3_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SuperAppUserComponent_ng_container_68_td_4_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SuperAppUserComponent_ng_container_68_i_16_Template, 1, 0, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SuperAppUserComponent_ng_container_68_i_17_Template, 1, 0, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SuperAppUserComponent_ng_container_68_i_19_Template, 1, 0, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SuperAppUserComponent_ng_container_68_i_20_Template, 1, 0, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SuperAppUserComponent_ng_container_68_i_22_Template, 1, 0, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SuperAppUserComponent_ng_container_68_i_23_Template, 1, 0, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SuperAppUserComponent_ng_container_68_a_28_Template, 2, 3, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nz-dropdown-menu", null, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuperAppUserComponent_ng_container_68_Template_li_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const data_r20 = ctx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.showModal(data_r20.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Change Step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "nz-page-header", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nz-card", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "nz-page-header", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nz-card", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Company Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Employee Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "nz-page-header", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "nz-card", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Selfie Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, SuperAppUserComponent_ng_container_68_a_74_Template, 2, 0, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, SuperAppUserComponent_ng_container_68_a_75_Template, 2, 0, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, SuperAppUserComponent_ng_container_68_a_76_Template, 2, 1, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, SuperAppUserComponent_ng_container_68_a_77_Template, 2, 0, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r20 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](70);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpand", ctx_r4.expandSet.has(data_r20.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.page == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.page > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (data_r20 == null ? null : data_r20.first_name) ? data_r20 == null ? null : data_r20.first_name : "-", " ", (data_r20 == null ? null : data_r20.last_name) ? data_r20 == null ? null : data_r20.last_name : " ", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((data_r20 == null ? null : data_r20.mobile) ? data_r20 == null ? null : data_r20.mobile : " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r20 == null ? null : data_r20.unique_code) ? data_r20 == null ? null : data_r20.unique_code : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r20 == null ? null : data_r20.company) ? data_r20 == null ? null : data_r20.company : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r20 == null ? null : data_r20.app_user_nature) ? data_r20 == null ? null : data_r20.app_user_nature : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r20 == null ? null : data_r20.name_flag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(data_r20 == null ? null : data_r20.name_flag));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r20 == null ? null : data_r20.company_flag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(data_r20 == null ? null : data_r20.company_flag));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r20 == null ? null : data_r20.selfie_flag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(data_r20 == null ? null : data_r20.selfie_flag));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 29, data_r20 == null ? null : data_r20.created_at, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (data_r20 == null ? null : data_r20.status) != "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpand", ctx_r4.expandSet.has(data_r20.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (ctx_r4.userPersonalDetails == null ? null : ctx_r4.userPersonalDetails.first_name) ? ctx_r4.userPersonalDetails == null ? null : ctx_r4.userPersonalDetails.first_name : "-", " ", (ctx_r4.userPersonalDetails == null ? null : ctx_r4.userPersonalDetails.last_name) ? ctx_r4.userPersonalDetails == null ? null : ctx_r4.userPersonalDetails.last_name : " ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r4.userEmpDetails == null ? null : ctx_r4.userEmpDetails.company_name) ? ctx_r4.userEmpDetails == null ? null : ctx_r4.userEmpDetails.company_name : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r4.userEmpDetails == null ? null : ctx_r4.userEmpDetails.employee_code) ? ctx_r4.userEmpDetails == null ? null : ctx_r4.userEmpDetails.employee_code : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.selfie);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.selfie);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.selfie);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.selfie);
} }
function SuperAppUserComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Personal Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SuperAppUserComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Employement Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SuperAppUserComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Document Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SuperAppUserComponent_section_75_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-common-document-actions", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function SuperAppUserComponent_section_75_Template_app_common_document_actions_close_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r49._isViewDocument = false; return ctx_r49._currentModalData = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", "viewDocument")("_isOpenModal", ctx_r11._isViewDocument ? true : false)("documentData", ctx_r11._currentModalData);
} }
function SuperAppUserComponent_section_76_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-common-document-actions", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function SuperAppUserComponent_section_76_Template_app_common_document_actions_close_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r51._isVerify = false; return ctx_r51.getKycDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", "verifyDocument")("_isOpenModal", ctx_r12._isVerify ? true : false)("documentData", ctx_r12._currentModalData);
} }
function SuperAppUserComponent_section_77_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-common-document-actions", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function SuperAppUserComponent_section_77_Template_app_common_document_actions_close_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r53._isUpload = false; return ctx_r53.getKycDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", "uploadDocument")("_isOpenModal", ctx_r13._isUpload ? true : false)("documentData", ctx_r13._currentModalData);
} }
function SuperAppUserComponent_ng_container_79_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-select", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SuperAppUserComponent_ng_container_79_Template_nz_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.changeStep = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.changeStep);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "COMPANY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "SELFIE");
} }
function SuperAppUserComponent_ng_template_80_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuperAppUserComponent_ng_template_80_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r57.changeStepAction(); return ctx_r57.handleOk(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");
} }
const _c0 = function () { return { x: "1500px", y: "" }; };
class SuperAppUserComponent {
    constructor(https, global, message) {
        this.https = https;
        this.global = global;
        this.message = message;
        this.searchValue = '';
        this.selectedTabFilter = 'all';
        this.page = 1;
        this._isVerify = false;
        this.today = new Date();
        this.listOfCurrentPageData = [];
        this.globalPageSize = this.global.globalPageSize;
        this._isViewDocument = false;
        this._isUpload = false;
        this.isVisible = false;
        this.api_calling_loader = {
            'listLoader': false,
            'accordian': false,
            'button': false
        };
        this.disabledDate = (current) => {
            // Can not select days before today and today
            return Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["differenceInCalendarDays"])(current, this.today) > 0;
        };
        this.date = '';
        this.customRanges = {
            Today: [new Date(), new Date()],
            'Last 7 days': [new Date().setDate(new Date().getDate() - 7), new Date()],
            'This Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()],
            'Last Month': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 1), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
            'Last 3 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 3), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
            'Last 6 Months': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 6), new Date(new Date().getFullYear(), new Date().getMonth(), -1, 30, 31)],
            'This Year': [new Date(new Date().getFullYear(), 0, 1), new Date()],
            // 'Last Year': [new Date(new Date().getFullYear(), new Date().getMonth(), 1).setMonth(new Date().getMonth() - 12), new Date(new Date().getFullYear(), new Date().getMonth(), 1)],
            'Last Year': [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear() - 1, 11, 31)],
        };
        this.expandSet = new Set();
    }
    ngOnInit() {
        this.page = 1;
        this.globalPageSize = this.global.globalPageSize;
        this.getUsersData();
        this.getPrartnerList();
    }
    onChange(result) {
        console.log('onChange: ', result);
    }
    getWeek(result) {
        // console.log('week: ', result.map(getISOWeek));
    }
    resetFilters() {
        this.date = '';
        this.searchValue = null;
        this.partner = null;
        this.step = null;
        this.product = null;
    }
    onClickChangeTabFilter(e) {
        console.log(e);
        // this.resetFilters();
        this.selectedTabFilter = e;
        this.getUsersData();
    }
    getPrartnerList() {
        this.https.fetchPartner().subscribe((res) => {
            console.log(res);
            // this.partnerList = res?.data?.results?.filter(res => { if (res?.name) { return res } });
        });
    }
    onFocusMethod(type) {
        // if (type == 'product') {
        //       this.https.getAllProducts().subscribe((res: any) => {
        //             this.productList = res?.data
        //       })
        // } else if (type == 'status') {
        //       let params = { 'source': 'Onboarding', endpoint: '1', 'datapoint': 'get-stage-statuses' }
        //       this.https.getStatusStageWise(params).subscribe((res: any) => {
        //             this.stageStatusList = res?.data
        //       })
        if (type == 'partner') {
            this.https.fetchPartner().subscribe((res) => {
                var _a, _b;
                this.partnerList = (_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.results) === null || _b === void 0 ? void 0 : _b.filter(res => { if (res === null || res === void 0 ? void 0 : res.name) {
                    return res;
                } });
            });
        }
    }
    onCurrentPageDataChange(listOfCurrentPageData) {
        this.listOfCurrentPageData = listOfCurrentPageData;
        // this.refreshCheckedStatus();
    }
    getUsersData(tableFilter) {
        this.api_calling_loader['listLoader'] = true;
        let data = {
            app_user_nature: this.selectedTabFilter
        };
        if (this.product) {
            data['product'] = this.product;
        }
        if (this.step) {
            data['step'] = this.step;
        }
        if (this.partner) {
            data['corporate'] = this.partner;
        }
        if (this.searchValue) {
            data['search_param'] = this.searchValue;
        }
        this.page = (tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageIndex) ? tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageIndex : 1;
        this.globalPageSize = (tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageSize) ? tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageSize : 100;
        data['page'] = (tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageIndex) ? tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageIndex : 1;
        data['limit'] = (tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageSize) ? tableFilter === null || tableFilter === void 0 ? void 0 : tableFilter.pageSize : this.globalPageSize;
        data['start_date'] = this.date[0] ? moment__WEBPACK_IMPORTED_MODULE_1__(this.date[0]).format("YYYY-MM-DD") : '',
            data['end_date'] = this.date[1] ? moment__WEBPACK_IMPORTED_MODULE_1__(this.date[1]).format("YYYY-MM-DD") : '',
            this.https.fetchSuperAppUserData(data).subscribe(res => {
                var _a;
                console.log(res);
                this.superuserList = res === null || res === void 0 ? void 0 : res.data.results;
                this.total_count = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.total_count;
                console.log(this.superuserList);
                this.api_calling_loader['listLoader'] = false;
            });
    }
    onExpandChange(id, checked, index) {
        if (checked) {
            this.expandSet.clear();
            this._currentId = id;
            this.expandSet.add(id);
            this.https.expnadList.next(this.expandSet);
        }
        else {
            this.expandSet.delete(id);
            console.log('Deleted array of active ids');
        }
    }
    getUserDetails(id) {
        let data;
        this.https.fetchSuperAppUserDetails(id).subscribe(res => {
            var _a, _b, _c;
            this.userPersonalDetails = (_a = res.data) === null || _a === void 0 ? void 0 : _a.name_details;
            this.userEmpDetails = (_b = res.data) === null || _b === void 0 ? void 0 : _b.employment_details;
            this.selfie = {};
            this.selfie['file_url'] = (_c = res.data) === null || _c === void 0 ? void 0 : _c.selfie;
        });
    }
    showModal(id) {
        this.isVisible = true;
        console.log(id);
        this.userId = id;
    }
    handleOk() {
        console.log('Button ok clicked!');
        this.isVisible = false;
    }
    handleCancel() {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    }
    changeStepAction() {
        let data = {
            user_id: this.userId,
            step: this.changeStep,
        };
        this.https.changeStep(data).subscribe(res => {
            console.log(res);
            this.message.success(res['message']);
        });
    }
}
SuperAppUserComponent.ɵfac = function SuperAppUserComponent_Factory(t) { return new (t || SuperAppUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_globalservices_service__WEBPACK_IMPORTED_MODULE_4__["GlobalservicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"])); };
SuperAppUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuperAppUserComponent, selectors: [["app-super-app-user"]], decls: 82, vars: 34, consts: [[1, "header_breadcrumb_section"], [1, "d-flex", "justify-content-md-center", "flex-wrap", "w-100"], [1, "font-size-20"], ["nz-icon", "", "nzType", "user", "nzTheme", "outline", 1, "mr-2"], [1, "w-100"], [1, "row", "mb-md-3"], [1, "col-md-8", "mb-md-0"], [1, "d-flex"], [3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "all", 1, "mr-md-2", "mr-2", "px-4", "mb-md-0", "mb-3", "border-radius-2"], ["nz-radio-button", "", "nzValue", "B2B", 1, "mr-md-2", "mr-2", "px-4", "mb-md-0", "mb-3", "border-radius-2"], ["nz-radio-button", "", "nzValue", "D2C", 1, "mr-md-2", "mr-2", "px-4", "mb-md-0", "mb-3", "border-radius-2"], ["nzSearch", "", 1, "mb-2", 2, "width", "19rem", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "Search text", 3, "ngModel", "ngModelChange", "keyup.enter"], ["suffixIconButton", ""], [1, "row"], ["nzAllowClear", "", "nzPlaceHolder", "Select Product", 1, "mx-1", "mb-2", 2, "width", "12rem", 3, "ngModel", "ngModelChange"], ["nzLabel", "FatakPay", 3, "nzValue"], ["nzLabel", "Fatak EMI", 3, "nzValue"], ["nzMode", "multiple", "nzAllowClear", "", "nzPlaceHolder", "Select Partner", 1, "mx-1", "my-md-0", "mb-3", 2, "width", "15rem", 3, "ngModel", "nzMaxTagCount", "nzSize", "ngModelChange", "nzFocus"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzAllowClear", "", "nzPlaceHolder", "Select Step", 1, "mx-1", "mb-2", 2, "width", "12rem", 3, "ngModel", "ngModelChange"], ["nzLabel", "Name", 3, "nzValue"], ["nzLabel", "Company", 3, "nzValue"], ["nzLabel", "Selfie", 3, "nzValue"], ["nzLabel", "Dashboard", 3, "nzValue"], [1, "mx-1", "mb-2", 2, "width", "18rem", 3, "ngModel", "nzDisabledDate", "nzRanges", "ngModelChange"], [3, "nzData", "nzTotal", "nzFrontPagination", "nzShowSizeChanger", "nzPageIndex", "nzPageSize", "nzScroll", "nzLoading", "nzCurrentPageDataChange", "nzQueryParams"], ["rowSelectionTable", ""], ["nzWidth", "2rem"], ["nzWidth", "60px"], ["nzWidth", "8rem"], [4, "ngFor", "ngForOf"], ["basicDetail", ""], ["empDetail", ""], ["uploadDoc", ""], [4, "ngIf"], [3, "nzVisible", "nzFooter", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["submit", ""], ["nz-button", "", "nzType", "secondary", "nzSearch", "", 3, "click"], ["nz-icon", "", "nzType", "search"], [3, "nzValue", "nzLabel"], ["nzWidth", "1rem", 3, "nzExpand", "nzExpandChange", "click"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", "class", "text-success", 4, "ngIf"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "text-danger", 4, "ngIf"], ["style", "cursor: pointer;", "class", "text-dark font-size-20 p-l-5 p-r-5", "id", "bg", "nz-dropdown", "", 3, "nzTrigger", "nzPlacement", "nzDropdownMenu", 4, "ngIf"], ["latestUploadDropDown", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click"], [1, "m-l-5"], ["approve", ""], [3, "nzExpand"], [1, "justify-content-center"], [1, "acc-bg-light", "mb-2", "m-l-0", 3, "nzTitle"], [1, "mb-md-5"], [1, "col-md-4", "mb-3"], [1, "d-flex", "flex-column"], [1, "text-gray"], [1, "site-page-header", "acc-bg-light", 3, "nzTitle"], [1, "d-flex", "flex-wrap", "justify-content-between"], [1, "mr-5"], ["class", "text-primary mr-3", "nzTooltipTitle", "View Document", 3, "click", 4, "ngIf"], ["class", "text-primary mr-3", "nzTooltipTitle", "Verify Document", 3, "click", 4, "ngIf"], ["class", "text-primary mr-3", "nzTooltipTitle", "Download Document", "download", "", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "text-primary", "nzTooltipTitle", "Upload Document", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", 1, "text-success"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "text-danger"], ["id", "bg", "nz-dropdown", "", 1, "text-dark", "font-size-20", "p-l-5", "p-r-5", 2, "cursor", "pointer", 3, "nzTrigger", "nzPlacement", "nzDropdownMenu"], ["nz-icon", "", "nzType", "ellipsis", "theme", "outline"], ["nzTooltipTitle", "View Document", 1, "text-primary", "mr-3", 3, "click"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline"], ["nzTooltipTitle", "Verify Document", 1, "text-primary", "mr-3", 3, "click"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "outline"], ["nzTooltipTitle", "Download Document", "download", "", "target", "_blank", 1, "text-primary", "mr-3", 3, "href"], ["nz-icon", "", "nzType", "download", "nzTheme", "outline"], ["nzTooltipTitle", "Upload Document", 1, "text-primary", 3, "click"], ["nz-icon", "", "nzType", "upload", "nzTheme", "outline"], ["nz-icon", "", "nzType", "user", "nzTheme", "outline"], [1, "mb-0", "ml-2"], [3, "action", "_isOpenModal", "documentData", "close"], [1, "row", "justify-content-center"], ["nzAllowClear", "", "nzPlaceHolder", "Select Step", 2, "width", "12rem", 3, "ngModel", "ngModelChange"], ["nz-button", "", 3, "nzType", "click"]], template: function SuperAppUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-radio-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SuperAppUserComponent_Template_nz_radio_group_ngModelChange_13_listener($event) { return ctx.selectedTabFilter = $event; })("ngModelChange", function SuperAppUserComponent_Template_nz_radio_group_ngModelChange_13_listener($event) { return ctx.onClickChangeTabFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "B2B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "D2C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nz-input-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SuperAppUserComponent_Template_input_ngModelChange_22_listener($event) { return ctx.searchValue = $event; })("keyup.enter", function SuperAppUserComponent_Template_input_keyup_enter_22_listener() { return ctx.getUsersData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SuperAppUserComponent_ng_template_23_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nz-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SuperAppUserComponent_Template_nz_select_ngModelChange_27_listener($event) { return ctx.product = $event; })("ngModelChange", function SuperAppUserComponent_Template_nz_select_ngModelChange_27_listener() { return ctx.getUsersData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "nz-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "nz-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nz-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SuperAppUserComponent_Template_nz_select_ngModelChange_31_listener($event) { return ctx.partner = $event; })("nzFocus", function SuperAppUserComponent_Template_nz_select_nzFocus_31_listener() { return ctx.onFocusMethod("partner"); })("ngModelChange", function SuperAppUserComponent_Template_nz_select_ngModelChange_31_listener() { return ctx.getUsersData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SuperAppUserComponent_nz_option_32_Template, 1, 2, "nz-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nz-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SuperAppUserComponent_Template_nz_select_ngModelChange_34_listener($event) { return ctx.step = $event; })("ngModelChange", function SuperAppUserComponent_Template_nz_select_ngModelChange_34_listener() { return ctx.getUsersData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "nz-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "nz-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "nz-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "nz-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nz-range-picker", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SuperAppUserComponent_Template_nz_range_picker_ngModelChange_40_listener($event) { return ctx.date = $event; })("ngModelChange", function SuperAppUserComponent_Template_nz_range_picker_ngModelChange_40_listener() { return ctx.getUsersData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "nz-table", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCurrentPageDataChange", function SuperAppUserComponent_Template_nz_table_nzCurrentPageDataChange_42_listener($event) { return ctx.onCurrentPageDataChange($event); })("nzQueryParams", function SuperAppUserComponent_Template_nz_table_nzQueryParams_42_listener($event) { return ctx.superuserList[0] ? ctx.getUsersData($event) : null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "User Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Unique Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Name Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Company Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Selfie Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Apply Date & Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, SuperAppUserComponent_ng_container_68_Template, 78, 32, "ng-container", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, SuperAppUserComponent_ng_template_69_Template, 4, 0, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, SuperAppUserComponent_ng_template_71_Template, 4, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, SuperAppUserComponent_ng_template_73_Template, 4, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, SuperAppUserComponent_section_75_Template, 2, 3, "section", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, SuperAppUserComponent_section_76_Template, 2, 3, "section", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, SuperAppUserComponent_section_77_Template, 2, 3, "section", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "nz-modal", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function SuperAppUserComponent_Template_nz_modal_nzVisibleChange_78_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function SuperAppUserComponent_Template_nz_modal_nzOnCancel_78_listener() { return ctx.handleCancel(); })("nzOnOk", function SuperAppUserComponent_Template_nz_modal_nzOnOk_78_listener() { return ctx.handleOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, SuperAppUserComponent_ng_container_79_Template, 7, 4, "ng-container", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, SuperAppUserComponent_ng_template_80_Template, 3, 1, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Users : ", ctx.total_count ? ctx.total_count : "0", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedTabFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAddOnAfter", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.partner)("nzMaxTagCount", 1)("nzSize", "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.partnerList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.step);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "selfie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date)("nzDisabledDate", ctx.disabledDate)("nzRanges", ctx.customRanges);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.superuserList)("nzTotal", ctx.total_count)("nzFrontPagination", false)("nzShowSizeChanger", true)("nzPageIndex", ctx.page)("nzPageSize", ctx.globalPageSize)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c0))("nzLoading", ctx.api_calling_loader["listLoader"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.superuserList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._isViewDocument);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._isVerify);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._isUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzFooter", _r15);
    } }, directives: [ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__["NzCardComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_9__["NzRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_9__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_9__["NzRadioButtonDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__["NzDatePickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__["NzRangePickerComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalContentDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__["NzWaveDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTdAddOnComponent"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_20__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_20__["NzMenuItemDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTrExpandDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTableFixedRowComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_21__["NzPageHeaderComponent"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__["NzDropDownADirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__["NzDropDownDirective"], _applications_common_document_actions_common_document_actions_component__WEBPACK_IMPORTED_MODULE_22__["CommonDocumentActionsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBlci1hcHAtdXNlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuperAppUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-super-app-user',
                templateUrl: './super-app-user.component.html',
                styleUrls: ['./super-app-user.component.css']
            }]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: src_app_shared_globalservices_service__WEBPACK_IMPORTED_MODULE_4__["GlobalservicesService"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"] }]; }, null); })();


/***/ }),

/***/ "WnBf":
/*!*********************************************************!*\
  !*** ./src/app/super-app-user/super-app-user.module.ts ***!
  \*********************************************************/
/*! exports provided: SuperAppUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAppUserModule", function() { return SuperAppUserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _super_app_user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./super-app-user-routing.module */ "un2z");
/* harmony import */ var _super_app_user_super_app_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./super-app-user/super-app-user.component */ "Q8ZH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "0lU3");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/image */ "6ekq");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "KupA");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/steps */ "OEtX");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-json-viewer */ "xWP1");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-permissions */ "qSrz");
/* harmony import */ var _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../ng-zorro-antd.module */ "PMIT");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
































class SuperAppUserModule {
}
SuperAppUserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SuperAppUserModule });
SuperAppUserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SuperAppUserModule_Factory(t) { return new (t || SuperAppUserModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _super_app_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["SuperAppUserRoutingModule"],
            ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_17__["NzPageHeaderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__["NzTableModule"],
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__["NzCardModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__["NzInputModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__["NzSelectModule"],
            ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_25__["NzUploadModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"],
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_15__["NzMenuModule"],
            ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_7__["NzCheckboxModule"],
            ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_8__["NzDatePickerModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalModule"],
            ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_22__["NzStepsModule"],
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__["NzToolTipModule"],
            ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_19__["NzPopoverModule"],
            ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__["NzPopconfirmModule"],
            ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_13__["NzImageModule"],
            ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_20__["NzRadioModule"],
            ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_9__["NzDividerModule"],
            ngx_json_viewer__WEBPACK_IMPORTED_MODULE_26__["NgxJsonViewerModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_29__["SharedModule"],
            _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_28__["DemoNgZorroAntdModule"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_27__["NgxPermissionsModule"].forChild()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SuperAppUserModule, { declarations: [_super_app_user_super_app_user_component__WEBPACK_IMPORTED_MODULE_3__["SuperAppUserComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _super_app_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["SuperAppUserRoutingModule"],
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_17__["NzPageHeaderModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__["NzTableModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__["NzCardModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__["NzInputModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__["NzSelectModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_25__["NzUploadModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_15__["NzMenuModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_7__["NzCheckboxModule"],
        ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_8__["NzDatePickerModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalModule"],
        ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_22__["NzStepsModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__["NzToolTipModule"],
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_19__["NzPopoverModule"],
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__["NzPopconfirmModule"],
        ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_13__["NzImageModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_20__["NzRadioModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_9__["NzDividerModule"],
        ngx_json_viewer__WEBPACK_IMPORTED_MODULE_26__["NgxJsonViewerModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_29__["SharedModule"],
        _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_28__["DemoNgZorroAntdModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_27__["NgxPermissionsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuperAppUserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_super_app_user_super_app_user_component__WEBPACK_IMPORTED_MODULE_3__["SuperAppUserComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _super_app_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["SuperAppUserRoutingModule"],
                    ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_17__["NzPageHeaderModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
                    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__["NzTableModule"],
                    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__["NzCardModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__["NzInputModule"],
                    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__["NzSelectModule"],
                    ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_25__["NzUploadModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"],
                    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownModule"],
                    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_15__["NzMenuModule"],
                    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_7__["NzCheckboxModule"],
                    ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_8__["NzDatePickerModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormModule"],
                    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalModule"],
                    ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_22__["NzStepsModule"],
                    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_24__["NzToolTipModule"],
                    ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_19__["NzPopoverModule"],
                    ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_18__["NzPopconfirmModule"],
                    ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_13__["NzImageModule"],
                    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_20__["NzRadioModule"],
                    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_9__["NzDividerModule"],
                    ngx_json_viewer__WEBPACK_IMPORTED_MODULE_26__["NgxJsonViewerModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_29__["SharedModule"],
                    _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_28__["DemoNgZorroAntdModule"],
                    ngx_permissions__WEBPACK_IMPORTED_MODULE_27__["NgxPermissionsModule"].forChild()
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "un2z":
/*!*****************************************************************!*\
  !*** ./src/app/super-app-user/super-app-user-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SuperAppUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAppUserRoutingModule", function() { return SuperAppUserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _super_app_user_super_app_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./super-app-user/super-app-user.component */ "Q8ZH");





const routes = [
    {
        path: '',
        // canActivate: [NgxPermissionsGuard],
        component: _super_app_user_super_app_user_component__WEBPACK_IMPORTED_MODULE_2__["SuperAppUserComponent"],
        data: {
            title: 'Super App User',
            parent: 'Super App User',
            custom_url: 'product-list',
            permissions: {
                only: 'view_product',
                redirectTo: 'authentication/error-2'
            }
        }
    },
];
class SuperAppUserRoutingModule {
}
SuperAppUserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SuperAppUserRoutingModule });
SuperAppUserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SuperAppUserRoutingModule_Factory(t) { return new (t || SuperAppUserRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SuperAppUserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuperAppUserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=super-app-user-super-app-user-module-es2015.js.map