(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-masters-partners-masters-partners-module"], {
    /***/
    "/I8L":
    /*!***********************************************************************************************!*\
      !*** ./src/app/users/masters-partners/master-partners-list/master-partners-list.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: MasterPartnersListComponent */

    /***/
    function I8L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MasterPartnersListComponent", function () {
        return MasterPartnersListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/radio */
      "bE2y");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/table */
      "rMZv");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/dropdown */
      "Nqz0");
      /* harmony import */


      var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-zorro-antd/menu */
      "Q8cG");
      /* harmony import */


      var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-zorro-antd/page-header */
      "jPNr");
      /* harmony import */


      var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ng-zorro-antd/upload */
      "D9mS");
      /* harmony import */


      var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ng-zorro-antd/popconfirm */
      "KupA");
      /* harmony import */


      var _shared_template_audit_history_audit_history_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../../shared/template/audit-history/audit-history.component */
      "8NRN");
      /* harmony import */


      var _shared_template_double_confirmation_popup_double_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../../shared/template/double-confirmation-popup/double-confirmation-popup.component */
      "thbs");
      /* harmony import */


      var _shared_template_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../../shared/template/change-password/change-password.component */
      "Kz7f");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "TaO5");

      var _c0 = function _c0() {
        return ["/masters-partners/add"];
      };

      function MasterPartnersListComponent_button_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+ Add Master");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      }

      function MasterPartnersListComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_template_21_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.getResultBasedOnSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_td_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzExpandChange", function MasterPartnersListComponent_ng_container_60_td_2_Template_td_nzExpandChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var data_r25 = ctx_r44.$implicit;
            var i_r26 = ctx_r44.index;

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r43.onExpandChange(data_r25.id, $event, i_r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var data_r25 = ctx_r46.$implicit;
          var i_r26 = ctx_r46.index;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpand", ctx_r27.expandSet.has(data_r25.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r26 + 1, "");
        }
      }

      function MasterPartnersListComponent_ng_container_60_td_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzExpandChange", function MasterPartnersListComponent_ng_container_60_td_3_Template_td_nzExpandChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var data_r25 = ctx_r48.$implicit;
            var i_r26 = ctx_r48.index;

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r47.onExpandChange(data_r25.id, $event, i_r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var data_r25 = ctx_r50.$implicit;
          var i_r26 = ctx_r50.index;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpand", ctx_r28.expandSet.has(data_r25.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r28.page - 1) * ctx_r28.globalPageSize + (i_r26 + 1), "");
        }
      }

      function MasterPartnersListComponent_ng_container_60_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_td_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_td_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_td_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return ["../masters-partners/edit"];
      };

      var _c2 = function _c2(a0) {
        return {
          id: a0
        };
      };

      function MasterPartnersListComponent_ng_container_60_li_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, data_r25.id));
        }
      }

      function MasterPartnersListComponent_ng_container_60_ng_container_34_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_ng_container_34_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r53.deleteUserByUserId(data_r25 == null ? null : data_r25.id, false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Inactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_ng_container_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterPartnersListComponent_ng_container_60_ng_container_34_li_1_Template, 3, 0, "li", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !data_r25.is_deleted);
        }
      }

      function MasterPartnersListComponent_ng_container_60_ng_container_35_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_ng_container_35_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

            var data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r58.deleteUserByUserId(data_r25 == null ? null : data_r25.id, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_ng_container_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterPartnersListComponent_ng_container_60_ng_container_35_li_1_Template, 3, 0, "li", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r25.is_deleted);
        }
      }

      function MasterPartnersListComponent_ng_container_60_ng_container_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_ng_container_36_Template_li_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

            var data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r62.storeSelectedId(data_r25 == null ? null : data_r25.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-upload", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Upload Agreement ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMultiple", false)("nzAccept", ".xls, .xlsx, .pdf")("nzBeforeUpload", ctx_r37.beforeUpload);
        }
      }

      function MasterPartnersListComponent_ng_container_60_ng_container_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_ng_container_37_Template_li_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

            var data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r65.storeSelectedId(data_r25 == null ? null : data_r25.id, "get");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Show Agreement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Submitted ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " & \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Document Not Submitted ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Verified ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_8_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_8_span_1_Template_a_nzOnConfirm_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

            var data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

            var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r85.onClickVerifyDoc(data_r71 == null ? null : data_r71.id);
          })("nzOnCancel", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_8_span_1_Template_a_nzOnCancel_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

            var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);

            return ctx_r88.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Plz Click to verify ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_8_span_1_Template, 3, 0, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(data_r71 == null ? null : data_r71.is_verified) && (data_r71 == null ? null : data_r71.document_file_front));
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_10_i_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_10_i_1_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

            var data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

            var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r91.onClickDownloadSelectedDocument(data_r71, "front");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_10_i_1_Template, 1, 0, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71 == null ? null : data_r71.document_file_front);
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_11_i_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_11_i_1_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);

            var data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

            var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r96.storeSelectedId(data_r71, "submitted", "front");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_ng_container_11_i_1_Template, 1, 0, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71 == null ? null : data_r71.document_file_front);
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Submitted ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Document Not Submitted ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_i_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_i_19_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

            var data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r100.onClickDownloadSelectedDocument(data_r71, "back");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_i_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_i_20_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

            var data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r103.storeSelectedId(data_r71, "submitted", "back");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c3 = function _c3() {
        return ["verify_document_master_partner"];
      };

      var _c4 = function _c4() {
        return ["download_document"];
      };

      var _c5 = function _c5() {
        return ["view_document"];
      };

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

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
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Submitted ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " & \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Document Not Submitted ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Verified ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_span_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_span_9_Template_a_nzOnConfirm_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);

            var data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r113.onClickVerifyDoc(data_r71 == null ? null : data_r71.id);
          })("nzOnCancel", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_span_9_Template_a_nzOnCancel_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115);

            var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

            return ctx_r116.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Plz Click to verify ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_i_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_i_11_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119);

            var data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r117.onClickDownloadSelectedDocument(data_r71, "single");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_i_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_i_12_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);

            var data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

            return ctx_r120.storeSelectedId(data_r71, "submitted", "single");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var data_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

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
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_1_Template, 21, 15, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_div_2_Template, 13, 7, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r71 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r71 == null ? null : data_r71.document_master == null ? null : data_r71.document_master.require_front_back);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(data_r71 == null ? null : data_r71.document_master == null ? null : data_r71.document_master.require_front_back));
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterPartnersListComponent_ng_container_60_div_105_div_3_div_1_Template, 3, 2, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.documents);
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No Documents To show ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_105_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-page-header", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-card", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MasterPartnersListComponent_ng_container_60_div_105_div_3_Template, 2, 1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MasterPartnersListComponent_ng_container_60_div_105_div_4_Template, 4, 0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r39.storeDetailId == data_r25.id ? ctx_r39._apiLoader["detailList"] : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.documents == null ? null : data_r25.expandSet.documents.length) > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.documents == null ? null : data_r25.expandSet.documents.length) <= 0);
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_109_div_1_div_17_li_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_div_109_div_1_div_17_li_6_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r134);

            var data_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r132.onClickGetPassword("reset", data_r127);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reset Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_109_div_1_div_17_li_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_container_60_div_109_div_1_div_17_li_7_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r137);

            var data_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r135.onClickGetPassword("show", data_r127);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c6 = function _c6() {
        return ["reset_password_master_partner"];
      };

      var _c7 = function _c7() {
        return ["show_password_master_partner"];
      };

      function MasterPartnersListComponent_ng_container_60_div_109_div_1_div_17_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzClickHide", false)("nzTrigger", "click")("nzPlacement", "bottomRight")("nzDropdownMenu", _r129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c7));
        }
      }

      var _c8 = function _c8() {
        return ["show_password_master_partner", "reset_password_master_partner"];
      };

      function MasterPartnersListComponent_ng_container_60_div_109_div_1_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var data_r127 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r127 == null ? null : data_r127.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r127 == null ? null : data_r127.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c8));
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_109_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MasterPartnersListComponent_ng_container_60_div_109_div_1_Template, 18, 4, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", data_r25 == null ? null : data_r25.expandSet == null ? null : data_r25.expandSet.corporate_admins);
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_110_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " No Corporate Admin Detail's to show ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_127_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "History");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_60_div_127_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("endpoint", "PartnerMaster")("endpoint_id", ctx_r42.storeDetailId);
        }
      }

      var _c9 = function _c9() {
        return ["edit_master_partner"];
      };

      var _c10 = function _c10() {
        return ["toggle_master_partner"];
      };

      var _c11 = function _c11() {
        return ["upload_agreement_master_partner"];
      };

      var _c12 = function _c12() {
        return ["show_agreement_master_partner"];
      };

      var _c13 = function _c13() {
        return ["view_document_master_partner"];
      };

      function MasterPartnersListComponent_ng_container_60_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var data_r25 = ctx.$implicit;

          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](66);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](70);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72);

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
        }
      }

      function MasterPartnersListComponent_ng_template_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Basic Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_template_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact Personal Detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_template_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Banking Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_template_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "KYC Documents");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_template_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Corporate Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_template_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Other Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_ng_container_74_Template(rf, ctx) {
        if (rf & 1) {
          var _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-double-confirmation-popup", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onOkCall", function MasterPartnersListComponent_ng_container_74_Template_app_double_confirmation_popup_onOkCall_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142);

            var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r141.confirmationTrigger();
          })("onCencelCall", function MasterPartnersListComponent_ng_container_74_Template_app_double_confirmation_popup_onCencelCall_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142);

            var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r143.isDelete = false;
            return ctx_r143.selectedUserId = "";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r16.statusOfSelectedLender ? "This action will Activate this account" : "This action will Deactivate this account")("subTitle", !ctx_r16.statusOfSelectedLender ? "if  required, you can activate this account after 15 days." : "if required, you can Deactivate this account after 15 days.")("alertWarning", ctx_r16.statusOfSelectedLender ? "Are your sure ?" : "Are your sure ?")("icon", "assets/images/activate.png")("cancelBtnTxt", "Cancel")("submitBtnTxt", "OK");
        }
      }

      function MasterPartnersListComponent_ng_container_76_Template(rf, ctx) {
        if (rf & 1) {
          var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-change-password", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onOkCall", function MasterPartnersListComponent_ng_container_76_Template_app_change_password_onOkCall_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

            var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r144.onClickChangePassword($event);
          })("onCencelCall", function MasterPartnersListComponent_ng_container_76_Template_app_change_password_onCencelCall_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

            var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r146.toggleChangePassword = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userData", ctx_r17.selectedUserData)("cancelBtnTxt", "Cancel")("submitBtnTxt", "Update");
        }
      }

      function MasterPartnersListComponent_ng_container_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "embed", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r18.sanatizeUrlToSafe(ctx_r18.pdf_viewer_object_values["url"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        }
      }

      function MasterPartnersListComponent_ng_template_79_Template(rf, ctx) {
        if (rf & 1) {
          var _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_ng_template_79_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r148);

            var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r147.handleCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MasterPartnersListComponent_div_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.passwordForAdmin["password"] == null ? null : ctx_r21.passwordForAdmin["password"].password, " ");
        }
      }

      function MasterPartnersListComponent_div_84_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
        }
      }

      var _c14 = function _c14() {
        return ["add_master_partner"];
      };

      var _c15 = function _c15() {
        return [100, 200, 300, 400, 500, 600, 750, 1000];
      };

      var _c16 = function _c16() {
        return {
          x: "1300px",
          y: ""
        };
      }; // import jsPDF from 'jspdf';


      var getBase64 = function getBase64(file) {
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = function () {
            return resolve(reader.result);
          };

          reader.onerror = function (error) {
            return reject(error);
          };
        });
      };

      var MasterPartnersListComponent = /*#__PURE__*/function () {
        function MasterPartnersListComponent(http, message, sanitized, fb) {
          var _this = this;

          _classCallCheck(this, MasterPartnersListComponent);

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
            detailList: false
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

          this.beforeUpload = function (file) {
            console.log(file.name);
            _this.file = file.name;
            _this.uploaded_file = file;
            console.log(file);
            console.log(_this.uploaded_file); // this.updateMCCCodeWithUploadingFile();

            _this.uploadAndShowAgreement('post');

            return false;
          };
        }

        _createClass(MasterPartnersListComponent, [{
          key: "onExpandChange",
          value: function onExpandChange(id, checked, i) {
            this.selectedIndexOfExpand = i;

            if (checked) {
              this.getMasterPartnerById(this.storeDetailId = id, i);
              this.expandSet.add(id); // alert('Clicked On Expand ' + id)
            } else {
              this.expandSet["delete"](id);
            }
          }
        }, {
          key: "updateCheckedSet",
          value: function updateCheckedSet(id, checked) {
            if (checked) {
              this.setOfCheckedId.add(id);
            } else {
              this.setOfCheckedId["delete"](id);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createResetPasswordForm();
            this.selectedTab = 'all';
            this.page = 1;
            this.getMasterPartner();
          }
        }, {
          key: "createResetPasswordForm",
          value: function createResetPasswordForm() {
            this.resetPasswordForm = this.fb.group({
              corporate_admin_id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              new_password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              retype_password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              send_email: [false]
            });
          }
        }, {
          key: "onClickGetPassword",
          value: function onClickGetPassword(action, data) {
            var _this2 = this;

            this.selectedUserId = data === null || data === void 0 ? void 0 : data.id;

            if (action == 'show') {
              this.passwordForAdmin['apiLoader'] = true;
              this.passwordForAdmin['isVisibleModal'] = true;
              this.passwordForAdmin['toggleShoePasswordField'] = true;
              this.http.showPasswordOfCorporateAdmin(data === null || data === void 0 ? void 0 : data.id).subscribe(function (res) {
                console.log(res);
                _this2.passwordForAdmin['apiLoader'] = false;
                _this2.passwordForAdmin['password'] = res === null || res === void 0 ? void 0 : res.data;
              });
            } else {
              this.passwordForAdmin['isVisibleModal'] = true;
              this.passwordForAdmin['toggleShoePasswordField'] = false;
              this.resetPasswordForm.patchValue({
                'corporate_admin_id': data === null || data === void 0 ? void 0 : data.id
              });
            }
          }
        }, {
          key: "onClickResetPassword",
          value: function onClickResetPassword() {
            var _this3 = this;

            for (var _i in this.resetPasswordForm.controls) {
              this.resetPasswordForm.controls[_i].markAsDirty();

              this.resetPasswordForm.controls[_i].updateValueAndValidity();
            }

            if (this.resetPasswordForm.value.send_email == true) {
              this.resetPasswordForm.patchValue({
                'send_email': 0
              });
            } else {
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
              var sendDate = this.resetPasswordForm.value;
              var data = new FormData();

              for (var i in sendDate) {
                // if (sendDate[i]) {
                data.append(i, sendDate[i]); // }
                // }
                // data.append('corporate_limit_settings', JSON.stringify(corporate_limit_settings));
              }

              this.http.resetPasswordForCorporateAdmin(data).subscribe(function (res) {
                console.log(res);

                if (res === null || res === void 0 ? void 0 : res.success) {
                  _this3.message.success(res === null || res === void 0 ? void 0 : res.message);

                  _this3.passwordForAdmin['isVisibleModal'] = false;
                  _this3.passwordForAdmin['apiLoaderOnClick'] = true;
                } else {
                  _this3.message.error(res === null || res === void 0 ? void 0 : res.message);

                  _this3.passwordForAdmin['apiLoaderOnClick'] = true;
                }
              });
            }
          }
        }, {
          key: "onClickChangeTab",
          value: function onClickChangeTab(e) {
            this.page = 1;
            this.globalPageSize = 100;
            this.selectedTab = e;
            this.getMasterPartner();
          }
        }, {
          key: "getResultBasedOnSearch",
          value: function getResultBasedOnSearch() {
            this.page = 1;
            this.getMasterPartner();
          }
        }, {
          key: "getMasterPartnerById",
          value: function getMasterPartnerById(id, i) {
            var _this4 = this;

            this._apiLoader["detailList"] = true;
            this.http.getMasterPartnerById(id).subscribe(function (res) {
              _this4.resetPasswordForm.reset();

              _this4.masterPartnerDetailList.push(res === null || res === void 0 ? void 0 : res.data);

              _this4.masterPartner[i].expandSet = res === null || res === void 0 ? void 0 : res.data;
              _this4._apiLoader["detailList"] = false;
            }, function (err) {
              console.log(err);
              _this4._apiLoader["detailList"] = false;
            });
          }
        }, {
          key: "resetFilter",
          value: function resetFilter() {
            this.page = 1;
            this.searchValue = '';
            this.getMasterPartner();
          }
        }, {
          key: "getMasterPartner",
          value: function getMasterPartner(e) {
            var _this5 = this;

            if (this._apiLoader["list"]) {
              return;
            }

            if (e) {
              this.page = e === null || e === void 0 ? void 0 : e.pageIndex;
              this.globalPageSize = e === null || e === void 0 ? void 0 : e.pageSize;
            }

            var data = {
              // 'user_type_id' : 2
              'page': this.page,
              'limit': this.globalPageSize,
              'name': this.searchValue,
              'partner_nature': 'master',
              'status': this.selectedTab === 'all' ? '' : this.selectedTab === 'active' ? 'active' : this.selectedTab === 'inactive' ? 'inactive' : ''
            }; // if(this.searchValue){
            //   data['']
            // }

            this._apiLoader["list"] = true;
            this.http.getMasterPartner(data).subscribe(function (res) {
              var _a, _b;

              console.log(res);
              _this5.masterPartner = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.results;
              _this5.total_count = (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.total_count;
              _this5._apiLoader["list"] = false;
            }, function (erro) {
              _this5._apiLoader["list"] = false;
            });
          }
        }, {
          key: "onCurrentPageDataChange",
          value: function onCurrentPageDataChange(listOfCurrentPageData) {
            this.listOfCurrentPageData = listOfCurrentPageData;
            this.refreshCheckedStatus();
          }
        }, {
          key: "onItemChecked",
          value: function onItemChecked(id, checked) {
            this.updateCheckedSet(id, checked);
            this.refreshCheckedStatus();
          }
        }, {
          key: "onAllChecked",
          value: function onAllChecked(checked) {
            var _this6 = this;

            this.listOfCurrentPageData.filter(function (_ref) {
              var disabled = _ref.disabled;
              return !disabled;
            }).forEach(function (_ref2) {
              var id = _ref2.id;
              return _this6.updateCheckedSet(id, checked);
            });
            this.refreshCheckedStatus();
          }
        }, {
          key: "refreshCheckedStatus",
          value: function refreshCheckedStatus() {
            var _this7 = this;

            var listOfEnabledData = this.listOfCurrentPageData.filter(function (_ref3) {
              var disabled = _ref3.disabled;
              return !disabled;
            });
            this.checked = listOfEnabledData.every(function (_ref4) {
              var id = _ref4.id;
              return _this7.setOfCheckedId.has(id);
            });
            this.indeterminate = listOfEnabledData.some(function (_ref5) {
              var id = _ref5.id;
              return _this7.setOfCheckedId.has(id);
            }) && !this.checked;
          }
        }, {
          key: "handleCancel",
          value: function handleCancel() {
            this.isDelete = false;
            this.pdf_viewer_object_values['boolean'] = false;
            this.pdf_viewer_object_values['url'] = '';
          }
        }, {
          key: "cancel",
          value: function cancel() {}
        }, {
          key: "onClickVerifyDoc",
          value: function onClickVerifyDoc(id) {
            var _this8 = this;

            var data;
            this.http.verifyUploadedKycDocumentForMaster(id, data).subscribe(function (res) {
              _this8.message.success(res === null || res === void 0 ? void 0 : res.message);

              _this8.getMasterPartnerById(_this8.storeDetailId, _this8.selectedIndexOfExpand);

              console.log(res);
            });
          }
        }, {
          key: "confirmationTrigger",
          value: function confirmationTrigger() {
            var _this9 = this;

            this.http.deleteMasterUserByUserId(this.selectedUserId).subscribe(function (res) {
              var _a;

              if (res === null || res === void 0 ? void 0 : res.success) {
                _this9.message.success(res === null || res === void 0 ? void 0 : res.message);
              } else {
                _this9.message.error((_a = res === null || res === void 0 ? void 0 : res.message) === null || _a === void 0 ? void 0 : _a[0]);
              }

              _this9.getMasterPartner();

              _this9.isDelete = false;
            }, function (err) {
              _this9.isDelete = false;
            });
          }
        }, {
          key: "deleteUserByUserId",
          value: function deleteUserByUserId(id, action) {
            this.statusOfSelectedLender = action;
            this.selectedUserId = id;
            this.isDelete = true;
          }
        }, {
          key: "onClickChangePassword",
          value: function onClickChangePassword(e) {
            var _this10 = this;

            console.log('event to execute');
            console.log(e);
            this.http.changePasswordByAdmin(e).subscribe(function (res) {
              _this10.message.success('Password Updated Successfully');

              _this10.toggleChangePassword = false;
            }, function (err) {
              _this10.toggleChangePassword = false;
            });
          }
        }, {
          key: "changePassword",
          value: function changePassword(data) {
            var _a;

            this.selectedUserData = [];
            var selectedData = {
              id: (_a = data === null || data === void 0 ? void 0 : data.user) === null || _a === void 0 ? void 0 : _a.id,
              email: data === null || data === void 0 ? void 0 : data.contact_person_email,
              phone: data === null || data === void 0 ? void 0 : data.contact_person_phone,
              name: data === null || data === void 0 ? void 0 : data.name
            };
            this.selectedUserData.push(selectedData); // this.selectedUserData = data;

            console.log(this.selectedUserData);
            this.toggleChangePassword = true;
          }
        }, {
          key: "sanatizeUrlToSafe",
          value: function sanatizeUrlToSafe(value) {
            // let data = 'https://devadminapi.fatakpay.com/media/nbfc_agreements/2022/02/11/djangogirls-tutorial-en_DkLZGLR.pdf'
            return this.sanitized.bypassSecurityTrustResourceUrl(value);
          }
        }, {
          key: "storeSelectedId",
          value: function storeSelectedId(id, action, type) {
            var _a;

            console.log(id);
            this.selectedIdForAgreement = id;

            if (action === 'get') {
              this.uploadAndShowAgreement('get');
            } else if (action === 'submitted') {
              var generateloader = this.message.loading('Generating Report..', {
                nzDuration: 0
              }).messageId;
              this.pdf_viewer_object_values['title'] = 'Show ' + ((_a = id === null || id === void 0 ? void 0 : id.document_master) === null || _a === void 0 ? void 0 : _a.name);

              if (type == 'single') {
                this.pdf_viewer_object_values['url'] = id === null || id === void 0 ? void 0 : id.document_file;
              } else if (type == 'front') {
                this.pdf_viewer_object_values['url'] = id === null || id === void 0 ? void 0 : id.document_file_front;
              } else if (type == 'back') {
                this.pdf_viewer_object_values['url'] = id === null || id === void 0 ? void 0 : id.document_file_back;
              }

              this.pdf_viewer_object_values['boolean'] = true;
              this.message.remove(generateloader);
            }
          }
        }, {
          key: "onClickDownloadSelectedDocument",
          value: function onClickDownloadSelectedDocument(e, action) {
            // var data = new Blob([e?.document_file]);
            // FileSaver.saveAs(data,  `${e?.file_name}`);
            if (action == 'front') {
              var data = new Blob([e === null || e === void 0 ? void 0 : e.document_file_front], {
                type: 'text/plain;charset=utf-8'
              });
              file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, "Front_Doc");
            } else if (action == 'back') {
              var data = new Blob([e === null || e === void 0 ? void 0 : e.document_file_back], {
                type: 'text/plain;charset=utf-8'
              });
              file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, "Back_Doc");
            } else if (action == 'single') {
              var data = new Blob([e === null || e === void 0 ? void 0 : e.document_file], {
                type: 'text/plain;charset=utf-8'
              });
              file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, "Document_Preview");
            }
          } // downloadPdf(base64String, fileName) {
          //   const source = `data:application/pdf;base64,${base64String}`;
          //   const link = document.createElement("a");
          //   link.href = source;
          //   link.download = `${fileName}.pdf`
          //   link.click();
          // }

        }, {
          key: "uploadAndShowAgreement",
          value: function uploadAndShowAgreement(action) {
            var _this11 = this;

            var data = new FormData();
            var endPoint = 'master';
            data.append('file', this.uploaded_file);

            if (action === 'post') {
              var generateloader = this.message.loading('Uploading Document..', {
                nzDuration: 0
              }).messageId;
              this.http.uploadAndShowAgreement(endPoint, 'post', this.selectedIdForAgreement, data).subscribe(function (res) {
                var _a;

                _this11.message.remove(generateloader);

                console.log(res);

                if (res === null || res === void 0 ? void 0 : res.success) {
                  _this11.message.success(res === null || res === void 0 ? void 0 : res.message);
                } else {
                  _this11.message.error((_a = res === null || res === void 0 ? void 0 : res.message) === null || _a === void 0 ? void 0 : _a[0]);
                }
              }, function (error) {
                _this11.message.remove(generateloader);

                console.log(error);
              });
            } else {
              var _generateloader = this.message.loading('Generating Report..', {
                nzDuration: 0
              }).messageId;
              this.http.uploadAndShowAgreement(endPoint, 'get', this.selectedIdForAgreement).subscribe(function (res) {
                // pdfViewerAndDownload(){
                if (res.success) {
                  _this11.pdf_viewer_object_values['title'] = 'Show Agreement';
                  _this11.pdf_viewer_object_values['url'] = res === null || res === void 0 ? void 0 : res.data.agreement;
                  _this11.pdf_viewer_object_values['boolean'] = true;

                  _this11.message.remove(_generateloader);
                } else {
                  _this11.message.remove(_generateloader);

                  _this11.message.error('No Reports To Generate..');
                } // }

              }, function (error) {
                _this11.message.remove(_generateloader);

                console.log(error);
              });
            }
          }
        }]);

        return MasterPartnersListComponent;
      }();

      MasterPartnersListComponent.ɵfac = function MasterPartnersListComponent_Factory(t) {
        return new (t || MasterPartnersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
      };

      MasterPartnersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MasterPartnersListComponent,
        selectors: [["app-master-partners-list"]],
        decls: 85,
        vars: 40,
        consts: [[1, "row", "mb-md-3"], [1, "col-md-6", "mb-md-0"], [3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "all", 1, "mr-md-2", "mr-2", "px-4", "mb-md-0", "mb-3", "border-radius-2"], ["nz-radio-button", "", "nzValue", "active", 1, "mr-md-2", "mr-2", "px-4", "mb-md-0", "mb-3", "border-radius-2"], ["nz-radio-button", "", "nzValue", "inactive", 1, "mr-md-2", "mr-2", "px-4", "mb-md-0", "mb-3", "border-radius-2"], [1, "col-md-6", "col-12", "my-md-0", "my-3", "d-flex", "justify-content-end"], ["nz-button", "", "class", "text-primary", 3, "routerLink", 4, "ngxPermissionsOnly"], [1, "row"], [1, "w-100"], [1, "col-md-4", "mb-3", "d-flex"], ["nzSearch", "", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "Search text", 3, "ngModel", "keyup.enter", "ngModelChange"], ["suffixIconButton", ""], ["nz-button", "", "nzType", "default", "nzShape", "circle", "nz-tooltip", "", "nzTooltipTitle", "Reset Filter", 1, "mx-2", 3, "click"], ["nz-icon", "", "nzType", "undo"], [1, "col-md-8", "mb-3", "d-flex", "justify-content-md-end"], [1, "accordianLoanApp"], [3, "nzTotal", "nzFrontPagination", "nzLoading", "nzShowSizeChanger", "nzPageSize", "nzPageSizeOptions", "nzPageIndex", "nzData", "nzScroll", "nzQueryParams"], ["rowspan", "2", "nzWidth", "100px"], ["rowspan", "2"], ["rowspan", "3", "nzWidth", "150px"], ["colspan", "3", 1, "text-left"], ["rowspan", "2", "nzWidth", "8rem", "nzRight", "", 1, "pr-0"], [4, "ngFor", "ngForOf"], ["basicDetail", ""], ["contactPersonDetail", ""], ["bankingDetail", ""], ["kycDocument", ""], ["adminDetail", ""], ["otherDetails", ""], [3, "nzWidth", "nzVisible", "nzFooter", "nzClosable", "nzVisibleChange", "nzOnCancel"], [4, "nzModalContent"], ["nzTitle", "Change Password", 3, "nzWidth", "nzVisible", "nzFooter", "nzClosable", "nzOnCancel", "nzVisibleChange"], ["nzHeight", "50vw", "nzWidth", "60vw", "nzKeyboard", "true", 3, "nzVisible", "nzTitle", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalFooter", ""], [3, "nzTitle", "nzWidth", "nzVisible", "nzOkLoading", "nzFooter", "nzClosable", "nzVisibleChange", "nzOnOk", "nzOnCancel"], [3, "nzLoading"], ["class", "row", 4, "ngIf"], ["nz-button", "", 1, "text-primary", 3, "routerLink"], ["nz-button", "", "nzType", "secondary", "nzSearch", "", 3, "click"], ["nz-icon", "", "nzType", "search"], [3, "nzExpand", "nzExpandChange", 4, "ngIf"], [4, "ngIf"], ["nzWidth", "8rem", "nzRight", "", 1, "pr-0"], ["nz-dropdown", "", 1, "text-dark", "font-size-20", 3, "nzClickHide", "nzTrigger", "nzPlacement", "nzDropdownMenu"], ["src", "assets/images/ellipsis.png", "alt", "", "width", "30"], ["latestUploadDropDown", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "routerLink", "queryParams", 4, "ngxPermissionsOnly"], [4, "ngxPermissionsOnly"], [3, "nzExpand"], [1, "justify-content-center"], [1, "site-page-header", "text-center", "w-25", "p-1", "rounded", "bg-gray-lightest", "mb-2", 3, "nzTitle"], [1, "mb-md-5", 3, "nzLoading"], [1, "col-md-6"], [1, "d-flex", "flex-column"], [1, "site-page-header", "text-center", "rounded", "w-25", "p-1", "bg-gray-lightest", "my-2", 3, "nzTitle"], [1, "col-md-4"], ["class", "justify-content-center", 4, "ngxPermissionsOnly"], [1, "site-page-header", "acc-bg-light", "mb-2", 3, "nzTitle"], [1, "d-flex"], ["class", "my-3", 4, "ngIf"], [3, "nzExpand", "nzExpandChange"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "outline"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "outline"], ["nz-menu-item", "", 3, "routerLink", "queryParams"], [1, "m-l-5"], ["nz-menu-item", "", 3, "click", 4, "ngIf"], ["nz-menu-item", "", 3, "click"], ["nzSize", "large", 1, "d-flex", "pl-1", "align-items-left", 2, "cursor", "pointer", 3, "nzMultiple", "nzAccept", "nzBeforeUpload"], ["class", "col-md-6 mb-2", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mb-2"], ["class", "d-flex flex-column", 4, "ngIf"], [1, "mb-2"], [1, "mx-2"], ["style", "cursor: pointer;", "class", "mr-3", "nz-icon", "", "nzType", "download", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["style", "cursor: pointer;", "class", "mr-3", "nz-icon", "", "nzType", "eye", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure you want to verify corresponding document ?", "nzPopconfirmPlacement", "bottom", 3, "nzOnConfirm", "nzOnCancel"], ["nz-icon", "", "nzType", "download", "nzTheme", "outline", 1, "mr-3", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline", 1, "mr-3", 2, "cursor", "pointer", 3, "click"], ["class", "col-md-12 mb-2", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mb-2"], [1, "col-4"], ["class", "col-4 align-self-center text-right", 4, "ngxPermissionsOnly"], [1, "col-4", "align-self-center", "text-right"], ["showPassword", "nzDropdownMenu"], ["nz-menu-item", "", 3, "click", 4, "ngxPermissionsOnly"], [1, "my-3"], [1, "site-page-header", "acc-bg-light", 3, "nzTitle"], [1, "mb-md-0", "border"], [1, "col-12"], [3, "endpoint", "endpoint_id"], ["history", ""], [1, "ml-md-2"], [1, "mb-0"], ["nz-icon", "", "nzType", "file", "nzTheme", "outline", 1, "mr-2"], [3, "title", "subTitle", "alertWarning", "icon", "cancelBtnTxt", "submitBtnTxt", "onOkCall", "onCencelCall"], [3, "userData", "cancelBtnTxt", "submitBtnTxt", "onOkCall", "onCencelCall"], [1, "pdf_viewer_container"], ["width", "100%", 2, "height", "25rem", 3, "src"], ["nz-button", "", "nzType", "primary", 3, "click"], [1, "col-6"], ["nz-form", "", 3, "formGroup"], [1, "col-md-12"], ["nzFor", "name", "nzRequired", "", 1, "text-left", 3, "nzSm"], ["nzErrorTip", "Please Add New Password!", 3, "nzSm"], ["nz-input", "", "type", "text", "formControlName", "new_password", "placeholder", "New Password"], ["nzErrorTip", "Please Add Confirm Password!", 3, "nzSm"], ["nz-input", "", "type", "text", "formControlName", "retype_password", "placeholder", "Confirm Password"], ["nzErrorTip", "Please Select Action!", 3, "nzSm"], ["nz-checkbox", "", "formControlName", "send_email"]],
        template: function MasterPartnersListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-radio-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MasterPartnersListComponent_Template_nz_radio_group_ngModelChange_3_listener($event) {
              return ctx.selectedTab = $event;
            })("ngModelChange", function MasterPartnersListComponent_Template_nz_radio_group_ngModelChange_3_listener($event) {
              return ctx.onClickChangeTab($event);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function MasterPartnersListComponent_Template_input_keyup_enter_20_listener() {
              return ctx.getResultBasedOnSearch();
            })("ngModelChange", function MasterPartnersListComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.searchValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MasterPartnersListComponent_ng_template_21_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MasterPartnersListComponent_Template_button_click_23_listener() {
              return ctx.resetFilter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nz-table", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzQueryParams", function MasterPartnersListComponent_Template_nz_table_nzQueryParams_27_listener($event) {
              return ctx.getMasterPartner($event);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function MasterPartnersListComponent_Template_nz_modal_nzVisibleChange_73_listener($event) {
              return ctx.isDelete = $event;
            })("nzOnCancel", function MasterPartnersListComponent_Template_nz_modal_nzOnCancel_73_listener() {
              ctx.isDelete = false;
              return ctx.selectedUserId = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, MasterPartnersListComponent_ng_container_74_Template, 2, 6, "ng-container", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "nz-modal", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnCancel", function MasterPartnersListComponent_Template_nz_modal_nzOnCancel_75_listener() {
              return ctx.toggleChangePassword = false;
            })("nzVisibleChange", function MasterPartnersListComponent_Template_nz_modal_nzVisibleChange_75_listener($event) {
              return ctx.toggleChangePassword = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, MasterPartnersListComponent_ng_container_76_Template, 2, 3, "ng-container", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "nz-modal", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function MasterPartnersListComponent_Template_nz_modal_nzVisibleChange_77_listener($event) {
              return ctx.pdf_viewer_object_values["boolean"] = $event;
            })("nzOnCancel", function MasterPartnersListComponent_Template_nz_modal_nzOnCancel_77_listener() {
              return ctx.handleCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, MasterPartnersListComponent_ng_container_78_Template, 3, 1, "ng-container", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, MasterPartnersListComponent_ng_template_79_Template, 2, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "nz-modal", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function MasterPartnersListComponent_Template_nz_modal_nzVisibleChange_81_listener($event) {
              return ctx.passwordForAdmin["isVisibleModal"] = $event;
            })("nzOnOk", function MasterPartnersListComponent_Template_nz_modal_nzOnOk_81_listener() {
              return ctx.onClickResetPassword();
            })("nzOnCancel", function MasterPartnersListComponent_Template_nz_modal_nzOnCancel_81_listener() {
              ctx.passwordForAdmin["isVisibleModal"] = false;
              return ctx.selectedUserId = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "nz-card", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, MasterPartnersListComponent_div_83_Template, 5, 1, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, MasterPartnersListComponent_div_84_Template, 20, 7, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](80);

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
          }
        },
        directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioButtonDirective"], ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__["NzCardComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__["NzWaveDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzCellFixedDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalContentDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterLink"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropDownADirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropDownDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_19__["NzMenuDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTrExpandDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableFixedRowComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_20__["NzPageHeaderComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTdAddOnComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_19__["NzMenuItemDirective"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_21__["NzUploadComponent"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__["NzPopconfirmDirective"], _shared_template_audit_history_audit_history_component__WEBPACK_IMPORTED_MODULE_23__["AuditHistoryComponent"], _shared_template_double_confirmation_popup_double_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_24__["DoubleConfirmationPopupComponent"], _shared_template_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_25__["ChangePasswordComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__["NzFormControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_28__["NzCheckboxComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc3Rlci1wYXJ0bmVycy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUciLCJmaWxlIjoibWFzdGVyLXBhcnRuZXJzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIDpob3N0IDo6bmctZGVlcCAuYW50LXRhYmxlLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1NzhweCkgIWltcG9ydGFudDtcbn0gKi8iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MasterPartnersListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-master-partners-list',
            templateUrl: './master-partners-list.component.html',
            styleUrls: ['./master-partners-list.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "JZK+":
    /*!***************************************************************************!*\
      !*** ./src/app/users/masters-partners/masters-partners-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: MastersPartnersRoutingModule */

    /***/
    function JZK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MastersPartnersRoutingModule", function () {
        return MastersPartnersRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var _add_edit_masters_add_edit_masters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-edit-masters/add-edit-masters.component */
      "Sv+W");
      /* harmony import */


      var _master_partners_list_master_partners_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./master-partners-list/master-partners-list.component */
      "/I8L");

      var routes = [{
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
      }, {
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
        children: [{
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
        }, {
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
        }]
      }];

      var MastersPartnersRoutingModule = function MastersPartnersRoutingModule() {
        _classCallCheck(this, MastersPartnersRoutingModule);
      };

      MastersPartnersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MastersPartnersRoutingModule
      });
      MastersPartnersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MastersPartnersRoutingModule_Factory(t) {
          return new (t || MastersPartnersRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MastersPartnersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MastersPartnersRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Sv+W":
    /*!***************************************************************************************!*\
      !*** ./src/app/users/masters-partners/add-edit-masters/add-edit-masters.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: AddEditMastersComponent */

    /***/
    function SvW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEditMastersComponent", function () {
        return AddEditMastersComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/image */
      "6ekq");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/radio */
      "bE2y");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-zorro-antd/divider */
      "5vDB");
      /* harmony import */


      var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-zorro-antd/upload */
      "D9mS");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "TaO5");

      function AddEditMastersComponent_nz_option_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 83);
        }

        if (rf & 2) {
          var item_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r11.id)("nzLabel", item_r11.name);
        }
      }

      function AddEditMastersComponent_nz_option_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 83);
        }

        if (rf & 2) {
          var item_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r12.id)("nzLabel", item_r12.business_type);
        }
      }

      function AddEditMastersComponent_nz_option_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 83);
        }

        if (rf & 2) {
          var item_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r13.id)("nzLabel", item_r13.business_nature);
        }
      }

      function AddEditMastersComponent_ng_template_71_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-divider", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 87, 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMastersComponent_ng_template_71_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r15.addItem(_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Add Nature");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r4.apiLoader["nature"])("disabled", !_r14.value);
        }
      }

      function AddEditMastersComponent_ng_container_127_i_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMastersComponent_ng_container_127_i_17_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var k_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r21.deleteDocumentByDocumentId(k_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddEditMastersComponent_ng_container_127_i_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMastersComponent_ng_container_127_i_19_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r24.onClickShowUploadedDocument(item_r17, "documents");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddEditMastersComponent_ng_container_127_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzChange", function AddEditMastersComponent_ng_container_127_Template_nz_upload_nzChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);

            var k_r18 = ctx.index;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r27.onUpload($event, k_r18, "name");
          });

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
        }

        if (rf & 2) {
          var item_r17 = ctx.$implicit;
          var k_r18 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

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
        }
      }

      function AddEditMastersComponent_button_156_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMastersComponent_button_156_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r29.onClickSaveExistingForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Save & Add New");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r6.apiLoader["saveAddNew"])("disabled", ctx_r6.apiLoader["formSave"]);
        }
      }

      function AddEditMastersComponent_ng_container_161_ng_container_4_nz_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 83);
        }

        if (rf & 2) {
          var item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r32)("nzLabel", item_r32.name);
        }
      }

      function AddEditMastersComponent_ng_container_161_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddEditMastersComponent_ng_container_161_ng_container_4_Template_ng_container_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r36.checkItem($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddEditMastersComponent_ng_container_161_ng_container_4_nz_option_1_Template, 1, 2, "nz-option", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r32 = ctx.$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r31.documentFlagArray.includes(item_r32));
        }
      }

      function AddEditMastersComponent_ng_container_161_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-label", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Select Document");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-select", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddEditMastersComponent_ng_container_161_Template_nz_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r38.selectedDocument = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddEditMastersComponent_ng_container_161_ng_container_4_Template, 2, 1, "ng-container", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r7.selectedDocument);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.documentArray);
        }
      }

      function AddEditMastersComponent_ng_container_163_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "embed", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r8.sanatizeUrlToSafe, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
        }
      }

      function AddEditMastersComponent_ng_template_164_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMastersComponent_ng_template_164_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r40.handleCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var getBase64 = function getBase64(file) {
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = function () {
            return resolve(reader.result);
          };

          reader.onerror = function (error) {
            return reject(error);
          };
        });
      };

      var AddEditMastersComponent = /*#__PURE__*/function () {
        function AddEditMastersComponent(fb, router, http, sanitized, route, message, nzImageService) {
          _classCallCheck(this, AddEditMastersComponent);

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
            'nature': false
          };
          this.pdf_viewer_object_values = {
            'boolean': false,
            'url': '',
            'title': ''
          };
          this.listOfDocumentWithFlag = [];
          this.documentFlagArray = []; // onClickShowUploadedDocument(e){
          // if(e?.value?.documents?.uid){
          //   saveAs(e?.value?.documents);
          // } else {
          //   var data = new Blob([e?.value?.documents], { type: 'text/plain;charset=utf-8' });
          //   FileSaver.saveAs(data,  `${e?.value?.document_name}`); 
          // }
          // }

          this.customUpload = function (file) {
            var data = []; // data.push({documents: file});
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

        _createClass(AddEditMastersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.createMasterProductForm();
            this.route.queryParams.subscribe(function (params) {
              if (params['id']) {
                _this12.isEdit = true;
                _this12.masterPartnerId = params['id'];

                if (_this12.masterPartnerId) {
                  _this12.fetchMasterPartner();

                  _this12.getListOfBusinessType();

                  _this12.getListOfBusinessNature();

                  _this12.getListOfStates();
                }
              } else {
                _this12.isEdit = false; // this.masterParnerPayout = null
                // this.createMasterProductForm();
                // this.getListOfDocumentRequired();
              }
            });
          }
        }, {
          key: "addItem",
          value: function addItem(e) {
            var _this13 = this;

            var value = e.value;
            console.log('Working', value);

            if (value) {
              this.apiLoader['nature'] = true;
              var data = {
                "name": value
              };
              this.http.createNewBusinessNature(data).subscribe(function (res) {
                if (res === null || res === void 0 ? void 0 : res.success) {
                  _this13.apiLoader['nature'] = false;

                  _this13.getListOfBusinessNature();

                  _this13.message.success(res === null || res === void 0 ? void 0 : res.message);
                } else {
                  _this13.apiLoader['nature'] = false;

                  _this13.message.error(res === null || res === void 0 ? void 0 : res.message);
                }
              });
            } else {
              this.message.error('Plz add Valid Business Nature');
            }
          }
        }, {
          key: "getListOfBusinessNature",
          value: function getListOfBusinessNature() {
            var _this14 = this;

            var action = 'get-business-natures';
            this.http.fetchDetailForUserModuleDropDown(action).subscribe(function (res) {
              _this14.businessNatureArr = res === null || res === void 0 ? void 0 : res.data;
            });
          }
        }, {
          key: "getListOfBusinessType",
          value: function getListOfBusinessType() {
            var _this15 = this;

            var action = 'get-business-types';
            this.http.fetchDetailForUserModuleDropDown(action).subscribe(function (res) {
              _this15.businessTypeArr = res === null || res === void 0 ? void 0 : res.data;
            });
          }
        }, {
          key: "getListOfStates",
          value: function getListOfStates() {
            var _this16 = this;

            var action = 'get-states';
            this.http.fetchDetailForUserModuleDropDown(action).subscribe(function (res) {
              console.log(res);
              _this16.stateArr = res === null || res === void 0 ? void 0 : res.data;
            });
          }
        }, {
          key: "onSearchGetList",
          value: function onSearchGetList(e, action) {
            // if(action === 'sta'){
            clearTimeout(this.debounce);
            this.debounce = setTimeout(function () {// this.getListOfCorp(search_param);
            }, 500); // }
          }
        }, {
          key: "fetchMasterPartner",
          value: function fetchMasterPartner() {
            var _this17 = this;

            this.http.getMasterPartnerById(this.masterPartnerId).subscribe(function (res) {
              console.log(res);

              _this17.setRetrievedDataInForm(res === null || res === void 0 ? void 0 : res.data); // this.createMasterProductForm(res?.data);

            });
          }
        }, {
          key: "setRetrievedDataInForm",
          value: function setRetrievedDataInForm(data) {
            var _a;

            for (var i in this.addEditProductForm.value) {
              if (i == 'business_nature' || i == 'business_type' || i == 'state') {
                data[i] = (_a = data[i]) === null || _a === void 0 ? void 0 : _a.id;
              }

              if (i != 'document_data') {
                if (data[i]) {
                  this.addEditProductForm.controls[i].setValue(data[i], {
                    emitEvent: false
                  });
                }
              }
            }

            this.setFormData(data);
          }
        }, {
          key: "setFormData",
          value: function setFormData(data) {
            var _this18 = this;

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
              var documentArray = [];
              (_a = data.documents) === null || _a === void 0 ? void 0 : _a.forEach(function (element) {
                var _a, _b, _c, _d, _e, _f, _g, _h;

                var documents;

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
                    isdelete: false
                  };
                  documentArray.push(documents);

                  _this18.addSkills(documents);
                } else if (!((_e = element === null || element === void 0 ? void 0 : element.document_master) === null || _e === void 0 ? void 0 : _e.require_front_back)) {
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
                    isdelete: false
                  };

                  if ((documents === null || documents === void 0 ? void 0 : documents.pk) == 3) {
                    (_h = _this18.documentArray) === null || _h === void 0 ? void 0 : _h.forEach(function (entity, index) {
                      if (entity.pk == (element === null || element === void 0 ? void 0 : element.document_master["id"])) {
                        _this18.documentArray.splice(index, 1);
                      }
                    });
                  }

                  _this18.addSkills(documents);
                } // this.documentArray?.forEach((entity, index) => {
                //   if (entity.pk == element?.document_master["id"]) {
                //     this.documentArray.splice(index, 1);
                //   }
                // });
                // this.addSkills(documents);

              });
            }
          }
        }, {
          key: "onClickOpenPopUp",
          value: function onClickOpenPopUp(e) {
            if ((e === null || e === void 0 ? void 0 : e.pointerType) == 'mouse') {
              this.isVisible = true;
            }
          }
        }, {
          key: "omit_special_char",
          value: function omit_special_char(event) {
            // to avoid special Character
            // var k;
            // k = event.charCode;  //         k = event.keyCode;  (Both can be used)
            // return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
            // to avoid special Character && Number
            var charCode = event.keyCode;
            if (charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123 || charCode == 32 || charCode == 8) return true;else return false;
          }
        }, {
          key: "createMasterProductForm",
          value: function createMasterProductForm(data) {
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
              master: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });

            if (data) {
              this.setFormData(data);
            }
          }
        }, {
          key: "deleteDocumentByDocumentId",
          value: function deleteDocumentByDocumentId(i) {
            var _this19 = this;

            var _a, _b, _c, _d, _e, _f, _g;

            var fileName = this.addEditProductForm.get("document_data");
            var master = (_b = (_a = fileName.controls) === null || _a === void 0 ? void 0 : _a[i].value) === null || _b === void 0 ? void 0 : _b.document_master;
            var selectedFile = (_c = fileName.controls) === null || _c === void 0 ? void 0 : _c[i].value;

            if (!((_e = (_d = fileName.controls) === null || _d === void 0 ? void 0 : _d[i].value) === null || _e === void 0 ? void 0 : _e.id)) {
              var document = {
                name: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.label_name,
                pk: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.document_master,
                front_back_flag: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.front_back_flag,
                display_name: null,
                display_name_front: (selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.name) + " Front",
                display_name_back: (selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.name) + " Back",
                isdelete: false
              };

              if ((document === null || document === void 0 ? void 0 : document.pk) == 3) {
                this.documentArray.push(document);
              }

              this.message.success(((_g = (_f = fileName.controls) === null || _f === void 0 ? void 0 : _f[i].value) === null || _g === void 0 ? void 0 : _g.label_name) + " Document Deleted");
              fileName.removeAt(i);
              this.selectedDocument = null;
            } else {
              this.http.deleteMasterDocumentByDocumentId(selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.id).subscribe(function (res) {
                var _a, _b;

                var document = {
                  name: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.label_name,
                  pk: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.document_master,
                  front_back_flag: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.front_back_flag
                };

                if ((document === null || document === void 0 ? void 0 : document.pk) == 3) {
                  _this19.documentArray.push(document);
                }

                _this19.message.success(((_b = (_a = fileName.controls) === null || _a === void 0 ? void 0 : _a[i].value) === null || _b === void 0 ? void 0 : _b.label_name) + " Document Deleted");

                fileName.removeAt(i);
                _this19.selectedDocument = null;
              });
            }
          }
        }, {
          key: "getListOfDocumentRequired",
          value: function getListOfDocumentRequired() {
            var _this20 = this;

            this.http.getListOfDocumentRequired().subscribe(function (res) {
              var _a;

              var data = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.results;
              data.map(function (res) {
                if ((res === null || res === void 0 ? void 0 : res.pk) == 7 || (res === null || res === void 0 ? void 0 : res.pk) == 3) {
                  var otherDoc = {
                    pk: res === null || res === void 0 ? void 0 : res.pk,
                    name: res === null || res === void 0 ? void 0 : res.name,
                    front_back_flag: res === null || res === void 0 ? void 0 : res.front_back_flag
                  };

                  _this20.documentArray.push(otherDoc);
                }
              }); // this.documentArray = res?.data?.results;
            });
          }
        }, {
          key: "addRule",
          value: function addRule() {
            var _a, _b;

            if (((_a = this.selectedDocument) === null || _a === void 0 ? void 0 : _a.pk) == 3) {
              this.documentFlagArray.push(this.selectedDocument);
            }

            var storeSelectedData = this.selectedDocument;

            if ((_b = this.selectedDocument) === null || _b === void 0 ? void 0 : _b.front_back_flag) {
              var data;
              data = {
                front_back_flag: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.front_back_flag,
                name: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.name,
                display_name: null,
                isdelete: false,
                display_name_front: (storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.name) + " Front",
                display_name_back: (storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.name) + " Back",
                pk: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.pk
              };
              this.addSkills(data); // data = {
              //   front_back_flag: storeSelectedData?.front_back_flag,
              //   name: storeSelectedData?.name,
              //   display_name: storeSelectedData?.name + " Back",
              //   isdelete: true,
              //   pk: storeSelectedData?.pk
              // }
              // this.addSkills(data);
            } else {
              var _data;

              _data = {
                front_back_flag: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.front_back_flag,
                name: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.name,
                display_name: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.name,
                display_name_front: null,
                display_name_back: null,
                isdelete: false,
                pk: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.pk
              };
              this.addSkills(_data);
            }

            this.isVisible = false;
          }
        }, {
          key: "newSkill",
          value: function newSkill(data) {
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
              is_verified: [(data === null || data === void 0 ? void 0 : data.is_verified) ? data === null || data === void 0 ? void 0 : data.is_verified : false]
            });
          }
        }, {
          key: "get_underwritingArr",
          value: function get_underwritingArr(form) {
            return form.controls.document_data.controls;
          }
        }, {
          key: "handleCancel",
          value: function handleCancel() {
            this.isVisible = false;
            this.pdf_viewer_object_values['boolean'] = false;
            this.pdf_viewer_object_values['url'] = '';
          } // this.fb.array([])

        }, {
          key: "onUpload",
          value: function onUpload(e, i, action) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m; //   if(action == 'upload'){
            //   console.log(e?.file?.originFileObj)
            //   // this.index = i;
            //   let fileName = this.addEditProductForm.get('document_data') as FormArray;
            //   fileName.controls?.[i].patchValue({document_name: e?.file?.name});
            //   let value = this.addEditProductForm.get('document_data') as FormArray;
            //   value.controls?.[i].patchValue({documents: e?.file?.originFileObj});
            // }


            var fileName = this.addEditProductForm.get("document_data");
            var value = this.addEditProductForm.get("document_data");

            if (action == 'name') {
              (_a = fileName.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({
                document_name: (_b = e === null || e === void 0 ? void 0 : e.file) === null || _b === void 0 ? void 0 : _b.name
              });
              (_c = value.controls) === null || _c === void 0 ? void 0 : _c[i].patchValue({
                documents: (_d = e === null || e === void 0 ? void 0 : e.file) === null || _d === void 0 ? void 0 : _d.originFileObj
              });
            } else if (action == 'name_front') {
              (_e = fileName.controls) === null || _e === void 0 ? void 0 : _e[i].patchValue({
                document_name_front: (_f = e === null || e === void 0 ? void 0 : e.file) === null || _f === void 0 ? void 0 : _f.name
              });
              (_g = value.controls) === null || _g === void 0 ? void 0 : _g[i].patchValue({
                documents_front: (_h = e === null || e === void 0 ? void 0 : e.file) === null || _h === void 0 ? void 0 : _h.originFileObj
              });
            } else if (action == 'name_back') {
              (_j = fileName.controls) === null || _j === void 0 ? void 0 : _j[i].patchValue({
                document_name_back: (_k = e === null || e === void 0 ? void 0 : e.file) === null || _k === void 0 ? void 0 : _k.name
              });
              (_l = value.controls) === null || _l === void 0 ? void 0 : _l[i].patchValue({
                documents_back: (_m = e === null || e === void 0 ? void 0 : e.file) === null || _m === void 0 ? void 0 : _m.originFileObj
              });
            }
          }
        }, {
          key: "addSkills",
          value: function addSkills(data) {
            this.skills.push(this.newSkill(data));
          }
        }, {
          key: "removeSkill",
          value: function removeSkill(i) {
            this.skills.removeAt(i);
          }
        }, {
          key: "onClickSubmitForm",
          value: function onClickSubmitForm() {
            var _this21 = this;

            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;

            for (var _i2 in this.addEditProductForm.controls) {
              this.addEditProductForm.controls[_i2].markAsDirty();

              this.addEditProductForm.controls[_i2].updateValueAndValidity();
            }

            var saveDoc = [];

            if (!this.addEditProductForm.valid) {
              this.message.error('Mandatory Fields Are missing ', {
                nzDuration: 5000
              });
            }

            var sendDate = this.addEditProductForm.value; // for (var i in sendDate.document_data) {
            //     if(!sendDate.document_data[i].document_name && sendDate.document_data[i].label_name){
            //       this.message.error( ' Plz Upload Selected Document ' + ` ${sendDate.document_data[i].label_name}` + ' at index ' + i, { nzDuration: 5000 })
            //       return;
            //       }
            //   }

            for (var i in sendDate.document_data) {
              // !sendDate.document_data[i].document_name &&
              //   sendDate.document_data[i].label_name && !sendDate.document_data[i].isdelete
              if (sendDate.document_data[i].front_back_flag && !sendDate.document_data[i].document_name_front) {
                this.message.error(" Plz Upload Selected Document " + " ".concat(sendDate.document_data[i].label_name), {
                  nzDuration: 5000
                });
                return;
              }

              if (!sendDate.document_data[i].front_back_flag && !sendDate.document_data[i].document_name) {
                this.message.error(" Plz Upload Selected Document " + " ".concat(sendDate.document_data[i].label_name), {
                  nzDuration: 5000
                });
                return;
              }
            }

            if (this.addEditProductForm.valid) {
              this.apiLoader['formSave'] = true;

              if (!this.isEdit) {
                var data = new FormData();
                var sendDate = this.addEditProductForm.value;

                for (var i in sendDate.document_data) {
                  if (!sendDate.document_data[i].id) {
                    (_a = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _a === void 0 ? true : delete _a.id;
                  } // if(sendDate?.document_data[i]?.documents){
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
                    } // data.append("documents", sendDate?.document_data[i]?.documents);
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
                  } else {
                    if (sendDate[i]) {
                      data.append(i, sendDate[i]);
                    }
                  }
                }

                var url = this.http.createMasterPartnerForm(data);
                url.subscribe(function (res) {
                  var _a;

                  console.log(res);

                  if (res.success) {
                    _this21.message.success(res === null || res === void 0 ? void 0 : res.message);

                    _this21.apiLoader['formSave'] = false;

                    _this21.router.navigate(['masters-partners']);
                  } else {
                    for (var i in saveDoc) {
                      var value = _this21.addEditProductForm.get("document_data");

                      (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({
                        documents: saveDoc[i]
                      });
                    }

                    _this21.message.error(res === null || res === void 0 ? void 0 : res.message);

                    _this21.apiLoader['formSave'] = false;
                  }
                }, function (error) {
                  var _a;

                  for (var i in saveDoc) {
                    var value = _this21.addEditProductForm.get("document_data");

                    (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({
                      documents: saveDoc[i]
                    });
                  }

                  _this21.apiLoader['formSave'] = false;
                });
              } else {
                var _data2 = new FormData();

                var sendDate = this.addEditProductForm.value;

                for (var i in sendDate.document_data) {
                  if (!sendDate.document_data[i].id) {
                    (_o = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _o === void 0 ? true : delete _o.id;
                  } // if(sendDate.document_data[i].documents?.['uid']){
                  //   data.append('documents', sendDate?.document_data[i]?.documents)  
                  //   delete sendDate?.document_data[i]?.documents
                  // } else {
                  //   delete sendDate?.document_data[i]?.documents
                  // }


                  if ((_p = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _p === void 0 ? void 0 : _p.front_back_flag) {
                    // saveDoc.push(sendDate?.document_data[i]?.documents)
                    if ((_r = (_q = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _q === void 0 ? void 0 : _q.documents_front) === null || _r === void 0 ? void 0 : _r["uid"]) {
                      _data2.append("documents", (_s = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _s === void 0 ? void 0 : _s.documents_front);

                      (_t = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _t === void 0 ? true : delete _t.documents_front;
                    } else {
                      (_u = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _u === void 0 ? true : delete _u.documents_front;
                    }

                    if ((_w = (_v = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _v === void 0 ? void 0 : _v.documents_back) === null || _w === void 0 ? void 0 : _w["uid"]) {
                      _data2.append("documents", (_x = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _x === void 0 ? void 0 : _x.documents_back);

                      (_y = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _y === void 0 ? true : delete _y.documents_back;
                    } else {
                      (_z = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _z === void 0 ? true : delete _z.documents_back;
                    }
                  }

                  if (!((_0 = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _0 === void 0 ? void 0 : _0.front_back_flag)) {
                    if ((_2 = (_1 = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _1 === void 0 ? void 0 : _1.documents) === null || _2 === void 0 ? void 0 : _2["uid"]) {
                      _data2.append("documents", (_3 = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _3 === void 0 ? void 0 : _3.documents);

                      (_4 = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _4 === void 0 ? true : delete _4.documents;
                    } else {
                      (_5 = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _5 === void 0 ? true : delete _5.documents;
                    }
                  }
                }

                for (var i in sendDate) {
                  if (i == 'document_data') {
                    _data2.append(i, JSON.stringify(sendDate[i]));
                  } else {
                    if (sendDate[i]) {
                      _data2.append(i, sendDate[i]);
                    }
                  }
                }

                var _url = this.http.updateMasterPartnerForm(this.masterPartnerId, _data2);

                _url.subscribe(function (res) {
                  if (res.success) {
                    _this21.message.success(res === null || res === void 0 ? void 0 : res.message);

                    _this21.apiLoader['formSave'] = false;

                    _this21.router.navigate(['masters-partners']);
                  } else {
                    _this21.message.error(res === null || res === void 0 ? void 0 : res.message);

                    _this21.apiLoader['formSave'] = false;
                  }
                }, function (err) {
                  _this21.apiLoader['formSave'] = false;
                });
              }
            }
          }
        }, {
          key: "onClickSaveExistingForm",
          value: function onClickSaveExistingForm() {
            var _this22 = this;

            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;

            var saveDoc = [];
            saveDoc.push((_a = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _a === void 0 ? void 0 : _a.documents);

            for (var _i3 in this.addEditProductForm.controls) {
              this.addEditProductForm.controls[_i3].markAsDirty();

              this.addEditProductForm.controls[_i3].updateValueAndValidity();
            }

            if (!this.addEditProductForm.valid) {
              this.message.error('Mandatory Fields Are missing ', {
                nzDuration: 5000
              });
            }

            var sendDate = this.addEditProductForm.value;

            for (var i in sendDate.document_data) {
              // if(!sendDate.document_data[i].document_name && sendDate.document_data[i].label_name){
              //   this.message.error( ' Plz Upload Selected Document ' + ` ${sendDate.document_data[i].label_name}` + ' at index ' + i, { nzDuration: 5000 })
              //   return;
              //   }
              if (sendDate.document_data[i].front_back_flag && !sendDate.document_data[i].document_name_front) {
                this.message.error(" Plz Upload Selected Document " + " ".concat(sendDate.document_data[i].label_name), {
                  nzDuration: 5000
                });
                return;
              }

              if (!sendDate.document_data[i].front_back_flag && !sendDate.document_data[i].document_name) {
                this.message.error(" Plz Upload Selected Document " + " ".concat(sendDate.document_data[i].label_name), {
                  nzDuration: 5000
                });
                return;
              }
            }

            if (this.addEditProductForm.valid) {
              this.apiLoader['saveAddNew'] = true;
              var data = new FormData();
              var sendDate = this.addEditProductForm.value;

              for (var i in sendDate.document_data) {
                if (!sendDate.document_data[i].id) {
                  (_b = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _b === void 0 ? true : delete _b.id;
                }

                if (!sendDate.unique_code) {
                  sendDate === null || sendDate === void 0 ? true : delete sendDate.unique_code;
                } // if(sendDate?.document_data[i]?.documents){
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
                  } // data.append("documents", sendDate?.document_data[i]?.documents);
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
                } else {
                  if (sendDate[i]) {
                    data.append(i, sendDate[i]);
                  } // data.append(i, sendDate[i])

                }
              }

              var url = this.http.createPartnerForm(data);
              url.subscribe(function (res) {
                var _a;

                console.log(res);

                if (res.success) {
                  _this22.message.success(res === null || res === void 0 ? void 0 : res.message);

                  _this22.apiLoader['saveAddNew'] = false;
                  var newRouterLink = '/masters-partners/add';

                  _this22.router.navigate(['/']).then(function () {
                    _this22.router.navigate([newRouterLink]);
                  });
                } else {
                  for (var i in saveDoc) {
                    var value = _this22.addEditProductForm.get("document_data");

                    (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({
                      documents: saveDoc[i]
                    });
                  }

                  _this22.message.error(res === null || res === void 0 ? void 0 : res.message);

                  _this22.apiLoader['saveAddNew'] = false;
                }
              }, function (error) {
                var _a;

                for (var i in saveDoc) {
                  var value = _this22.addEditProductForm.get("document_data");

                  (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({
                    documents: saveDoc[i]
                  });
                }

                _this22.apiLoader['saveAddNew'] = false;
              });
            }
          }
        }, {
          key: "handleChange",
          value: function handleChange(e, index) {
            // console.log('in Progress', i);
            console.log(index, 'index');
            this.index = index; // console.log(this.addEditProductForm.get('document_data')['controls'][index].controls.document_master.value)

            this.addEditProductForm.get('document_data')['controls'][index].controls.documents.setValue(e.file.originFileObj); // console.log(e + '  ' + this.addEditProductForm.controls.document_data['controls'][index].document_master)
          }
        }, {
          key: "onClickShowUploadedDocument",
          value: function onClickShowUploadedDocument(e, action) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var images, doc, img, _img, _doc, _img2, _img3, _doc2, _img4, _img5;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!((_a = e === null || e === void 0 ? void 0 : e.value) === null || _a === void 0 ? void 0 : _a.id)) {
                        _context.next = 8;
                        break;
                      }

                      this.pdf_viewer_object_values['boolean'] = true;
                      this.pdf_viewer_object_values['title'] = 'Showing ' + ((_b = e === null || e === void 0 ? void 0 : e.value) === null || _b === void 0 ? void 0 : _b.label_name);
                      this.pdf_viewer_object_values['url'] = (_c = e === null || e === void 0 ? void 0 : e.value) === null || _c === void 0 ? void 0 : _c.documents;
                      this.sanatizeUrlToSafe = this.sanitized.bypassSecurityTrustResourceUrl(this.pdf_viewer_object_values['url']);
                      console.log(e);
                      _context.next = 52;
                      break;

                    case 8:
                      images = [];

                      if (!(action == 'documents')) {
                        _context.next = 24;
                        break;
                      }

                      if (!((_e = (_d = e === null || e === void 0 ? void 0 : e.value) === null || _d === void 0 ? void 0 : _d.documents) === null || _e === void 0 ? void 0 : _e.uid)) {
                        _context.next = 19;
                        break;
                      }

                      _context.next = 13;
                      return getBase64((_f = e === null || e === void 0 ? void 0 : e.value) === null || _f === void 0 ? void 0 : _f.documents);

                    case 13:
                      doc = _context.sent;
                      img = {
                        src: doc,
                        width: "600px",
                        height: "400px",
                        alt: "ng-zorro"
                      };
                      images.push(img);
                      this.nzImageService.preview(images, {
                        nzZoom: 1.5,
                        nzRotate: 0
                      });
                      _context.next = 22;
                      break;

                    case 19:
                      _img = {
                        src: (_g = e === null || e === void 0 ? void 0 : e.value) === null || _g === void 0 ? void 0 : _g.documents,
                        width: "600px",
                        height: "400px",
                        alt: "ng-zorro"
                      };
                      images.push(_img);
                      this.nzImageService.preview(images, {
                        nzZoom: 1.5,
                        nzRotate: 0
                      });

                    case 22:
                      _context.next = 52;
                      break;

                    case 24:
                      if (!(action == 'documents_front')) {
                        _context.next = 39;
                        break;
                      }

                      if (!((_j = (_h = e === null || e === void 0 ? void 0 : e.value) === null || _h === void 0 ? void 0 : _h.documents_front) === null || _j === void 0 ? void 0 : _j.uid)) {
                        _context.next = 34;
                        break;
                      }

                      _context.next = 28;
                      return getBase64((_k = e === null || e === void 0 ? void 0 : e.value) === null || _k === void 0 ? void 0 : _k.documents_front);

                    case 28:
                      _doc = _context.sent;
                      // const images = [];
                      _img2 = {
                        src: _doc,
                        width: "600px",
                        height: "400px",
                        alt: "ng-zorro"
                      };
                      images.push(_img2);
                      this.nzImageService.preview(images, {
                        nzZoom: 1.5,
                        nzRotate: 0
                      });
                      _context.next = 37;
                      break;

                    case 34:
                      // const images = [];
                      _img3 = {
                        src: (_l = e === null || e === void 0 ? void 0 : e.value) === null || _l === void 0 ? void 0 : _l.documents_front,
                        width: "600px",
                        height: "400px",
                        alt: "ng-zorro"
                      };
                      images.push(_img3);
                      this.nzImageService.preview(images, {
                        nzZoom: 1.5,
                        nzRotate: 0
                      });

                    case 37:
                      _context.next = 52;
                      break;

                    case 39:
                      if (!(action == 'documents_back')) {
                        _context.next = 52;
                        break;
                      }

                      if (!((_o = (_m = e === null || e === void 0 ? void 0 : e.value) === null || _m === void 0 ? void 0 : _m.documents_back) === null || _o === void 0 ? void 0 : _o.uid)) {
                        _context.next = 49;
                        break;
                      }

                      _context.next = 43;
                      return getBase64((_p = e === null || e === void 0 ? void 0 : e.value) === null || _p === void 0 ? void 0 : _p.documents_back);

                    case 43:
                      _doc2 = _context.sent;
                      // const images = [];
                      _img4 = {
                        src: _doc2,
                        width: "600px",
                        height: "400px",
                        alt: "ng-zorro"
                      };
                      images.push(_img4);
                      this.nzImageService.preview(images, {
                        nzZoom: 1.5,
                        nzRotate: 0
                      });
                      _context.next = 52;
                      break;

                    case 49:
                      // const images = [];
                      _img5 = {
                        src: (_q = e === null || e === void 0 ? void 0 : e.value) === null || _q === void 0 ? void 0 : _q.documents_back,
                        width: "600px",
                        height: "400px",
                        alt: "ng-zorro"
                      };
                      images.push(_img5);
                      this.nzImageService.preview(images, {
                        nzZoom: 1.5,
                        nzRotate: 0
                      });

                    case 52:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "skills",
          get: function get() {
            return this.addEditProductForm.get("document_data");
          }
        }]);

        return AddEditMastersComponent;
      }();

      AddEditMastersComponent.ɵfac = function AddEditMastersComponent_Factory(t) {
        return new (t || AddEditMastersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_7__["NzImageService"]));
      };

      AddEditMastersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddEditMastersComponent,
        selectors: [["app-add-edit-masters"]],
        decls: 166,
        vars: 91,
        consts: [["nz-form", "", 3, "formGroup"], [1, "row", "border-bottom"], [1, "col-md-12"], ["nzFor", "name", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Master Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "name", "placeholder", "Master Name"], ["nzFor", "address_line_1", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Address!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "address_line_1", "placeholder", "Address Line 1"], ["nzFor", "address_line_2", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Address line 2!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "address_line_2", "placeholder", "Address Line 2"], ["nzFor", "display_name", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add valid Display Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "display_name", "placeholder", "Display Name"], ["nzFor", "city", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid City!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "city", "placeholder", "City", 3, "keypress"], ["nzFor", "state", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please select Valid Sate", 3, "nzSm", "nzXs"], ["formControlName", "state", "nzPlaceHolder", "Select State", "nzShowSearch", "", "nzAllowClear", "", 3, "nzFocus", "nzOnSearch"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzFor", "pincode", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Pincode!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "pincode", "placeholder", "Pincode"], ["nzFor", "phone", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Phone No.!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "phone", "placeholder", "Phone No."], [1, "mt-2"], [1, "col-md-6"], ["nzFor", "business_type", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please select Industry", 3, "nzSm", "nzXs"], ["formControlName", "business_type", "nzPlaceHolder", "Select Industry", "nzShowSearch", "", "nzAllowClear", "", 3, "nzFocus", "nzOnSearch"], ["nzFor", "business_nature", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please select Nature", 3, "nzSm", "nzXs"], ["formControlName", "business_nature", "nzPlaceHolder", "Select Nature", "nzShowSearch", "", "nzAllowClear", "", 3, "nzDropdownRender", "nzFocus", "nzOnSearch"], ["renderTemplate", ""], ["nzFor", "contact_person_name", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid  Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "contact_person_name", "placeholder", "Person Name", 3, "keypress"], ["nzFor", "contact_person_phone", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Phone No !", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "contact_person_phone", "placeholder", "person Phone No."], ["nzFor", "contact_person_email", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Email!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "contact_person_email", "placeholder", "Person Email", 2, "text-transform", "lowercase"], [1, "col-12"], ["nzFor", "bank_name", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Bank Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "bank_name", "placeholder", "Bank Name", 3, "keypress"], ["nzFor", "account_no", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Account No.!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "account_no", "placeholder", "Account No."], ["nzFor", "ifsc", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid IFSC!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "ifsc", "placeholder", "IFSC"], ["nzFor", "branch", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Branch!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "branch", "placeholder", "Branch", 3, "keypress"], ["formArrayName", "document_data", 4, "ngFor", "ngForOf"], [1, "row", "no-gutters"], [1, "col-12", "d-flex", "justify-content-between"], ["nz-button", "", "nzType", "link", 1, "", 3, "click"], [1, "row", "border-top", "mt-2"], [1, "col-md-12", "mt-4"], ["nzFor", "employee", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please select Employee!", 3, "nzSm", "nzXs"], ["formControlName", "employee"], ["nz-radio", "", "nzValue", "yes"], ["nz-radio", "", "nzValue", "no"], [1, "row", "my-4"], ["nzFor", "payout", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please select Payout!", 3, "nzSm", "nzXs"], ["formControlName", "payout"], [1, "row", "my-3", "justify-content-between"], [1, "col-3"], ["nzType", "primary", "nz-button", "", "type", "submit", 3, "nzLoading", "disabled", "click", 4, "ngIf"], [1, "col-3", "text-right"], ["type", "submit", "nz-button", "", "nzType", "primary", 3, "nzLoading", "disabled", "click"], ["nzTitle", "Add New Document", 3, "nzVisible", "nzOkDisabled", "nzWidth", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nzHeight", "50vw", "nzWidth", "60vw", "nzKeyboard", "true", 3, "nzVisible", "nzTitle", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalFooter", ""], [3, "nzValue", "nzLabel"], [1, "mt-0", "mb-2"], [1, "row", 2, "align-items", "center"], [1, "col-7", "ml-2"], ["type", "text", "nz-input", ""], ["inputElement", ""], [1, "col", 2, "text-align", "center"], ["type", "submit", "nz-button", "", "nzType", "primary", 1, "mt-2", 3, "nzLoading", "disabled", "click"], ["formArrayName", "document_data"], [1, "col-md-12", 3, "formGroupName"], [1, "d-flex", "flex-row", "bd-highlight", "mb-3"], [1, "px-2", 2, "min-width", "25%"], ["nzFor", "documents", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzErrorTip"], [1, "d-flex"], ["p", "", 3, "nzMultiple", "nzAccept", "nzCustomRequest", "nzChange"], ["nz-button", "", "type", "button"], ["nz-icon", "", "nzType", "upload"], [1, "px-2"], ["formControlName", "is_verified", "nz-checkbox", "", 1, "ml-3", "align-self-center", 3, "nzDisabled"], ["class", "mx-3", "nz-icon", "", "nzType", "delete", "nzTheme", "outline", "style", "font-size: 1rem; cursor: pointer; color: red;", 3, "click", 4, "ngIf"], ["class", " text-primary", "nz-icon", "", "nzType", "eye", "nzTheme", "outline", "style", "font-size: 1rem; cursor: pointer;", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline", 1, "mx-3", 2, "font-size", "1rem", "cursor", "pointer", "color", "red", 3, "click"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline", 1, "text-primary", 2, "font-size", "1rem", "cursor", "pointer", 3, "click"], ["nzType", "primary", "nz-button", "", "type", "submit", 3, "nzLoading", "disabled", "click"], ["nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzPlaceHolder", "Select Document", 1, "ml-4", 2, "min-width", "13rem", 3, "ngModel", "ngModelChange"], [3, "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngIf"], [1, "pdf_viewer_container"], ["width", "100%", 2, "height", "35rem", 3, "src"], ["nz-button", "", "nzType", "primary", 3, "click"]],
        template: function AddEditMastersComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditMastersComponent_Template_input_keypress_33_listener($event) {
              return ctx.omit_special_char($event);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzFocus", function AddEditMastersComponent_Template_nz_select_nzFocus_39_listener() {
              return ctx.getListOfStates();
            })("nzOnSearch", function AddEditMastersComponent_Template_nz_select_nzOnSearch_39_listener($event) {
              return ctx.onSearchGetList($event, "state");
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzFocus", function AddEditMastersComponent_Template_nz_select_nzFocus_62_listener() {
              return ctx.getListOfBusinessType();
            })("nzOnSearch", function AddEditMastersComponent_Template_nz_select_nzOnSearch_62_listener($event) {
              return ctx.onSearchGetList($event, "state");
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzFocus", function AddEditMastersComponent_Template_nz_select_nzFocus_69_listener() {
              return ctx.getListOfBusinessNature();
            })("nzOnSearch", function AddEditMastersComponent_Template_nz_select_nzOnSearch_69_listener($event) {
              return ctx.onSearchGetList($event, "state");
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditMastersComponent_Template_input_keypress_82_listener($event) {
              return ctx.omit_special_char($event);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditMastersComponent_Template_input_keypress_105_listener($event) {
              return ctx.omit_special_char($event);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditMastersComponent_Template_input_keypress_123_listener($event) {
              return ctx.omit_special_char($event);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMastersComponent_Template_button_click_130_listener($event) {
              return ctx.onClickOpenPopUp($event);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMastersComponent_Template_button_click_158_listener() {
              return ctx.onClickSubmitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "nz-modal", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function AddEditMastersComponent_Template_nz_modal_nzVisibleChange_160_listener($event) {
              return ctx.isVisible = $event;
            })("nzOnCancel", function AddEditMastersComponent_Template_nz_modal_nzOnCancel_160_listener() {
              return ctx.handleCancel();
            })("nzOnOk", function AddEditMastersComponent_Template_nz_modal_nzOnOk_160_listener() {
              return ctx.addRule();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](161, AddEditMastersComponent_ng_container_161_Template, 5, 4, "ng-container", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "nz-modal", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function AddEditMastersComponent_Template_nz_modal_nzVisibleChange_162_listener($event) {
              return ctx.pdf_viewer_object_values["boolean"] = $event;
            })("nzOnCancel", function AddEditMastersComponent_Template_nz_modal_nzOnCancel_162_listener() {
              return ctx.handleCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](163, AddEditMastersComponent_ng_container_163_Template, 3, 1, "ng-container", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](164, AddEditMastersComponent_ng_template_164_Template, 2, 0, "ng-template", null, 82, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](72);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](165);

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
          }
        },
        directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__["NzCardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__["NzRadioGroupComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__["NzRadioComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__["NzWaveDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__["NzModalContentDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzOptionComponent"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__["NzDividerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_20__["NzUploadComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__["NzIconDirective"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_22__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
        styles: ["[_nghost-%COMP%]     .ant-upload-list-text-container{\ndisplay: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LW1hc3RlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0Esd0JBQXdCO0FBQ3hCIiwiZmlsZSI6ImFkZC1lZGl0LW1hc3RlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogbmctdG5zLWMzNzgtNCBhbnQtdXBsb2FkLWxpc3QtdGV4dC1jb250YWluZXIgbmctc3Rhci1pbnNlcnRlZCAqL1xuOmhvc3QgOjpuZy1kZWVwIC5hbnQtdXBsb2FkLWxpc3QtdGV4dC1jb250YWluZXJ7XG5kaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddEditMastersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: "app-add-edit-masters",
            templateUrl: "./add-edit-masters.component.html",
            styleUrls: ["./add-edit-masters.component.css"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]
          }, {
            type: ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_7__["NzImageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "x2FM":
    /*!*******************************************************************!*\
      !*** ./src/app/users/masters-partners/masters-partners.module.ts ***!
      \*******************************************************************/

    /*! exports provided: MastersPartnersModule */

    /***/
    function x2FM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MastersPartnersModule", function () {
        return MastersPartnersModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _masters_partners_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./masters-partners-routing.module */
      "JZK+");
      /* harmony import */


      var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/radio */
      "bE2y");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/table */
      "rMZv");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/tag */
      "ZyQt");
      /* harmony import */


      var _add_edit_masters_add_edit_masters_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./add-edit-masters/add-edit-masters.component */
      "Sv+W");
      /* harmony import */


      var _master_partners_list_master_partners_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./master-partners-list/master-partners-list.component */
      "/I8L");
      /* harmony import */


      var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/dropdown */
      "Nqz0");
      /* harmony import */


      var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/page-header */
      "jPNr");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/divider */
      "5vDB");
      /* harmony import */


      var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/upload */
      "D9mS");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "TaO5");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ng-zorro-antd/popconfirm */
      "KupA");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");

      var MastersPartnersModule = function MastersPartnersModule() {
        _classCallCheck(this, MastersPartnersModule);
      };

      MastersPartnersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MastersPartnersModule
      });
      MastersPartnersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MastersPartnersModule_Factory(t) {
          return new (t || MastersPartnersModule)();
        },
        imports: [[ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__["NzDropDownModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _masters_partners_routing_module__WEBPACK_IMPORTED_MODULE_2__["MastersPartnersRoutingModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__["NzRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTableModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzSelectModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_11__["NzTagModule"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__["NzPageHeaderModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__["NzFormModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__["NzDividerModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__["NzUploadModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__["NzModalModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__["NzCheckboxModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__["NzPopconfirmModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_23__["NgxPermissionsModule"].forChild()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MastersPartnersModule, {
          declarations: [_add_edit_masters_add_edit_masters_component__WEBPACK_IMPORTED_MODULE_12__["AddEditMastersComponent"], _master_partners_list_master_partners_list_component__WEBPACK_IMPORTED_MODULE_13__["MasterPartnersListComponent"]],
          imports: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__["NzDropDownModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _masters_partners_routing_module__WEBPACK_IMPORTED_MODULE_2__["MastersPartnersRoutingModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__["NzRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTableModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzSelectModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_11__["NzTagModule"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__["NzPageHeaderModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__["NzFormModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__["NzDividerModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__["NzUploadModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__["NzModalModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__["NzCheckboxModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__["NzPopconfirmModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_23__["NgxPermissionsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MastersPartnersModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_add_edit_masters_add_edit_masters_component__WEBPACK_IMPORTED_MODULE_12__["AddEditMastersComponent"], _master_partners_list_master_partners_list_component__WEBPACK_IMPORTED_MODULE_13__["MasterPartnersListComponent"]],
            imports: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_14__["NzDropDownModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _masters_partners_routing_module__WEBPACK_IMPORTED_MODULE_2__["MastersPartnersRoutingModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__["NzRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTableModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzSelectModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_11__["NzTagModule"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__["NzPageHeaderModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__["NzFormModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__["NzDividerModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_18__["NzUploadModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__["NzModalModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__["NzCheckboxModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__["NzPopconfirmModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_23__["NgxPermissionsModule"].forChild()]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=users-masters-partners-masters-partners-module-es5.js.map