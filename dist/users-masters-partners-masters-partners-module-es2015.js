(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-masters-partners-masters-partners-module"],{

/***/ "/I8L":
/*!***********************************************************************************************!*\
  !*** ./src/app/users/masters-partners/master-partners-list/master-partners-list.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MasterPartnersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterPartnersListComponent", function() { return MasterPartnersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "qSrz");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "KupA");
/* harmony import */ var _shared_template_audit_history_audit_history_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/template/audit-history/audit-history.component */ "8NRN");
/* harmony import */ var _shared_template_double_confirmation_popup_double_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/template/double-confirmation-popup/double-confirmation-popup.component */ "thbs");
/* harmony import */ var _shared_template_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../shared/template/change-password/change-password.component */ "Kz7f");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");































const _c0 = function () { return ["/masters-partners/add"]; };
function MasterPartnersListComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+ Add Master");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function MasterPartnersListComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_template_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.getResultBasedOnSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzExpandChange", function MasterPartnersListComponent_ng_container_60_td_2_Template_td_nzExpandChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const data_r25 = ctx_r44.$implicit; const i_r26 = ctx_r44.index; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.onExpandChange(data_r25.id, $event, i_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const data_r25 = ctx_r46.$implicit;
    const i_r26 = ctx_r46.index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpand", ctx_r27.expandSet.has(data_r25.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r26 + 1, "");
} }
function MasterPartnersListComponent_ng_container_60_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzExpandChange", function MasterPartnersListComponent_ng_container_60_td_3_Template_td_nzExpandChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const data_r25 = ctx_r48.$implicit; const i_r26 = ctx_r48.index; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.onExpandChange(data_r25.id, $event, i_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const data_r25 = ctx_r50.$implicit;
    const i_r26 = ctx_r50.index;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpand", ctx_r28.expandSet.has(data_r25.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r28.page - 1) * ctx_r28.globalPageSize + (i_r26 + 1), "");
} }
function MasterPartnersListComponent_ng_container_60_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["../masters-partners/edit"]; };
const _c2 = function (a0) { return { id: a0 }; };
function MasterPartnersListComponent_ng_container_60_li_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, data_r25.id));
} }
function MasterPartnersListComponent_ng_container_60_ng_container_34_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_ng_container_34_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.deleteUserByUserId(data_r25 == null ? null : data_r25.id, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterPartnersListComponent_ng_container_60_ng_container_34_li_1_Template, 3, 0, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !data_r25.is_deleted);
} }
function MasterPartnersListComponent_ng_container_60_ng_container_35_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_ng_container_35_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.deleteUserByUserId(data_r25 == null ? null : data_r25.id, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterPartnersListComponent_ng_container_60_ng_container_35_li_1_Template, 3, 0, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r25.is_deleted);
} }
function MasterPartnersListComponent_ng_container_60_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_ng_container_36_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.storeSelectedId(data_r25 == null ? null : data_r25.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-upload", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Upload Agreement ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMultiple", false)("nzAccept", ".xls, .xlsx, .pdf")("nzBeforeUpload", ctx_r37.beforeUpload);
} }
function MasterPartnersListComponent_ng_container_60_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_ng_container_37_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.storeSelectedId(data_r25 == null ? null : data_r25.id, "get"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Show Agreement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Submitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " & \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Document Not Submitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Verified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_8_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_8_span_1_Template_a_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r85.onClickVerifyDoc(data_r71 == null ? null : data_r71.id); })("nzOnCancel", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_8_span_1_Template_a_nzOnCancel_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7); return ctx_r88.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Plz Click to verify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_8_span_1_Template, 3, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(data_r71 == null ? null : data_r71.is_verified) && (data_r71 == null ? null : data_r71.document_file_front));
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_10_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_10_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r91.onClickDownloadSelectedDocument(data_r71, "front"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_10_i_1_Template, 1, 0, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71 == null ? null : data_r71.document_file_front);
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_11_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_11_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98); const data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r96.storeSelectedId(data_r71, "submitted", "front"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_11_i_1_Template, 1, 0, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71 == null ? null : data_r71.document_file_front);
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Submitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Document Not Submitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_i_19_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_i_19_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r100.onClickDownloadSelectedDocument(data_r71, "back"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_i_20_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_i_20_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105); const data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r103.storeSelectedId(data_r71, "submitted", "back"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function () { return ["verify_document_master_partner"]; };
const _c4 = function () { return ["download_document"]; };
const _c5 = function () { return ["view_document"]; };
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_span_5_Template, 4, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_span_6_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_span_7_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_8_Template, 2, 1, "ng-container", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_10_Template, 2, 1, "ng-container", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_11_Template, 2, 1, "ng-container", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_span_16_Template, 3, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_span_17_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_i_19_Template, 1, 0, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_i_20_Template, 1, 0, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r71 == null ? null : data_r71.document_master == null ? null : data_r71.document_master.name) + " Front", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71 == null ? null : data_r71.document_file_front);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(data_r71 == null ? null : data_r71.document_file_front));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71 == null ? null : data_r71.is_verified);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r71 == null ? null : data_r71.document_master == null ? null : data_r71.document_master.name) + " Back", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71 == null ? null : data_r71.document_file_back);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(data_r71 == null ? null : data_r71.document_file_back));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71 == null ? null : data_r71.document_file_back);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71 == null ? null : data_r71.document_file_back);
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Submitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " & \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Document Not Submitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Verified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_span_9_Template_a_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115); const data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r113.onClickVerifyDoc(data_r71 == null ? null : data_r71.id); })("nzOnCancel", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_span_9_Template_a_nzOnCancel_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r116.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Plz Click to verify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_i_11_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_i_11_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); const data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r117.onClickDownloadSelectedDocument(data_r71, "single"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_i_12_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_i_12_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r120.storeSelectedId(data_r71, "submitted", "single"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_span_6_Template, 4, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_span_7_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_span_8_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_span_9_Template, 3, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_i_11_Template, 1, 0, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_i_12_Template, 1, 0, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r71 == null ? null : data_r71.document_master == null ? null : data_r71.document_master.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71 == null ? null : data_r71.document_file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(data_r71 == null ? null : data_r71.document_file));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71 == null ? null : data_r71.is_verified);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(data_r71 == null ? null : data_r71.is_verified) && (data_r71 == null ? null : data_r71.document_file));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71 == null ? null : data_r71.document_file);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71 == null ? null : data_r71.document_file);
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_Template, 21, 15, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_Template, 13, 7, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71 == null ? null : data_r71.document_master == null ? null : data_r71.document_master.require_front_back);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(data_r71 == null ? null : data_r71.document_master == null ? null : data_r71.document_master.require_front_back));
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_Template, 3, 2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.documents);
} }
function MasterPartnersListComponent_ng_container_60_div_105_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No Documents To show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-page-header", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-card", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MasterPartnersListComponent_ng_container_60_div_105_div_3_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MasterPartnersListComponent_ng_container_60_div_105_div_4_Template, 4, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r39.storeDetailId == data_r25.id ? ctx_r39._apiLoader["detailList"] : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.documents == null ? null : data_r25.expandSet.documents.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.documents == null ? null : data_r25.expandSet.documents.length) <= 0);
} }
function MasterPartnersListComponent_ng_container_60_div_109_div_1_div_17_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_div_109_div_1_div_17_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134); const data_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r132.onClickGetPassword("reset", data_r127); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reset Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_109_div_1_div_17_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_div_109_div_1_div_17_li_7_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r137); const data_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r135.onClickGetPassword("show", data_r127); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c6 = function () { return ["reset_password_master_partner"]; };
const _c7 = function () { return ["show_password_master_partner"]; };
function MasterPartnersListComponent_ng_container_60_div_109_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MasterPartnersListComponent_ng_container_60_div_109_div_1_div_17_li_6_Template, 3, 0, "li", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MasterPartnersListComponent_ng_container_60_div_109_div_1_div_17_li_7_Template, 3, 0, "li", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzClickHide", false)("nzTrigger", "click")("nzPlacement", "bottomRight")("nzDropdownMenu", _r129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c7));
} }
const _c8 = function () { return ["show_password_master_partner", "reset_password_master_partner"]; };
function MasterPartnersListComponent_ng_container_60_div_109_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MasterPartnersListComponent_ng_container_60_div_109_div_1_div_17_Template, 8, 8, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r127 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r127 == null ? null : data_r127.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r127 == null ? null : data_r127.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c8));
} }
function MasterPartnersListComponent_ng_container_60_div_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterPartnersListComponent_ng_container_60_div_109_div_1_Template, 18, 4, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.corporate_admins);
} }
function MasterPartnersListComponent_ng_container_60_div_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No Corporate Admin Detail's to show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_127_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_60_div_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-page-header", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-card", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-audit-history", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MasterPartnersListComponent_ng_container_60_div_127_ng_template_6_Template, 4, 0, "ng-template", null, 93, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("endpoint", "PartnerMaster")("endpoint_id", ctx_r42.storeDetailId);
} }
const _c9 = function () { return ["edit_master_partner"]; };
const _c10 = function () { return ["toggle_master_partner"]; };
const _c11 = function () { return ["upload_agreement_master_partner"]; };
const _c12 = function () { return ["show_agreement_master_partner"]; };
const _c13 = function () { return ["view_document_master_partner"]; };
function MasterPartnersListComponent_ng_container_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MasterPartnersListComponent_ng_container_60_td_2_Template, 2, 2, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MasterPartnersListComponent_ng_container_60_td_3_Template, 2, 2, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MasterPartnersListComponent_ng_container_60_td_23_Template, 3, 0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MasterPartnersListComponent_ng_container_60_td_24_Template, 3, 0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MasterPartnersListComponent_ng_container_60_td_25_Template, 3, 0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MasterPartnersListComponent_ng_container_60_td_26_Template, 3, 0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nz-dropdown-menu", null, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MasterPartnersListComponent_ng_container_60_li_33_Template, 3, 5, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MasterPartnersListComponent_ng_container_60_ng_container_34_Template, 2, 1, "ng-container", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MasterPartnersListComponent_ng_container_60_ng_container_35_Template, 2, 1, "ng-container", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, MasterPartnersListComponent_ng_container_60_ng_container_36_Template, 4, 3, "ng-container", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, MasterPartnersListComponent_ng_container_60_ng_container_37_Template, 4, 0, "ng-container", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "nz-page-header", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nz-card", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Company's Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Phone No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "nz-page-header", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "nz-card", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Phone No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Email-Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "nz-page-header", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "nz-card", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Bank Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " IFSC Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " A/c No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Branch. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, MasterPartnersListComponent_ng_container_60_div_105_Template, 5, 4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "nz-page-header", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "nz-card", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, MasterPartnersListComponent_ng_container_60_div_109_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, MasterPartnersListComponent_ng_container_60_div_110_Template, 4, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "nz-page-header", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "nz-card", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Employee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Payout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, MasterPartnersListComponent_ng_container_60_div_127_Template, 8, 3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r25 = ctx.$implicit;
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](66);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](70);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.page == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.page > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r25.display_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r25 == null ? null : data_r25.business_type == null ? null : data_r25.business_type.business_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r25 == null ? null : data_r25.business_nature == null ? null : data_r25.business_nature.business_nature);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r25 == null ? null : data_r25.partners == null ? null : data_r25.partners.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r25 == null ? null : data_r25.partners == null ? null : data_r25.partners.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r25 == null ? null : data_r25.partners == null ? null : data_r25.partners.inactive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 50, data_r25.created_at, "dd MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r25.unique_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r25 == null ? null : data_r25.registered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(data_r25 == null ? null : data_r25.registered));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(data_r25 == null ? null : data_r25.is_deleted));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r25 == null ? null : data_r25.is_deleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzClickHide", false)("nzTrigger", "click")("nzPlacement", "bottomRight")("nzDropdownMenu", _r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](53, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](54, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](55, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](56, _c11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](57, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpand", ctx_r3.expandSet.has(data_r25.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r3.storeDetailId == data_r25.id ? ctx_r3._apiLoader["detailList"] : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.address_line_1) || (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.address_line_2) ? (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.address_line_1) + " " + (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.address_line_2) : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.phone) ? data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.phone : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r3.storeDetailId == data_r25.id ? ctx_r3._apiLoader["detailList"] : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.contact_person_name) ? data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.contact_person_name : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.contact_person_phone) ? data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.contact_person_phone : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.contact_person_email) ? data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.contact_person_email : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r3.storeDetailId == data_r25.id ? ctx_r3._apiLoader["detailList"] : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.bank_name) ? data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.bank_name : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.ifsc) ? data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.ifsc : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.account_no) ? data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.account_no : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.branch) ? data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.branch : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](58, _c13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r3.storeDetailId == data_r25.id ? ctx_r3._apiLoader["detailList"] : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.corporate_admins == null ? null : data_r25.expandSet.corporate_admins.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.corporate_admins == null ? null : data_r25.expandSet.corporate_admins.length) <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r3.storeDetailId == data_r25.id ? ctx_r3._apiLoader["detailList"] : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.employee) ? data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.employee : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.payout) ? data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.payout : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.storeDetailId == data_r25.id);
} }
function MasterPartnersListComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Basic Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact Personal Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Banking Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "KYC Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Corporate Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Other Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_ng_container_74_Template(rf, ctx) { if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-double-confirmation-popup", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onOkCall", function MasterPartnersListComponent_ng_container_74_Template_app_double_confirmation_popup_onOkCall_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r141.confirmationTrigger(); })("onCencelCall", function MasterPartnersListComponent_ng_container_74_Template_app_double_confirmation_popup_onCencelCall_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r143.isDelete = false; return ctx_r143.selectedUserId = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r16.statusOfSelectedLender ? "This action will Activate this account" : "This action will Deactivate this account")("subTitle", !ctx_r16.statusOfSelectedLender ? "if  required, you can activate this account after 15 days." : "if required, you can Deactivate this account after 15 days.")("alertWarning", ctx_r16.statusOfSelectedLender ? "Are your sure ?" : "Are your sure ?")("icon", "assets/images/activate.png")("cancelBtnTxt", "Cancel")("submitBtnTxt", "OK");
} }
function MasterPartnersListComponent_ng_container_76_Template(rf, ctx) { if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-change-password", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onOkCall", function MasterPartnersListComponent_ng_container_76_Template_app_change_password_onOkCall_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r144.onClickChangePassword($event); })("onCencelCall", function MasterPartnersListComponent_ng_container_76_Template_app_change_password_onCencelCall_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r146.toggleChangePassword = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userData", ctx_r17.selectedUserData)("cancelBtnTxt", "Cancel")("submitBtnTxt", "Update");
} }
function MasterPartnersListComponent_ng_container_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "embed", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r18.sanatizeUrlToSafe(ctx_r18.pdf_viewer_object_values["url"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function MasterPartnersListComponent_ng_template_79_Template(rf, ctx) { if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_template_79_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r148); const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r147.handleCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MasterPartnersListComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.passwordForAdmin["password"] == null ? null : ctx_r21.passwordForAdmin["password"].password, " ");
} }
function MasterPartnersListComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-control", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-form-label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-form-control", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-form-label", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Send Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-form-control", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r22.resetPasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 20);
} }
const _c14 = function () { return ["add_master_partner"]; };
const _c15 = function () { return [100, 200, 300, 400, 500, 600, 750, 1000]; };
const _c16 = function () { return { x: "1300px", y: "" }; };
// import jsPDF from 'jspdf';
const getBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
});
class MasterPartnersListComponent {
    constructor(http, message, sanitized, fb) {
        this.http = http;
        this.message = message;
        this.sanitized = sanitized;
        this.fb = fb;
        this.selectedTab = 'all';
        this.setOfCheckedId = new Set();
        this.listOfCurrentPageData = [];
        this.checked = false;
        this.indeterminate = false;
        this._apiLoader = {
            list: false,
            detailList: false,
        };
        this.globalPageSize = 100;
        this.isVisible = false;
        this.searchValue = '';
        this.expandSet = new Set();
        this.masterPartnerDetailList = [];
        this.toggleOnUpgradeUser = false;
        this.pdf_viewer_object_values = {
            'boolean': false,
            'url': '',
            'title': ''
        };
        this.passwordForAdmin = {
            'isVisibleModal': false,
            'toggleShoePasswordField': false,
            'apiLoaderOnClick': false,
            'password': null,
            'apiLoader': null
        };
        this.beforeUpload = (file) => {
            console.log(file.name);
            this.file = file.name;
            this.uploaded_file = file;
            console.log(file);
            console.log(this.uploaded_file);
            // this.updateMCCCodeWithUploadingFile();
            this.uploadAndShowAgreement('post');
            return false;
        };
    }
    onExpandChange(id, checked, i) {
        this.selectedIndexOfExpand = i;
        if (checked) {
            this.getMasterPartnerById(this.storeDetailId = id, i);
            this.expandSet.add(id);
            // alert('Clicked On Expand ' + id)
        }
        else {
            this.expandSet.delete(id);
        }
    }
    updateCheckedSet(id, checked) {
        if (checked) {
            this.setOfCheckedId.add(id);
        }
        else {
            this.setOfCheckedId.delete(id);
        }
    }
    ngOnInit() {
        this.createResetPasswordForm();
        this.selectedTab = 'all';
        this.page = 1;
        this.getMasterPartner();
    }
    createResetPasswordForm() {
        this.resetPasswordForm = this.fb.group({
            corporate_admin_id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            new_password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            retype_password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            send_email: [false],
        });
    }
    onClickGetPassword(action, data) {
        this.selectedUserId = data === null || data === void 0 ? void 0 : data.id;
        if (action == 'show') {
            this.passwordForAdmin['apiLoader'] = true;
            this.passwordForAdmin['isVisibleModal'] = true;
            this.passwordForAdmin['toggleShoePasswordField'] = true;
            this.http.showPasswordOfCorporateAdmin(data === null || data === void 0 ? void 0 : data.id).subscribe((res) => {
                console.log(res);
                this.passwordForAdmin['apiLoader'] = false;
                this.passwordForAdmin['password'] = res === null || res === void 0 ? void 0 : res.data;
            });
        }
        else {
            this.passwordForAdmin['isVisibleModal'] = true;
            this.passwordForAdmin['toggleShoePasswordField'] = false;
            this.resetPasswordForm.patchValue({
                'corporate_admin_id': data === null || data === void 0 ? void 0 : data.id
            });
        }
    }
    onClickResetPassword() {
        for (const i in this.resetPasswordForm.controls) {
            this.resetPasswordForm.controls[i].markAsDirty();
            this.resetPasswordForm.controls[i].updateValueAndValidity();
        }
        if (this.resetPasswordForm.value.send_email == true) {
            this.resetPasswordForm.patchValue({
                'send_email': 0
            });
        }
        else {
            this.resetPasswordForm.patchValue({
                'send_email': 1
            });
        }
        console.log(this.resetPasswordForm.value);
        if (this.resetPasswordForm.valid) {
            if (this.resetPasswordForm.value.new_password != this.resetPasswordForm.value.retype_password) {
                this.message.error('Plz Make sure to match New Password & Confirm Password');
                return;
            }
            this.passwordForAdmin['apiLoaderOnClick'] = true;
            const sendDate = this.resetPasswordForm.value;
            let data = new FormData();
            for (var i in sendDate) {
                // if (sendDate[i]) {
                data.append(i, sendDate[i]);
                // }
                // }
                // data.append('corporate_limit_settings', JSON.stringify(corporate_limit_settings));
            }
            this.http.resetPasswordForCorporateAdmin(data).subscribe((res) => {
                console.log(res);
                if (res === null || res === void 0 ? void 0 : res.success) {
                    this.message.success(res === null || res === void 0 ? void 0 : res.message);
                    this.passwordForAdmin['isVisibleModal'] = false;
                    this.passwordForAdmin['apiLoaderOnClick'] = true;
                }
                else {
                    this.message.error(res === null || res === void 0 ? void 0 : res.message);
                    this.passwordForAdmin['apiLoaderOnClick'] = true;
                }
            });
        }
    }
    onClickChangeTab(e) {
        this.page = 1;
        this.globalPageSize = 100;
        this.selectedTab = e;
        this.getMasterPartner();
    }
    getResultBasedOnSearch() {
        this.page = 1;
        this.getMasterPartner();
    }
    getMasterPartnerById(id, i) {
        this._apiLoader["detailList"] = true;
        this.http.getMasterPartnerById(id).subscribe((res) => {
            this.resetPasswordForm.reset();
            this.masterPartnerDetailList.push(res === null || res === void 0 ? void 0 : res.data);
            this.masterPartner[i].expandSet = res === null || res === void 0 ? void 0 : res.data;
            this._apiLoader["detailList"] = false;
        }, err => {
            console.log(err);
            this._apiLoader["detailList"] = false;
        });
    }
    resetFilter() {
        this.page = 1;
        this.searchValue = '';
        this.getMasterPartner();
    }
    getMasterPartner(e) {
        if (this._apiLoader["list"]) {
            return;
        }
        if (e) {
            this.page = e === null || e === void 0 ? void 0 : e.pageIndex;
            this.globalPageSize = e === null || e === void 0 ? void 0 : e.pageSize;
        }
        let data = {
            // 'user_type_id' : 2
            'page': this.page,
            'limit': this.globalPageSize,
            'name': this.searchValue,
            'partner_nature': 'master',
            'status': this.selectedTab === 'all' ? '' : this.selectedTab === 'active' ? 'active' : this.selectedTab === 'inactive' ? 'inactive' : ''
        };
        // if(this.searchValue){
        //   data['']
        // }
        this._apiLoader["list"] = true;
        this.http.getMasterPartner(data).subscribe((res) => {
            var _a, _b;
            console.log(res);
            this.masterPartner = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.results;
            this.total_count = (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.total_count;
            this._apiLoader["list"] = false;
        }, erro => {
            this._apiLoader["list"] = false;
        });
    }
    onCurrentPageDataChange(listOfCurrentPageData) {
        this.listOfCurrentPageData = listOfCurrentPageData;
        this.refreshCheckedStatus();
    }
    onItemChecked(id, checked) {
        this.updateCheckedSet(id, checked);
        this.refreshCheckedStatus();
    }
    onAllChecked(checked) {
        this.listOfCurrentPageData
            .filter(({ disabled }) => !disabled)
            .forEach(({ id }) => this.updateCheckedSet(id, checked));
        this.refreshCheckedStatus();
    }
    refreshCheckedStatus() {
        const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }
    handleCancel() {
        this.isDelete = false;
        this.pdf_viewer_object_values['boolean'] = false;
        this.pdf_viewer_object_values['url'] = '';
    }
    cancel() {
    }
    onClickVerifyDoc(id) {
        let data;
        this.http.verifyUploadedKycDocumentForMaster(id, data).subscribe((res) => {
            this.message.success(res === null || res === void 0 ? void 0 : res.message);
            this.getMasterPartnerById(this.storeDetailId, this.selectedIndexOfExpand);
            console.log(res);
        });
    }
    confirmationTrigger() {
        this.http.deleteMasterUserByUserId(this.selectedUserId).subscribe((res) => {
            var _a;
            if (res === null || res === void 0 ? void 0 : res.success) {
                this.message.success(res === null || res === void 0 ? void 0 : res.message);
            }
            else {
                this.message.error((_a = res === null || res === void 0 ? void 0 : res.message) === null || _a === void 0 ? void 0 : _a[0]);
            }
            this.getMasterPartner();
            this.isDelete = false;
        }, err => {
            this.isDelete = false;
        });
    }
    deleteUserByUserId(id, action) {
        this.statusOfSelectedLender = action;
        this.selectedUserId = id;
        this.isDelete = true;
    }
    onClickChangePassword(e) {
        console.log('event to execute');
        console.log(e);
        this.http.changePasswordByAdmin(e).subscribe((res) => {
            this.message.success('Password Updated Successfully');
            this.toggleChangePassword = false;
        }, err => {
            this.toggleChangePassword = false;
        });
    }
    changePassword(data) {
        var _a;
        this.selectedUserData = [];
        const selectedData = {
            id: (_a = data === null || data === void 0 ? void 0 : data.user) === null || _a === void 0 ? void 0 : _a.id,
            email: data === null || data === void 0 ? void 0 : data.contact_person_email,
            phone: data === null || data === void 0 ? void 0 : data.contact_person_phone,
            name: data === null || data === void 0 ? void 0 : data.name
        };
        this.selectedUserData.push(selectedData);
        // this.selectedUserData = data;
        console.log(this.selectedUserData);
        this.toggleChangePassword = true;
    }
    sanatizeUrlToSafe(value) {
        // let data = 'https://devadminapi.fatakpay.com/media/nbfc_agreements/2022/02/11/djangogirls-tutorial-en_DkLZGLR.pdf'
        return this.sanitized.bypassSecurityTrustResourceUrl(value);
    }
    storeSelectedId(id, action, type) {
        var _a;
        console.log(id);
        this.selectedIdForAgreement = id;
        if (action === 'get') {
            this.uploadAndShowAgreement('get');
        }
        else if (action === 'submitted') {
            const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId;
            this.pdf_viewer_object_values['title'] = 'Show ' + ((_a = id === null || id === void 0 ? void 0 : id.document_master) === null || _a === void 0 ? void 0 : _a.name);
            if (type == 'single') {
                this.pdf_viewer_object_values['url'] = id === null || id === void 0 ? void 0 : id.document_file;
            }
            else if (type == 'front') {
                this.pdf_viewer_object_values['url'] = id === null || id === void 0 ? void 0 : id.document_file_front;
            }
            else if (type == 'back') {
                this.pdf_viewer_object_values['url'] = id === null || id === void 0 ? void 0 : id.document_file_back;
            }
            this.pdf_viewer_object_values['boolean'] = true;
            this.message.remove(generateloader);
        }
    }
    onClickDownloadSelectedDocument(e, action) {
        // var data = new Blob([e?.document_file]);
        // FileSaver.saveAs(data,  `${e?.file_name}`);
        if (action == 'front') {
            var data = new Blob([e === null || e === void 0 ? void 0 : e.document_file_front], { type: 'text/plain;charset=utf-8' });
            file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, `Front_Doc`);
        }
        else if (action == 'back') {
            var data = new Blob([e === null || e === void 0 ? void 0 : e.document_file_back], { type: 'text/plain;charset=utf-8' });
            file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, `Back_Doc`);
        }
        else if (action == 'single') {
            var data = new Blob([e === null || e === void 0 ? void 0 : e.document_file], { type: 'text/plain;charset=utf-8' });
            file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, `Document_Preview`);
        }
    }
    // downloadPdf(base64String, fileName) {
    //   const source = `data:application/pdf;base64,${base64String}`;
    //   const link = document.createElement("a");
    //   link.href = source;
    //   link.download = `${fileName}.pdf`
    //   link.click();
    // }
    uploadAndShowAgreement(action) {
        let data = new FormData();
        let endPoint = 'master';
        data.append('file', this.uploaded_file);
        if (action === 'post') {
            const generateloader = this.message.loading('Uploading Document..', { nzDuration: 0 }).messageId;
            this.http.uploadAndShowAgreement(endPoint, 'post', this.selectedIdForAgreement, data).subscribe((res) => {
                var _a;
                this.message.remove(generateloader);
                console.log(res);
                if (res === null || res === void 0 ? void 0 : res.success) {
                    this.message.success(res === null || res === void 0 ? void 0 : res.message);
                }
                else {
                    this.message.error((_a = res === null || res === void 0 ? void 0 : res.message) === null || _a === void 0 ? void 0 : _a[0]);
                }
            }, error => {
                this.message.remove(generateloader);
                console.log(error);
            });
        }
        else {
            const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId;
            this.http.uploadAndShowAgreement(endPoint, 'get', this.selectedIdForAgreement).subscribe((res) => {
                // pdfViewerAndDownload(){
                if (res.success) {
                    this.pdf_viewer_object_values['title'] = 'Show Agreement';
                    this.pdf_viewer_object_values['url'] = res === null || res === void 0 ? void 0 : res.data.agreement;
                    this.pdf_viewer_object_values['boolean'] = true;
                    this.message.remove(generateloader);
                }
                else {
                    this.message.remove(generateloader);
                    this.message.error('No Reports To Generate..');
                }
                // }
            }, error => {
                this.message.remove(generateloader);
                console.log(error);
            });
        }
    }
}
MasterPartnersListComponent.ɵfac = function MasterPartnersListComponent_Factory(t) { return new (t || MasterPartnersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
MasterPartnersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MasterPartnersListComponent, selectors: [["app-master-partners-list"]], decls: 85, vars: 40, consts: [[1, "row", "mb-md-3"], [1, "col-md-6", "mb-md-0"], [3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "all", 1, "mr-md-2", "mr-2", "px-4", "mb-md-0", "mb-3", "border-radius-2"], ["nz-radio-button", "", "nzValue", "active", 1, "mr-md-2", "mr-2", "px-4", "mb-md-0", "mb-3", "border-radius-2"], ["nz-radio-button", "", "nzValue", "inactive", 1, "mr-md-2", "mr-2", "px-4", "mb-md-0", "mb-3", "border-radius-2"], [1, "col-md-6", "col-12", "my-md-0", "my-3", "d-flex", "justify-content-end"], ["nz-button", "", "class", "text-primary", 3, "routerLink", 4, "ngxPermissionsOnly"], [1, "row"], [1, "w-100"], [1, "col-md-4", "mb-3", "d-flex"], ["nzSearch", "", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "Search text", 3, "ngModel", "keyup.enter", "ngModelChange"], ["suffixIconButton", ""], ["nz-button", "", "nzType", "default", "nzShape", "circle", "nz-tooltip", "", "nzTooltipTitle", "Reset Filter", 1, "mx-2", 3, "click"], ["nz-icon", "", "nzType", "undo"], [1, "col-md-8", "mb-3", "d-flex", "justify-content-md-end"], [1, "accordianLoanApp"], [3, "nzTotal", "nzFrontPagination", "nzLoading", "nzShowSizeChanger", "nzPageSize", "nzPageSizeOptions", "nzPageIndex", "nzData", "nzScroll", "nzQueryParams"], ["rowspan", "2", "nzWidth", "100px"], ["rowspan", "2"], ["rowspan", "3", "nzWidth", "150px"], ["colspan", "3", 1, "text-left"], ["rowspan", "2", "nzWidth", "8rem", "nzRight", "", 1, "pr-0"], [4, "ngFor", "ngForOf"], ["basicDetail", ""], ["contactPersonDetail", ""], ["bankingDetail", ""], ["kycDocument", ""], ["adminDetail", ""], ["otherDetails", ""], [3, "nzWidth", "nzVisible", "nzFooter", "nzClosable", "nzVisibleChange", "nzOnCancel"], [4, "nzModalContent"], ["nzTitle", "Change Password", 3, "nzWidth", "nzVisible", "nzFooter", "nzClosable", "nzOnCancel", "nzVisibleChange"], ["nzHeight", "50vw", "nzWidth", "60vw", "nzKeyboard", "true", 3, "nzVisible", "nzTitle", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalFooter", ""], [3, "nzTitle", "nzWidth", "nzVisible", "nzOkLoading", "nzFooter", "nzClosable", "nzVisibleChange", "nzOnOk", "nzOnCancel"], [3, "nzLoading"], ["class", "row", 4, "ngIf"], ["nz-button", "", 1, "text-primary", 3, "routerLink"], ["nz-button", "", "nzType", "secondary", "nzSearch", "", 3, "click"], ["nz-icon", "", "nzType", "search"], [3, "nzExpand", "nzExpandChange", 4, "ngIf"], [4, "ngIf"], ["nzWidth", "8rem", "nzRight", "", 1, "pr-0"], ["nz-dropdown", "", 1, "text-dark", "font-size-20", 3, "nzClickHide", "nzTrigger", "nzPlacement", "nzDropdownMenu"], ["src", "assets/images/ellipsis.png", "alt", "", "width", "30"], ["latestUploadDropDown", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "routerLink", "queryParams", 4, "ngxPermissionsOnly"], [4, "ngxPermissionsOnly"], [3, "nzExpand"], [1, "justify-content-center"], [1, "site-page-header", "text-center", "w-25", "p-1", "rounded", "bg-gray-lightest", "mb-2", 3, "nzTitle"], [1, "mb-md-5", 3, "nzLoading"], [1, "col-md-6"], [1, "d-flex", "flex-column"], [1, "site-page-header", "text-center", "rounded", "w-25", "p-1", "bg-gray-lightest", "my-2", 3, "nzTitle"], [1, "col-md-4"], ["class", "justify-content-center", 4, "ngxPermissionsOnly"], [1, "site-page-header", "acc-bg-light", "mb-2", 3, "nzTitle"], [1, "d-flex"], ["class", "my-3", 4, "ngIf"], [3, "nzExpand", "nzExpandChange"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "outline"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "outline"], ["nz-menu-item", "", 3, "routerLink", "queryParams"], [1, "m-l-5"], ["nz-menu-item", "", 3, "click", 4, "ngIf"], ["nz-menu-item", "", 3, "click"], ["nzSize", "large", 1, "d-flex", "pl-1", "align-items-left", 2, "cursor", "pointer", 3, "nzMultiple", "nzAccept", "nzBeforeUpload"], ["class", "col-md-6 mb-2", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mb-2"], ["class", "d-flex flex-column", 4, "ngIf"], [1, "mb-2"], [1, "mx-2"], ["style", "cursor: pointer;", "class", "mr-3", "nz-icon", "", "nzType", "download", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["style", "cursor: pointer;", "class", "mr-3", "nz-icon", "", "nzType", "eye", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure you want to verify corresponding document ?", "nzPopconfirmPlacement", "bottom", 3, "nzOnConfirm", "nzOnCancel"], ["nz-icon", "", "nzType", "download", "nzTheme", "outline", 1, "mr-3", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline", 1, "mr-3", 2, "cursor", "pointer", 3, "click"], ["class", "col-md-12 mb-2", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mb-2"], [1, "col-4"], ["class", "col-4 align-self-center text-right", 4, "ngxPermissionsOnly"], [1, "col-4", "align-self-center", "text-right"], ["showPassword", "nzDropdownMenu"], ["nz-menu-item", "", 3, "click", 4, "ngxPermissionsOnly"], [1, "my-3"], [1, "site-page-header", "acc-bg-light", 3, "nzTitle"], [1, "mb-md-0", "border"], [1, "col-12"], [3, "endpoint", "endpoint_id"], ["history", ""], [1, "ml-md-2"], [1, "mb-0"], ["nz-icon", "", "nzType", "file", "nzTheme", "outline", 1, "mr-2"], [3, "title", "subTitle", "alertWarning", "icon", "cancelBtnTxt", "submitBtnTxt", "onOkCall", "onCencelCall"], [3, "userData", "cancelBtnTxt", "submitBtnTxt", "onOkCall", "onCencelCall"], [1, "pdf_viewer_container"], ["width", "100%", 2, "height", "25rem", 3, "src"], ["nz-button", "", "nzType", "primary", 3, "click"], [1, "col-6"], ["nz-form", "", 3, "formGroup"], [1, "col-md-12"], ["nzFor", "name", "nzRequired", "", 1, "text-left", 3, "nzSm"], ["nzErrorTip", "Please Add New Password!", 3, "nzSm"], ["nz-input", "", "type", "text", "formControlName", "new_password", "placeholder", "New Password"], ["nzErrorTip", "Please Add Confirm Password!", 3, "nzSm"], ["nz-input", "", "type", "text", "formControlName", "retype_password", "placeholder", "Confirm Password"], ["nzErrorTip", "Please Select Action!", 3, "nzSm"], ["nz-checkbox", "", "formControlName", "send_email"]], template: function MasterPartnersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MasterPartnersListComponent_Template_nz_radio_group_ngModelChange_3_listener($event) { return ctx.selectedTab = $event; })("ngModelChange", function MasterPartnersListComponent_Template_nz_radio_group_ngModelChange_3_listener($event) { return ctx.onClickChangeTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MasterPartnersListComponent_button_11_Template, 2, 2, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-input-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function MasterPartnersListComponent_Template_input_keyup_enter_20_listener() { return ctx.getResultBasedOnSearch(); })("ngModelChange", function MasterPartnersListComponent_Template_input_ngModelChange_20_listener($event) { return ctx.searchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MasterPartnersListComponent_ng_template_21_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_Template_button_click_23_listener() { return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nz-table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzQueryParams", function MasterPartnersListComponent_Template_nz_table_nzQueryParams_27_listener($event) { return ctx.getMasterPartner($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Master Partner Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Display Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Nature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "No. Of Partners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Regd. On");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Unique Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Registration (KYC)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "System Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Active ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "In Active ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, MasterPartnersListComponent_ng_container_60_Template, 128, 59, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, MasterPartnersListComponent_ng_template_61_Template, 3, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, MasterPartnersListComponent_ng_template_63_Template, 3, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, MasterPartnersListComponent_ng_template_65_Template, 3, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, MasterPartnersListComponent_ng_template_67_Template, 3, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, MasterPartnersListComponent_ng_template_69_Template, 3, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, MasterPartnersListComponent_ng_template_71_Template, 3, 0, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "nz-modal", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function MasterPartnersListComponent_Template_nz_modal_nzVisibleChange_73_listener($event) { return ctx.isDelete = $event; })("nzOnCancel", function MasterPartnersListComponent_Template_nz_modal_nzOnCancel_73_listener() { ctx.isDelete = false; return ctx.selectedUserId = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, MasterPartnersListComponent_ng_container_74_Template, 2, 6, "ng-container", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "nz-modal", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnCancel", function MasterPartnersListComponent_Template_nz_modal_nzOnCancel_75_listener() { return ctx.toggleChangePassword = false; })("nzVisibleChange", function MasterPartnersListComponent_Template_nz_modal_nzVisibleChange_75_listener($event) { return ctx.toggleChangePassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, MasterPartnersListComponent_ng_container_76_Template, 2, 3, "ng-container", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "nz-modal", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function MasterPartnersListComponent_Template_nz_modal_nzVisibleChange_77_listener($event) { return (ctx.pdf_viewer_object_values["boolean"] = $event); })("nzOnCancel", function MasterPartnersListComponent_Template_nz_modal_nzOnCancel_77_listener() { return ctx.handleCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, MasterPartnersListComponent_ng_container_78_Template, 3, 1, "ng-container", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, MasterPartnersListComponent_ng_template_79_Template, 2, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "nz-modal", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function MasterPartnersListComponent_Template_nz_modal_nzVisibleChange_81_listener($event) { return (ctx.passwordForAdmin["isVisibleModal"] = $event); })("nzOnOk", function MasterPartnersListComponent_Template_nz_modal_nzOnOk_81_listener() { return ctx.onClickResetPassword(); })("nzOnCancel", function MasterPartnersListComponent_Template_nz_modal_nzOnCancel_81_listener() { ctx.passwordForAdmin["isVisibleModal"] = false; return ctx.selectedUserId = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "nz-card", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, MasterPartnersListComponent_div_83_Template, 5, 1, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, MasterPartnersListComponent_div_84_Template, 20, 7, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c14));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.total_count ? ctx.total_count : " 0 ", " Results Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAddOnAfter", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTotal", ctx.total_count)("nzFrontPagination", false)("nzLoading", ctx._apiLoader["list"])("nzShowSizeChanger", true)("nzFrontPagination", false)("nzPageSize", ctx.globalPageSize)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c15))("nzPageIndex", ctx.page)("nzShowSizeChanger", true)("nzData", ctx.masterPartner)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c16));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.masterPartner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", 500)("nzVisible", ctx.isDelete)("nzFooter", null)("nzClosable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", 800)("nzVisible", ctx.toggleChangePassword)("nzFooter", null)("nzClosable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.pdf_viewer_object_values["boolean"])("nzTitle", ctx.pdf_viewer_object_values["title"])("nzFooter", _r19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", ctx.passwordForAdmin["toggleShoePasswordField"] ? "View Password" : "Reset Password")("nzWidth", 500)("nzVisible", ctx.passwordForAdmin["isVisibleModal"])("nzOkLoading", ctx.passwordForAdmin["apiLoader"])("nzFooter", ctx.passwordForAdmin["toggleShoePasswordField"] ? null : "")("nzClosable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.passwordForAdmin["apiLoader"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passwordForAdmin["toggleShoePasswordField"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.passwordForAdmin["toggleShoePasswordField"]);
    } }, directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioButtonDirective"], ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__["NzCardComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__["NzWaveDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzCellFixedDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalContentDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterLink"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropDownADirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropDownDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_19__["NzMenuDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTrExpandDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableFixedRowComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_20__["NzPageHeaderComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTdAddOnComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_19__["NzMenuItemDirective"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_21__["NzUploadComponent"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__["NzPopconfirmDirective"], _shared_template_audit_history_audit_history_component__WEBPACK_IMPORTED_MODULE_23__["AuditHistoryComponent"], _shared_template_double_confirmation_popup_double_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_24__["DoubleConfirmationPopupComponent"], _shared_template_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_25__["ChangePasswordComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__["NzFormControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_28__["NzCheckboxComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3Rlci1wYXJ0bmVycy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUciLCJmaWxlIjoibWFzdGVyLXBhcnRuZXJzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIDpob3N0IDo6bmctZGVlcCAuYW50LXRhYmxlLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1NzhweCkgIWltcG9ydGFudDtcbn0gKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterPartnersListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-master-partners-list',
                templateUrl: './master-partners-list.component.html',
                styleUrls: ['./master-partners-list.component.css']
            }]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "JZK+":
/*!***************************************************************************!*\
  !*** ./src/app/users/masters-partners/masters-partners-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: MastersPartnersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastersPartnersRoutingModule", function() { return MastersPartnersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-permissions */ "qSrz");
/* harmony import */ var _add_edit_masters_add_edit_masters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-masters/add-edit-masters.component */ "Sv+W");
/* harmony import */ var _master_partners_list_master_partners_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./master-partners-list/master-partners-list.component */ "/I8L");







const routes = [
    {
        path: '',
        component: _master_partners_list_master_partners_list_component__WEBPACK_IMPORTED_MODULE_4__["MasterPartnersListComponent"],
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"]],
        data: {
            title: 'Masters Partners',
            parent: 'Users',
            custom_url: 'masters-partners',
            permissions: {
                only: 'view_master_partner',
                redirectTo: 'authentication/error-2'
            }
        }
    },
    {
        path: '',
        data: {
            title: 'Masters Partners',
            parent: 'Users',
            custom_url: 'masters-partners',
            canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"]],
            permissions: {
                only: 'view_master_partner',
                redirectTo: 'authentication/error-2'
            }
        },
        // component: LendersComponent,
        children: [
            {
                path: 'add',
                component: _add_edit_masters_add_edit_masters_component__WEBPACK_IMPORTED_MODULE_3__["AddEditMastersComponent"],
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"]],
                data: {
                    title: 'Add Master Partner',
                    parent: 'Users',
                    custom_url: 'masters-partners/add',
                    permissions: {
                        only: 'add_master_partner',
                        redirectTo: 'authentication/error-2'
                    }
                }
            },
            {
                path: 'edit',
                component: _add_edit_masters_add_edit_masters_component__WEBPACK_IMPORTED_MODULE_3__["AddEditMastersComponent"],
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"]],
                data: {
                    title: 'Edit Master Partner',
                    parent: 'Users',
                    custom_url: 'masters-partners/edit',
                    permissions: {
                        only: 'edit_master_partner',
                        redirectTo: 'authentication/error-2'
                    }
                }
            },
        ]
    },
];
class MastersPartnersRoutingModule {
}
MastersPartnersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MastersPartnersRoutingModule });
MastersPartnersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MastersPartnersRoutingModule_Factory(t) { return new (t || MastersPartnersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MastersPartnersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MastersPartnersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sv+W":
/*!***************************************************************************************!*\
  !*** ./src/app/users/masters-partners/add-edit-masters/add-edit-masters.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AddEditMastersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditMastersComponent", function() { return AddEditMastersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/image */ "6ekq");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");

























function AddEditMastersComponent_nz_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 83);
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r11.id)("nzLabel", item_r11.name);
} }
function AddEditMastersComponent_nz_option_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 83);
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r12.id)("nzLabel", item_r12.business_type);
} }
function AddEditMastersComponent_nz_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 83);
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r13.id)("nzLabel", item_r13.business_nature);
} }
function AddEditMastersComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-divider", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 87, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMastersComponent_ng_template_71_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.addItem(_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Add Nature");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r4.apiLoader["nature"])("disabled", !_r14.value);
} }
function AddEditMastersComponent_ng_container_127_i_17_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMastersComponent_ng_container_127_i_17_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const k_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.deleteDocumentByDocumentId(k_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddEditMastersComponent_ng_container_127_i_19_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMastersComponent_ng_container_127_i_19_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.onClickShowUploadedDocument(item_r17, "documents"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddEditMastersComponent_ng_container_127_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-form-label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-form-control", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-upload", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzChange", function AddEditMastersComponent_ng_container_127_Template_nz_upload_nzChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const k_r18 = ctx.index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.onUpload($event, k_r18, "name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddEditMastersComponent_ng_container_127_i_17_Template, 1, 0, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AddEditMastersComponent_ng_container_127_i_19_Template, 1, 0, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const k_r18 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", k_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 13)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r17.controls.display_name.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("nzErrorTip", "Please Add ", item_r17.controls.label_name.value, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzMultiple", "false")("nzAccept", ".png, .jpg, .pdf")("nzCustomRequest", ctx_r5.customUpload);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r17.controls.document_name.value ? "Re Upload" : " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDisabled", item_r17.controls.document_name.value ? false : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r17.controls.isdelete.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r17.controls.document_name.value);
} }
function AddEditMastersComponent_button_156_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMastersComponent_button_156_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.onClickSaveExistingForm($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Save & Add New");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r6.apiLoader["saveAddNew"])("disabled", ctx_r6.apiLoader["formSave"]);
} }
function AddEditMastersComponent_ng_container_161_ng_container_4_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 83);
} if (rf & 2) {
    const item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r32)("nzLabel", item_r32.name);
} }
function AddEditMastersComponent_ng_container_161_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddEditMastersComponent_ng_container_161_ng_container_4_Template_ng_container_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r36.checkItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddEditMastersComponent_ng_container_161_ng_container_4_nz_option_1_Template, 1, 2, "nz-option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r31.documentFlagArray.includes(item_r32));
} }
function AddEditMastersComponent_ng_container_161_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Select Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-select", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddEditMastersComponent_ng_container_161_Template_nz_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.selectedDocument = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddEditMastersComponent_ng_container_161_ng_container_4_Template, 2, 1, "ng-container", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r7.selectedDocument);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.documentArray);
} }
function AddEditMastersComponent_ng_container_163_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "embed", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r8.sanatizeUrlToSafe, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
} }
function AddEditMastersComponent_ng_template_164_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMastersComponent_ng_template_164_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.handleCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const getBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
});
class AddEditMastersComponent {
    constructor(fb, router, http, sanitized, route, message, nzImageService) {
        this.fb = fb;
        this.router = router;
        this.http = http;
        this.sanitized = sanitized;
        this.route = route;
        this.message = message;
        this.nzImageService = nzImageService;
        this.documentArray = [];
        this.apiLoader = {
            'formSave': false,
            'saveAddNew': false,
            'nature': false,
        };
        this.pdf_viewer_object_values = {
            'boolean': false,
            'url': '',
            'title': ''
        };
        this.listOfDocumentWithFlag = [];
        this.documentFlagArray = [];
        // onClickShowUploadedDocument(e){
        // if(e?.value?.documents?.uid){
        //   saveAs(e?.value?.documents);
        // } else {
        //   var data = new Blob([e?.value?.documents], { type: 'text/plain;charset=utf-8' });
        //   FileSaver.saveAs(data,  `${e?.value?.document_name}`); 
        // }
        // }
        this.customUpload = (file) => {
            const data = [];
            // data.push({documents: file});
            // let value = this.addEditProductForm.get('document_data') as FormArray;
            // value.controls?.[this.index].patchValue({documents:file});
            // console.log(file)
            // console.log(this.addEditProductForm.get('document_data')['controls'])
            // this.addEditProductForm.get('document_data')['controls'][this.index].controls.documents.setValue(file)
            // this.addEditProductForm.get('document_data')['controls']['documents'].setValue(file)
            console.log(file);
            return false;
        };
        this.getListOfDocumentRequired();
    }
    ngOnInit() {
        this.createMasterProductForm();
        this.route.queryParams.subscribe(params => {
            if (params['id']) {
                this.isEdit = true;
                this.masterPartnerId = params['id'];
                if (this.masterPartnerId) {
                    this.fetchMasterPartner();
                    this.getListOfBusinessType();
                    this.getListOfBusinessNature();
                    this.getListOfStates();
                }
            }
            else {
                this.isEdit = false;
                // this.masterParnerPayout = null
                // this.createMasterProductForm();
                // this.getListOfDocumentRequired();
            }
        });
    }
    addItem(e) {
        const value = e.value;
        console.log('Working', value);
        if (value) {
            this.apiLoader['nature'] = true;
            let data = {
                "name": value
            };
            this.http.createNewBusinessNature(data).subscribe((res) => {
                if (res === null || res === void 0 ? void 0 : res.success) {
                    this.apiLoader['nature'] = false;
                    this.getListOfBusinessNature();
                    this.message.success(res === null || res === void 0 ? void 0 : res.message);
                }
                else {
                    this.apiLoader['nature'] = false;
                    this.message.error(res === null || res === void 0 ? void 0 : res.message);
                }
            });
        }
        else {
            this.message.error('Plz add Valid Business Nature');
        }
    }
    getListOfBusinessNature() {
        let action = 'get-business-natures';
        this.http.fetchDetailForUserModuleDropDown(action).subscribe((res) => {
            this.businessNatureArr = res === null || res === void 0 ? void 0 : res.data;
        });
    }
    getListOfBusinessType() {
        let action = 'get-business-types';
        this.http.fetchDetailForUserModuleDropDown(action).subscribe((res) => {
            this.businessTypeArr = res === null || res === void 0 ? void 0 : res.data;
        });
    }
    getListOfStates() {
        let action = 'get-states';
        this.http.fetchDetailForUserModuleDropDown(action).subscribe((res) => {
            console.log(res);
            this.stateArr = res === null || res === void 0 ? void 0 : res.data;
        });
    }
    onSearchGetList(e, action) {
        // if(action === 'sta'){
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
            // this.getListOfCorp(search_param);
        }, 500);
        // }
    }
    fetchMasterPartner() {
        this.http.getMasterPartnerById(this.masterPartnerId).subscribe((res) => {
            console.log(res);
            this.setRetrievedDataInForm(res === null || res === void 0 ? void 0 : res.data);
            // this.createMasterProductForm(res?.data);
        });
    }
    setRetrievedDataInForm(data) {
        var _a;
        for (var i in this.addEditProductForm.value) {
            if (i == 'business_nature' || i == 'business_type' || i == 'state') {
                data[i] = (_a = data[i]) === null || _a === void 0 ? void 0 : _a.id;
            }
            if (i != 'document_data') {
                if (data[i]) {
                    this.addEditProductForm.controls[i].setValue(data[i], { emitEvent: false });
                }
            }
        }
        this.setFormData(data);
    }
    setFormData(data) {
        // if (data) {
        //   const documentArray = [];
        //   data.documents?.forEach(element => {
        //     const documents = {
        //       pk: element?.document_master['id'],
        //       documents: element?.document_file,
        //       name: element?.document_master['name'],
        //       document_name: element?.file_name,
        //       id: element?.id,
        //       is_verified: element?.is_verified,
        //     }
        //     documentArray.push(documents);
        //     this.documentArray?.forEach(( entity, index) => {
        //       if (entity.pk == element?.document_master['id']) {
        //         this.documentArray.splice(index,1)
        //       }
        //     });
        //     this.addSkills(documents)
        //   });
        // }
        var _a;
        if (data) {
            const documentArray = [];
            (_a = data.documents) === null || _a === void 0 ? void 0 : _a.forEach((element) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                let documents;
                if ((_a = element === null || element === void 0 ? void 0 : element.document_master) === null || _a === void 0 ? void 0 : _a.require_front_back) {
                    documents = {
                        pk: element === null || element === void 0 ? void 0 : element.document_master["id"],
                        name: element === null || element === void 0 ? void 0 : element.document_master["name"],
                        document_name: null,
                        document_name_front: element === null || element === void 0 ? void 0 : element.front_file_name,
                        document_name_back: element === null || element === void 0 ? void 0 : element.back_file_name,
                        documents: null,
                        documents_front: (element === null || element === void 0 ? void 0 : element.document_file_front) ? element === null || element === void 0 ? void 0 : element.document_file_front : null,
                        documents_back: (element === null || element === void 0 ? void 0 : element.document_file_back) ? element === null || element === void 0 ? void 0 : element.document_file_back : null,
                        id: element === null || element === void 0 ? void 0 : element.id,
                        is_verified: element === null || element === void 0 ? void 0 : element.is_verified,
                        front_back_flag: (_b = element === null || element === void 0 ? void 0 : element.document_master) === null || _b === void 0 ? void 0 : _b.require_front_back,
                        display_name: null,
                        display_name_front: ((_c = element === null || element === void 0 ? void 0 : element.document_master) === null || _c === void 0 ? void 0 : _c.name) + " Front",
                        display_name_back: ((_d = element === null || element === void 0 ? void 0 : element.document_master) === null || _d === void 0 ? void 0 : _d.name) + " Back",
                        isdelete: false,
                    };
                    documentArray.push(documents);
                    this.addSkills(documents);
                }
                else if (!((_e = element === null || element === void 0 ? void 0 : element.document_master) === null || _e === void 0 ? void 0 : _e.require_front_back)) {
                    documents = {
                        pk: element === null || element === void 0 ? void 0 : element.document_master["id"],
                        name: element === null || element === void 0 ? void 0 : element.document_master["name"],
                        document_name: (element === null || element === void 0 ? void 0 : element.file_name) ? element === null || element === void 0 ? void 0 : element.file_name : null,
                        document_name_front: null,
                        document_name_back: null,
                        documents: (element === null || element === void 0 ? void 0 : element.document_file) ? element === null || element === void 0 ? void 0 : element.document_file : null,
                        documents_front: null,
                        documents_back: null,
                        id: element === null || element === void 0 ? void 0 : element.id,
                        is_verified: element === null || element === void 0 ? void 0 : element.is_verified,
                        front_back_flag: (_f = element === null || element === void 0 ? void 0 : element.document_master) === null || _f === void 0 ? void 0 : _f.require_front_back,
                        display_name: (_g = element === null || element === void 0 ? void 0 : element.document_master) === null || _g === void 0 ? void 0 : _g.name,
                        display_name_front: null,
                        display_name_back: null,
                        isdelete: false,
                    };
                    if ((documents === null || documents === void 0 ? void 0 : documents.pk) == 3) {
                        (_h = this.documentArray) === null || _h === void 0 ? void 0 : _h.forEach((entity, index) => {
                            if (entity.pk == (element === null || element === void 0 ? void 0 : element.document_master["id"])) {
                                this.documentArray.splice(index, 1);
                            }
                        });
                    }
                    this.addSkills(documents);
                }
                // this.documentArray?.forEach((entity, index) => {
                //   if (entity.pk == element?.document_master["id"]) {
                //     this.documentArray.splice(index, 1);
                //   }
                // });
                // this.addSkills(documents);
            });
        }
    }
    onClickOpenPopUp(e) {
        if ((e === null || e === void 0 ? void 0 : e.pointerType) == 'mouse') {
            this.isVisible = true;
        }
    }
    omit_special_char(event) {
        // to avoid special Character
        // var k;
        // k = event.charCode;  //         k = event.keyCode;  (Both can be used)
        // return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
        // to avoid special Character && Number
        var charCode = event.keyCode;
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 32 || charCode == 8)
            return true;
        else
            return false;
    }
    createMasterProductForm(data) {
        var _a, _b, _c;
        this.addEditProductForm = this.fb.group({
            name: [data ? data === null || data === void 0 ? void 0 : data.name : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address_line_1: [data ? data === null || data === void 0 ? void 0 : data.address_line_1 : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address_line_2: [data ? data === null || data === void 0 ? void 0 : data.address_line_2 : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            city: [data ? data === null || data === void 0 ? void 0 : data.city : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            state: [data ? (_a = data === null || data === void 0 ? void 0 : data.state) === null || _a === void 0 ? void 0 : _a.id : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pincode: [data ? data === null || data === void 0 ? void 0 : data.pincode : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[1-9][0-9]{5}$')]],
            phone: [data ? data === null || data === void 0 ? void 0 : data.phone : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('([0-9]{8}|[0-9]{10})')]],
            bank_name: [data ? data === null || data === void 0 ? void 0 : data.bank_name : null],
            account_no: [data ? data === null || data === void 0 ? void 0 : data.account_no : null],
            ifsc: [data ? data === null || data === void 0 ? void 0 : data.ifsc : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[A-Z]{4}0[A-Z0-9]{6}$")]],
            // "^[A-Z]{4}0[A-Z0-9]{6}$"
            branch: [data ? data === null || data === void 0 ? void 0 : data.branch : null],
            // Attribute Type under business detail
            display_name: [data ? data === null || data === void 0 ? void 0 : data.display_name : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            business_type: [data ? (_b = data === null || data === void 0 ? void 0 : data.business_type) === null || _b === void 0 ? void 0 : _b.id : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            // Attribute Nature under business detail
            business_nature: [data ? (_c = data === null || data === void 0 ? void 0 : data.business_nature) === null || _c === void 0 ? void 0 : _c.id : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            contact_person_name: [data ? data === null || data === void 0 ? void 0 : data.contact_person_name : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z \-\']+')]],
            contact_person_phone: [data ? data === null || data === void 0 ? void 0 : data.contact_person_phone : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('([0-9]{8}|[0-9]{10})')]],
            contact_person_email: [data ? data === null || data === void 0 ? void 0 : data.contact_person_email : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$')]],
            employee: [data ? data === null || data === void 0 ? void 0 : data.employee : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            payout: [data ? data === null || data === void 0 ? void 0 : data.payout : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            document_data: this.fb.array([]),
            // documents: [null, [Validators.required]],
            // if m creating master always share the value 1  
            master: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        if (data) {
            this.setFormData(data);
        }
    }
    deleteDocumentByDocumentId(i) {
        var _a, _b, _c, _d, _e, _f, _g;
        let fileName = this.addEditProductForm.get("document_data");
        const master = (_b = (_a = fileName.controls) === null || _a === void 0 ? void 0 : _a[i].value) === null || _b === void 0 ? void 0 : _b.document_master;
        const selectedFile = (_c = fileName.controls) === null || _c === void 0 ? void 0 : _c[i].value;
        if (!((_e = (_d = fileName.controls) === null || _d === void 0 ? void 0 : _d[i].value) === null || _e === void 0 ? void 0 : _e.id)) {
            const document = {
                name: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.label_name,
                pk: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.document_master,
                front_back_flag: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.front_back_flag,
                display_name: null,
                display_name_front: (selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.name) + " Front",
                display_name_back: (selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.name) + " Back",
                isdelete: false,
            };
            if ((document === null || document === void 0 ? void 0 : document.pk) == 3) {
                this.documentArray.push(document);
            }
            this.message.success(((_g = (_f = fileName.controls) === null || _f === void 0 ? void 0 : _f[i].value) === null || _g === void 0 ? void 0 : _g.label_name) + " Document Deleted");
            fileName.removeAt(i);
            this.selectedDocument = null;
        }
        else {
            this.http
                .deleteMasterDocumentByDocumentId(selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.id)
                .subscribe((res) => {
                var _a, _b;
                const document = {
                    name: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.label_name,
                    pk: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.document_master,
                    front_back_flag: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.front_back_flag
                };
                if ((document === null || document === void 0 ? void 0 : document.pk) == 3) {
                    this.documentArray.push(document);
                }
                this.message.success(((_b = (_a = fileName.controls) === null || _a === void 0 ? void 0 : _a[i].value) === null || _b === void 0 ? void 0 : _b.label_name) + " Document Deleted");
                fileName.removeAt(i);
                this.selectedDocument = null;
            });
        }
    }
    getListOfDocumentRequired() {
        this.http.getListOfDocumentRequired().subscribe((res) => {
            var _a;
            const data = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.results;
            data.map((res) => {
                if ((res === null || res === void 0 ? void 0 : res.pk) == 7 || (res === null || res === void 0 ? void 0 : res.pk) == 3) {
                    let otherDoc = {
                        pk: res === null || res === void 0 ? void 0 : res.pk,
                        name: res === null || res === void 0 ? void 0 : res.name,
                        front_back_flag: res === null || res === void 0 ? void 0 : res.front_back_flag,
                    };
                    this.documentArray.push(otherDoc);
                }
            });
            // this.documentArray = res?.data?.results;
        });
    }
    addRule() {
        var _a, _b;
        if (((_a = this.selectedDocument) === null || _a === void 0 ? void 0 : _a.pk) == 3) {
            this.documentFlagArray.push(this.selectedDocument);
        }
        const storeSelectedData = this.selectedDocument;
        if ((_b = this.selectedDocument) === null || _b === void 0 ? void 0 : _b.front_back_flag) {
            let data;
            data = {
                front_back_flag: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.front_back_flag,
                name: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.name,
                display_name: null,
                isdelete: false,
                display_name_front: (storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.name) + " Front",
                display_name_back: (storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.name) + " Back",
                pk: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.pk
            };
            this.addSkills(data);
            // data = {
            //   front_back_flag: storeSelectedData?.front_back_flag,
            //   name: storeSelectedData?.name,
            //   display_name: storeSelectedData?.name + " Back",
            //   isdelete: true,
            //   pk: storeSelectedData?.pk
            // }
            // this.addSkills(data);
        }
        else {
            let data;
            data = {
                front_back_flag: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.front_back_flag,
                name: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.name,
                display_name: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.name,
                display_name_front: null,
                display_name_back: null,
                isdelete: false,
                pk: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.pk
            };
            this.addSkills(data);
        }
        this.isVisible = false;
    }
    get skills() {
        return this.addEditProductForm.get("document_data");
    }
    newSkill(data) {
        // this.selectedDocument = null;
        //   return this.fb.group({
        //     id: [data ? data?.id : null],
        //     document_master: [data?.pk],
        //     label_name: [data?.name],
        //     documents: [data?.documents],
        //     document_name:[data?.document_name],
        //     is_verified:[ data?.is_verified ? data?.is_verified : false],
        //     // isValid: null
        //   })
        this.selectedDocument = null;
        return this.fb.group({
            id: [data ? data === null || data === void 0 ? void 0 : data.id : null],
            front_back_flag: [data ? data === null || data === void 0 ? void 0 : data.front_back_flag : null],
            document_master: [data === null || data === void 0 ? void 0 : data.pk],
            display_name_front: [data === null || data === void 0 ? void 0 : data.display_name_front],
            display_name_back: [data === null || data === void 0 ? void 0 : data.display_name_back],
            display_name: [data === null || data === void 0 ? void 0 : data.display_name],
            isdelete: (data === null || data === void 0 ? void 0 : data.isdelete) ? data === null || data === void 0 ? void 0 : data.isdelete : false,
            label_name: [data === null || data === void 0 ? void 0 : data.name],
            documents: [data === null || data === void 0 ? void 0 : data.documents],
            documents_front: [data === null || data === void 0 ? void 0 : data.documents_front],
            documents_back: [data === null || data === void 0 ? void 0 : data.documents_back],
            document_name: [data === null || data === void 0 ? void 0 : data.document_name],
            document_name_front: [data === null || data === void 0 ? void 0 : data.document_name_front],
            document_name_back: [data === null || data === void 0 ? void 0 : data.document_name_front],
            is_verified: [(data === null || data === void 0 ? void 0 : data.is_verified) ? data === null || data === void 0 ? void 0 : data.is_verified : false],
        });
    }
    get_underwritingArr(form) {
        return form.controls.document_data.controls;
    }
    handleCancel() {
        this.isVisible = false;
        this.pdf_viewer_object_values['boolean'] = false;
        this.pdf_viewer_object_values['url'] = '';
    }
    // this.fb.array([])
    onUpload(e, i, action) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        //   if(action == 'upload'){
        //   console.log(e?.file?.originFileObj)
        //   // this.index = i;
        //   let fileName = this.addEditProductForm.get('document_data') as FormArray;
        //   fileName.controls?.[i].patchValue({document_name: e?.file?.name});
        //   let value = this.addEditProductForm.get('document_data') as FormArray;
        //   value.controls?.[i].patchValue({documents: e?.file?.originFileObj});
        // }
        let fileName = this.addEditProductForm.get("document_data");
        let value = this.addEditProductForm.get("document_data");
        if (action == 'name') {
            (_a = fileName.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({ document_name: (_b = e === null || e === void 0 ? void 0 : e.file) === null || _b === void 0 ? void 0 : _b.name });
            (_c = value.controls) === null || _c === void 0 ? void 0 : _c[i].patchValue({ documents: (_d = e === null || e === void 0 ? void 0 : e.file) === null || _d === void 0 ? void 0 : _d.originFileObj });
        }
        else if (action == 'name_front') {
            (_e = fileName.controls) === null || _e === void 0 ? void 0 : _e[i].patchValue({ document_name_front: (_f = e === null || e === void 0 ? void 0 : e.file) === null || _f === void 0 ? void 0 : _f.name });
            (_g = value.controls) === null || _g === void 0 ? void 0 : _g[i].patchValue({ documents_front: (_h = e === null || e === void 0 ? void 0 : e.file) === null || _h === void 0 ? void 0 : _h.originFileObj });
        }
        else if (action == 'name_back') {
            (_j = fileName.controls) === null || _j === void 0 ? void 0 : _j[i].patchValue({ document_name_back: (_k = e === null || e === void 0 ? void 0 : e.file) === null || _k === void 0 ? void 0 : _k.name });
            (_l = value.controls) === null || _l === void 0 ? void 0 : _l[i].patchValue({ documents_back: (_m = e === null || e === void 0 ? void 0 : e.file) === null || _m === void 0 ? void 0 : _m.originFileObj });
        }
    }
    addSkills(data) {
        this.skills.push(this.newSkill(data));
    }
    removeSkill(i) {
        this.skills.removeAt(i);
    }
    onClickSubmitForm() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
        for (const i in this.addEditProductForm.controls) {
            this.addEditProductForm.controls[i].markAsDirty();
            this.addEditProductForm.controls[i].updateValueAndValidity();
        }
        const saveDoc = [];
        if (!this.addEditProductForm.valid) {
            this.message.error('Mandatory Fields Are missing ', { nzDuration: 5000 });
        }
        var sendDate = this.addEditProductForm.value;
        // for (var i in sendDate.document_data) {
        //     if(!sendDate.document_data[i].document_name && sendDate.document_data[i].label_name){
        //       this.message.error( ' Plz Upload Selected Document ' + ` ${sendDate.document_data[i].label_name}` + ' at index ' + i, { nzDuration: 5000 })
        //       return;
        //       }
        //   }
        for (var i in sendDate.document_data) {
            // !sendDate.document_data[i].document_name &&
            //   sendDate.document_data[i].label_name && !sendDate.document_data[i].isdelete
            if (sendDate.document_data[i].front_back_flag && !sendDate.document_data[i].document_name_front) {
                this.message.error(" Plz Upload Selected Document " +
                    ` ${sendDate.document_data[i].label_name}`, { nzDuration: 5000 });
                return;
            }
            if (!sendDate.document_data[i].front_back_flag &&
                !sendDate.document_data[i].document_name) {
                this.message.error(" Plz Upload Selected Document " +
                    ` ${sendDate.document_data[i].label_name}`, { nzDuration: 5000 });
                return;
            }
        }
        if (this.addEditProductForm.valid) {
            this.apiLoader['formSave'] = true;
            if (!this.isEdit) {
                let data = new FormData();
                var sendDate = this.addEditProductForm.value;
                for (var i in sendDate.document_data) {
                    if (!sendDate.document_data[i].id) {
                        (_a = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _a === void 0 ? true : delete _a.id;
                    }
                    // if(sendDate?.document_data[i]?.documents){
                    //   saveDoc.push(sendDate?.document_data[i]?.documents)
                    //   data.append('documents', sendDate?.document_data[i]?.documents)
                    //   delete sendDate?.document_data[i]?.documents
                    // }
                    if ((_b = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _b === void 0 ? void 0 : _b.front_back_flag) {
                        // saveDoc.push(sendDate?.document_data[i]?.documents)
                        if ((_c = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _c === void 0 ? void 0 : _c.document_name_front) {
                            data.append("documents", (_d = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _d === void 0 ? void 0 : _d.documents_front);
                            (_e = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _e === void 0 ? true : delete _e.documents_front;
                        }
                        if ((_f = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _f === void 0 ? void 0 : _f.document_name_back) {
                            data.append("documents", (_g = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _g === void 0 ? void 0 : _g.documents_back);
                            (_h = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _h === void 0 ? true : delete _h.documents_back;
                        }
                        // data.append("documents", sendDate?.document_data[i]?.documents);
                        // delete sendDate?.document_data[i]?.documents;
                    }
                    if (!((_j = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _j === void 0 ? void 0 : _j.front_back_flag)) {
                        saveDoc.push((_k = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _k === void 0 ? void 0 : _k.documents);
                        data.append("documents", (_l = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _l === void 0 ? void 0 : _l.documents);
                        (_m = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _m === void 0 ? true : delete _m.documents;
                    }
                }
                for (var i in sendDate) {
                    if (i == 'document_data') {
                        data.append(i, JSON.stringify(sendDate[i]));
                    }
                    else {
                        if (sendDate[i]) {
                            data.append(i, sendDate[i]);
                        }
                    }
                }
                const url = this.http.createMasterPartnerForm(data);
                url.subscribe((res) => {
                    var _a;
                    console.log(res);
                    if (res.success) {
                        this.message.success(res === null || res === void 0 ? void 0 : res.message);
                        this.apiLoader['formSave'] = false;
                        this.router.navigate(['masters-partners']);
                    }
                    else {
                        for (var i in saveDoc) {
                            let value = this.addEditProductForm.get("document_data");
                            (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({ documents: saveDoc[i] });
                        }
                        this.message.error(res === null || res === void 0 ? void 0 : res.message);
                        this.apiLoader['formSave'] = false;
                    }
                }, error => {
                    var _a;
                    for (var i in saveDoc) {
                        let value = this.addEditProductForm.get("document_data");
                        (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({ documents: saveDoc[i] });
                    }
                    this.apiLoader['formSave'] = false;
                });
            }
            else {
                let data = new FormData();
                var sendDate = this.addEditProductForm.value;
                for (var i in sendDate.document_data) {
                    if (!sendDate.document_data[i].id) {
                        (_o = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _o === void 0 ? true : delete _o.id;
                    }
                    // if(sendDate.document_data[i].documents?.['uid']){
                    //   data.append('documents', sendDate?.document_data[i]?.documents)  
                    //   delete sendDate?.document_data[i]?.documents
                    // } else {
                    //   delete sendDate?.document_data[i]?.documents
                    // }
                    if ((_p = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _p === void 0 ? void 0 : _p.front_back_flag) {
                        // saveDoc.push(sendDate?.document_data[i]?.documents)
                        if ((_r = (_q = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _q === void 0 ? void 0 : _q.documents_front) === null || _r === void 0 ? void 0 : _r["uid"]) {
                            data.append("documents", (_s = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _s === void 0 ? void 0 : _s.documents_front);
                            (_t = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _t === void 0 ? true : delete _t.documents_front;
                        }
                        else {
                            (_u = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _u === void 0 ? true : delete _u.documents_front;
                        }
                        if ((_w = (_v = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _v === void 0 ? void 0 : _v.documents_back) === null || _w === void 0 ? void 0 : _w["uid"]) {
                            data.append("documents", (_x = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _x === void 0 ? void 0 : _x.documents_back);
                            (_y = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _y === void 0 ? true : delete _y.documents_back;
                        }
                        else {
                            (_z = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _z === void 0 ? true : delete _z.documents_back;
                        }
                    }
                    if (!((_0 = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _0 === void 0 ? void 0 : _0.front_back_flag)) {
                        if ((_2 = (_1 = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _1 === void 0 ? void 0 : _1.documents) === null || _2 === void 0 ? void 0 : _2["uid"]) {
                            data.append("documents", (_3 = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _3 === void 0 ? void 0 : _3.documents);
                            (_4 = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _4 === void 0 ? true : delete _4.documents;
                        }
                        else {
                            (_5 = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _5 === void 0 ? true : delete _5.documents;
                        }
                    }
                }
                for (var i in sendDate) {
                    if (i == 'document_data') {
                        data.append(i, JSON.stringify(sendDate[i]));
                    }
                    else {
                        if (sendDate[i]) {
                            data.append(i, sendDate[i]);
                        }
                    }
                }
                const url = this.http.updateMasterPartnerForm(this.masterPartnerId, data);
                url.subscribe((res) => {
                    if (res.success) {
                        this.message.success(res === null || res === void 0 ? void 0 : res.message);
                        this.apiLoader['formSave'] = false;
                        this.router.navigate(['masters-partners']);
                    }
                    else {
                        this.message.error(res === null || res === void 0 ? void 0 : res.message);
                        this.apiLoader['formSave'] = false;
                    }
                }, err => {
                    this.apiLoader['formSave'] = false;
                });
            }
        }
    }
    onClickSaveExistingForm() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const saveDoc = [];
        saveDoc.push((_a = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _a === void 0 ? void 0 : _a.documents);
        for (const i in this.addEditProductForm.controls) {
            this.addEditProductForm.controls[i].markAsDirty();
            this.addEditProductForm.controls[i].updateValueAndValidity();
        }
        if (!this.addEditProductForm.valid) {
            this.message.error('Mandatory Fields Are missing ', { nzDuration: 5000 });
        }
        var sendDate = this.addEditProductForm.value;
        for (var i in sendDate.document_data) {
            // if(!sendDate.document_data[i].document_name && sendDate.document_data[i].label_name){
            //   this.message.error( ' Plz Upload Selected Document ' + ` ${sendDate.document_data[i].label_name}` + ' at index ' + i, { nzDuration: 5000 })
            //   return;
            //   }
            if (sendDate.document_data[i].front_back_flag && !sendDate.document_data[i].document_name_front) {
                this.message.error(" Plz Upload Selected Document " +
                    ` ${sendDate.document_data[i].label_name}`, { nzDuration: 5000 });
                return;
            }
            if (!sendDate.document_data[i].front_back_flag &&
                !sendDate.document_data[i].document_name) {
                this.message.error(" Plz Upload Selected Document " +
                    ` ${sendDate.document_data[i].label_name}`, { nzDuration: 5000 });
                return;
            }
        }
        if (this.addEditProductForm.valid) {
            this.apiLoader['saveAddNew'] = true;
            let data = new FormData();
            var sendDate = this.addEditProductForm.value;
            for (var i in sendDate.document_data) {
                if (!sendDate.document_data[i].id) {
                    (_b = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _b === void 0 ? true : delete _b.id;
                }
                if (!sendDate.unique_code) {
                    sendDate === null || sendDate === void 0 ? true : delete sendDate.unique_code;
                }
                // if(sendDate?.document_data[i]?.documents){
                //   saveDoc.push(sendDate?.document_data[i]?.documents)
                //   data.append('documents', sendDate?.document_data[i]?.documents)
                //   delete sendDate?.document_data[i]?.documents
                // }
                if ((_c = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _c === void 0 ? void 0 : _c.front_back_flag) {
                    // saveDoc.push(sendDate?.document_data[i]?.documents)
                    if ((_d = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _d === void 0 ? void 0 : _d.document_name_front) {
                        data.append("documents", (_e = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _e === void 0 ? void 0 : _e.documents_front);
                        (_f = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _f === void 0 ? true : delete _f.documents_front;
                    }
                    if ((_g = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _g === void 0 ? void 0 : _g.document_name_back) {
                        data.append("documents", (_h = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _h === void 0 ? void 0 : _h.documents_back);
                        (_j = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _j === void 0 ? true : delete _j.documents_back;
                    }
                    // data.append("documents", sendDate?.document_data[i]?.documents);
                    // delete sendDate?.document_data[i]?.documents;
                }
                if (!((_k = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _k === void 0 ? void 0 : _k.front_back_flag)) {
                    saveDoc.push((_l = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _l === void 0 ? void 0 : _l.documents);
                    data.append("documents", (_m = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _m === void 0 ? void 0 : _m.documents);
                    (_o = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _o === void 0 ? true : delete _o.documents;
                }
            }
            for (var i in sendDate) {
                if (i == 'document_data') {
                    data.append(i, JSON.stringify(sendDate[i]));
                }
                else {
                    if (sendDate[i]) {
                        data.append(i, sendDate[i]);
                    }
                    // data.append(i, sendDate[i])
                }
            }
            const url = this.http.createPartnerForm(data);
            url.subscribe((res) => {
                var _a;
                console.log(res);
                if (res.success) {
                    this.message.success(res === null || res === void 0 ? void 0 : res.message);
                    this.apiLoader['saveAddNew'] = false;
                    let newRouterLink = '/masters-partners/add';
                    this.router.navigate(['/']).then(() => { this.router.navigate([newRouterLink]); });
                }
                else {
                    for (var i in saveDoc) {
                        let value = this.addEditProductForm.get("document_data");
                        (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({ documents: saveDoc[i] });
                    }
                    this.message.error(res === null || res === void 0 ? void 0 : res.message);
                    this.apiLoader['saveAddNew'] = false;
                }
            }, error => {
                var _a;
                for (var i in saveDoc) {
                    let value = this.addEditProductForm.get("document_data");
                    (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({ documents: saveDoc[i] });
                }
                this.apiLoader['saveAddNew'] = false;
            });
        }
    }
    handleChange(e, index) {
        // console.log('in Progress', i);
        console.log(index, 'index');
        this.index = index;
        // console.log(this.addEditProductForm.get('document_data')['controls'][index].controls.document_master.value)
        this.addEditProductForm.get('document_data')['controls'][index].controls.documents.setValue(e.file.originFileObj);
        // console.log(e + '  ' + this.addEditProductForm.controls.document_data['controls'][index].document_master)
    }
    onClickShowUploadedDocument(e, action) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // if (e?.value?.documents?.uid) {
            //   let doc = await getBase64(e?.value?.documents);
            //   const images = [];
            //   const img = {
            //     src: doc,
            //     width: "600px",
            //     height: "400px",
            //     alt: "ng-zorro",
            //   };
            //   images.push(img);
            //   this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
            // } else {
            //   const images = [];
            //   const img = {
            //     src: e?.value?.documents,
            //     width: "600px",
            //     height: "400px",
            //     alt: "ng-zorro",
            //   };
            //   images.push(img);
            //   this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
            // }
            if ((_a = e === null || e === void 0 ? void 0 : e.value) === null || _a === void 0 ? void 0 : _a.id) {
                this.pdf_viewer_object_values['boolean'] = true;
                this.pdf_viewer_object_values['title'] = 'Showing ' + ((_b = e === null || e === void 0 ? void 0 : e.value) === null || _b === void 0 ? void 0 : _b.label_name);
                this.pdf_viewer_object_values['url'] = (_c = e === null || e === void 0 ? void 0 : e.value) === null || _c === void 0 ? void 0 : _c.documents;
                this.sanatizeUrlToSafe = this.sanitized.bypassSecurityTrustResourceUrl(this.pdf_viewer_object_values['url']);
                console.log(e);
            }
            else {
                const images = [];
                if (action == 'documents') {
                    if ((_e = (_d = e === null || e === void 0 ? void 0 : e.value) === null || _d === void 0 ? void 0 : _d.documents) === null || _e === void 0 ? void 0 : _e.uid) {
                        let doc = yield getBase64((_f = e === null || e === void 0 ? void 0 : e.value) === null || _f === void 0 ? void 0 : _f.documents);
                        const img = {
                            src: doc,
                            width: "600px",
                            height: "400px",
                            alt: "ng-zorro",
                        };
                        images.push(img);
                        this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
                    }
                    else {
                        const img = {
                            src: (_g = e === null || e === void 0 ? void 0 : e.value) === null || _g === void 0 ? void 0 : _g.documents,
                            width: "600px",
                            height: "400px",
                            alt: "ng-zorro",
                        };
                        images.push(img);
                        this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
                    }
                }
                else if (action == 'documents_front') {
                    if ((_j = (_h = e === null || e === void 0 ? void 0 : e.value) === null || _h === void 0 ? void 0 : _h.documents_front) === null || _j === void 0 ? void 0 : _j.uid) {
                        let doc = yield getBase64((_k = e === null || e === void 0 ? void 0 : e.value) === null || _k === void 0 ? void 0 : _k.documents_front);
                        // const images = [];
                        const img = {
                            src: doc,
                            width: "600px",
                            height: "400px",
                            alt: "ng-zorro",
                        };
                        images.push(img);
                        this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
                    }
                    else {
                        // const images = [];
                        const img = {
                            src: (_l = e === null || e === void 0 ? void 0 : e.value) === null || _l === void 0 ? void 0 : _l.documents_front,
                            width: "600px",
                            height: "400px",
                            alt: "ng-zorro",
                        };
                        images.push(img);
                        this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
                    }
                }
                else if (action == 'documents_back') {
                    if ((_o = (_m = e === null || e === void 0 ? void 0 : e.value) === null || _m === void 0 ? void 0 : _m.documents_back) === null || _o === void 0 ? void 0 : _o.uid) {
                        let doc = yield getBase64((_p = e === null || e === void 0 ? void 0 : e.value) === null || _p === void 0 ? void 0 : _p.documents_back);
                        // const images = [];
                        const img = {
                            src: doc,
                            width: "600px",
                            height: "400px",
                            alt: "ng-zorro",
                        };
                        images.push(img);
                        this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
                    }
                    else {
                        // const images = [];
                        const img = {
                            src: (_q = e === null || e === void 0 ? void 0 : e.value) === null || _q === void 0 ? void 0 : _q.documents_back,
                            width: "600px",
                            height: "400px",
                            alt: "ng-zorro",
                        };
                        images.push(img);
                        this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
                    }
                }
            }
        });
    }
}
AddEditMastersComponent.ɵfac = function AddEditMastersComponent_Factory(t) { return new (t || AddEditMastersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_7__["NzImageService"])); };
AddEditMastersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddEditMastersComponent, selectors: [["app-add-edit-masters"]], decls: 166, vars: 91, consts: [["nz-form", "", 3, "formGroup"], [1, "row", "border-bottom"], [1, "col-md-12"], ["nzFor", "name", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Master Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "name", "placeholder", "Master Name"], ["nzFor", "address_line_1", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Address!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "address_line_1", "placeholder", "Address Line 1"], ["nzFor", "address_line_2", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Address line 2!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "address_line_2", "placeholder", "Address Line 2"], ["nzFor", "display_name", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add valid Display Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "display_name", "placeholder", "Display Name"], ["nzFor", "city", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid City!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "city", "placeholder", "City", 3, "keypress"], ["nzFor", "state", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please select Valid Sate", 3, "nzSm", "nzXs"], ["formControlName", "state", "nzPlaceHolder", "Select State", "nzShowSearch", "", "nzAllowClear", "", 3, "nzFocus", "nzOnSearch"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzFor", "pincode", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Pincode!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "pincode", "placeholder", "Pincode"], ["nzFor", "phone", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Phone No.!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "phone", "placeholder", "Phone No."], [1, "mt-2"], [1, "col-md-6"], ["nzFor", "business_type", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please select Industry", 3, "nzSm", "nzXs"], ["formControlName", "business_type", "nzPlaceHolder", "Select Industry", "nzShowSearch", "", "nzAllowClear", "", 3, "nzFocus", "nzOnSearch"], ["nzFor", "business_nature", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please select Nature", 3, "nzSm", "nzXs"], ["formControlName", "business_nature", "nzPlaceHolder", "Select Nature", "nzShowSearch", "", "nzAllowClear", "", 3, "nzDropdownRender", "nzFocus", "nzOnSearch"], ["renderTemplate", ""], ["nzFor", "contact_person_name", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid  Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "contact_person_name", "placeholder", "Person Name", 3, "keypress"], ["nzFor", "contact_person_phone", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Phone No !", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "contact_person_phone", "placeholder", "person Phone No."], ["nzFor", "contact_person_email", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Email!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "contact_person_email", "placeholder", "Person Email", 2, "text-transform", "lowercase"], [1, "col-12"], ["nzFor", "bank_name", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Bank Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "bank_name", "placeholder", "Bank Name", 3, "keypress"], ["nzFor", "account_no", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Account No.!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "account_no", "placeholder", "Account No."], ["nzFor", "ifsc", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid IFSC!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "ifsc", "placeholder", "IFSC"], ["nzFor", "branch", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Branch!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "branch", "placeholder", "Branch", 3, "keypress"], ["formArrayName", "document_data", 4, "ngFor", "ngForOf"], [1, "row", "no-gutters"], [1, "col-12", "d-flex", "justify-content-between"], ["nz-button", "", "nzType", "link", 1, "", 3, "click"], [1, "row", "border-top", "mt-2"], [1, "col-md-12", "mt-4"], ["nzFor", "employee", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please select Employee!", 3, "nzSm", "nzXs"], ["formControlName", "employee"], ["nz-radio", "", "nzValue", "yes"], ["nz-radio", "", "nzValue", "no"], [1, "row", "my-4"], ["nzFor", "payout", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please select Payout!", 3, "nzSm", "nzXs"], ["formControlName", "payout"], [1, "row", "my-3", "justify-content-between"], [1, "col-3"], ["nzType", "primary", "nz-button", "", "type", "submit", 3, "nzLoading", "disabled", "click", 4, "ngIf"], [1, "col-3", "text-right"], ["type", "submit", "nz-button", "", "nzType", "primary", 3, "nzLoading", "disabled", "click"], ["nzTitle", "Add New Document", 3, "nzVisible", "nzOkDisabled", "nzWidth", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nzHeight", "50vw", "nzWidth", "60vw", "nzKeyboard", "true", 3, "nzVisible", "nzTitle", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalFooter", ""], [3, "nzValue", "nzLabel"], [1, "mt-0", "mb-2"], [1, "row", 2, "align-items", "center"], [1, "col-7", "ml-2"], ["type", "text", "nz-input", ""], ["inputElement", ""], [1, "col", 2, "text-align", "center"], ["type", "submit", "nz-button", "", "nzType", "primary", 1, "mt-2", 3, "nzLoading", "disabled", "click"], ["formArrayName", "document_data"], [1, "col-md-12", 3, "formGroupName"], [1, "d-flex", "flex-row", "bd-highlight", "mb-3"], [1, "px-2", 2, "min-width", "25%"], ["nzFor", "documents", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzErrorTip"], [1, "d-flex"], ["p", "", 3, "nzMultiple", "nzAccept", "nzCustomRequest", "nzChange"], ["nz-button", "", "type", "button"], ["nz-icon", "", "nzType", "upload"], [1, "px-2"], ["formControlName", "is_verified", "nz-checkbox", "", 1, "ml-3", "align-self-center", 3, "nzDisabled"], ["class", "mx-3", "nz-icon", "", "nzType", "delete", "nzTheme", "outline", "style", "font-size: 1rem; cursor: pointer; color: red;", 3, "click", 4, "ngIf"], ["class", " text-primary", "nz-icon", "", "nzType", "eye", "nzTheme", "outline", "style", "font-size: 1rem; cursor: pointer;", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline", 1, "mx-3", 2, "font-size", "1rem", "cursor", "pointer", "color", "red", 3, "click"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline", 1, "text-primary", 2, "font-size", "1rem", "cursor", "pointer", 3, "click"], ["nzType", "primary", "nz-button", "", "type", "submit", 3, "nzLoading", "disabled", "click"], ["nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzPlaceHolder", "Select Document", 1, "ml-4", 2, "min-width", "13rem", 3, "ngModel", "ngModelChange"], [3, "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngIf"], [1, "pdf_viewer_container"], ["width", "100%", 2, "height", "35rem", 3, "src"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function AddEditMastersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Master\u2019s Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-form-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Address Line 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-form-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Address line 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-form-control", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "nz-form-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Display Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "nz-form-control", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "nz-form-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nz-form-control", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditMastersComponent_Template_input_keypress_33_listener($event) { return ctx.omit_special_char($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "nz-form-label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "nz-form-control", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "nz-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzFocus", function AddEditMastersComponent_Template_nz_select_nzFocus_39_listener() { return ctx.getListOfStates(); })("nzOnSearch", function AddEditMastersComponent_Template_nz_select_nzOnSearch_39_listener($event) { return ctx.onSearchGetList($event, "state"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, AddEditMastersComponent_nz_option_40_Template, 1, 2, "nz-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "nz-form-label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Pin Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "nz-form-control", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "nz-form-label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Phone No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "nz-form-control", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Business Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "nz-form-label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "nz-form-control", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "nz-select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzFocus", function AddEditMastersComponent_Template_nz_select_nzFocus_62_listener() { return ctx.getListOfBusinessType(); })("nzOnSearch", function AddEditMastersComponent_Template_nz_select_nzOnSearch_62_listener($event) { return ctx.onSearchGetList($event, "state"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, AddEditMastersComponent_nz_option_63_Template, 1, 2, "nz-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "nz-form-label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Nature");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "nz-form-control", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "nz-select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzFocus", function AddEditMastersComponent_Template_nz_select_nzFocus_69_listener() { return ctx.getListOfBusinessNature(); })("nzOnSearch", function AddEditMastersComponent_Template_nz_select_nzOnSearch_69_listener($event) { return ctx.onSearchGetList($event, "state"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, AddEditMastersComponent_nz_option_70_Template, 1, 2, "nz-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, AddEditMastersComponent_ng_template_71_Template, 8, 2, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " Contact Personal Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "nz-form-label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "nz-form-control", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditMastersComponent_Template_input_keypress_82_listener($event) { return ctx.omit_special_char($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "nz-form-label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Phone No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "nz-form-control", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "nz-form-label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Email Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "nz-form-control", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, " Banking Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "nz-form-label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Bank Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "nz-form-control", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditMastersComponent_Template_input_keypress_105_listener($event) { return ctx.omit_special_char($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "nz-form-label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "A/c No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "nz-form-control", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "nz-form-label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "IFSC Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "nz-form-control", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "nz-form-label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "nz-form-control", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditMastersComponent_Template_input_keypress_123_listener($event) { return ctx.omit_special_char($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, " KYC Documents ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](127, AddEditMastersComponent_ng_container_127_Template, 20, 14, "ng-container", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMastersComponent_Template_button_click_130_listener($event) { return ctx.onClickOpenPopUp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "+Add Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "nz-form-label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "nz-form-control", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "nz-radio-group", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "nz-form-label", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Payout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "nz-form-control", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "nz-radio-group", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](156, AddEditMastersComponent_button_156_Template, 2, 2, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMastersComponent_Template_button_click_158_listener() { return ctx.onClickSubmitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "nz-modal", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function AddEditMastersComponent_Template_nz_modal_nzVisibleChange_160_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function AddEditMastersComponent_Template_nz_modal_nzOnCancel_160_listener() { return ctx.handleCancel(); })("nzOnOk", function AddEditMastersComponent_Template_nz_modal_nzOnOk_160_listener() { return ctx.addRule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](161, AddEditMastersComponent_ng_container_161_Template, 5, 4, "ng-container", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "nz-modal", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function AddEditMastersComponent_Template_nz_modal_nzVisibleChange_162_listener($event) { return (ctx.pdf_viewer_object_values["boolean"] = $event); })("nzOnCancel", function AddEditMastersComponent_Template_nz_modal_nzOnCancel_162_listener() { return ctx.handleCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](163, AddEditMastersComponent_ng_container_163_Template, 3, 1, "ng-container", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](164, AddEditMastersComponent_ng_template_164_Template, 2, 0, "ng-template", null, 82, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](72);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](165);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addEditProductForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stateArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.businessTypeArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDropdownRender", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.businessNatureArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.get_underwritingArr(ctx.addEditProductForm));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx.apiLoader["formSave"])("disabled", ctx.apiLoader["saveAddNew"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzOkDisabled", !ctx.selectedDocument)("nzWidth", "580px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", ctx.pdf_viewer_object_values["boolean"])("nzTitle", ctx.pdf_viewer_object_values["title"])("nzFooter", _r9);
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__["NzCardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__["NzRadioGroupComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__["NzRadioComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__["NzWaveDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__["NzModalContentDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzOptionComponent"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__["NzDividerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_20__["NzUploadComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__["NzIconDirective"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_22__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["[_nghost-%COMP%]     .ant-upload-list-text-container{\ndisplay: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LW1hc3RlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0Esd0JBQXdCO0FBQ3hCIiwiZmlsZSI6ImFkZC1lZGl0LW1hc3RlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogbmctdG5zLWMzNzgtNCBhbnQtdXBsb2FkLWxpc3QtdGV4dC1jb250YWluZXIgbmctc3Rhci1pbnNlcnRlZCAqL1xuOmhvc3QgOjpuZy1kZWVwIC5hbnQtdXBsb2FkLWxpc3QtdGV4dC1jb250YWluZXJ7XG5kaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddEditMastersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-add-edit-masters",
                templateUrl: "./add-edit-masters.component.html",
                styleUrls: ["./add-edit-masters.component.css"],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }, { type: ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_7__["NzImageService"] }]; }, null); })();


/***/ }),

/***/ "x2FM":
/*!*******************************************************************!*\
  !*** ./src/app/users/masters-partners/masters-partners.module.ts ***!
  \*******************************************************************/
/*! exports provided: MastersPartnersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastersPartnersModule", function() { return MastersPartnersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _masters_partners_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./masters-partners-routing.module */ "JZK+");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var _add_edit_masters_add_edit_masters_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-edit-masters/add-edit-masters.component */ "Sv+W");
/* harmony import */ var _master_partners_list_master_partners_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./master-partners-list/master-partners-list.component */ "/I8L");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "KupA");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-permissions */ "qSrz");


























class MastersPartnersModule {
}
MastersPartnersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MastersPartnersModule });
MastersPartnersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MastersPartnersModule_Factory(t) { return new (t || MastersPartnersModule)(); }, imports: [[
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__["NzDropDownModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _masters_partners_routing_module__WEBPACK_IMPORTED_MODULE_2__["MastersPartnersRoutingModule"],
            ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__["NzRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"],
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTableModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzSelectModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"],
            ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_11__["NzTagModule"],
            ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__["NzPageHeaderModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__["NzFormModule"],
            ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__["NzDividerModule"],
            ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__["NzUploadModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__["NzModalModule"],
            ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__["NzCheckboxModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"],
            ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__["NzPopconfirmModule"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_23__["NgxPermissionsModule"].forChild()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MastersPartnersModule, { declarations: [_add_edit_masters_add_edit_masters_component__WEBPACK_IMPORTED_MODULE_12__["AddEditMastersComponent"], _master_partners_list_master_partners_list_component__WEBPACK_IMPORTED_MODULE_13__["MasterPartnersListComponent"]], imports: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__["NzDropDownModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _masters_partners_routing_module__WEBPACK_IMPORTED_MODULE_2__["MastersPartnersRoutingModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__["NzRadioModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTableModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzSelectModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_11__["NzTagModule"],
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__["NzPageHeaderModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__["NzFormModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__["NzDividerModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__["NzUploadModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__["NzModalModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__["NzCheckboxModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"],
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__["NzPopconfirmModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_23__["NgxPermissionsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MastersPartnersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_add_edit_masters_add_edit_masters_component__WEBPACK_IMPORTED_MODULE_12__["AddEditMastersComponent"], _master_partners_list_master_partners_list_component__WEBPACK_IMPORTED_MODULE_13__["MasterPartnersListComponent"]],
                imports: [
                    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__["NzDropDownModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _masters_partners_routing_module__WEBPACK_IMPORTED_MODULE_2__["MastersPartnersRoutingModule"],
                    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__["NzRadioModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"],
                    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTableModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"],
                    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzSelectModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"],
                    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_11__["NzTagModule"],
                    ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__["NzPageHeaderModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__["NzFormModule"],
                    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__["NzDividerModule"],
                    ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__["NzUploadModule"],
                    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__["NzModalModule"],
                    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__["NzCheckboxModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"],
                    ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__["NzPopconfirmModule"],
                    ngx_permissions__WEBPACK_IMPORTED_MODULE_23__["NgxPermissionsModule"].forChild()
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=users-masters-partners-masters-partners-module-es2015.js.map