(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/quaint/Application/Frontend/fatakpay-admin-frontend/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0CWl":
    /*!***********************************************************!*\
      !*** ./src/app/applications/deatils/deatils.component.ts ***!
      \***********************************************************/

    /*! exports provided: DeatilsComponent */

    /***/
    function CWl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeatilsComponent", function () {
        return DeatilsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/tabs */
      "oyxB");
      /* harmony import */


      var _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../personal-details/personal-details.component */
      "J1TD");
      /* harmony import */


      var _kyc_details_kyc_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../kyc-details/kyc-details.component */
      "E3OB");
      /* harmony import */


      var _bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../bank-details/bank-details.component */
      "c+2v");
      /* harmony import */


      var _shared_template_audit_history_audit_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/template/audit-history/audit-history.component */
      "8NRN");

      function DeatilsComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-personal-details", 6);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("_currentId", ctx_r0._currentId);
        }
      }

      function DeatilsComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-kyc-details", 7);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("uploadPermission", ctx_r1.uploadPermission.toLowerCase())("_currentId", ctx_r1._currentId)("_currStage", ctx_r1._currStage);
        }
      }

      function DeatilsComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-bank-details", 6);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("_currentId", ctx_r2._currentId);
        }
      }

      function DeatilsComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-audit-history", 8);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("endpoint", "LoanApplication")("endpoint_id", ctx_r3._currentId);
        }
      }

      var DeatilsComponent = /*#__PURE__*/function () {
        function DeatilsComponent(https) {
          _classCallCheck(this, DeatilsComponent);

          this.https = https;
        }

        _createClass(DeatilsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var count = 0;
            this.seviceCall = this.https.expnadList.subscribe(function (res) {
              console.log(res, _this._currentId);

              if (_this._currentId != res) {
                if (count == 0) {
                  // this._currentId = res.values().next().value
                  // this.getPersonalDetails()
                  count++;
                }
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.https.expnadList.next();
          }
        }]);

        return DeatilsComponent;
      }();

      DeatilsComponent.ɵfac = function DeatilsComponent_Factory(t) {
        return new (t || DeatilsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]));
      };

      DeatilsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DeatilsComponent,
        selectors: [["app-deatils"]],
        inputs: {
          uploadPermission: "uploadPermission",
          _currentId: "_currentId",
          _currStage: "_currStage"
        },
        decls: 18,
        vars: 4,
        consts: [[1, "card-container"], ["nzType", "card"], [3, "nzTitle"], [1, "row"], [1, "col-md-12"], ["nz-tab", ""], [3, "_currentId"], [3, "uploadPermission", "_currentId", "_currStage"], [3, "endpoint", "endpoint_id"]],
        template: function DeatilsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-tabset", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-tab", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DeatilsComponent_ng_template_5_Template, 1, 1, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-tab", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DeatilsComponent_ng_template_9_Template, 1, 3, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-tab", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DeatilsComponent_ng_template_13_Template, 1, 1, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-tab", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DeatilsComponent_ng_template_17_Template, 1, 2, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", "PERSONAL AND EMPLOYMENT DETAILS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", "KYC DETAILS AND API RESPONSE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", "BANK DETAILS AND OFFER DETAILS SECTION");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", "HISTORY");
          }
        },
        directives: [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__["NzTabSetComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__["NzTabComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_2__["NzTabDirective"], _personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_3__["PersonalDetailsComponent"], _kyc_details_kyc_details_component__WEBPACK_IMPORTED_MODULE_4__["KycDetailsComponent"], _bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_5__["BankDetailsComponent"], _shared_template_audit_history_audit_history_component__WEBPACK_IMPORTED_MODULE_6__["AuditHistoryComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWF0aWxzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeatilsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-deatils',
            templateUrl: './deatils.component.html',
            styleUrls: ['./deatils.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
          }];
        }, {
          uploadPermission: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _currentId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _currStage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "8NRN":
    /*!**************************************************************************!*\
      !*** ./src/app/shared/template/audit-history/audit-history.component.ts ***!
      \**************************************************************************/

    /*! exports provided: AuditHistoryComponent */

    /***/
    function NRN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuditHistoryComponent", function () {
        return AuditHistoryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! date-fns */
      "b/SL");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var _globalservices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../globalservices.service */
      "Wum+");
      /* harmony import */


      var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/spin */
      "qAZ0");
      /* harmony import */


      var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/list */
      "Ff2k");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/comment */
      "ZVAZ");
      /* harmony import */


      var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/avatar */
      "ZE2D");
      /* harmony import */


      var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/collapse */
      "IvDN");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");

      function AuditHistoryComponent_ng_template_3_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var sub_item_r7 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_item_r7.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sub_item_r7.old_value ? ctx_r4.checkIfdateorString(sub_item_r7.old_value) : sub_item_r7.old_value === 0 ? 0 : sub_item_r7.new_value === false ? false : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sub_item_r7.new_value ? ctx_r4.checkIfdateorString(sub_item_r7.new_value) : sub_item_r7.new_value === 0 ? 0 : sub_item_r7.new_value === false ? false : "-", " ");
        }
      }

      function AuditHistoryComponent_ng_template_3_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.key_changes[0].key, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.key_changes.length > 1 ? " and " + (item_r3.key_changes.length - 1) + " More" : "", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", " changed in ", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.model + " ", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 5, item_r3.created_at, "medium"), " ");
        }
      }

      function AuditHistoryComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-comment", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-avatar", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-comment-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-collapse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-collapse-panel", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AuditHistoryComponent_ng_template_3_div_5_Template, 12, 3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AuditHistoryComponent_ng_template_3_ng_template_6_Template, 12, 8, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAuthor", item_r3.created_by)("nzDatetime", ctx_r1.getFormatedDate(item_r3.created_at));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", item_r3.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.key_changes);
        }
      }

      function AuditHistoryComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No history found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AuditHistoryComponent = /*#__PURE__*/function () {
        function AuditHistoryComponent(https, message, global) {
          _classCallCheck(this, AuditHistoryComponent);

          this.https = https;
          this.message = message;
          this.global = global;
        }

        _createClass(AuditHistoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.fetchAuditHistory();
          }
        }, {
          key: "fetchAuditHistory",
          value: function fetchAuditHistory() {
            var _this2 = this;

            // if(this.endpoint == 'Product') {
            //   let data = {
            //     id: this.endpoint_id
            //   }
            //   this.https.fetchProductAuditLog(data).subscribe( res => {
            //     if (res['success']) {
            //       this.history_data = res['data']
            //     } else {
            //     }
            //   }, err => {
            //   })
            // } else 
            if (this.endpoint == 'LoanApplication') {
              var data = {
                source: 'Onboarding',
                datapoint: 'history_audit_logs',
                endpoint: this.endpoint,
                id: this.endpoint_id
              };
              this.loading = true;
              this.https.fetchLoanApplicationList(data).subscribe(function (res) {
                if (res === null || res === void 0 ? void 0 : res.success) {
                  _this2.history_data = res.data;
                  _this2.loading = false;
                } else {
                  _this2.loading = false;
                }
              }, function (err) {});
            } else {
              this.loading = true;
              var _data = {
                id: this.endpoint_id
              };
              this.https.fetchProductAuditLog(_data, this.endpoint).subscribe(function (res) {
                if (res['success']) {
                  _this2.history_data = res['data'];
                } else {}

                _this2.loading = false;
              }, function (err) {});
            }
          }
        }, {
          key: "getFormatedDate",
          value: function getFormatedDate(date) {
            var formatted_date = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["formatDistance"])(new Date(), new Date(date));
            return formatted_date;
          }
        }, {
          key: "checkIfdateorString",
          value: function checkIfdateorString(data) {
            var formatted_value;

            if (data % 1 === 0) {
              // data is an integer
              formatted_value = data;
            } else {
              if (moment__WEBPACK_IMPORTED_MODULE_2__(data).isValid()) {
                formatted_value = moment__WEBPACK_IMPORTED_MODULE_2__(data).format("MMM DD, yyyy") + ' ' + moment__WEBPACK_IMPORTED_MODULE_2__(data).format("hh:mm:ss A");
              } else {
                formatted_value = data;
              }
            }

            return formatted_value;
          }
        }]);

        return AuditHistoryComponent;
      }();

      AuditHistoryComponent.ɵfac = function AuditHistoryComponent_Factory(t) {
        return new (t || AuditHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_globalservices_service__WEBPACK_IMPORTED_MODULE_5__["GlobalservicesService"]));
      };

      AuditHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuditHistoryComponent,
        selectors: [["app-audit-history"]],
        inputs: {
          endpoint: "endpoint",
          endpoint_id: "endpoint_id"
        },
        decls: 6,
        vars: 5,
        consts: [[3, "nzSpinning"], [3, "nzDataSource", "nzRenderItem", "nzItemLayout"], ["item", ""], [4, "ngIf"], [3, "nzAuthor", "nzDatetime"], ["nz-comment-avatar", "", "nzIcon", "user", 3, "nzSrc"], [3, "nzHeader"], ["class", "mt-3", 4, "ngFor", "ngForOf"], ["headerTemp", ""], [1, "mt-3"], [1, "col-md-12"], [1, "row"], [1, "col-md-12", "pl-0"], [1, "mx-2"], ["nz-icon", "", "nzType", "arrow-right", "nzTheme", "outline", 1, "text-danger"], [2, "font-weight", "500"], [1, "text-primary", "mx-3", 2, "font-weight", "500"]],
        template: function AuditHistoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-spin", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-list", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AuditHistoryComponent_ng_template_3_Template, 8, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AuditHistoryComponent_span_5_Template, 2, 0, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpinning", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDataSource", ctx.history_data ? ctx.history_data[0] ? ctx.history_data : null : null)("nzRenderItem", _r0)("nzItemLayout", "horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.history_data || !ctx.history_data[0]);
          }
        },
        directives: [ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__["NzSpinComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__["NzListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_9__["NzCommentComponent"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_10__["NzAvatarComponent"], ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_9__["NzCommentAvatarDirective"], ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_9__["NzCommentContentDirective"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_11__["NzCollapseComponent"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_11__["NzCollapsePanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdWRpdC1oaXN0b3J5LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuditHistoryComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-audit-history',
            templateUrl: './audit-history.component.html',
            styleUrls: ['./audit-history.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]
          }, {
            type: _globalservices_service__WEBPACK_IMPORTED_MODULE_5__["GlobalservicesService"]
          }];
        }, {
          endpoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          endpoint_id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "ASAD":
    /*!********************************************************************!*\
      !*** ./src/app/shared/template/quick-view/quick-view.component.ts ***!
      \********************************************************************/

    /*! exports provided: QuickViewComponent */

    /***/
    function ASAD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuickViewComponent", function () {
        return QuickViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/theme-constant.service */
      "PQ0Y");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/divider */
      "5vDB");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/spin */
      "qAZ0");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");

      function QuickViewComponent_ng_container_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-spin", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Old Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-form-control", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-form-label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "New Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-form-control", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-form-label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Confirm new Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nz-form-control", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpinning", ctx_r0.formLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.changePasswordForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 24)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 24)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 24)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 24)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 24)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 24)("nzXs", 24);
        }
      }

      var QuickViewComponent = /*#__PURE__*/function () {
        function QuickViewComponent(themeService, message, router, route, modal, http, fb) {
          _classCallCheck(this, QuickViewComponent);

          this.themeService = themeService;
          this.message = message;
          this.router = router;
          this.route = route;
          this.modal = modal;
          this.http = http;
          this.fb = fb;
          this._apiCallLoader = false;
          this.isChangePassword = false;
        }

        _createClass(QuickViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.userData = JSON.parse(sessionStorage.getItem('fatakpay_user_data'));
            this.themeService.isMenuFoldedChanges.subscribe(function (isFolded) {
              return _this3.isFolded = isFolded;
            });
            this.themeService.isSideNavDarkChanges.subscribe(function (isDark) {
              return _this3.isSideNavDark = isDark;
            });
            this.themeService.selectedHeaderColor.subscribe(function (color) {
              return _this3.selectedHeaderColor = color;
            });
            setTimeout(function () {
              _this3.fetchEmployeeList();
            }, 2000);
            this.changePasswordFormFunction();
          }
        }, {
          key: "fetchEmployeeList",
          value: function fetchEmployeeList() {
            var _this4 = this;

            var _a, _b, _c, _d, _e, _f;

            if (!((_b = (_a = this.userData) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.id)) {
              this.userData = JSON.parse(sessionStorage.getItem('fatakpay_user_data'));
            }

            var data = {
              id: (_d = (_c = this.userData) === null || _c === void 0 ? void 0 : _c.user) === null || _d === void 0 ? void 0 : _d.id
            };
            this.api_calling_loader = true;

            if ((_f = (_e = this.userData) === null || _e === void 0 ? void 0 : _e.user) === null || _f === void 0 ? void 0 : _f.id) {
              this.http.fetchEmployeeList(data).subscribe(function (res) {
                _this4.api_calling_loader = false;
                _this4.employeeData = res['data'].results[0];
              }, function (err) {
                _this4.api_calling_loader = false;
              });
            }
          }
        }, {
          key: "changeHeaderColor",
          value: function changeHeaderColor() {
            this.themeService.changeHeaderColor(this.selectedHeaderColor);
          }
        }, {
          key: "toggleSideNavDark",
          value: function toggleSideNavDark() {
            this.themeService.toogleSideNavDark(this.isSideNavDark);
          }
        }, {
          key: "toggleFold",
          value: function toggleFold() {
            this.themeService.toggleFold(this.isFolded);
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this5 = this;

            this.modal.confirm({
              nzTitle: 'Are you sure ',
              nzContent: 'You want to logout',
              nzOkText: 'Yes, Logout',
              nzOkType: 'primary',
              nzOkDanger: true,
              nzOnOk: function nzOnOk() {
                return _this5.logoutUserFunction();
              },
              nzCancelText: 'No',
              nzOnCancel: function nzOnCancel() {
                return console.log('Cancel');
              }
            });
          } //// logout user 

        }, {
          key: "logoutUserFunction",
          value: function logoutUserFunction() {
            var _this6 = this;

            var data;
            this.http.logout(data).subscribe(function (res) {
              if (res === null || res === void 0 ? void 0 : res.success) {
                _this6.message.success(res === null || res === void 0 ? void 0 : res.message);

                _this6.modal.closeAll();

                sessionStorage.removeItem("fatakpay_user_data");

                _this6.router.navigate(['/authentication/login']);
              }
            });
          }
        }, {
          key: "changePasswordFormFunction",
          value: function changePasswordFormFunction() {
            this.changePasswordForm = this.fb.group({
              id: [this.employeeData ? this.employeeData.id : ''],
              mobile: [this.employeeData ? this.employeeData.mobile : ''],
              new_password: [''],
              retype_password: [''],
              old_password: ['']
            });
          }
        }, {
          key: "changePassword",
          value: function changePassword() {
            var _this7 = this;

            if (!this.changePasswordForm.value.old_password) {
              this.message.error('Old Password Mandatory');
              return;
            }

            if (!this.changePasswordForm.value.new_password) {
              this.message.error('New Password Mandatory');
              return;
            }

            if (!this.changePasswordForm.value.retype_password) {
              this.message.error('Confirm New Password Field Mandatory');
              return;
            }

            if (this.changePasswordForm.value.new_password !== this.changePasswordForm.value.retype_password) {
              this.message.error('Password Miss Match');
              return;
            }

            if (this.changePasswordForm.value.old_password && this.changePasswordForm.value.new_password && this.changePasswordForm.value.retype_password) {
              this.http.changePassword(this.changePasswordForm.value).subscribe(function (res) {
                if (res['success']) {
                  _this7.isChangePassword = false;

                  _this7.message.success(res['message']);
                } else {
                  _this7.message.error(res['message']);
                }
              });
            }
          }
        }]);

        return QuickViewComponent;
      }();

      QuickViewComponent.ɵfac = function QuickViewComponent_Factory(t) {
        return new (t || QuickViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__["ThemeConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]));
      };

      QuickViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QuickViewComponent,
        selectors: [["app-quick-view"]],
        decls: 44,
        vars: 6,
        consts: [[1, "row", "my-md-4"], [1, "col-12", "justify-content-center", "d-flex"], ["nz-icon", "", "nzType", "user", "nzTheme", "outline", 2, "font-size", "100px", "border-radius", "50%"], [1, "mt-0"], [1, "row"], [1, "col-md-12"], ["nzNoColon", "", 1, "col-md-5", "px-0", "text-left"], ["nzNoColon", ""], [1, "col-md-12", "mb-md-3"], [1, "h5", 2, "color", "#0b5edc", 3, "click"], ["nz-icon", "", "nzType", "lock", "nzTheme", "outline"], ["nz-icon", "", "nzType", "logout", "nzTheme", "outline"], ["nzTitle", "Change Password", "nzOkText", "Update", 3, "nzVisible", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], [3, "nzSpinning"], [3, "formGroup"], ["nzFor", "old_password", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please input Old Password!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "old_password"], ["nzFor", "new_password", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please input New Password!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "new_password"], ["nzFor", "retype_password", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please input Confirm new Password!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "retype_password"]],
        template: function QuickViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profile Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-divider", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-form-label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-form-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-form-label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-form-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Registered as");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nz-form-label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-form-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Mobile No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nz-form-label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-form-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email-ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nz-form-label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "nz-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuickViewComponent_Template_a_click_35_listener() {
              return ctx.isChangePassword = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Change Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuickViewComponent_Template_a_click_39_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Logout ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "nz-modal", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function QuickViewComponent_Template_nz_modal_nzVisibleChange_42_listener($event) {
              return ctx.isChangePassword = $event;
            })("nzOnCancel", function QuickViewComponent_Template_nz_modal_nzOnCancel_42_listener() {
              return ctx.isChangePassword = false;
            })("nzOnOk", function QuickViewComponent_Template_nz_modal_nzOnOk_42_listener() {
              return ctx.changePassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, QuickViewComponent_ng_container_43_Template, 22, 14, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employeeData == null ? null : ctx.employeeData.first_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employeeData == null ? null : ctx.employeeData.last_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employeeData == null ? null : ctx.employeeData.role.role_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+91- ", ctx.employeeData == null ? null : ctx.employeeData.mobile, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employeeData == null ? null : ctx.employeeData.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isChangePassword);
          }
        },
        directives: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_9__["NzDividerComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormLabelComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalContentDirective"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_12__["NzSpinComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormItemComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuickViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-quick-view',
            templateUrl: './quick-view.component.html'
          }]
        }], function () {
          return [{
            type: _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__["ThemeConstantService"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalService"]
          }, {
            type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "D2SG":
    /*!*******************************************************************************************!*\
      !*** ./src/app/applications/common-document-actions/common-document-actions.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: CommonDocumentActionsComponent */

    /***/
    function D2SG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonDocumentActionsComponent", function () {
        return CommonDocumentActionsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/radio */
      "bE2y");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/upload */
      "D9mS");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/divider */
      "5vDB");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");

      var _c0 = ["imageRotateClass"];
      var _c1 = ["imageRotateClassF"];

      function CommonDocumentActionsComponent_section_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-radio-group", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CommonDocumentActionsComponent_section_2_div_2_Template_nz_radio_group_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.currentDocumentType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Front View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.documentData == null ? null : ctx_r7.documentData.document_master == null ? null : ctx_r7.documentData.document_master.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.currentDocumentType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 2);
        }
      }

      function CommonDocumentActionsComponent_section_2_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password : ", ctx_r8.documentData == null ? null : ctx_r8.documentData.file_password, " ");
        }
      }

      function CommonDocumentActionsComponent_section_2_div_4_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r13.documentData == null ? null : ctx_r13.documentData.front_file_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "Preview" + (ctx_r13.documentData == null ? null : ctx_r13.documentData.document_master == null ? null : ctx_r13.documentData.document_master.name), " ");
        }
      }

      function CommonDocumentActionsComponent_section_2_div_4_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonDocumentActionsComponent_section_2_div_4_div_5_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r16.rotateLeftF();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonDocumentActionsComponent_section_2_div_4_div_5_Template_img_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r18.rotateRightF();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "height": a0
        };
      };

      function CommonDocumentActionsComponent_section_2_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommonDocumentActionsComponent_section_2_div_4_span_1_Template, 3, 2, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "embed", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CommonDocumentActionsComponent_section_2_div_4_div_5_Template, 3, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r9.documentData == null ? null : ctx_r9.documentData.document_master == null ? null : ctx_r9.documentData.document_master.name) == "Voter ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r9.documentData == null ? null : ctx_r9.documentData.fresh_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, (ctx_r9.documentData == null ? null : ctx_r9.documentData.document_master == null ? null : ctx_r9.documentData.document_master.name) == "Bank Statement" ? "50vh" : "100%"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r9.documentData == null ? null : ctx_r9.documentData.document_master == null ? null : ctx_r9.documentData.document_master.name) != "Bank Statement");
        }
      }

      function CommonDocumentActionsComponent_section_2_div_5_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r19.documentData == null ? null : ctx_r19.documentData.back_file_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", "Preview" + (ctx_r19.documentData == null ? null : ctx_r19.documentData.document_master == null ? null : ctx_r19.documentData.document_master.name), " ");
        }
      }

      function CommonDocumentActionsComponent_section_2_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommonDocumentActionsComponent_section_2_div_5_span_1_Template, 3, 2, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "embed", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonDocumentActionsComponent_section_2_div_5_Template_img_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r21.rotateLeft();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonDocumentActionsComponent_section_2_div_5_Template_img_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r23.rotateRight();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r10.documentData == null ? null : ctx_r10.documentData.document_master == null ? null : ctx_r10.documentData.document_master.name) == "Voter ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r10.documentData == null ? null : ctx_r10.documentData.back_file_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, (ctx_r10.documentData == null ? null : ctx_r10.documentData.document_master == null ? null : ctx_r10.documentData.document_master.name) == "Bank Statement" ? "50vh" : "100%"));
        }
      }

      function CommonDocumentActionsComponent_section_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommonDocumentActionsComponent_section_2_div_2_Template, 8, 4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CommonDocumentActionsComponent_section_2_div_3_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CommonDocumentActionsComponent_section_2_div_4_Template, 6, 6, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CommonDocumentActionsComponent_section_2_div_5_Template, 8, 5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isDoubleSide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.documentData == null ? null : ctx_r0.documentData.file_password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isDoubleSide ? ctx_r0.isDoubleSide && ctx_r0.currentDocumentType == 1 : ctx_r0.currentDocumentType == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isDoubleSide ? ctx_r0.isDoubleSide && ctx_r0.currentDocumentType == 2 : ctx_r0.currentDocumentType == 2);
        }
      }

      function CommonDocumentActionsComponent_section_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-radio-group", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CommonDocumentActionsComponent_section_3_Template_nz_radio_group_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.documentStatus = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Accept");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Reject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Remarks: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "textarea", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CommonDocumentActionsComponent_section_3_Template_textarea_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.verifyRemarks = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Verify ", (ctx_r1.documentData == null ? null : ctx_r1.documentData.document_master == null ? null : ctx_r1.documentData.document_master.name) + " Document", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.documentStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.verifyRemarks);
        }
      }

      function CommonDocumentActionsComponent_section_4_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-upload", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFileListChange", function CommonDocumentActionsComponent_section_4_ng_container_2_Template_nz_upload_nzFileListChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r29.fileList = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-upload", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFileListChange", function CommonDocumentActionsComponent_section_4_ng_container_2_Template_nz_upload_nzFileListChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r31.fileListSecond = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAccept", ".pdf, .img, .jpeg, .png, .jpg")("nzBeforeUpload", ctx_r27.beforeUploadName)("nzMultiple", false)("nzFileList", ctx_r27.fileList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r27.documentData == null ? null : ctx_r27.documentData.document_master == null ? null : ctx_r27.documentData.document_master.name) + " Front Side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r27.fileList[0] ? "Re-Upload" : "Upload", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAccept", ".pdf, .img, .jpeg, .png, .jpg")("nzBeforeUpload", ctx_r27.beforeUpload)("nzMultiple", false)("nzFileList", ctx_r27.fileListSecond);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r27.documentData == null ? null : ctx_r27.documentData.document_master == null ? null : ctx_r27.documentData.document_master.name) + " Back Side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r27.fileListSecond[0] ? "Re-Upload" : "Upload", " ");
        }
      }

      function CommonDocumentActionsComponent_section_4_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-upload", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFileListChange", function CommonDocumentActionsComponent_section_4_div_3_Template_nz_upload_nzFileListChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r32.fileList = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Drag and Drop file here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAccept", ".pdf, .img, .jpeg, .png, .jpg")("nzBeforeUpload", ctx_r28.beforeUploadName)("nzMultiple", false)("nzFileList", ctx_r28.fileList);
        }
      }

      function CommonDocumentActionsComponent_section_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommonDocumentActionsComponent_section_4_ng_container_2_Template, 14, 12, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CommonDocumentActionsComponent_section_4_div_3_Template, 8, 4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isDoubleSide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isDoubleSide);
        }
      }

      function CommonDocumentActionsComponent_ng_template_5_label_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " View Document ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CommonDocumentActionsComponent_ng_template_5_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Verify Document ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CommonDocumentActionsComponent_ng_template_5_label_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upload Document ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CommonDocumentActionsComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CommonDocumentActionsComponent_ng_template_5_label_0_Template, 3, 0, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommonDocumentActionsComponent_ng_template_5_label_1_Template, 3, 0, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommonDocumentActionsComponent_ng_template_5_label_2_Template, 3, 0, "label", 2);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.action == "viewDocument");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.action == "verifyDocument");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.action == "uploadDocument");
        }
      }

      function CommonDocumentActionsComponent_ng_template_7_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonDocumentActionsComponent_ng_template_7_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r40.handleOk("verify");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r37.api_calling_loader["button"])("disabled", !ctx_r37.documentStatus ? true : false);
        }
      }

      function CommonDocumentActionsComponent_ng_template_7_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonDocumentActionsComponent_ng_template_7_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r42.handleOk("uploadDocument");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !((ctx_r38.documentData == null ? null : ctx_r38.documentData.front_file_url) || ctx_r38.fileList[0]) ? true : false)("nzLoading", ctx_r38.api_calling_loader["button"]);
        }
      }

      function CommonDocumentActionsComponent_ng_template_7_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonDocumentActionsComponent_ng_template_7_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r44.handleOk("uploadDocument");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r39._currentFileName2 ? true : false)("nzLoading", ctx_r39.api_calling_loader["button"]);
        }
      }

      function CommonDocumentActionsComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonDocumentActionsComponent_ng_template_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r46.handleCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommonDocumentActionsComponent_ng_template_7_button_2_Template, 2, 2, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CommonDocumentActionsComponent_ng_template_7_button_3_Template, 2, 2, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CommonDocumentActionsComponent_ng_template_7_button_4_Template, 2, 2, "button", 41);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.action == "verifyDocument" ? true : false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.action == "uploadDocument" && (ctx_r6.isDoubleSide ? ctx_r6.currentDocumentType == 1 ? true : false : true));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.action == "uploadDocument" && (ctx_r6.isDoubleSide ? ctx_r6.currentDocumentType == 2 ? true : false : false));
        }
      }

      var CommonDocumentActionsComponent = /*#__PURE__*/function () {
        function CommonDocumentActionsComponent(sanitize, https, message, renderer) {
          var _this8 = this;

          _classCallCheck(this, CommonDocumentActionsComponent);

          this.sanitize = sanitize;
          this.https = https;
          this.message = message;
          this.renderer = renderer;
          this._isOpenModal = false;
          this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.fileList = [];
          this.api_calling_loader = {
            'cardLoader': false,
            'button': false
          };
          this.isDoubleSide = false;
          this.fileListSecond = [];
          this.currentDocumentType = 1;
          this.state = '';
          this.axis = 0;
          this.axisF = 0;

          this.beforeUploadName = function (file) {
            _this8.fileList = [];
            _this8.fileList = _this8.fileList.concat(file);
            _this8._currentFileName = file; // this.generateBase64View(file)

            return false;
          };

          this.beforeUpload = function (file) {
            _this8.fileListSecond = [];
            _this8.fileListSecond = _this8.fileListSecond.concat(file);
            _this8._currentFileName2 = file; // this.generateBase64View(file)

            return false;
          };
        }

        _createClass(CommonDocumentActionsComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {// this.close.emit(false)
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a, _b, _c, _d, _e, _f;

            if (((_b = (_a = this.documentData) === null || _a === void 0 ? void 0 : _a.document_master) === null || _b === void 0 ? void 0 : _b.require_front_back) == 1) {
              this.isDoubleSide = true;
            } else {
              this.isDoubleSide = false;
            }

            var temp = this.documentData['back_file_url'];
            this.documentData['back_file_url'] = typeof this.documentData['back_file_url'] == 'object' ? temp : this.sanatizeUrlToSafe((_c = this.documentData) === null || _c === void 0 ? void 0 : _c.back_file_url);
            this.documentData['fresh_url'] = this.sanatizeUrlToSafe(this.isDoubleSide ? this.isDoubleSide && this.currentDocumentType == 1 ? (_d = this.documentData) === null || _d === void 0 ? void 0 : _d.front_file_url : (_e = this.documentData) === null || _e === void 0 ? void 0 : _e.back_file_url : (_f = this.documentData) === null || _f === void 0 ? void 0 : _f.file_url);
          }
        }, {
          key: "handleCancel",
          value: function handleCancel() {
            this._isOpenModal = false;
            this.documentData = null;
            this.close.emit(false);
          }
        }, {
          key: "sanatizeUrlToSafe",
          value: function sanatizeUrlToSafe(value) {
            this.api_calling_loader['cardLoader'] = false; // let data = 'https://devadminapi.fatakpay.com/media/nbfc_agreements/2022/02/11/djangogirls-tutorial-en_DkLZGLR.pdf'

            return this.sanitize.bypassSecurityTrustResourceUrl(value);
          }
        }, {
          key: "handleOk",
          value: function handleOk(type) {
            var _this9 = this;

            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21;

            switch (type) {
              case 'verify':
                this.api_calling_loader['button'] = true;
                var params = new FormData();
                params.append('source', 'Onboarding');

                if ((_b = (_a = this.documentData) === null || _a === void 0 ? void 0 : _a.document_master) === null || _b === void 0 ? void 0 : _b.id) {
                  params.append('datapoint', 'verify_kyc_doc');
                  params.append('application_id', (_c = this.documentData) === null || _c === void 0 ? void 0 : _c.application);
                  params.append('kyc_document_id', (_d = this.documentData) === null || _d === void 0 ? void 0 : _d.id);
                  params.append('status', this.documentStatus == 1 ? 'Accepted' : 'Rejected');
                  params.append('reason', this.verifyRemarks ? this.verifyRemarks : '');
                } else if (((_f = (_e = this.documentData) === null || _e === void 0 ? void 0 : _e.document_master) === null || _f === void 0 ? void 0 : _f.name) == "Selfie") {
                  params.append('datapoint', 'verify_selfie');
                  params.append('application_id', (_g = this.documentData) === null || _g === void 0 ? void 0 : _g.application);
                  params.append('status', this.documentStatus == 1 ? 'Accepted' : 'Rejected');
                  params.append('reason', this.verifyRemarks ? this.verifyRemarks : '');
                }

                this.https.verifyLoanDocument(params).subscribe(function (res) {
                  if (res === null || res === void 0 ? void 0 : res.success) {
                    _this9.api_calling_loader['button'] = false;

                    _this9.message.success(res === null || res === void 0 ? void 0 : res.message);

                    _this9.handleCancel();
                  } else {
                    _this9.api_calling_loader['button'] = false;

                    _this9.message.error(res === null || res === void 0 ? void 0 : res.message);
                  }
                }, function (err) {
                  _this9.api_calling_loader['button'] = false;

                  _this9.message.error(err);
                });
                break;

              case 'uploadDocument':
                this.api_calling_loader['button'] = true;
                var uploadDoc = new FormData();
                var ocr_formData = new FormData();
                ocr_formData.append('application', (_h = this.documentData) === null || _h === void 0 ? void 0 : _h.application);
                uploadDoc.append('source', 'Onboarding');

                if ((_k = (_j = this.documentData) === null || _j === void 0 ? void 0 : _j.document_master) === null || _k === void 0 ? void 0 : _k.id) {
                  uploadDoc.append('datapoint', 'upload_kyc_doc');
                } else if (((_m = (_l = this.documentData) === null || _l === void 0 ? void 0 : _l.document_master) === null || _m === void 0 ? void 0 : _m.name) == "Selfie") {
                  uploadDoc.append('datapoint', 'upload_selfie');
                }

                uploadDoc.append('application_id', (_o = this.documentData) === null || _o === void 0 ? void 0 : _o.application);

                if ((_p = this.documentData) === null || _p === void 0 ? void 0 : _p.id) {
                  uploadDoc.append('kyc_document_id', (_q = this.documentData) === null || _q === void 0 ? void 0 : _q.id);
                }

                if ((_s = (_r = this.documentData) === null || _r === void 0 ? void 0 : _r.document_master) === null || _s === void 0 ? void 0 : _s.id) {
                  uploadDoc.append('document_id', (_u = (_t = this.documentData) === null || _t === void 0 ? void 0 : _t.document_master) === null || _u === void 0 ? void 0 : _u.id);
                }

                if (this.isDoubleSide && this._currentFileName) {
                  uploadDoc.append('front_file', this._currentFileName);
                }

                if (this.isDoubleSide && this._currentFileName2) {
                  uploadDoc.append('back_file', this._currentFileName2);
                }

                if (!this.isDoubleSide && this._currentFileName) {
                  uploadDoc.append('file', this._currentFileName);
                }

                console.clear();
                console.log(this.documentData);

                if (((_w = (_v = this.documentData) === null || _v === void 0 ? void 0 : _v.document_master) === null || _w === void 0 ? void 0 : _w.name) == "Aadhar Card") {
                  ocr_formData.append('document_type', 'AADHAR');
                  ocr_formData.append('file_front', this._currentFileName);
                  ocr_formData.append('file_back', this._currentFileName2);
                }

                if (((_y = (_x = this.documentData) === null || _x === void 0 ? void 0 : _x.document_master) === null || _y === void 0 ? void 0 : _y.name) == "Pan") {
                  ocr_formData.append('document_type', 'PAN');
                  ocr_formData.append('document', this._currentFileName);
                }

                if (((_0 = (_z = this.documentData) === null || _z === void 0 ? void 0 : _z.document_master) === null || _0 === void 0 ? void 0 : _0.name) == "Voter ID") {
                  ocr_formData.append('document_type', 'VOTERID');
                  ocr_formData.append('file_front', this._currentFileName);
                  ocr_formData.append('file_back', this._currentFileName2);
                }

                if (((_2 = (_1 = this.documentData) === null || _1 === void 0 ? void 0 : _1.document_master) === null || _2 === void 0 ? void 0 : _2.name) == "Driving License") {
                  ocr_formData.append('document_type', 'DRIVING');
                  ocr_formData.append('file_front', this._currentFileName);
                  ocr_formData.append('file_back', this._currentFileName2);
                } // this.documentData?.document_master?.name == "Other Document"
                // console.log(this.documentData?.document_master?.name + ' Testing Is In progress');
                // return;
                // "Other Document" this.documentData?.document_master?.name == "Selfie" ||
                // if (this.documentData?.document_master?.name == "Other Document" || this.documentData?.document_master?.name == "Selfie") {


                var uploadDocForOtherDoc = new FormData();
                console.log(uploadDoc); // delete uploadDoc['kyc_document_id'];
                // uploadDocForOtherDoc.append('application_id', this.documentData?.application);
                // if (this.documentData?.document_master?.name == "Other Document") {

                uploadDocForOtherDoc.append('document_id', (_4 = (_3 = this.documentData) === null || _3 === void 0 ? void 0 : _3.document_master) === null || _4 === void 0 ? void 0 : _4.id);
                uploadDocForOtherDoc.append('application_id', (_5 = this.documentData) === null || _5 === void 0 ? void 0 : _5.application);
                uploadDocForOtherDoc.append('file', this._currentFileName); // }

                if (((_7 = (_6 = this.documentData) === null || _6 === void 0 ? void 0 : _6.document_master) === null || _7 === void 0 ? void 0 : _7.name) == "Selfie") {
                  // uploadDocForOtherDoc.append('endpoint', this.documentData?.application);
                  uploadDocForOtherDoc.append('endpoint', (_9 = (_8 = this.userApplicationData) === null || _8 === void 0 ? void 0 : _8.user_info) === null || _9 === void 0 ? void 0 : _9.id);
                  uploadDocForOtherDoc.append('selfie', this._currentFileName);
                } // endpoint


                uploadDocForOtherDoc.append('source', 'Onboarding');
                uploadDocForOtherDoc.append('datapoint', ((_11 = (_10 = this.documentData) === null || _10 === void 0 ? void 0 : _10.document_master) === null || _11 === void 0 ? void 0 : _11.name) == "Selfie" ? 'upload_selfie_appuser' : 'upload_kyc_doc');
                var httpURL = ((_13 = (_12 = this.documentData) === null || _12 === void 0 ? void 0 : _12.document_master) === null || _13 === void 0 ? void 0 : _13.name) == "Selfie" ? this.https.uploadLoanSelfieDocument(uploadDocForOtherDoc) : this.https.uploadLoanDocument(uploadDocForOtherDoc);
                console.log(httpURL, 'API'); // }
                // uploadOtherDocument
                // if ( this.documentData?.document_master?.name == "Other Document"){
                //   this.https.uploadLoanDocument(uploadDoc).subscribe((res: any) => {
                //     if (res?.success) {
                //       this.api_calling_loader['button'] = false;
                //       this.fileList = [];
                //       this.message.success(res?.message)
                //     } else {
                //       this.api_calling_loader['button'] = false;
                //       this.fileList = [];
                //       this.message.error(res?.message)
                //     }
                //     if (this.documentData?.document_master?.name != "Aadhar Card" ||
                //       this.documentData?.document_master?.name != "Pan" ||
                //       this.documentData?.document_master?.name != "Voter ID" ||
                //       this.documentData?.document_master?.name != "Driving License") {
                //       this.handleCancel();
                //     }
                //   }, err => {
                //     this.api_calling_loader['button'] = false;
                //     this.message.error(err)
                //   })
                // }

                if (((_15 = (_14 = this.documentData) === null || _14 === void 0 ? void 0 : _14.document_master) === null || _15 === void 0 ? void 0 : _15.name) == "Aadhar Card" || ((_17 = (_16 = this.documentData) === null || _16 === void 0 ? void 0 : _16.document_master) === null || _17 === void 0 ? void 0 : _17.name) == "Pan" || ((_19 = (_18 = this.documentData) === null || _18 === void 0 ? void 0 : _18.document_master) === null || _19 === void 0 ? void 0 : _19.name) == "Voter ID" || ((_21 = (_20 = this.documentData) === null || _20 === void 0 ? void 0 : _20.document_master) === null || _21 === void 0 ? void 0 : _21.name) == "Driving License") {
                  this.https.uploadOcrDocument(ocr_formData).subscribe(function (res) {
                    if (res === null || res === void 0 ? void 0 : res.success) {
                      _this9.handleCancel();

                      _this9.message.success(res === null || res === void 0 ? void 0 : res.message);
                    } else {
                      _this9.handleCancel();

                      _this9.message.error(res === null || res === void 0 ? void 0 : res.message);
                    }
                  }, function (err) {
                    _this9.handleCancel();
                  });
                } else {
                  httpURL.subscribe(function (res) {
                    var _a, _b, _c, _d, _e, _f, _g, _h;

                    if (res === null || res === void 0 ? void 0 : res.success) {
                      _this9.api_calling_loader['button'] = false;
                      _this9.fileList = [];

                      _this9.message.success(res === null || res === void 0 ? void 0 : res.message);
                    } else {
                      _this9.api_calling_loader['button'] = false;
                      _this9.fileList = [];

                      _this9.message.error(res === null || res === void 0 ? void 0 : res.message);
                    }

                    if (((_b = (_a = _this9.documentData) === null || _a === void 0 ? void 0 : _a.document_master) === null || _b === void 0 ? void 0 : _b.name) != "Aadhar Card" || ((_d = (_c = _this9.documentData) === null || _c === void 0 ? void 0 : _c.document_master) === null || _d === void 0 ? void 0 : _d.name) != "Pan" || ((_f = (_e = _this9.documentData) === null || _e === void 0 ? void 0 : _e.document_master) === null || _f === void 0 ? void 0 : _f.name) != "Voter ID" || ((_h = (_g = _this9.documentData) === null || _g === void 0 ? void 0 : _g.document_master) === null || _h === void 0 ? void 0 : _h.name) != "Driving License") {
                      _this9.handleCancel();
                    }
                  }, function (err) {
                    _this9.api_calling_loader['button'] = false;

                    _this9.message.error(err);
                  });
                }

                break;
            }
          }
        }, {
          key: "rotateRight",
          value: function rotateRight() {
            this.axis = this.axis + 90;

            if (this.axis == 90) {
              this.renderer.setStyle(this.myNameElem.nativeElement, 'transform', 'rotate(-90deg)');
            } else if (this.axis == 180) {
              this.renderer.setStyle(this.myNameElem.nativeElement, 'transform', 'rotate(-180deg)');
            } else if (this.axis == 270) {
              this.renderer.setStyle(this.myNameElem.nativeElement, 'transform', 'rotate(-270deg)');
            } else {
              this.renderer.setStyle(this.myNameElem.nativeElement, 'transform', 'rotate(0deg)');
              this.axis = 0;
            }
          }
        }, {
          key: "rotateLeft",
          value: function rotateLeft() {
            this.axis = this.axis - 90;

            if (this.axis == 90) {
              this.renderer.setStyle(this.myNameElem.nativeElement, 'transform', 'rotate(90deg)');
            } else if (this.axis == 180) {
              this.renderer.setStyle(this.myNameElem.nativeElement, 'transform', 'rotate(180deg)');
            } else if (this.axis == 270) {
              this.renderer.setStyle(this.myNameElem.nativeElement, 'transform', 'rotate(270deg)');
            } else {
              this.renderer.setStyle(this.myNameElem.nativeElement, 'transform', 'rotate(0deg)');
              this.axis = 0;
            }
          }
        }, {
          key: "rotateRightF",
          value: function rotateRightF() {
            this.axisF = this.axisF + 90;

            if (this.axisF == 90) {
              this.renderer.setStyle(this.myNameElemF.nativeElement, 'transform', 'rotate(-90deg)');
            } else if (this.axisF == 180) {
              this.renderer.setStyle(this.myNameElemF.nativeElement, 'transform', 'rotate(-180deg)');
            } else if (this.axisF == 270) {
              this.renderer.setStyle(this.myNameElemF.nativeElement, 'transform', 'rotate(-270deg)');
            } else {
              this.renderer.setStyle(this.myNameElemF.nativeElement, 'transform', 'rotate(0deg)');
              this.axisF = 0;
            }
          }
        }, {
          key: "rotateLeftF",
          value: function rotateLeftF() {
            this.axisF = this.axisF + 90;

            if (this.axisF == 90) {
              this.renderer.setStyle(this.myNameElemF.nativeElement, 'transform', 'rotate(90deg)');
            } else if (this.axisF == 180) {
              this.renderer.setStyle(this.myNameElemF.nativeElement, 'transform', 'rotate(180deg)');
            } else if (this.axisF == 270) {
              this.renderer.setStyle(this.myNameElemF.nativeElement, 'transform', 'rotate(270deg)');
            } else {
              this.renderer.setStyle(this.myNameElemF.nativeElement, 'transform', 'rotate(0deg)');
              this.axisF = 0;
            }
          }
        }, {
          key: "frontUrlSanitized",
          value: function frontUrlSanitized() {
            var _a, _b, _c;

            return this.sanatizeUrlToSafe(this.isDoubleSide ? this.isDoubleSide && this.currentDocumentType == 1 ? (_a = this.documentData) === null || _a === void 0 ? void 0 : _a.front_file_url : (_b = this.documentData) === null || _b === void 0 ? void 0 : _b.back_file_url : (_c = this.documentData) === null || _c === void 0 ? void 0 : _c.file_url);
          }
        }, {
          key: "backUrlSanitized",
          value: function backUrlSanitized() {
            var _a;

            return this.sanatizeUrlToSafe((_a = this.documentData) === null || _a === void 0 ? void 0 : _a.back_file_url);
          }
        }]);

        return CommonDocumentActionsComponent;
      }();

      CommonDocumentActionsComponent.ɵfac = function CommonDocumentActionsComponent_Factory(t) {
        return new (t || CommonDocumentActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      CommonDocumentActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CommonDocumentActionsComponent,
        selectors: [["app-common-document-actions"]],
        viewQuery: function CommonDocumentActionsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myNameElem = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myNameElemF = _t.first);
          }
        },
        inputs: {
          _isOpenModal: "_isOpenModal",
          documentData: "documentData",
          userApplicationData: "userApplicationData",
          action: "action"
        },
        outputs: {
          close: "close"
        },
        decls: 9,
        vars: 7,
        consts: [["nzHeight", "50vw", "nzWidth", "60vw", 3, "nzVisible", "nzTitle", "nzFooter", "nzVisibleChange", "nzOnCancel"], [1, "border-0", 3, "nzLoading"], [4, "ngIf"], ["modalTitle", ""], ["footerModal", ""], [1, "row"], ["class", "col-md-12 mb-3", 4, "ngIf"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-12", "mb-3"], ["nzButtonStyle", "solid", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 1, "mb-3", "mb-md-0", 3, "nzValue"], ["nz-radio", "", 1, "mb-3", "mx-3", "mb-md-0", 3, "nzValue"], [1, "col-md-12"], ["class", "mb-5 pb-4", 4, "ngIf"], [1, "image-rotate-class", "mt-4"], ["imageRotateClassF", ""], [1, "w-100", 2, "height", "50vh !important", 3, "src", "ngStyle"], ["class", "col-md-12 d-flex justify-content-end h1 mt-3", 4, "ngIf"], [1, "mb-5", "pb-4"], ["target", "_blank", 3, "href"], [1, "col-md-12", "d-flex", "justify-content-end", "h1", "mt-3"], ["src", "assets/images/Left.svg", 1, "mr-3", "pointer", 3, "click"], ["src", "assets/images/Right.svg", 1, "pointer", 3, "click"], ["imageRotateClass", ""], [1, "w-100", 3, "src", "ngStyle"], [1, "d-flex", "flex-column"], [3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue"], [1, "d-flex", "flex-wrap", "mt-3"], ["rows", "4", "nz-input", "", 3, "ngModel", "ngModelChange"], [1, "col-md-12", "mb-4"], ["nzType", "drag", 3, "nzAccept", "nzBeforeUpload", "nzMultiple", "nzFileList", "nzFileListChange"], [1, "ant-upload-text"], ["nz-button", "", "nzType", "primary", 1, "mt-md-2"], ["nzListType", "picture", "nzType", "drag", 3, "nzAccept", "nzBeforeUpload", "nzMultiple", "nzFileList", "nzFileListChange"], ["nz-button", "", "nzType", "primary", 1, "mt-md-4"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline", 1, "mr-3"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "outline", 1, "mr-3"], ["nz-icon", "", "nzType", "upload", "nzTheme", "outline", 1, "mr-3"], ["nz-button", "", "nzType", "link", 1, "border", 3, "click"], ["nz-button", "", "nzType", "primary", "class", "mx-2", 3, "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "class", "mx-2", 3, "disabled", "nzLoading", "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", 1, "mx-2", 3, "nzLoading", "disabled", "click"], ["nz-button", "", "nzType", "primary", 1, "mx-2", 3, "disabled", "nzLoading", "click"]],
        template: function CommonDocumentActionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-modal", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function CommonDocumentActionsComponent_Template_nz_modal_nzVisibleChange_0_listener($event) {
              return ctx._isOpenModal = $event;
            })("nzOnCancel", function CommonDocumentActionsComponent_Template_nz_modal_nzOnCancel_0_listener() {
              return ctx.handleCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommonDocumentActionsComponent_section_2_Template, 6, 4, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CommonDocumentActionsComponent_section_3_Template, 15, 5, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CommonDocumentActionsComponent_section_4_Template, 4, 2, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CommonDocumentActionsComponent_ng_template_5_Template, 3, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CommonDocumentActionsComponent_ng_template_7_Template, 5, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx._isOpenModal)("nzTitle", _r3)("nzFooter", _r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_calling_loader["cardLoader"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action == "viewDocument");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action == "verifyDocument" ? true : false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action == "uploadDocument" ? true : false);
          }
        },
        directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_7__["NzRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_7__["NzRadioComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_10__["NzUploadComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_14__["NzDividerComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi1kb2N1bWVudC1hY3Rpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHIiwiZmlsZSI6ImNvbW1vbi1kb2N1bWVudC1hY3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuaW1hZ2Utcm90YXRlLWNsYXNzIHtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNTAwcHggIWltcG9ydGFudDtcbn0gKi9cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonDocumentActionsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-common-document-actions',
            templateUrl: './common-document-actions.component.html',
            styleUrls: ['./common-document-actions.component.css']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
          }, {
            type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          myNameElem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["imageRotateClass"]
          }],
          myNameElemF: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["imageRotateClassF"]
          }],
          _isOpenModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          documentData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          userApplicationData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "E3OB":
    /*!*******************************************************************!*\
      !*** ./src/app/applications/kyc-details/kyc-details.component.ts ***!
      \*******************************************************************/

    /*! exports provided: KycDetailsComponent */

    /***/
    function E3OB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KycDetailsComponent", function () {
        return KycDetailsComponent;
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


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var src_app_shared_globalservices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/globalservices.service */
      "Wum+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/page-header */
      "jPNr");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/table */
      "rMZv");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/tooltip */
      "nJia");
      /* harmony import */


      var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/dropdown */
      "Nqz0");
      /* harmony import */


      var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/menu */
      "Q8cG");
      /* harmony import */


      var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-json-viewer */
      "xWP1");
      /* harmony import */


      var _common_document_actions_common_document_actions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../common-document-actions/common-document-actions.component */
      "D2SG");
      /* harmony import */


      var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ng-zorro-antd/upload */
      "D9mS");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");

      function KycDetailsComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " KYC Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycDetailsComponent_div_24_div_1_a_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycDetailsComponent_div_24_div_1_a_8_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            ctx_r42._currentModalData = item_r37;
            return ctx_r42._isViewDocument = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycDetailsComponent_div_24_div_1_a_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycDetailsComponent_div_24_div_1_a_9_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            ctx_r45._isVerify = true;
            return ctx_r45._currentModalData = item_r37;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycDetailsComponent_div_24_div_1_a_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r37 == null ? null : item_r37.front_file_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function KycDetailsComponent_div_24_div_1_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password : ", item_r37 == null ? null : item_r37.file_password, " ");
        }
      }

      function KycDetailsComponent_div_24_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, KycDetailsComponent_div_24_div_1_a_8_Template, 2, 0, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, KycDetailsComponent_div_24_div_1_a_9_Template, 2, 0, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, KycDetailsComponent_div_24_div_1_a_10_Template, 2, 1, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycDetailsComponent_div_24_div_1_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var item_r37 = ctx.$implicit;

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            ctx_r50._isUpload = true;
            return ctx_r50._currentModalData = item_r37;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, KycDetailsComponent_div_24_div_1_div_15_Template, 2, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (item_r37 == null ? null : item_r37.document_master == null ? null : item_r37.document_master.name) + " ", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r37 == null ? null : item_r37.status, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r37 == null ? null : item_r37.document_master == null ? null : item_r37.document_master.require_front_back) == 1 ? item_r37 == null ? null : item_r37.front_file_url : item_r37 == null ? null : item_r37.file_url);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37 == null ? null : item_r37.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r37 == null ? null : item_r37.document_master == null ? null : item_r37.document_master.require_front_back) == 1 ? item_r37 == null ? null : item_r37.front_file_url : item_r37 == null ? null : item_r37.file_url);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r37 == null ? null : item_r37.reason) ? item_r37 == null ? null : item_r37.reason : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37 == null ? null : item_r37.file_password);
        }
      }

      function KycDetailsComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KycDetailsComponent_div_24_div_1_Template, 16, 7, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.data == null ? null : ctx_r2.data.kyc_documents);
        }
      }

      function KycDetailsComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Documents not uploaded ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycDetailsComponent_ng_template_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Document Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycDetailsComponent_div_32_ng_container_23_li_42_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycDetailsComponent_div_32_ng_container_23_li_42_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

            var item_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            ctx_r59._currByPassId = item_r55 == null ? null : item_r55.id;
            return ctx_r59.verifyByPass();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Verify");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycDetailsComponent_div_32_ng_container_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "i", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycDetailsComponent_div_32_ng_container_23_Template_i_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var item_r55 = ctx.$implicit;

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r62.downloadFile(item_r55 == null ? null : item_r55.file, item_r55 == null ? null : item_r55.application);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nz-dropdown-menu", null, 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycDetailsComponent_div_32_ng_container_23_Template_li_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var item_r55 = ctx.$implicit;

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            ctx_r64._currByPassId = item_r55 == null ? null : item_r55.id;
            return ctx_r64.openModalPhysicalProofs("upload");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Upload File");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycDetailsComponent_div_32_ng_container_23_Template_li_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var item_r55 = ctx.$implicit;

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            ctx_r65._currByPassId = item_r55 == null ? null : item_r55.id;
            return ctx_r65.openModalPhysicalProofs("byPass");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "By Pass Verification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, KycDetailsComponent_div_32_ng_container_23_li_42_Template, 3, 0, "li", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r55 = ctx.$implicit;
          var i_r56 = ctx.index;

          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r56 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r55 == null ? null : item_r55.created_at) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 16, item_r55 == null ? null : item_r55.created_at, "meduim") : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r55 == null ? null : item_r55.status) ? item_r55 == null ? null : item_r55.status : "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r55 == null ? null : item_r55.uploaded_by_name) ? item_r55 == null ? null : item_r55.uploaded_by_name : "", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Contact No: ", (item_r55 == null ? null : item_r55.uploaded_by_mobile) ? item_r55 == null ? null : item_r55.uploaded_by_mobile : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email: ", (item_r55 == null ? null : item_r55.uploaded_by_email) ? item_r55 == null ? null : item_r55.uploaded_by_email : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r55 == null ? null : item_r55.verified_by_name) ? item_r55 == null ? null : item_r55.verified_by_name : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Contact No: ", (item_r55 == null ? null : item_r55.verified_by_mobile) ? item_r55 == null ? null : item_r55.verified_by_mobile : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Email: ", (item_r55 == null ? null : item_r55.verified_by_email) ? item_r55 == null ? null : item_r55.verified_by_email : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (item_r55 == null ? null : item_r55.verification_date) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 19, item_r55 == null ? null : item_r55.verification_date, "meduim") : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", "5rem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzClickHide", false)("nzTrigger", "click")("nzPlacement", "bottomRight")("nzDropdownMenu", _r57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r55 == null ? null : item_r55.status) !== "Approved");
        }
      }

      function KycDetailsComponent_div_32_ng_template_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Physical Verification Proffs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          x: "1500px",
          y: "45vh"
        };
      };

      function KycDetailsComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-page-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-table", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Created At");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Uploaded By Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Verified By Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Verification Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "File");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, KycDetailsComponent_div_32_ng_container_23_Template, 43, 22, "ng-container", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, KycDetailsComponent_div_32_ng_template_24_Template, 3, 0, "ng-template", null, 53, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r6.api_calling_loader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFrontPagination", false)("nzLoading", ctx_r6.api_calling_loader)("nzFrontPagination", false)("nzShowSizeChanger", false)("nzData", ctx_r6.data == null ? null : ctx_r6.data.physical_verification_proofs)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.data == null ? null : ctx_r6.data.physical_verification_proofs);
        }
      }

      function KycDetailsComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Address Line 1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Address Line 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " City ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " State ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Pincode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r66 = ctx.$implicit;
          var i_r67 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Address ", i_r67 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r66 == null ? null : item_r66.address_1) ? item_r66 == null ? null : item_r66.address_1 : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r66 == null ? null : item_r66.address_2) ? item_r66 == null ? null : item_r66.address_2 : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r66 == null ? null : item_r66.city) ? item_r66 == null ? null : item_r66.city : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r66 == null ? null : item_r66.state) ? item_r66 == null ? null : item_r66.state : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r66 == null ? null : item_r66.pincode) ? item_r66 == null ? null : item_r66.pincode : "-", " ");
        }
      }

      function KycDetailsComponent_ng_template_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Aadhar Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycDetailsComponent_ng_container_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r68 = ctx.$implicit;
          var i_r69 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r69 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r68 == null ? null : item_r68.Address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r68 == null ? null : item_r68.Postal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r68 == null ? null : item_r68.ReportedDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r68 == null ? null : item_r68.State);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r68 == null ? null : item_r68.Type);
        }
      }

      function KycDetailsComponent_ng_template_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cibil Pulled Addresses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycDetailsComponent_ng_container_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r70 = ctx.$implicit;
          var i_r71 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r71 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r70 == null ? null : item_r70.number);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r70 == null ? null : item_r70.reported_date);
        }
      }

      function KycDetailsComponent_ng_template_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cibil Pulled Mobiles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycDetailsComponent_th_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r72 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r72 == null ? null : item_r72.name, " ");
        }
      }

      function KycDetailsComponent_td_90_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 66);
        }
      }

      function KycDetailsComponent_td_90_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 67);
        }
      }

      function KycDetailsComponent_td_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KycDetailsComponent_td_90_i_1_Template, 1, 0, "i", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KycDetailsComponent_td_90_i_2_Template, 1, 0, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r73 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r73 == null ? null : item_r73.called);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(item_r73 == null ? null : item_r73.called));
        }
      }

      function KycDetailsComponent_td_94_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 66);
        }
      }

      function KycDetailsComponent_td_94_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 67);
        }
      }

      function KycDetailsComponent_td_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KycDetailsComponent_td_94_i_1_Template, 1, 0, "i", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KycDetailsComponent_td_94_i_2_Template, 1, 0, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r76 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r76 == null ? null : item_r76.response);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(item_r76 == null ? null : item_r76.response));
        }
      }

      function KycDetailsComponent_ng_template_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " API response ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycDetailsComponent_th_105_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r79 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r79 == null ? null : item_r79.document_master == null ? null : item_r79.document_master.name, " ");
        }
      }

      function KycDetailsComponent_td_110_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 66);
        }
      }

      function KycDetailsComponent_td_110_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 67);
        }
      }

      function KycDetailsComponent_td_110_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KycDetailsComponent_td_110_i_1_Template, 1, 0, "i", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KycDetailsComponent_td_110_i_2_Template, 1, 0, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r80 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r80 == null ? null : item_r80.api_response);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(item_r80 == null ? null : item_r80.api_response));
        }
      }

      function KycDetailsComponent_td_114_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycDetailsComponent_td_114_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

            var item_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r86.onClickShowJSONPreview(item_r83);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Preview ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(item_r83 == null ? null : item_r83.api_response));
        }
      }

      function KycDetailsComponent_td_114_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycDetailsComponent_td_114_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

            var item_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r90.onClickShowJSONPreview(item_r83);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Preview ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycDetailsComponent_td_114_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KycDetailsComponent_td_114_button_1_Template, 2, 1, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KycDetailsComponent_td_114_button_2_Template, 2, 0, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r83 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(item_r83 == null ? null : item_r83.api_response));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r83 == null ? null : item_r83.api_response);
        }
      }

      function KycDetailsComponent_ng_template_115_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Third Party API response ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycDetailsComponent_ng_container_118_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-json-viewer", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("json", ctx_r93.thirdPartyDataResponse)("expanded", true);
        }
      }

      function KycDetailsComponent_ng_container_118_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No data Found ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycDetailsComponent_ng_container_118_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KycDetailsComponent_ng_container_118_span_2_Template, 2, 2, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KycDetailsComponent_ng_container_118_span_3_Template, 2, 0, "span", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r28.api_calling_loader1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.thirdPartyDataResponse);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r28.thirdPartyDataResponse);
        }
      }

      function KycDetailsComponent_ng_template_119_Template(rf, ctx) {
        if (rf & 1) {
          var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycDetailsComponent_ng_template_119_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

            var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r95.isVisibleThirdPartyResp = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycDetailsComponent_ng_container_122_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Aadhar Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Selfie Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r31.api_calling_loader2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r31.storedSelfieImage == null ? null : ctx_r31.storedSelfieImage.aadhar_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r31.storedSelfieImage == null ? null : ctx_r31.storedSelfieImage.selfie_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function KycDetailsComponent_section_123_Template(rf, ctx) {
        if (rf & 1) {
          var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-common-document-actions", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function KycDetailsComponent_section_123_Template_app_common_document_actions_close_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);

            var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r97._isViewDocument = false;
            return ctx_r97._currentModalData = null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", "viewDocument")("_isOpenModal", ctx_r32._isViewDocument ? true : false)("documentData", ctx_r32._currentModalData);
        }
      }

      function KycDetailsComponent_section_124_Template(rf, ctx) {
        if (rf & 1) {
          var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-common-document-actions", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function KycDetailsComponent_section_124_Template_app_common_document_actions_close_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100);

            var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r99._isVerify = false;
            return ctx_r99.getKycDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", "verifyDocument")("_isOpenModal", ctx_r33._isVerify ? true : false)("documentData", ctx_r33._currentModalData);
        }
      }

      function KycDetailsComponent_section_125_Template(rf, ctx) {
        if (rf & 1) {
          var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-common-document-actions", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function KycDetailsComponent_section_125_Template_app_common_document_actions_close_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

            var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r101._isUpload = false;
            return ctx_r101.getKycDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", "uploadDocument")("_isOpenModal", ctx_r34._isUpload ? true : false)("documentData", ctx_r34._currentModalData);
        }
      }

      function KycDetailsComponent_section_126_ng_template_9_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycDetailsComponent_section_126_ng_template_9_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107);

            var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r106.handleOk();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r105._currModalType == "upload" ? !ctx_r105.fileList[0] ? true : false : ctx_r105.remarks.length > 1 ? true : false)("nzLoading", ctx_r105.api_calling_loader_modal);
        }
      }

      function KycDetailsComponent_section_126_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycDetailsComponent_section_126_ng_template_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109);

            var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r108.handleCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KycDetailsComponent_section_126_ng_template_9_button_2_Template, 2, 2, "button", 84);
        }

        if (rf & 2) {
          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r104._isUpload);
        }
      }

      function KycDetailsComponent_section_126_Template(rf, ctx) {
        if (rf & 1) {
          var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-modal", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function KycDetailsComponent_section_126_Template_nz_modal_nzVisibleChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111);

            var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r110.isVisible = $event;
          })("nzOnCancel", function KycDetailsComponent_section_126_Template_nz_modal_nzOnCancel_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111);

            var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r112.handleCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-upload", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzFileListChange", function KycDetailsComponent_section_126_Template_nz_upload_nzFileListChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111);

            var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r113.fileList = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Drag and Drop file here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Browse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, KycDetailsComponent_section_126_ng_template_9_Template, 3, 1, "ng-template", null, 83, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx_r35.isVisible)("nzTitle", ctx_r35.modalTitle1)("nzContent", ctx_r35.modalContent)("nzFooter", _r103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAccept", ".xls, .xlsx, .pdf, .img, .jpeg")("nzBeforeUpload", ctx_r35.beforeUploadName)("nzMultiple", false)("nzFileList", ctx_r35.fileList);
        }
      }

      var KycDetailsComponent = /*#__PURE__*/function () {
        function KycDetailsComponent(https, message, fb, sanitize, global, route, router, modal) {
          var _this10 = this;

          _classCallCheck(this, KycDetailsComponent);

          this.https = https;
          this.message = message;
          this.fb = fb;
          this.sanitize = sanitize;
          this.global = global;
          this.route = route;
          this.router = router;
          this.modal = modal;
          this.thirdPartyDataResponse = [];
          this._isUpload = false;
          this.isVisibleUploadedImage = false;
          this._isViewDocument = false;
          this._isVerify = false;
          this.api_calling_loader_modal = false;
          this.isPhysicalProof = false;
          this.fileList = [];

          this.beforeUploadName = function (file) {
            _this10.fileList = [];
            _this10.fileList = _this10.fileList.concat(file);
            _this10.uploaded_file = file; // this.generateBase64View(file)

            return false;
          };
        }

        _createClass(KycDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getKycDetails();
          }
        }, {
          key: "getKycDetails",
          value: function getKycDetails() {
            var _this11 = this;

            this.api_calling_loader = true;
            this.https.getKycDetails(this._currentId).subscribe(function (res) {
              _this11.api_calling_loader = false;
              _this11.data = res['data']; // this.message.success(res['message'])
            }, function (err) {
              _this11.api_calling_loader = false;
            });
          }
        }, {
          key: "onClickShowJSONPreview",
          value: function onClickShowJSONPreview(res) {
            this.isVisibleThirdPartyResp = true;
            this.api_calling_loader1 = true;
            this.thirdPartyDataResponse = res.api_response;
            this.api_calling_loader1 = false;
          }
        }, {
          key: "onClickPreviewImage",
          value: function onClickPreviewImage(id) {
            var _this12 = this;

            this.isVisibleUploadedImage = true;
            this.api_calling_loader2 = true;
            var data = {
              'source': 'Onboarding',
              'datapoint': 'get_aadhar_selfie_image',
              'endpoint': id
            };
            this.https.fetchXMLData(data).subscribe(function (res) {
              if (res === null || res === void 0 ? void 0 : res.success) {
                _this12.api_calling_loader2 = false;
                _this12.storedSelfieImage = res.data;
              } else {
                _this12.message.error(res === null || res === void 0 ? void 0 : res.message);

                _this12.api_calling_loader2 = false;
              }
            }, function (error) {
              // this.message.error(res?.message);
              _this12.api_calling_loader2 = false;
            });
          }
        }, {
          key: "downloadFile",
          value: function downloadFile(res, name) {
            file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](res, 'verification' + name);
          }
        }, {
          key: "openModalPhysicalProofs",
          value: function openModalPhysicalProofs(type) {
            this._currModalType = type;

            if (type == 'upload') {
              this.fileList = [];
              this.uploaded_file = '';
              this.isPhysicalProof = true;
            } else if (type == 'byPass') {
              this.remarks = '';
              this.isPhysicalProof = true;
            }
          }
        }, {
          key: "verifyByPass",
          value: function verifyByPass() {
            var _this13 = this;

            this.modal.confirm({
              nzTitle: 'Are you sure ',
              nzContent: 'You want to verify physical verification document',
              nzOkText: 'Confirm',
              nzOkType: 'primary',
              nzOkDanger: true,
              nzOnOk: function nzOnOk() {
                return _this13.confirmByPass();
              },
              nzCancelText: 'No',
              nzOnCancel: function nzOnCancel() {
                return console.log('Cancel');
              }
            });
          }
        }, {
          key: "confirmByPass",
          value: function confirmByPass() {
            var _this14 = this;

            var data = {
              id: this._currByPassId,
              'status': 'APPROVED'
            };
            this.https.verifyPhysicalVerification(data).subscribe(function (res) {
              if (res.success) {
                _this14.message.success(res.message);

                _this14.modal.closeAll();
              }
            });
          } //   uploadPhysicalVerificationDocument
          // byPasPhysicalVerification
          // verifyPhysicalVerification

        }, {
          key: "handleOk",
          value: function handleOk() {
            var _this15 = this;

            this.api_calling_loader_modal = true;
            var formData = new FormData();
            formData.append('application', this._currentId);
            formData.append('file', this.uploaded_file);
            this.https.uploadPhysicalVerificationDocument(formData).subscribe(function (res) {
              if (res.success) {
                _this15.message.success(res.mesage);
              }
            });
          }
        }]);

        return KycDetailsComponent;
      }();

      KycDetailsComponent.ɵfac = function KycDetailsComponent_Factory(t) {
        return new (t || KycDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_globalservices_service__WEBPACK_IMPORTED_MODULE_6__["GlobalservicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalService"]));
      };

      KycDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: KycDetailsComponent,
        selectors: [["app-kyc-details"]],
        inputs: {
          uploadPermission: "uploadPermission",
          _currentId: "_currentId",
          _currStage: "_currStage"
        },
        decls: 127,
        vars: 59,
        consts: [[1, "row"], [1, "col-md-12"], [1, "site-page-header", "acc-bg-light", 3, "nzTitle"], [1, "mb-md-0", "border", 3, "nzLoading"], [1, "col-md-4"], [1, "d-flex", "flex-column"], [1, "text-muted"], [1, "col-md-8"], ["kycDetails", ""], [1, "mt-3"], [1, "mb-md-0", 3, "nzLoading"], ["class", "row", 4, "ngIf"], [1, "col-12"], ["nzSize", "small", "nz-button", "", "nzType", "link", 3, "click"], ["document", ""], ["class", "mt-3", 4, "ngIf"], [1, "my-3"], ["class", "row", 4, "ngFor", "ngForOf"], ["aadharAddress", ""], [3, "nzFrontPagination", "nzLoading", "nzShowSizeChanger", "nzData", "nzScroll"], ["rowspan", "2", "nzWidth", "40px"], [4, "ngFor", "ngForOf"], ["cibilAddresses", ""], [3, "nzFrontPagination", "nzLoading", "nzShowSizeChanger", "nzData"], ["cibilMobile", ""], ["nzBordered", "", 3, "nzFrontPagination", "nzShowSizeChanger", "nzData", "nzScroll"], ["colSpanTable", ""], [1, "font-weight-semibold"], ["response", ""], ["nzBordered", "", 2, "text-align-last", "center", 3, "nzFrontPagination", "nzShowSizeChanger", "nzData", "nzScroll"], ["thirdPartyResponse", ""], ["nzTitle", "Fetched Third Party Response", 3, "nzVisible", "nzWidth", "nzFooter", "nzVisibleChange", "nzOnCancel"], [4, "nzModalContent"], ["thirdPartyFooter", ""], ["nzTitle", "Fetched Selfie Response", 3, "nzVisible", "nzWidth", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "ngIf"], [1, "ml-md-2"], [1, "mb-0"], ["nz-icon", "", "nzType", "file", "nzTheme", "outline", 1, "mr-2"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-wrap", "justify-content-between"], [1, "mr-5"], ["class", "text-primary mr-3", "nzTooltipTitle", "View Document", 3, "click", 4, "ngIf"], ["class", "text-primary mr-3", "nzTooltipTitle", "Verify Document", 3, "click", 4, "ngIf"], ["class", "text-primary mr-3", "nzTooltipTitle", "Download Document", "download", "", "target", "_blank", 3, "href", 4, "ngIf"], ["nzTooltipTitle", "Upload Document", 1, "text-primary", 3, "click"], ["nz-icon", "", "nzType", "upload", "nzTheme", "outline"], ["nzTooltipTitle", "View Document", 1, "text-primary", "mr-3", 3, "click"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline"], ["nzTooltipTitle", "Verify Document", 1, "text-primary", "mr-3", 3, "click"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "outline"], ["nzTooltipTitle", "Download Document", "download", "", "target", "_blank", 1, "text-primary", "mr-3", 3, "href"], ["nz-icon", "", "nzType", "download", "nzTheme", "outline"], ["verificationProof", ""], [1, "d-flex", "font-size-12"], ["nz-icon", "", "nzType", "eye", "nz-tooltip", "Download File", "nzTheme", "outline", 3, "click"], ["nzRight", "", 3, "nzWidth"], ["nz-dropdown", "", 1, "text-dark", "font-size-20", 3, "nzClickHide", "nzTrigger", "nzPlacement", "nzDropdownMenu"], ["nz-icon", "", "nzType", "ellipsis", "theme", "outline"], ["latestUploadDropDown", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", "nz-dropdown", "", 3, "click"], [1, "m-l-5"], ["nz-menu-item", "", "nz-dropdown", "", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", "class", "text-success", 4, "ngIf"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "text-danger", 4, "ngIf"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", 1, "text-success"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "text-danger"], ["nz-button", "", "nzType", "link", "class", "border", 3, "disabled", "click", 4, "ngIf"], ["nz-button", "", "nzType", "link", "class", "border", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "link", 1, "border", 3, "disabled", "click"], ["nz-button", "", "nzType", "link", 1, "border", 3, "click"], [3, "nzLoading"], ["style", "font-weight: bolder", 4, "ngIf"], [3, "json", "expanded"], [2, "font-weight", "bolder"], [1, "col-6"], ["alt", "item", "width", "100%", 3, "src"], [3, "action", "_isOpenModal", "documentData", "close"], [3, "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["nzListType", "picture", "nzType", "drag", 3, "nzAccept", "nzBeforeUpload", "nzMultiple", "nzFileList", "nzFileListChange"], [1, "ant-upload-text"], ["nz-button", "", "nzType", "primary", 1, "mt-md-4"], ["modalFooter", ""], ["nz-button", "", "nzType", "primary", "class", "mx-2", 3, "disabled", "nzLoading", "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", 1, "mx-2", 3, "disabled", "nzLoading", "click"]],
        template: function KycDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-page-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " PAN No. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Aadhaar No. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, KycDetailsComponent_ng_template_19_Template, 4, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "nz-page-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nz-card", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, KycDetailsComponent_div_24_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycDetailsComponent_Template_button_click_27_listener() {
              return ctx.onClickPreviewImage(ctx.data == null ? null : ctx.data.id);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " View Uploaded Document ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, KycDetailsComponent_div_29_Template, 2, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, KycDetailsComponent_ng_template_30_Template, 3, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, KycDetailsComponent_div_32_Template, 26, 10, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "nz-page-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nz-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, KycDetailsComponent_div_36_Template, 34, 6, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, KycDetailsComponent_ng_template_37_Template, 4, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "nz-page-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nz-card", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "nz-table", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Postal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Reported Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, KycDetailsComponent_ng_container_58_Template, 14, 6, "ng-container", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, KycDetailsComponent_ng_template_59_Template, 3, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nz-page-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "nz-card", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "nz-table", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Reported Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, KycDetailsComponent_ng_container_74_Template, 8, 3, "ng-container", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, KycDetailsComponent_ng_template_75_Template, 3, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "nz-page-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "nz-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "nz-table", 25, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, KycDetailsComponent_th_85_Template, 2, 1, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "API Call");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, KycDetailsComponent_td_90_Template, 3, 2, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Response came");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, KycDetailsComponent_td_94_Template, 3, 2, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, KycDetailsComponent_ng_template_95_Template, 4, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "nz-page-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "nz-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "nz-table", 29, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, KycDetailsComponent_th_105_Template, 2, 1, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "API Response");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, KycDetailsComponent_td_110_Template, 3, 2, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Response came");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, KycDetailsComponent_td_114_Template, 3, 2, "td", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, KycDetailsComponent_ng_template_115_Template, 4, 0, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "nz-modal", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function KycDetailsComponent_Template_nz_modal_nzVisibleChange_117_listener($event) {
              return ctx.isVisibleThirdPartyResp = $event;
            })("nzOnCancel", function KycDetailsComponent_Template_nz_modal_nzOnCancel_117_listener() {
              return ctx.isVisibleThirdPartyResp = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, KycDetailsComponent_ng_container_118_Template, 4, 3, "ng-container", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, KycDetailsComponent_ng_template_119_Template, 2, 0, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "nz-modal", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function KycDetailsComponent_Template_nz_modal_nzVisibleChange_121_listener($event) {
              return ctx.isVisibleUploadedImage = $event;
            })("nzOnCancel", function KycDetailsComponent_Template_nz_modal_nzOnCancel_121_listener() {
              return ctx.isVisibleUploadedImage = false;
            })("nzOnOk", function KycDetailsComponent_Template_nz_modal_nzOnOk_121_listener() {
              return ctx.isVisibleUploadedImage = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, KycDetailsComponent_ng_container_122_Template, 13, 3, "ng-container", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, KycDetailsComponent_section_123_Template, 2, 3, "section", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, KycDetailsComponent_section_124_Template, 2, 3, "section", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, KycDetailsComponent_section_125_Template, 2, 3, "section", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, KycDetailsComponent_section_126_Template, 11, 8, "section", 35);
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);

            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](76);

            var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](96);

            var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](116);

            var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_calling_loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.kyc_details == null ? null : ctx.data.kyc_details.pan_no) ? ctx.data == null ? null : ctx.data.kyc_details == null ? null : ctx.data.kyc_details.pan_no : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.kyc_details == null ? null : ctx.data.kyc_details.aadhar_no) ? ctx.data == null ? null : ctx.data.kyc_details == null ? null : ctx.data.kyc_details.aadhar_no : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_calling_loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.kyc_documents);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.data == null ? null : ctx.data.kyc_documents));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._currStage == "eNach");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_calling_loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.address_list);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_calling_loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFrontPagination", false)("nzLoading", ctx.api_calling_loader)("nzFrontPagination", false)("nzShowSizeChanger", false)("nzData", ctx.data == null ? null : ctx.data.cibil_pulled_addresses)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](56, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.cibil_pulled_addresses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_calling_loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFrontPagination", false)("nzLoading", ctx.api_calling_loader)("nzFrontPagination", false)("nzShowSizeChanger", false)("nzData", ctx.data == null ? null : ctx.data.cibil_pulled_mobiles);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.cibil_pulled_mobiles);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_calling_loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFrontPagination", false)("nzShowSizeChanger", false)("nzData", ctx.data == null ? null : ctx.data.api_calls_response)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](57, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.api_calls_response);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.api_calls_response);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.api_calls_response);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_calling_loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFrontPagination", false)("nzShowSizeChanger", false)("nzData", ctx.data == null ? null : ctx.data.kyc_documents)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](58, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.kyc_documents);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.kyc_documents);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.kyc_documents);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisibleThirdPartyResp)("nzWidth", 1000)("nzFooter", _r29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisibleUploadedImage)("nzWidth", "70%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._isViewDocument);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._isVerify);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._isUpload);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPhysicalProof);
          }
        },
        directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_9__["NzPageHeaderComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_10__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTbodyComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalContentDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__["NzTooltipDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzCellFixedDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_17__["NzDropDownADirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_17__["NzDropDownDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_17__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_18__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_18__["NzMenuItemDirective"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_19__["NgxJsonViewerComponent"], _common_document_actions_common_document_actions_component__WEBPACK_IMPORTED_MODULE_20__["CommonDocumentActionsComponent"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_21__["NzUploadComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__["NzWaveDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJreWMtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KycDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-kyc-details',
            templateUrl: './kyc-details.component.html',
            styleUrls: ['./kyc-details.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
          }, {
            type: src_app_shared_globalservices_service__WEBPACK_IMPORTED_MODULE_6__["GlobalservicesService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalService"]
          }];
        }, {
          uploadPermission: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _currentId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          _currStage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "G7zf":
    /*!*******************************************************!*\
      !*** ./src/app/shared/routes/common-layout.routes.ts ***!
      \*******************************************************/

    /*! exports provided: CommonLayout_ROUTES */

    /***/
    function G7zf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonLayout_ROUTES", function () {
        return CommonLayout_ROUTES;
      });

      var CommonLayout_ROUTES = [// {
      //     path: 'authentication',
      //     loadChildren: () => import('../../authentication/authentication.module').then(m => m.AuthenticationModule),
      // },
      {
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-dashboard-module */
          "dashboard-dashboard-module").then(__webpack_require__.bind(null,
          /*! ../../dashboard/dashboard.module */
          "TDBs")).then(function (m) {
            return m.DashboardModule;
          });
        }
      }, {
        path: 'product-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | products-product-list-product-list-module */
          "products-product-list-product-list-module").then(__webpack_require__.bind(null,
          /*! ../../products/product-list/product-list.module */
          "UMHF")).then(function (m) {
            return m.ProductListModule;
          });
        }
      }, {
        path: 'product',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | products-create-product-create-product-module */
          "products-create-product-create-product-module").then(__webpack_require__.bind(null,
          /*! ../../products/create-product/create-product.module */
          "aNjN")).then(function (m) {
            return m.CreateProductModule;
          });
        }
      }, {
        path: 'lenders',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | users-lenders-lenders-module */
          "users-lenders-lenders-module").then(__webpack_require__.bind(null,
          /*! ../../users/lenders/lenders.module */
          "YN4/")).then(function (m) {
            return m.LendersModule;
          });
        }
      }, {
        path: 'masters-partners',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | users-masters-partners-masters-partners-module */
          "users-masters-partners-masters-partners-module").then(__webpack_require__.bind(null,
          /*! ../../users/masters-partners/masters-partners.module */
          "x2FM")).then(function (m) {
            return m.MastersPartnersModule;
          });
        }
      }, {
        path: 'merchants',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | users-merchants-merchants-module */
          "users-merchants-merchants-module").then(__webpack_require__.bind(null,
          /*! ../../users/merchants/merchants.module */
          "Yyx/")).then(function (m) {
            return m.MerchantsModule;
          });
        }
      }, {
        path: 'partners',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | users-partners-partners-module */
          "users-partners-partners-module").then(__webpack_require__.bind(null,
          /*! ../../users/partners/partners.module */
          "MS1d")).then(function (m) {
            return m.PartnersModule;
          });
        }
      }, {
        path: 'payoutStructure',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | users-payout-structure-payout-structure-module */
          "users-payout-structure-payout-structure-module").then(__webpack_require__.bind(null,
          /*! ../../users/payout-structure/payout-structure.module */
          "91sk")).then(function (m) {
            return m.PayoutStructureModule;
          });
        }
      }, {
        path: 'employeeDetail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | users-employee-details-employee-details-module */
          "users-employee-details-employee-details-module").then(__webpack_require__.bind(null,
          /*! ../../users/employee-details/employee-details.module */
          "7AFg")).then(function (m) {
            return m.EmployeeDetailsModule;
          });
        }
      }, {
        path: 'employees',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | employees-employees-module */
          "employees-employees-module").then(__webpack_require__.bind(null,
          /*! ../../employees/employees.module */
          "Q21o")).then(function (m) {
            return m.EmployeesModule;
          });
        }
      }, {
        path: 'super-app-user',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | super-app-user-super-app-user-module */
          "super-app-user-super-app-user-module").then(__webpack_require__.bind(null,
          /*! ../../super-app-user/super-app-user.module */
          "WnBf")).then(function (m) {
            return m.SuperAppUserModule;
          });
        }
      }, {
        path: 'applications',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | applications-applications-module */
          "default~applications-applications-module~lms-bbps-bbps-module~lms-bill-summerize-bill-summerize-modu~284cbdc9").then(__webpack_require__.bind(null,
          /*! ../../applications/applications.module */
          "KQFg")).then(function (m) {
            return m.ApplicationsModule;
          });
        }
      }, {
        path: 'lms/borrowers',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | lms-borrowers-borrowers-module */
          [__webpack_require__.e("default~applications-applications-module~lms-bbps-bbps-module~lms-bill-summerize-bill-summerize-modu~284cbdc9"), __webpack_require__.e("lms-borrowers-borrowers-module")]).then(__webpack_require__.bind(null,
          /*! ../../lms/borrowers/borrowers.module */
          "+DIC")).then(function (m) {
            return m.BorrowersModule;
          });
        }
      }, {
        path: 'lms/emi',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lms-emi-borrowers-emi-borrowers-module */
          "lms-emi-borrowers-emi-borrowers-module").then(__webpack_require__.bind(null,
          /*! ../../lms/emi-borrowers/emi-borrowers.module */
          "WJSD")).then(function (m) {
            return m.EmiBorrowersModule;
          });
        }
      }, {
        path: 'lms/change-bill-date',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lms-change-bill-date-change-bill-date-module */
          "lms-change-bill-date-change-bill-date-module").then(__webpack_require__.bind(null,
          /*! ../../lms/change-bill-date/change-bill-date.module */
          "g08y")).then(function (m) {
            return m.ChangeBillDateModule;
          });
        }
      }, {
        path: 'lms',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lms-transactions-transactions-module */
          "lms-transactions-transactions-module").then(__webpack_require__.bind(null,
          /*! ../../lms/transactions/transactions.module */
          "r6aM")).then(function (m) {
            return m.TransactionsModule;
          });
        }
      }, {
        path: 'lms/authorization-policy',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lms-authorization-authorization-module */
          "lms-authorization-authorization-module").then(__webpack_require__.bind(null,
          /*! ../../lms/authorization/authorization.module */
          "hz7p")).then(function (m) {
            return m.AuthorizationModule;
          });
        }
      }, {
        path: 'lms/risk-policy',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lms-risk-policy-risk-policy-module */
          "lms-risk-policy-risk-policy-module").then(__webpack_require__.bind(null,
          /*! ../../lms/risk-policy/risk-policy.module */
          "8irG")).then(function (m) {
            return m.RiskPolicyModule;
          });
        }
      }, {
        path: 'lms/lender-management',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lms-lender-management-lender-management-module */
          "lms-lender-management-lender-management-module").then(__webpack_require__.bind(null,
          /*! ../../lms/lender-management/lender-management.module */
          "aaRE")).then(function (m) {
            return m.LenderManagementModule;
          });
        }
      }, {
        path: 'lms/dpd-days',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lms-dpd-days-dpd-days-module */
          "lms-dpd-days-dpd-days-module").then(__webpack_require__.bind(null,
          /*! ../../lms/dpd-days/dpd-days.module */
          "zBwl")).then(function (m) {
            return m.DpdDaysModule;
          });
        }
      }, {
        path: 'reports',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | reports-reports-module */
          "reports-reports-module").then(__webpack_require__.bind(null,
          /*! ../../reports/reports.module */
          "uHdG")).then(function (m) {
            return m.ReportsModule;
          });
        }
      }, {
        path: 'coupon-code',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | coupon-code-coupon-code-module */
          "coupon-code-coupon-code-module").then(__webpack_require__.bind(null,
          /*! ../../coupon-code/coupon-code.module */
          "RhJK")).then(function (m) {
            return m.CouponCodeModule;
          });
        }
      }, {
        path: 'black-box',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | black-box-testing-black-box-testing-module */
          "black-box-testing-black-box-testing-module").then(__webpack_require__.bind(null,
          /*! ../../black-box-testing/black-box-testing.module */
          "hBaH")).then(function (m) {
            return m.BlackBoxTestingModule;
          });
        }
      }, {
        path: 'edit-employee-permission',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | employees-add-edit-permission-add-edit-permission-module */
          "employees-add-edit-permission-add-edit-permission-module").then(__webpack_require__.bind(null,
          /*! ../../employees/add-edit-permission/add-edit-permission.module */
          "iOPy")).then(function (m) {
            return m.AddEditPermissionModule;
          });
        }
      }, {
        path: 'lms/change-credit-line',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lms-credit-line-inc-desc-credit-line-inc-desc-module */
          "lms-credit-line-inc-desc-credit-line-inc-desc-module").then(__webpack_require__.bind(null,
          /*! ../../lms/credit-line-inc-desc/credit-line-inc-desc.module */
          "8TgB")).then(function (m) {
            return m.CreditLineIncDescModule;
          });
        }
      }, {
        path: 'lms/transaction-remarks',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lms-transaction-remarks-transaction-remarks-module */
          "lms-transaction-remarks-transaction-remarks-module").then(__webpack_require__.bind(null,
          /*! ../../lms/transaction-remarks/transaction-remarks.module */
          "oLXe")).then(function (m) {
            return m.TransactionRemarksModule;
          });
        }
      }, {
        path: 'lms/send-payment-link',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lms-send-payment-link-send-payment-link-module */
          "lms-send-payment-link-send-payment-link-module").then(__webpack_require__.bind(null,
          /*! ../../lms/send-payment-link/send-payment-link.module */
          "hUFW")).then(function (m) {
            return m.SendPaymentLinkModule;
          });
        }
      }, {
        path: 'lms/refunds',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lms-refunds-refunds-module */
          "lms-refunds-refunds-module").then(__webpack_require__.bind(null,
          /*! ../../lms/refunds/refunds.module */
          "noTZ")).then(function (m) {
            return m.RefundsModule;
          });
        }
      }, {
        path: 'lms/mandate-triggers',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | lms-mandate-triggers-mandate-triggers-module */
          [__webpack_require__.e("default~applications-applications-module~lms-bbps-bbps-module~lms-bill-summerize-bill-summerize-modu~284cbdc9"), __webpack_require__.e("lms-mandate-triggers-mandate-triggers-module")]).then(__webpack_require__.bind(null,
          /*! ../../lms/mandate-triggers/mandate-triggers.module */
          "q9HS")).then(function (m) {
            return m.MandateTriggersModule;
          });
        }
      }, {
        path: 'lms/billed-unbilled-data',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | lms-billed-unbilled-billed-unbilled-module */
          [__webpack_require__.e("default~applications-applications-module~lms-bbps-bbps-module~lms-bill-summerize-bill-summerize-modu~284cbdc9"), __webpack_require__.e("lms-billed-unbilled-billed-unbilled-module")]).then(__webpack_require__.bind(null,
          /*! ../../lms/billed-unbilled/billed-unbilled.module */
          "SczA")).then(function (m) {
            return m.BilledUnbilledModule;
          });
        }
      }, {
        path: 'lms/expense-management',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lms-expence-management-expence-management-module */
          "lms-expence-management-expence-management-module").then(__webpack_require__.bind(null,
          /*! ../../lms/expence-management/expence-management.module */
          "SiMv")).then(function (m) {
            return m.ExpenceManagementModule;
          });
        }
      }, {
        path: 'version',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | versioning-versioning-module */
          "versioning-versioning-module").then(__webpack_require__.bind(null,
          /*! ../../versioning/versioning.module */
          "ubIE")).then(function (m) {
            return m.VersioningModule;
          });
        }
      }, {
        path: 'accounting',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | accounting-accounting-module */
          "accounting-accounting-module").then(__webpack_require__.bind(null,
          /*! ../../accounting/accounting.module */
          "04xb")).then(function (m) {
            return m.AccountingModule;
          });
        }
      }, {
        path: 'third-party-api-call',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | third-party-api-call-third-party-api-call-module */
          "third-party-api-call-third-party-api-call-module").then(__webpack_require__.bind(null,
          /*! ../../third-party-api-call/third-party-api-call.module */
          "4sZ7")).then(function (m) {
            return m.ThirdPartyApiCallModule;
          });
        }
      }, {
        path: 'otp-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | otp-customer-list-otp-customer-list-module */
          "otp-customer-list-otp-customer-list-module").then(__webpack_require__.bind(null,
          /*! ../../otp-customer-list/otp-customer-list.module */
          "bo64")).then(function (m) {
            return m.OtpCustomerListModule;
          });
        }
      }, {
        path: 'dormant',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dormant-stage-trigger-dormant-stage-trigger-module */
          "dormant-stage-trigger-dormant-stage-trigger-module").then(__webpack_require__.bind(null,
          /*! ../../dormant-stage-trigger/dormant-stage-trigger.module */
          "xMqo")).then(function (m) {
            return m.DormantStageTriggerModule;
          });
        }
      }, {
        path: 'lms/deductions',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | lms-deductions-deductions-module */
          [__webpack_require__.e("default~applications-applications-module~lms-bbps-bbps-module~lms-bill-summerize-bill-summerize-modu~284cbdc9"), __webpack_require__.e("lms-deductions-deductions-module")]).then(__webpack_require__.bind(null,
          /*! ../../lms/deductions/deductions.module */
          "2t/v")).then(function (m) {
            return m.DeductionsModule;
          });
        }
      }, {
        path: 'lms/bill-summarization',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | lms-bill-summerize-bill-summerize-module */
          [__webpack_require__.e("default~applications-applications-module~lms-bbps-bbps-module~lms-bill-summerize-bill-summerize-modu~284cbdc9"), __webpack_require__.e("lms-bill-summerize-bill-summerize-module")]).then(__webpack_require__.bind(null,
          /*! ../../lms/bill-summerize/bill-summerize.module */
          "d/Z2")).then(function (m) {
            return m.BillSummerizeModule;
          });
        }
      }, {
        path: 'lms/nach-upload',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lms-nach-upload-nach-upload-module */
          "lms-nach-upload-nach-upload-module").then(__webpack_require__.bind(null,
          /*! ../../lms/nach-upload/nach-upload.module */
          "xRRl")).then(function (m) {
            return m.NachUploadModule;
          });
        }
      }, {
        path: 'lms/insurance',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lms-insurance-insurance-module */
          "lms-insurance-insurance-module").then(__webpack_require__.bind(null,
          /*! ../../lms/insurance/insurance.module */
          "HdOo")).then(function (m) {
            return m.InsuranceModule;
          });
        }
      }, {
        path: 'cashback-program',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | cashback-data-cashback-data-module */
          "cashback-data-cashback-data-module").then(__webpack_require__.bind(null,
          /*! ../../cashback-data/cashback-data.module */
          "nRm1")).then(function (m) {
            return m.CashbackDataModule;
          });
        }
      }, {
        path: 'lms/bbps',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | lms-bbps-bbps-module */
          [__webpack_require__.e("default~applications-applications-module~lms-bbps-bbps-module~lms-bill-summerize-bill-summerize-modu~284cbdc9"), __webpack_require__.e("lms-bbps-bbps-module")]).then(__webpack_require__.bind(null,
          /*! ../../lms/bbps/bbps.module */
          "5rUy")).then(function (m) {
            return m.BbpsModule;
          });
        }
      }, {
        path: 'downloads',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | downloads-downloads-module */
          "downloads-downloads-module").then(__webpack_require__.bind(null,
          /*! ../../downloads/downloads.module */
          "DxuN")).then(function (m) {
            return m.DownloadsModule;
          });
        }
      }, {
        path: 'emi/offline-emi',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | lms-offline-emi-offline-emi-module */
          "lms-offline-emi-offline-emi-module").then(__webpack_require__.bind(null,
          /*! ../../lms/offline-emi/offline-emi.module */
          "Zc+L")).then(function (m) {
            return m.OfflineEmiModule;
          });
        }
      }];
      /***/
    },

    /***/
    "Isfx":
    /*!************************************************************!*\
      !*** ./src/app/shared/template/header/header.component.ts ***!
      \************************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function Isfx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/theme-constant.service */
      "PQ0Y");
      /* harmony import */


      var _globalservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../globalservices.service */
      "Wum+");
      /* harmony import */


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/divider */
      "5vDB");
      /* harmony import */


      var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/drawer */
      "F6ss");
      /* harmony import */


      var _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../quick-view/quick-view.component */
      "ASAD");

      function HeaderComponent_nz_option_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 31);
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r1)("nzLabel", (item_r1 == null ? null : item_r1.product_type) + " " + (item_r1 == null ? null : item_r1.full_name) + " " + (item_r1 == null ? null : item_r1.mobile) + " " + (item_r1 == null ? null : item_r1.application_code) + " ")("nzLoading", ctx_r0.isLoading);
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(themeService, globalFunction, https, message, route, globaldata) {
          _classCallCheck(this, HeaderComponent);

          this.themeService = themeService;
          this.globalFunction = globalFunction;
          this.https = https;
          this.message = message;
          this.route = route;
          this.globaldata = globaldata;
          this.searchVisible = false;
          this.quickViewVisible = false;
          this.isLoading = false;
          this.notificationList = [{
            title: 'You received a new message',
            time: '8 min',
            icon: 'mail',
            color: 'ant-avatar-' + 'blue'
          }, {
            title: 'New user registered',
            time: '7 hours',
            icon: 'user-add',
            color: 'ant-avatar-' + 'cyan'
          }, {
            title: 'System Alert',
            time: '8 hours',
            icon: 'warning',
            color: 'ant-avatar-' + 'red'
          }, {
            title: 'You have a new update',
            time: '2 days',
            icon: 'sync',
            color: 'ant-avatar-' + 'gold'
          }]; // console.log(this.route.url);
          // this.currentRoute = this.route.url
          // /dashboard/home
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.getFormLoanData();
            this.globalFunction.globalUserData.subscribe(function (res) {
              // console.log(res);
              _this16.userDetails = res;
            }); // this.getFormLoanData();
            // this.userDetails = JSON.parse(sessionStorage.getItem('fatakpay_user_data'));
            // if(!this.userDetails){
            //     this.userDetails = JSON.parse(sessionStorage.getItem('fatakpay_user_data'))
            //     console.log(this?.userDetails);
            // } 
            // else {
            // setTimeout(function () {
            //     // ...
            //     this.userDetails = JSON.parse(sessionStorage.getItem('fatakpay_user_data'))
            // }, 10000);
            // this.userDetails = JSON.parse(sessionStorage.getItem('fatakpay_user_data'))
            // console.log(this?.userDetails);
            // }

            this.themeService.isMenuFoldedChanges.subscribe(function (isFolded) {
              return _this16.isFolded = isFolded;
            });
            this.themeService.isExpandChanges.subscribe(function (isExpand) {
              return _this16.isExpand = isExpand;
            });
          }
        }, {
          key: "getFormLoanData",
          value: function getFormLoanData(e) {
            var _this17 = this;

            // if(e){
            // const search = e
            // if(search?.length >= 3){
            //   this.searchValue = search;
            // } else {
            //     return;
            // }           
            // }
            this.isLoading = true; // this.api_calling_loader['listLoader'] = true
            // this.loanApplicationData = [];
            // source=Onboarding&datapoint=loan_application_global_search&keyword=9167937459

            var data = {
              'datapoint': 'loan_application_global_search',
              'source': 'Onboarding',
              'page': 1,
              'limit': 100,
              'keyword': this.searchValue ? this.searchValue : ''
            };

            if (this.searchValue) {
              //   data['page'] = 1
              data['keyword'] = this.searchValue;
            }

            this.loanApplicationData = [];
            this.https.fetchLoanApplicationList(data).subscribe(function (res) {
              if (res === null || res === void 0 ? void 0 : res.success) {
                //   console.log(res);
                _this17.isLoading = false; //   this.loanApplicationData = [];
                // if(this._activeLoans){
                //       this._activeLoans.forEach(element => {
                //             this.expandSet.delete(element?.id)
                //        });  
                // }
                // this.global.setApplicationCount();

                if (res === null || res === void 0 ? void 0 : res.data) {
                  res === null || res === void 0 ? void 0 : res.data.map(function (data) {
                    if (data['product_type'] == 'loan_application_onboarding') {
                      data['product_type'] = 'Application';
                    } else {
                      data['product_type'] = 'LMS';
                    }

                    _this17.loanApplicationData.push(data);
                  });
                } // console.log(this.loanApplicationData);
                // this.loanApplicationData = res?.data?.results;

              } else {
                _this17.isLoading = false;

                _this17.message.error(res === null || res === void 0 ? void 0 : res.message); // this.api_calling_loader['listLoader'] = false
                // this.total_count = null

              }
            }, function (err) {
              _this17.isLoading = false; //   this.api_calling_loader['listLoader'] = false
            });
          } //   nzFilterOption(query, option){
          //     let val = option.nzLabel
          //     console.log(option.nzLabel)
          //     return option.nzLabel.toString().includes(query.toLowerCase());
          //     // return option.nzLabel.includes(query.toLowerCase());
          //   }

        }, {
          key: "nzFilterOption",
          value: function nzFilterOption(inputValue, item) {
            return item.title.indexOf(inputValue) > -1;
          }
        }, {
          key: "onClickRedirectToSpecificComponent",
          value: function onClickRedirectToSpecificComponent(e) {
            // console.log(e)
            // console.log(this.selectedApplication);
            // this.globaldata.selectedGlobalApplicationLoan(e?.application_code);
            if (!e) {
              return null;
            }

            if ((e === null || e === void 0 ? void 0 : e.product_type) == "Application") {
              if ((e === null || e === void 0 ? void 0 : e.stage_id) == 1) {
                this.route.navigate(["applications/form-filling"], {
                  queryParams: {
                    loan_id: e === null || e === void 0 ? void 0 : e.application_code
                  }
                });
              } else if ((e === null || e === void 0 ? void 0 : e.stage_id) == 2) {
                this.route.navigate(["applications/document-upload"], {
                  queryParams: {
                    loan_id: e === null || e === void 0 ? void 0 : e.application_code
                  }
                });
              } else if ((e === null || e === void 0 ? void 0 : e.stage_id) == 3) {
                this.route.navigate(["applications/underwriting"], {
                  queryParams: {
                    loan_id: e === null || e === void 0 ? void 0 : e.application_code
                  }
                });
              } else if ((e === null || e === void 0 ? void 0 : e.stage_id) == 4) {
                this.route.navigate(["applications/offer-proposed"], {
                  queryParams: {
                    loan_id: e === null || e === void 0 ? void 0 : e.application_code
                  }
                });
              } else if ((e === null || e === void 0 ? void 0 : e.stage_id) == 5) {
                this.route.navigate(["applications/offer-acceptance"], {
                  queryParams: {
                    loan_id: e === null || e === void 0 ? void 0 : e.application_code
                  }
                });
              } else if ((e === null || e === void 0 ? void 0 : e.stage_id) == 6) {
                this.route.navigate(["applications/e-signing"], {
                  queryParams: {
                    loan_id: e === null || e === void 0 ? void 0 : e.application_code
                  }
                });
              } else if ((e === null || e === void 0 ? void 0 : e.stage_id) == 7) {
                this.route.navigate(["applications/disbursement"], {
                  queryParams: {
                    loan_id: e === null || e === void 0 ? void 0 : e.application_code
                  }
                });
              } else if ((e === null || e === void 0 ? void 0 : e.stage_id) == 8) {
                this.route.navigate(["applications/rejected"], {
                  queryParams: {
                    loan_id: e === null || e === void 0 ? void 0 : e.application_code
                  }
                });
              } else if ((e === null || e === void 0 ? void 0 : e.stage_id) == 9) {
                this.route.navigate(["applications/pre-approved"], {
                  queryParams: {
                    loan_id: e === null || e === void 0 ? void 0 : e.application_code
                  }
                });
              } else if ((e === null || e === void 0 ? void 0 : e.stage_id) == 10) {
                this.route.navigate(["applications/nbfc-approval"], {
                  queryParams: {
                    loan_id: e === null || e === void 0 ? void 0 : e.application_code
                  }
                });
              } else if ((e === null || e === void 0 ? void 0 : e.stage_id) == 11) {
                this.route.navigate(["applications/dormant"], {
                  queryParams: {
                    loan_id: e === null || e === void 0 ? void 0 : e.application_code
                  }
                });
              } else if ((e === null || e === void 0 ? void 0 : e.stage_id) == 15) {
                this.route.navigate(["applications/closed"], {
                  queryParams: {
                    loan_id: e === null || e === void 0 ? void 0 : e.application_code
                  }
                });
              }
            } else {
              this.route.navigate(["lms/borrowers/all"], {
                queryParams: {
                  main_stage: '',
                  loan_id: e === null || e === void 0 ? void 0 : e.application_code
                }
              });
            }

            return null; // return e = -1, this.selectedApplication = null;
            // this.selectedApplication = null;
            // document.getElementById('globalSearch').value = ''
            // this.loanApplicationData
            // console.log(e);
            // application_code
          }
        }, {
          key: "onSearchGetList",
          value: function onSearchGetList(e) {
            var _this18 = this;

            var search = e;

            if (e.length >= 3) {
              this.searchValue = e;
              clearTimeout(this.debounce);
              this.debounce = setTimeout(function () {
                _this18.getFormLoanData();
              }, 1000);
            }
          }
        }, {
          key: "toggleFold",
          value: function toggleFold() {
            this.isFolded = !this.isFolded;
            this.themeService.toggleFold(this.isFolded);
          }
        }, {
          key: "toggleExpand",
          value: function toggleExpand() {
            this.isFolded = false;
            this.isExpand = !this.isExpand;
            this.themeService.toggleExpand(this.isExpand);
            this.themeService.toggleFold(this.isFolded);
          }
        }, {
          key: "searchToggle",
          value: function searchToggle() {
            this.searchVisible = !this.searchVisible;
          }
        }, {
          key: "quickViewToggle",
          value: function quickViewToggle() {
            this.quickViewVisible = !this.quickViewVisible;
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__["ThemeConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_globalservices_service__WEBPACK_IMPORTED_MODULE_2__["GlobalservicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_globalservices_service__WEBPACK_IMPORTED_MODULE_2__["GlobalservicesService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 39,
        vars: 10,
        consts: [[1, "header"], [1, "logo", "logo-dark", "d-flex", "align-items-center"], ["href", "", 1, "w-100"], ["src", "assets/images/logo/logo.png", "alt", "Logo", 1, "w-50"], ["src", "assets/images/logo/logo-fold.svg", "alt", "Logo", 1, "logo-fold", "w-100"], [1, "logo", "logo-white"], ["href", ""], ["src", "assets/images/logo/logo-fold-white.png", "alt", "Logo", 1, "logo-fold"], [1, "nav-wrap"], [1, "nav-left"], [1, "desktop-toggle"], [3, "click"], ["nz-icon", "", "theme", "outline", 3, "nzType"], [1, "mobile-toggle"], [2, "align-self", "center", "min-width", "26%"], ["nzPlaceHolder", "Select Application", "nzAllowClear", "", "nzShowSearch", "", 2, "width", "100%", 3, "ngModel", "nzLoading", "nzOnSearch", "ngModelChange"], [3, "nzValue", "nzLabel", "nzLoading", 4, "ngFor", "ngForOf"], [1, "nav-right"], ["src", "assets/images/Icons/notification.png", 1, "px-3", 2, "cursor", "pointer"], ["nzType", "vertical", 1, "h-80"], [1, "align-self-center", "d-none", "d-md-block", "mr-md-3", "px-md-0"], [1, "m-l-10"], [1, "m-b-0", "text-dark", "font-weight-semibold"], [1, "m-b-0", "opacity-07", "font-size-12"], [2, "border-radius", "50%", 3, "click"], ["nz-icon", "", "nzType", "user", "nzTheme", "outline"], ["nzTitle", "", "nzPlacement", "right", 3, "nzWidth", "nzClosable", "nzVisible", "nzOnClose"], [1, "row"], [1, "d-flex", "align-items-center", "pointer", 3, "click"], ["nz-icon", "", "nzType", "arrow-left", "nzTheme", "outline", 1, "mr-3"], [1, "h5", "mb-0"], [3, "nzValue", "nzLabel", "nzLoading"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_12_listener() {
              return ctx.toggleFold();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_15_listener() {
              return ctx.toggleExpand();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnSearch", function HeaderComponent_Template_nz_select_nzOnSearch_18_listener($event) {
              return ctx.onSearchGetList($event);
            })("ngModelChange", function HeaderComponent_Template_nz_select_ngModelChange_18_listener($event) {
              return ctx.selectedApplication = $event;
            })("ngModelChange", function HeaderComponent_Template_nz_select_ngModelChange_18_listener($event) {
              return ctx.onClickRedirectToSpecificComponent($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderComponent_nz_option_19_Template, 1, 3, "nz-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "nz-divider", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_30_listener() {
              return ctx.quickViewToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-drawer", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function HeaderComponent_Template_nz_drawer_nzOnClose_32_listener() {
              return ctx.quickViewToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_34_listener() {
              return ctx.quickViewToggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-quick-view");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx.isFolded ? "menu-unfold" : "menu-fold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx.isExpand ? "menu-fold" : "menu-unfold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedApplication)("nzLoading", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.loanApplicationData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.userDetails == null ? null : ctx.userDetails.user == null ? null : ctx.userDetails.user.first_name) + " " + (ctx.userDetails == null ? null : ctx.userDetails.user == null ? null : ctx.userDetails.user.last_name));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.user == null ? null : ctx.userDetails.user.role == null ? null : ctx.userDetails.user.role.role_name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", 480)("nzClosable", false)("nzVisible", ctx.quickViewVisible);
          }
        },
        directives: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_11__["NzDividerComponent"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_12__["NzDrawerComponent"], _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_13__["QuickViewComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzOptionComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html'
          }]
        }], function () {
          return [{
            type: _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__["ThemeConstantService"]
          }, {
            type: _globalservices_service__WEBPACK_IMPORTED_MODULE_2__["GlobalservicesService"]
          }, {
            type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _globalservices_service__WEBPACK_IMPORTED_MODULE_2__["GlobalservicesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "IyZr":
    /*!*********************************************************!*\
      !*** ./src/app/shared/directives/side-nav.directive.ts ***!
      \*********************************************************/

    /*! exports provided: SideNavDirective */

    /***/
    function IyZr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SideNavDirective", function () {
        return SideNavDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SideNavDirective = /*#__PURE__*/function () {
        function SideNavDirective() {
          _classCallCheck(this, SideNavDirective);
        }

        _createClass(SideNavDirective, [{
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            $('.side-nav .side-nav-menu:not(.ant-menu-inline-collapsed) li a').click(function (event) {
              if ($(this).parent().hasClass("ant-menu-submenu-open")) {
                $(this).parent().children('.dropdown-menu').slideUp(200, function () {
                  $(this).parent().removeClass("ant-menu-submenu-open");
                });
              } else {
                $(this).parent().parent().children('li.ant-menu-submenu-open').children('.dropdown-menu').slideUp(100);
                $(this).parent().parent().children('li.ant-menu-submenu-open').children('a').removeClass('ant-menu-submenu-open');
                $(this).parent().parent().children('li.ant-menu-submenu-open').removeClass("ant-menu-submenu-open");
                $(this).parent().children('.dropdown-menu').slideDown(100, function () {
                  $(this).parent().addClass("ant-menu-submenu-open");
                });
              }
            });
          }
        }]);

        return SideNavDirective;
      }();

      SideNavDirective.ɵfac = function SideNavDirective_Factory(t) {
        return new (t || SideNavDirective)();
      };

      SideNavDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: SideNavDirective,
        selectors: [["", "sideNav", ""]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[sideNav]'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "J1TD":
    /*!*****************************************************************************!*\
      !*** ./src/app/applications/personal-details/personal-details.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: PersonalDetailsComponent */

    /***/
    function J1TD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonalDetailsComponent", function () {
        return PersonalDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var src_app_shared_globalservices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/globalservices.service */
      "Wum+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/page-header */
      "jPNr");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/table */
      "rMZv");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/date-picker */
      "0lU3");

      function PersonalDetailsComponent_ng_template_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Personal Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PersonalDetailsComponent_ng_template_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Employement Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PersonalDetailsComponent_div_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Latitude");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Longitude");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Source");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r25 = ctx.$implicit;
          var k_r26 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", k_r26 + 1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r25 == null ? null : item_r25.latitude) ? item_r25 == null ? null : item_r25.latitude : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r25 == null ? null : item_r25.longitude) ? item_r25 == null ? null : item_r25.longitude : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (item_r25 == null ? null : item_r25.source) ? item_r25 == null ? null : item_r25.source : "-", " ");
        }
      }

      function PersonalDetailsComponent_ng_template_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Geolocation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PersonalDetailsComponent_tr_83_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalDetailsComponent_tr_83_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var data_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.downloadCibilPdf(data_r27 == null ? null : data_r27.credit_pdf);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Download ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PersonalDetailsComponent_tr_83_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "No File");
        }
      }

      function PersonalDetailsComponent_tr_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PersonalDetailsComponent_tr_83_button_9_Template, 2, 0, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PersonalDetailsComponent_tr_83_ng_template_10_Template, 1, 0, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r27 = ctx.$implicit;
          var i_r28 = ctx.index;

          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r28 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r27.cibil_score);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, data_r27 == null ? null : data_r27.created_at, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r27 == null ? null : data_r27.credit_pdf)("ngIfElse", _r30);
        }
      }

      function PersonalDetailsComponent_div_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r35.key + " :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r35.value ? item_r35.value : 0);
        }
      }

      function PersonalDetailsComponent_ng_template_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bureau Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PersonalDetailsComponent_tr_157_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r36 = ctx.$implicit;
          var i_r37 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r37 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r36.credited_date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", data_r36.amount, "");
        }
      }

      function PersonalDetailsComponent_ng_template_163_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Excel Data ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PersonalDetailsComponent_ng_template_177_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Blackbox Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PersonalDetailsComponent_ng_template_273_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Underwriting Rules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PersonalDetailsComponent_section_277_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-common-cibil-sms", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("_currentLoanDetails", ctx_r18._currentLoanDetails)("isFetch", ctx_r18.isFetchCibilSms ? true : false)("isCibil", ctx_r18._isCibil ? true : false);
        }
      }

      function PersonalDetailsComponent_ng_template_278_label_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PersonalDetailsComponent_ng_template_278_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Offer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PersonalDetailsComponent_ng_template_278_label_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PersonalDetailsComponent_ng_template_278_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Offer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PersonalDetailsComponent_ng_template_278_label_4_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fetch Cibil Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PersonalDetailsComponent_ng_template_278_label_4_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fetch SMS Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PersonalDetailsComponent_ng_template_278_label_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PersonalDetailsComponent_ng_template_278_label_4_span_1_Template, 2, 0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PersonalDetailsComponent_ng_template_278_label_4_span_2_Template, 2, 0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42._isCibil);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r42._isCibil);
        }
      }

      function PersonalDetailsComponent_ng_template_278_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PersonalDetailsComponent_ng_template_278_label_0_Template, 2, 0, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PersonalDetailsComponent_ng_template_278_label_1_Template, 2, 0, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PersonalDetailsComponent_ng_template_278_label_2_Template, 2, 0, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PersonalDetailsComponent_ng_template_278_label_3_Template, 2, 0, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PersonalDetailsComponent_ng_template_278_label_4_Template, 3, 2, "label", 32);
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20._isStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20._isEditOffer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.isRejectModal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20._isEditOffer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.isFetchCibilSms);
        }
      }

      function PersonalDetailsComponent_ng_template_280_button_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalDetailsComponent_ng_template_280_button_0_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r51.handleCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reset ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PersonalDetailsComponent_ng_template_280_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalDetailsComponent_ng_template_280_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r53.handleCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PersonalDetailsComponent_ng_template_280_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalDetailsComponent_ng_template_280_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r55.handleCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PersonalDetailsComponent_ng_template_280_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalDetailsComponent_ng_template_280_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r57.handleOk("status");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r48.api_calling_loader["button"])("disabled", !ctx_r48._currentStageStatus || !ctx_r48.remarksDescription ? true : false);
        }
      }

      function PersonalDetailsComponent_ng_template_280_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalDetailsComponent_ng_template_280_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r59.handleOk("offer");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PersonalDetailsComponent_ng_template_280_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalDetailsComponent_ng_template_280_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r61.handleOk("reject");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PersonalDetailsComponent_ng_template_280_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PersonalDetailsComponent_ng_template_280_button_0_Template, 2, 0, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PersonalDetailsComponent_ng_template_280_button_1_Template, 2, 0, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PersonalDetailsComponent_ng_template_280_button_2_Template, 2, 0, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PersonalDetailsComponent_ng_template_280_button_3_Template, 2, 2, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PersonalDetailsComponent_ng_template_280_button_4_Template, 2, 0, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PersonalDetailsComponent_ng_template_280_button_5_Template, 2, 0, "button", 52);
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22._isEditOffer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.isRejectModal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r22.isRejectModal && !ctx_r22._isEditOffer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22._isStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22._isEditOffer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.isRejectModal);
        }
      }

      function PersonalDetailsComponent_ng_container_283_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-range-picker", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalDetailsComponent_ng_container_283_Template_nz_range_picker_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r63.attendance_date = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.attendance_date);
        }
      }

      function PersonalDetailsComponent_ng_container_285_tr_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r66 = ctx.$implicit;
          var i_r67 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r67 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r66.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r66.number_of_hours_worked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r66.status);
        }
      }

      function PersonalDetailsComponent_ng_container_285_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-table", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sr. no.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Number of hours worked");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PersonalDetailsComponent_ng_container_285_tr_13_Template, 9, 4, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx_r24.attendance_data);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.attendance_data);
        }
      }

      var PersonalDetailsComponent = /*#__PURE__*/function () {
        function PersonalDetailsComponent(https, message, fb, sanitize, global, route, router) {
          _classCallCheck(this, PersonalDetailsComponent);

          this.https = https;
          this.message = message;
          this.fb = fb;
          this.sanitize = sanitize;
          this.global = global;
          this.route = route;
          this.router = router;
          this.isAttendanceVisible = false;
          this.attendance_data = [];
          this.isVisible = false;
          this.api_calling_Loader = false;
        }

        _createClass(PersonalDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            var count = 0;
            this.seviceCall = this.https.expnadList.subscribe(function (res) {
              if (count == 0) {
                console.log(res); // this._currentId = res.values().next().value

                _this19.getPersonalDetails();

                count++;
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.seviceCall.unsubscribe();
            this.https.expnadList.next();
          }
        }, {
          key: "getPersonalDetails",
          value: function getPersonalDetails() {
            var _this20 = this;

            this.api_calling_loader = true;
            this.https.getPersonalDetails(this._currentId).subscribe(function (res) {
              _this20.api_calling_loader = false;
              _this20.data = res['data']; // this.message.success(res['message'])
            }, function (err) {
              _this20.api_calling_loader = false;
            });
          }
        }, {
          key: "pullprofile",
          value: function pullprofile(id) {
            var _this21 = this;

            this.generateloading = true;
            this.https.pullprofile(id).subscribe(function (res) {
              if (res.success) {
                _this21.getPersonalDetails();

                _this21.message.success(res.message);
              } else {
                _this21.message.error(res.message);
              } // this.https.exportMasterSectionModule(res, 'attendance-' + id, 'xlsx', generateloader)


              _this21.generateloading = false;
            }, function (error) {
              _this21.generateloading = false;
              console.log(error);
            });
          } // Get Cibil Data API

        }, {
          key: "getCibilScoreData",
          value: function getCibilScoreData(type, id) {
            this._isUpdateStatus = true;
            this.isFetchCibilSms = true;
            var data = {
              source: 'Onboarding',
              endpoint: id
            };

            if (type == 'cibil' && id) {
              this._isCibil = true;
              this._currentLoanDetails = id;
            } else if (type == 'sms' && id) {
              this._isCibil = false;
              this._currentLoanDetails = id;
            }
          }
        }, {
          key: "handleCancel",
          value: function handleCancel() {
            // this._isOpenModal = false;
            // this._isViewDocument = false;
            // this._isUpload = false;
            // this._isVerify = false;
            // this._isPullData = false;
            this._isCibil = false;
            this.isFetchCibilSms = false;
            this._isUpdateStatus = false;
            this.isVisible = false;
            this.isAttendanceVisible = false;
            this.attendance_date = null;
            this.attendance_data = []; // this._isStatus = false;
            // this._isDocument = false;
            // this._isEditOffer = false;
            // this.isRejectModal = false;
            // this.pdf_viewer_object_values['boolean'] = false
            // this.pdf_viewer_object_values['url'] = null
            // this.pdf_viewer_object_values1['boolean'] = false
            // this.pdf_viewer_object_values1['url'] = null
          }
        }, {
          key: "handleOk",
          value: function handleOk(type) {
            var _this22 = this;

            console.log(this.attendance_date);
            var newdata = {
              application: this._currentId,
              start_date: this.attendance_date[0] ? moment__WEBPACK_IMPORTED_MODULE_1__(this.attendance_date[0]).format("YYYY-MM-DD") : '',
              end_date: this.attendance_date[0] ? moment__WEBPACK_IMPORTED_MODULE_1__(this.attendance_date[0]).format("YYYY-MM-DD") : ''
            };
            this.api_calling_Loader = true;
            this.isVisible = false;
            this.https.pullAttendance(newdata).subscribe(function (res) {
              if (res === null || res === void 0 ? void 0 : res.success) {
                _this22.attendance_data = res.data;

                if (_this22.attendance_data[0]) {
                  _this22.isAttendanceVisible = true;
                } else {
                  _this22.message.success(res.message);
                }
              } else {
                _this22.message.error(res === null || res === void 0 ? void 0 : res.message);
              }

              _this22.api_calling_Loader = false;
            }, function (err) {
              _this22.api_calling_Loader = false;

              _this22.message.error(err);
            });
          }
        }, {
          key: "downloadCibilPdf",
          value: function downloadCibilPdf(item) {
            var link = document.createElement('a');
            link.href = item;
            link.target = '_blank';
            link.click();
          }
        }]);

        return PersonalDetailsComponent;
      }();

      PersonalDetailsComponent.ɵfac = function PersonalDetailsComponent_Factory(t) {
        return new (t || PersonalDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_globalservices_service__WEBPACK_IMPORTED_MODULE_6__["GlobalservicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
      };

      PersonalDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PersonalDetailsComponent,
        selectors: [["app-personal-details"]],
        inputs: {
          _currentId: "_currentId"
        },
        decls: 286,
        vars: 65,
        consts: [[1, "row"], [1, "col-md-12"], [1, "site-page-header", "acc-bg-light", 3, "nzTitle"], [1, "mb-md-0", "border", 3, "nzLoading"], [1, "col-md-4"], [1, "d-flex", "flex-column"], [1, "text-muted"], ["personalDetail", ""], [1, "mt-3"], [1, "col-md-8"], ["empHeader", ""], [1, "my-3"], ["class", "row mx-0", 4, "ngFor", "ngForOf"], ["geoloaction", ""], [1, "mb-md-0", 3, "nzLoading"], [1, "col-md-6"], [1, "d-flex"], [1, "col-md-12", 3, "nzData"], [4, "ngFor", "ngForOf"], [1, "text-primary", 3, "click"], ["class", "col-md-4 mb-2", 4, "ngFor", "ngForOf"], ["bureau", ""], [1, "mt-3", "col-md-12"], [1, "col-md-12", "mt-3"], ["nzSize", "small", "nz-button", "", "nzType", "primary", 3, "nzLoading", "click"], ["nzSize", "small", "nz-button", "", "nzType", "primary", 1, "ml-3", 3, "click"], ["excleData", ""], [1, "mx-3", "text-muted"], ["blackBox", ""], [1, "d-flex", "justify-content-between"], ["underWriting", ""], [3, "nzWidth", "nzVisible", "nzTitle", "nzFooter", "nzVisibleChange", "nzOnCancel"], [4, "ngIf"], ["modalTitle", ""], ["footerModal", ""], ["nzTitle", "Select Date Range", 3, "nzVisible", "nzOkText", "nzOkLoading", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nzTitle", "Attendance", "nzWidth", "800", 3, "nzVisible", "nzOkText", "nzVisibleChange", "nzOnCancel"], [1, "ml-md-2"], [1, "mb-0"], ["nz-icon", "", "nzType", "user", "nzTheme", "outline", 1, "mr-2"], ["nz-icon", "", "nzType", "file", "nzTheme", "outline", 1, "mr-2"], [1, "row", "mx-0"], [1, "col-md-2"], [1, "col-md-3"], ["nz-button", "", "nzType", "link", "nzSize", "small", 3, "click", 4, "ngIf", "ngIfElse"], ["noTemplate", ""], ["nz-button", "", "nzType", "link", "nzSize", "small", 3, "click"], [1, "col-md-4", "mb-2"], [3, "_currentLoanDetails", "isFetch", "isCibil"], ["nz-button", "", "nzType", "link", "class", "border", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "class", "mx-2", 3, "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "class", "mx-2", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "link", 1, "border", 3, "click"], ["nz-button", "", "nzType", "primary", 1, "mx-2", 3, "nzLoading", "disabled", "click"], ["nz-button", "", "nzType", "primary", 1, "mx-2", 3, "click"], [3, "ngModel", "ngModelChange"], [3, "nzData"]],
        template: function PersonalDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-page-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " D.O.B ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Monthly Income ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Residential Pincode ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PersonalDetailsComponent_ng_template_31_Template, 4, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "nz-page-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "nz-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Company Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Address ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Employement type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, PersonalDetailsComponent_ng_template_55_Template, 4, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "nz-page-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "nz-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, PersonalDetailsComponent_div_60_Template, 21, 4, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, PersonalDetailsComponent_ng_template_61_Template, 4, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "nz-page-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "nz-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nz-table", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Sr. no.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Credit score");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Credit File");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, PersonalDetailsComponent_tr_83_Template, 12, 8, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalDetailsComponent_Template_a_click_85_listener() {
              return ctx.getCibilScoreData("cibil", ctx._currentId);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Fetch Cibil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, PersonalDetailsComponent_div_89_Template, 5, 2, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](90, "keyvalue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, PersonalDetailsComponent_ng_template_91_Template, 3, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "nz-page-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "nz-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " EMP ID ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " First name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Last name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Monthly Income ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Date Of Joining ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Mobile Number ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Branch Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Partner ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h3", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Salary details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "nz-table", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Sr. no.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](157, PersonalDetailsComponent_tr_157_Template, 7, 3, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalDetailsComponent_Template_button_click_159_listener() {
              return ctx.pullprofile(ctx._currentId);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Pull Profile data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalDetailsComponent_Template_button_click_161_listener() {
              return ctx.isVisible = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Pull Attendance ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](163, PersonalDetailsComponent_ng_template_163_Template, 4, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "nz-page-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "nz-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](177, PersonalDetailsComponent_ng_template_177_Template, 3, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "nz-page-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "nz-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "No. of Cheque Bounce");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Nach Trans. Declined (last 3 months)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Max. Delinquent Amt. (out of income) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "No. of write off cases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Data Quality score");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Retail Lending score ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "No. of Inquiries (in last 3 Months) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "No negative Events (in last 6 Months) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Avg. Salary Credited (last 6 months) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Avg Min. Balance/month (in last 90 days) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "No Cc Applied (last 14 days) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "No loan applied (last 14 days) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "FOIR (Total Debt/Monthly Salary)) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](273, PersonalDetailsComponent_ng_template_273_Template, 3, 0, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "nz-modal", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function PersonalDetailsComponent_Template_nz_modal_nzVisibleChange_276_listener($event) {
              return ctx._isUpdateStatus = $event;
            })("nzOnCancel", function PersonalDetailsComponent_Template_nz_modal_nzOnCancel_276_listener() {
              return ctx.handleCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](277, PersonalDetailsComponent_section_277_Template, 2, 3, "section", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](278, PersonalDetailsComponent_ng_template_278_Template, 5, 5, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](280, PersonalDetailsComponent_ng_template_280_Template, 6, 6, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "nz-modal", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function PersonalDetailsComponent_Template_nz_modal_nzVisibleChange_282_listener($event) {
              return ctx.isVisible = $event;
            })("nzOnCancel", function PersonalDetailsComponent_Template_nz_modal_nzOnCancel_282_listener() {
              return ctx.handleCancel();
            })("nzOnOk", function PersonalDetailsComponent_Template_nz_modal_nzOnOk_282_listener() {
              return ctx.handleOk("Parent");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](283, PersonalDetailsComponent_ng_container_283_Template, 2, 1, "ng-container", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "nz-modal", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function PersonalDetailsComponent_Template_nz_modal_nzVisibleChange_284_listener($event) {
              return ctx.isAttendanceVisible = $event;
            })("nzOnCancel", function PersonalDetailsComponent_Template_nz_modal_nzOnCancel_284_listener() {
              return ctx.handleCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](285, PersonalDetailsComponent_ng_container_285_Template, 14, 2, "ng-container", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](92);

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](164);

            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](178);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](274);

            var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](279);

            var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](281);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_calling_loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.email) ? ctx.data == null ? null : ctx.data.email : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.dob) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 60, ctx.data == null ? null : ctx.data.dob, "dd MMM, yyyy") : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.income_range) ? ctx.data == null ? null : ctx.data.income_range : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.user_entered_pincode) ? ctx.data == null ? null : ctx.data.user_entered_pincode : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_calling_loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.company_name) ? ctx.data == null ? null : ctx.data.company_name : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.company_address) ? ctx.data == null ? null : ctx.data.company_address : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.employment_type) ? ctx.data == null ? null : ctx.data.employment_type : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_calling_loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.geo_location);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_calling_loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.data == null ? null : ctx.data.cibil_data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.cibil_data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](90, 63, ctx.data == null ? null : ctx.data.sms_data_response == null ? null : ctx.data.sms_data_response.processed_api_response));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_calling_loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.excel_data) ? ctx.data == null ? null : ctx.data.excel_data == null ? null : ctx.data.excel_data.emp_id : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.excel_data) ? ctx.data == null ? null : ctx.data.excel_data == null ? null : ctx.data.excel_data.first_name : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.excel_data) ? ctx.data == null ? null : ctx.data.excel_data == null ? null : ctx.data.excel_data.last_name : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.excel_data) ? ctx.data == null ? null : ctx.data.excel_data == null ? null : ctx.data.excel_data.net_monthly_income : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.excel_data) ? ctx.data == null ? null : ctx.data.excel_data == null ? null : ctx.data.excel_data.joining_date : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.excel_data) ? ctx.data == null ? null : ctx.data.excel_data == null ? null : ctx.data.excel_data.mobile : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.excel_data) ? ctx.data == null ? null : ctx.data.excel_data == null ? null : ctx.data.excel_data.branch : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.excel_data) ? ctx.data == null ? null : ctx.data.excel_data == null ? null : ctx.data.excel_data.partner : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.data == null ? null : ctx.data.excel_data == null ? null : ctx.data.excel_data.last_salary_details);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.excel_data == null ? null : ctx.data.excel_data.last_salary_details);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.generateloading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_calling_loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Application Score :", (ctx.data == null ? null : ctx.data.black_box_data) ? ctx.data == null ? null : ctx.data.black_box_data == null ? null : ctx.data.black_box_data.application_score : "", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_calling_loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.no_of_cheque_bounce) ? ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.no_of_cheque_bounce : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.nach_trans_declined) ? ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.nach_trans_declined : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.max_delinquent_amount) ? ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.max_delinquent_amount : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.no_of_write_off_cases) ? ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.no_of_write_off_cases : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.data_Quality_score) ? ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.data_Quality_score : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.retail_lending_score) ? ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.retail_lending_score : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.no_of_inquiries) ? ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.no_of_inquiries : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.no_of_negative_events) ? ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.no_of_negative_events : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.avg_salary_credited) ? ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.avg_salary_credited : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.avg_min_balance_Month) ? ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.avg_min_balance_Month : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.no_of_cc_applied) ? ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.no_of_cc_applied : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.no_of_loan_applied) ? ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.no_of_loan_applied : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.foir) ? ctx.data == null ? null : ctx.data.cibil_based_variables == null ? null : ctx.data.cibil_based_variables.foir : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzWidth", 800)("nzVisible", ctx._isUpdateStatus)("nzTitle", _r19)("nzFooter", _r21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFetchCibilSms);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzOkText", "Fetch attendance")("nzOkLoading", ctx.api_calling_Loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isAttendanceVisible)("nzOkText", null);
          }
        },
        directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_8__["NzPageHeaderComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_11__["NzTbodyComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__["NzModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__["NzModalContentDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_16__["NzIconDirective"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_17__["NzDatePickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_17__["NzRangePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["KeyValuePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb25hbC1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-personal-details',
            templateUrl: './personal-details.component.html',
            styleUrls: ['./personal-details.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
          }, {
            type: src_app_shared_globalservices_service__WEBPACK_IMPORTED_MODULE_6__["GlobalservicesService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }];
        }, {
          _currentId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Kz7f":
    /*!******************************************************************************!*\
      !*** ./src/app/shared/template/change-password/change-password.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ChangePasswordComponent */

    /***/
    function Kz7f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
        return ChangePasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");

      function ChangePasswordComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r3 == null ? null : data_r3.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r3 == null ? null : data_r3.phone, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r3 == null ? null : data_r3.email, " ");
        }
      }

      function ChangePasswordComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_ng_template_12_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.passwordVisible = !ctx_r4.passwordVisible;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r2.passwordVisible ? "eye-invisible" : "eye");
        }
      }

      var ChangePasswordComponent = /*#__PURE__*/function () {
        function ChangePasswordComponent(fb, message) {
          _classCallCheck(this, ChangePasswordComponent);

          this.fb = fb;
          this.message = message;
          this.onOkCall = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onCencelCall = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isLoading = false;
          this.passwordVisible = false;
        }

        _createClass(ChangePasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.userData);
            this.createPasswordForm();
          }
        }, {
          key: "createPasswordForm",
          value: function createPasswordForm() {
            var _a, _b;

            this.passwordForm = this.fb.group({
              id: [(_b = (_a = this.userData) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              new_password: [this.userData ? '' : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              retype_password: [this.userData ? '' : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          }
        }, {
          key: "onClickSubmitForm",
          value: function onClickSubmitForm() {
            for (var i in this.passwordForm.controls) {
              this.passwordForm.controls[i].markAsDirty();
              this.passwordForm.controls[i].updateValueAndValidity();
            }

            if (this.passwordForm.valid) {
              this.isLoading = true;

              if (this.passwordForm.value.new_password !== this.passwordForm.value.retype_password) {
                this.message.error("New Password and Confirm Password Does not Match");
                this.isLoading = false;
                return;
              } else {
                this.isLoading = true;
                this.onOkCall.emit(this.passwordForm.value);
              } // this.newItemEvent.emit(value);   


              console.log('Success', this.passwordForm.value.confirmPassword);
            }

            console.log(this.passwordForm.value);
          }
        }]);

        return ChangePasswordComponent;
      }();

      ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) {
        return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]));
      };

      ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChangePasswordComponent,
        selectors: [["app-change-password"]],
        inputs: {
          userData: "userData",
          subTitle: "subTitle",
          submitBtnTxt: "submitBtnTxt",
          cancelBtnTxt: "cancelBtnTxt",
          icon: "icon"
        },
        outputs: {
          onOkCall: "onOkCall",
          onCencelCall: "onCencelCall"
        },
        decls: 26,
        vars: 15,
        consts: [[1, "row"], ["class", "col-md-12 d-flex justify-content-start mb-3", 4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "col-md-12", "mt-4"], ["nzFor", "new_password", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Password !", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "new_password", "placeholder", "New Password"], ["suffixTemplate", ""], ["nzFor", "retype_password", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Confirm Password !", 3, "nzSm", "nzXs"], [3, "nzSuffix"], ["nz-input", "", "placeholder", "input password", "formControlName", "retype_password", 3, "type"], [1, "col-md-12", "d-flex", "justify-content-end"], ["nz-button", "", "nzType", "default", 1, "mr-3", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click"], [1, "col-md-12", "d-flex", "justify-content-start", "mb-3"], [1, "text-center"], [1, "mr-4"], ["nz-icon", "", 3, "nzType", "click"]],
        template: function ChangePasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangePasswordComponent_div_2_Template, 8, 3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "New Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-control", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChangePasswordComponent_ng_template_12_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-form-label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Confirm new password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nz-form-control", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-input-group", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_22_listener() {
              return ctx.onCencelCall.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_24_listener() {
              return ctx.onClickSubmitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.passwordForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSuffix", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.passwordVisible ? "text" : "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cancelBtnTxt);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.submitBtnTxt);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputGroupWhitSuffixOrPrefixDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-change-password',
            templateUrl: './change-password.component.html',
            styleUrls: ['./change-password.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]
          }];
        }, {
          userData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          subTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          submitBtnTxt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cancelBtnTxt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onOkCall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onCencelCall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "N+K7":
    /*!******************************************!*\
      !*** ./src/app/services/http.service.ts ***!
      \******************************************/

    /*! exports provided: HttpService */

    /***/
    function NK7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");

      var HttpService = /*#__PURE__*/function () {
        function HttpService(_http, message) {
          _classCallCheck(this, HttpService);

          this._http = _http;
          this.message = message;
          this.url = this.valueFunction(); // url1 = 'https://devonboardingapi.fatakpay.com'

          this.globalProductData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
          this.refreshBorrower = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
          this.refreshUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
          this.refreshAccount = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
          this.refreshCreditLine = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
          this.globalUserPermissionsData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
          this.limitCollapse = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
          this.expnadList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        }

        _createClass(HttpService, [{
          key: "valueFunction",
          value: function valueFunction() {
            var dynamic_url;

            if (location.origin == 'https://admin.fatakpay.com' || location.origin == 'http://admin.fatakpay.com') {
              dynamic_url = 'https://adminapi.fatakpay.com';
            } else if (location.origin == 'https://uatadmin.fatakpay.com' || location.origin == 'http://uatadmin.fatakpay.com') {
              dynamic_url = 'https://uatadminapi.fatakpay.com';
            } else {
              dynamic_url = 'https://devadminapi.fatakpay.com'; // dynamic_url = 'https://adminapi.fatakpay.com'
            }

            return dynamic_url;
          }
        }, {
          key: "UserLogin",
          value: function UserLogin(data) {
            return this._http.post(this.url + "/user/auth/", data);
          }
        }, {
          key: "setPermissionValue",
          value: function setPermissionValue(data) {
            this.globalUserPermissionsData.next(data);
          } /// Verify API 

        }, {
          key: "VerifyUser",
          value: function VerifyUser() {
            var data;
            return this._http.post(this.url + "/user/verify-admin-user/", data);
          } // /partner/v1/export-excel-data/171

        }, {
          key: "exportExcelDataOfPerticularCorporate",
          value: function exportExcelDataOfPerticularCorporate(id) {
            return this._http.get(this.url + "/partner/v1/export-excel-data/".concat(id), {
              responseType: 'blob'
            });
          }
        }, {
          key: "exportAppDataOfPerticularCorporate",
          value: function exportAppDataOfPerticularCorporate(id) {
            return this._http.get(this.url + "/partner/v1/export-app-user-data/".concat(id), {
              responseType: 'blob'
            });
          } /// Send Otp

        }, {
          key: "sendOtp",
          value: function sendOtp(data) {
            return this._http.post(this.url + "/user/forgot-password/", data);
          }
        }, {
          key: "generateOfferForCorrespondingApplication",
          value: function generateOfferForCorrespondingApplication(data) {
            return this._http.post(this.url + "/central-api/v1/call-api", data);
          }
        }, {
          key: "fetchXMLData",
          value: function fetchXMLData(data) {
            return this._http.get(this.url + "/central-api/v1/call-api", {
              params: data
            });
          } // UserKycCibil?application=15988

        }, {
          key: "fetchExportData",
          value: function fetchExportData(data) {
            return this._http.get(this.url + "/central-api/v1/call-api", {
              params: data,
              responseType: 'blob'
            });
          } // generateOfferForCorrespondingApplication
          /// Verify OTP 

        }, {
          key: "VerifyOtptopasswordchange",
          value: function VerifyOtptopasswordchange(data) {
            return this._http.post(this.url + "/user/forgot-password-validate/", data);
          }
        }, {
          key: "logout",
          value: function logout(data) {
            return this._http.post(this.url + "/user/admin-logout", data);
          } // /user/admin-logout

        }, {
          key: "createOnline$",
          value: function createOnline$() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'offline').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
              return false;
            })), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'online').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
              return true;
            })), new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (sub) {
              sub.next(navigator.onLine);
              sub.complete();
            }));
          }
        }, {
          key: "fetchNBFCdata",
          value: function fetchNBFCdata() {
            return this._http.get(this.url + "/master/fetch-master-data/NbfcMaster");
          }
          /**
           * createProductDetail
           */

        }, {
          key: "createProductDetail",
          value: function createProductDetail(data) {
            return this._http.post(this.url + "/product/v1/product", data);
          }
          /**
           * fetchProductDetailsbyId
           */

        }, {
          key: "fetchProductDetailsbyId",
          value: function fetchProductDetailsbyId(data) {
            return this._http.get(this.url + "/product/v1/product", {
              params: data
            });
          }
          /**
           * fetchGlobalProductDetailsbyId
           */

        }, {
          key: "fetchGlobalProductDetailsbyId",
          value: function fetchGlobalProductDetailsbyId(id) {
            return this._http.get(this.url + "/product/v1/global-product-view/" + id);
          }
          /**
           * fetchProductAuditLog
           */

        }, {
          key: "fetchProductAuditLog",
          value: function fetchProductAuditLog(data, endpoint) {
            return this._http.get(this.url + "/platform_central/fetch-history/" + endpoint, {
              params: data
            });
          }
          /**
           * fetchProductList
           */

        }, {
          key: "fetchProductList",
          value: function fetchProductList(data) {
            return this._http.get(this.url + "/product/v1/product", {
              params: data
            });
          }
          /**
           * fetchVersionDetails
           */

        }, {
          key: "fetchVersionDetails",
          value: function fetchVersionDetails(id) {
            return this._http.get(this.url + "/product/v1/get-all-product-versions/" + id);
          }
        }, {
          key: "fetchDocumentListProductWise",
          value: function fetchDocumentListProductWise() {
            return this._http.get(this.url + "/product/v1/document-list/");
          }
        }, {
          key: "getProductsDocumentDetails",
          value: function getProductsDocumentDetails(id) {
            return this._http.get(this.url + "/product/v1/add-edit-product-document/" + id);
          }
        }, {
          key: "updateProductDocuments",
          value: function updateProductDocuments(id, data) {
            return this._http.post(this.url + "/product/v1/add-edit-product-document/" + id, data);
          }
          /**
           * updateProductVersion
           */

        }, {
          key: "updateProductVersion",
          value: function updateProductVersion(data) {
            return this._http.post(this.url + "/product/v1/product-version", data);
          }
        }, {
          key: "exportPincodesType",
          value: function exportPincodesType(id, type) {
            var data = {};
            return this._http.get(this.url + "/product/v1/export-pincodes/" + id + "/" + type, {
              params: data,
              responseType: 'blob'
            });
          }
        }, {
          key: "uploadPincodes",
          value: function uploadPincodes(data) {
            return this._http.post(this.url + "/product/v1/upload-pincode-file", data);
          }
          /**
           * fetchEscrowStatementList
           */

        }, {
          key: "fetchEscrowStatementList",
          value: function fetchEscrowStatementList(data) {
            return this._http.get(this.url + "/nbfc/v1/account-fetch-escrow-transactions", {
              params: data
            });
          }
        }, {
          key: "fetchRefundsList",
          value: function fetchRefundsList(data) {
            return this._http.get(this.url + "/platform_central/v1/refund/get-list", {
              params: data
            });
          }
        }, {
          key: "impersonateCorporate",
          value: function impersonateCorporate(data) {
            return this._http.get(this.url + "/platform_central/v1/impersonate/user/".concat(data)); // , { params: data }
          }
          /**
           * fetchGSTInvoiceList
           */

        }, {
          key: "fetchGSTInvoiceList",
          value: function fetchGSTInvoiceList(data) {
            return this._http.get(this.url + "/nbfc/v1/account-fetch-gst-list", {
              params: data
            });
          }
          /**
           * fetchEmployeeList
           */

        }, {
          key: "fetchEmployeeList",
          value: function fetchEmployeeList(data) {
            return this._http.get(this.url + "/user/get-users", {
              params: data
            });
          }
        }, {
          key: "getApiBucketStats",
          value: function getApiBucketStats(data) {
            return this._http.get(this.url + "/platform_central/v1/get-api-stats", {
              params: data
            });
          }
          /**
           * toggleEmployeeStatus
           */

        }, {
          key: "toggleEmployeeStatus",
          value: function toggleEmployeeStatus(id) {
            return this._http.post(this.url + "/user/change-employee-status/" + id, '');
          }
          /**
           * fetchEmployeeManagerList
           */

        }, {
          key: "fetchEmployeeManagerList",
          value: function fetchEmployeeManagerList(data) {
            return this._http.get(this.url + "/user/get-managers/", {
              params: data
            });
          }
          /**
           * editProductDetail
           */

        }, {
          key: "editProductDetail",
          value: function editProductDetail(data, id) {
            return this._http.put(this.url + "/product/v1/edit-product/" + id, data);
          }
          /**
           * createMasterPartner
           */

        }, {
          key: "createMasterPartner",
          value: function createMasterPartner(data) {
            return this._http.post(this.url + "/partner/v1/create-partner-partnermaster", data);
          }
        }, {
          key: "updateMasterPartner",
          value: function updateMasterPartner(id, data) {
            return this._http.post(this.url + "/partner/v1/edit-partner-partnermaster/".concat(id), data);
          }
          /**
           * addEditEmployee
           */

        }, {
          key: "addEditEmployee",
          value: function addEditEmployee(data) {
            return this._http.patch(this.url + "/user/admin-user/", data);
          }
          /**
           * addEmployee
           */

        }, {
          key: "addEmployee",
          value: function addEmployee(data) {
            return this._http.post(this.url + "/user/admin-user/", data);
          }
          /**
           * editMasterPartner
           */

        }, {
          key: "editMasterPartner",
          value: function editMasterPartner(data, id) {
            return this._http.put(this.url + "/partner/v1/edit-partner-partnermaster/" + id, data);
          }
          /**
           * createPartnerPayout
           */

        }, {
          key: "createPartnerPayout",
          value: function createPartnerPayout(data) {
            return this._http.post(this.url + "/product/v1/create-edit-partnerpayout", data);
          }
          /**
           * editPartnerPayout
           */

        }, {
          key: "editPartnerPayout",
          value: function editPartnerPayout(data, id) {
            return this._http.post(this.url + "/partner/v1/edit-partner-partnermaster/" + id, data);
          }
          /**
           * fetchMasterPartner
           */

        }, {
          key: "fetchMasterPartner",
          value: function fetchMasterPartner(data) {
            return this._http.get(this.url + "/master/fetch-master-data/PartnerMaster", {
              params: data
            });
          }
          /**
           * fetchPartner
           */

        }, {
          key: "fetchPartner",
          value: function fetchPartner(data) {
            return this._http.get(this.url + "/master/fetch-master-data/Partner?all_partners=1", {
              params: data
            });
          }
          /**
           * fetchPartnerPayout
           */

        }, {
          key: "fetchPartnerPayout",
          value: function fetchPartnerPayout(data) {
            return this._http.get(this.url + "/product/v1/create-edit-partnerpayout", {
              params: data
            });
          }
        }, {
          key: "createNewBusinessNature",
          value: function createNewBusinessNature(data) {
            return this._http.post(this.url + "/platform_central/v1/add-business-nature", data);
          }
          /**
           * createLimits
           */

        }, {
          key: "createLimits",
          value: function createLimits(data) {
            return this._http.post(this.url + "/product/v1/create-product-limit", data);
          }
          /**
           * createBlackBox
           */

        }, {
          key: "createBlackBox",
          value: function createBlackBox(data) {
            return this._http.post(this.url + "/platform_central/v1/black-box-test", data);
          }
          /**
           * editLimits
           */

        }, {
          key: "editLimits",
          value: function editLimits(data, id) {
            return this._http.put(this.url + "/product/v1/edit-product-limit/" + id, data);
          }
          /**
           * fetchProductLimits
           */

        }, {
          key: "fetchProductLimits",
          value: function fetchProductLimits(data) {
            return this._http.get(this.url + "/product/v1/create-product-limit", {
              params: data
            });
          }
          /**
           * createPartnerPayout
           */

        }, {
          key: "createNbfcMapping",
          value: function createNbfcMapping(data) {
            return this._http.post(this.url + "/product/v1/assign-nbfc-to-product", data);
          }
          /**
           * fetchNbfcs
           */

        }, {
          key: "fetchNbfcs",
          value: function fetchNbfcs(data) {
            return this._http.get(this.url + "/product/v1/get-nbfc-product-mapping/" + data.product_id);
          }
          /**
           * fetchEntity
           */

        }, {
          key: "fetchEntity",
          value: function fetchEntity(data) {
            return this._http.get(this.url + "/master/fetch-master-data/EntityMaster", {
              params: data
            });
          }
          /**
           * fetchEmploymentType
           */

        }, {
          key: "fetchEmploymentType",
          value: function fetchEmploymentType(data) {
            return this._http.get(this.url + "/master/fetch-master-data/EmploymentTypeMaster", {
              params: data
            });
          }
          /**
           * fetchCorporationCategory
           */

        }, {
          key: "fetchCorporationCategory",
          value: function fetchCorporationCategory(data) {
            return this._http.get(this.url + "/platform_central/v1/get-corporation-category", {
              params: data
            });
          }
          /**
           * fetchDocumentMaster
           */

        }, {
          key: "fetchDocumentMaster",
          value: function fetchDocumentMaster(data) {
            return this._http.get(this.url + "/master/fetch-master-data/DocumentMaster", {
              params: data
            });
          }
          /**
           * getCorporateWithBillDate
           */

        }, {
          key: "getCorporateWithBillDate",
          value: function getCorporateWithBillDate(data) {
            return this._http.get(this.url + "/partner/v1/get-corporate-with-bill-dates", {
              params: data
            });
          }
          /**
           * fetchThirdPartyMaster
           */

        }, {
          key: "fetchThirdPartyMaster",
          value: function fetchThirdPartyMaster(data) {
            return this._http.get(this.url + "/platform_central/v1/get-all-third-party-apis-list", {
              params: data
            });
          }
          /**
           * createLimits
           */

        }, {
          key: "createUnderWritingRule",
          value: function createUnderWritingRule(data) {
            return this._http.post(this.url + "/product/v1/add-edit-underwritingrule", data);
          }
          /**
           * fetchUnderWritingRule
           */

        }, {
          key: "fetchUnderWritingRule",
          value: function fetchUnderWritingRule(data) {
            return this._http.get(this.url + "/product/v1/get-underwritingrule/" + data.product_id);
          }
          /**
           * fetchUnderWritingSpecificEntity
           */

        }, {
          key: "fetchUnderWritingSpecificEntity",
          value: function fetchUnderWritingSpecificEntity() {
            return this._http.get(this.url + "/platform_central/v1/get-underwriting-specific-entites");
          }
          /**
           * fetchTriggerMaster
           */

        }, {
          key: "fetchTriggerMaster",
          value: function fetchTriggerMaster(data) {
            return this._http.get(this.url + "/master/fetch-master-data/TriggerMaster", {
              params: data
            });
          }
          /**
           * fetchFrequencyMaster
           */

        }, {
          key: "fetchFrequencyMaster",
          value: function fetchFrequencyMaster(data) {
            return this._http.get(this.url + "/master/fetch-master-data/FrequencyMaster", {
              params: data
            });
          }
          /**
           * fetchFeeTypeMaster
           */

        }, {
          key: "fetchFeeTypeMaster",
          value: function fetchFeeTypeMaster(data) {
            return this._http.get(this.url + "/master/fetch-master-data/FeeTypeMaster", {
              params: data
            });
          }
          /**
           * createProductFees
           */

        }, {
          key: "createProductFees",
          value: function createProductFees(data, product_id) {
            return this._http.post(this.url + "/product/v1/product-fees/" + product_id, data);
          }
          /**
           * editProductFees
           */

        }, {
          key: "editProductFees",
          value: function editProductFees(data, product_id) {
            return this._http.put(this.url + "/product/v1/product-fees/" + product_id, data);
          }
          /**
           * fetchProductFees
           */

        }, {
          key: "fetchProductFees",
          value: function fetchProductFees(data) {
            return this._http.get(this.url + "/product/v1/product-fees/" + data.product_id);
          } // Get All Products

        }, {
          key: "getProducts",
          value: function getProducts() {
            return this._http.get(this.url + "/product/v1/get-all-products");
          } // Get All Products Fees

        }, {
          key: "getProductWiseFees",
          value: function getProductWiseFees(id) {
            return this._http.get(this.url + "/product/v1/get-all-product-fees/" + id);
          }
        }, {
          key: "getAllProducts",
          value: function getAllProducts() {
            return this._http.get(this.url + "/product/v1/product_master");
          }
          /**
           * createOnboardingRules
           */

        }, {
          key: "createOnboardingRules",
          value: function createOnboardingRules(data, product_id) {
            return this._http.post(this.url + "/product/v1/onboarding-rules/" + product_id, data);
          }
          /**
           * createOnboardingRules
           */

        }, {
          key: "createRules",
          value: function createRules(data, product_id) {
            return this._http.post(this.url + "/product/v1/save-product-transaction-configuration", data);
          }
          /**
           * editOnboardingRules
           */

        }, {
          key: "editOnboardingRules",
          value: function editOnboardingRules(data, product_id) {
            return this._http.put(this.url + "/product/v1/onboarding-rules/" + product_id, data);
          }
          /**
           * fetchOnboardingRules
           */

        }, {
          key: "fetchOnboardingRules",
          value: function fetchOnboardingRules(data) {
            return this._http.get(this.url + "/product/v1/onboarding-rules/" + data.product_id);
          }
          /**
           * fetchOnboardingRules
           */

        }, {
          key: "fetchTransactionConfig",
          value: function fetchTransactionConfig(data) {
            return this._http.get(this.url + "/product/v1/get-product-transaction-configuration/" + data.product_id);
          }
          /**
           * fetchAllDocumentRules
           */

        }, {
          key: "fetchAllDocumentRules",
          value: function fetchAllDocumentRules(data) {
            return this._http.get(this.url + "/product/v1/get-product-document-rules/" + data);
          }
          /**
           * fetchRoles
           */

        }, {
          key: "fetchRoles",
          value: function fetchRoles(data) {
            return this._http.get(this.url + "/master/fetch-master-data/Roles", {
              params: data
            });
          } // LMS 

          /**
           * fetchBorrowerList
           */
          // 

        }, {
          key: "fetchBorrowerList",
          value: function fetchBorrowerList(data) {
            return this._http.get(this.url + "/loan-application/v1/borrowers-list", {
              params: data
            });
          }
        }, {
          key: "fetchEmiBorrowersList",
          value: function fetchEmiBorrowersList(data) {
            return this._http.get(this.url + "/loan-application/v1/fetch-emi-borrowers-list", {
              params: data
            });
          }
        }, {
          key: "fetchEmiBorrowersDetails",
          value: function fetchEmiBorrowersDetails(data) {
            return this._http.get(this.url + "/loan-application/v1/fetch-emi-borrowers-details", {
              params: data
            });
          }
        }, {
          key: "getEmiBillReport",
          value: function getEmiBillReport(data) {
            return this._http.get(this.url + "/loan-application/v1/generate-emi-bill-report", {
              params: data,
              responseType: 'blob'
            });
          }
        }, {
          key: "fetchEMIEligibilityList",
          value: function fetchEMIEligibilityList(data) {
            return this._http.get(this.url + "/platform_central/v1/emi-eligibility/list-file", {
              params: data
            });
          }
        }, {
          key: "viewEMIEligibilityList",
          value: function viewEMIEligibilityList(id, data) {
            return this._http.get(this.url + "/platform_central/v1/emi-eligibility/view-file/" + id, {
              params: data
            });
          }
        }, {
          key: "uploadEMIEligibilityData",
          value: function uploadEMIEligibilityData(data) {
            return this._http.post(this.url + "/platform_central/v1/emi-eligibility/upload-file", data);
          }
          /**
           * fetchTransactionList
           */

        }, {
          key: "fetchTransactionList",
          value: function fetchTransactionList(data) {
            return this._http.get(this.url + "/loan-application/v1/transactions-list", {
              params: data
            });
          }
          /**
           * fetchBorrowerDetail
           */

        }, {
          key: "fetchBorrowerDetail",
          value: function fetchBorrowerDetail(id) {
            return this._http.get(this.url + "/loan-application/v1/borrowers-detail/" + id);
          }
          /**
           * changePasswordByAdmin
           */

        }, {
          key: "changePasswordByAdmin",
          value: function changePasswordByAdmin(data) {
            return this._http.post(this.url + "/user/change-password-by-admin/", data);
          }
          /**
           * changePassword
           */

        }, {
          key: "changePassword",
          value: function changePassword(data) {
            return this._http.post(this.url + "/user/change-password/", data);
          }
          /**
           * fetchLoanAgreementMaster
           */

        }, {
          key: "fetchLoanAgreementMaster",
          value: function fetchLoanAgreementMaster() {
            return this._http.get(this.url + "/platform_central/v1/get-agreements");
          }
          /**
           * fetchLoanAgreement
           */

        }, {
          key: "fetchLoanAgreement",
          value: function fetchLoanAgreement(data) {
            return this._http.get(this.url + "/product/v1/get-agreement-mapping/" + data.product_id);
          }
          /**
           * activeInactiveProduct
           */

        }, {
          key: "activeInactiveProduct",
          value: function activeInactiveProduct(id) {
            return this._http.put(this.url + "/product/v1/activate-deactivate-product/" + id, null);
          }
        }, {
          key: "activeInactive",
          value: function activeInactive(id) {
            return this._http.put(this.url + "/partner/v1/corporate-block-all-employees/" + id, null);
          }
          /**
           * createLoanAgreement
           */

        }, {
          key: "createLoanAgreement",
          value: function createLoanAgreement(data) {
            return this._http.post(this.url + "/product/v1/add-edit-agreement-mapping", data);
          } /// export function

        }, {
          key: "exportMasterSectionModule",
          value: function exportMasterSectionModule(res, section, file_formate, generateloader) {
            this.message.success('File Exported');
            this.message.remove(generateloader);
            var downloadURL = window.URL.createObjectURL(res);
            var link = document.createElement('a');
            link.href = downloadURL;
            link.download = section + '.' + file_formate;
            link.click();
          } //************************ */

        }, {
          key: "setProductValue",
          value: function setProductValue(data) {
            this.globalProductData.next(data);
          }
          /**
           * Application Module Fetch Loan
           */
          // Track Application for Loan ID

        }, {
          key: "trackApplicationStatus",
          value: function trackApplicationStatus(data) {
            return this._http.get(this.url + "/central-api/v1/call-api", {
              params: data
            });
          }
        }, {
          key: "fetchLoanApplicationData",
          value: function fetchLoanApplicationData(data) {
            return this._http.get(this.url + "/loan-application/v1/fetch-loan-application/LoanApplication", {
              params: data
            });
          } //   Fetch Master Income Source Range list

        }, {
          key: "getMasterIncomeSource",
          value: function getMasterIncomeSource() {
            return this._http.get(this.url + "/master/fetch-master-data/IncomeSourceMaster");
          } //   ****************************Loan Application Module API's ***************************
          // Get Application stage count

        }, {
          key: "getApplicationStageCount",
          value: function getApplicationStageCount(data) {
            return this._http.get(this.url + "/central-api/v1/call-api", {
              params: data
            });
          } //  Fetch All Stages**/

        }, {
          key: "getStageMaster",
          value: function getStageMaster(id) {
            return this._http.get(this.url + "/platform_central/v1/get-allowed-stages/" + id);
          }
        }, {
          key: "getStatusStageWise",
          value: function getStatusStageWise(data) {
            return this._http.get(this.url + "/central-api/v1/call-api", {
              params: data
            });
          } // Export API

        }, {
          key: "exportLoanApplicationData",
          value: function exportLoanApplicationData(data) {
            return this._http.post(this.url + "/central-api/v1/call-api", data, {
              responseType: 'blob'
            });
          }
        }, {
          key: "exportDPDDays",
          value: function exportDPDDays(data) {
            return this._http.get(this.url + "/loan-application/v1/export-dpd-borrowers-list", {
              responseType: 'blob',
              params: data
            });
          }
        }, {
          key: "editLoanData",
          value: function editLoanData(data) {
            return this._http.post(this.url + "/central-api/v1/call-api", data);
          }
        }, {
          key: "fetchLoanApplicationList",
          value: function fetchLoanApplicationList(data) {
            return this._http.get(this.url + "/central-api/v1/call-api", {
              params: data
            });
          }
        }, {
          key: "fetchLoanApplicationUpload",
          value: function fetchLoanApplicationUpload(data) {
            return this._http.post(this.url + "/central-api/v1/call-api", data);
          }
        }, {
          key: "fetchLoanApplicationDelete",
          value: function fetchLoanApplicationDelete(data) {
            return this._http.post(this.url + "/central-api/v1/call-api", data);
          } // fetch Cibil

        }, {
          key: "getCibilSMSData",
          value: function getCibilSMSData(data) {
            // const headers = new HttpHeaders().set('Authorization', 'Token e910e4048d4b1bde8df20a0d6e9d0250a4d39cc9');
            return this._http.get(this.url + "/central-api/v1/call-api", {
              params: data
            });
          } // Pull cibil from 3rd Party

        }, {
          key: "pullCibilThirdParty",
          value: function pullCibilThirdParty(data) {
            return this._http.post(this.url + "/central-api/v1/call-api", data);
          } // pull sms from 3rd part

        }, {
          key: "pullSMSThirdParty",
          value: function pullSMSThirdParty(data) {
            return this._http.post(this.url + "/central-api/v1/call-api", data);
          } // Fetch SMS

        }, {
          key: "fetchSMS",
          value: function fetchSMS(id) {
            return this._http.get(this.url + "/loan-application/v1/fetch-data/sms/" + id);
          } // Pull BlackBox Data

        }, {
          key: "pullBlackBoxData",
          value: function pullBlackBoxData(data) {
            return this._http.get(this.url + "/central-api/v1/call-api", {
              params: data
            });
          } // Upload document for loan application

        }, {
          key: "uploadLoanDocument",
          value: function uploadLoanDocument(data) {
            return this._http.post(this.url + "/central-api/v1/call-api", data);
          }
        }, {
          key: "uploadLoanSelfieDocument",
          value: function uploadLoanSelfieDocument(data) {
            return this._http.put(this.url + "/central-api/v1/call-api", data);
          } // Upload document for loan application

        }, {
          key: "uploadOcrDocument",
          value: function uploadOcrDocument(data) {
            return this._http.post(this.url + "/external/v1/validate-ocr", data);
          } // Verify Loan Application Documents 

        }, {
          key: "verifyLoanDocument",
          value: function verifyLoanDocument(data) {
            return this._http.post(this.url + "/central-api/v1/call-api", data);
          } // Send E-mandate Link 

        }, {
          key: "sendEmandateLink",
          value: function sendEmandateLink(data) {
            return this._http.post(this.url + "/loan-application/v1/create-emandate-registration-link", data);
          } // Download Loan Application Documents 

        }, {
          key: "downloadDocuments",
          value: function downloadDocuments(data) {
            return this._http.get(this.url + "/central-api/v1/call-api", {
              params: data
            });
          } // Update Single Loan Application Status

        }, {
          key: "updateSingleLoanApp",
          value: function updateSingleLoanApp(data) {
            return this._http.post(this.url + "/central-api/v1/call-api", data);
          } // Update Multiple Loan Application Status

        }, {
          key: "updateMultipleLoanApp",
          value: function updateMultipleLoanApp(data) {
            return this._http.post(this.url + "/central-api/v1/call-api", data);
          } // Fetch Admin Proposed Offer

        }, {
          key: "fetchEditofferData",
          value: function fetchEditofferData(data) {
            return this._http.post(this.url + "/central-api/v1/call-api", data); //** */ ?source=LMS&datapoint=fetch_proposed_offers&endpoint=1
            //** */ ?source=LMS&datapoint=fetch_accepted_offers&endpoint=1
          } // Edit Proposed Accepted Offers

        }, {
          key: "editAdProposedOffer",
          value: function editAdProposedOffer(id) {
            return this._http.put(this.url + "/central-api/v1/call-api", id); //**Form Body "source" : "LMS",
            //     "datapoint" : "edit_proposed_offers",
            //     "endpoint" : "1",
            //     "amount" : 2000
          } // Edit Admin Accepted Offers

        }, {
          key: "editAdAcceptedOffer",
          value: function editAdAcceptedOffer(id) {
            return this._http.put(this.url + "/central-api/v1/call-api", id); //**Form Body     "source" : "LMS",
            //     "datapoint" : "edit_accepted_offers",
            //     "endpoint" : "1",
            //     "amount" : 2000
          } // Admin Accepted Offers

        }, {
          key: "acceptLoanOffer",
          value: function acceptLoanOffer(data) {
            return this._http.put(this.url + "/central-api/v1/call-api", data); //**Form Body     // "source" : "LMS",
            // "datapoint" : "accept_offer",
            // "endpoint" : "9",
            // "remarks" : "Offer was not useful"
          } // Admin Rejected Offers

        }, {
          key: "rejectedOffersAd",
          value: function rejectedOffersAd(data) {
            return this._http.post(this.url + "/central-api/v1/call-api", data);
          }
        }, {
          key: "moveApplication",
          value: function moveApplication(data) {
            return this._http.put(this.url + "/central-api/v1/call-api", data);
          } // ********************************** End Loan Application API's***************************

        }, {
          key: "getMasterPartner",
          value: function getMasterPartner(data) {
            return this._http.get(this.url + "/partner/v1/get/master", {
              params: data
            }); // /partner/v1/get/master
          }
        }, {
          key: "getPartnerDSAList",
          value: function getPartnerDSAList(data) {
            return this._http.get(this.url + "/partner/v1/get/partner", {
              params: data
            }); // /partner/v1/get/master
          }
        }, {
          key: "getPartnerDSAListById",
          value: function getPartnerDSAListById(id) {
            return this._http.get(this.url + "/partner/v1/get-detail/partner/".concat(id));
          } // /partner/v1/get-detail/partner/21
          // /partner/v1/get/partner?partner_nature=DSA

        }, {
          key: "getMerchantList",
          value: function getMerchantList(data) {
            return this._http.get(this.url + "/partner/v1/get/partner", {
              params: data
            });
          }
        }, {
          key: "getListOfDocumentRequired",
          value: function getListOfDocumentRequired() {
            return this._http.get(this.url + "/master/fetch-master-data/DocumentMaster"); // master/fetch-master-data/DocumentMaster
          }
        }, {
          key: "createMasterPartnerForm",
          value: function createMasterPartnerForm(data) {
            return this._http.post(this.url + "/partner/v1/create-partner-partnermaster", data);
          }
        }, {
          key: "updateMasterPartnerForm",
          value: function updateMasterPartnerForm(id, data) {
            return this._http.put(this.url + "/partner/v1/edit-partner-partnermaster/".concat(id), data);
          }
        }, {
          key: "createMerchantForm",
          value: function createMerchantForm(data) {
            return this._http.post(this.url + "/merchant/v1/add-merchant", data);
          }
        }, {
          key: "updateMerchantForm",
          value: function updateMerchantForm(id, data) {
            return this._http.put(this.url + "/merchant/v1/edit-merchant/".concat(id), data);
          } // 

        }, {
          key: "createNBFCForm",
          value: function createNBFCForm(data) {
            return this._http.post(this.url + "/nbfc/v1/add-nbfc", data);
          }
        }, {
          key: "updateNBFCForm",
          value: function updateNBFCForm(id, data) {
            return this._http.put(this.url + "/nbfc/v1/edit-nbfc/".concat(id), data);
          }
        }, {
          key: "createPartnerForm",
          value: function createPartnerForm(data) {
            return this._http.post(this.url + "/partner/v1/create-partner-partnermaster", data);
          } // /partner/v1/create-partner-partnermaster
          // Application Module => End point 

        }, {
          key: "fetchLoanApplicationListExport",
          value: function fetchLoanApplicationListExport(data) {
            // const headers = new HttpHeaders().set('Authorization', 'Token e910e4048d4b1bde8df20a0d6e9d0250a4d39cc9');
            return this._http.post(this.url + "/central-api/v1/call-api", data, {
              responseType: 'blob'
            });
          } // Application Module => End point 

        }, {
          key: "fetchLoanApplicationListExportGet",
          value: function fetchLoanApplicationListExportGet(data) {
            // const headers = new HttpHeaders().set('Authorization', 'Token e910e4048d4b1bde8df20a0d6e9d0250a4d39cc9');
            return this._http.get(this.url + "/central-api/v1/call-api", {
              params: data,
              responseType: 'blob'
            });
          }
        }, {
          key: "exportReferral",
          value: function exportReferral(id) {
            return this._http.get(this.url + "/partner/v1/export-corporate-referral-cashback/" + id, {
              responseType: 'blob'
            });
          }
        }, {
          key: "exportCashback",
          value: function exportCashback(id) {
            return this._http.get(this.url + "/partner/v1/export-corporate-cashback-program/" + id, {
              responseType: 'blob'
            });
          }
        }, {
          key: "exportMonthWiseCorporateData",
          value: function exportMonthWiseCorporateData(data) {
            // const headers = new HttpHeaders().set('Authorization', 'Token e910e4048d4b1bde8df20a0d6e9d0250a4d39cc9');
            return this._http.get(this.url + "/partner/v1/corporate-employee-month-wise-data-export", {
              params: data,
              responseType: 'blob'
            });
          }
        }, {
          key: "exportBilledUnBilled",
          value: function exportBilledUnBilled(data) {
            // const headers = new HttpHeaders().set('Authorization', 'Token e910e4048d4b1bde8df20a0d6e9d0250a4d39cc9');
            return this._http.get(this.url + "/central-api/v1/borrowers-bills", {
              params: data
            });
          }
        }, {
          key: "exportEscrowStatement",
          value: function exportEscrowStatement(data) {
            // const headers = new HttpHeaders().set('Authorization', 'Token e910e4048d4b1bde8df20a0d6e9d0250a4d39cc9');
            return this._http.get(this.url + "/nbfc/v1/account-export-escrow-transactions", {
              params: data,
              responseType: 'blob'
            });
          }
        }, {
          key: "exportGSTList",
          value: function exportGSTList(data) {
            // const headers = new HttpHeaders().set('Authorization', 'Token e910e4048d4b1bde8df20a0d6e9d0250a4d39cc9');
            return this._http.get(this.url + "/nbfc/v1/account-export-gst-list", {
              params: data,
              responseType: 'blob'
            });
          } // Application Module => End point 

        }, {
          key: "postLoanApplicationApi",
          value: function postLoanApplicationApi(data) {
            // const headers = new HttpHeaders().set('Authorization', 'Token e910e4048d4b1bde8df20a0d6e9d0250a4d39cc9');
            return this._http.post(this.url + "/central-api/v1/call-api", data);
          }
        }, {
          key: "updateStatusForAuthorization",
          value: function updateStatusForAuthorization(data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
            return this._http.put(this.url + "/central-api/v1/call-api", data, {
              headers: headers
            });
          }
        }, {
          key: "getLMSAuthorizationList",
          value: function getLMSAuthorizationList(data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
            return this._http.get(this.url + "/central-api/v1/call-api", {
              headers: headers,
              params: data
            });
          }
        }, {
          key: "updateLMSAuthorizationList",
          value: function updateLMSAuthorizationList(data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
            return this._http.put(this.url + "/central-api/v1/call-api", data);
          }
        }, {
          key: "deleteUserByUserId",
          value: function deleteUserByUserId(id) {
            // /partner/v1/delete-user/partner/23
            return this._http["delete"](this.url + "/partner/v1/delete-user/partner/".concat(id));
          }
        }, {
          key: "deleteNBFCDocumentByDocumentId",
          value: function deleteNBFCDocumentByDocumentId(id) {
            // /partner/v1/delete-user/partner/23
            return this._http["delete"](this.url + "/nbfc/v1/delete-nbfc-doc/".concat(id));
          }
        }, {
          key: "deletePartnerDocumentByDocumentId",
          value: function deletePartnerDocumentByDocumentId(id) {
            // /partner/v1/delete-user/partner/23
            return this._http["delete"](this.url + "/partner/v1/delete-doc/partner/".concat(id));
          }
        }, {
          key: "deleteMasterDocumentByDocumentId",
          value: function deleteMasterDocumentByDocumentId(id) {
            return this._http["delete"](this.url + "/partner/v1/delete-doc/master/".concat(id));
          }
        }, {
          key: "upgradeToMasterPartner",
          value: function upgradeToMasterPartner(id, data) {
            return this._http.put(this.url + "/partner/v1/upgrade-to-master/".concat(id), data);
          }
        }, {
          key: "resetPasswordForCorporateAdmin",
          value: function resetPasswordForCorporateAdmin(data) {
            return this._http.post(this.url + "/partner/v1/reset-password-corporate-admin/partner", data);
          }
        }, {
          key: "resetPasswordForLenderAdmin",
          value: function resetPasswordForLenderAdmin(data) {
            return this._http.post(this.url + "/nbfc/v1/reset-nbfc-user-password", data);
          }
        }, {
          key: "getListOfEmployeeBasedOnParameter",
          value: function getListOfEmployeeBasedOnParameter(data) {
            return this._http.get(this.url + "/partner/v1/corporate/all-employees", {
              params: data
            });
          }
        }, {
          key: "getListOfEmployeeAttandance",
          value: function getListOfEmployeeAttandance(data) {
            return this._http.get(this.url + "/partner/v1/get-corporate-attendance-data", {
              params: data
            });
          }
        }, {
          key: "getMonthWiseCorporateData",
          value: function getMonthWiseCorporateData(data) {
            return this._http.get(this.url + "/partner/v1/corporate-employee-month-wise-data", {
              params: data
            });
          } // /partner/v1/get-corporate-attendance-data

        }, {
          key: "markEmployeeDetailsAsVerify",
          value: function markEmployeeDetailsAsVerify(data) {
            return this._http.post(this.url + "/partner/v1/mark-as-done-by-admin", data);
          }
        }, {
          key: "showPasswordOfCorporateAdmin",
          value: function showPasswordOfCorporateAdmin(id) {
            return this._http.get(this.url + "/partner/v1/show-password-corporate-admin/".concat(id));
          }
        }, {
          key: "showPasswordOfLenderAdmin",
          value: function showPasswordOfLenderAdmin(id) {
            return this._http.get(this.url + "/nbfc/v1/show-nbfc-user-password/".concat(id));
          } // /partner/v1/reset-password-corporate-admin/partner

        }, {
          key: "deleteMasterUserByUserId",
          value: function deleteMasterUserByUserId(id) {
            // /partner/v1/delete-user/partner/23
            return this._http["delete"](this.url + "/partner/v1/delete-user/master/".concat(id));
          }
        }, {
          key: "deleteNBFCUserByUserId",
          value: function deleteNBFCUserByUserId(id) {
            // /partner/v1/delete-user/partner/23
            return this._http["delete"](this.url + "/nbfc/v1/delete-nbfc/".concat(id));
          }
        }, {
          key: "getMasterPartnerById",
          value: function getMasterPartnerById(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
            return this._http.get(this.url + "/partner/v1/get-detail/master/".concat(id), {
              headers: headers
            });
          }
        }, {
          key: "getNBFCList",
          value: function getNBFCList(data) {
            return this._http.get(this.url + "/nbfc/v1/get-nbfc-list", {
              params: data
            });
          }
        }, {
          key: "getNBFCDetail",
          value: function getNBFCDetail(id) {
            return this._http.get(this.url + "/nbfc/v1/get-nbfc-detail/".concat(id));
          }
        }, {
          key: "getMerchantDetail",
          value: function getMerchantDetail(id) {
            return this._http.get(this.url + "/merchant/v1/get-merchant-details/".concat(id));
          } // 

        }, {
          key: "getPartnerList",
          value: function getPartnerList(data) {
            return this._http.get(this.url + "/partner/v1/get/partner", {
              params: data
            });
          }
        }, {
          key: "getUserEmployeeDetails",
          value: function getUserEmployeeDetails(data) {
            return this._http.get(this.url + "/partner/v1/admin-fetch-corporate-uploads-list", {
              params: data
            });
          }
        }, {
          key: "getDetailsOfUploadedFile",
          value: function getDetailsOfUploadedFile(id, data) {
            return this._http.get(this.url + "/partner/v1/view-corporate-uploads/".concat(id), {
              params: data
            });
          }
        }, {
          key: "getDetailsOfUploadedEmpAttendanceFile",
          value: function getDetailsOfUploadedEmpAttendanceFile(id, data) {
            return this._http.get(this.url + "/partner/v1/view-detailed-attendance-data/".concat(id), {
              params: data
            });
          } // /partner/v1/view-detailed-attendance-data

        }, {
          key: "downloadUploadedUserDetailFile",
          value: function downloadUploadedUserDetailFile(id) {
            return this._http.get(this.url + "/partner/v1/download-corporate-upload/".concat(id), {
              responseType: 'blob'
            });
          }
        }, {
          key: "downloadUploadedEmpAttendanceDetailFile",
          value: function downloadUploadedEmpAttendanceDetailFile(id) {
            return this._http.get(this.url + "/partner/v1/export-detailed-attendance-data/".concat(id), {
              responseType: 'blob'
            });
          }
        }, {
          key: "verifyUploadedFile",
          value: function verifyUploadedFile(id, data) {
            return this._http.put(this.url + "/partner/v1/verify-corporate-upload/".concat(id), data);
          }
        }, {
          key: "getListOfSection",
          value: function getListOfSection() {
            return this._http.get(this.url + "/partner/v1/file-sections-list");
          } // /partner/v1/view-corporate-uploads/1?page=1&limit=10

        }, {
          key: "getPartnerListDetail",
          value: function getPartnerListDetail(id) {
            return this._http.get(this.url + "/partner/v1/get-detail/partner/".concat(id));
          } // Lender Management API

        }, {
          key: "getLenderManagementList",
          value: function getLenderManagementList(data) {
            return this._http.get(this.url + "/central-api/v1/call-api", {
              params: data
            });
          }
        }, {
          key: "getLendersCommitmentList",
          value: function getLendersCommitmentList(data) {
            return this._http.get(this.url + "/central-api/v1/call-api", {
              params: data
            });
          }
        }, {
          key: "editLenderCommitment",
          value: function editLenderCommitment(data) {
            return this._http.post(this.url + "/central-api/v1/call-api", data);
          }
        }, {
          key: "fetchPermissionSlugsForEmployee",
          value: function fetchPermissionSlugsForEmployee(data) {
            return this._http.get(this.url + "/platform_central/v1/get-controller-list", {
              params: data
            });
          }
        }, {
          key: "updateAppVersion",
          value: function updateAppVersion(data) {
            return this._http.post(this.url + "/platform_central/v1/app-version", data);
          }
        }, {
          key: "getAppVersion",
          value: function getAppVersion() {
            return this._http.get(this.url + "/platform_central/v1/app-version");
          }
        }, {
          key: "updatePermissionBasedOnType",
          value: function updatePermissionBasedOnType(id, data) {
            return this._http.post(this.url + "/platform_central/v1/permissions/".concat(id), data);
          } // /platform_central/permissions/

        }, {
          key: "getLenderFundRequestList",
          value: function getLenderFundRequestList(data) {
            return this._http.get(this.url + "/central-api/v1/call-api", {
              params: data
            });
          } // Add Fund Reuqest

        }, {
          key: "addLenderFundRequest",
          value: function addLenderFundRequest(data) {
            return this._http.post(this.url + "/central-api/v1/call-api", data);
          }
        }, {
          key: "getRepaymentList",
          value: function getRepaymentList(data) {
            return this._http.get(this.url + "/central-api/v1/call-api", {
              params: data
            });
          }
        }, {
          key: "addRepaymentNBFC",
          value: function addRepaymentNBFC(data) {
            return this._http.post(this.url + "/central-api/v1/call-api", data);
          }
        }, {
          key: "addEditExistingRole",
          value: function addEditExistingRole(data) {
            return this._http.post(this.url + "/platform_central/v1/add-edit-role", data);
          }
        }, {
          key: "deleteRole",
          value: function deleteRole(id, data) {
            return this._http["delete"](this.url + "/platform_central/v1/delete-role/".concat(id), data);
          } // 

        }, {
          key: "getCouponCodeList",
          value: function getCouponCodeList(data) {
            return this._http.get(this.url + "/platform_central/v1/coupon-code-list", {
              params: data
            });
          }
        }, {
          key: "getCashbackList",
          value: function getCashbackList(data) {
            return this._http.get(this.url + "/partner/v1/corporate-cashback-screen", {
              params: data
            });
          } // Add Edit Coupon Code Data

        }, {
          key: "addEditCouponCode",
          value: function addEditCouponCode(data) {
            return this._http.post(this.url + "/platform_central/v1/add-edit-coupon-code", data);
          } // Get Detail Of Coupon Code

        }, {
          key: "getCouponDetail",
          value: function getCouponDetail(data) {
            return this._http.get(this.url + "/platform_central/v1/coupon-code-details/" + data);
          }
        }, {
          key: "couponStatusChange",
          value: function couponStatusChange(id, status) {
            return this._http.put(this.url + "/platform_central/v1/coupon-code-toggle/" + id, status);
          } // sample Download

        }, {
          key: "sampleDownloadGlobalFunction",
          value: function sampleDownloadGlobalFunction(section) {
            var link = document.createElement('a');
            link.href = '/assets/imports/' + section + '.xlsx';
            link.download = section + '.xlsx';
            link.click();
          } // uploadFile

        }, {
          key: "uploadMCCFile",
          value: function uploadMCCFile(data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
            return this._http.post(this.url + "/central-api/v1/call-api", data, {
              headers: headers
            });
          } //UploadAndShowAggrement

        }, {
          key: "uploadAndShowAgreement",
          value: function uploadAndShowAgreement(endPoint, action, id, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();

            if (action === 'post') {
              return this._http.post(this.url + "/partner/v1/upload-agreement/".concat(endPoint, "/").concat(id), data, {
                headers: headers
              });
            } else if (action === 'get') {
              return this._http.get(this.url + "/partner/v1/upload-agreement/".concat(endPoint, "/").concat(id));
            }
          }
        }, {
          key: "uploadAndShowAgreementForNBFC",
          value: function uploadAndShowAgreementForNBFC(action, id, data) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();

            if (action === 'post') {
              return this._http.post(this.url + "/nbfc/v1/upload-agreement/".concat(id), data, {
                headers: headers
              });
            } else if (action === 'get') {
              return this._http.get(this.url + "/nbfc/v1/upload-agreement/".concat(id), {
                headers: headers
              });
            }
          }
        }, {
          key: "fetchDetailForUserModuleDropDown",
          value: function fetchDetailForUserModuleDropDown(action) {
            // /platform_central/v1/get-states
            return this._http.get(this.url + "/platform_central/v1/".concat(action));
          }
        }, {
          key: "getEmployeeDetailWithEmployeeTypeAndCorporateId",
          value: function getEmployeeDetailWithEmployeeTypeAndCorporateId(data) {
            return this._http.get(this.url + "/partner/v1/fetch-employee-details", {
              params: data
            });
          }
        }, {
          key: "viewFileBeforeSaving",
          value: function viewFileBeforeSaving(data) {
            return this._http.post(this.url + "/partner/v1/view-unsaved-employee-details-file", data);
          }
        }, {
          key: "uploadUserEmployeePreviewedFile",
          value: function uploadUserEmployeePreviewedFile(data) {
            return this._http.post(this.url + "/partner/v1/upload-employee-details", data);
          }
        }, {
          key: "getDetailForDashboardAPI",
          value: function getDetailForDashboardAPI(data) {
            return this._http.get(this.url + "/central-api/v1/call-api", {
              params: data
            });
          }
        }, {
          key: "getCorporateDashboardList",
          value: function getCorporateDashboardList(data) {
            return this._http.get(this.url + "/partner/v1/fetch-dashboard-corporate", {
              params: data
            }); // http://localhost:8000/partner/v1/fetch-dashboard-corporate?filter_type=This
          }
        }, {
          key: "getDetailForDashboardMandate",
          value: function getDetailForDashboardMandate(data) {
            return this._http.get(this.url + "/platform_central/v1/admin-dashboard/get-mandate-stats", {
              params: data
            });
          }
        }, {
          key: "getDetailForDashboardAPIExistingAndAcquisition",
          value: function getDetailForDashboardAPIExistingAndAcquisition(action, data) {
            return this._http.get(this.url + "/loan-services/v1/dashboard/get-".concat(action), {
              params: data
            });
          }
        }, {
          key: "fetchBranchOfChoosenCorporate",
          value: function fetchBranchOfChoosenCorporate(id) {
            return this._http.get(this.url + "/partner/v1/get-all-branches/".concat(id));
          }
        }, {
          key: "verifyUploadedKycDocumentForMasterAndPartner",
          value: function verifyUploadedKycDocumentForMasterAndPartner(id, data) {
            return this._http.post(this.url + "/partner/v1/verify-kyc-doc/partner/".concat(id), data);
          }
        }, {
          key: "verifyUploadedKycDocumentForMaster",
          value: function verifyUploadedKycDocumentForMaster(id, data) {
            return this._http.post(this.url + "/partner/v1/verify-kyc-doc/master/".concat(id), data);
          }
        }, {
          key: "verifyUploadedKycDocumentForNBFC",
          value: function verifyUploadedKycDocumentForNBFC(id, data) {
            return this._http.post(this.url + "/nbfc/v1/verify-doc/".concat(id), data);
          }
        }, {
          key: "downloadEmployeeUserDetail",
          value: function downloadEmployeeUserDetail(id) {
            return this._http.get(this.url + "/partner/v1/download-employee-details/".concat(id), {
              responseType: 'blob'
            });
          }
        }, {
          key: "getDormatSupportedStageList",
          value: function getDormatSupportedStageList(data) {
            return this._http.get(this.url + "/platform_central/v1/get-dormant-supported_stage-data", {
              params: data
            });
          }
        }, {
          key: "updataeDormantStage",
          value: function updataeDormantStage(data) {
            return this._http.post(this.url + "/platform_central/v1/update-stage-dormant-days", data);
          } // /platform_central/v1/update-stage-dormant-days
          // /platform_central/v1/get-dormant-supported_stage-data

        }, {
          key: "viewSavedFileContent",
          value: function viewSavedFileContent(id, data) {
            return this._http.get(this.url + "/partner/v1/view-saved-employee-details-file/".concat(id), {
              params: data
            });
          }
        }, {
          key: "downloadReport",
          value: function downloadReport(data, url) {
            return this._http.get(this.url + "/nbfc/v1/".concat(url), {
              params: data,
              responseType: 'blob'
            });
          }
        }, {
          key: "restrictType",
          value: function restrictType(event) {
            if (event.which == 107 || event.which == 109 || event.which == 69 || event.which == 187 || event.which == 189) {
              return false;
            }
          }
        }, {
          key: "updateLeftEmployeeStatus",
          value: function updateLeftEmployeeStatus(id, data) {
            return this._http.put(this.url + "/partner/v1/corporate/deactivate-employee/".concat(id), data);
          }
        }, {
          key: "toggleApplicationTODormantBasedOnTimeSpan",
          value: function toggleApplicationTODormantBasedOnTimeSpan(id, data) {
            return this._http.put(this.url + "/platform_central/v1/toggle-application-dormant/".concat(id), data);
          } // 

        }, {
          key: "getInvpoiceOfCorrespondingCorporate",
          value: function getInvpoiceOfCorrespondingCorporate(id, data) {
            return this._http.get(this.url + "/partner/v1/export-invoice-pdf/".concat(id), {
              responseType: 'blob',
              params: data
            });
          }
        }, {
          key: "getAllExployees",
          value: function getAllExployees() {
            return this._http.get(this.url + "/partner/v1/corporate/get-all-employees");
          }
        }, {
          key: "getListOfOTPSent",
          value: function getListOfOTPSent(data) {
            return this._http.get(this.url + "/platform_central/v1/fetch-otp-send-customers", {
              params: data
            });
          } // platform_central/v1/fetch-otp-send-customers
          // Get Application stage count

        }, {
          key: "getBorrowersStageCount",
          value: function getBorrowersStageCount(data) {
            return this._http.get(this.url + "/loan-application/v1/get-lms-staging-list", {
              params: data
            });
          }
        }, {
          key: "fetchVersionList",
          value: function fetchVersionList(data) {
            return this._http.get(this.url + "/loan-application/v1/get-app-version-list", {
              params: data
            });
          }
        }, {
          key: "fetchDeductionList",
          value: function fetchDeductionList(data) {
            return this._http.get(this.url + "/hrms-api/quesscorp-deduction", {
              params: data
            });
          }
        }, {
          key: "exportDeductionList",
          value: function exportDeductionList(data) {
            return this._http.get(this.url + "/hrms-api/quesscorp-deduction", {
              responseType: 'blob',
              params: data
            });
          } // public fetchLoanApplicationListExportGet(data): Observable<any> {
          //       // const headers = new HttpHeaders().set('Authorization', 'Token e910e4048d4b1bde8df20a0d6e9d0250a4d39cc9');
          //       return this._http.get<Blob>((this.url + `/central-api/v1/call-api`), { params: data, responseType: 'blob' as 'json'});
          // }

        }, {
          key: "deductionApproval",
          value: function deductionApproval(id) {
            return this._http.post(this.url + "/hrms-api/quesscorp-deduction/" + id, id);
          }
        }, {
          key: "deductionApprovalAmount",
          value: function deductionApprovalAmount(id) {
            return this._http.post(this.url + "/hrms-api/quesscorp-approve-deduction/" + id, id);
          }
        }, {
          key: "deductionRejectAmount",
          value: function deductionRejectAmount(id) {
            return this._http.post(this.url + "/hrms-api/quesscorp-reject-deduction/" + id, id);
          }
        }, {
          key: "fetchReferralList",
          value: function fetchReferralList(data) {
            return this._http.get(this.url + "/partner/v1/get-referrals-list", {
              params: data
            });
          }
        }, {
          key: "fetchCashbackList",
          value: function fetchCashbackList(data) {
            return this._http.get(this.url + "/partner/v1/get-corporate-cashback-program/", {
              params: data
            });
          }
        }, {
          key: "toggleReferralStatus",
          value: function toggleReferralStatus(id) {
            return this._http.post(this.url + "/partner/v1/change-referral-status/" + id, id);
          }
        }, {
          key: "toggleCashbackStatus",
          value: function toggleCashbackStatus(id) {
            return this._http.post(this.url + "/partner/v1/change-corporate-cashback-status/" + id, id);
          }
        }, {
          key: "createReferral",
          value: function createReferral(data) {
            return this._http.post(this.url + "/partner/v1/create-referral-program", data);
          }
        }, {
          key: "createCashback",
          value: function createCashback(data) {
            return this._http.post(this.url + "/partner/v1/create-corporate-cashback-program/", data);
          }
        }, {
          key: "editCashback",
          value: function editCashback(data) {
            return this._http.put(this.url + "/partner/v1/edit-corporate-cashback-program", data);
          }
        }, {
          key: "editReferral",
          value: function editReferral(data) {
            return this._http.put(this.url + "/partner/v1/edit-referral-program", data);
          }
        }, {
          key: "getBlockReason",
          value: function getBlockReason(id) {
            return this._http.get(this.url + "/loan-application/v1/get-borrowers-block-reasons/" + id);
          }
        }, {
          key: "showAttendance",
          value: function showAttendance(id) {
            return this._http.get(this.url + "/partner/v1/show-attendance/" + id, {
              responseType: 'blob'
            });
          }
        }, {
          key: "pullprofile",
          value: function pullprofile(id) {
            return this._http.get(this.url + "/loan-application/v1/pull-quess-profile-data/" + id);
          }
        }, {
          key: "pullAttendance",
          value: function pullAttendance(data) {
            return this._http.post(this.url + "/partner/v1/pull-attendance", data);
          }
        }, {
          key: "getCategoryList",
          value: function getCategoryList(data) {
            return this._http.get(this.url + "/bbps/v1/category", {
              params: data
            });
          }
        }, {
          key: "getCategoryById",
          value: function getCategoryById(id) {
            return this._http.get(this.url + "/bbps/v1/category/" + id);
          }
        }, {
          key: "getBillersList",
          value: function getBillersList(data) {
            return this._http.get(this.url + "/bbps/v1/billers/", {
              params: data
            });
          }
        }, {
          key: "toogleStatusBillers",
          value: function toogleStatusBillers(id) {
            return this._http.put(this.url + "/bbps/v1/billers/status/" + id, id);
          }
        }, {
          key: "toogleStatusCategory",
          value: function toogleStatusCategory(id) {
            return this._http.put(this.url + "/bbps/v1/category/status/" + id, id);
          }
        }, {
          key: "fetchDownloads",
          value: function fetchDownloads(data) {
            return this._http.get(this.url + "/platform_central/v1/fetch-downloads", {
              params: data
            });
          }
        }, {
          key: "exportApiStats",
          value: function exportApiStats(data) {
            return this._http.get(this.url + "/platform_central/v1/export-api-stats", {
              params: data,
              responseType: 'blob'
            });
          }
        }, {
          key: "dpdSettlement",
          value: function dpdSettlement(data) {
            return this._http.post(this.url + "/nbfc/v1/change-borrower-stages", data);
          }
        }, {
          key: "moveToDocumentPending",
          value: function moveToDocumentPending(data) {
            return this._http.post(this.url + "/loan-application/v1/move-to-document-pending", data);
          }
        }, {
          key: "getLmhConfig",
          value: function getLmhConfig(product_id) {
            return this._http.get(this.url + "/product/v1/get-product-lmh-configurations/" + product_id);
          }
        }, {
          key: "getLmhRule",
          value: function getLmhRule(product_id) {
            return this._http.get(this.url + "/product/v1/fetch-product-lms-rules/" + product_id);
          }
        }, {
          key: "createConfiguration",
          value: function createConfiguration(data) {
            return this._http.post(this.url + "/product/v1/save-product-lmh-configurations", data);
          }
        }, {
          key: "createConfigurationRule",
          value: function createConfigurationRule(data) {
            return this._http.post(this.url + "/product/v1/save-product-lmh-rules", data);
          }
        }, {
          key: "getPersonalDetails",
          value: function getPersonalDetails(id) {
            return this._http.get(this.url + "/loan-application/v1/fetch-loan-application-personal-details/" + id);
          }
        }, {
          key: "getBankDetails",
          value: function getBankDetails(id) {
            return this._http.get(this.url + "/loan-application/v1/fetch-loan-application-offer-details/" + id);
          }
        }, {
          key: "getKycDetails",
          value: function getKycDetails(id) {
            return this._http.get(this.url + "/loan-application/v1/fetch-loan-application-kyc-details/" + id);
          }
        }, {
          key: "fetchGlobalProductView",
          value: function fetchGlobalProductView(id) {
            return this._http.get(this.url + "/product/v1/global-product-view/" + id);
          }
        }, {
          key: "fetchProductEMI",
          value: function fetchProductEMI(id) {
            return this._http.get(this.url + "/product/v1/get-product-emi/" + id);
          }
        }, {
          key: "fetchMasterData",
          value: function fetchMasterData(master) {
            return this._http.get(this.url + "/master/fetch-master-data/" + master);
          }
        }, {
          key: "createEmiConfiguration",
          value: function createEmiConfiguration(data, id) {
            return this._http.post(this.url + "/product/v1/add-edit-product-emi/" + id, data);
          }
        }, {
          key: "fetchLoanApplicationEMIData",
          value: function fetchLoanApplicationEMIData(data) {
            return this._http.get(this.url + "/nbfc/v1/fetch-user-loan-application-details", {
              params: data
            });
          }
        }, {
          key: "createOfflineEMI",
          value: function createOfflineEMI(data) {
            return this._http.post(this.url + "/loan-application/v1/create-entries-offline-emi", data);
          }
        }, {
          key: "changeProductTypeAPICall",
          value: function changeProductTypeAPICall(data) {
            return this._http.post(this.url + "/loan-application/v1/change-application-product", data);
          }
        }, {
          key: "getLMSCliList",
          value: function getLMSCliList(data) {
            return this._http.get(this.url + "/platform_central/v1/admin-cli-section", {
              params: data
            });
          }
        }, {
          key: "getMasterDepartment",
          value: function getMasterDepartment() {
            return this._http.get(this.url + "/master/fetch-master-data/Departement");
          }
        }, {
          key: "getMasterDesignation",
          value: function getMasterDesignation() {
            return this._http.get(this.url + "/master/fetch-master-data/Desigination");
          }
        }, {
          key: "createRefund",
          value: function createRefund(data) {
            return this._http.post(this.url + "/central-api/v1/call-api", data);
          }
        }, {
          key: "updateTransactionDataStatus",
          value: function updateTransactionDataStatus(data) {
            return this._http.post(this.url + "/platform_central/v1/bulk-transaction-action", data);
          }
        }, {
          key: "getTransactionActionList",
          value: function getTransactionActionList(data) {
            return this._http.get(this.url + "/platform_central/v1/bulk-transaction-action-list", {
              params: data
            });
          }
        }, {
          key: "getDetailTransactionAction",
          value: function getDetailTransactionAction(data, id) {
            return this._http.get(this.url + " /platform_central/v1/show-bulk-transaction-action-content/" + id, {
              params: data
            });
          }
        }, {
          key: "updateNachStatus",
          value: function updateNachStatus(data) {
            return this._http.post(this.url + "/platform_central/v1/verify-bulk-enach-file", data);
          }
        }, {
          key: "changeSubStage",
          value: function changeSubStage(data) {
            return this._http.post(this.url + "/loan-application/v1/change-application-substage", data);
          }
        }, {
          key: "mapDSAtoProduct",
          value: function mapDSAtoProduct(data) {
            return this._http.post(this.url + "/product/v1/assign-product-to-dsa", data);
          }
        }, {
          key: "uploadCommissionDsa",
          value: function uploadCommissionDsa(data) {
            return this._http.post(this.url + "/partner/v1/commission/upload-file", data);
          }
        }, {
          key: "fetchBorrowersPaymentLinks",
          value: function fetchBorrowersPaymentLinks(data, id) {
            return this._http.get(this.url + "/loan-application/v1/fetch-payment-links/" + id, {
              params: data
            });
          }
        }, {
          key: "getProductTenureFromApplication",
          value: function getProductTenureFromApplication(id) {
            return this._http.get(this.url + "/loan-application/v1/fetch-product-tenures/" + id);
          }
        }, {
          key: "updateEmiManualOffer",
          value: function updateEmiManualOffer(data) {
            return this._http.post(this.url + "/loan-application/v1/emi-manual-offer", data);
          }
        }, {
          key: "fetchSuperAppUserData",
          value: function fetchSuperAppUserData(data) {
            return this._http.get(this.url + "/loan-application/v1/fetch-super-app-users-list", {
              params: data
            });
          }
        }, {
          key: "fetchSuperAppUserDetails",
          value: function fetchSuperAppUserDetails(id) {
            return this._http.get(this.url + "/loan-application/v1/fetch-super-app-user-details/" + id);
          }
        }, {
          key: "changeStep",
          value: function changeStep(data) {
            return this._http.post(this.url + "/loan-application/v1/change-super-app-user-step", data);
          }
        }, {
          key: "getOutstandingBifurcation",
          value: function getOutstandingBifurcation(data) {
            return this._http.get(this.url + "/loan-application/v1/fetch-product-tenures/", {
              params: data
            });
          }
        }, {
          key: "uploadPhysicalVerificationDocument",
          value: function uploadPhysicalVerificationDocument(data) {
            console.log(data, 'In Http');
            return this._http.post(this.url + "/partner/v1/commission/upload-file", data);
          }
        }, {
          key: "byPasPhysicalVerification",
          value: function byPasPhysicalVerification(data) {
            return this._http.post(this.url + "/loan-application/v1/bypass-physical-verification", data);
          }
        }, {
          key: "verifyPhysicalVerification",
          value: function verifyPhysicalVerification(data) {
            return this._http.post(this.url + "/loan-application/v1/verify-physical-verification", data);
          }
        }]);

        return HttpService;
      }();

      HttpService.ɵfac = function HttpService_Factory(t) {
        return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]));
      };

      HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: HttpService,
        factory: HttpService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _template_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./template/change-password/change-password.component */
      "Kz7f");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/tooltip */
      "nJia");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/theme-constant.service */
      "PQ0Y");
      /* harmony import */


      var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pipes/search.pipe */
      "WfBE");
      /* harmony import */


      var _template_double_confirmation_popup_double_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./template/double-confirmation-popup/double-confirmation-popup.component */
      "thbs");
      /* harmony import */


      var _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../ng-zorro-antd.module */
      "PMIT");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var _template_audit_history_audit_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./template/audit-history/audit-history.component */
      "8NRN");
      /* harmony import */


      var _applications_deatils_deatils_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../applications/deatils/deatils.component */
      "0CWl");
      /* harmony import */


      var _applications_bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../applications/bank-details/bank-details.component */
      "c+2v");
      /* harmony import */


      var _applications_kyc_details_kyc_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../applications/kyc-details/kyc-details.component */
      "E3OB");
      /* harmony import */


      var _applications_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../applications/personal-details/personal-details.component */
      "J1TD");
      /* harmony import */


      var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-json-viewer */
      "xWP1");
      /* harmony import */


      var _applications_common_document_actions_common_document_actions_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../applications/common-document-actions/common-document-actions.component */
      "D2SG");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        providers: [_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_9__["ThemeConstantService"]],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__["NzToolTipModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"], _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_12__["DemoNgZorroAntdModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__["NzFormModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__["NzInputModule"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_20__["NgxJsonViewerModule"] // NgxPermissionsModule
        ], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientJsonpModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_20__["NgxJsonViewerModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchPipe"], _template_double_confirmation_popup_double_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_11__["DoubleConfirmationPopupComponent"], _template_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_0__["ChangePasswordComponent"], _template_audit_history_audit_history_component__WEBPACK_IMPORTED_MODULE_15__["AuditHistoryComponent"], _applications_deatils_deatils_component__WEBPACK_IMPORTED_MODULE_16__["DeatilsComponent"], _applications_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_19__["PersonalDetailsComponent"], _applications_bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_17__["BankDetailsComponent"], _applications_kyc_details_kyc_details_component__WEBPACK_IMPORTED_MODULE_18__["KycDetailsComponent"], _applications_common_document_actions_common_document_actions_component__WEBPACK_IMPORTED_MODULE_21__["CommonDocumentActionsComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__["NzToolTipModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"], _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_12__["DemoNgZorroAntdModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__["NzFormModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__["NzInputModule"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_20__["NgxJsonViewerModule"] // NgxPermissionsModule
          ],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientJsonpModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"], _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchPipe"], _template_double_confirmation_popup_double_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_11__["DoubleConfirmationPopupComponent"], _template_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_0__["ChangePasswordComponent"], _template_audit_history_audit_history_component__WEBPACK_IMPORTED_MODULE_15__["AuditHistoryComponent"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_20__["NgxJsonViewerModule"], _applications_deatils_deatils_component__WEBPACK_IMPORTED_MODULE_16__["DeatilsComponent"], _applications_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_19__["PersonalDetailsComponent"], _applications_bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_17__["BankDetailsComponent"], _applications_kyc_details_kyc_details_component__WEBPACK_IMPORTED_MODULE_18__["KycDetailsComponent"], _applications_common_document_actions_common_document_actions_component__WEBPACK_IMPORTED_MODULE_21__["CommonDocumentActionsComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientJsonpModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"], _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchPipe"], _template_double_confirmation_popup_double_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_11__["DoubleConfirmationPopupComponent"], _template_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_0__["ChangePasswordComponent"], _template_audit_history_audit_history_component__WEBPACK_IMPORTED_MODULE_15__["AuditHistoryComponent"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_20__["NgxJsonViewerModule"], _applications_deatils_deatils_component__WEBPACK_IMPORTED_MODULE_16__["DeatilsComponent"], _applications_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_19__["PersonalDetailsComponent"], _applications_bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_17__["BankDetailsComponent"], _applications_kyc_details_kyc_details_component__WEBPACK_IMPORTED_MODULE_18__["KycDetailsComponent"], _applications_common_document_actions_common_document_actions_component__WEBPACK_IMPORTED_MODULE_21__["CommonDocumentActionsComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__["NzToolTipModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"], _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_12__["DemoNgZorroAntdModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_13__["NzFormModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_14__["NzInputModule"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_20__["NgxJsonViewerModule"] // NgxPermissionsModule
            ],
            declarations: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchPipe"], _template_double_confirmation_popup_double_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_11__["DoubleConfirmationPopupComponent"], _template_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_0__["ChangePasswordComponent"], _template_audit_history_audit_history_component__WEBPACK_IMPORTED_MODULE_15__["AuditHistoryComponent"], _applications_deatils_deatils_component__WEBPACK_IMPORTED_MODULE_16__["DeatilsComponent"], _applications_personal_details_personal_details_component__WEBPACK_IMPORTED_MODULE_19__["PersonalDetailsComponent"], _applications_bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_17__["BankDetailsComponent"], _applications_kyc_details_kyc_details_component__WEBPACK_IMPORTED_MODULE_18__["KycDetailsComponent"], _applications_common_document_actions_common_document_actions_component__WEBPACK_IMPORTED_MODULE_21__["CommonDocumentActionsComponent"]],
            providers: [_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_9__["ThemeConstantService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "PMIT":
    /*!*****************************************!*\
      !*** ./src/app/ng-zorro-antd.module.ts ***!
      \*****************************************/

    /*! exports provided: DemoNgZorroAntdModule */

    /***/
    function PMIT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DemoNgZorroAntdModule", function () {
        return DemoNgZorroAntdModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng-zorro-antd/affix */
      "4hBO");
      /* harmony import */


      var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/alert */
      "Wfee");
      /* harmony import */


      var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/anchor */
      "7vlg");
      /* harmony import */


      var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/auto-complete */
      "Jioy");
      /* harmony import */


      var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/avatar */
      "ZE2D");
      /* harmony import */


      var ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/back-top */
      "KAwd");
      /* harmony import */


      var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/badge */
      "SKKP");
      /* harmony import */


      var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/breadcrumb */
      "yNE/");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/calendar */
      "Py9c");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/carousel */
      "Etcd");
      /* harmony import */


      var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/cascader */
      "q0Us");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "TaO5");
      /* harmony import */


      var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/collapse */
      "IvDN");
      /* harmony import */


      var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/comment */
      "ZVAZ");
      /* harmony import */


      var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/core/no-animation */
      "YF2q");
      /* harmony import */


      var ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/core/trans-button */
      "exsu");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-zorro-antd/date-picker */
      "0lU3");
      /* harmony import */


      var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ng-zorro-antd/descriptions */
      "xB20");
      /* harmony import */


      var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ng-zorro-antd/divider */
      "5vDB");
      /* harmony import */


      var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ng-zorro-antd/drawer */
      "F6ss");
      /* harmony import */


      var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ng-zorro-antd/dropdown */
      "Nqz0");
      /* harmony import */


      var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ng-zorro-antd/empty */
      "QlLE");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ng-zorro-antd/i18n */
      "Rm4T");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ng-zorro-antd/image */
      "6ekq");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ng-zorro-antd/input-number */
      "z4wI");
      /* harmony import */


      var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ng-zorro-antd/layout */
      "yW9e");
      /* harmony import */


      var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ng-zorro-antd/list */
      "Ff2k");
      /* harmony import */


      var ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ng-zorro-antd/mention */
      "WCIo");
      /* harmony import */


      var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ng-zorro-antd/menu */
      "Q8cG");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ng-zorro-antd/notification */
      "bNXi");
      /* harmony import */


      var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ng-zorro-antd/page-header */
      "jPNr");
      /* harmony import */


      var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ng-zorro-antd/pagination */
      "3/1E");
      /* harmony import */


      var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ng-zorro-antd/popconfirm */
      "KupA");
      /* harmony import */


      var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ng-zorro-antd/popover */
      "+oEP");
      /* harmony import */


      var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ng-zorro-antd/progress */
      "W9fG");
      /* harmony import */


      var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ng-zorro-antd/radio */
      "bE2y");
      /* harmony import */


      var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ng-zorro-antd/rate */
      "L1u3");
      /* harmony import */


      var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ng-zorro-antd/result */
      "Mean");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ng-zorro-antd/skeleton */
      "OtHt");
      /* harmony import */


      var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ng-zorro-antd/slider */
      "tAs6");
      /* harmony import */


      var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ng-zorro-antd/spin */
      "qAZ0");
      /* harmony import */


      var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ng-zorro-antd/statistic */
      "A07A");
      /* harmony import */


      var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ng-zorro-antd/steps */
      "OEtX");
      /* harmony import */


      var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ng-zorro-antd/switch */
      "EGpF");
      /* harmony import */


      var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ng-zorro-antd/table */
      "rMZv");
      /* harmony import */


      var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! ng-zorro-antd/tabs */
      "oyxB");
      /* harmony import */


      var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ng-zorro-antd/tag */
      "ZyQt");
      /* harmony import */


      var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! ng-zorro-antd/time-picker */
      "ix5O");
      /* harmony import */


      var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! ng-zorro-antd/timeline */
      "ncdi");
      /* harmony import */


      var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! ng-zorro-antd/tooltip */
      "nJia");
      /* harmony import */


      var ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! ng-zorro-antd/transfer */
      "GuFl");
      /* harmony import */


      var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! ng-zorro-antd/tree */
      "nxWG");
      /* harmony import */


      var ng_zorro_antd_tree_view__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! ng-zorro-antd/tree-view */
      "wFtU");
      /* harmony import */


      var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! ng-zorro-antd/tree-select */
      "VXpv");
      /* harmony import */


      var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! ng-zorro-antd/typography */
      "eHCX");
      /* harmony import */


      var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! ng-zorro-antd/upload */
      "D9mS");
      /* harmony import */


      var ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! ng-zorro-antd/resizable */
      "1zMu");
      /* harmony import */


      var ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! ng-zorro-antd/pipes */
      "HSCc");

      var DemoNgZorroAntdModule = function DemoNgZorroAntdModule() {
        _classCallCheck(this, DemoNgZorroAntdModule);
      };

      DemoNgZorroAntdModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DemoNgZorroAntdModule
      });
      DemoNgZorroAntdModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DemoNgZorroAntdModule_Factory(t) {
          return new (t || DemoNgZorroAntdModule)();
        },
        imports: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_1__["NzAffixModule"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__["NzAlertModule"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorModule"], ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_4__["NzAutocompleteModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__["NzAvatarModule"], ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_6__["NzBackTopModule"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_7__["NzBadgeModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonModule"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_8__["NzBreadCrumbModule"], ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_10__["NzCalendarModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__["NzCardModule"], ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_12__["NzCarouselModule"], ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_13__["NzCascaderModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_14__["NzCheckboxModule"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_15__["NzCollapseModule"], ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_16__["NzCommentModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__["NzDatePickerModule"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_21__["NzDescriptionsModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_22__["NzDividerModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_23__["NzDrawerModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_24__["NzDropDownModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_25__["NzEmptyModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__["NzFormModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__["NzGridModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_28__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_29__["NzIconModule"], ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_30__["NzImageModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_31__["NzInputModule"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_32__["NzInputNumberModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_33__["NzLayoutModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_34__["NzListModule"], ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_35__["NzMentionModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_36__["NzMenuModule"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_37__["NzMessageModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_38__["NzModalModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_17__["NzNoAnimationModule"], ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_39__["NzNotificationModule"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_40__["NzPageHeaderModule"], ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_41__["NzPaginationModule"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_42__["NzPopconfirmModule"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_43__["NzPopoverModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_44__["NzProgressModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_45__["NzRadioModule"], ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_46__["NzRateModule"], ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_47__["NzResultModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_48__["NzSelectModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_49__["NzSkeletonModule"], ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_50__["NzSliderModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_51__["NzSpinModule"], ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_52__["NzStatisticModule"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_53__["NzStepsModule"], ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_54__["NzSwitchModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_55__["NzTableModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_56__["NzTabsModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_57__["NzTagModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_58__["NzTimePickerModule"], ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_59__["NzTimelineModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_60__["NzToolTipModule"], ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_18__["NzTransButtonModule"], ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_61__["NzTransferModule"], ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_62__["NzTreeModule"], ng_zorro_antd_tree_view__WEBPACK_IMPORTED_MODULE_63__["NzTreeViewModule"], ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_64__["NzTreeSelectModule"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_65__["NzTypographyModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_66__["NzUploadModule"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_19__["NzWaveModule"], ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_67__["NzResizableModule"], ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_68__["NzPipesModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoNgZorroAntdModule, {
          exports: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_1__["NzAffixModule"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__["NzAlertModule"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorModule"], ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_4__["NzAutocompleteModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__["NzAvatarModule"], ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_6__["NzBackTopModule"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_7__["NzBadgeModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonModule"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_8__["NzBreadCrumbModule"], ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_10__["NzCalendarModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__["NzCardModule"], ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_12__["NzCarouselModule"], ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_13__["NzCascaderModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_14__["NzCheckboxModule"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_15__["NzCollapseModule"], ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_16__["NzCommentModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__["NzDatePickerModule"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_21__["NzDescriptionsModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_22__["NzDividerModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_23__["NzDrawerModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_24__["NzDropDownModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_25__["NzEmptyModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__["NzFormModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__["NzGridModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_28__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_29__["NzIconModule"], ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_30__["NzImageModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_31__["NzInputModule"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_32__["NzInputNumberModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_33__["NzLayoutModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_34__["NzListModule"], ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_35__["NzMentionModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_36__["NzMenuModule"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_37__["NzMessageModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_38__["NzModalModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_17__["NzNoAnimationModule"], ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_39__["NzNotificationModule"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_40__["NzPageHeaderModule"], ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_41__["NzPaginationModule"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_42__["NzPopconfirmModule"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_43__["NzPopoverModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_44__["NzProgressModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_45__["NzRadioModule"], ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_46__["NzRateModule"], ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_47__["NzResultModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_48__["NzSelectModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_49__["NzSkeletonModule"], ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_50__["NzSliderModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_51__["NzSpinModule"], ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_52__["NzStatisticModule"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_53__["NzStepsModule"], ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_54__["NzSwitchModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_55__["NzTableModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_56__["NzTabsModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_57__["NzTagModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_58__["NzTimePickerModule"], ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_59__["NzTimelineModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_60__["NzToolTipModule"], ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_18__["NzTransButtonModule"], ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_61__["NzTransferModule"], ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_62__["NzTreeModule"], ng_zorro_antd_tree_view__WEBPACK_IMPORTED_MODULE_63__["NzTreeViewModule"], ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_64__["NzTreeSelectModule"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_65__["NzTypographyModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_66__["NzUploadModule"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_19__["NzWaveModule"], ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_67__["NzResizableModule"], ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_68__["NzPipesModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoNgZorroAntdModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_1__["NzAffixModule"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_2__["NzAlertModule"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorModule"], ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_4__["NzAutocompleteModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__["NzAvatarModule"], ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_6__["NzBackTopModule"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_7__["NzBadgeModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__["NzButtonModule"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_8__["NzBreadCrumbModule"], ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_10__["NzCalendarModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__["NzCardModule"], ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_12__["NzCarouselModule"], ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_13__["NzCascaderModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_14__["NzCheckboxModule"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_15__["NzCollapseModule"], ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_16__["NzCommentModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_20__["NzDatePickerModule"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_21__["NzDescriptionsModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_22__["NzDividerModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_23__["NzDrawerModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_24__["NzDropDownModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_25__["NzEmptyModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_26__["NzFormModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__["NzGridModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_28__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_29__["NzIconModule"], ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_30__["NzImageModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_31__["NzInputModule"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_32__["NzInputNumberModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_33__["NzLayoutModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_34__["NzListModule"], ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_35__["NzMentionModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_36__["NzMenuModule"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_37__["NzMessageModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_38__["NzModalModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_17__["NzNoAnimationModule"], ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_39__["NzNotificationModule"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_40__["NzPageHeaderModule"], ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_41__["NzPaginationModule"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_42__["NzPopconfirmModule"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_43__["NzPopoverModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_44__["NzProgressModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_45__["NzRadioModule"], ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_46__["NzRateModule"], ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_47__["NzResultModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_48__["NzSelectModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_49__["NzSkeletonModule"], ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_50__["NzSliderModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_51__["NzSpinModule"], ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_52__["NzStatisticModule"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_53__["NzStepsModule"], ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_54__["NzSwitchModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_55__["NzTableModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_56__["NzTabsModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_57__["NzTagModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_58__["NzTimePickerModule"], ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_59__["NzTimelineModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_60__["NzToolTipModule"], ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_18__["NzTransButtonModule"], ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_61__["NzTransferModule"], ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_62__["NzTreeModule"], ng_zorro_antd_tree_view__WEBPACK_IMPORTED_MODULE_63__["NzTreeViewModule"], ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_64__["NzTreeSelectModule"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_65__["NzTypographyModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_66__["NzUploadModule"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_19__["NzWaveModule"], ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_67__["NzResizableModule"], ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_68__["NzPipesModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "PQ0Y":
    /*!***********************************************************!*\
      !*** ./src/app/shared/services/theme-constant.service.ts ***!
      \***********************************************************/

    /*! exports provided: ThemeConstantService */

    /***/
    function PQ0Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemeConstantService", function () {
        return ThemeConstantService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ThemeConstantService = /*#__PURE__*/function () {
        function ThemeConstantService() {
          _classCallCheck(this, ThemeConstantService);

          // Theme Config
          this.isMenuFolded = false;
          this.isSideNavDark = false;
          this.headerColor = 'default';
          this.colorConfig = {
            colors: {
              magenta: '#eb2f96',
              magentaLight: 'rgba(235, 47, 150, 0.05)',
              red: '#de4436',
              redLight: 'rgba(222, 68, 54, 0.05)',
              volcano: '#fa541c',
              volcanoLight: 'rgba(250, 84, 28, 0.05)',
              pink: '#F2637B',
              orange: '#fa8c16',
              orangeLight: 'rgba(250, 140, 22, 0.1)',
              gold: '#ffc107',
              goldLight: 'rgba(255, 193, 7, 0.1)',
              lime: '#a0d911',
              limeLight: 'rgba(160, 217, 17, 0.1)',
              green: '#52c41a',
              greenLight: 'rgba(82, 196, 26, 0.1)',
              cyan: "#05c9a7",
              cyanLight: 'rgba(0, 201, 167, 0.1)',
              blue: '#3f87f5',
              blueLight: 'rgba(63, 135, 245, 0.15)',
              geekBlue: '#2f54eb',
              geekBlueLight: 'rgba(47, 84, 235, 0.1)',
              purple: '#886cff',
              purpleLight: 'rgba(136, 108, 255, 0.1)',
              gray: '#53535f',
              grayLight: '#77838f',
              grayLighter: '#ededed',
              grayLightest: '#f1f2f3',
              border: '#edf2f9',
              white: '#ffffff',
              dark: '#2a2a2a',
              transparent: 'rgba(255, 255, 255, 0)'
            }
          };
          this.isMenuFoldedActived = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.isMenuFolded);
          this.isMenuFoldedChanges = this.isMenuFoldedActived.asObservable();
          this.isSideNavDarkActived = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.isSideNavDark);
          this.isSideNavDarkChanges = this.isSideNavDarkActived.asObservable();
          this.isExpandActived = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          this.isExpandChanges = this.isExpandActived.asObservable();
          this.currentHeaderColor = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.headerColor);
          this.selectedHeaderColor = this.currentHeaderColor.asObservable();
        }

        _createClass(ThemeConstantService, [{
          key: "get",
          value: function get() {
            return this.colorConfig;
          }
        }, {
          key: "toggleFold",
          value: function toggleFold(isFolded) {
            this.isMenuFoldedActived.next(isFolded);
          }
        }, {
          key: "toogleSideNavDark",
          value: function toogleSideNavDark(isDark) {
            this.isSideNavDarkActived.next(isDark);
          }
        }, {
          key: "toggleExpand",
          value: function toggleExpand(isExpand) {
            this.isExpandActived.next(isExpand);
          }
        }, {
          key: "changeHeaderColor",
          value: function changeHeaderColor(color) {
            this.currentHeaderColor.next(color);
          }
        }]);

        return ThemeConstantService;
      }();

      ThemeConstantService.ɵfac = function ThemeConstantService_Factory(t) {
        return new (t || ThemeConstantService)();
      };

      ThemeConstantService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ThemeConstantService,
        factory: ThemeConstantService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeConstantService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
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
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/http.service */
      "N+K7");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent(HttpService, permissionsService) {
        var _this23 = this;

        _classCallCheck(this, AppComponent);

        this.HttpService = HttpService;
        this.permissionsService = permissionsService;

        if (sessionStorage.getItem('fatakpay_user_data')) {
          var check_token_exists = JSON.parse(sessionStorage.getItem('fatakpay_user_data')).permissions;

          if (check_token_exists) {
            check_token_exists.push('');
            this.permissionsService.loadPermissions(check_token_exists);
          }
        }

        this.UserPermissionDataSubscription = this.HttpService.globalUserPermissionsData.subscribe(function (value) {
          value.push('');

          if (JSON.parse(sessionStorage.getItem('fatakpay_user_data')).permissions) {
            _this23.permissionsService.loadPermissions(value);
          }
        });
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html'
          }]
        }], function () {
          return [{
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
          }, {
            type: ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "TDnD":
    /*!*************************************************************!*\
      !*** ./src/app/authentication/error-2/error-2.component.ts ***!
      \*************************************************************/

    /*! exports provided: Error2Component */

    /***/
    function TDnD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Error2Component", function () {
        return Error2Component;
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


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");

      var Error2Component = /*#__PURE__*/function () {
        function Error2Component(router) {
          _classCallCheck(this, Error2Component);

          this.router = router;

          if (!JSON.parse(sessionStorage.getItem('fatakpay_user_data'))) {
            this.router.navigate(["/authentication/login"]);
          }
        }

        _createClass(Error2Component, [{
          key: "onClickRedirectToAssignedRouter",
          value: function onClickRedirectToAssignedRouter() {
            // sessionStorage.removeItem("fatakpay_user_data");
            // this.router.navigate(['/authentication/login']);
            history.back();
          }
        }]);

        return Error2Component;
      }();

      Error2Component.ɵfac = function Error2Component_Factory(t) {
        return new (t || Error2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      Error2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Error2Component,
        selectors: [["ng-component"]],
        decls: 20,
        vars: 0,
        consts: [[1, "container-fluid", "p-v-20", "h-100"], [1, "d-flex", "flex-column", "justify-content-between", "h-100"], [1, "p-h-40"], ["alt", "", "src", "assets/images/logo/logo.png", 1, "img-fluid"], [1, "container"], [1, "row", "align-items-center"], [1, "col-md-8", "m-h-auto"], [1, "text-center", "m-b-50"], [1, "font-weight-semibold", "display-1", "text-primary", "lh-1-2"], ["nz-icon", "", "nzType", "lock", "nzTheme", "outline", 2, "font-size", "60px"], [1, "w-70", "lh-1-8", "m-h-auto", "font-size-17", "m-t-60"], [1, "col-md-12"], [1, "p-v-30", "text-center"], ["nz-button", "", "nzType", "primary", 3, "click"], [1, "d-flex", "p-h-40", "justify-content-between"]],
        template: function Error2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "403");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "You don't have permissions to access this page. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Contact an administrator to get permissions. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Error2Component_Template_a_click_17_listener() {
              return ctx.onClickRedirectToAssignedRouter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Go Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Error2Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: './error-2.component.html'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Ueqm":
    /*!**************************************************************!*\
      !*** ./src/app/layouts/full-layout/full-layout.component.ts ***!
      \**************************************************************/

    /*! exports provided: FullLayoutComponent */

    /***/
    function Ueqm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function () {
        return FullLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var FullLayoutComponent = function FullLayoutComponent() {
        _classCallCheck(this, FullLayoutComponent);
      };

      FullLayoutComponent.ɵfac = function FullLayoutComponent_Factory(t) {
        return new (t || FullLayoutComponent)();
      };

      FullLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FullLayoutComponent,
        selectors: [["app-full-layout"]],
        decls: 1,
        vars: 0,
        template: function FullLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-full-layout',
            templateUrl: './full-layout.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "UlaD":
    /*!************************************************************!*\
      !*** ./src/app/shared/template/search/search.component.ts ***!
      \************************************************************/

    /*! exports provided: SearchComponent */

    /***/
    function UlaD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
        return SearchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/avatar */
      "ZE2D");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../pipes/search.pipe */
      "WfBE");

      function SearchComponent_ng_container_3_h5_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Files");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SearchComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_ng_container_3_h5_1_Template, 2, 0, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-avatar", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;
          var count_r6 = ctx.ngForOf;
          var i_r7 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r7 < 1 && count_r6.length !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzIcon", item_r5.icon)("ngClass", item_r5.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.desc);
        }
      }

      function SearchComponent_ng_container_6_h5_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Members");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SearchComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_ng_container_6_h5_1_Template, 2, 0, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-avatar", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r9 = ctx.$implicit;
          var count_r10 = ctx.ngForOf;
          var i_r11 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r11 < 1 && count_r10.length !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", item_r9.img);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.desc);
        }
      }

      function SearchComponent_ng_container_9_h5_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SearchComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_ng_container_9_h5_1_Template, 2, 0, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-avatar", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r13 = ctx.$implicit;
          var count_r14 = ctx.ngForOf;
          var i_r15 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r15 < 1 && count_r14.length !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSrc", item_r13.img);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.desc);
        }
      }

      function SearchComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 17);
        }
      }

      var SearchComponent = function SearchComponent() {
        _classCallCheck(this, SearchComponent);

        this.files = [{
          title: 'Quater Report.exl',
          desc: 'by Finance',
          icon: 'file-excel',
          color: 'ant-avatar-' + 'cyan'
        }, {
          title: 'Documentaion.docx',
          desc: 'by Developers',
          icon: 'file-word',
          color: 'ant-avatar-' + 'blue'
        }, {
          title: 'Recipe.txt',
          desc: 'by The Chef',
          icon: 'file-text',
          color: 'ant-avatar-' + 'purple'
        }, {
          title: 'Project Requirement.pdf',
          desc: 'by Project Manager',
          icon: 'file-pdf',
          color: 'ant-avatar-' + 'red'
        }];
        this.members = [{
          title: 'Erin Gonzales',
          desc: 'UI/UX Designer',
          img: 'assets/images/avatars/thumb-1.jpg'
        }, {
          title: 'Darryl Day',
          desc: 'Software Engineer',
          img: 'assets/images/avatars/thumb-2.jpg'
        }, {
          title: 'Marshall Nichols ',
          desc: 'Data Analyst',
          img: 'assets/images/avatars/thumb-3.jpg'
        }];
        this.feeds = [{
          title: '5 Best Handwriting Fonts',
          desc: '25 Nov 2018',
          img: 'assets/images/others/img-1.jpg'
        }];
      };

      SearchComponent.ɵfac = function SearchComponent_Factory(t) {
        return new (t || SearchComponent)();
      };

      SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchComponent,
        selectors: [["app-search"]],
        decls: 13,
        vars: 17,
        consts: [[3, "nzPrefix"], ["type", "text", "nz-input", "", "placeholder", "Search", 3, "ngModel", "ngModelChange"], [1, "m-t-30"], [4, "ngFor", "ngForOf"], ["class", "d-flex m-b-30", 4, "ngFor", "ngForOf"], ["prefixTemplate", ""], ["class", "m-b-20", 4, "ngIf"], [1, "d-flex", "m-b-30"], [3, "nzIcon", "ngClass"], [1, "m-l-15"], [1, "text-dark", "m-b-0", "font-weight-semibold"], [1, "m-b-0", "text-muted", "font-size-13"], [1, "m-b-20"], [3, "nzSrc"], [1, "m-b-0", "text-dark", "font-weight-semibold"], ["nz-icon", "", "nzType", "clock-circle", "theme", "outline"], [1, "m-l-10"], ["nz-icon", "", "nzType", "search"]],
        template: function SearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-input-group", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_1_listener($event) {
              return ctx.search = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_ng_container_3_Template, 9, 5, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchComponent_ng_container_6_Template, 9, 4, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchComponent_ng_container_9_Template, 11, 4, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchComponent_ng_template_11_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPrefix", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 5, ctx.files, "title", ctx.search));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 9, ctx.members, "title", ctx.search));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 13, ctx.feeds, "title", ctx.search));
          }
        },
        directives: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputGroupComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputGroupWhitSuffixOrPrefixDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_5__["NzAvatarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"]],
        pipes: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-search',
            templateUrl: './search.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Wdt6":
    /*!******************************************************************!*\
      !*** ./src/app/layouts/common-layout/common-layout.component.ts ***!
      \******************************************************************/

    /*! exports provided: CommonLayoutComponent */

    /***/
    function Wdt6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonLayoutComponent", function () {
        return CommonLayoutComponent;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/services/theme-constant.service */
      "PQ0Y");
      /* harmony import */


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var src_app_shared_globalservices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/globalservices.service */
      "Wum+");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_template_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/template/header/header.component */
      "Isfx");
      /* harmony import */


      var _shared_template_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shared/template/side-nav/side-nav.component */
      "jnn0");
      /* harmony import */


      var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/breadcrumb */
      "yNE/");

      function CommonLayoutComponent_div_4_div_1_h5_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.showBreadCrumb);
        }
      }

      function CommonLayoutComponent_div_4_div_1_nz_breadcrumb_item_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-breadcrumb-item", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var breadcrumb_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", breadcrumb_r7.url)("queryParams", breadcrumb_r7.params);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", breadcrumb_r7.label, " ");
        }
      }

      function CommonLayoutComponent_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommonLayoutComponent_div_4_div_1_h5_2_Template, 2, 1, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-breadcrumb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " / ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CommonLayoutComponent_div_4_div_1_nz_breadcrumb_item_6_Template, 3, 3, "nz-breadcrumb-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r1.breadcrumbs$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, ctx_r1.breadcrumbs$));
        }
      }

      function CommonLayoutComponent_div_4_div_2_h4_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var breadcrumbs_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumbs_r9[breadcrumbs_r9.length - 1].label);
        }
      }

      function CommonLayoutComponent_div_4_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommonLayoutComponent_div_4_div_2_h4_1_Template, 2, 1, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.breadcrumbs$));
        }
      }

      function CommonLayoutComponent_div_4_h4_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var breadcrumbs_r10 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.showBreadCrumb ? "mt-4" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumbs_r10[breadcrumbs_r10.length - 1] == null ? null : breadcrumbs_r10[breadcrumbs_r10.length - 1].label);
        }
      }

      function CommonLayoutComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommonLayoutComponent_div_4_div_1_Template, 8, 6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommonLayoutComponent_div_4_div_2_Template, 3, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CommonLayoutComponent_div_4_h4_3_Template, 2, 2, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx_r0.showBreadCrumb ? "d-flex align-items-center" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showBreadCrumb);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.router.url.includes("dashboard"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r0.breadcrumbs$));
        }
      }

      var _c0 = function _c0(a0, a1, a2) {
        return {
          "is-folded": a0,
          "is-side-nav-dark": a1,
          "is-expand": a2
        };
      };

      var CommonLayoutComponent = /*#__PURE__*/function () {
        function CommonLayoutComponent(router, activatedRoute, themeService, http, message, globaldata, permissionsService) {
          var _this24 = this;

          _classCallCheck(this, CommonLayoutComponent);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.themeService = themeService;
          this.http = http;
          this.message = message;
          this.globaldata = globaldata;
          this.permissionsService = permissionsService;
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            var child = _this24.activatedRoute.firstChild;

            while (child) {
              if (child.firstChild) {
                child = child.firstChild;
              } else if (child.snapshot.data && child.snapshot.data['headerDisplay']) {
                return child.snapshot.data['headerDisplay'];
              } else {
                return null;
              }
            }

            return null;
          })).subscribe(function (data) {
            _this24.contentHeaderDisplay = data;
          }); // window.onbeforeunload = function (e) {
          //     window.onunload = function () {
          //             window.sessionStorage.clear()
          //     }
          //     return undefined;
          // };
        }

        _createClass(CommonLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            if (sessionStorage.getItem('fatakpay_user_data')) {
              var check_token_exists = JSON.parse(sessionStorage.getItem('fatakpay_user_data')).token;

              if (check_token_exists) {
                this.VerifyUserFunction();
              }
            } else {
              this.router.navigate(['/authentication/login']);
              this.message.error('Authorization Details Not Found, Kindly Login again');
            }

            this.breadcrumbs$ = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(new _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"](0, '/', '/')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              return _this25.buildBreadCrumb(_this25.activatedRoute.root);
            }));
            this.themeService.isMenuFoldedChanges.subscribe(function (isFolded) {
              return _this25.isFolded = isFolded;
            });
            this.themeService.isSideNavDarkChanges.subscribe(function (isDark) {
              return _this25.isSideNavDark = isDark;
            });
            this.themeService.selectedHeaderColor.subscribe(function (color) {
              return _this25.selectedHeaderColor = color;
            });
            this.themeService.isExpandChanges.subscribe(function (isExpand) {
              return _this25.isExpand = isExpand;
            });
          }
        }, {
          key: "buildBreadCrumb",
          value: function buildBreadCrumb(route) {
            var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var breadcrumbs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var label = '',
                path = '/',
                display = null,
                title,
                params = '';

            if (route.routeConfig) {
              if (route.routeConfig.data) {
                // console.log(route.routeConfig.path)
                label = route.routeConfig.data['title'];

                if (route.routeConfig.data['custom_url']) {
                  path += route.routeConfig.data['custom_url'];
                } else {
                  path += route.routeConfig.path;
                }

                if (route.routeConfig.data['params']) {
                  params = route.routeConfig.data['params'];
                }

                this.showBreadCrumb = route.routeConfig.data['parent'];
              }
            } // else {
            //     label = 'Dashboard';
            //     path += 'dashboard';
            // }


            var nextUrl = path && path !== '/dashboard' ? "".concat(url).concat(path) : url;
            var breadcrumb = {
              label: label,
              url: nextUrl,
              title: title
            };
            var newBreadcrumbs = label ? [].concat(_toConsumableArray(breadcrumbs), [breadcrumb]) : _toConsumableArray(breadcrumbs);

            if (route.firstChild) {
              return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
            }

            return newBreadcrumbs;
          }
        }, {
          key: "VerifyUserFunction",
          value: function VerifyUserFunction() {
            var _this26 = this;

            this.http.VerifyUser().subscribe(function (res) {
              if (res.success) {
                // this.http.setPermissionValue(res.data.data.permissions_slug_list)
                sessionStorage.setItem('fatakpay_user_data', JSON.stringify(res.data));

                _this26.globaldata.sendUserData(res === null || res === void 0 ? void 0 : res.data);

                if (sessionStorage.getItem('fatakpay_user_data')) {
                  var check_token_exists = JSON.parse(sessionStorage.getItem('fatakpay_user_data')).permissions;
                  check_token_exists.push('');

                  _this26.permissionsService.loadPermissions(check_token_exists);
                }

                _this26.UserPermissionDataSubscription = _this26.http.globalUserPermissionsData.subscribe(function (value) {
                  value.push('');

                  _this26.permissionsService.loadPermissions(value);
                }); // if(res.data.data.icon){
                // //   this.http.setBrandLogoValueOnChange(res.data.data.icon)
                // }
              } else {
                _this26.router.navigate(['/authentication/login']);

                _this26.message.error(res.message);

                sessionStorage.removeItem('fatakpay_user_data');
              }
            }, function (err) {
              _this26.router.navigate(['/authentication/login']);

              _this26.message.error('Oops! something went wrong, Kindly Login again');

              sessionStorage.removeItem('fatakpay_user_data');
            });
          }
        }]);

        return CommonLayoutComponent;
      }();

      CommonLayoutComponent.ɵfac = function CommonLayoutComponent_Factory(t) {
        return new (t || CommonLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_3__["ThemeConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_globalservices_service__WEBPACK_IMPORTED_MODULE_6__["GlobalservicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsService"]));
      };

      CommonLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CommonLayoutComponent,
        selectors: [["app-common-layout"]],
        decls: 7,
        vars: 10,
        consts: [[3, "ngClass"], [1, "page-container"], ["class", "bg-white main-content h-unset pb-3", 3, "ngClass", 4, "ngIf"], [1, "main-content", 3, "ngClass"], [1, "bg-white", "main-content", "h-unset", "pb-3", 3, "ngClass"], ["class", "main-content-header d-flex justify-content-between mb-2 flex-wrap", 4, "ngIf"], [4, "ngIf"], ["class", "font-weight-semibold d-none", 3, "ngClass", 4, "ngIf"], [1, "main-content-header", "d-flex", "justify-content-between", "mb-2", "flex-wrap"], [1, "d-flex", "flex-wrap"], ["class", "page-title mr-2", 4, "ngIf"], ["class", "pl-2", 4, "ngFor", "ngForOf"], [1, "page-title", "mr-2"], [1, "pl-2"], [3, "routerLink", "queryParams"], ["class", "font-weight-semibold", 4, "ngIf"], [1, "font-weight-semibold"], [1, "font-weight-semibold", "d-none", 3, "ngClass"]],
        template: function CommonLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CommonLayoutComponent_div_4_Template, 5, 6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("common-layout ", "is-" + ctx.selectedHeaderColor, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c0, ctx.isFolded, ctx.isSideNavDark, ctx.isExpand));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentHeaderDisplay !== "none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.contentHeaderDisplay !== "none" ? "pt-3" : "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _shared_template_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _shared_template_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_10__["SideNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_11__["NzBreadCrumbComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_11__["NzBreadCrumbItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-common-layout',
            templateUrl: './common-layout.component.html'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_3__["ThemeConstantService"]
          }, {
            type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]
          }, {
            type: src_app_shared_globalservices_service__WEBPACK_IMPORTED_MODULE_6__["GlobalservicesService"]
          }, {
            type: ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "WfBE":
    /*!*********************************************!*\
      !*** ./src/app/shared/pipes/search.pipe.ts ***!
      \*********************************************/

    /*! exports provided: SearchPipe */

    /***/
    function WfBE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPipe", function () {
        return SearchPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SearchPipe = /*#__PURE__*/function () {
        function SearchPipe() {
          _classCallCheck(this, SearchPipe);
        }

        _createClass(SearchPipe, [{
          key: "transform",
          value: function transform(value, keys, term) {
            if (!term) return value;
            return (value || []).filter(function (item) {
              return keys.split(',').some(function (key) {
                return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]);
              });
            });
          }
        }]);

        return SearchPipe;
      }();

      SearchPipe.ɵfac = function SearchPipe_Factory(t) {
        return new (t || SearchPipe)();
      };

      SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "search",
        type: SearchPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'search'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Wum+":
    /*!**************************************************!*\
      !*** ./src/app/shared/globalservices.service.ts ***!
      \**************************************************/

    /*! exports provided: GlobalservicesService */

    /***/
    function Wum(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalservicesService", function () {
        return GlobalservicesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/http.service */
      "N+K7");

      var GlobalservicesService = /*#__PURE__*/function () {
        function GlobalservicesService(http) {
          _classCallCheck(this, GlobalservicesService);

          this.http = http;
          this.globalPageSize = 100;
          this.applicationStageCount = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
          this.globalUserData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
          this.globalApplicationLoan = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
          this.borrowersStageCount = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
          this.borrowersSubStageCount = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        }

        _createClass(GlobalservicesService, [{
          key: "setApplicationCount",
          value: function setApplicationCount() {
            var _this27 = this;

            var param = {
              'source': 'Onboarding',
              'datapoint': 'stage-wise-application-count'
            };
            this.http.getApplicationStageCount(param).subscribe(function (res) {
              // this.setApplicationCount(res?.data)
              _this27.applicationStageCount.next(res === null || res === void 0 ? void 0 : res.data);
            });
          }
        }, {
          key: "setBorrowersSubCount",
          value: function setBorrowersSubCount() {
            var _this28 = this;

            var param = {
              'stage_type': 'SUB',
              'stage_master': '1'
            };
            this.http.getBorrowersStageCount(param).subscribe(function (res) {
              _this28.borrowersSubStageCount.next(res === null || res === void 0 ? void 0 : res.data);
            });
          }
        }, {
          key: "setBorrowersStageCount",
          value: function setBorrowersStageCount() {
            var _this29 = this;

            var param = {
              'stage_type': '',
              'stage_master': '1'
            };
            this.http.getBorrowersStageCount(param).subscribe(function (res) {
              _this29.borrowersStageCount.next(res === null || res === void 0 ? void 0 : res.data);
            });
          }
        }, {
          key: "selectedGlobalApplicationLoan",
          value: function selectedGlobalApplicationLoan(data) {
            this.globalApplicationLoan.next(data);
          }
        }, {
          key: "amountFromatterFinction",
          value: function amountFromatterFinction(value) {
            var val;
            val = Math.abs(value);

            if (val >= 10000000) {
              val = val / 10000000 + ' Cr';
            } else if (val >= 100000) {
              val = val / 100000 + ' Lacs';
            } else if (val >= 1000) {
              val = val / 1000 + ' Thousand';
            }

            if (typeof val == 'string') {} else {
              val = val;
            }

            return val;
          }
        }, {
          key: "sendUserData",
          value: function sendUserData(data) {
            this.globalUserData.next(data);
          }
        }, {
          key: "maskedValue",
          value: function maskedValue(data, type) {
            if (data && type == 'pan') {
              return data[data.length - 1]['pan_no'];
            } else if (data && type == 'aadhar') {
              return data[data.length - 1]['aadhar_no'];
            }
          }
        }]);

        return GlobalservicesService;
      }();

      GlobalservicesService.ɵfac = function GlobalservicesService_Factory(t) {
        return new (t || GlobalservicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]));
      };

      GlobalservicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GlobalservicesService,
        factory: GlobalservicesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalservicesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/i18n */
      "Rm4T");
      /* harmony import */


      var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/breadcrumb */
      "yNE/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/locales/en */
      "tAZD");
      /* harmony import */


      var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _shared_template_template_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/template/template.module */
      "u6u5");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./layouts/common-layout/common-layout.component */
      "Wdt6");
      /* harmony import */


      var _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./layouts/full-layout/full-layout.component */
      "Ueqm");
      /* harmony import */


      var ng_chartjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-chartjs */
      "jdj2");
      /* harmony import */


      var _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./shared/services/theme-constant.service */
      "PQ0Y");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _services_custom_http_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./services/custom-http-interceptor */
      "quax");
      /* harmony import */


      var _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./ng-zorro-antd.module */
      "PMIT");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./services/http.service */
      "N+K7");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-json-viewer */
      "xWP1");
      /* harmony import */


      var ngx_captcha__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-captcha */
      "sjCC");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_6___default.a);

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["NZ_I18N"],
          useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["en_US"]
        }, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PathLocationStrategy"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
          useClass: _services_custom_http_interceptor__WEBPACK_IMPORTED_MODULE_16__["CustomHttpInterceptor"],
          multi: true
        }, _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_14__["ThemeConstantService"], _services_http_service__WEBPACK_IMPORTED_MODULE_18__["HttpService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbModule"], _shared_template_template_module__WEBPACK_IMPORTED_MODULE_8__["TemplateModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ng_chartjs__WEBPACK_IMPORTED_MODULE_13__["NgChartjsModule"], _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_17__["DemoNgZorroAntdModule"], ngx_captcha__WEBPACK_IMPORTED_MODULE_21__["NgxCaptchaModule"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_20__["NgxJsonViewerModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_19__["NgxPermissionsModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_11__["CommonLayoutComponent"], _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_12__["FullLayoutComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbModule"], _shared_template_template_module__WEBPACK_IMPORTED_MODULE_8__["TemplateModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ng_chartjs__WEBPACK_IMPORTED_MODULE_13__["NgChartjsModule"], _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_17__["DemoNgZorroAntdModule"], ngx_captcha__WEBPACK_IMPORTED_MODULE_21__["NgxCaptchaModule"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_20__["NgxJsonViewerModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_19__["NgxPermissionsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_11__["CommonLayoutComponent"], _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_12__["FullLayoutComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbModule"], _shared_template_template_module__WEBPACK_IMPORTED_MODULE_8__["TemplateModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ng_chartjs__WEBPACK_IMPORTED_MODULE_13__["NgChartjsModule"], _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_17__["DemoNgZorroAntdModule"], ngx_captcha__WEBPACK_IMPORTED_MODULE_21__["NgxCaptchaModule"], ngx_json_viewer__WEBPACK_IMPORTED_MODULE_20__["NgxJsonViewerModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_19__["NgxPermissionsModule"].forRoot()],
            providers: [{
              provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["NZ_I18N"],
              useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["en_US"]
            }, {
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
              useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PathLocationStrategy"]
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
              useClass: _services_custom_http_interceptor__WEBPACK_IMPORTED_MODULE_16__["CustomHttpInterceptor"],
              multi: true
            }, _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_14__["ThemeConstantService"], _services_http_service__WEBPACK_IMPORTED_MODULE_18__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "c+2v":
    /*!*********************************************************************!*\
      !*** ./src/app/applications/bank-details/bank-details.component.ts ***!
      \*********************************************************************/

    /*! exports provided: BankDetailsComponent */

    /***/
    function c2v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BankDetailsComponent", function () {
        return BankDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var src_app_shared_globalservices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/globalservices.service */
      "Wum+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/page-header */
      "jPNr");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");

      function BankDetailsComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Relationship ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Mobile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var a_data_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", a_data_r7 ? a_data_r7 == null ? null : a_data_r7.name : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", a_data_r7 ? a_data_r7 == null ? null : a_data_r7.relationship : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", a_data_r7 ? a_data_r7 == null ? null : a_data_r7.mobile : "-", " ");
        }
      }

      function BankDetailsComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Nominee Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BankDetailsComponent_ng_template_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bank Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BankDetailsComponent_ng_template_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Offer Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var BankDetailsComponent = /*#__PURE__*/function () {
        function BankDetailsComponent(https, message, fb, sanitize, global, route, router) {
          _classCallCheck(this, BankDetailsComponent);

          this.https = https;
          this.message = message;
          this.fb = fb;
          this.sanitize = sanitize;
          this.global = global;
          this.route = route;
          this.router = router;
        }

        _createClass(BankDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getBankDetails();
          }
        }, {
          key: "getBankDetails",
          value: function getBankDetails() {
            var _this30 = this;

            this.api_calling_loader = true;
            this.https.getBankDetails(this._currentId).subscribe(function (res) {
              _this30.api_calling_loader = false;
              _this30.data = res['data']; // this.message.success(res['message'])
            }, function (err) {
              _this30.api_calling_loader = false;
            });
          }
        }]);

        return BankDetailsComponent;
      }();

      BankDetailsComponent.ɵfac = function BankDetailsComponent_Factory(t) {
        return new (t || BankDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_globalservices_service__WEBPACK_IMPORTED_MODULE_5__["GlobalservicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      BankDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BankDetailsComponent,
        selectors: [["app-bank-details"]],
        inputs: {
          _currentId: "_currentId"
        },
        decls: 70,
        vars: 15,
        consts: [[1, "row"], [1, "col-md-12"], [1, "site-page-header", "acc-bg-light", 3, "nzTitle"], [1, "mb-md-0", "border", 3, "nzLoading"], ["class", "row", 4, "ngFor", "ngForOf"], ["nomineeDetail", ""], [1, "mt-3"], [1, "mb-md-0", 3, "nzLoading"], [1, "col-md-4"], [1, "d-flex", "flex-column"], [1, "text-muted"], [1, "col-md-4", "mt-2"], ["bankDetails", ""], [1, "d-flex", "justify-content-between"], ["offerDetails", ""], [1, "ml-md-2"], [1, "mb-0"], ["nz-icon", "", "nzType", "file", "nzTheme", "outline", 1, "mr-2"]],
        template: function BankDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-page-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BankDetailsComponent_div_6_Template, 19, 3, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BankDetailsComponent_ng_template_7_Template, 4, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-page-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-card", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "A/c Holder Name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Bank Name - ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " A/c No. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Account Type: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "IFSC Code ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Bank name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, BankDetailsComponent_ng_template_49_Template, 3, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "nz-page-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "nz-card", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Loan amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Loan max amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, BankDetailsComponent_ng_template_68_Template, 3, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_calling_loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data == null ? null : ctx.data.nominee_details);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_calling_loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.bank_details == null ? null : ctx.data.bank_details.account_holder_name) ? ctx.data == null ? null : ctx.data.bank_details == null ? null : ctx.data.bank_details.account_holder_name : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.bank_details == null ? null : ctx.data.bank_details.bank_name) ? ctx.data == null ? null : ctx.data.bank_details == null ? null : ctx.data.bank_details.bank_name : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.bank_details == null ? null : ctx.data.bank_details.account_no) ? ctx.data == null ? null : ctx.data.bank_details == null ? null : ctx.data.bank_details.account_no : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.bank_details == null ? null : ctx.data.bank_details.account_type) ? ctx.data == null ? null : ctx.data.bank_details == null ? null : ctx.data.bank_details.account_type : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.bank_details == null ? null : ctx.data.bank_details.ifsc_code) ? ctx.data == null ? null : ctx.data.bank_details == null ? null : ctx.data.bank_details.ifsc_code : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.bank_details == null ? null : ctx.data.bank_details.bank_name) ? ctx.data == null ? null : ctx.data.bank_details == null ? null : ctx.data.bank_details.bank_name : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.api_calling_loader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.offer_details == null ? null : ctx.data.offer_details.loan_amount) ? ctx.data == null ? null : ctx.data.offer_details == null ? null : ctx.data.offer_details.loan_amount : "-", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.offer_details == null ? null : ctx.data.offer_details.loan_amount_max) ? ctx.data == null ? null : ctx.data.offer_details == null ? null : ctx.data.offer_details.loan_amount_max : "-", " ");
          }
        },
        directives: [ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_7__["NzPageHeaderComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5rLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BankDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bank-details',
            templateUrl: './bank-details.component.html',
            styleUrls: ['./bank-details.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
          }, {
            type: src_app_shared_globalservices_service__WEBPACK_IMPORTED_MODULE_5__["GlobalservicesService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, {
          _currentId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "jnn0":
    /*!****************************************************************!*\
      !*** ./src/app/shared/template/side-nav/side-nav.component.ts ***!
      \****************************************************************/

    /*! exports provided: SideNavComponent */

    /***/
    function jnn0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SideNavComponent", function () {
        return SideNavComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _side_nav_routes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./side-nav-routes.config */
      "ztfw");
      /* harmony import */


      var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/theme-constant.service */
      "PQ0Y");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var _globalservices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../globalservices.service */
      "Wum+");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../directives/side-nav.directive */
      "IyZr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/popover */
      "+oEP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");

      function SideNavComponent_ng_container_2_li_1_a_1_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", item_r1.icon)("theme", item_r1.iconTheme);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return [a0, a1];
      };

      function SideNavComponent_ng_container_2_li_1_a_1_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, item_r1.iconTheme, item_r1.icon));
        }
      }

      function SideNavComponent_ng_container_2_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_a_1_i_1_Template, 1, 2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_a_1_i_2_Template, 1, 4, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.iconType == "nzIcon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.iconType == "fontawesome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.title, " ");
        }
      }

      function SideNavComponent_ng_container_2_li_1_a_2_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", item_r1.icon)("theme", item_r1.iconTheme);
        }
      }

      function SideNavComponent_ng_container_2_li_1_a_2_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, item_r1.iconTheme, item_r1.icon));
        }
      }

      function SideNavComponent_ng_container_2_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_ng_container_2_li_1_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r15.closeMobileMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_a_2_i_1_Template, 1, 2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_a_2_i_2_Template, 1, 4, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r1.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.iconType == "nzIcon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.iconType == "fontawesome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_a_1_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
        }

        if (rf & 2) {
          var subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", subItem_r19.icon)("theme", subItem_r19.iconTheme);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_a_1_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
        }

        if (rf & 2) {
          var subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, subItem_r19.iconTheme, subItem_r19.icon));
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_a_1_i_1_Template, 1, 2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_a_1_i_2_Template, 1, 4, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.iconType == "nzIcon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.iconType == "fontawesome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subItem_r19.title, "");
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_a_2_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
        }

        if (rf & 2) {
          var subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", subItem_r19.icon)("theme", subItem_r19.iconTheme);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_a_2_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
        }

        if (rf & 2) {
          var subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, subItem_r19.iconTheme, subItem_r19.icon));
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

            return ctx_r33.closeMobileMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_a_2_i_1_Template, 1, 2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_a_2_i_2_Template, 1, 4, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", subItem_r19.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.iconType == "nzIcon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.iconType == "fontawesome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subItem_r19.title + ((item_r1 == null ? null : item_r1.path) == "applications" && (ctx_r22.getCount(subItem_r19 == null ? null : subItem_r19.title) !== null || ctx_r22.getCount(subItem_r19 == null ? null : subItem_r19.title) !== undefined) ? " (" + ctx_r22.getCount(subItem_r19 == null ? null : subItem_r19.title) + ")" : ""));
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_1_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
        }

        if (rf & 2) {
          var subItem_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", subItem_r38.icon)("theme", subItem_r38.iconTheme);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_1_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
        }

        if (rf & 2) {
          var subItem_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, subItem_r38.iconTheme, subItem_r38.icon));
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_1_i_1_Template, 1, 2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_1_i_2_Template, 1, 4, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r38.iconType == "nzIcon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r38.iconType == "fontawesome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subItem_r38.title, "");
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_2_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
        }

        if (rf & 2) {
          var subItem_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", subItem_r38.icon)("theme", subItem_r38.iconTheme);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_2_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
        }

        if (rf & 2) {
          var subItem_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, subItem_r38.iconTheme, subItem_r38.icon));
        }
      }

      var _c1 = function _c1(a0) {
        return {
          main_stage: a0
        };
      };

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](9);

            return ctx_r52.closeMobileMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_2_i_1_Template, 1, 2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_2_i_2_Template, 1, 4, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", subItem_r38.path)("queryParams", (subItem_r38 == null ? null : subItem_r38.path.includes("borrowers")) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r41.getBorrowersMainStageId(subItem_r38 == null ? null : subItem_r38.title)) : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r38.iconType == "nzIcon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r38.iconType == "fontawesome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subItem_r38.title + ((subItem_r38 == null ? null : subItem_r38.path.includes("borrowers")) && subItem_r38.title != "EMI Borrowers" && (ctx_r41.getBorrowersCount(subItem_r38 == null ? null : subItem_r38.title) !== null || ctx_r41.getBorrowersCount(subItem_r38 == null ? null : subItem_r38.title) !== undefined) ? " (" + ctx_r41.getBorrowersCount(subItem_r38 == null ? null : subItem_r38.title) + ")" : ""));
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_1_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
        }

        if (rf & 2) {
          var subItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", subItem_r56.icon)("theme", subItem_r56.iconTheme);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_1_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
        }

        if (rf & 2) {
          var subItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, subItem_r56.iconTheme, subItem_r56.icon));
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_1_i_1_Template, 1, 2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_1_i_2_Template, 1, 4, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r56.iconType == "nzIcon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r56.iconType == "fontawesome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subItem_r56.title, "");
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_2_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
        }

        if (rf & 2) {
          var subItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", subItem_r56.icon)("theme", subItem_r56.iconTheme);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_2_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
        }

        if (rf & 2) {
          var subItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, subItem_r56.iconTheme, subItem_r56.icon));
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](12);

            return ctx_r69.closeMobileMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_2_i_1_Template, 1, 2, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_2_i_2_Template, 1, 4, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](9).$implicit;

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", subItem_r56.path);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r56.iconType == "nzIcon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r56.iconType == "fontawesome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subItem_r56.title + ((item_r1 == null ? null : item_r1.path) == "applications" && (ctx_r59.getCount(subItem_r56 == null ? null : subItem_r56.title) !== null || ctx_r59.getCount(subItem_r56 == null ? null : subItem_r56.title) !== undefined) ? " (" + ctx_r59.getCount(subItem_r56 == null ? null : subItem_r56.title) + ")" : ""));
        }
      }

      var _c2 = function _c2() {
        return {
          exact: false
        };
      };

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_1_Template, 6, 3, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_2_Template, 5, 4, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", subItem_r56.submenu.length > 0 ? "ant-menu-submenu ant-menu-submenu-inline" : "ant-menu-item")("routerLinkActive", subItem_r56.submenu.length > 0 ? "ant-menu-submenu-open" : "ant-menu-item-selected")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r56.submenu.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r56.submenu.length === 0);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_Template, 3, 6, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var subItem_r56 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", subItem_r56 == null ? null : subItem_r56.permission);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", subItem_r38.submenu);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_1_Template, 6, 3, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_a_2_Template, 5, 7, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_ul_3_Template, 2, 1, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", subItem_r38.submenu.length > 0 ? "ant-menu-submenu ant-menu-submenu-inline" : "ant-menu-item")("routerLinkActive", subItem_r38.submenu.length > 0 ? "ant-menu-submenu-open" : "ant-menu-item-selected")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r38.submenu.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r38.submenu.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r38.submenu.length > 0);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_li_1_Template, 4, 7, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var subItem_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", subItem_r38 == null ? null : subItem_r38.permission);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_ng_container_1_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", subItem_r19.submenu);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_a_1_Template, 6, 3, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_a_2_Template, 5, 4, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_ul_3_Template, 2, 1, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", subItem_r19.submenu.length > 0 ? "ant-menu-submenu ant-menu-submenu-inline" : "ant-menu-item")("routerLinkActive", subItem_r19.submenu.length > 0 ? "ant-menu-submenu-open" : "ant-menu-item-selected")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.submenu.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.submenu.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subItem_r19.submenu.length > 0);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_li_1_Template, 4, 7, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var subItem_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", subItem_r19 == null ? null : subItem_r19.permission);
        }
      }

      function SideNavComponent_ng_container_2_li_1_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_ul_3_ng_container_1_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.submenu);
        }
      }

      function SideNavComponent_ng_container_2_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_a_1_Template, 6, 3, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_li_1_a_2_Template, 5, 4, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SideNavComponent_ng_container_2_li_1_ul_3_Template, 2, 1, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r1.submenu.length > 0 ? "ant-menu-submenu ant-menu-submenu-inline" : "ant-menu-item")("nzPopoverContent", ctx_r2.isFolded ? item_r1.title : "")("nzPopoverPlacement", ctx_r2.isFolded ? "topLeft" : "")("routerLinkActive", item_r1.submenu.length > 0 ? "ant-menu-submenu-open" : "ant-menu-item-selected")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.submenu.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.submenu.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.submenu.length > 0);
        }
      }

      function SideNavComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SideNavComponent_ng_container_2_li_1_Template, 4, 9, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", item_r1 == null ? null : item_r1.permission);
        }
      }

      var _c3 = function _c3(a0, a1) {
        return {
          "ant-menu-inline-collapsed": a0,
          "ant-menu-dark": a1
        };
      };

      var SideNavComponent = /*#__PURE__*/function () {
        function SideNavComponent(themeService, iconService, http, global) {
          _classCallCheck(this, SideNavComponent);

          this.themeService = themeService;
          this.iconService = iconService;
          this.http = http;
          this.global = global;
          this.applicationCount = [];
          var ngZorroIconLiteral = '<svg width="14" height="14" viewBox="0 0 14 14" class="fill-white" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="6.5" stroke="currentColor"/><path d="M9.318 4.242H7.08C7.36 4.39 7.57 4.572 7.71 4.788C7.854 5.004 7.948 5.25 7.992 5.526H9.318V6.36H7.98C7.9 6.796 7.698 7.174 7.374 7.494C7.054 7.814 6.628 8.044 6.096 8.184C6.268 8.276 6.416 8.41 6.54 8.586L9.048 12H8.01C7.802 12 7.648 11.918 7.548 11.754L5.316 8.682C5.248 8.586 5.174 8.518 5.094 8.478C5.018 8.434 4.898 8.412 4.734 8.412H3.726V7.608H4.854C5.418 7.608 5.868 7.494 6.204 7.266C6.544 7.038 6.764 6.736 6.864 6.36H3.714V5.526H6.888C6.812 5.126 6.608 4.818 6.276 4.602C5.944 4.382 5.486 4.272 4.902 4.272H3.726V3.402H9.318V4.242Z" fill="currentColor"/></svg>';
          this.iconService.addIconLiteral('ng-zorro:indian_rupee', ngZorroIconLiteral);
        }

        _createClass(SideNavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this31 = this;

            this.menuItems = _side_nav_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (menuItem) {
              return menuItem;
            });
            this.themeService.isMenuFoldedChanges.subscribe(function (isFolded) {
              return _this31.isFolded = isFolded;
            });
            this.themeService.isExpandChanges.subscribe(function (isExpand) {
              return _this31.isExpand = isExpand;
            });
            this.themeService.isSideNavDarkChanges.subscribe(function (isDark) {
              return _this31.isSideNavDark = isDark;
            });
            this.global.setApplicationCount();
            this.global.setBorrowersStageCount();
            this.global.applicationStageCount.subscribe(function (res) {
              if (res) {
                _this31.applicationCount = res; // console.log('res =>',this.applicationCount)
              }
            });
            this.global.borrowersStageCount.subscribe(function (res) {
              if (res) {
                _this31.borrowersStageCount = res; //  console.log('res =>',this.applicationCount)
              }
            });
          }
        }, {
          key: "closeMobileMenu",
          value: function closeMobileMenu() {
            if (window.innerWidth < 992) {
              this.isFolded = false;
              this.isExpand = !this.isExpand;
              this.themeService.toggleExpand(this.isExpand);
              this.themeService.toggleFold(this.isFolded);
            }
          }
        }, {
          key: "onCheckReturn",
          value: function onCheckReturn(data) {
            data.forEach(function (element) {
              return element;
            });
          }
        }, {
          key: "getCount",
          value: function getCount(item) {
            // console.log(this.applicationCount, item);
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;

            switch (item) {
              case 'All Applicants':
                return this.applicationCount && ((_a = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'All Applicants';
                })) === null || _a === void 0 ? void 0 : _a.applications) ? (_b = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'All Applicants';
                })) === null || _b === void 0 ? void 0 : _b.applications : 0;

              case 'UNREGISTERED':
                return this.applicationCount && ((_c = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'UNREGISTERED OTP';
                })) === null || _c === void 0 ? void 0 : _c.applications) ? (_d = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'UNREGISTERED OTP';
                })) === null || _d === void 0 ? void 0 : _d.applications : '';

              case 'Employee List':
                return this.applicationCount && ((_e = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Corporate Employee List';
                })) === null || _e === void 0 ? void 0 : _e.applications) ? (_f = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Corporate Employee List';
                })) === null || _f === void 0 ? void 0 : _f.applications : 0;
              // Corporate Employee List
              // return '';

              case 'Form Filling':
                return this.applicationCount && ((_g = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Form Filling';
                })) === null || _g === void 0 ? void 0 : _g.applications) !== undefined ? (_h = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Form Filling';
                })) === null || _h === void 0 ? void 0 : _h.applications : 0;

              case 'Document verification':
                return this.applicationCount && ((_j = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Pre Approved';
                })) === null || _j === void 0 ? void 0 : _j.applications) !== undefined ? (_k = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Pre Approved';
                })) === null || _k === void 0 ? void 0 : _k.applications : 0;

              case 'Document Pending':
                return this.applicationCount && ((_l = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Document Pending';
                })) === null || _l === void 0 ? void 0 : _l.applications) !== undefined ? (_m = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Document Pending';
                })) === null || _m === void 0 ? void 0 : _m.applications : 0;

              case 'Document Upload':
                return this.applicationCount && ((_o = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Document Upload';
                })) === null || _o === void 0 ? void 0 : _o.applications) !== undefined ? (_p = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Document Upload';
                })) === null || _p === void 0 ? void 0 : _p.applications : 0;

              case 'Underwriting':
                return this.applicationCount && ((_q = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Underwriting';
                })) === null || _q === void 0 ? void 0 : _q.applications) !== undefined ? (_r = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Underwriting';
                })) === null || _r === void 0 ? void 0 : _r.applications : 0;

              case 'NBFC Approval':
                return this.applicationCount && ((_s = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'NBFC Approval';
                })) === null || _s === void 0 ? void 0 : _s.applications) !== undefined ? (_t = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'NBFC Approval';
                })) === null || _t === void 0 ? void 0 : _t.applications : 0;

              case 'Offer Proposed':
                return this.applicationCount && ((_u = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Offer Proposed';
                })) === null || _u === void 0 ? void 0 : _u.applications) !== undefined ? (_v = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Offer Proposed';
                })) === null || _v === void 0 ? void 0 : _v.applications : 0;

              case 'Offer Acceptance':
                return this.applicationCount && ((_w = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Offer Acceptance';
                })) === null || _w === void 0 ? void 0 : _w.applications) !== undefined ? (_x = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Offer Acceptance';
                })) === null || _x === void 0 ? void 0 : _x.applications : 0;

              case 'E-Nach/Signing':
                return this.applicationCount && ((_y = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'E-Nach / Signing';
                })) === null || _y === void 0 ? void 0 : _y.applications) !== undefined ? (_z = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'E-Nach / Signing';
                })) === null || _z === void 0 ? void 0 : _z.applications : 0;

              case 'Disbursement':
                return this.applicationCount && ((_0 = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Disbursement';
                })) === null || _0 === void 0 ? void 0 : _0.applications) !== undefined ? (_1 = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Disbursement';
                })) === null || _1 === void 0 ? void 0 : _1.applications : 0;

              case 'Rejected':
                return this.applicationCount && ((_2 = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Rejected';
                })) === null || _2 === void 0 ? void 0 : _2.applications) !== undefined ? (_3 = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Rejected';
                })) === null || _3 === void 0 ? void 0 : _3.applications : 0;

              case 'Dormant':
                return this.applicationCount && ((_4 = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Dormant';
                })) === null || _4 === void 0 ? void 0 : _4.applications) !== undefined ? (_5 = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Dormant';
                })) === null || _5 === void 0 ? void 0 : _5.applications : 0;

              case 'Closed':
                return this.applicationCount && ((_6 = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Closed';
                })) === null || _6 === void 0 ? void 0 : _6.applications) == undefined ? (_7 = this.applicationCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.stage_name) == 'Closed';
                })) === null || _7 === void 0 ? void 0 : _7.applications : 0;
            }
          }
        }, {
          key: "getBorrowersCount",
          value: function getBorrowersCount(item) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

            switch (item) {
              case 'All':
                return this.borrowersStageCount && ((_a = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'All';
                })) === null || _a === void 0 ? void 0 : _a.count) !== undefined ? (_b = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'All';
                })) === null || _b === void 0 ? void 0 : _b.count : 0;

              case 'Activation':
                return this.borrowersStageCount && ((_c = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Activation';
                })) === null || _c === void 0 ? void 0 : _c.count) !== undefined ? (_d = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Activation';
                })) === null || _d === void 0 ? void 0 : _d.count : 0;

              case 'Active':
                return this.borrowersStageCount && ((_e = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Active';
                })) === null || _e === void 0 ? void 0 : _e.count) !== undefined ? (_f = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Active';
                })) === null || _f === void 0 ? void 0 : _f.count : 0;

              case 'Inactive':
                return this.borrowersStageCount && ((_g = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Inactive';
                })) === null || _g === void 0 ? void 0 : _g.count) !== undefined ? (_h = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Inactive';
                })) === null || _h === void 0 ? void 0 : _h.count : 0;

              case 'Deliquent':
                return this.borrowersStageCount && ((_j = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Deliquent';
                })) === null || _j === void 0 ? void 0 : _j.count) !== undefined ? (_k = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Deliquent';
                })) === null || _k === void 0 ? void 0 : _k.count : 0;

              case 'Close':
                return this.borrowersStageCount && ((_l = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Close';
                })) === null || _l === void 0 ? void 0 : _l.count) !== undefined ? (_m = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Close';
                })) === null || _m === void 0 ? void 0 : _m.count : 0;
            }
          }
        }, {
          key: "getBorrowersMainStageId",
          value: function getBorrowersMainStageId(item) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

            switch (item) {
              case 'All':
                return this.borrowersStageCount && ((_a = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'All';
                })) === null || _a === void 0 ? void 0 : _a.pk) !== undefined ? (_b = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'All';
                })) === null || _b === void 0 ? void 0 : _b.pk : '';

              case 'Activation':
                return this.borrowersStageCount && ((_c = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Activation';
                })) === null || _c === void 0 ? void 0 : _c.pk) !== undefined ? (_d = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Activation';
                })) === null || _d === void 0 ? void 0 : _d.pk : '';

              case 'Active':
                return this.borrowersStageCount && ((_e = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Active';
                })) === null || _e === void 0 ? void 0 : _e.pk) !== undefined ? (_f = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Active';
                })) === null || _f === void 0 ? void 0 : _f.pk : '';

              case 'Inactive':
                return this.borrowersStageCount && ((_g = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Inactive';
                })) === null || _g === void 0 ? void 0 : _g.pk) !== undefined ? (_h = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Inactive';
                })) === null || _h === void 0 ? void 0 : _h.pk : '';

              case 'Deliquent':
                return this.borrowersStageCount && ((_j = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Deliquent';
                })) === null || _j === void 0 ? void 0 : _j.pk) !== undefined ? (_k = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Deliquent';
                })) === null || _k === void 0 ? void 0 : _k.pk : '';

              case 'Close':
                return this.borrowersStageCount && ((_l = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Close';
                })) === null || _l === void 0 ? void 0 : _l.pk) !== undefined ? (_m = this.borrowersStageCount.find(function (res) {
                  return (res === null || res === void 0 ? void 0 : res.name) == 'Close';
                })) === null || _m === void 0 ? void 0 : _m.pk : '';
            }
          }
        }]);

        return SideNavComponent;
      }();

      SideNavComponent.ɵfac = function SideNavComponent_Factory(t) {
        return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_2__["ThemeConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_globalservices_service__WEBPACK_IMPORTED_MODULE_5__["GlobalservicesService"]));
      };

      SideNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SideNavComponent,
        selectors: [["app-sidenav"]],
        decls: 3,
        vars: 5,
        consts: [["sideNav", "", 1, "side-nav"], [1, "ant-menu", "ant-menu-root", "ant-menu-inline", "side-nav-menu", 3, "ngClass"], [4, "ngFor", "ngForOf"], ["nz-popover", "", 3, "ngClass", "nzPopoverContent", "nzPopoverPlacement", "routerLinkActive", "routerLinkActiveOptions", 4, "ngxPermissionsOnly"], ["nz-popover", "", 3, "ngClass", "nzPopoverContent", "nzPopoverPlacement", "routerLinkActive", "routerLinkActiveOptions"], ["href", "javascript:void(0);", "class", "ant-menu-submenu-title", 4, "ngIf"], [3, "routerLink", "click", 4, "ngIf"], ["class", "ant-menu ant-menu-inline ant-menu-sub dropdown-menu", 4, "ngIf"], ["href", "javascript:void(0);", 1, "ant-menu-submenu-title"], ["nz-icon", "", 3, "nzType", "theme", 4, "ngIf"], ["class", "m-r-10", 3, "ngClass", 4, "ngIf"], [1, "ant-menu-submenu-arrow"], ["nz-icon", "", 3, "nzType", "theme"], [1, "m-r-10", 3, "ngClass"], [3, "routerLink", "click"], [1, "ant-menu", "ant-menu-inline", "ant-menu-sub", "dropdown-menu"], [3, "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngxPermissionsOnly"], [3, "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["href", "javascript:void(0);", "class", "ant-menu-submenu-title p-l-50", 4, "ngIf"], ["class", "p-l-30", 3, "routerLink", "click", 4, "ngIf"], ["href", "javascript:void(0);", 1, "ant-menu-submenu-title", "p-l-50"], [1, "p-l-30", 3, "routerLink", "click"], ["href", "javascript:void(0);", "class", "ant-menu-submenu-title p-l-70", "style", "margin-left: -4px !important;", 4, "ngIf"], ["class", "p-l-50", 3, "routerLink", "queryParams", "click", 4, "ngIf"], ["href", "javascript:void(0);", 1, "ant-menu-submenu-title", "p-l-70", 2, "margin-left", "-4px !important"], [1, "p-l-50", 3, "routerLink", "queryParams", "click"], ["href", "javascript:void(0);", "class", "ant-menu-submenu-title p-l-90", 4, "ngIf"], ["class", "p-l-70", 3, "routerLink", "click", 4, "ngIf"], ["href", "javascript:void(0);", 1, "ant-menu-submenu-title", "p-l-90"], [1, "p-l-70", 3, "routerLink", "click"]],
        template: function SideNavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perfect-scrollbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SideNavComponent_ng_container_2_Template, 2, 1, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c3, ctx.isFolded, ctx.isSideNavDark));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
          }
        },
        directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarComponent"], _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_7__["SideNavDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_permissions__WEBPACK_IMPORTED_MODULE_9__["NgxPermissionsDirective"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_10__["NzPopoverDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideNavComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidenav',
            templateUrl: './side-nav.component.html'
          }]
        }], function () {
          return [{
            type: _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_2__["ThemeConstantService"]
          }, {
            type: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconService"]
          }, {
            type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
          }, {
            type: _globalservices_service__WEBPACK_IMPORTED_MODULE_5__["GlobalservicesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "okld":
    /*!************************************************************!*\
      !*** ./src/app/shared/template/footer/footer.component.ts ***!
      \************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function okld(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      };

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 7,
        vars: 0,
        consts: [[1, "footer"], [1, "footer-content", "justify-content-between"], ["href", "", 1, "text-gray", "m-r-15"], ["href", "", 1, "text-gray"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Term & Conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Privacy & Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "puSG":
    /*!*****************************************************!*\
      !*** ./src/app/shared/routes/full-layout.routes.ts ***!
      \*****************************************************/

    /*! exports provided: FullLayout_ROUTES */

    /***/
    function puSG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FullLayout_ROUTES", function () {
        return FullLayout_ROUTES;
      });

      var FullLayout_ROUTES = [{
        path: 'authentication',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | authentication-authentication-module */
          "authentication-authentication-module").then(__webpack_require__.bind(null,
          /*! ../../authentication/authentication.module */
          "OpKh")).then(function (m) {
            return m.AuthenticationModule;
          });
        }
      }];
      /***/
    },

    /***/
    "quax":
    /*!*****************************************************!*\
      !*** ./src/app/services/custom-http-interceptor.ts ***!
      \*****************************************************/

    /*! exports provided: CustomHttpInterceptor */

    /***/
    function quax(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomHttpInterceptor", function () {
        return CustomHttpInterceptor;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./http.service */
      "N+K7");

      var CustomHttpInterceptor = /*#__PURE__*/function () {
        function CustomHttpInterceptor(message, router, httpService) {
          var _this32 = this;

          _classCallCheck(this, CustomHttpInterceptor);

          this.message = message;
          this.router = router;
          this.httpService = httpService;
          this.token = '';
          this.pendingHTTPRequests$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivationStart"]) {
              // Cancel pending calls
              _this32.cancelPendingRequests();
            }
          });
        }

        _createClass(CustomHttpInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this33 = this;

            var _a;

            var check_status;
            this.httpService.createOnline$().subscribe(function (isOnline) {
              check_status = isOnline; // console.log(check_status)
            });

            if (check_status) {
              if (!req.url.includes("user/auth/")) {
                this.token = (_a = JSON.parse(sessionStorage.getItem('fatakpay_user_data'))) === null || _a === void 0 ? void 0 : _a.token;

                if (this.token) {
                  req = req.clone({
                    setHeaders: {
                      Authorization: "Token ".concat(this.token)
                    }
                  });
                }
              }

              return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.onCancelPendingRequests()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                  if (event.body.result == 0) {
                    _this33.message.error(event.body.errors[0]);
                  } // if(event.body.status_code == 200 && !event.body.success){
                  //   this.message.error(event.body.message[0]);
                  //   return null;
                  // }


                  if (event.body.status_code == 500) {
                    _this33.message.error(event.body.message);

                    return null;
                  }
                }

                return event;
              }), // Handle errors
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                if (error.status == 400) {
                  if (Array.isArray(error.error.message)) {
                    _this33.message.error(error.error.message[0]);
                  } else {
                    _this33.message.error(error.error.message);
                  }
                } else if (error.status == 403) {
                  _this33.message.error("You don't have permission to access this");
                } else {
                  _this33.message.error('Something Went Wrong');
                }

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
              }));
            } else {
              this.message.error('Kindly check your network');
            }
          }
        }, {
          key: "cancelPendingRequests",
          value: function cancelPendingRequests() {
            this.pendingHTTPRequests$.next();
          }
        }, {
          key: "onCancelPendingRequests",
          value: function onCancelPendingRequests() {
            return this.pendingHTTPRequests$.asObservable();
          }
        }]);

        return CustomHttpInterceptor;
      }();

      CustomHttpInterceptor.ɵfac = function CustomHttpInterceptor_Factory(t) {
        return new (t || CustomHttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]));
      };

      CustomHttpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CustomHttpInterceptor,
        factory: CustomHttpInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomHttpInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__["NzMessageService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "thbs":
    /*!**************************************************************************************************!*\
      !*** ./src/app/shared/template/double-confirmation-popup/double-confirmation-popup.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: DoubleConfirmationPopupComponent */

    /***/
    function thbs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoubleConfirmationPopupComponent", function () {
        return DoubleConfirmationPopupComponent;
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


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");

      function DoubleConfirmationPopupComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
        }
      }

      function DoubleConfirmationPopupComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.alertWarning ? "col-md-12 mb-0 text-center" : "col-md-12 text-center mb-5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r1.subTitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function DoubleConfirmationPopupComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r2.alertWarning, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function DoubleConfirmationPopupComponent_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoubleConfirmationPopupComponent_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onCencelCall.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.cancelBtnTxt);
        }
      }

      function DoubleConfirmationPopupComponent_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoubleConfirmationPopupComponent_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.onOkCall.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r4.isbtnLoading)("disabled", ctx_r4.isDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.submitBtnTxt);
        }
      }

      var DoubleConfirmationPopupComponent = /*#__PURE__*/function () {
        function DoubleConfirmationPopupComponent() {
          _classCallCheck(this, DoubleConfirmationPopupComponent);

          this.onOkCall = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onCencelCall = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(DoubleConfirmationPopupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DoubleConfirmationPopupComponent;
      }();

      DoubleConfirmationPopupComponent.ɵfac = function DoubleConfirmationPopupComponent_Factory(t) {
        return new (t || DoubleConfirmationPopupComponent)();
      };

      DoubleConfirmationPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DoubleConfirmationPopupComponent,
        selectors: [["app-double-confirmation-popup"]],
        inputs: {
          title: "title",
          alertWarning: "alertWarning",
          subTitle: "subTitle",
          submitBtnTxt: "submitBtnTxt",
          cancelBtnTxt: "cancelBtnTxt",
          icon: "icon",
          isbtnLoading: "isbtnLoading",
          isDisabled: "isDisabled"
        },
        outputs: {
          onOkCall: "onOkCall",
          onCencelCall: "onCencelCall"
        },
        decls: 9,
        vars: 8,
        consts: [[1, "row", "p-3"], [1, "col-md-12", "d-flex", "justify-content-center", "mb-3"], ["alt", "", "width", "120", "sty", "", 3, "src"], ["class", "col-md-12 d-flex justify-content-center mb-3", 4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "col-md-12 text-center mb-5", 4, "ngIf"], [1, "col-md-12", "d-flex", "justify-content-center"], ["nz-button", "", "nzType", "primary", "nzGhost", "", "class", "mr-3", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "disabled", "click", 4, "ngIf"], [1, "h4", "text-center"], [1, "mb-0", 3, "innerHtml"], [1, "col-md-12", "text-center", "mb-5"], [3, "innerHtml"], ["nz-button", "", "nzType", "primary", "nzGhost", "", 1, "mr-3", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "disabled", "click"]],
        template: function DoubleConfirmationPopupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DoubleConfirmationPopupComponent_div_3_Template, 3, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DoubleConfirmationPopupComponent_div_4_Template, 2, 3, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DoubleConfirmationPopupComponent_div_5_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DoubleConfirmationPopupComponent_button_7_Template, 2, 1, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DoubleConfirmationPopupComponent_button_8_Template, 2, 3, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.icon ? "min-height: 6rem" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alertWarning);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cancelBtnTxt);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitBtnTxt);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3VibGUtY29uZmlybWF0aW9uLXBvcHVwLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoubleConfirmationPopupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-double-confirmation-popup',
            templateUrl: './double-confirmation-popup.component.html',
            styleUrls: ['./double-confirmation-popup.component.css']
          }]
        }], function () {
          return [];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          alertWarning: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          subTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          submitBtnTxt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cancelBtnTxt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onOkCall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onCencelCall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          isbtnLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "u6u5":
    /*!****************************************************!*\
      !*** ./src/app/shared/template/template.module.ts ***!
      \****************************************************/

    /*! exports provided: TemplateModule */

    /***/
    function u6u5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplateModule", function () {
        return TemplateModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared.module */
      "PCNd");
      /* harmony import */


      var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/avatar */
      "ZE2D");
      /* harmony import */


      var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/badge */
      "SKKP");
      /* harmony import */


      var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/radio */
      "bE2y");
      /* harmony import */


      var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/dropdown */
      "Nqz0");
      /* harmony import */


      var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/list */
      "Ff2k");
      /* harmony import */


      var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/drawer */
      "F6ss");
      /* harmony import */


      var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/divider */
      "5vDB");
      /* harmony import */


      var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/switch */
      "EGpF");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./header/header.component */
      "Isfx");
      /* harmony import */


      var _search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./search/search.component */
      "UlaD");
      /* harmony import */


      var _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./quick-view/quick-view.component */
      "ASAD");
      /* harmony import */


      var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./side-nav/side-nav.component */
      "jnn0");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./footer/footer.component */
      "okld");
      /* harmony import */


      var _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../directives/side-nav.directive */
      "IyZr");
      /* harmony import */


      var _services_theme_constant_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../services/theme-constant.service */
      "PQ0Y");
      /* harmony import */


      var src_app_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! src/app/ng-zorro-antd.module */
      "PMIT");
      /* harmony import */


      var _double_confirmation_popup_double_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./double-confirmation-popup/double-confirmation-popup.component */
      "thbs");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./change-password/change-password.component */
      "Kz7f");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var _audit_history_audit_history_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./audit-history/audit-history.component */
      "8NRN");

      var antdModule = [ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__["NzBadgeModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__["NzDropDownModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__["NzListModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_9__["NzDrawerModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_10__["NzDividerModule"], ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_11__["NzSwitchModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonModule"], src_app_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_21__["DemoNgZorroAntdModule"]];

      var TemplateModule = function TemplateModule() {
        _classCallCheck(this, TemplateModule);
      };

      TemplateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TemplateModule
      });
      TemplateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TemplateModule_Factory(t) {
          return new (t || TemplateModule)();
        },
        providers: [_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_20__["ThemeConstantService"]],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"]].concat(antdModule, [ngx_permissions__WEBPACK_IMPORTED_MODULE_25__["NgxPermissionsModule"].forChild()]), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TemplateModule, {
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"], _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_16__["QuickViewComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_17__["SideNavComponent"], _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_19__["SideNavDirective"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__["NzAvatarModule"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_5__["NzBadgeModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_7__["NzDropDownModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__["NzListModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_9__["NzDrawerModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_10__["NzDividerModule"], ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_11__["NzSwitchModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonModule"], src_app_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_21__["DemoNgZorroAntdModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_25__["NgxPermissionsModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_24__["ChangePasswordComponent"], _double_confirmation_popup_double_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_22__["DoubleConfirmationPopupComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"], _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_16__["QuickViewComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_17__["SideNavComponent"], _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_19__["SideNavDirective"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"], _audit_history_audit_history_component__WEBPACK_IMPORTED_MODULE_26__["AuditHistoryComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_24__["ChangePasswordComponent"], _double_confirmation_popup_double_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_22__["DoubleConfirmationPopupComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"], _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_16__["QuickViewComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_17__["SideNavComponent"], _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_19__["SideNavDirective"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"], _audit_history_audit_history_component__WEBPACK_IMPORTED_MODULE_26__["AuditHistoryComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"]].concat(antdModule, [ngx_permissions__WEBPACK_IMPORTED_MODULE_25__["NgxPermissionsModule"].forChild()]),
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"], _quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_16__["QuickViewComponent"], _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_17__["SideNavComponent"], _directives_side_nav_directive__WEBPACK_IMPORTED_MODULE_19__["SideNavDirective"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"]],
            providers: [_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_20__["ThemeConstantService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layouts/full-layout/full-layout.component */
      "Ueqm");
      /* harmony import */


      var _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./layouts/common-layout/common-layout.component */
      "Wdt6");
      /* harmony import */


      var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/routes/full-layout.routes */
      "puSG");
      /* harmony import */


      var _shared_routes_common_layout_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/routes/common-layout.routes */
      "G7zf");
      /* harmony import */


      var _authentication_error_2_error_2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./authentication/error-2/error-2.component */
      "TDnD");

      var appRoutes = [{
        path: '',
        redirectTo: '/dashboard/home',
        pathMatch: 'full'
      }, {
        path: '',
        component: _layouts_common_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_3__["CommonLayoutComponent"],
        children: _shared_routes_common_layout_routes__WEBPACK_IMPORTED_MODULE_5__["CommonLayout_ROUTES"]
      }, {
        path: '',
        component: _layouts_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_2__["FullLayoutComponent"],
        children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__["FullLayout_ROUTES"]
      }, {
        path: '**',
        component: _authentication_error_2_error_2_component__WEBPACK_IMPORTED_MODULE_6__["Error2Component"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
          anchorScrolling: 'enabled',
          scrollPositionRestoration: 'enabled'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
              preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
              anchorScrolling: 'enabled',
              scrollPositionRestoration: 'enabled'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "ztfw":
    /*!********************************************************************!*\
      !*** ./src/app/shared/template/side-nav/side-nav-routes.config.ts ***!
      \********************************************************************/

    /*! exports provided: ROUTES */

    /***/
    function ztfw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });

      var ROUTES = [{
        path: '/dashboard/home',
        permission: ['view_dashboard'],
        title: 'Dashboard',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: []
      }, {
        path: 'product-list',
        permission: ['view_product'],
        title: 'Products',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'shopping',
        submenu: [// { 
          //     path: 'product-list',
          //     title: 'View Products', 
          //     iconType: '', 
          //     icon: '',
          //     iconTheme: '',
          //     submenu: [] 
          // },
          // { 
          //     path: 'product/create-product',
          //     title: 'Create New Product', 
          //     iconType: '', 
          //     icon: '',
          //     iconTheme: '',
          //     submenu: [] 
          // }
        ]
      }, {
        path: 'users',
        title: 'Users',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'user',
        permission: ['view_lender', 'view_master_partner', 'view_partner', 'view_new_joinee', 'view_merchant', 'view_partner_dsa', 'view_corporate_employee_details', 'view_attendance', 'view_exit_employee', 'view_notice_period', 'view_action_performed', 'view_employee_list'],
        submenu: [{
          path: 'lenders',
          title: 'Lenders',
          iconType: '',
          icon: '',
          iconTheme: '',
          permission: ['view_lender'],
          submenu: []
        }, {
          path: 'masters-partners',
          title: 'Master Partners',
          iconType: '',
          icon: '',
          iconTheme: '',
          permission: ['view_master_partner'],
          submenu: []
        }, {
          path: 'partners',
          title: 'Corporate',
          iconType: '',
          icon: '',
          iconTheme: '',
          permission: ['view_partner'],
          submenu: []
        }, {
          path: 'employeeDetail',
          title: 'User Employee Details',
          iconType: '',
          icon: '',
          iconTheme: '',
          permission: ['view_corporate_employee_details', 'view_attendance', 'view_exit_employee', 'view_notice_period', 'view_action_performed', 'view_employee_list', 'view_new_joinee'],
          submenu: []
        }, {
          path: 'merchants',
          title: 'Merchants',
          iconType: '',
          icon: '',
          permission: ['view_merchant', 'view_partner_dsa'],
          iconTheme: '',
          submenu: [{
            path: 'merchants/list',
            title: 'Merchants',
            iconType: '',
            icon: '',
            iconTheme: '',
            permission: ['view_merchant'],
            submenu: []
          }, {
            path: 'merchants/DSA',
            title: 'Partner DSA',
            iconType: '',
            icon: '',
            iconTheme: '',
            permission: ['view_partner_dsa'],
            submenu: []
          }]
        }]
      }, {
        path: 'employees',
        title: 'Employees',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_employee'],
        icon: 'user',
        submenu: []
      }, {
        path: 'super-app-user',
        title: 'Super App Users',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_employee'],
        icon: 'usergroup-add',
        submenu: []
      }, {
        path: 'applications',
        title: 'Application',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_form_filling_application', 'view_pre_approved_application', 'view_document_upload_application', 'view_underwriting_application', 'view_applicants', 'view_nbfc_approval_application', 'view_offer_proposed_application', 'view_offer_acceptance_application', 'view_e_sining_application', 'view_disbursement_application', 'view_dormant_application', 'view_closed_application'],
        icon: 'picture',
        submenu: [// {
        //     path: 'otp-list',
        //     title: 'OTP List',
        //     iconType: 'nzIcon',
        //     iconTheme: 'outline',
        //     permission: [''],
        //     icon: 'file',
        //     submenu: []
        // },
        {
          path: 'otp-list',
          title: 'UNREGISTERED',
          iconType: '',
          icon: '',
          iconTheme: '',
          permission: [''],
          submenu: []
        }, {
          path: 'applications/all-application',
          title: 'All Applicants',
          iconType: '',
          icon: '',
          iconTheme: '',
          permission: ['view_applicants'],
          submenu: []
        }, {
          path: 'applications/corporate-stage',
          title: 'Employee List',
          iconType: '',
          icon: '',
          iconTheme: '',
          permission: [''],
          submenu: []
        }, {
          path: 'applications/form-filling',
          title: 'Form Filling',
          iconType: '',
          icon: '',
          iconTheme: '',
          permission: ['view_form_filling_application'],
          submenu: []
        }, {
          path: 'applications/document-upload',
          title: 'Document Upload',
          iconType: '',
          icon: '',
          permission: ['view_document_upload_application'],
          iconTheme: '',
          submenu: []
        }, {
          path: 'applications/document-pending',
          title: 'Document Pending',
          iconType: '',
          icon: '',
          permission: [''],
          iconTheme: '',
          submenu: []
        }, {
          path: 'applications/pre-approved',
          title: 'Document verification',
          iconType: '',
          icon: '',
          iconTheme: '',
          permission: ['view_pre_approved_application'],
          submenu: []
        }, {
          path: 'applications/underwriting',
          title: 'Underwriting',
          iconType: '',
          icon: '',
          permission: ['view_underwriting_application'],
          iconTheme: '',
          submenu: []
        }, {
          path: 'applications/nbfc-approval',
          title: 'NBFC Approval',
          iconType: '',
          icon: '',
          iconTheme: '',
          permission: ['view_nbfc_approval_application'],
          submenu: []
        }, {
          path: 'applications/offer-proposed',
          title: 'Offer Proposed',
          iconType: '',
          icon: '',
          iconTheme: '',
          permission: ['view_offer_proposed_application'],
          submenu: []
        }, {
          path: 'applications/offer-acceptance',
          title: 'Offer Acceptance',
          iconType: '',
          icon: '',
          iconTheme: '',
          permission: ['view_offer_acceptance_application'],
          submenu: []
        }, {
          path: 'applications/e-signing',
          title: 'E-Nach/Signing',
          iconType: '',
          icon: '',
          permission: ['view_e_sining_application'],
          iconTheme: '',
          submenu: []
        }, {
          path: 'applications/disbursement',
          title: 'Disbursement',
          iconType: '',
          icon: '',
          permission: ['view_disbursement_application'],
          iconTheme: '',
          submenu: []
        }, {
          path: 'applications/rejected',
          title: 'Rejected',
          iconType: '',
          icon: '',
          permission: ['view_rejected_application'],
          iconTheme: '',
          submenu: []
        }, // {
        //     path: 'applications/dormant',
        //     title: 'Dormant',
        //     iconType: '',
        //     icon: '',
        //     permission: ['view_dormant_application'],
        //     // permission: ['view_dormant_application'],
        //     iconTheme: '',
        //     submenu: []
        // },
        {
          path: 'applications/closed',
          title: 'Closed',
          iconType: '',
          icon: '',
          permission: ['view_closed_application'],
          iconTheme: '',
          submenu: []
        }]
      }, {
        path: 'lms',
        title: 'LMS',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_borrowers', 'view_change_bill_date', 'view_transaction', 'view_manual_transaction', 'view_athorization_policy', 'view_borrowers', 'view_change_credit_line', 'view_lender_management'],
        icon: 'file',
        submenu: [{
          path: 'lms/borrowers',
          title: 'Borrowers',
          iconType: '',
          icon: '',
          iconTheme: '',
          permission: ['view_borrowers'],
          submenu: [{
            path: 'lms/borrowers/all',
            title: 'All',
            iconType: '',
            icon: '',
            iconTheme: '',
            permission: ['view_borrowers'],
            submenu: []
          }, // {
          //     path: 'lms/borrowers/activation',
          //     title: 'Activation',
          //     iconType: '',
          //     icon: '',
          //     iconTheme: '',
          //     permission: ['view_borrowers'],
          //     submenu: []
          // },
          {
            path: 'lms/borrowers/active',
            title: 'Active',
            iconType: '',
            icon: '',
            iconTheme: '',
            permission: ['view_borrowers'],
            submenu: []
          }, {
            path: 'lms/borrowers/inactive',
            title: 'Inactive',
            iconType: '',
            icon: '',
            iconTheme: '',
            permission: ['view_borrowers'],
            submenu: []
          }, // {
          //     path: 'lms/borrowers/delinquent',
          //     title: 'Deliquent',
          //     iconType: '',
          //     icon: '',
          //     iconTheme: '',
          //     permission: ['view_borrowers'],
          //     submenu: []
          // },
          {
            path: 'lms/borrowers/close',
            title: 'Close',
            iconType: '',
            icon: '',
            iconTheme: '',
            permission: ['view_borrowers'],
            submenu: []
          }]
        }, {
          path: 'emi',
          title: 'EMI',
          iconType: '',
          iconTheme: '',
          permission: ['view_borrowers', 'view_change_bill_date', 'view_transaction', 'view_manual_transaction', 'view_athorization_policy', 'view_borrowers', 'view_change_credit_line', 'view_lender_management'],
          icon: '',
          submenu: [{
            path: 'emi/offline-emi',
            title: 'Offline EMI',
            iconType: '',
            icon: '',
            iconTheme: '',
            permission: [''],
            submenu: []
          }, {
            path: 'lms/emi/emi-borrowers',
            title: 'EMI Borrowers',
            iconType: '',
            icon: '',
            iconTheme: '',
            permission: [''],
            submenu: []
          }, {
            path: 'lms/emi/emi-eligibility',
            title: 'EMI Eligibility',
            iconType: '',
            icon: '',
            iconTheme: '',
            permission: [''],
            submenu: []
          }]
        }, {
          path: '',
          title: 'ECM Actions',
          iconType: '',
          icon: '',
          iconTheme: '',
          permission: [''],
          submenu: [// {
          //     path: '',
          //     title: 'Restructuring',
          //     iconType: '',
          //     icon: '',
          //     iconTheme: '',
          //     permission: [''],
          //     submenu: []
          // },
          {
            path: 'lms/change-bill-date',
            title: 'Change Bill date',
            iconType: '',
            icon: '',
            iconTheme: '',
            permission: ['view_change_bill_date'],
            submenu: []
          }, {
            path: 'lms/change-credit-line',
            title: 'Change Credit Line',
            iconType: '',
            icon: '',
            permission: ['view_change_credit_line'],
            iconTheme: '',
            submenu: []
          }, {
            path: 'lms/authorization-policy',
            title: 'Authorization Policy',
            iconType: '',
            icon: '',
            permission: ['view_athorization_policy'],
            iconTheme: '',
            submenu: []
          }, {
            path: 'lms/send-payment-link',
            title: 'Send Payment Link',
            iconType: '',
            icon: '',
            permission: ['view_send_payment_link'],
            iconTheme: '',
            submenu: []
          }, {
            path: 'lms/mandate-triggers',
            title: 'Mandate triggers',
            iconType: '',
            icon: '',
            permission: ['view_mandate trigger '],
            iconTheme: '',
            submenu: []
          }, {
            path: 'lms/risk-policy',
            title: 'Risk Policy',
            iconType: '',
            icon: '',
            permission: ['view_borrowers'],
            iconTheme: '',
            submenu: []
          }, {
            path: 'lms/nach-upload',
            title: 'Nach upload',
            iconType: '',
            icon: '',
            permission: ['view_nach_upload'],
            iconTheme: '',
            submenu: []
          }, {
            path: 'lms/cli',
            title: 'CLI',
            iconType: '',
            icon: '',
            permission: [''],
            iconTheme: '',
            submenu: []
          }, {
            path: 'lms/transaction-remarks',
            title: 'Transaction remarks',
            iconType: '',
            icon: '',
            permission: [''],
            iconTheme: '',
            submenu: []
          }]
        }, {
          path: '',
          title: 'Transactions',
          iconType: '',
          icon: '',
          iconTheme: '',
          permission: [''],
          submenu: [{
            path: 'lms/transactions',
            title: 'Transactions Data',
            iconType: '',
            icon: '',
            iconTheme: '',
            permission: ['view_transaction'],
            submenu: []
          }, // {
          //     path: '',
          //     title: 'Repayments',
          //     iconType: '',
          //     icon: '',
          //     permission: [''],
          //     iconTheme: '',
          //     submenu: []
          // },
          {
            path: 'lms/manual-transaction',
            title: 'Manual Transactions',
            iconType: '',
            permission: ['view_manual_transaction'],
            icon: '',
            iconTheme: '',
            submenu: []
          }, {
            path: 'accounting/escrow-statement',
            title: 'Escrow Statement',
            permission: ['view_escrow_statement'],
            iconType: '',
            icon: '',
            iconTheme: '',
            submenu: []
          }, {
            path: 'lms/expense-management',
            title: 'Corporate Expense',
            iconType: '',
            icon: '',
            iconTheme: '',
            permission: ['view _corporate expense'],
            submenu: []
          }, {
            path: 'lms/deductions',
            title: 'Deduction Approvals',
            iconType: '',
            icon: '',
            iconTheme: '',
            permission: ['view_deduction approval'],
            submenu: []
          }, {
            path: 'lms/transaction-action',
            title: 'Transaction Action',
            iconType: '',
            icon: '',
            iconTheme: '',
            permission: ['view_deduction approval'],
            submenu: []
          }, {
            path: '',
            title: 'BBPS',
            iconType: '',
            icon: '',
            permission: [''],
            iconTheme: '',
            submenu: [{
              path: 'lms/bbps/category',
              title: 'Category data',
              iconType: '',
              icon: '',
              permission: [''],
              iconTheme: '',
              submenu: []
            }, {
              path: 'lms/bbps/billers',
              title: 'Billers data',
              iconType: '',
              icon: '',
              permission: [''],
              iconTheme: '',
              submenu: []
            }]
          }]
        }, {
          path: '',
          title: 'Metrics',
          iconType: '',
          icon: '',
          iconTheme: '',
          permission: [''],
          submenu: [{
            path: 'lms/dpd-days',
            title: 'DPD Days',
            iconType: '',
            icon: '',
            iconTheme: '',
            permission: ['view_dpd'],
            submenu: []
          }, {
            path: 'lms/billed-unbilled-data',
            title: 'Billed data',
            iconType: '',
            icon: '',
            permission: ['view_billed '],
            iconTheme: '',
            submenu: []
          }, {
            path: 'lms/refunds',
            title: 'Refunds',
            iconType: '',
            icon: '',
            permission: ['view_refund'],
            iconTheme: '',
            submenu: []
          }, {
            path: 'lms/bill-summarization',
            title: 'Bill summarization',
            iconType: '',
            icon: '',
            permission: ['view_bill_summerization'],
            iconTheme: '',
            submenu: []
          }, {
            path: 'lms/insurance',
            title: 'Insurance',
            iconType: '',
            icon: '',
            permission: ['view_insurance'],
            iconTheme: '',
            submenu: []
          }]
        }, {
          path: 'lms/lender-management',
          title: 'Lender Management',
          permission: ['view_lender_management'],
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        }]
      }, {
        path: '/accounting',
        title: 'Accounting',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_gst_invoice', 'view_escrow_statement'],
        icon: 'file',
        submenu: [{
          path: 'accounting/gst-invoices',
          title: 'GST invoice',
          permission: ['view_gst_invoice'],
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        }]
      }, {
        path: '/black-box',
        title: 'Black box testing',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_black_box'],
        icon: 'file',
        submenu: []
      }, {
        path: '/dormant',
        title: 'Application Stage Trigger',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['update_dormant_stage'],
        icon: 'file',
        submenu: []
      }, {
        path: 'cashback-program',
        title: 'Cashback Program Statistics',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_corporate_cashback_program'],
        icon: 'tags',
        submenu: []
      }, {
        path: 'coupon-code',
        title: 'Coupon Code',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_coupon_code'],
        icon: 'tags',
        submenu: []
      }, {
        path: 'edit-employee-permission',
        title: 'Access control',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_employee_permission', 'view_role', 'add_role', 'edit_role', 'delete_role'],
        icon: 'key',
        submenu: []
      }, {
        path: 'third-party-api-call',
        title: 'API buckets Statistics',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_api_statistics'],
        icon: 'file',
        submenu: []
      }, // {
      //     path: 'otp-list',
      //     title: 'OTP List',
      //     iconType: 'nzIcon',
      //     iconTheme: 'outline',
      //     permission: [''],
      //     icon: 'file',
      //     submenu: []
      // },
      {
        path: 'version',
        title: 'Version',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_version'],
        icon: 'key',
        submenu: []
      }, // <i nz-icon nzType="snippets" nzTheme="outline"></i>
      {
        path: 'reports',
        title: 'Reports',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: ['view_reports'],
        icon: 'snippets',
        submenu: []
      }, {
        path: 'downloads',
        title: 'Downloads',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        permission: [''],
        icon: 'snippets',
        submenu: []
      }]; // {
      //     path: 'lms',
      //     title: 'LMS',
      //     iconType: 'nzIcon',
      //     iconTheme: 'outline',
      //     permission: ['view_borrowers', 'view_change_bill_date', 'view_transaction', 'view_manual_transaction', 'view_athorization_policy', 'view_borrowers', 'view_change_credit_line', 'view_lender_management'],
      //     icon: 'file',
      //     submenu: [
      //         {
      //             path: 'lms/lender-management',
      //             title: 'Lender Management',
      //             permission: ['view_lender_management'],
      //             iconType: '',
      //             icon: '',
      //             iconTheme: '',
      //             submenu: []
      //         },
      //     ]
      // },

      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map