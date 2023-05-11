(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
    /***/
    "Oy4E":
    /*!*******************************************************!*\
      !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: DashboardRoutingModule */

    /***/
    function Oy4E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
        return DashboardRoutingModule;
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


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard.component */
      "QX6l");

      var routes = [{
        path: 'home',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"]],
        data: {
          title: 'Dashboard ',
          permissions: {
            only: 'view_dashboard',
            redirectTo: 'authentication/error-2'
          }
        }
      }];

      var DashboardRoutingModule = function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      };

      DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DashboardRoutingModule
      });
      DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DashboardRoutingModule_Factory(t) {
          return new (t || DashboardRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
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
    "QX6l":
    /*!**************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.ts ***!
      \**************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function QX6l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/services/theme-constant.service */
      "PQ0Y");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/tooltip */
      "nJia");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/badge */
      "SKKP");
      /* harmony import */


      var ng_chartjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-chartjs */
      "jdj2");
      /* harmony import */


      var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/table */
      "rMZv");
      /* harmony import */


      var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/radio */
      "bE2y");

      function DashboardComponent_nz_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 55);
        }

        if (rf & 2) {
          var item_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r36.pk)("nzLabel", item_r36.name);
        }
      }

      function DashboardComponent_div_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Total App Downloads ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "canvas", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.fetchedList["acquisition"] == null ? null : ctx_r1.fetchedList["acquisition"].app_downloads);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.customersChartData)("labels", ctx_r1.customersChartLabels)("chartType", ctx_r1.customersChartType)("colors", ctx_r1.customersChartColors)("options", ctx_r1.customersChartOptions)("legend", false);
        }
      }

      function DashboardComponent_div_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No Data To Show");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canvas", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r2.dummyData)("labels", ctx_r2.dummyDataLabels)("chartType", ctx_r2.customersChartType)("colors", ctx_r2.dummyDataColors)("options", ctx_r2.customersChartOptions)("legend", false);
        }
      }

      function DashboardComponent_ng_template_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Application ");
        }
      }

      function DashboardComponent_div_111_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Total Corporate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "canvas", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.fetchedList["corporate"] == null ? null : ctx_r5.fetchedList["corporate"].total_corporate_count);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r5.corporateChartData)("labels", ctx_r5.corporateChartLabels)("chartType", ctx_r5.customersChartType)("colors", ctx_r5.corporateChartColors)("options", ctx_r5.customersChartOptions)("legend", false);
        }
      }

      function DashboardComponent_div_112_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No Data To Show");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canvas", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r6.dummyData)("labels", ctx_r6.dummyDataLabels)("chartType", ctx_r6.customersChartType)("colors", ctx_r6.dummyDataColors)("options", ctx_r6.customersChartOptions)("legend", false);
        }
      }

      function DashboardComponent_ng_template_113_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Corporate ");
        }
      }

      function DashboardComponent_ng_template_199_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Borrowers ");
        }
      }

      function DashboardComponent_ng_template_353_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Repayments ");
        }
      }

      function DashboardComponent_tr_369_Template(rf, ctx) {
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
          var data_r37 = ctx.$implicit;
          var i_r38 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r38 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r37 == null ? null : data_r37.number_of_days);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r37 == null ? null : data_r37.number_of_user);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (data_r37 == null ? null : data_r37.total_amount) ? "\u20B9 " + (data_r37 == null ? null : data_r37.total_amount) : " 0 ", " ");
        }
      }

      function DashboardComponent_ng_template_386_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delinquent ");
        }
      }

      function DashboardComponent_ng_template_388_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_388_Template_nz_radio_group_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r39.onChangeTab($event, "delinquent");
          })("ngModelChange", function DashboardComponent_ng_template_388_Template_nz_radio_group_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r41.selectedTab["delinquent"] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Start of Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.selectedTab["delinquent"]);
        }
      }

      function DashboardComponent_ng_template_390_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_390_Template_nz_radio_group_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r42.onChangeTab($event, "nbfc");
          })("ngModelChange", function DashboardComponent_ng_template_390_Template_nz_radio_group_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r44.selectedTab["nbfc"] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Overall");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r19.selectedTab["nbfc"]);
        }
      }

      function DashboardComponent_ng_template_392_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_392_Template_nz_radio_group_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r45.onChangeTab($event, "authorization");
          })("ngModelChange", function DashboardComponent_ng_template_392_Template_nz_radio_group_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r47.selectedTab["authorization"] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r21.selectedTab["authorization"]);
        }
      }

      function DashboardComponent_ng_template_394_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_394_Template_nz_radio_group_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r48.onChangeTab($event, "acquisition");
          })("ngModelChange", function DashboardComponent_ng_template_394_Template_nz_radio_group_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r50.selectedTab["acquisition"] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Overall");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.selectedTab["acquisition"]);
        }
      }

      function DashboardComponent_ng_template_396_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_396_Template_nz_radio_group_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r51.onChangeTab($event, "corporate");
          })("ngModelChange", function DashboardComponent_ng_template_396_Template_nz_radio_group_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r53.selectedTab["corporate"] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Overall");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.selectedTab["corporate"]);
        }
      }

      function DashboardComponent_ng_template_398_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_398_Template_nz_radio_group_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r54.onChangeTab($event, "repayment");
          })("ngModelChange", function DashboardComponent_ng_template_398_Template_nz_radio_group_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r56.selectedTab["repayment"] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r27.selectedTab["repayment"]);
        }
      }

      function DashboardComponent_ng_template_400_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_400_Template_nz_radio_group_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r57.onChangeTab($event, "mandate");
          })("ngModelChange", function DashboardComponent_ng_template_400_Template_nz_radio_group_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r59.selectedTab["mandate"] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Overall");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r29.selectedTab["mandate"]);
        }
      }

      function DashboardComponent_ng_template_402_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_402_Template_nz_radio_group_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r60.onChangeTab($event, "existing");
          })("ngModelChange", function DashboardComponent_ng_template_402_Template_nz_radio_group_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r62.selectedTab["existing"] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Overall");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r31.selectedTab["existing"]);
        }
      }

      function DashboardComponent_ng_template_404_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_ng_template_404_Template_nz_radio_group_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r63.onChangeTab($event, "authorization");
          })("ngModelChange", function DashboardComponent_ng_template_404_Template_nz_radio_group_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r65.selectedTab["authorization"] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r33.selectedTab["authorization"]);
        }
      }

      function DashboardComponent_ng_template_406_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Authorization\n");
        }
      }

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(colorConfig, router, http) {
          _classCallCheck(this, DashboardComponent);

          this.colorConfig = colorConfig;
          this.router = router;
          this.http = http;
          this.themeColors = this.colorConfig.get().colors; // gray

          this.gray = this.themeColors.limeLight;
          this.skyblue = this.themeColors.skyblue;
          this.blue = this.themeColors.blue;
          this.blueLight = this.themeColors.blueLight;
          this.pink = this.themeColors.pink;
          this.cyan = this.themeColors.cyan;
          this.cyanLight = this.themeColors.cyanLight;
          this.gold = this.themeColors.gold;
          this.purple = this.themeColors.purple;
          this.purpleLight = this.themeColors.purpleLight;
          this.red = this.themeColors.red;
          this.customersChartData = [350, 450, 100];
          this.corporateChartData = [350, 450, 100, 243];
          this.mandateChartData = [350, 450, 100, 243];
          this.dummyData = [1];
          this.dummyDataLabels = ['No Data To Show'];
          this.dummyDataColors = [{
            backgroundColor: [this.gray],
            pointBackgroundColor: [this.gray]
          }];
          this.customersChartLabels = ['Registered Users (Tie-up Corporate)', 'Disbursed User', 'Registered Users'];
          this.corporateChartLabels = ['Fixed product Count', 'EWA count'];
          this.mandateChartLabels = ['Aadhar Mandate', 'Debit Card Mandate', 'Net Banking Mandate', 'Upi Mandate'];
          this.customersChartType = 'doughnut'; // , this.cyan

          this.customersChartColors = [{
            backgroundColor: [this.gold, this.pink, this.purple],
            pointBackgroundColor: [this.gold, this.pink, this.purple]
          }];
          this.corporateChartColors = [{
            backgroundColor: [this.pink, this.purple, this.gold],
            pointBackgroundColor: [this.pink, this.purple, this.gold]
          }];
          this.mandateChartColors = [{
            backgroundColor: [this.cyan, this.purple, this.gold, this.pink, this.blue],
            pointBackgroundColor: [this.cyan, this.purple, this.gold, this.pink, this.blue]
          }];
          this.customersChartOptions = {
            cutoutPercentage: 75,
            maintainAspectRatio: false
          };
          this.revenueChartFormat = 'revenueMonth';
          this.revenueChartData = [{
            data: [30, 60, 40, 50, 40, 55, 85, 65, 75, 50, 70],
            label: 'Series A'
          }];
          this.currentrevenueChartLabelsIdx = 1;
          this.revenueChartLabels = ["16th", "17th", "18th", "19th", "20th", "21th", "22th", "23th", "24th", "25th", "26th"];
          this.revenueChartOptions = {
            maintainAspectRatio: false,
            responsive: true,
            hover: {
              mode: 'nearest',
              intersect: true
            },
            tooltips: {
              mode: 'index'
            },
            scales: {
              xAxes: [{
                gridLines: [{
                  display: false
                }],
                ticks: {
                  display: false,
                  fontColor: this.themeColors.grayLight,
                  fontSize: 13,
                  padding: 10
                }
              }],
              yAxes: [{
                gridLines: {
                  drawBorder: false,
                  drawTicks: false,
                  borderDash: [3, 4],
                  zeroLineWidth: 1,
                  zeroLineBorderDash: [3, 4]
                },
                ticks: {
                  display: false,
                  max: 100,
                  stepSize: 100,
                  fontColor: this.themeColors.grayLight,
                  fontSize: 13,
                  padding: 10
                }
              }]
            }
          };
          this.revenueChartColors = [{
            backgroundColor: this.themeColors.transparent,
            borderColor: this.blue,
            pointBackgroundColor: this.blue,
            pointBorderColor: this.themeColors.white,
            pointHoverBackgroundColor: this.blueLight,
            pointHoverBorderColor: this.blueLight
          }];
          this.revenueChartType = 'line';
          this.avgProfitChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                display: true,
                stacked: true,
                scaleLabel: {
                  display: false,
                  labelString: 'Month'
                },
                gridLines: false,
                ticks: {
                  display: true,
                  beginAtZero: true,
                  fontSize: 13,
                  padding: 10
                }
              }],
              yAxes: [{
                display: true,
                stacked: true,
                scaleLabel: {
                  display: false,
                  labelString: 'Value'
                },
                gridLines: {
                  drawBorder: true,
                  offsetGridLines: true,
                  drawTicks: true,
                  borderDash: [3, 4],
                  zeroLineWidth: 1,
                  zeroLineBorderDash: [3, 4]
                },
                ticks: {
                  stepSize: 0,
                  display: true,
                  beginAtZero: true,
                  fontSize: 13,
                  padding: 4,
                  callback: function callback(value, index, values) {
                    // return value + ' Lacs';
                    var val;
                    val = Math.abs(value);

                    if (val >= 10000000) {
                      val = (val / 10000000).toFixed(2) + " Cr";
                    } else if (val >= 100000) {
                      val = (val / 100000).toFixed(2) + " Lacs";
                    }

                    return val;
                  }
                }
              }]
            }
          };
          this.avgProfitChartLabels = ['Total Commitments', 'Line Assigned', 'Fund Transfer to Escrow', 'Total O/S Balance to NBFC', 'Fund Available in Escrow', 'Unutilized Credit Line']; // avgProfitChartLabels: string[] = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

          this.avgProfitChartType = 'bar';
          this.avgProfitChartLegend = false;
          this.avgProfitChartColors = [{
            backgroundColor: '#55268E',
            borderWidth: 10
          }];
          this.avgProfitChartData = [{
            data: [3200, 2100, 2507, 8008, 9543, 5044],
            type: "bar",
            categoryPercentage: 0.3,
            barPercentage: 0.5
          }];
          this.selectedTab = {
            'delinquent': 'Today',
            'nbfc': 'Today',
            'authorization': 'Today',
            'existing': 'this month',
            'acquisition': 'today',
            'mandate': 'today',
            'corporate': 'this month',
            'repayment': 'today'
          };
          this.fetchedList = {
            'delinquent': null,
            'nbfc': null,
            'authorization': null,
            'acquisition': null,
            'existing': null,
            'mandate': null
          };
          this.isLoading = {
            'delinquent': false,
            'nbfc': false,
            'authorization': false,
            'acquisition': false,
            'existing': false,
            'mandate': false,
            'repayment': false,
            'corporate': false
          }; // Bar Chart 

          this.creditHistoryChartData = [];
          this.creditHistoryChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            scales: {
              xAxes: [{
                gridLines: {
                  display: false
                }
              }],
              yAxes: [{
                gridLines: {
                  display: true,
                  borderDash: [3, 4]
                },
                ticks: {
                  stepSize: 0,
                  beginAtZero: true,
                  callback: function callback(value, index, values) {
                    return value;
                  }
                }
              }]
            },
            cornerRadius: 100,
            plugins: {
              labels: {
                render: 'value'
              }
            },
            legend: {
              position: 'bottom',
              labels: {
                fontColor: 'black',
                boxWidth: 20,
                padding: 20,
                fontFamily: 'Poppins',
                fontSize: 13
              }
            },
            animation: {
              animateScale: true,
              animateRotate: true
            }
          }; // 2nd log

          this.barChartData = [{
            data: [],
            label: "Series A",
            categoryPercentage: 0.35,
            barPercentage: 0.7
          }];
          this.barChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          this.barChartType = "bar";
          this.barChartLegend = false;
          this.barChartColors = [// {
          //   backgroundColor: this.purple,
          // },
          {
            backgroundColor: this.purple
          }]; // *************Bar Chart Data******************

          this.barChartOptions = {
            // scaleShowVerticalLines: false,
            tooltips: {
              // mode: 'index',
              // intersect: false,
              enabled: false
            },
            "hover": {
              "animationDuration": 0
            },
            "animation": {
              "duration": 1,
              "onComplete": function onComplete() {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx; // ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);

                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                this.data.datasets.forEach(function (dataset, i) {
                  var meta = chartInstance.controller.getDatasetMeta(i);
                  meta.data.forEach(function (bar, index) {
                    if ((bar === null || bar === void 0 ? void 0 : bar._datasetIndex) !== 1) {
                      if (dataset.data[index] !== 'undefined') {
                        var val;
                        val = Math.abs(dataset.data[index]);

                        if (val >= 10000000) {
                          val = (val / 10000000).toFixed(2) + " Cr";
                        } else if (val >= 100000) {
                          val = (val / 100000).toFixed(2) + " Lacs";
                        }
                      }

                      var data = val; // 'Total Spends: ' +

                      ctx.fillText(data, bar._model.x, bar._model.y - 5);
                    }
                  });
                });
              }
            },
            plugins: {
              datalabels: {
                anchor: 'end',
                align: 'top',
                formatter: Math.round,
                font: {
                  weight: 'bold'
                }
              }
            },
            responsive: true,
            scales: {
              xAxes: [{
                display: true,
                stacked: true,
                scaleLabel: {
                  display: false,
                  labelString: "Month"
                },
                gridLines: false,
                ticks: {
                  display: true,
                  beginAtZero: true,
                  fontSize: 10,
                  padding: 10
                }
              }],
              yAxes: [{
                display: true,
                stacked: false,
                responsive: true,
                gridLines: {
                  drawBorder: true,
                  offsetGridLines: true,
                  drawTicks: true,
                  borderDash: [3, 4],
                  zeroLineWidth: 1,
                  zeroLineBorderDash: [3, 4]
                },
                ticks: {
                  stepSize: 0,
                  display: true,
                  beginAtZero: true,
                  fontSize: 13,
                  padding: 4,
                  callback: function callback(value, index, values) {
                    // return value + ' Lacs';
                    var val;
                    val = Math.abs(value);

                    if (val >= 10000000) {
                      val = (val / 10000000).toFixed(2) + " Cr";
                    } else if (val >= 100000) {
                      val = (val / 100000).toFixed(2) + " Lacs";
                    }

                    return val;
                  }
                }
              }]
            }
          };
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!sessionStorage.getItem('fatakpay_user_data')) {
              return;
            }

            this.onFocusMethod(); // let data = {
            //     // 'datapoint': 'dashboard_acquisition',
            //     // 'source': 'LMS',
            //         // 'time_filter': 'overall'
            //     'time_filter': this.selectedTab['mandate']
            // }
            // this.http.getDetailForDashboardMandate(data).subscribe((res?: any)=> {
            //     console.log(res)
            // })

            this.getMandateData();
            this.getAuthorizationList();
            this.getNBFCList();
            this.getDelinquentList();
            this.getExistingList();
            this.getCorporateList();
            this.getRepaymentList();
            this.getAcquisitionList();
            this.fetchBorrowersGraph();
          }
        }, {
          key: "getAuthorizationList",
          value: function getAuthorizationList() {
            var _this = this;

            this.isLoading['authorization'] = true;
            var data = {
              'datapoint': 'dashboard_authorisation',
              'source': 'LMS',
              'filter_type': this.selectedTab['authorization']
            };

            if (this.partner) {
              data['partner'] = this.partner;
            }

            this.http.getDetailForDashboardAPI(data).subscribe(function (res) {
              _this.fetchedList['authorization'] = res === null || res === void 0 ? void 0 : res.data;
              _this.isLoading['authorization'] = false;
            }, function (err) {
              _this.isLoading['authorization'] = false;
            });
          }
        }, {
          key: "onChangeTab",
          value: function onChangeTab(e, action) {
            if (action == 'nbfc') {
              this.selectedTab['nbfc'] = e;
              this.getNBFCList();
            } else if (action == 'delinquent') {
              this.selectedTab['delinquent'] = e;
              this.getDelinquentList();
            } else if (action == 'authorization') {
              this.selectedTab['authorization'] = e;
              this.getAuthorizationList();
            } else if (action == 'existing') {
              this.selectedTab['existing'] = e;
              this.getExistingList();
            } else if (action == 'acquisition') {
              this.selectedTab['acquisition'] = e;
              this.getAcquisitionList();
            } else if (action == 'mandate') {
              this.selectedTab['mandate'] = e;
              this.getMandateData();
            } else if (action == 'corporate') {
              this.selectedTab['corporate'] = e;
              this.getCorporateList();
            } else if (action == 'repayment') {
              this.selectedTab['repayment'] = e;
              this.getRepaymentList();
            } // 'acquisition': false,
            // 'existing': false,

          }
        }, {
          key: "getDelinquentList",
          value: function getDelinquentList() {
            var _this2 = this;

            this.isLoading['delinquent'] = true; // this.customersChartData = [];

            var data = {
              'datapoint': 'dashboard_delinquent',
              'source': 'LMS',
              'filter_type': this.selectedTab['delinquent']
            };

            if (this.partner) {
              data['partner'] = this.partner;
            }

            this.http.getDetailForDashboardAPI(data).subscribe(function (res) {
              _this2.fetchedList['delinquent'] = res === null || res === void 0 ? void 0 : res.data; // customersChartData: number[] = [350, 450, 100, 243];
              // customersChartLabels: string[] = ['New', 'Returning', 'Others', 'blue'];

              _this2.isLoading['delinquent'] = false;
            }, function (err) {
              _this2.isLoading['delinquent'] = false;
            });
          }
        }, {
          key: "getExistingList",
          value: function getExistingList() {
            var _this3 = this;

            this.isLoading['existing'] = true;
            var data = {
              'datapoint': 'dashboard_existing',
              'source': 'LMS',
              'filter_type': this.selectedTab['existing']
            };

            if (this.partner) {
              data['partner'] = this.partner;
            }

            this.http.getDetailForDashboardAPI(data).subscribe(function (res) {
              var _a; // this.fetchedList['delinquent'] = res?.data


              _this3.thirty_day_user_activity = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a['30_day_user_activity'];
              _this3.fetchedList['existing'] = res === null || res === void 0 ? void 0 : res.data;
              _this3.isLoading['existing'] = false; // this.designGraph(res?.data?.spend_graph_data);
              // this.fetchBorrowersGraph();
            }, function (err) {
              _this3.isLoading['existing'] = false;
            });
          }
        }, {
          key: "fetchBorrowersGraph",
          value: function fetchBorrowersGraph() {
            var _this4 = this;

            var data = {
              source: 'LMS',
              datapoint: 'dashboard_spends_graph'
            };

            if (this.partner) {
              data['partner'] = this.partner;
            } // return;


            this.http.fetchXMLData(data).subscribe(function (res) {
              var _a;

              _this4.designGraph((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.spend_graph_data);
            });
          }
        }, {
          key: "designGraph",
          value: function designGraph(e) {
            // this.totalUserCountDPDLabels = data.map((val) => {
            //     //  if(val.dpd_count > 0){
            //        return val.label;
            //     // }
            //   });
            //   this.countChartData = [    
            //     {
            //       data: data.map((val) => {
            //         return val.total_line_used;        
            //       }),
            //       label: "DPD Count",
            //       type: "bar",
            //       categoryPercentage: 0.35,
            //       barPercentage: 0.4,
            //      }   
            //   ];
            this.barChartLabels = e.map(function (val) {
              console.log(val);
              return val === null || val === void 0 ? void 0 : val.label;
            }); //  barChartData: any[] = [
            //     {
            //       data: [],
            //       label: "Series A",
            //       categoryPercentage: 0.35,
            //       barPercentage: 0.7,
            //     },
            //   ];

            this.barChartData = [{
              data: e.map(function (val) {
                return val.total_line_used;
              }),
              label: "Total Line Used",
              type: "bar",
              categoryPercentage: 0.35,
              barPercentage: 0.7
            }];
          }
        }, {
          key: "onFocusMethod",
          value: function onFocusMethod(keyword) {
            var _this5 = this;

            // if(keyword){
            // }
            this.http.fetchPartner().subscribe(function (res) {
              var _a, _b;

              _this5.partnerList = (_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.results) === null || _b === void 0 ? void 0 : _b.filter(function (res) {
                if (res === null || res === void 0 ? void 0 : res.name) {
                  return res;
                }
              });
            });
          }
        }, {
          key: "onSearch",
          value: function onSearch(e) {
            console.log(e); // if(e?.length > 3){
            //     this.onFocusMethod(e)
            // }

            console.log(this.partner);
          }
        }, {
          key: "onSelectFetchCorrespondingData",
          value: function onSelectFetchCorrespondingData() {
            // this.resetFilters();
            this.fetchBorrowersGraph();
            this.getDelinquentList();
            this.getNBFCList();
            this.getAuthorizationList();
            this.getExistingList();
            this.getAcquisitionList();
            this.getMandateData();
            this.getCorporateList();
            this.getRepaymentList();
          }
        }, {
          key: "getCorporateList",
          value: function getCorporateList() {
            var _this6 = this;

            this.isLoading['corporate'] = true;
            var data = {
              // 'datapoint': 'dashboard_corporate',
              // 'source': 'LMS',
              'filter_type': this.selectedTab['corporate']
            };

            if (this.partner) {
              data['partner'] = this.partner;
            }

            this.http.getCorporateDashboardList(data).subscribe(function (res) {
              var _a, _b, _c, _d;

              _this6.fetchedList['corporate'] = res === null || res === void 0 ? void 0 : res.data;
              _this6.corporateChartData = [];

              _this6.corporateChartData.push(((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.fixed_count) ? (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.fixed_count : 0);

              _this6.corporateChartData.push(((_c = res === null || res === void 0 ? void 0 : res.data) === null || _c === void 0 ? void 0 : _c.ewa_count) ? (_d = res === null || res === void 0 ? void 0 : res.data) === null || _d === void 0 ? void 0 : _d.ewa_count : 0);

              console.log(_this6.corporateChartData); // this.corporateChartData.push(res?.data?.total_corporate_users_exact_count ? res?.data?.total_corporate_users_exact_count : 0 )
              // this.corporateChartData.push(res?.data?.active_users_exact_count ? res?.data?.active_users_exact_count : 0)
              // this.thirty_day_user_activity = res?.data?.['30_day_user_activity']
              // this.fetchedList['existing'] = res?.data

              _this6.isLoading['corporate'] = false;
            }, function (err) {
              _this6.isLoading['corporate'] = false;
            });
          }
        }, {
          key: "getRepaymentList",
          value: function getRepaymentList() {
            var _this7 = this;

            this.isLoading['repayment'] = true;
            var data = {
              'datapoint': 'dashboard_repayment',
              'source': 'LMS',
              'filter_type': this.selectedTab['repayment']
            }; // if(this.partner){
            //     data['partner'] = this.partner
            // }

            if (this.partner) {
              data['partner'] = this.partner;
            }

            this.http.getDetailForDashboardAPI(data).subscribe(function (res) {
              _this7.fetchedList['repayment'] = res === null || res === void 0 ? void 0 : res.data; // this.thirty_day_user_activity = res?.data?.['30_day_user_activity']

              _this7.fetchedList['repayment'] = res === null || res === void 0 ? void 0 : res.data;
              _this7.isLoading['repayment'] = false;
            }, function (err) {
              _this7.isLoading['repayment'] = false;
            });
          }
        }, {
          key: "getMandateData",
          value: function getMandateData() {
            var _this8 = this;

            this.isLoading['mandate'] = true;
            var data = {
              'time_filter': this.selectedTab['mandate']
            };

            if (this.partner) {
              data['partner'] = this.partner;
            }

            this.http.getDetailForDashboardMandate(data).subscribe(function (res) {
              var _a, _b, _c, _d, _e, _f, _g, _h;

              _this8.fetchedList['mandate'] = res === null || res === void 0 ? void 0 : res.data;
              _this8.mandateChartData = [];

              _this8.mandateChartData.push(((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.aadhar_mandate) ? (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.aadhar_mandate : 0);

              _this8.mandateChartData.push(((_c = res === null || res === void 0 ? void 0 : res.data) === null || _c === void 0 ? void 0 : _c.debitcard_mandate) ? (_d = res === null || res === void 0 ? void 0 : res.data) === null || _d === void 0 ? void 0 : _d.debitcard_mandate : 0);

              _this8.mandateChartData.push(((_e = res === null || res === void 0 ? void 0 : res.data) === null || _e === void 0 ? void 0 : _e.netbanking_mandate) ? (_f = res === null || res === void 0 ? void 0 : res.data) === null || _f === void 0 ? void 0 : _f.netbanking_mandate : 0); // this.mandateChartData.push(res?.data?.total_mandate_done ? res?.data?.total_mandate_done : 0)


              _this8.mandateChartData.push(((_g = res === null || res === void 0 ? void 0 : res.data) === null || _g === void 0 ? void 0 : _g.upi_mandate) ? (_h = res === null || res === void 0 ? void 0 : res.data) === null || _h === void 0 ? void 0 : _h.upi_mandate : 0);

              _this8.isLoading['mandate'] = false;
            }, function (err) {
              _this8.isLoading['mandate'] = false;
            });
          }
        }, {
          key: "getAcquisitionList",
          value: function getAcquisitionList() {
            var _this9 = this;

            this.isLoading['acquisition'] = true;
            var data = {
              'datapoint': 'dashboard_acquisition',
              'source': 'LMS',
              'filter_type': this.selectedTab['acquisition']
            };

            if (this.partner) {
              data['partner'] = this.partner;
            }

            this.http.getDetailForDashboardAPI(data).subscribe(function (res) {
              var _a, _b, _c, _d, _e, _f;

              _this9.fetchedList['acquisition'] = res === null || res === void 0 ? void 0 : res.data;
              _this9.customersChartData = []; // this.customersChartData.push(res?.data?.app_registered_users_exact_count ? res?.data?.app_registered_users_exact_count : 0)

              _this9.customersChartData.push(((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.total_corporate_users_exact_count) ? (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.total_corporate_users_exact_count : 0);

              _this9.customersChartData.push(((_c = res === null || res === void 0 ? void 0 : res.data) === null || _c === void 0 ? void 0 : _c.active_users_exact_count) ? (_d = res === null || res === void 0 ? void 0 : res.data) === null || _d === void 0 ? void 0 : _d.active_users_exact_count : 0);

              _this9.customersChartData.push(((_e = res === null || res === void 0 ? void 0 : res.data) === null || _e === void 0 ? void 0 : _e.all_registered_users_exact_count) ? (_f = res === null || res === void 0 ? void 0 : res.data) === null || _f === void 0 ? void 0 : _f.all_registered_users_exact_count : 0);

              _this9.isLoading['acquisition'] = false;
            }, function (err) {
              _this9.isLoading['acquisition'] = false;
            });
          }
        }, {
          key: "getNBFCList",
          value: function getNBFCList() {
            var _this10 = this;

            return;
            this.isLoading['nbfc'] = true;
            var data = {
              'datapoint': 'dashboard_nbfc',
              'source': 'LMS',
              'filter_type': this.selectedTab['nbfc']
            };

            if (this.partner) {
              data['partner'] = this.partner;
            }

            this.http.getDetailForDashboardAPI(data).subscribe(function (res) {
              var _a, _b, _c, _d, _e, _f;

              _this10.fetchedList['nbfc'] = res === null || res === void 0 ? void 0 : res.data;
              var data = [(_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.total_nbfc_commitment, (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.total_credit_line, (_c = res === null || res === void 0 ? void 0 : res.data) === null || _c === void 0 ? void 0 : _c.fund_transfered_escrow, (_d = res === null || res === void 0 ? void 0 : res.data) === null || _d === void 0 ? void 0 : _d.total_credit_line_balance, (_e = res === null || res === void 0 ? void 0 : res.data) === null || _e === void 0 ? void 0 : _e.fund_in_escrow, (_f = res === null || res === void 0 ? void 0 : res.data) === null || _f === void 0 ? void 0 : _f.total_credit_line_utilized];
              _this10.nbfcGraphValue = data;

              _this10.designNBFCGraph();

              _this10.isLoading['nbfc'] = false;
            }, function (err) {
              _this10.isLoading['nbfc'] = false;
            });
          }
        }, {
          key: "designNBFCGraph",
          value: function designNBFCGraph() {
            this.avgProfitChartData = [{
              data: this.nbfcGraphValue.map(function (val) {
                if (!val) {
                  val = 0;
                } //   var val: any;
                //   val = Math.abs(val);
                //   if (val >= 10000000) {
                //     val = (val / 10000000).toFixed(2) + " Cr";
                //   } else if (val >= 100000) {
                //     val = (val / 100000).toFixed(2) + " Lacs";
                //   }


                return val;
              }),
              label: 'Amount of Money',
              type: "bar",
              categoryPercentage: 0.3,
              barPercentage: 0.5
            }];
          }
        }, {
          key: "resetFilters",
          value: function resetFilters() {
            this.partner = '';
            this.selectedTab = {
              'delinquent': 'Today',
              'nbfc': 'Today',
              'authorization': 'Today',
              'existing': 'this month',
              'acquisition': 'today',
              'mandate': 'today',
              'corporate': 'this month',
              'repayment': 'today'
            };
            this.getDelinquentList();
            this.getNBFCList();
            this.getAuthorizationList();
            this.getExistingList();
            this.getAcquisitionList();
            this.getMandateData();
            this.getCorporateList();
            this.getRepaymentList();
            this.fetchBorrowersGraph();
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__["ThemeConstantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 408,
        vars: 104,
        consts: [[1, "header_breadcrumb_section"], [1, "row", 2, "width", "100%"], [1, "col"], [1, "col", "text-center"], ["nzAllowClear", "", "nzAllowClear", "", "nzPlaceHolder", "Select Partner", 1, "mx-2", "my-md-0", "mb-3", 2, "width", "15rem", 3, "ngModel", "nzSize", "ngModelChange", "nzOnSearch"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col", "text-right"], ["nz-button", "", "nzType", "primary", "nzShape", "circle", "nz-tooltip", "", "nzTooltipTitle", "Reset Filter", 1, "mx-2", 3, "click"], ["nz-icon", "", "nzType", "undo"], [1, "row"], [1, "col-md-6", "mb-md-3"], [1, "h-100", 3, "nzTitle", "nzLoading", "nzExtra"], [1, "col-md-5"], [1, "d-flex", "mb-md-2"], [1, "media", "align-items-center"], ["nzStatus", "default", 1, "h-100", "dashboard-badge", 3, "nzColor"], [1, "m-l-5"], [1, "m-b-0", "muted"], [1, "m-b-0"], ["class", "col-md-7 d-flex justify-content-center", 4, "ngIf"], ["class", "col-md-7  d-flex justify-content-center", 4, "ngIf"], [1, "row", "mt-md-4", "ant-card-head", "px-0", "py-3"], [1, "col-md-3"], [1, "col-md-6"], ["acquisition", ""], ["class", "col-md-7 d-flex justify-content-center", "style", "min-height: 14rem", 4, "ngIf"], ["corporate", ""], [1, "row", "mb-md-3"], [1, "col-md-4", "mb-md-3"], [1, "col-md-4", "d-flex", "mb-md-3"], [1, "ml-md-2"], [1, "row", "pt-2", 2, "justify-content", "Center"], [1, "row", "m-5"], [2, "margin-left", "15px", "color", "black"], [1, "w-100"], ["ngChartjs", "", 3, "datasets", "colors", "labels", "options", "legend", "chartType"], ["existing", ""], [1, "h-100", 3, "nzTitle", "nzExtra"], [3, "nzLoading", "nzData"], [1, "col-md-12"], [1, "mt-3", 3, "nzLoading", "nzData"], [1, "row", "mt-md-4", "px-0", "py-3"], ["repayment", ""], ["nzShowPagination", "false", 3, "nzLoading", "nzData"], [4, "ngFor", "ngForOf"], ["delinquent", ""], ["delinquentTemplate", ""], ["nbfcTemplate", ""], ["authorizationTemplate", ""], ["acquisitionTemplate", ""], ["corporateTemplate", ""], ["repaymentTemplate", ""], ["mandateTemplate", ""], ["existingTemplate", ""], ["authorisation", ""], [3, "nzValue", "nzLabel"], [1, "col-md-7", "d-flex", "justify-content-center"], [1, "text-center", "chart-container", 2, "width", "250px", "height", "250px", "position", "absolute", "bottom", "-21px", "top", "-64px"], [1, "w-100", "text-center", "title"], ["ngChartjs", "", 3, "data", "labels", "chartType", "colors", "options", "legend"], [1, "text-center", "chart-container", 2, "width", "250px", "height", "250px", "position", "absolute", "margin-top", "9px"], [1, "w-100", "text-center", "no-data-title", 2, "color", "black"], ["nz-icon", "", "nzType", "user", "nzTheme", "outline"], [1, "col-md-7", "d-flex", "justify-content-center", 2, "min-height", "14rem"], [1, "text-center", "chart-container", 2, "width", "200px", "height", "200px", "position", "absolute", "bottom", "-21px", "top", "-64px"], [1, "w-100", "text-center", "title-corporate"], [1, "w-100", "text-center", "title-corporate-count"], ["nz-icon", "", "nzType", "pie-chart", "nzTheme", "outline"], ["nz-icon", "", "nzType", "file-text", "nzTheme", "outline"], [3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "Today"], ["nz-radio-button", "", "nzValue", "This Month"], ["nz-radio-button", "", "nzValue", "Overall"], ["nz-radio-button", "", "nzValue", "today"], ["nz-radio-button", "", "nzValue", "this month"], ["nz-radio-button", "", "nzValue", "overall"], ["nz-icon", "", "nzType", "line-chart", "nzTheme", "outline"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_nz_select_ngModelChange_4_listener($event) {
              return ctx.partner = $event;
            })("ngModelChange", function DashboardComponent_Template_nz_select_ngModelChange_4_listener() {
              return ctx.onSelectFetchCorrespondingData();
            })("nzOnSearch", function DashboardComponent_Template_nz_select_nzOnSearch_4_listener($event) {
              return ctx.onSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_nz_option_5_Template, 1, 2, "nz-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_7_listener() {
              return ctx.resetFilters();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "nz-badge", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Total App Download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "nz-badge", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Registered Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "nz-badge", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Registered Users (Tie-up Corporate)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "nz-badge", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Disburse User");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, DashboardComponent_div_47_Template, 8, 7, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, DashboardComponent_div_48_Template, 5, 6, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Line Assigned");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Approval rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Average Line");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, DashboardComponent_ng_template_65_Template, 2, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "nz-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "nz-badge", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Total Corporates");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "nz-badge", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Total Corporate Employees");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "nz-badge", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Active Employees");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "nz-badge", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "No Of EWA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "nz-badge", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "No Of Fixed Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, DashboardComponent_div_111_Template, 8, 7, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, DashboardComponent_div_112_Template, 5, 6, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, DashboardComponent_ng_template_113_Template, 2, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "nz-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Total Borrowers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Total Line Assigned");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "nz-badge", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Total Spends");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "nz-badge", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Total Outstanding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "nz-badge", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Average Line");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "nz-badge", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Average Outstanding Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "nz-badge", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Total Active Borrowes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "nz-badge", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Repeat Borrowers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "nz-badge", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "This Month New Active Borrowers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "nz-badge", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Old Acquisition First Transaction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "nz-badge", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Average Age in Months");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h5", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Total Spends (MoM) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "canvas", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](199, DashboardComponent_ng_template_199_Template, 2, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "nz-card", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "nz-table", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Credit Transactions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Total Count");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Total Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](215);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Failed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Credit Failure Ratio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Failed/Total Transaction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "nz-table", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Debit Transactions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Total Count");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Total Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](268);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Failed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Debit Failure Ratio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Failed/Total Transaction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "nz-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "No. of Borrowers Bill Due");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Due Outstanding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Repayment Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Repayment Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Count of Fee Collected");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Amount Of Fee Collected");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "No.Of Borrowers Due Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "Total Dues");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "h5", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](353, DashboardComponent_ng_template_353_Template, 2, 0, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "nz-card", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "nz-table", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "No. of Days");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Total No. of Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Total Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](369, DashboardComponent_tr_369_Template, 9, 4, "tr", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Write Off");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "Total Number Of Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Total Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](386, DashboardComponent_ng_template_386_Template, 2, 0, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](388, DashboardComponent_ng_template_388_Template, 5, 1, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](390, DashboardComponent_ng_template_390_Template, 7, 1, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](392, DashboardComponent_ng_template_392_Template, 5, 1, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](394, DashboardComponent_ng_template_394_Template, 7, 1, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](396, DashboardComponent_ng_template_396_Template, 5, 1, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](398, DashboardComponent_ng_template_398_Template, 5, 1, "ng-template", null, 51, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](400, DashboardComponent_ng_template_400_Template, 7, 1, "ng-template", null, 52, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](402, DashboardComponent_ng_template_402_Template, 5, 1, "ng-template", null, 53, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](404, DashboardComponent_ng_template_404_Template, 5, 1, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](406, DashboardComponent_ng_template_406_Template, 2, 0, "ng-template", null, 54, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](66);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](114);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](200);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](354);

            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](387);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](389);

            var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](393);

            var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](395);

            var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](397);

            var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](399);

            var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](403);

            var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](407);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.partner)("nzSize", "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.partnerList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r3)("nzLoading", ctx.isLoading["acquisition"])("nzExtra", _r22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", ctx.cyan);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].app_downloads) ? ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].app_downloads : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", ctx.purple);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].all_registered_users_exact_count) ? ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].all_registered_users_exact_count : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", ctx.gold);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].total_corporate_users_exact_count) ? ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].total_corporate_users_exact_count : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", ctx.pink);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].active_users_exact_count) ? ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].active_users_exact_count : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].active_users_exact_count) || (ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].total_corporate_users_exact_count) || (ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].all_registered_users_exact_count) || (ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].app_registered_users_exact_count));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].active_users_exact_count) && !(ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].total_corporate_users_exact_count) && !(ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].all_registered_users_exact_count) && !(ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].app_registered_users_exact_count));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].line_assigned) ? "\u20B9 " + (ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].line_assigned) : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].approval_rate) ? (ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].approval_rate) + "%" : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].average_line_assigned) ? "\u20B9 " + (ctx.fetchedList["acquisition"] == null ? null : ctx.fetchedList["acquisition"].average_line_assigned) : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r7)("nzLoading", ctx.isLoading["corporate"])("nzExtra", _r24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", ctx.cyan);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["corporate"] == null ? null : ctx.fetchedList["corporate"].total_corporate_count) ? ctx.fetchedList["corporate"] == null ? null : ctx.fetchedList["corporate"].total_corporate_count : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", ctx.blue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["corporate"] == null ? null : ctx.fetchedList["corporate"].total_employees_count) ? ctx.fetchedList["corporate"] == null ? null : ctx.fetchedList["corporate"].total_employees_count : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", ctx.gold);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["corporate"] == null ? null : ctx.fetchedList["corporate"].active_employees) ? ctx.fetchedList["corporate"] == null ? null : ctx.fetchedList["corporate"].active_employees : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", ctx.purple);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["corporate"] == null ? null : ctx.fetchedList["corporate"].ewa_count) ? ctx.fetchedList["corporate"] == null ? null : ctx.fetchedList["corporate"].ewa_count : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", ctx.pink);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["corporate"] == null ? null : ctx.fetchedList["corporate"].fixed_count) ? ctx.fetchedList["corporate"] == null ? null : ctx.fetchedList["corporate"].fixed_count : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.fetchedList["corporate"] == null ? null : ctx.fetchedList["corporate"].fixed_count) || (ctx.fetchedList["corporate"] == null ? null : ctx.fetchedList["corporate"].ewa_count));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.fetchedList["corporate"] == null ? null : ctx.fetchedList["corporate"].fixed_count) && !(ctx.fetchedList["corporate"] == null ? null : ctx.fetchedList["corporate"].ewa_count));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r9)("nzLoading", ctx.isLoading["existing"])("nzExtra", _r30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].total_borrowers) ? ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].total_borrowers : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].total_credit_line_assigned) ? "\u20B9" + (ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].total_credit_line_assigned) : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", "#55268E40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9 ", (ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].total_credit_line_used) ? ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].total_credit_line_used : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", "#55268E40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9 ", (ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].outstanding) ? ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].outstanding : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", "#55268E40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9 ", (ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].average_line_assigned) ? ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].average_line_assigned : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", "#55268E40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9 ", (ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].average_outstanding) ? ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].average_outstanding : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", "#55268E40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].total_active_borrowers) ? ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].total_active_borrowers : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", "#55268E40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].repeat_borrowers) ? ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].repeat_borrowers : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", "#55268E40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].count_new_active_borrowers) ? ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].count_new_active_borrowers : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", "#55268E40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].users_with_first_txn_this_month) ? ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].users_with_first_txn_this_month : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzColor", "#55268E40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].average_age_in_months) ? (ctx.fetchedList["existing"] == null ? null : ctx.fetchedList["existing"].average_age_in_months) + " Months" : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("colors", ctx.barChartColors)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r34)("nzExtra", _r20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.isLoading["authorization"])("nzData", ctx.fetchedList["authorization"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].credit) ? ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].credit[0] == null ? null : ctx.fetchedList["authorization"].credit[0].total : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].credit) ? ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].credit[0] == null ? null : ctx.fetchedList["authorization"].credit[0].amount : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].credit) ? ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].credit[1] == null ? null : ctx.fetchedList["authorization"].credit[1].success : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].credit) ? ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].credit[1] == null ? null : ctx.fetchedList["authorization"].credit[1].amount : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].credit) ? ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].credit[2] == null ? null : ctx.fetchedList["authorization"].credit[2].failure : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].credit) ? ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].credit[2] == null ? null : ctx.fetchedList["authorization"].credit[2].amount : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ((ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].failure_ratio_credit == null ? null : ctx.fetchedList["authorization"].failure_ratio_credit.failed) ? ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].failure_ratio_credit == null ? null : ctx.fetchedList["authorization"].failure_ratio_credit.failed : " 0 ") + "/" + ((ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].failure_ratio_credit == null ? null : ctx.fetchedList["authorization"].failure_ratio_credit.total) ? ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].failure_ratio_credit == null ? null : ctx.fetchedList["authorization"].failure_ratio_credit.total : " 0 "), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].failure_ratio_credit == null ? null : ctx.fetchedList["authorization"].failure_ratio_credit.failed_percentage) ? ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].failure_ratio_credit == null ? null : ctx.fetchedList["authorization"].failure_ratio_credit.failed_percentage : " 0 ", "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.isLoading["authorization"])("nzData", ctx.fetchedList["authorization"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].debit) ? ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].debit[0] == null ? null : ctx.fetchedList["authorization"].debit[0].total : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].debit) ? ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].debit[0] == null ? null : ctx.fetchedList["authorization"].debit[0].amount : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].debit) ? ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].debit[1] == null ? null : ctx.fetchedList["authorization"].debit[1].success : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].debit) ? ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].debit[1] == null ? null : ctx.fetchedList["authorization"].debit[1].amount : 0, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].debit) ? ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].debit[2] == null ? null : ctx.fetchedList["authorization"].debit[2].failure : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].debit) ? ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].debit[2] == null ? null : ctx.fetchedList["authorization"].debit[2].amount : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ((ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].failure_ratio_debit == null ? null : ctx.fetchedList["authorization"].failure_ratio_debit.failed) ? ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].failure_ratio_debit == null ? null : ctx.fetchedList["authorization"].failure_ratio_debit.failed : " 0 ") + "/" + ((ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].failure_ratio_debit == null ? null : ctx.fetchedList["authorization"].failure_ratio_debit.total) ? ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].failure_ratio_debit == null ? null : ctx.fetchedList["authorization"].failure_ratio_debit.total : " 0 "), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].failure_ratio_debit == null ? null : ctx.fetchedList["authorization"].failure_ratio_debit.failed_percentage) ? ctx.fetchedList["authorization"] == null ? null : ctx.fetchedList["authorization"].failure_ratio_debit == null ? null : ctx.fetchedList["authorization"].failure_ratio_debit.failed_percentage : 0, "% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r11)("nzLoading", ctx.isLoading["repayment"])("nzExtra", _r26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["repayment"] == null ? null : ctx.fetchedList["repayment"].number_of_borrowers_bill_due) ? ctx.fetchedList["repayment"] == null ? null : ctx.fetchedList["repayment"].number_of_borrowers_bill_due : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["repayment"] == null ? null : ctx.fetchedList["repayment"].total_borrower_outstanding) ? "\u20B9" + (ctx.fetchedList["repayment"] == null ? null : ctx.fetchedList["repayment"].total_borrower_outstanding) : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["repayment"] == null ? null : ctx.fetchedList["repayment"].number_repayment_transactions) ? ctx.fetchedList["repayment"] == null ? null : ctx.fetchedList["repayment"].number_repayment_transactions : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["repayment"] == null ? null : ctx.fetchedList["repayment"].total_transaction_amount) ? "\u20B9 " + (ctx.fetchedList["repayment"] == null ? null : ctx.fetchedList["repayment"].total_transaction_amount) : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["repayment"] == null ? null : ctx.fetchedList["repayment"].count_fee_transaction) ? ctx.fetchedList["repayment"] == null ? null : ctx.fetchedList["repayment"].count_fee_transaction : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["repayment"] == null ? null : ctx.fetchedList["repayment"].total_fees_amount) ? "\u20B9 " + (ctx.fetchedList["repayment"] == null ? null : ctx.fetchedList["repayment"].total_fees_amount) : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["repayment"] == null ? null : ctx.fetchedList["repayment"].number_of_borrowers_due_date) ? ctx.fetchedList["repayment"] == null ? null : ctx.fetchedList["repayment"].number_of_borrowers_due_date : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["repayment"] == null ? null : ctx.fetchedList["repayment"].total_due_outstanding) ? "\u20B9 " + (ctx.fetchedList["repayment"] == null ? null : ctx.fetchedList["repayment"].total_due_outstanding) : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r14)("nzExtra", _r16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.isLoading["delinquent"])("nzData", ctx.fetchedList["delinquent"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fetchedList["delinquent"] == null ? null : ctx.fetchedList["delinquent"].delinquent_data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["delinquent"] == null ? null : ctx.fetchedList["delinquent"].number_of_write_offs) ? ctx.fetchedList["delinquent"] == null ? null : ctx.fetchedList["delinquent"].number_of_write_offs : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["delinquent"] == null ? null : ctx.fetchedList["delinquent"].total_users) ? ctx.fetchedList["delinquent"] == null ? null : ctx.fetchedList["delinquent"].total_users : " 0 ", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.fetchedList["delinquent"] == null ? null : ctx.fetchedList["delinquent"].total_delinquent_amount) ? "\u20B9" + (ctx.fetchedList["delinquent"] == null ? null : ctx.fetchedList["delinquent"].total_delinquent_amount) : " 0 ", " ");
          }
        },
        directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__["NzTooltipDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__["NzCardComponent"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_13__["NzBadgeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_chartjs__WEBPACK_IMPORTED_MODULE_14__["NgChartjsDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_15__["NzTbodyComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__["NzOptionComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__["NzRadioGroupComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__["NzRadioButtonDirective"]],
        styles: [".title[_ngcontent-%COMP%]{\n   \n   position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    top: 161px;\n    font-size: 14px;\n    left: 4px;\n}\n \n .title-corporate[_ngcontent-%COMP%]{\n   \n   position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    top: 142px;\n    font-size: 14px;\n    left: 0px;\n}\n \n .title-corporate-count[_ngcontent-%COMP%]{\n   \n   position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    top: 131px;\n    font-size: 14px;\n    left: -6px;\n}\n \n .no-data-title[_ngcontent-%COMP%]{\n   \n   position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    height: 100%;\n    font-size: 14px;\n    left: 4px;\n}\n \n .purplecircle[_ngcontent-%COMP%]{\n   width: 12px;\n   height: 12px;\n   left: 593px;\n   top: 1000px;\n   background: #886cff;\n   border-radius: 50px;\n   margin-top: 3%;\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0lBVUk7O0NBRUg7R0FDRTs7Ozs7cUJBS2tCO0dBQ2xCLGtCQUFrQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsZUFBZTtJQUNmLFNBQVM7QUFDYjs7Q0FFQTtHQUNHOzs7OztxQkFLa0I7R0FDbEIsa0JBQWtCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixlQUFlO0lBQ2YsU0FBUztBQUNiOztDQUVBO0dBQ0c7Ozs7O3FCQUtrQjtHQUNsQixrQkFBa0I7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0NBRUE7R0FDRzs7Ozs7cUJBS2tCO0dBQ2xCLGtCQUFrQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0NBRUE7R0FDRyxXQUFXO0dBQ1gsWUFBWTtHQUNaLFdBQVc7R0FDWCxXQUFXO0dBQ1gsbUJBQW1CO0dBQ25CLG1CQUFtQjtHQUNuQixjQUFjO0dBQ2QiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuZG9udXQtaW5uZXIge1xuICAgIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiB9XG4gLmRvbnV0LWlubmVyIGg1IHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiB9XG4gLmRvbnV0LWlubmVyIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiB9ICovXG4gXG4gLnRpdGxle1xuICAgLyogcG9zaXRpb246IHJlbGF0aXZlO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICBcbiAgIHRvcDogMTQwcHg7XG4gICBmb250LXNpemU6IDEycHg7ICovXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRvcDogMTYxcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxlZnQ6IDRweDtcbn1cblxuLnRpdGxlLWNvcnBvcmF0ZXtcbiAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgXG4gICB0b3A6IDE0MHB4O1xuICAgZm9udC1zaXplOiAxMnB4OyAqL1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0b3A6IDE0MnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZWZ0OiAwcHg7XG59XG5cbi50aXRsZS1jb3Jwb3JhdGUtY291bnR7XG4gICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBhbGlnbi1pdGVtczogY2VudGVyOyAgIFxuICAgdG9wOiAxNDBweDtcbiAgIGZvbnQtc2l6ZTogMTJweDsgKi9cbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdG9wOiAxMzFweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGVmdDogLTZweDtcbn1cblxuLm5vLWRhdGEtdGl0bGV7XG4gICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBhbGlnbi1pdGVtczogY2VudGVyOyAgIFxuICAgdG9wOiAxNDBweDtcbiAgIGZvbnQtc2l6ZTogMTJweDsgKi9cbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogdG9wOiAxMjdweDsgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxlZnQ6IDRweDtcbn1cblxuLnB1cnBsZWNpcmNsZXtcbiAgIHdpZHRoOiAxMnB4O1xuICAgaGVpZ2h0OiAxMnB4O1xuICAgbGVmdDogNTkzcHg7XG4gICB0b3A6IDEwMDBweDtcbiAgIGJhY2tncm91bmQ6ICM4ODZjZmY7XG4gICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgbWFyZ2luLXRvcDogMyU7XG4gICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
          }]
        }], function () {
          return [{
            type: _shared_services_theme_constant_service__WEBPACK_IMPORTED_MODULE_1__["ThemeConstantService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "TDBs":
    /*!***********************************************!*\
      !*** ./src/app/dashboard/dashboard.module.ts ***!
      \***********************************************/

    /*! exports provided: DashboardModule */

    /***/
    function TDBs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "Oy4E");
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard.component */
      "QX6l");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../ng-zorro-antd.module */
      "PMIT");
      /* harmony import */


      var ng_chartjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-chartjs */
      "jdj2");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /** Import any ng-zorro components as the module required except icon module */

      /** Assign all ng-zorro modules to this array*/


      var antdModule = [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"], _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_5__["DemoNgZorroAntdModule"]];

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DashboardModule
      });
      DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DashboardModule_Factory(t) {
          return new (t || DashboardModule)();
        },
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]].concat(antdModule, [ng_chartjs__WEBPACK_IMPORTED_MODULE_6__["NgChartjsModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsModule"].forChild()])]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"], _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_5__["DemoNgZorroAntdModule"], ng_chartjs__WEBPACK_IMPORTED_MODULE_6__["NgChartjsModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]].concat(antdModule, [ng_chartjs__WEBPACK_IMPORTED_MODULE_6__["NgChartjsModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsModule"].forChild()]),
            exports: [],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map