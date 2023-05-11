(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dormant-stage-trigger-dormant-stage-trigger-module"], {
    /***/
    "NRf7":
    /*!***********************************************************************!*\
      !*** ./src/app/dormant-stage-trigger/dormant-stage-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: DormantStageRoutingModule */

    /***/
    function NRf7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DormantStageRoutingModule", function () {
        return DormantStageRoutingModule;
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


      var _dormant_stage_dormant_stage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dormant-stage/dormant-stage.component */
      "u2a9");

      var routes = [{
        path: '',
        canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"]],
        component: _dormant_stage_dormant_stage_component__WEBPACK_IMPORTED_MODULE_3__["DormantStageComponent"],
        data: {
          title: 'Dormant-Stage',
          parent: 'Dormant',
          custom_url: 'dormant',
          permissions: {
            only: ['update_dormant_stage'],
            redirectTo: 'authentication/error-2'
          }
        }
      }];

      var DormantStageRoutingModule = function DormantStageRoutingModule() {
        _classCallCheck(this, DormantStageRoutingModule);
      };

      DormantStageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DormantStageRoutingModule
      });
      DormantStageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DormantStageRoutingModule_Factory(t) {
          return new (t || DormantStageRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DormantStageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DormantStageRoutingModule, [{
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
    "u2a9":
    /*!********************************************************************************!*\
      !*** ./src/app/dormant-stage-trigger/dormant-stage/dormant-stage.component.ts ***!
      \********************************************************************************/

    /*! exports provided: DormantStageComponent */

    /***/
    function u2a9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DormantStageComponent", function () {
        return DormantStageComponent;
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


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
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

      function DormantStageComponent_nz_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 9);
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r2)("nzLabel", item_r2.name);
        }
      }

      function DormantStageComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DormantStageComponent_div_16_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onClickUpdateDormantStage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update Version");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r1.apiLoader["onUpdate"])("disabled", !ctx_r1.selectedDaysOfDormantStage);
        }
      }

      var _c0 = function _c0() {
        return ["update_dormant_stage"];
      };

      var DormantStageComponent = /*#__PURE__*/function () {
        function DormantStageComponent(http, message) {
          _classCallCheck(this, DormantStageComponent);

          this.http = http;
          this.message = message;
          this.apiLoader = {
            'getLoader': false,
            'onUpdate': false
          };
        }

        _createClass(DormantStageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getDormatList();
          }
        }, {
          key: "getDormatList",
          value: function getDormatList() {
            var _this = this;

            this.http.getDormatSupportedStageList().subscribe(function (res) {
              _this.dormantList = res === null || res === void 0 ? void 0 : res.data;
              console.log(res);
            });
          }
        }, {
          key: "getSelectedDormantStage",
          value: function getSelectedDormantStage(e) {
            console.log(this.selectedStageFilters);
            this.selectedDaysOfDormantStage = e === null || e === void 0 ? void 0 : e.dormant_days;
            console.log(e);
          }
        }, {
          key: "onClickUpdateDormantStage",
          value: function onClickUpdateDormantStage() {
            var _this2 = this;

            var _a;

            this.apiLoader['onUpdate'] = true;
            var data = {
              "stage": (_a = this.selectedStageFilters) === null || _a === void 0 ? void 0 : _a.id,
              "no_of_days": this.selectedDaysOfDormantStage
            };
            this.http.updataeDormantStage(data).subscribe(function (res) {
              if (res === null || res === void 0 ? void 0 : res.success) {
                _this2.message.success(res === null || res === void 0 ? void 0 : res.message);

                _this2.apiLoader['onUpdate'] = false;
              } else {
                _this2.message.error(res === null || res === void 0 ? void 0 : res.message);

                _this2.apiLoader['onUpdate'] = false;
              }
            }, function (error) {
              _this2.apiLoader['onUpdate'] = false;
            });
            console.log(this.selectedDaysOfDormantStage);
            console.log(this.selectedStageFilters);
          }
        }]);

        return DormantStageComponent;
      }();

      DormantStageComponent.ɵfac = function DormantStageComponent_Factory(t) {
        return new (t || DormantStageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]));
      };

      DormantStageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DormantStageComponent,
        selectors: [["app-dormant-stage"]],
        decls: 17,
        vars: 6,
        consts: [[3, "nzLoading"], [1, "row"], [1, "col-md-5"], ["nzFor", "name", "nzRequired", "", 1, "text-left"], ["nzErrorTip", "Please Add Valid Version!"], ["nzAllowClear", "", "nzPlaceHolder", "Select Stage", 1, "w-100", 2, "width", "12rem", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-input", "", "type", "text", "placeholder", "App Version", 3, "ngModel", "ngModelChange"], ["class", "col-md-12", "style", "text-align-last: right;", 4, "ngxPermissionsOnly"], [3, "nzValue", "nzLabel"], [1, "col-md-12", 2, "text-align-last", "right"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "disabled", "click"]],
        template: function DormantStageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-form-label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dormant Stage ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-control", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DormantStageComponent_Template_nz_select_ngModelChange_8_listener($event) {
              return ctx.selectedStageFilters = $event;
            })("ngModelChange", function DormantStageComponent_Template_nz_select_ngModelChange_8_listener($event) {
              return ctx.getSelectedDormantStage($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DormantStageComponent_nz_option_9_Template, 1, 2, "nz-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-form-label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "No Of Days ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-form-control", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DormantStageComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.selectedDaysOfDormantStage = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DormantStageComponent_div_16_Template, 3, 2, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.apiLoader["getLoader"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedStageFilters);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dormantList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedDaysOfDormantStage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
          }
        },
        directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_3__["NzCardComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormControlComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], ngx_permissions__WEBPACK_IMPORTED_MODULE_10__["NgxPermissionsDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__["NzOptionComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3JtYW50LXN0YWdlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DormantStageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dormant-stage',
            templateUrl: './dormant-stage.component.html',
            styleUrls: ['./dormant-stage.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "xMqo":
    /*!***********************************************************************!*\
      !*** ./src/app/dormant-stage-trigger/dormant-stage-trigger.module.ts ***!
      \***********************************************************************/

    /*! exports provided: DormantStageTriggerModule */

    /***/
    function xMqo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DormantStageTriggerModule", function () {
        return DormantStageTriggerModule;
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


      var _dormant_stage_dormant_stage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dormant-stage/dormant-stage.component */
      "u2a9");
      /* harmony import */


      var _dormant_stage_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dormant-stage-routing.module */
      "NRf7");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../ng-zorro-antd.module */
      "PMIT");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");

      var DormantStageTriggerModule = function DormantStageTriggerModule() {
        _classCallCheck(this, DormantStageTriggerModule);
      };

      DormantStageTriggerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DormantStageTriggerModule
      });
      DormantStageTriggerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DormantStageTriggerModule_Factory(t) {
          return new (t || DormantStageTriggerModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dormant_stage_routing_module__WEBPACK_IMPORTED_MODULE_3__["DormantStageRoutingModule"], _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_7__["DemoNgZorroAntdModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__["NzModalModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxPermissionsModule"].forChild()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DormantStageTriggerModule, {
          declarations: [_dormant_stage_dormant_stage_component__WEBPACK_IMPORTED_MODULE_2__["DormantStageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dormant_stage_routing_module__WEBPACK_IMPORTED_MODULE_3__["DormantStageRoutingModule"], _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_7__["DemoNgZorroAntdModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__["NzModalModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxPermissionsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DormantStageTriggerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_dormant_stage_dormant_stage_component__WEBPACK_IMPORTED_MODULE_2__["DormantStageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dormant_stage_routing_module__WEBPACK_IMPORTED_MODULE_3__["DormantStageRoutingModule"], _ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_7__["DemoNgZorroAntdModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__["NzModalModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxPermissionsModule"].forChild()]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=dormant-stage-trigger-dormant-stage-trigger-module-es5.js.map