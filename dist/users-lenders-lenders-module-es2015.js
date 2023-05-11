(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-lenders-lenders-module"],{

/***/ "YN4/":
/*!*************************************************!*\
  !*** ./src/app/users/lenders/lenders.module.ts ***!
  \*************************************************/
/*! exports provided: LendersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LendersModule", function() { return LendersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _lenders_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lenders-routing.module */ "zZIQ");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var _add_edit_lenders_add_edit_lenders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-edit-lenders/add-edit-lenders.component */ "hK0q");
/* harmony import */ var _lenders_list_lenders_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lenders-list/lenders-list.component */ "ZqNU");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "KupA");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-permissions */ "qSrz");


























class LendersModule {
}
LendersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LendersModule });
LendersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LendersModule_Factory(t) { return new (t || LendersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _lenders_routing_module__WEBPACK_IMPORTED_MODULE_2__["LendersRoutingModule"],
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
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__["NzDropDownModule"],
            ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__["NzPageHeaderModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__["NzFormModule"],
            ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_18__["NzDividerModule"],
            ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_19__["NzUploadModule"],
            ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__["NzCheckboxModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"],
            ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__["NzPopconfirmModule"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_23__["NgxPermissionsModule"].forChild()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LendersModule, { declarations: [_add_edit_lenders_add_edit_lenders_component__WEBPACK_IMPORTED_MODULE_12__["AddEditLendersComponent"], _lenders_list_lenders_list_component__WEBPACK_IMPORTED_MODULE_13__["LendersListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _lenders_routing_module__WEBPACK_IMPORTED_MODULE_2__["LendersRoutingModule"],
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
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__["NzDropDownModule"],
        ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__["NzPageHeaderModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__["NzFormModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_18__["NzDividerModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_19__["NzUploadModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__["NzCheckboxModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"],
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__["NzPopconfirmModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_23__["NgxPermissionsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LendersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_add_edit_lenders_add_edit_lenders_component__WEBPACK_IMPORTED_MODULE_12__["AddEditLendersComponent"], _lenders_list_lenders_list_component__WEBPACK_IMPORTED_MODULE_13__["LendersListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _lenders_routing_module__WEBPACK_IMPORTED_MODULE_2__["LendersRoutingModule"],
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
                    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__["NzDropDownModule"],
                    ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__["NzPageHeaderModule"],
                    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__["NzFormModule"],
                    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_18__["NzDividerModule"],
                    ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_19__["NzUploadModule"],
                    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__["NzCheckboxModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"],
                    ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__["NzPopconfirmModule"],
                    ngx_permissions__WEBPACK_IMPORTED_MODULE_23__["NgxPermissionsModule"].forChild()
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZqNU":
/*!**********************************************************************!*\
  !*** ./src/app/users/lenders/lenders-list/lenders-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: LendersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LendersListComponent", function() { return LendersListComponent; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/message */ "PScX");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-permissions */ "qSrz");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/page-header */ "jPNr");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "KupA");
/* harmony import */ var _shared_template_double_confirmation_popup_double_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/template/double-confirmation-popup/double-confirmation-popup.component */ "thbs");
/* harmony import */ var _shared_template_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/template/change-password/change-password.component */ "Kz7f");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");






























function LendersListComponent_nz_radio_group_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-radio-group", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LendersListComponent_nz_radio_group_3_Template_nz_radio_group_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.selectedTab = $event; })("ngModelChange", function LendersListComponent_nz_radio_group_3_Template_nz_radio_group_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.onClickChangeTab($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.selectedTab);
} }
const _c0 = function () { return ["/lenders/add"]; };
function LendersListComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "+ Add Lender/NBFC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
function LendersListComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LendersListComponent_ng_template_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.getResultBasedOnSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzExpandChange", function LendersListComponent_ng_container_42_td_2_Template_td_nzExpandChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const data_r32 = ctx_r53.$implicit; const i_r33 = ctx_r53.index; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r52.onExpandChange(data_r32.id, $event, i_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const data_r32 = ctx_r55.$implicit;
    const i_r33 = ctx_r55.index;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzExpand", ctx_r34.expandSet.has(data_r32.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r33 + 1, "");
} }
function LendersListComponent_ng_container_42_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzExpandChange", function LendersListComponent_ng_container_42_td_3_Template_td_nzExpandChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const data_r32 = ctx_r57.$implicit; const i_r33 = ctx_r57.index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r56.onExpandChange(data_r32.id, $event, i_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const data_r32 = ctx_r59.$implicit;
    const i_r33 = ctx_r59.index;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzExpand", ctx_r35.expandSet.has(data_r32.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r35.page - 1) * ctx_r35.globalPageSize + (i_r33 + 1), "");
} }
function LendersListComponent_ng_container_42_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["../lenders/edit"]; };
const _c2 = function (a0) { return { id: a0 }; };
function LendersListComponent_ng_container_42_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c2, data_r32.id));
} }
function LendersListComponent_ng_container_42_ng_container_26_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LendersListComponent_ng_container_42_ng_container_26_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const data_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r62.deleteUserByUserId(data_r32 == null ? null : data_r32.id, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c3 = function () { return ["toggle_lender"]; };
function LendersListComponent_ng_container_42_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LendersListComponent_ng_container_42_ng_container_26_li_1_Template, 3, 0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c3));
} }
function LendersListComponent_ng_container_42_ng_container_27_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LendersListComponent_ng_container_42_ng_container_27_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); const data_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r66.deleteUserByUserId(data_r32 == null ? null : data_r32.id, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LendersListComponent_ng_container_42_ng_container_27_li_1_Template, 3, 0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c3));
} }
function LendersListComponent_ng_container_42_li_28_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LendersListComponent_ng_container_42_li_28_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r71); const data_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r69.storeSelectedId(data_r32 == null ? null : data_r32.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-upload", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Upload Agreement ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzMultiple", false)("nzAccept", ".xls, .xlsx, .pdf")("nzBeforeUpload", ctx_r44.beforeUpload);
} }
function LendersListComponent_ng_container_42_li_29_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LendersListComponent_ng_container_42_li_29_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); const data_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r72.storeSelectedId(data_r32 == null ? null : data_r32.id, "get"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Show Agreement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_div_72_div_1_div_17_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LendersListComponent_ng_container_42_div_72_div_1_div_17_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84); const item_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r82.onClickGetPassword("reset", item_r76); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Reset Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_div_72_div_1_div_17_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LendersListComponent_ng_container_42_div_72_div_1_div_17_li_7_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87); const item_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r85.onClickGetPassword("show", item_r76); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Show Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c4 = function () { return ["reset_password_lender"]; };
const _c5 = function () { return ["show_password_lender"]; };
function LendersListComponent_ng_container_42_div_72_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LendersListComponent_ng_container_42_div_72_div_1_div_17_li_6_Template, 3, 0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LendersListComponent_ng_container_42_div_72_div_1_div_17_li_7_Template, 3, 0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzClickHide", false)("nzTrigger", "click")("nzPlacement", "bottomRight")("nzDropdownMenu", _r79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c5));
} }
const _c6 = function () { return ["reset_password_lender", "show_password_lender"]; };
function LendersListComponent_ng_container_42_div_72_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Sr.No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LendersListComponent_ng_container_42_div_72_div_1_div_17_Template, 8, 8, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r76 = ctx.$implicit;
    const i_r77 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r77 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r76 == null ? null : item_r76.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c6));
} }
function LendersListComponent_ng_container_42_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LendersListComponent_ng_container_42_div_72_div_1_Template, 18, 4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.nbfc_users_list);
} }
function LendersListComponent_ng_container_42_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " No Admin Detail's to show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Submitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " & \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Document Not Submitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Verified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_ng_container_8_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnConfirm", function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_ng_container_8_span_1_Template_a_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r108); const data_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit; const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r106.onClickVerifyDoc(data_r92 == null ? null : data_r92.id); })("nzOnCancel", function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_ng_container_8_span_1_Template_a_nzOnCancel_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r108); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](7); return ctx_r109.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Plz Click to verify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_ng_container_8_span_1_Template, 3, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r92 == null ? null : data_r92.is_verified) && (data_r92 == null ? null : data_r92.document_file_front));
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_ng_container_10_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_ng_container_10_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r114); const data_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit; const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r112.onClickDownloadSelectedDocument(data_r92, "front"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_ng_container_10_i_1_Template, 1, 0, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r92 == null ? null : data_r92.document_file_front);
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_ng_container_11_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_ng_container_11_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r119); const data_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit; const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r117.storeSelectedId(data_r92, "submitted", "front"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_ng_container_11_i_1_Template, 1, 0, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r92 == null ? null : data_r92.document_file_front);
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Submitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Document Not Submitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_i_19_Template(rf, ctx) { if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_i_19_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r123); const data_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r121.onClickDownloadSelectedDocument(data_r92, "back"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_i_20_Template(rf, ctx) { if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_i_20_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r126); const data_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r124.storeSelectedId(data_r92, "submitted", "back"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c7 = function () { return ["verify_document_lender"]; };
const _c8 = function () { return ["download_document"]; };
const _c9 = function () { return ["view_document"]; };
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_span_5_Template, 4, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_span_6_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_span_7_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_ng_container_8_Template, 2, 1, "ng-container", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_ng_container_10_Template, 2, 1, "ng-container", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_ng_container_11_Template, 2, 1, "ng-container", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_span_16_Template, 3, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_span_17_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_i_19_Template, 1, 0, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_i_20_Template, 1, 0, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r92 == null ? null : data_r92.document_master == null ? null : data_r92.document_master.name) + " Front", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r92 == null ? null : data_r92.document_file_front);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r92 == null ? null : data_r92.document_file_front));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r92 == null ? null : data_r92.is_verified);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r92 == null ? null : data_r92.document_master == null ? null : data_r92.document_master.name) + " Back", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r92 == null ? null : data_r92.document_file_back);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r92 == null ? null : data_r92.document_file_back));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r92 == null ? null : data_r92.document_file_back);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r92 == null ? null : data_r92.document_file_back);
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Submitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " & \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_2_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Document Not Submitted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Verified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_2_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnConfirm", function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_2_span_8_Template_a_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); const data_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r134.onClickVerifyDoc(data_r92 == null ? null : data_r92.id); })("nzOnCancel", function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_2_span_8_Template_a_nzOnCancel_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136); const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](6); return ctx_r137.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Plz Click to verify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_2_i_10_Template(rf, ctx) { if (rf & 1) {
    const _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_2_i_10_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r140); const data_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r138.onClickDownloadSelectedDocument(data_r92, "single"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_2_i_11_Template(rf, ctx) { if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_2_i_11_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r143); const data_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r141.storeSelectedId(data_r92, "submitted", "single"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_2_span_5_Template, 4, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_2_span_6_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_2_span_7_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_2_span_8_Template, 3, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_2_i_10_Template, 1, 0, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_2_i_11_Template, 1, 0, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r92 == null ? null : data_r92.document_master == null ? null : data_r92.document_master.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r92 == null ? null : data_r92.document_file);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r92 == null ? null : data_r92.document_file));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r92 == null ? null : data_r92.is_verified);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r92 == null ? null : data_r92.is_verified) && (data_r92 == null ? null : data_r92.document_file));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r92 == null ? null : data_r92.document_file);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r92 == null ? null : data_r92.document_file);
} }
function LendersListComponent_ng_container_42_div_102_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_1_Template, 21, 15, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LendersListComponent_ng_container_42_div_102_div_3_div_1_div_2_Template, 12, 7, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r92 == null ? null : data_r92.document_master == null ? null : data_r92.document_master.require_front_back);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r92 == null ? null : data_r92.document_master == null ? null : data_r92.document_master.require_front_back));
} }
function LendersListComponent_ng_container_42_div_102_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LendersListComponent_ng_container_42_div_102_div_3_div_1_Template, 3, 2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.documents);
} }
function LendersListComponent_ng_container_42_div_102_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " No Documents To show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_div_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nz-page-header", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-card", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LendersListComponent_ng_container_42_div_102_div_3_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LendersListComponent_ng_container_42_div_102_div_4_Template, 4, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r48.storeDetailId == data_r32.id ? ctx_r48._apiLoader["detailList"] : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.documents == null ? null : data_r32.expandSet.documents.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.documents == null ? null : data_r32.expandSet.documents.length) <= 0);
} }
function LendersListComponent_ng_container_42_div_103_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " ROI Utilised Fund ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " ROI Unutilised Fund ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Created At ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r148 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r148 == null ? null : data_r148.roi_utilized_fund) ? data_r148 == null ? null : data_r148.roi_utilized_fund : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r148 == null ? null : data_r148.roi_unutilized_fund) ? data_r148 == null ? null : data_r148.roi_unutilized_fund : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r148 == null ? null : data_r148.created_at) ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 3, data_r148 == null ? null : data_r148.created_at, "dd MMM yyyy, HH:mm:ss a") : " -- ", " ");
} }
function LendersListComponent_ng_container_42_div_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nz-page-header", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-card", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LendersListComponent_ng_container_42_div_103_div_3_Template, 20, 6, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r49.storeDetailId == data_r32.id ? ctx_r49._apiLoader["detailList"] : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.all_previous_roi_mappings);
} }
function LendersListComponent_ng_container_42_span_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " % ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_42_span_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u20B9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c10 = function () { return ["edit_lender"]; };
const _c11 = function () { return ["upload_agreement_lender"]; };
const _c12 = function () { return ["show_agreement_lender"]; };
const _c13 = function () { return ["view_document_lender"]; };
function LendersListComponent_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LendersListComponent_ng_container_42_td_2_Template, 2, 2, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LendersListComponent_ng_container_42_td_3_Template, 2, 2, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LendersListComponent_ng_container_42_td_15_Template, 3, 0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LendersListComponent_ng_container_42_td_16_Template, 3, 0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LendersListComponent_ng_container_42_td_17_Template, 3, 0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LendersListComponent_ng_container_42_td_18_Template, 3, 0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nz-dropdown-menu", null, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ul", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, LendersListComponent_ng_container_42_li_25_Template, 3, 5, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, LendersListComponent_ng_container_42_ng_container_26_Template, 2, 2, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, LendersListComponent_ng_container_42_ng_container_27_Template, 2, 2, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, LendersListComponent_ng_container_42_li_28_Template, 3, 3, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, LendersListComponent_ng_container_42_li_29_Template, 3, 0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tr", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "nz-page-header", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "nz-card", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " NBFC's Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Phone No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "nz-page-header", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "nz-card", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Phone No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " Email-Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "nz-page-header", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "nz-card", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, LendersListComponent_ng_container_42_div_72_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, LendersListComponent_ng_container_42_div_73_Template, 4, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "nz-page-header", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "nz-card", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " Bank Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " IFSC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, " A/c No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, " Branch. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, LendersListComponent_ng_container_42_div_102_Template, 5, 4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, LendersListComponent_ng_container_42_div_103_Template, 4, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "nz-page-header", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "nz-card", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, " Total Commitment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, " FLDG ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](120, LendersListComponent_ng_container_42_span_120_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](121, LendersListComponent_ng_container_42_span_121_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r32 = ctx.$implicit;
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](44);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](46);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](66);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](48);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.page === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.page > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r32 == null ? null : data_r32.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 48, data_r32 == null ? null : data_r32.created_at, "dd MMM yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r32 == null ? null : data_r32.nbfc_line_given);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r32 == null ? null : data_r32.amount_received);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r32 == null ? null : data_r32.wallet_balance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r32 == null ? null : data_r32.registered);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r32 == null ? null : data_r32.registered));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r32 == null ? null : data_r32.is_deleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r32 == null ? null : data_r32.is_deleted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzClickHide", false)("nzTrigger", "click")("nzPlacement", "bottomRight")("nzDropdownMenu", _r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](51, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !data_r32.is_deleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r32.is_deleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](52, _c11));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](53, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzExpand", ctx_r4.expandSet.has(data_r32.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r4.storeDetailId == data_r32.id ? ctx_r4._apiLoader["detailList"] : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.address_line_1) || (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.address_line_2) ? (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.address_line_1) + " " + (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.address_line_2) : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.phone) ? data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.phone : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r4.storeDetailId == data_r32.id ? ctx_r4._apiLoader["detailList"] : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.nbfc_user_name) ? data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.nbfc_user_name : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.nbfc_user_mobile) ? data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.nbfc_user_mobile : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.nbfc_user_email) ? data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.nbfc_user_email : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r4.storeDetailId == data_r32.id ? ctx_r4._apiLoader["detailList"] : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.nbfc_users_list == null ? null : data_r32.expandSet.nbfc_users_list.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.nbfc_users_list == null ? null : data_r32.expandSet.nbfc_users_list.length) <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r4.storeDetailId == data_r32.id ? ctx_r4._apiLoader["detailList"] : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.bank_name) ? data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.bank_name : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.ifsc) ? data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.ifsc : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.account_no) ? data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.account_no : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.branch) ? data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.branch : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](54, _c13));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.all_previous_roi_mappings.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r4.storeDetailId == data_r32.id ? ctx_r4._apiLoader["detailList"] : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.total_commitment) ? data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.total_commitment : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.fldg) ? data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.fldg : " -- ", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.fldg_calculation_type) != "Flat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (data_r32 == null ? null : data_r32.expandSet == null ? null : data_r32.expandSet.fldg_calculation_type) == "Flat");
} }
function LendersListComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Basic Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Contact Personal Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Banking Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "KYC Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Other Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "ROI Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_container_56_Template(rf, ctx) { if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-double-confirmation-popup", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onOkCall", function LendersListComponent_ng_container_56_Template_app_double_confirmation_popup_onOkCall_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r151); const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r150.confirmationTrigger(); })("onCencelCall", function LendersListComponent_ng_container_56_Template_app_double_confirmation_popup_onCencelCall_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r151); const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r152.isDelete = false; return ctx_r152.selectedUserId = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r17.statusOfSelectedLender ? "This action will Activate this account" : "This action will Deactivate this account")("subTitle", !ctx_r17.statusOfSelectedLender ? "if  required, you can activate this account after 15 days." : "if required, you can Deactivate this account after 15 days.")("alertWarning", ctx_r17.statusOfSelectedLender ? "Are your sure ?" : "Are your sure ?")("icon", "assets/images/activate.png")("cancelBtnTxt", "Cancel")("submitBtnTxt", "OK");
} }
function LendersListComponent_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-change-password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " [userData]=\"selectedUserData\" (onOkCall)=\"onClickChangePassword()\" (onCencelCall)=\"isDelete = false; toggleChangePassword = false; selectedUserId = ''\" [cancelBtnTxt]=\"'Cancel'\" [submitBtnTxt]=\"'OK'\"> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function LendersListComponent_ng_container_60_Template(rf, ctx) { if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-change-password", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onOkCall", function LendersListComponent_ng_container_60_Template_app_change_password_onOkCall_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r154); const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r153.onClickChangePassword($event); })("onCencelCall", function LendersListComponent_ng_container_60_Template_app_change_password_onCencelCall_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r154); const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r155.toggleChangePassword = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("userData", ctx_r19.selectedUserData)("cancelBtnTxt", "Cancel")("submitBtnTxt", "Update");
} }
function LendersListComponent_ng_container_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "embed", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r20.sanatizeUrlToSafe(ctx_r20.pdf_viewer_object_values["url"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
} }
function LendersListComponent_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    const _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LendersListComponent_ng_template_63_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r157); const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r156.handleCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Lender's Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LendersListComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r25.passwordForAdmin["password"] == null ? null : ctx_r25.passwordForAdmin["password"].password, " ");
} }
function LendersListComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-control", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-form-label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-form-control", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nz-form-label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Send Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-form-control", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r26.resetPasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 20);
} }
const _c14 = function () { return ["add_lender"]; };
const _c15 = function () { return [100, 200, 300, 400, 500, 600, 750, 1000]; };
const _c16 = function () { return { x: "1200px", y: "" }; };
class LendersListComponent {
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
        this.pdf_viewer_object_values = {
            'boolean': false,
            'url': '',
            'title': ''
        };
        this.expandSet = new Set();
        this.masterPartnerDetailList = [];
        this.isDelete = false;
        this.toggleChangePassword = false;
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
        if (checked) {
            this.selectedId = id;
            this.selectedIndexOfExpand = i;
            this.getNBFCDetail(this.storeDetailId = id, i);
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
        this.selectedTab = 'all';
        this.createResetPasswordForm();
        this.page = 1;
        this.getNBFCList();
    }
    createResetPasswordForm() {
        this.resetPasswordForm = this.fb.group({
            nbfc_user_id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            new_password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            retype_password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            send_email: [false],
        });
    }
    onClickChangeTab(e) {
        this.selectedTab = e;
        this.getNBFCList();
    }
    getResultBasedOnSearch() {
        this.page = 1;
        this.getNBFCList();
    }
    onClickGetPassword(action, data) {
        this.selectedUserId = data === null || data === void 0 ? void 0 : data.id;
        if (action == 'show') {
            this.passwordForAdmin['apiLoader'] = true;
            this.passwordForAdmin['isVisibleModal'] = true;
            this.passwordForAdmin['toggleShoePasswordField'] = true;
            this.http.showPasswordOfLenderAdmin(data === null || data === void 0 ? void 0 : data.id).subscribe((res) => {
                console.log(res);
                this.passwordForAdmin['apiLoader'] = false;
                this.passwordForAdmin['password'] = res === null || res === void 0 ? void 0 : res.data;
            });
        }
        else {
            this.passwordForAdmin['isVisibleModal'] = true;
            this.passwordForAdmin['toggleShoePasswordField'] = false;
            this.resetPasswordForm.patchValue({
                'nbfc_user_id': data === null || data === void 0 ? void 0 : data.id
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
            this.http.resetPasswordForLenderAdmin(data).subscribe((res) => {
                console.log(res);
                if (res === null || res === void 0 ? void 0 : res.success) {
                    this.message.success(res === null || res === void 0 ? void 0 : res.message);
                    this.passwordForAdmin['apiLoaderOnClick'] = false;
                    this.passwordForAdmin['isVisibleModal'] = false;
                    this.resetPasswordForm.reset();
                }
                else {
                    this.message.error(res === null || res === void 0 ? void 0 : res.message);
                    this.passwordForAdmin['apiLoaderOnClick'] = false;
                }
            });
        }
    }
    getNBFCDetail(id, i) {
        this._apiLoader["detailList"] = true;
        this.http.getNBFCDetail(id).subscribe((res) => {
            // this.masterPartnerDetailList = res?.data;
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
        this.getNBFCList();
    }
    getNBFCList(e) {
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
            'status_type': this.selectedTab === 'all' ? 'all' : this.selectedTab === 'active' ? 'active' : this.selectedTab === 'inactive' ? 'inactive' : ''
        };
        // if(this.searchValue){
        //   data['']
        // }
        this._apiLoader["list"] = true;
        this.http.getNBFCList(data).subscribe((res) => {
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
        this.http.verifyUploadedKycDocumentForNBFC(id, data).subscribe((res) => {
            this.message.success(res === null || res === void 0 ? void 0 : res.message);
            this.getNBFCDetail(this.storeDetailId, this.selectedIndexOfExpand);
            console.log(res);
        });
    }
    confirmationTrigger(value) {
        console.log(value);
        this.http.deleteNBFCUserByUserId(this.selectedUserId).subscribe((res) => {
            var _a;
            if (res === null || res === void 0 ? void 0 : res.success) {
                this.message.success(res === null || res === void 0 ? void 0 : res.message);
            }
            else {
                this.message.error((_a = res === null || res === void 0 ? void 0 : res.message) === null || _a === void 0 ? void 0 : _a[0]);
            }
            this.getNBFCList();
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
        // var data = new Blob([e?.document_file], { type: 'text/plain;charset=utf-8;png;JPEG;jpeg' });
        // FileSaver.saveAs(data, 'image.png' );
        if (action == 'front') {
            var data = new Blob([e === null || e === void 0 ? void 0 : e.document_file_front], { type: 'text/plain;charset=utf-8' });
            file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"](data, `Front_Doc`);
        }
        else if (action == 'back') {
            var data = new Blob([e === null || e === void 0 ? void 0 : e.document_file_back], { type: 'text/plain;charset=utf-8' });
            file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"](data, `Back_Doc`);
        }
        else if (action == 'single') {
            var data = new Blob([e === null || e === void 0 ? void 0 : e.document_file], { type: 'text/plain;charset=utf-8' });
            file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"](data, `Document_Preview`);
        }
        // `${e?.file_name}`
    }
    uploadAndShowAgreement(action) {
        let data = new FormData();
        // let endPoint =  'partner' 
        data.append('file', this.uploaded_file);
        if (action === 'post') {
            const generateloader = this.message.loading('Uploading Document..', { nzDuration: 0 }).messageId;
            this.http.uploadAndShowAgreementForNBFC('post', this.selectedIdForAgreement, data).subscribe((res) => {
                var _a;
                console.log(res);
                if (res === null || res === void 0 ? void 0 : res.success) {
                    this.message.remove(generateloader);
                    this.message.success(res === null || res === void 0 ? void 0 : res.message);
                }
                else {
                    this.message.remove(generateloader);
                    this.message.error((_a = res === null || res === void 0 ? void 0 : res.message) === null || _a === void 0 ? void 0 : _a[0]);
                }
            }, error => {
                this.message.remove(generateloader);
                console.log(error);
            });
        }
        else {
            const generateloader = this.message.loading('Generating Report..', { nzDuration: 0 }).messageId;
            this.http.uploadAndShowAgreementForNBFC('get', this.selectedIdForAgreement).subscribe((res) => {
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
                // pdfViewerAndDownload(){
                // }
            }, error => {
                this.message.remove(generateloader);
                console.log(error);
            });
        }
    }
}
LendersListComponent.ɵfac = function LendersListComponent_Factory(t) { return new (t || LendersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
LendersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LendersListComponent, selectors: [["app-lenders-list"]], decls: 71, vars: 45, consts: [[1, "row", "mb-md-3"], [1, "col-md-6", "mb-md-0"], [3, "ngModel", "ngModelChange", 4, "ngxPermissionsOnly"], [1, "col-md-6", "col-12", "my-md-0", "my-3", "d-flex", "justify-content-end"], ["nz-button", "", "class", "text-primary", 3, "routerLink", 4, "ngxPermissionsOnly"], [1, "row"], [1, "w-100"], [1, "col-md-4", "mb-3", "d-flex"], ["nzSearch", "", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "Search text", 3, "ngModel", "keyup.enter", "ngModelChange"], ["suffixIconButton", ""], ["nz-button", "", "nzType", "default", "nzShape", "circle", "nz-tooltip", "", "nzTooltipTitle", "Reset Filter", 1, "mx-2", 3, "click"], ["nz-icon", "", "nzType", "undo"], [1, "accordianLoanApp"], [3, "nzTotal", "nzFrontPagination", "nzLoading", "nzShowSizeChanger", "nzPageSize", "nzPageSizeOptions", "nzPageIndex", "nzData", "nzScroll", "nzQueryParams"], ["rowspan", "2", "nzWidth", "100px"], ["rowspan", "2"], ["nzWidth", "5rem", "nzRight", "", 1, "pr-0"], [4, "ngFor", "ngForOf"], ["basicDetail", ""], ["contactPersonDetail", ""], ["bankingDetail", ""], ["kycDocument", ""], ["otherDetails", ""], ["roiDetails", ""], [3, "nzWidth", "nzVisible", "nzFooter", "nzClosable", "nzVisibleChange", "nzOnCancel"], [4, "nzModalContent"], ["nzTitle", "Change Password", 3, "nzWidth", "nzVisible", "nzFooter", "nzClosable", "nzOnCancel", "nzVisibleChange"], ["nzHeight", "50vw", "nzWidth", "60vw", "nzKeyboard", "true", 3, "nzVisible", "nzTitle", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalFooter", ""], ["adminDetail", ""], [3, "nzTitle", "nzWidth", "nzVisible", "nzOkLoading", "nzFooter", "nzClosable", "nzVisibleChange", "nzOnOk", "nzOnCancel"], [3, "nzLoading"], ["class", "row", 4, "ngIf"], [3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "all", 1, "mr-md-2", "mr-2", "px-4", "mb-md-0", "mb-3", "border-radius-2"], ["nz-radio-button", "", "nzValue", "active", 1, "mr-md-2", "mr-2", "px-4", "mb-md-0", "mb-3", "border-radius-2"], ["nz-radio-button", "", "nzValue", "inactive", 1, "mr-md-2", "mr-2", "px-4", "mb-md-0", "mb-3", "border-radius-2"], ["nz-button", "", 1, "text-primary", 3, "routerLink"], ["nz-button", "", "nzType", "secondary", "nzSearch", "", 3, "click"], ["nz-icon", "", "nzType", "search"], [3, "nzExpand", "nzExpandChange", 4, "ngIf"], [4, "ngIf"], ["nzRight", "", 1, "pr-0"], ["nz-dropdown", "", 1, "text-dark", "font-size-20", 3, "nzClickHide", "nzTrigger", "nzPlacement", "nzDropdownMenu"], ["src", "assets/images/ellipsis.png", "alt", "", "width", "30"], ["latestUploadDropDown", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "routerLink", "queryParams", 4, "ngxPermissionsOnly"], ["nz-menu-item", "", 3, "click", 4, "ngxPermissionsOnly"], [3, "nzExpand"], [1, "justify-content-center"], [1, "site-page-header", "acc-bg-light", "mb-2", 3, "nzTitle"], [1, "mb-md-5", 3, "nzLoading"], [1, "col-md-6"], [1, "d-flex", "flex-column"], [1, "col-md-4"], ["class", "justify-content-center", 4, "ngxPermissionsOnly"], ["class", "justify-content-center", 4, "ngIf"], [1, "d-flex"], [3, "nzExpand", "nzExpandChange"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "outline"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "outline"], ["nz-menu-item", "", 3, "routerLink", "queryParams"], [1, "m-l-5"], ["nz-menu-item", "", 3, "click"], ["nzSize", "large", 1, "d-flex", "pl-1", "align-items-left", 2, "cursor", "pointer", 3, "nzMultiple", "nzAccept", "nzBeforeUpload"], ["class", "col-md-6 mb-2", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mb-2"], [1, "col-4"], [1, "mb-2"], ["class", "col-4 align-self-center text-right", 4, "ngxPermissionsOnly"], [1, "col-4", "align-self-center", "text-right"], ["showPassword", "nzDropdownMenu"], ["class", "d-flex flex-column", 4, "ngIf"], [4, "ngxPermissionsOnly"], [1, "mx-2"], ["style", "cursor: pointer;", "class", "mr-3", "nz-icon", "", "nzType", "download", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["style", "cursor: pointer;", "class", "mr-3", "nz-icon", "", "nzType", "eye", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure you want to verify corresponding document ?", "nzPopconfirmPlacement", "bottom", 3, "nzOnConfirm", "nzOnCancel"], ["nz-icon", "", "nzType", "download", "nzTheme", "outline", 1, "mr-3", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline", 1, "mr-3", 2, "cursor", "pointer", 3, "click"], ["class", "row my-2", 4, "ngFor", "ngForOf"], [1, "row", "my-2"], [1, "ml-md-2"], [1, "mb-0"], [3, "title", "subTitle", "alertWarning", "icon", "cancelBtnTxt", "submitBtnTxt", "onOkCall", "onCencelCall"], [3, "userData", "cancelBtnTxt", "submitBtnTxt", "onOkCall", "onCencelCall"], [1, "pdf_viewer_container"], ["width", "100%", 2, "height", "25rem", 3, "src"], ["nz-button", "", "nzType", "primary", 3, "click"], [1, "col-6"], ["nz-form", "", 3, "formGroup"], [1, "col-md-12"], ["nzFor", "name", "nzRequired", "", 1, "text-left", 3, "nzSm"], ["nzErrorTip", "Please Add New Password!", 3, "nzSm"], ["nz-input", "", "type", "text", "formControlName", "new_password", "placeholder", "New Password"], ["nzErrorTip", "Please Add Confirm Password!", 3, "nzSm"], ["nz-input", "", "type", "text", "formControlName", "retype_password", "placeholder", "Confirm Password"], ["nzErrorTip", "Please Select Action!", 3, "nzSm"], ["nz-checkbox", "", "formControlName", "send_email"]], template: function LendersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LendersListComponent_nz_radio_group_3_Template, 7, 1, "nz-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LendersListComponent_button_5_Template, 2, 2, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nz-input-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function LendersListComponent_Template_input_keyup_enter_14_listener() { return ctx.getResultBasedOnSearch(); })("ngModelChange", function LendersListComponent_Template_input_ngModelChange_14_listener($event) { return ctx.searchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LendersListComponent_ng_template_15_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LendersListComponent_Template_button_click_17_listener() { return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzQueryParams", function LendersListComponent_Template_nz_table_nzQueryParams_20_listener($event) { return ctx.getNBFCList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Lenders Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Regd. On");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "NBFC Line Given");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Amt. Recd. in Escrow A/C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Wallet Bal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Registered(KYC)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "System Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, LendersListComponent_ng_container_42_Template, 122, 55, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, LendersListComponent_ng_template_43_Template, 3, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, LendersListComponent_ng_template_45_Template, 3, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, LendersListComponent_ng_template_47_Template, 3, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, LendersListComponent_ng_template_49_Template, 3, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, LendersListComponent_ng_template_51_Template, 3, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, LendersListComponent_ng_template_53_Template, 3, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "nz-modal", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function LendersListComponent_Template_nz_modal_nzVisibleChange_55_listener($event) { return ctx.isDelete = $event; })("nzOnCancel", function LendersListComponent_Template_nz_modal_nzOnCancel_55_listener() { ctx.isDelete = false; return ctx.selectedUserId = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, LendersListComponent_ng_container_56_Template, 2, 6, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "nz-modal", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function LendersListComponent_Template_nz_modal_nzVisibleChange_57_listener($event) { return ctx.toggleChangePassword = $event; })("nzOnCancel", function LendersListComponent_Template_nz_modal_nzOnCancel_57_listener() { ctx.toggleChangePassword = false; return ctx.selectedUserId = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, LendersListComponent_ng_container_58_Template, 3, 0, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "nz-modal", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnCancel", function LendersListComponent_Template_nz_modal_nzOnCancel_59_listener() { return ctx.toggleChangePassword = false; })("nzVisibleChange", function LendersListComponent_Template_nz_modal_nzVisibleChange_59_listener($event) { return ctx.toggleChangePassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, LendersListComponent_ng_container_60_Template, 2, 3, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "nz-modal", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function LendersListComponent_Template_nz_modal_nzVisibleChange_61_listener($event) { return (ctx.pdf_viewer_object_values["boolean"] = $event); })("nzOnCancel", function LendersListComponent_Template_nz_modal_nzOnCancel_61_listener() { return ctx.handleCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, LendersListComponent_ng_container_62_Template, 3, 1, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, LendersListComponent_ng_template_63_Template, 2, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, LendersListComponent_ng_template_65_Template, 3, 0, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "nz-modal", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function LendersListComponent_Template_nz_modal_nzVisibleChange_67_listener($event) { return (ctx.passwordForAdmin["isVisibleModal"] = $event); })("nzOnOk", function LendersListComponent_Template_nz_modal_nzOnOk_67_listener() { return ctx.onClickResetPassword(); })("nzOnCancel", function LendersListComponent_Template_nz_modal_nzOnCancel_67_listener() { ctx.passwordForAdmin["isVisibleModal"] = false; return ctx.selectedUserId = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "nz-card", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, LendersListComponent_div_69_Template, 5, 1, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, LendersListComponent_div_70_Template, 20, 7, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c14));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.total_count ? ctx.total_count : " 0 ", " Results Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnAfter", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTotal", ctx.total_count)("nzFrontPagination", false)("nzLoading", ctx._apiLoader["list"])("nzShowSizeChanger", true)("nzFrontPagination", false)("nzPageSize", ctx.globalPageSize)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c15))("nzPageIndex", ctx.page)("nzShowSizeChanger", true)("nzData", ctx.masterPartner)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c16));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.masterPartner);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzWidth", 500)("nzVisible", ctx.isDelete)("nzFooter", null)("nzClosable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzWidth", 400)("nzVisible", ctx.toggleChangePassword)("nzFooter", null)("nzClosable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzWidth", 800)("nzVisible", ctx.toggleChangePassword)("nzFooter", null)("nzClosable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", ctx.pdf_viewer_object_values["boolean"])("nzTitle", ctx.pdf_viewer_object_values["title"])("nzFooter", _r21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", ctx.passwordForAdmin["toggleShoePasswordField"] ? "View Password" : "Reset Password")("nzWidth", 500)("nzVisible", ctx.passwordForAdmin["isVisibleModal"])("nzOkLoading", ctx.passwordForAdmin["apiLoaderOnClick"])("nzFooter", ctx.passwordForAdmin["toggleShoePasswordField"] ? null : "")("nzClosable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx.passwordForAdmin["apiLoader"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passwordForAdmin["toggleShoePasswordField"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.passwordForAdmin["toggleShoePasswordField"]);
    } }, directives: [ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxPermissionsDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__["NzCardComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NzWaveDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzCellFixedDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__["NzModalContentDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__["NzRadioGroupComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__["NzRadioButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterLink"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropDownADirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropDownDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_19__["NzMenuDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzTrExpandDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzTableFixedRowComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_20__["NzPageHeaderComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzTdAddOnComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_19__["NzMenuItemDirective"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_21__["NzUploadComponent"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__["NzPopconfirmDirective"], _shared_template_double_confirmation_popup_double_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_23__["DoubleConfirmationPopupComponent"], _shared_template_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_24__["ChangePasswordComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__["NzFormControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_27__["NzCheckboxComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlbmRlcnMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHIiwiZmlsZSI6ImxlbmRlcnMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogOmhvc3QgOjpuZy1kZWVwIC5hbnQtdGFibGUtYm9keSB7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDU0OHB4KSAhaW1wb3J0YW50O1xufSAqL1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LendersListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-lenders-list',
                templateUrl: './lenders-list.component.html',
                styleUrls: ['./lenders-list.component.css']
            }]
    }], function () { return [{ type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "hK0q":
/*!******************************************************************************!*\
  !*** ./src/app/users/lenders/add-edit-lenders/add-edit-lenders.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddEditLendersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditLendersComponent", function() { return AddEditLendersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
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
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "TaO5");























function AddEditLendersComponent_nz_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 94);
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r9.id)("nzLabel", item_r9.name);
} }
function AddEditLendersComponent_ng_container_107_i_17_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditLendersComponent_ng_container_107_i_17_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const k_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.deleteDocumentByDocumentId(k_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddEditLendersComponent_ng_container_107_i_19_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditLendersComponent_ng_container_107_i_19_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.onClickShowUploadedDocument(item_r10, "documents"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AddEditLendersComponent_ng_container_107_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-form-label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-form-control", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-upload", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzChange", function AddEditLendersComponent_ng_container_107_Template_nz_upload_nzChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const k_r11 = ctx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.onUpload($event, k_r11, "name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddEditLendersComponent_ng_container_107_i_17_Template, 1, 0, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AddEditLendersComponent_ng_container_107_i_19_Template, 1, 0, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const k_r11 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", k_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 13)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r10.controls.display_name.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("nzErrorTip", "Please Add ", item_r10.controls.label_name.value, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzMultiple", "false")("nzAccept", ".png, .jpg, .pdf")("nzCustomRequest", ctx_r1.customUpload);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r10.controls.document_name.value ? "Re Upload" : " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDisabled", item_r10.controls.document_name.value ? false : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r10.controls.isdelete.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r10.controls.document_name.value);
} }
function AddEditLendersComponent_ng_template_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-select", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nz-option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "nz-option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLabel", "\u20B9")("nzValue", "Flat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLabel", "%")("nzValue", "Variable");
} }
function AddEditLendersComponent_button_168_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditLendersComponent_button_168_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.onClickSaveExistingForm($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Save & Add New");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r4.apiLoader["saveAddNew"])("disabled", ctx_r4.apiLoader["formSave"]);
} }
function AddEditLendersComponent_ng_container_173_ng_container_4_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 94);
} if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r25)("nzLabel", item_r25.name);
} }
function AddEditLendersComponent_ng_container_173_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddEditLendersComponent_ng_container_173_ng_container_4_Template_ng_container_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r29.checkItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddEditLendersComponent_ng_container_173_ng_container_4_nz_option_1_Template, 1, 2, "nz-option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r24.documentFlagArray.includes(item_r25));
} }
function AddEditLendersComponent_ng_container_173_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-label", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Select Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-select", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddEditLendersComponent_ng_container_173_Template_nz_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.selectedDocument = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddEditLendersComponent_ng_container_173_ng_container_4_Template, 2, 1, "ng-container", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.selectedDocument);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.documentArray);
} }
function AddEditLendersComponent_ng_container_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "embed", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r6.sanatizeUrlToSafe, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
} }
function AddEditLendersComponent_ng_template_176_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditLendersComponent_ng_template_176_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.handleCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const getBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
});
class AddEditLendersComponent {
    constructor(sanitized, fb, http, route, message, router, nzImageService) {
        this.sanitized = sanitized;
        this.fb = fb;
        this.http = http;
        this.route = route;
        this.message = message;
        this.router = router;
        this.nzImageService = nzImageService;
        this.documentArray = [];
        this.apiLoader = {
            formSave: false,
            saveAddNew: false,
        };
        this.pdf_viewer_object_values = {
            'boolean': false,
            'url': '',
            'title': ''
        };
        this.previewImage = {
            e: null,
            isVisible: false,
        };
        this.listOfDocumentWithFlag = [];
        // addUnderWriting(data: any, value) {
        //   this.rules.push(this.addSlabControlsUnderWriting(data, value))
        // }
        this.documentFlagArray = [];
        this.customUpload = (file) => {
            const data = [];
            // data.push({documents: file});
            // let value = this.addEditProductForm.get('document_data') as FormArray;
            // value.controls?.[this.index].patchValue({documents:file});
            // console.log(file)
            // console.log(this.addEditProductForm.get('document_data')['controls'])
            // this.addEditProductForm.get('document_data')['controls'][this.index].controls.documents.setValue(file)
            // this.addEditProductForm.get('document_data')['controls']['documents'].setValue(file)
            return false;
        };
        this.getListOfDocumentRequired();
    }
    ngOnInit() {
        this.createMasterProductForm();
        this.route.queryParams.subscribe((params) => {
            if (params["id"]) {
                this.isEdit = true;
                this.masterPartnerId = params["id"];
                if (this.masterPartnerId) {
                    this.getNBFCDetail();
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
    getNBFCDetail() {
        this.http.getNBFCDetail(this.masterPartnerId).subscribe((res) => {
            this.setRetrievedDataInForm(res === null || res === void 0 ? void 0 : res.data);
            // this.createMasterProductForm(res?.data);
        });
    }
    setRetrievedDataInForm(data) {
        var _a;
        for (var i in this.addEditProductForm.value) {
            if (i == "state") {
                data[i] = (_a = data[i]) === null || _a === void 0 ? void 0 : _a.id;
            }
            if (i != "document_data") {
                if (data[i]) {
                    this.addEditProductForm.controls[i].setValue(data[i], {
                        emitEvent: false,
                    });
                }
            }
        }
        this.setFormData(data);
    }
    getListOfStates() {
        let action = "get-states";
        this.http.fetchDetailForUserModuleDropDown(action).subscribe((res) => {
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
    setFormData(data) {
        var _a;
        console.log(data);
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
                    documentArray.push(documents);
                    if ((documents === null || documents === void 0 ? void 0 : documents.pk) == 3) {
                        (_h = this.documentArray) === null || _h === void 0 ? void 0 : _h.forEach((entity, index) => {
                            if (entity.pk == (element === null || element === void 0 ? void 0 : element.document_master["id"])) {
                                this.documentArray.splice(index, 1);
                            }
                        });
                    }
                    this.addSkills(documents);
                }
                // this.addSkills(documents);
            });
            console.log(this.documentArray, '==> Add');
            console.log(this.documentFlagArray, '==> To Splice');
        }
    }
    createMasterProductForm(data) {
        var _a;
        this.addEditProductForm = this.fb.group({
            name: [data ? data === null || data === void 0 ? void 0 : data.name : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address_line_1: [
                data ? data === null || data === void 0 ? void 0 : data.address_line_1 : null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ],
            address_line_2: [
                data ? data === null || data === void 0 ? void 0 : data.address_line_2 : null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ],
            city: [data ? data === null || data === void 0 ? void 0 : data.city : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            state: [data ? (_a = data === null || data === void 0 ? void 0 : data.state) === null || _a === void 0 ? void 0 : _a.id : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pincode: [
                data ? data === null || data === void 0 ? void 0 : data.pincode : null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[1-9][0-9]{5}$")],
            ],
            phone: [
                data ? data === null || data === void 0 ? void 0 : data.phone : null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("([0-9]{8}|[0-9]{10})")],
            ],
            // ^(\d{10}|\d{12})$ ^[0-9]{8,10}$^[0-9]{8,10}$
            // ^[6-9][0-9]{9}$
            bank_name: [data ? data === null || data === void 0 ? void 0 : data.bank_name : null],
            account_no: [data ? data === null || data === void 0 ? void 0 : data.account_no : null],
            ifsc: [
                data ? data === null || data === void 0 ? void 0 : data.ifsc : null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[A-Z]{4}0[A-Z0-9]{6}$")],
            ],
            branch: [data ? data === null || data === void 0 ? void 0 : data.branch : null],
            display_name: [data ? data === null || data === void 0 ? void 0 : data.display_name : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            // Attribute Type under business detail
            // business_type: [data ? data?.name : null, [Validators.required]],
            // Attribute Nature under business detail
            // business_nature: [data ? data?.name : null, [Validators.required]],
            relationship_manager_name: [data ? data === null || data === void 0 ? void 0 : data.relationship_manager_name : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            relationship_manager_contact: [data ? data === null || data === void 0 ? void 0 : data.relationship_manager_contact : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, , _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[1-9][0-9]{9}$")]],
            relationship_manager_email: [data ? data === null || data === void 0 ? void 0 : data.relationship_manager_email : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$"),]],
            total_commitment: [data ? data === null || data === void 0 ? void 0 : data.total_commitment : null],
            roi_unutilized_fund: [data ? data === null || data === void 0 ? void 0 : data.roi_unutilized_fund : null],
            roi_utilized_fund: [data ? data === null || data === void 0 ? void 0 : data.roi_utilized_fund : null],
            fldg: [data ? data === null || data === void 0 ? void 0 : data.fldg : null],
            nbfc_user_name: [
                data ? data === null || data === void 0 ? void 0 : data.nbfc_user_name : null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ],
            nbfc_user_mobile: [
                data ? data === null || data === void 0 ? void 0 : data.nbfc_user_mobile : null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("([0-9]{8}|[0-9]{10})")],
            ],
            fldg_calculation_type: [
                data ? data === null || data === void 0 ? void 0 : data.fldg_calculation_type : "Variable",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ],
            // ^[7-9][0-9]{9}$
            nbfc_user_email: [
                data ? data === null || data === void 0 ? void 0 : data.nbfc_user_email : null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$"),
                ],
            ],
            // employee: [data ? data?.name : null, [Validators.required]],
            // payout: [data ? data?.name : null, [Validators.required]],
            document_data: this.fb.array([]),
        });
        if (data) {
            this.setFormData(data);
        }
        // this.getListOfDocumentRequired();
    }
    onClickOpenPopUp(e) {
        if ((e === null || e === void 0 ? void 0 : e.pointerType) == "mouse") {
            this.isVisible = true;
        }
    }
    onClickShowUploadedDocument(e, action) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if ((_a = e === null || e === void 0 ? void 0 : e.value) === null || _a === void 0 ? void 0 : _a.id) {
                this.pdf_viewer_object_values['boolean'] = true;
                this.pdf_viewer_object_values['title'] = 'Showing ' + ((_b = e === null || e === void 0 ? void 0 : e.value) === null || _b === void 0 ? void 0 : _b.label_name);
                this.pdf_viewer_object_values['url'] = (_c = e === null || e === void 0 ? void 0 : e.value) === null || _c === void 0 ? void 0 : _c.documents;
                this.sanatizeUrlToSafe = this.sanitized.bypassSecurityTrustResourceUrl(this.pdf_viewer_object_values['url']);
                console.log(e);
            }
            else {
                const images = [];
                if (action == "documents") {
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
                else if (action == "documents_front") {
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
                else if (action == "documents_back") {
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
    omit_special_char(event) {
        // to avoid special Character
        // var k;
        // k = event.charCode;  //         k = event.keyCode;  (Both can be used)
        // return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
        // to avoid special Character && Number
        var charCode = event.keyCode;
        if ((charCode > 64 && charCode < 91) ||
            (charCode > 96 && charCode < 123) ||
            charCode == 32 ||
            charCode == 8)
            return true;
        else
            return false;
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
            // this.documentArray.map((res)=>{
            //   let arrDoc : any = [];
            //   if(res?.front_back_flag){
            //     arrDoc = {
            //       pk: res?.pk,
            //       frontSide: res?.name + ' Front',
            //       front_back_flag: res?.front_back_flag
            //     }
            //     this.listOfDocumentWithFlag.push(arrDoc)
            //     arrDoc = {
            //       pk: res?.pk,
            //       backSide: res?.name + ' Back',
            //       front_back_flag: res?.front_back_flag
            //     }
            //     this.listOfDocumentWithFlag.push(arrDoc)
            //   }
            //   if(!res?.front_back_flag){
            //     arrDoc = {
            //       pk: res?.pk,
            //       name: res?.name,
            //       front_back_flag: res?.front_back_flag
            //     }
            //     this.listOfDocumentWithFlag.push(arrDoc)
            //   }
            // })
            // this.listOfDocumentWithFlag =  res?.data?.results?.['label_list']
            // console.log(this?.listOfDocumentWithFlag);
        });
    }
    addRule(data) {
        var _a, _b;
        console.log(this.selectedDocument);
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
                pk: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.pk,
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
                pk: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.pk,
            };
            this.addSkills(data);
        }
        this.isVisible = false;
    }
    // addRule(e?) {
    //     // this.documentFlagArray.push(this.selectedDocument);
    //   // this.addSkills(this.selectedDocument);
    //   this.isVisible = false;
    // }
    get skills() {
        return this.addEditProductForm.get("document_data");
    }
    newSkill(data) {
        console.log(data);
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
        // }
    }
    get_documentArr(form) {
        return form.controls.document_data.controls;
    }
    handleCancel() {
        this.isVisible = false;
        this.pdf_viewer_object_values['boolean'] = false;
        this.pdf_viewer_object_values['url'] = '';
    }
    // this.fb.array([])
    onUpload(e, i, action) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        console.log(e);
        console.log((_a = e === null || e === void 0 ? void 0 : e.file) === null || _a === void 0 ? void 0 : _a.originFileObj);
        let fileName = this.addEditProductForm.get("document_data");
        let value = this.addEditProductForm.get("document_data");
        if (action == "name") {
            (_b = fileName.controls) === null || _b === void 0 ? void 0 : _b[i].patchValue({ document_name: (_c = e === null || e === void 0 ? void 0 : e.file) === null || _c === void 0 ? void 0 : _c.name });
            (_d = value.controls) === null || _d === void 0 ? void 0 : _d[i].patchValue({ documents: (_e = e === null || e === void 0 ? void 0 : e.file) === null || _e === void 0 ? void 0 : _e.originFileObj });
        }
        else if (action == "name_front") {
            (_f = fileName.controls) === null || _f === void 0 ? void 0 : _f[i].patchValue({ document_name_front: (_g = e === null || e === void 0 ? void 0 : e.file) === null || _g === void 0 ? void 0 : _g.name });
            (_h = value.controls) === null || _h === void 0 ? void 0 : _h[i].patchValue({
                documents_front: (_j = e === null || e === void 0 ? void 0 : e.file) === null || _j === void 0 ? void 0 : _j.originFileObj,
            });
        }
        else if (action == "name_back") {
            (_k = fileName.controls) === null || _k === void 0 ? void 0 : _k[i].patchValue({ document_name_back: (_l = e === null || e === void 0 ? void 0 : e.file) === null || _l === void 0 ? void 0 : _l.name });
            (_m = value.controls) === null || _m === void 0 ? void 0 : _m[i].patchValue({
                documents_back: (_o = e === null || e === void 0 ? void 0 : e.file) === null || _o === void 0 ? void 0 : _o.originFileObj,
            });
        }
    }
    addSkills(data) {
        this.skills.push(this.newSkill(data));
    }
    removeSkill(i) {
        this.skills.removeAt(i);
    }
    deleteDocumentByDocumentId(i) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        let fileName = this.addEditProductForm.get("document_data");
        const master = (_b = (_a = fileName.controls) === null || _a === void 0 ? void 0 : _a[i].value) === null || _b === void 0 ? void 0 : _b.document_master;
        console.log((_c = fileName.controls) === null || _c === void 0 ? void 0 : _c[i].value);
        // return;
        const selectedFile = (_d = fileName.controls) === null || _d === void 0 ? void 0 : _d[i].value;
        if (!((_f = (_e = fileName.controls) === null || _e === void 0 ? void 0 : _e[i].value) === null || _f === void 0 ? void 0 : _f.id)) {
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
            console.log(this.documentArray);
            this.message.success(((_h = (_g = fileName.controls) === null || _g === void 0 ? void 0 : _g[i].value) === null || _h === void 0 ? void 0 : _h.label_name) + " Document Deleted");
            fileName.removeAt(i);
            this.selectedDocument = null;
        }
        else {
            const docMaster = (_l = (_k = (_j = fileName.controls) === null || _j === void 0 ? void 0 : _j[i].value) === null || _k === void 0 ? void 0 : _k.document_master) === null || _l === void 0 ? void 0 : _l.id;
            this.http
                .deleteNBFCDocumentByDocumentId(selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.id)
                .subscribe((res) => {
                var _a, _b;
                const document = {
                    name: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.label_name,
                    pk: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.document_master,
                    front_back_flag: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.front_back_flag,
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
    onClickSubmitForm() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
        console.log(this.addEditProductForm.value);
        for (const i in this.addEditProductForm.controls) {
            this.addEditProductForm.controls[i].markAsDirty();
            this.addEditProductForm.controls[i].updateValueAndValidity();
        }
        const saveDoc = [];
        var sendDate = this.addEditProductForm.value;
        if (!this.addEditProductForm.valid) {
            this.message.error("Mandatory Fields Are missing ", { nzDuration: 5000 });
        }
        for (var i in sendDate.document_data) {
            if (sendDate.document_data[i].front_back_flag &&
                !sendDate.document_data[i].document_name_front) {
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
            this.apiLoader["formSave"] = true;
            if (!this.isEdit) {
                let data = new FormData();
                var sendDate = this.addEditProductForm.value;
                for (var i in sendDate.document_data) {
                    // if(sendDate?.document_data[i]?.documents?.includes('/')){
                    // break;
                    // }
                    if (!sendDate.document_data[i].id) {
                        (_a = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _a === void 0 ? true : delete _a.id;
                    }
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
                    // data.append("documents", sendDate?.document_data[i]?.documents);
                    // delete sendDate?.document_data[i]?.documents;
                }
                for (var i in sendDate) {
                    if (i == "document_data") {
                        data.append(i, JSON.stringify(sendDate[i]));
                    }
                    else {
                        if (sendDate[i]) {
                            data.append(i, sendDate[i]);
                        }
                    }
                }
                const url = this.http.createNBFCForm(data);
                url.subscribe((res) => {
                    var _a;
                    if (res.success) {
                        this.apiLoader["formSave"] = false;
                        this.message.success(res === null || res === void 0 ? void 0 : res.message);
                        this.router.navigate(["lenders"]);
                    }
                    else {
                        for (var i in saveDoc) {
                            let value = this.addEditProductForm.get("document_data");
                            (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({ documents: saveDoc[i] });
                        }
                        this.apiLoader["formSave"] = false;
                        this.message.error(res === null || res === void 0 ? void 0 : res.message);
                    }
                }, (error) => {
                    var _a;
                    for (var i in saveDoc) {
                        let value = this.addEditProductForm.get("document_data");
                        (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({ documents: saveDoc[i] });
                    }
                    this.apiLoader["formSave"] = false;
                });
            }
            else {
                let data = new FormData();
                var sendDate = this.addEditProductForm.value;
                for (var i in sendDate.document_data) {
                    // if(sendDate?.document_data[i]?.documents?.includes('/')){
                    // break;
                    // }
                    if (!sendDate.document_data[i].id) {
                        (_o = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _o === void 0 ? true : delete _o.id;
                    }
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
                    // data.append("documents", sendDate?.document_data[i]?.documents);
                    // delete sendDate?.document_data[i]?.documents;
                }
                // for (var i in sendDate.document_data) {
                //   if (!sendDate.document_data[i].id) {
                //     delete sendDate?.document_data[i]?.id;
                //   }
                //   if (sendDate.document_data[i].documents?.["uid"]) {
                //     data.append("documents", sendDate?.document_data[i]?.documents);
                //     delete sendDate?.document_data[i]?.documents;
                //   } else {
                //     delete sendDate?.document_data[i]?.documents;
                //   }
                // }
                for (var i in sendDate) {
                    if (i == "document_data") {
                        data.append(i, JSON.stringify(sendDate[i]));
                    }
                    else {
                        if (sendDate[i]) {
                            data.append(i, sendDate[i]);
                        }
                        // data.append(i, sendDate[i]);
                    }
                }
                const url = this.http.updateNBFCForm(this.masterPartnerId, data);
                url.subscribe((res) => {
                    if (res.success) {
                        this.message.success(res === null || res === void 0 ? void 0 : res.message);
                        this.apiLoader["formSave"] = false;
                        this.router.navigate(["lenders"]);
                    }
                    else {
                        this.message.error(res === null || res === void 0 ? void 0 : res.message);
                        this.apiLoader["formSave"] = false;
                    }
                }, (err) => {
                    this.apiLoader["formSave"] = false;
                });
            }
        }
    }
    onClickSaveExistingForm() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const storeData = this.addEditProductForm.value;
        for (const i in this.addEditProductForm.controls) {
            this.addEditProductForm.controls[i].markAsDirty();
            this.addEditProductForm.controls[i].updateValueAndValidity();
        }
        if (!this.addEditProductForm.valid) {
            this.message.error("Mandatory Fields Are missing ", { nzDuration: 5000 });
        }
        const saveDoc = [];
        var sendDate = this.addEditProductForm.value;
        for (var i in sendDate.document_data) {
            // if (
            //   !sendDate.document_data[i].document_name &&
            //   sendDate.document_data[i].label_name
            // ) {
            //   this.message.error(
            //     " Plz Upload Selected Document " +
            //       ` ${sendDate.document_data[i].label_name}` +
            //       " at index " +
            //       i,
            //     { nzDuration: 5000 }
            //   );
            //   return;
            // }
            if (sendDate.document_data[i].front_back_flag &&
                !sendDate.document_data[i].document_name_front) {
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
            this.apiLoader["saveAddNew"] = true;
            let data = new FormData();
            var sendDate = this.addEditProductForm.value;
            for (var i in sendDate.document_data) {
                if (!sendDate.document_data[i].id) {
                    (_a = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _a === void 0 ? true : delete _a.id;
                }
                if (!sendDate.unique_code) {
                    sendDate === null || sendDate === void 0 ? true : delete sendDate.unique_code;
                }
                // if (sendDate?.document_data[i]?.documents) {
                //   saveDoc.push(sendDate?.document_data[i]?.documents)
                //   data.append("documents", sendDate?.document_data[i]?.documents);
                //   delete sendDate?.document_data[i]?.documents;
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
                if (i == "document_data") {
                    data.append(i, JSON.stringify(sendDate[i]));
                }
                else {
                    if (sendDate[i]) {
                        data.append(i, sendDate[i]);
                    }
                    // data.append(i, sendDate[i])
                }
            }
            const url = this.http.createNBFCForm(data);
            url.subscribe((res) => {
                var _a;
                if (res.success) {
                    this.message.success(res === null || res === void 0 ? void 0 : res.message);
                    this.apiLoader["saveAddNew"] = false;
                    let newRouterLink = "/lenders/add";
                    this.router.navigate(["/"]).then(() => {
                        this.router.navigate([newRouterLink]);
                    });
                }
                else {
                    for (var i in saveDoc) {
                        let value = this.addEditProductForm.get("document_data");
                        (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({ documents: saveDoc[i] });
                    }
                    this.message.error(res === null || res === void 0 ? void 0 : res.message);
                    this.apiLoader["saveAddNew"] = false;
                }
            }, (error) => {
                var _a;
                for (var i in saveDoc) {
                    let value = this.addEditProductForm.get("document_data");
                    (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({ documents: saveDoc[i] });
                }
                this.apiLoader["saveAddNew"] = false;
            });
        }
    }
    handleChange(e, index) {
        // console.log('in Progress', i);
        this.index = index;
        // console.log(this.addEditProductForm.get('document_data')['controls'][index].controls.document_master.value)
        this.addEditProductForm
            .get("document_data")["controls"][index].controls.documents.setValue(e.file.originFileObj);
        // console.log(e + '  ' + this.addEditProductForm.controls.document_data['controls'][index].document_master)
    }
}
AddEditLendersComponent.ɵfac = function AddEditLendersComponent_Factory(t) { return new (t || AddEditLendersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_7__["NzImageService"])); };
AddEditLendersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddEditLendersComponent, selectors: [["app-add-edit-lenders"]], decls: 178, vars: 101, consts: [["nz-form", "", 3, "formGroup"], [1, "row", "border-bottom"], [1, "col-md-12"], ["nzFor", "name", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid NBFC\u2019s Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "name", "placeholder", "NBFC Name"], ["nzFor", "address_line_1", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Address!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "address_line_1", "placeholder", "Address Line 1"], ["nzFor", "address_line_2", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Address line 2!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "address_line_2", "placeholder", "Address Line 2"], ["nzFor", "display_name", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add valid Display Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "display_name", "placeholder", "Display Name"], ["nzFor", "city", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid  City!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "city", "placeholder", "City", 3, "keypress"], ["nzFor", "state", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please select Valid Sate", 3, "nzSm", "nzXs"], ["formControlName", "state", "nzPlaceHolder", "Select State", "nzShowSearch", "", "nzAllowClear", "", 3, "nzFocus", "nzOnSearch"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzFor", "pincode", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Pincode!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "pincode", "placeholder", "Pincode"], ["nzFor", "phone", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Phone No.!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "phone", "placeholder", "Phone No."], [1, "mt-2"], [1, "col-md-6"], ["nzFor", "nbfc_user_name", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Contact Person Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "nbfc_user_name", "placeholder", "Person Name", 3, "keypress"], ["nzFor", "nbfc_user_mobile", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Contact person Mobile No.!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "nbfc_user_mobile", "placeholder", "person Phone No."], ["nzFor", "nbfc_user_email", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Person Email!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "nbfc_user_email", "placeholder", "Person Email", 2, "text-transform", "lowercase"], [1, "col-12"], ["nzFor", "bank_name", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Bank Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "bank_name", "placeholder", "Bank Name", 3, "keypress"], ["nzFor", "account_no", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Account No.!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "account_no", "placeholder", "Account No."], ["nzFor", "ifsc", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid IFSC!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "ifsc", "placeholder", "IFSC"], ["nzFor", "branch", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Branch!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "branch", "placeholder", "Branch", 3, "keypress"], [1, "mt-2", "d-flex"], [1, "mr-2"], ["formArrayName", "document_data", 4, "ngFor", "ngForOf"], [1, "row", "no-gutters"], [1, "col-12", "d-flex", "justify-content-between"], ["nz-button", "", "nzType", "link", 1, "", 3, "click"], [1, "row", "border-top", "mt-2"], ["nzFor", "total_commitment", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Commitment!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "total_commitment", "placeholder", "Total Commitment."], ["nzFor", "fldg", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid FLDG!", 3, "nzSm", "nzXs"], [3, "nzAddOnAfter"], ["nz-input", "", "type", "text", "formControlName", "fldg", "placeholder", "FLDG"], ["addOnAfterTemplate", ""], ["nzFor", "roi_utilized_fund", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid ROI Utilized Fund!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "roi_utilized_fund", "placeholder", "ROI Utilized Fund"], ["nzFor", "roi_unutilized_fund", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid ROI Unutilized Fund!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "roi_unutilized_fund", "placeholder", "ROI Unutilized Fund"], [1, "mt-2", "border-top"], [1, "row"], [1, "col-md-12", "mt-4"], ["nzFor", "relationship_manager_name", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Enter Valid Name", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "relationship_manager_name", "placeholder", "Relationship Manager Name", 3, "keypress"], ["nzFor", "relationship_manager_email", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Email", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "relationship_manager_email", "placeholder", "Relationship Manager Email", 2, "text-transform", "lowercase"], ["nzFor", "relationship_manager_contact", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Enter Valid Number", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "relationship_manager_contact", "placeholder", "Relationship Manager Number"], [1, "row", "my-3", "justify-content-between"], [1, "col-3"], ["nzType", "primary", "nz-button", "", "type", "submit", 3, "nzLoading", "disabled", "click", 4, "ngIf"], [1, "col-3", "text-right"], ["type", "submit", "nz-button", "", "nzType", "primary", 3, "nzLoading", "disabled", "click"], ["nzTitle", "Add New Document", 3, "nzVisible", "nzOkDisabled", "nzWidth", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nzHeight", "50vw", "nzWidth", "60vw", "nzKeyboard", "true", 3, "nzVisible", "nzTitle", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalFooter", ""], [3, "nzValue", "nzLabel"], ["formArrayName", "document_data"], [1, "col-md-12", 3, "formGroupName"], [1, "d-flex", "flex-row", "bd-highlight", "mb-3"], [1, "px-2", 2, "min-width", "25%"], ["nzFor", "documents", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzErrorTip"], [1, "d-flex"], [3, "nzMultiple", "nzAccept", "nzCustomRequest", "nzChange"], ["nz-button", "", "type", "button"], ["nz-icon", "", "nzType", "upload"], [1, "px-2"], ["formControlName", "is_verified", "nz-checkbox", "", 1, "ml-3", "align-self-center", 3, "nzDisabled"], ["class", "mx-3", "nz-icon", "", "nzType", "delete", "nzTheme", "outline", "style", "font-size: 1rem; cursor: pointer; color: red;", 3, "click", 4, "ngIf"], ["class", " text-primary", "nz-icon", "", "nzType", "eye", "nzTheme", "outline", "style", "font-size: 1rem; cursor: pointer;", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline", 1, "mx-3", 2, "font-size", "1rem", "cursor", "pointer", "color", "red", 3, "click"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline", 1, "text-primary", 2, "font-size", "1rem", "cursor", "pointer", 3, "click"], ["formControlName", "fldg_calculation_type"], [3, "nzLabel", "nzValue"], ["nzType", "primary", "nz-button", "", "type", "submit", 3, "nzLoading", "disabled", "click"], ["nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzPlaceHolder", "Select Document", 1, "ml-4", 2, "min-width", "13rem", 3, "ngModel", "ngModelChange"], [3, "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngIf"], [1, "pdf_viewer_container"], ["width", "100%", 2, "height", "35rem", 3, "src"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function AddEditLendersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "NBFC\u2019s Name");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditLendersComponent_Template_input_keypress_33_listener($event) { return ctx.omit_special_char($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzFocus", function AddEditLendersComponent_Template_nz_select_nzFocus_39_listener() { return ctx.getListOfStates(); })("nzOnSearch", function AddEditLendersComponent_Template_nz_select_nzOnSearch_39_listener($event) { return ctx.onSearchGetList($event, "state"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, AddEditLendersComponent_nz_option_40_Template, 1, 2, "nz-option", 21);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Contact Personal Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "nz-form-label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "nz-form-control", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditLendersComponent_Template_input_keypress_62_listener($event) { return ctx.omit_special_char($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "nz-form-label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Phone No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "nz-form-control", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "nz-form-label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Email Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "nz-form-control", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " Banking Details (Optional) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "nz-form-label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Bank Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "nz-form-control", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditLendersComponent_Template_input_keypress_85_listener($event) { return ctx.omit_special_char($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "nz-form-label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "A/c No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "nz-form-control", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "nz-form-label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "IFSC Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "nz-form-control", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "nz-form-label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "nz-form-control", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditLendersComponent_Template_input_keypress_103_listener($event) { return ctx.omit_special_char($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "h5", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, " KYC Documents ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, AddEditLendersComponent_ng_container_107_Template, 20, 14, "ng-container", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditLendersComponent_Template_button_click_110_listener($event) { return ctx.onClickOpenPopUp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "+Add Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " Other Details (to be filled through admin) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "nz-form-label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Total Commitment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "nz-form-control", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "nz-form-label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "FLDG");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "nz-form-control", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "nz-input-group", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](130, AddEditLendersComponent_ng_template_130_Template, 3, 4, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "nz-form-label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "ROI Utilized Fund");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "nz-form-control", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "nz-form-label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "ROI Unutilized Fund");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "nz-form-control", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, " Relationship Manager Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "nz-form-label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Relationship Manager Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "nz-form-control", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditLendersComponent_Template_input_keypress_153_listener($event) { return ctx.omit_special_char($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "nz-form-label", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Relationship Manager Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "nz-form-control", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "input", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "nz-form-label", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Relationship Manager Contact No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "nz-form-control", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "input", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](168, AddEditLendersComponent_button_168_Template, 2, 2, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "button", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditLendersComponent_Template_button_click_170_listener() { return ctx.onClickSubmitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "nz-modal", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function AddEditLendersComponent_Template_nz_modal_nzVisibleChange_172_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function AddEditLendersComponent_Template_nz_modal_nzOnCancel_172_listener() { return ctx.handleCancel(); })("nzOnOk", function AddEditLendersComponent_Template_nz_modal_nzOnOk_172_listener() { return ctx.addRule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](173, AddEditLendersComponent_ng_container_173_Template, 5, 4, "ng-container", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "nz-modal", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function AddEditLendersComponent_Template_nz_modal_nzVisibleChange_174_listener($event) { return (ctx.pdf_viewer_object_values["boolean"] = $event); })("nzOnCancel", function AddEditLendersComponent_Template_nz_modal_nzOnCancel_174_listener() { return ctx.handleCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](175, AddEditLendersComponent_ng_container_175_Template, 3, 1, "ng-container", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](176, AddEditLendersComponent_ng_template_176_Template, 2, 0, "ng-template", null, 93, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](131);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](177);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.get_documentArr(ctx.addEditProductForm));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnAfter", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx.apiLoader["formSave"])("disabled", ctx.apiLoader["saveAddNew"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzOkDisabled", !ctx.selectedDocument)("nzWidth", "580px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", ctx.pdf_viewer_object_values["boolean"])("nzTitle", ctx.pdf_viewer_object_values["title"])("nzFooter", _r7);
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__["NzCardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__["NzWaveDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__["NzModalContentDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzOptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__["NzUploadComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__["NzIconDirective"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["[_nghost-%COMP%]     .ant-upload-list-text-container{\n    display: none !important;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LWxlbmRlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QiIsImZpbGUiOiJhZGQtZWRpdC1sZW5kZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmFudC11cGxvYWQtbGlzdC10ZXh0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddEditLendersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-add-edit-lenders",
                templateUrl: "./add-edit-lenders.component.html",
                styleUrls: ["./add-edit-lenders.component.css"],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_7__["NzImageService"] }]; }, null); })();


/***/ }),

/***/ "zZIQ":
/*!*********************************************************!*\
  !*** ./src/app/users/lenders/lenders-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LendersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LendersRoutingModule", function() { return LendersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-permissions */ "qSrz");
/* harmony import */ var _add_edit_lenders_add_edit_lenders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-lenders/add-edit-lenders.component */ "hK0q");
/* harmony import */ var _lenders_list_lenders_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lenders-list/lenders-list.component */ "ZqNU");







const routes = [
    {
        path: '',
        component: _lenders_list_lenders_list_component__WEBPACK_IMPORTED_MODULE_4__["LendersListComponent"],
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"]],
        data: {
            title: 'Lenders List',
            parent: 'Users',
            custom_url: 'lenders',
            permissions: {
                only: 'view_lender',
                redirectTo: 'authentication/error-2'
            }
        },
    },
    {
        path: '',
        data: {
            title: 'Lenders List',
            parent: 'Users',
            custom_url: 'lenders',
            canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"]],
            permissions: {
                only: 'view_lender',
                redirectTo: 'authentication/error-2'
            }
        },
        // component: LendersComponent,
        children: [
            {
                path: 'add',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"]],
                component: _add_edit_lenders_add_edit_lenders_component__WEBPACK_IMPORTED_MODULE_3__["AddEditLendersComponent"],
                data: {
                    title: 'Add Lender',
                    parent: 'Users',
                    custom_url: 'lenders/add',
                    permissions: {
                        only: 'add_lender',
                        redirectTo: 'authentication/error-2'
                    }
                }
            },
            {
                path: 'edit',
                canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"]],
                component: _add_edit_lenders_add_edit_lenders_component__WEBPACK_IMPORTED_MODULE_3__["AddEditLendersComponent"],
                data: {
                    title: 'Edit Lender',
                    parent: 'Users',
                    custom_url: 'lenders/edit',
                    permissions: {
                        only: 'edit_lender',
                        redirectTo: 'authentication/error-2'
                    }
                }
            },
        ]
    },
];
class LendersRoutingModule {
}
LendersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LendersRoutingModule });
LendersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LendersRoutingModule_Factory(t) { return new (t || LendersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LendersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LendersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=users-lenders-lenders-module-es2015.js.map