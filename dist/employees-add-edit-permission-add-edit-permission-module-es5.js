(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employees-add-edit-permission-add-edit-permission-module"], {
    /***/
    "/izH":
    /*!*************************************************************************************!*\
      !*** ./src/app/employees/add-edit-permission/add-edit-permission-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: AddEditPermissionRoutingModule */

    /***/
    function izH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEditPermissionRoutingModule", function () {
        return AddEditPermissionRoutingModule;
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


      var _add_edit_permission_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-edit-permission.component */
      "NlDJ");

      var routes = [{
        path: '',
        component: _add_edit_permission_component__WEBPACK_IMPORTED_MODULE_2__["AddEditPermissionComponent"],
        data: {
          title: 'Edit Permission',
          parent: 'Access control',
          custom_url: 'edit-employee-permission'
        }
      }];

      var AddEditPermissionRoutingModule = function AddEditPermissionRoutingModule() {
        _classCallCheck(this, AddEditPermissionRoutingModule);
      };

      AddEditPermissionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AddEditPermissionRoutingModule
      });
      AddEditPermissionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AddEditPermissionRoutingModule_Factory(t) {
          return new (t || AddEditPermissionRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddEditPermissionRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditPermissionRoutingModule, [{
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
    "NlDJ":
    /*!********************************************************************************!*\
      !*** ./src/app/employees/add-edit-permission/add-edit-permission.component.ts ***!
      \********************************************************************************/

    /*! exports provided: AddEditPermissionComponent */

    /***/
    function NlDJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEditPermissionComponent", function () {
        return AddEditPermissionComponent;
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


      var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/http.service */
      "N+K7");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "PScX");
      /* harmony import */


      var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/tabs */
      "oyxB");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
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


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "TaO5");
      /* harmony import */


      var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/table */
      "rMZv");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-zorro-antd/popconfirm */
      "KupA");

      function AddEditPermissionComponent_nz_tab_2_nz_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 22);
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r5.pk)("nzLabel", item_r5.name);
        }
      }

      function AddEditPermissionComponent_nz_tab_2_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function AddEditPermissionComponent_nz_tab_2_div_11_li_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r6 == null ? null : data_r6.key, " ");
        }
      }

      function AddEditPermissionComponent_nz_tab_2_div_11_div_8_div_5_ng_container_1_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditPermissionComponent_nz_tab_2_div_11_div_8_div_5_ng_container_1_div_4_Template_label_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var slug_r19 = ctx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

            return ctx_r20.ngModelChange($event, slug_r19, "slugs");
          })("ngModelChange", function AddEditPermissionComponent_nz_tab_2_div_11_div_8_div_5_ng_container_1_div_4_Template_label_ngModelChange_1_listener($event) {
            var slug_r19 = ctx.$implicit;
            return slug_r19.flag = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slug_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", slug_r19.flag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slug_r19 == null ? null : slug_r19.display_name);
        }
      }

      function AddEditPermissionComponent_nz_tab_2_div_11_div_8_div_5_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditPermissionComponent_nz_tab_2_div_11_div_8_div_5_ng_container_1_Template_label_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var subItem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r23.onCLickSelectAll($event, item_r10 == null ? null : item_r10.slugs_list[subItem_r15 == null ? null : subItem_r15.key]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddEditPermissionComponent_nz_tab_2_div_11_div_8_div_5_ng_container_1_div_4_Template, 4, 2, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var subItem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subItem_r15 == null ? null : subItem_r15.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.slugListMaxCheckBoxSelection(item_r10 == null ? null : item_r10.slugs_list[subItem_r15 == null ? null : subItem_r15.key]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r10 == null ? null : item_r10.slugs_list[subItem_r15 == null ? null : subItem_r15.key]);
        }
      }

      function AddEditPermissionComponent_nz_tab_2_div_11_div_8_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddEditPermissionComponent_nz_tab_2_div_11_div_8_div_5_ng_container_1_Template, 5, 3, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subItem_r15 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.checkBoolean(subItem_r15));
        }
      }

      function AddEditPermissionComponent_nz_tab_2_div_11_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddEditPermissionComponent_nz_tab_2_div_11_div_8_div_5_Template, 2, 1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r10 == null ? null : item_r10.display_name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, item_r10 == null ? null : item_r10.slugs_list, ctx_r8.returnZero));
        }
      }

      function AddEditPermissionComponent_nz_tab_2_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddEditPermissionComponent_nz_tab_2_div_11_li_6_Template, 2, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddEditPermissionComponent_nz_tab_2_div_11_div_8_Template, 7, 5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r6 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (data_r6 == null ? null : data_r6.key) != "null");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.permissionList[data_r6.key]);
        }
      }

      function AddEditPermissionComponent_nz_tab_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tab", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-form-label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select Preferred Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-control", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddEditPermissionComponent_nz_tab_2_Template_nz_select_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.onChange($event);
          })("ngModelChange", function AddEditPermissionComponent_nz_tab_2_Template_nz_select_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.selectedRole = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddEditPermissionComponent_nz_tab_2_nz_option_9_Template, 1, 2, "nz-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddEditPermissionComponent_nz_tab_2_ng_container_10_Template, 1, 0, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddEditPermissionComponent_nz_tab_2_div_11_Template, 9, 2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditPermissionComponent_nz_tab_2_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.updatePermissionBasedOnType();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Update Permission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r0.apiLoader["list"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 5)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectedRole);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.fetchedRole);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedRole);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 12, ctx_r0.permissionList, ctx_r0.returnZero));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.totalPayableAmount, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r0.apiLoader["onOk"])("disabled", ctx_r0.slugList.length < 1 || !ctx_r0.selectedRole);
        }
      }

      function AddEditPermissionComponent_nz_tab_3_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditPermissionComponent_nz_tab_3_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r36.addEditRole("add");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Role");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditPermissionComponent_nz_tab_3_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditPermissionComponent_nz_tab_3_tr_14_td_5_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEditPermissionComponent_nz_tab_3_tr_14_td_5_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

            var data_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r43.addEditRole("edit", data_r38);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AddEditPermissionComponent_nz_tab_3_tr_14_td_5_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function AddEditPermissionComponent_nz_tab_3_tr_14_td_5_button_2_Template_i_nzOnConfirm_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

            var data_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r46.onCLickDeleteRole("edit", data_r38);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["edit_role"];
      };

      var _c1 = function _c1() {
        return ["delete_role"];
      };

      function AddEditPermissionComponent_nz_tab_3_tr_14_td_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddEditPermissionComponent_nz_tab_3_tr_14_td_5_button_1_Template, 2, 0, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddEditPermissionComponent_nz_tab_3_tr_14_td_5_button_2_Template, 2, 0, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      }

      var _c2 = function _c2() {
        return ["edit_role", "delete_role"];
      };

      function AddEditPermissionComponent_nz_tab_3_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddEditPermissionComponent_nz_tab_3_tr_14_td_5_Template, 3, 4, "td", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r38 = ctx.$implicit;
          var i_r39 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r39 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r38.name ? data_r38.name : "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
        }
      }

      var _c3 = function _c3() {
        return ["add_role"];
      };

      function AddEditPermissionComponent_nz_tab_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tab", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddEditPermissionComponent_nz_tab_3_button_4_Template, 2, 0, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-table", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Role Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddEditPermissionComponent_nz_tab_3_th_12_Template, 2, 0, "th", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddEditPermissionComponent_nz_tab_3_tr_14_Template, 6, 4, "tr", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFrontPagination", false)("nzShowSizeChanger", false)("nzData", ctx_r1.updatedRole)("nzLoading", ctx_r1.roleManagementLoader["fetchRole"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.updatedRole);
        }
      }

      var _c4 = function _c4() {
        return ["view_employee_permission"];
      };

      var _c5 = function _c5() {
        return ["view_role"];
      };

      var AddEditPermissionComponent = /*#__PURE__*/function () {
        function AddEditPermissionComponent(http, route, router, message, fb) {
          _classCallCheck(this, AddEditPermissionComponent);

          this.http = http;
          this.route = route;
          this.router = router;
          this.message = message;
          this.fb = fb;
          this.currentTabIndex = 0;
          this.permissionList = [];
          this.slugList = [];
          this.apiLoader = {
            'list': false,
            'onOk': false
          };
          this.roleManagementLoader = {
            'onUpdate': false,
            'addRole': false,
            'isVisible': false,
            'fetchRole': true
          };
          this.fetchedRole = [];
        }

        _createClass(AddEditPermissionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.createAddEditRole();
            this.route.queryParams.subscribe(function (params) {
              if (params["targetCategory"]) {
                _this.currentTabIndex = params["targetCategory"];
              } else {
                _this.currentTabIndex = 0;
              }
            });
            this.fetchRoles();
          }
        }, {
          key: "checkBoolean",
          value: function checkBoolean(data) {
            if (data['value'].length >= 1) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "createAddEditRole",
          value: function createAddEditRole() {
            this.addEditRoleForm = this.fb.group({
              id: [null],
              name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          }
        }, {
          key: "addEditRole",
          value: function addEditRole(action, data) {
            if (action == 'add') {
              this.roleManagementLoader['addRole'] = true;
              this.roleManagementLoader['isVisible'] = true; // isVisible
            } else if (action == 'edit') {
              this.roleManagementLoader['addRole'] = false;
              this.selectedRoleForUpdate = data;
              this.addEditRoleForm.patchValue({
                id: data === null || data === void 0 ? void 0 : data.pk,
                name: data === null || data === void 0 ? void 0 : data.name
              });
              this.roleManagementLoader['isVisible'] = true;
            }
          }
        }, {
          key: "onCLickDeleteRole",
          value: function onCLickDeleteRole(action, data) {
            var _this2 = this;

            var body = {
              id: data === null || data === void 0 ? void 0 : data.pk,
              name: data === null || data === void 0 ? void 0 : data.name
            };
            this.http.deleteRole(data === null || data === void 0 ? void 0 : data.pk, body).subscribe(function (res) {
              if (res === null || res === void 0 ? void 0 : res.success) {
                _this2.message.success(res === null || res === void 0 ? void 0 : res.message);

                _this2.fetchRoles();
              } else {
                _this2.message.error(res === null || res === void 0 ? void 0 : res.message);
              }
            });
          }
        }, {
          key: "onClickAddEditRole",
          value: function onClickAddEditRole() {
            var _this3 = this;

            for (var i in this.addEditRoleForm.controls) {
              this.addEditRoleForm.controls[i].markAsDirty();
              this.addEditRoleForm.controls[i].updateValueAndValidity();
            }

            if (this.addEditRoleForm.valid) {
              this.roleManagementLoader['onUpdate'] = true;
              var data = {
                id: this.addEditRoleForm.value.id,
                name: this.addEditRoleForm.value.name
              };

              if (this.roleManagementLoader['addRole']) {
                delete data['id'];
              }

              this.http.addEditExistingRole(data).subscribe(function (res) {
                if (res === null || res === void 0 ? void 0 : res.success) {
                  _this3.addEditRoleForm.reset();

                  _this3.roleManagementLoader['onUpdate'] = false;

                  _this3.message.success(res === null || res === void 0 ? void 0 : res.message);

                  _this3.roleManagementLoader['isVisible'] = false;

                  _this3.fetchRoles();
                } else {
                  _this3.message.error(res === null || res === void 0 ? void 0 : res.message);

                  _this3.addEditRoleForm.reset();

                  _this3.roleManagementLoader['onUpdate'] = false;
                  _this3.roleManagementLoader['isVisible'] = false;
                }
              }, function (error) {
                _this3.roleManagementLoader['isVisible'] = false;

                _this3.addEditRoleForm.reset();

                _this3.roleManagementLoader['onUpdate'] = false;
              });
            } // }

          }
        }, {
          key: "fetchRoles",
          value: function fetchRoles() {
            var _this4 = this;

            this.roleManagementLoader['fetchRole'] = true;
            var data;
            this.http.fetchRoles(data).subscribe(function (res) {
              var _a;

              _this4.roleManagementLoader['fetchRole'] = false, _this4.updatedRole = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.results;
              res === null || res === void 0 ? void 0 : res.data.results.map(function (data) {
                // if(data?.name.toLowerCase() !== 'Superuser'.toLowerCase()){
                _this4.fetchedRole.push(data); // }

              });
            }, function (error) {
              _this4.roleManagementLoader['fetchRole'] = false;
            });
          }
        }, {
          key: "onChange",
          value: function onChange(e) {
            this.slugList = [];
            this.fetchSlagsList(e);
          }
        }, {
          key: "fetchSlagsList",
          value: function fetchSlagsList(e) {
            var _this5 = this;

            this.apiLoader['list'] = true;
            var data = {
              'role_id': e
            };
            this.http.fetchPermissionSlugsForEmployee(data).subscribe(function (res) {
              _this5.permissionList = [];
              _this5.permissionList = res === null || res === void 0 ? void 0 : res.data;
              var loopedData = [];

              for (var key in _this5.permissionList) {
                var child = _this5.permissionList[key];

                if (child.length >= 1) {
                  child.map(function (val) {
                    loopedData.push(val === null || val === void 0 ? void 0 : val.slugs_list);
                  });
                }
              }

              for (var _key in loopedData) {
                var trigger = loopedData[_key];

                for (var k in trigger) {
                  var triggeredData = trigger[k];

                  if (triggeredData.length >= 0) {
                    triggeredData === null || triggeredData === void 0 ? void 0 : triggeredData.map(function (triggeredRep) {
                      if (triggeredRep === null || triggeredRep === void 0 ? void 0 : triggeredRep.flag) {
                        _this5.slugList.push(triggeredRep === null || triggeredRep === void 0 ? void 0 : triggeredRep.id);
                      }
                    });
                  }
                }
              }

              _this5.apiLoader['list'] = false;
            }, function (error) {
              _this5.apiLoader['list'] = false;
            });
          }
        }, {
          key: "onTabChange",
          value: function onTabChange(e) {
            this.currentTabIndex = e.index;
            this.router.navigate(["/edit-employee-permission"], {
              queryParams: {
                targetCategory: this.currentTabIndex
              }
            }); // if(this.currentTabIndex == 1 ){
            //   this.fetchListOfRole()
            // }
          }
        }, {
          key: "ngModelChange",
          value: function ngModelChange(e, data, action) {
            if (e) {
              if (this.slugList.includes(data === null || data === void 0 ? void 0 : data.id)) {
                return;
              }

              this.slugList.push(data === null || data === void 0 ? void 0 : data.id);
            } else {
              this.deleteSlug(data === null || data === void 0 ? void 0 : data.id);
            }
          }
        }, {
          key: "onCLickSelectAll",
          value: function onCLickSelectAll(e, loop) {
            var _this6 = this;

            loop.forEach(function (data) {
              if (e) {
                if (!_this6.slugList.includes(data === null || data === void 0 ? void 0 : data.id)) {
                  data.flag = true;

                  _this6.slugList.push(data === null || data === void 0 ? void 0 : data.id);
                }
              } else {
                data.flag = false;

                _this6.deleteSlug(data === null || data === void 0 ? void 0 : data.id);
              }
            });
          }
        }, {
          key: "deleteSlug",
          value: function deleteSlug(id) {
            var index = this.slugList.indexOf(id);

            if (index !== -1) {
              this.slugList.splice(index, 1);
            }
          }
        }, {
          key: "slugListCheckBoxSelection",
          value: function slugListCheckBoxSelection(slug) {
            if (this.slugList.includes(slug)) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "slugListMaxCheckBoxSelection",
          value: function slugListMaxCheckBoxSelection(event) {
            var count = event.length;
            var i = 0;
            event === null || event === void 0 ? void 0 : event.forEach(function (element) {
              if (element === null || element === void 0 ? void 0 : element.flag) i++;
            });

            if (count == i) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "updatePermissionBasedOnType",
          value: function updatePermissionBasedOnType() {
            var _this7 = this;

            var data = {
              "permissions": this.slugList
            };
            this.apiLoader['onOk'] = true;
            this.http.updatePermissionBasedOnType(this.selectedRole, data).subscribe(function (res) {
              _this7.apiLoader['onOk'] = false;

              if (res === null || res === void 0 ? void 0 : res.success) {
                // let newRouterLink = "/employee";
                // this.router.navigate(['../employees']);
                // this.selectedRole = null;
                _this7.message.success(res === null || res === void 0 ? void 0 : res.message);
              } else {
                _this7.apiLoader['onOk'] = false;

                _this7.message.error(res === null || res === void 0 ? void 0 : res.message);
              }
            }, function (error) {
              _this7.apiLoader['onOk'] = false;
            });
          }
        }, {
          key: "returnZero",
          value: function returnZero() {
            return 0;
          }
        }, {
          key: "getColor",
          value: function getColor(i) {
            if (i % 2 === 0 && i != 0) {
              i = 'odd';
            } // if (this.courses && (this.courses.length - 1 === i)) {i = 'last'}


            switch (i) {
              case i = 0:
                return '#bfaabf';

              case i = 'odd':
                return '#ecddf0';
            } // return 'red';

          }
        }]);

        return AddEditPermissionComponent;
      }();

      AddEditPermissionComponent.ɵfac = function AddEditPermissionComponent_Factory(t) {
        return new (t || AddEditPermissionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      AddEditPermissionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddEditPermissionComponent,
        selectors: [["app-add-edit-permission"]],
        decls: 13,
        vars: 13,
        consts: [[1, "pb-2", 3, "nzSelectedIndex", "nzSelectChange"], ["nzTitle", "Permission", 4, "ngxPermissionsOnly"], ["nzTitle", "Role Management", 4, "ngxPermissionsOnly"], [3, "nzTitle", "nzWidth", "nzVisible", "nzOkLoading", "nzClosable", "nzVisibleChange", "nzOnOk", "nzOnCancel"], [1, "row"], ["nz-form", "", 3, "formGroup"], [1, "col-md-12"], ["nzFor", "name", "nzRequired", "", 1, "text-left", 3, "nzSm"], ["nzErrorTip", "Please Add Valid Role!", 3, "nzSm"], ["nz-input", "", "type", "text", "formControlName", "name", "placeholder", "Role"], ["nzTitle", "Permission"], [3, "nzLoading"], [1, "col-12"], ["nzFor", "bill_date", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please select Role", 3, "nzSm", "nzXs"], ["nzShowSearch", "", "nzPlaceHolder", "Select Role", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "row", "style", "border: 1px solid gainsboro;", 4, "ngFor", "ngForOf"], [1, "total-section", "d-flex", "align-items-center", "justify-content-end"], [1, "p-3", "mb-0"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "disabled", "click"], [3, "nzValue", "nzLabel"], [1, "row", 2, "border", "1px solid gainsboro"], [1, "col-4", 2, "border-right", "1px solid gainsboro"], [1, "col-12", "pt-4"], [1, "ml-5"], [1, "col-8"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col-5", "pt-4"], [1, "my-0", "ml-3"], [1, "col-7", "pt-4", 2, "border-left", "1px solid whitesmoke"], ["class", "row ", 4, "ngFor", "ngForOf"], [1, "mt-0", "mx-3"], ["nz-checkbox", "", 1, "d-flex", "mr-3", "align-self-center", 3, "ngModel", "ngModelChange"], ["class", "col-12 my-2", 4, "ngFor", "ngForOf"], [1, "col-12", "my-2"], ["nz-checkbox", "", 1, "d-flex", 3, "ngModel", "ngModelChange"], [1, "my-0", "ml-3", "text-muted"], ["nzTitle", "Role Management"], [1, "row", "text-right"], ["nz-button", "", "nzType", "primary", "class", "border", 3, "click", 4, "ngxPermissionsOnly"], [3, "nzFrontPagination", "nzShowSizeChanger", "nzData", "nzLoading"], ["nzWidth", "3rem"], [4, "ngxPermissionsOnly"], [4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", 1, "border", 3, "click"], ["nz-button", "", "nzType", "link", "class", "border", "class", "mr-4 px-3", 3, "click", 4, "ngxPermissionsOnly"], ["nz-button", "", "nzType", "link", "class", "border", "class", "", 4, "ngxPermissionsOnly"], ["nz-button", "", "nzType", "link", 1, "mr-4", "px-3", 3, "click"], ["nz-button", "", "nzType", "link", 1, ""], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline", "nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure delete this Role?", "nzPopconfirmPlacement", "bottom", 3, "nzOnConfirm"]],
        template: function AddEditPermissionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-tabset", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzSelectChange", function AddEditPermissionComponent_Template_nz_tabset_nzSelectChange_1_listener($event) {
              return ctx.onTabChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddEditPermissionComponent_nz_tab_2_Template, 18, 15, "nz-tab", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddEditPermissionComponent_nz_tab_3_Template, 15, 9, "nz-tab", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-modal", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function AddEditPermissionComponent_Template_nz_modal_nzVisibleChange_4_listener($event) {
              return ctx.roleManagementLoader["isVisible"] = $event;
            })("nzOnOk", function AddEditPermissionComponent_Template_nz_modal_nzOnOk_4_listener() {
              return ctx.onClickAddEditRole();
            })("nzOnCancel", function AddEditPermissionComponent_Template_nz_modal_nzOnCancel_4_listener() {
              ctx.roleManagementLoader["isVisible"] = false;
              return ctx.addEditRoleForm.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Role Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-form-control", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSelectedIndex", ctx.currentTabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c5));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", ctx.roleManagementLoader["addRole"] ? "Add Role" : "Edit Role")("nzWidth", 500)("nzVisible", ctx.roleManagementLoader["isVisible"])("nzOkLoading", ctx.roleManagementLoader["onUpdate"])("nzClosable", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addEditRoleForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSm", 20);
          }
        },
        directives: [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_5__["NzTabSetComponent"], ngx_permissions__WEBPACK_IMPORTED_MODULE_6__["NgxPermissionsDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__["NzModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_5__["NzTabComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__["NzCardComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzOptionComponent"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_17__["NzCheckboxComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__["NzTbodyComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__["NzIconDirective"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_20__["NzPopconfirmDirective"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["KeyValuePipe"]],
        styles: ["[_nghost-%COMP%]     .ant-checkbox-inner {\n    border: 1px solid darkblue;\n}\n\n.total-section[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 5em;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    background: white;\n    box-shadow: 0px -2px 8px 0px #00000026;\n    z-index: 9;\n}\n\n.dark-bg[_ngcontent-%COMP%]{\nbackground-color: #bfaabf;\n}\n\n.light-bg[_ngcontent-%COMP%]{\n    background-color: #ecddf0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LXBlcm1pc3Npb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLE9BQU87SUFDUCxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0QyxVQUFVO0FBQ2Q7O0FBR0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoiYWRkLWVkaXQtcGVybWlzc2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5hbnQtY2hlY2tib3gtaW5uZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtibHVlO1xufVxuXG4udG90YWwtc2VjdGlvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDVlbTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IC0ycHggOHB4IDBweCAjMDAwMDAwMjY7XG4gICAgei1pbmRleDogOTtcbn1cblxuXG4uZGFyay1iZ3tcbmJhY2tncm91bmQtY29sb3I6ICNiZmFhYmY7XG59XG5cbi5saWdodC1iZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNkZGYwO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditPermissionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-edit-permission',
            templateUrl: './add-edit-permission.component.html',
            styleUrls: ['./add-edit-permission.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "iOPy":
    /*!*****************************************************************************!*\
      !*** ./src/app/employees/add-edit-permission/add-edit-permission.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: AddEditPermissionModule */

    /***/
    function iOPy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEditPermissionModule", function () {
        return AddEditPermissionModule;
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


      var _add_edit_permission_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-edit-permission-routing.module */
      "/izH");
      /* harmony import */


      var _add_edit_permission_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-edit-permission.component */
      "NlDJ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var src_app_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/ng-zorro-antd.module */
      "PMIT");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/tabs */
      "oyxB");
      /* harmony import */


      var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/popconfirm */
      "KupA");

      var AddEditPermissionModule = function AddEditPermissionModule() {
        _classCallCheck(this, AddEditPermissionModule);
      };

      AddEditPermissionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AddEditPermissionModule
      });
      AddEditPermissionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AddEditPermissionModule_Factory(t) {
          return new (t || AddEditPermissionModule)();
        },
        imports: [[ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_9__["NzPopconfirmModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _add_edit_permission_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddEditPermissionRoutingModule"], src_app_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_6__["DemoNgZorroAntdModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_8__["NzTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxPermissionsModule"].forChild()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddEditPermissionModule, {
          declarations: [_add_edit_permission_component__WEBPACK_IMPORTED_MODULE_3__["AddEditPermissionComponent"]],
          imports: [ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_9__["NzPopconfirmModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _add_edit_permission_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddEditPermissionRoutingModule"], src_app_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_6__["DemoNgZorroAntdModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_8__["NzTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxPermissionsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEditPermissionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_add_edit_permission_component__WEBPACK_IMPORTED_MODULE_3__["AddEditPermissionComponent"]],
            imports: [ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_9__["NzPopconfirmModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _add_edit_permission_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddEditPermissionRoutingModule"], src_app_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_6__["DemoNgZorroAntdModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_8__["NzTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_5__["NgxPermissionsModule"].forChild()]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=employees-add-edit-permission-add-edit-permission-module-es5.js.map