(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-merchants-merchants-module"], {
    /***/
    "21/P":
    /*!************************************************************************!*\
      !*** ./src/app/users/merchants/add-edit-dsa/add-edit-dsa.component.ts ***!
      \************************************************************************/

    /*! exports provided: AddEditDsaComponent */

    /***/
    function P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEditDsaComponent", function () {
        return AddEditDsaComponent;
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


      var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/radio */
      "bE2y");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "OzZK");
      /* harmony import */


      var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/core/transition-patch */
      "C2AL");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "RwU8");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-zorro-antd/upload */
      "D9mS");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "TaO5");

      function AddEditDsaComponent_nz_form_label_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-label", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);
        }
      }

      function AddEditDsaComponent_nz_form_label_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-label", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Entity Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);
        }
      }

      function AddEditDsaComponent_nz_option_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 86);
        }

        if (rf & 2) {
          var item_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r15.id)("nzLabel", item_r15.name);
        }
      }

      function AddEditDsaComponent_nz_option_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 86);
        }

        if (rf & 2) {
          var item_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r16.pk)("nzLabel", item_r16.name);
        }
      }

      function AddEditDsaComponent_nz_option_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 86);
        }

        if (rf & 2) {
          var item_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r17.pk)("nzLabel", item_r17.name);
        }
      }

      function AddEditDsaComponent_ng_container_83_nz_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 86);
        }

        if (rf & 2) {
          var item_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r18 == null ? null : item_r18.pk)("nzLabel", item_r18 == null ? null : item_r18.name);
        }
      }

      function AddEditDsaComponent_ng_container_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddEditDsaComponent_ng_container_83_nz_option_1_Template, 1, 2, "nz-option", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r18 == null ? null : item_r18.name);
        }
      }

      function AddEditDsaComponent_div_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-form-label", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-control", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);
        }
      }

      function AddEditDsaComponent_div_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Contact Personal Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddEditDsaComponent_div_86_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-form-label", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-form-control", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditDsaComponent_div_86_Template_input_keypress_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r21.omit_special_char($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-form-label", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Phone No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-form-control", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-form-label", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Email Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nz-form-control", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

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
        }
      }

      function AddEditDsaComponent_ng_container_119_i_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditDsaComponent_ng_container_119_i_17_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

            var k_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r27.deleteDocumentByDocumentId(k_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddEditDsaComponent_ng_container_119_i_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditDsaComponent_ng_container_119_i_19_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);

            var item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r30.onClickShowUploadedDocument(item_r23, "documents");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddEditDsaComponent_ng_container_119_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-form-label", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-form-control", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-upload", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzChange", function AddEditDsaComponent_ng_container_119_Template_nz_upload_nzChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);

            var k_r24 = ctx.index;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r33.onUpload($event, k_r24, "name");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Verify");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddEditDsaComponent_ng_container_119_i_17_Template, 1, 0, "i", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AddEditDsaComponent_ng_container_119_i_19_Template, 1, 0, "i", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r23 = ctx.$implicit;
          var k_r24 = ctx.index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", k_r24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 13)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r23.controls.display_name.value, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("nzErrorTip", "Please Add ", item_r23.controls.label_name.value, "!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzMultiple", "false")("nzAccept", ".png, .jpg, .pdf")("nzCustomRequest", ctx_r9.customUpload);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r23.controls.document_name.value ? "Re Upload" : " Upload ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDisabled", item_r23.controls.document_name.value ? false : true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r23.controls.isdelete.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r23.controls.document_name.value);
        }
      }

      function AddEditDsaComponent_button_151_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditDsaComponent_button_151_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r35.onClickSaveExistingForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Save & Add New");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r10.apiLoader["saveAddNew"])("disabled", ctx_r10.apiLoader["formSave"]);
        }
      }

      function AddEditDsaComponent_ng_container_156_ng_container_4_nz_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 86);
        }

        if (rf & 2) {
          var item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r38)("nzLabel", item_r38.name);
        }
      }

      function AddEditDsaComponent_ng_container_156_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddEditDsaComponent_ng_container_156_ng_container_4_Template_ng_container_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r42.checkItem($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddEditDsaComponent_ng_container_156_ng_container_4_nz_option_1_Template, 1, 2, "nz-option", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r38 = ctx.$implicit;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r37.documentFlagArray.includes(item_r38));
        }
      }

      function AddEditDsaComponent_ng_container_156_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-label", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Select Document");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-select", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddEditDsaComponent_ng_container_156_Template_nz_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r44.selectedDocument = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddEditDsaComponent_ng_container_156_ng_container_4_Template, 2, 1, "ng-container", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.selectedDocument);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.documentArray);
        }
      }

      function AddEditDsaComponent_ng_container_158_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "embed", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r12.sanatizeUrlToSafe, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
        }
      }

      function AddEditDsaComponent_ng_template_159_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditDsaComponent_ng_template_159_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r46.handleCancel();
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

      var AddEditDsaComponent = /*#__PURE__*/function () {
        function AddEditDsaComponent(fb, router, http, route, sanitized, message, nzImageService) {
          _classCallCheck(this, AddEditDsaComponent);

          this.fb = fb;
          this.router = router;
          this.http = http;
          this.route = route;
          this.sanitized = sanitized;
          this.message = message;
          this.nzImageService = nzImageService;
          this.documentArray = [];
          this.apiLoader = {
            'formSave': false,
            'saveAddNew': false
          };
          this.pdf_viewer_object_values = {
            'boolean': false,
            'url': '',
            'title': ''
          };
          this.roleData = [];
          this.departmentData = [];
          this.listOfDocumentWithFlag = [];
          this.documentFlagArray = [];

          this.customUpload = function (file) {
            var data = [];
            console.log(file);
            return false;
          };

          this.getListOfDocumentRequired();
        }

        _createClass(AddEditDsaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getListOfMasterPartner();
            this.fetachMasters('designation');
            this.fetachMasters('department');
            this.createMasterProductForm();
            this.route.queryParams.subscribe(function (params) {
              if (params['id']) {
                _this.isEdit = true;
                _this.masterPartnerId = params['id'];

                if (_this.masterPartnerId) {
                  _this.getPartnerDSAListById();

                  _this.getListOfStates();

                  _this.fetachMasters();
                }
              } else {
                // this.masterParnerPayout = null
                _this.isEdit = false; // this.createMasterProductForm();
                // this.getListOfDocumentRequired();
              }
            });
          }
        }, {
          key: "fetachMasters",
          value: function fetachMasters(type) {
            var _this2 = this;

            var data;

            if (type == 'designation') {
              this.http.getMasterDesignation().subscribe(function (res) {
                var temp = res['data'].results;
                temp = temp.filter(function (element) {
                  return element.name == 'Superuser';
                }); // temp.forEach(element => {
                //   temp = temp.filter(element => element.name == 'Superuser')
                //   console.log(res['data'].results, element);
                // }); 

                _this2.roleData = temp; // this.message.success(res['message'])
              });
            } else if (type == 'department') {
              this.http.getMasterDepartment().subscribe(function (res) {
                _this2.departmentData = res['data'].results; // this.message.success(res['message'])
              });
            } else {
              this.http.getMasterDesignation().subscribe(function (res) {
                _this2.roleData = res['data'].results; // this.message.success(res['message'])
              });
              this.http.getMasterDepartment().subscribe(function (res) {
                _this2.departmentData = res['data'].results; // this.message.success(res['message'])
              });
            }
          }
        }, {
          key: "getPartnerDSAListById",
          value: function getPartnerDSAListById() {
            var _this3 = this;

            this.http.getPartnerDSAListById(this.masterPartnerId).subscribe(function (res) {
              console.log(res);

              _this3.setRetrievedDataInForm(res === null || res === void 0 ? void 0 : res.data); // this.createMasterProductForm(res?.data);

            });
          }
        }, {
          key: "setRetrievedDataInForm",
          value: function setRetrievedDataInForm(data) {
            var _a;

            for (var i in this.addEditProductForm.value) {
              if (i == 'partner_master' || i == 'state') {
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
          key: "getListOfStates",
          value: function getListOfStates() {
            var _this4 = this;

            var action = 'get-states';
            this.http.fetchDetailForUserModuleDropDown(action).subscribe(function (res) {
              console.log(res);
              _this4.stateArr = res === null || res === void 0 ? void 0 : res.data;
            });
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
          key: "getListOfMasterPartner",
          value: function getListOfMasterPartner(action) {
            var _this5 = this;

            var data = {
              'page': 1,
              'limit': 100
            };
            this.http.fetchMasterPartner(data).subscribe(function (res) {
              var _a;

              console.log(res);
              _this5.listOfMasterPartner = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.results;
            }, function (err) {
              console.log(err);
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
          key: "setFormData",
          value: function setFormData(data) {
            var _this6 = this;

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
            var _a; //     }
            //     documentArray.push(documents);
            //     this.documentArray?.forEach(( entity, index) => {
            //       if (entity.pk == element?.document_master['id']) {
            //         this.documentArray.splice(index,1)
            //       }
            //     });
            //     console.log(documents, 'documents')
            //     this.addSkills(documents)
            //   });
            // }


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

                  _this6.addSkills(documents);
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
                    (_h = _this6.documentArray) === null || _h === void 0 ? void 0 : _h.forEach(function (entity, index) {
                      if (entity.pk == (element === null || element === void 0 ? void 0 : element.document_master["id"])) {
                        _this6.documentArray.splice(index, 1);
                      }
                    });
                  } // documentArray.push(documents);


                  _this6.addSkills(documents);
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
          key: "createMasterProductForm",
          value: function createMasterProductForm(data) {
            var _a, _b, _c, _d, _e, _f;

            this.addEditProductForm = this.fb.group({
              name: [data ? data === null || data === void 0 ? void 0 : data.name : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              address_line_1: [data ? data === null || data === void 0 ? void 0 : data.address_line_1 : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              address_line_2: [data ? data === null || data === void 0 ? void 0 : data.address_line_2 : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              city: [data ? data === null || data === void 0 ? void 0 : data.city : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              state: [data ? (_a = data === null || data === void 0 ? void 0 : data.state) === null || _a === void 0 ? void 0 : _a.id : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              pincode: [data ? data === null || data === void 0 ? void 0 : data.pincode : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[1-9][0-9]{5}$')]],
              phone: [data ? data === null || data === void 0 ? void 0 : data.phone : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('([0-9]{8}|[0-9]{10})')]],
              designation_id: [((_b = data === null || data === void 0 ? void 0 : data.designation) === null || _b === void 0 ? void 0 : _b.id) ? (_c = data === null || data === void 0 ? void 0 : data.designation) === null || _c === void 0 ? void 0 : _c.id : ''],
              department_id: [((_d = data === null || data === void 0 ? void 0 : data.department) === null || _d === void 0 ? void 0 : _d.id) ? (_e = data === null || data === void 0 ? void 0 : data.department) === null || _e === void 0 ? void 0 : _e.id : ''],
              // ^[6-9][0-9]{9}$
              bank_name: [data ? data === null || data === void 0 ? void 0 : data.bank_name : null],
              account_no: [data ? data === null || data === void 0 ? void 0 : data.account_no : null],
              ifsc: [data ? data === null || data === void 0 ? void 0 : data.ifsc : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[A-Z]{4}0[A-Z0-9]{6}$")]],
              branch: [data ? data === null || data === void 0 ? void 0 : data.branch : null],
              // primary_upi: [data ? data?.primary_upi : null, [Validators.required]],
              // secondary_upi: [data ? data?.secondary_upi : null, [Validators.required]],
              // mdr: [data ? data?.mdr : null, [Validators.required]],
              // interest_subvention: [data ? data?.interest_subvention : null, [Validators.required]],
              payout: [data ? data === null || data === void 0 ? void 0 : data.payout : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              employee: [data ? data === null || data === void 0 ? void 0 : data.employee : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              dsa_type: [data ? data === null || data === void 0 ? void 0 : data.dsa_type : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              // Attribute Type under business detail
              // business_type: [data ? data?.name : null, [Validators.required]],
              // Attribute Nature under business detail
              // business_nature: [data ? data?.name : null, [Validators.required]],
              display_name: [data ? data === null || data === void 0 ? void 0 : data.display_name : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              contact_person_name: [data ? data === null || data === void 0 ? void 0 : data.contact_person_name : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              contact_person_phone: [data ? data === null || data === void 0 ? void 0 : data.contact_person_phone : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('([0-9]{8}|[0-9]{10})')]],
              contact_person_email: [data ? data === null || data === void 0 ? void 0 : data.contact_person_email : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$')]],
              master: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              document_data: this.fb.array([]),
              partner_nature: ['DSA', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              partner_master: [data ? (_f = data === null || data === void 0 ? void 0 : data.master_partner) === null || _f === void 0 ? void 0 : _f.id : null]
            });

            if (data) {
              this.setFormData(data);
            }
          }
        }, {
          key: "deleteDocumentByDocumentId",
          value: function deleteDocumentByDocumentId(i) {
            var _this7 = this;

            var _a, _b, _c, _d, _e, _f, _g;

            var fileName = this.addEditProductForm.get("document_data");
            var master = (_b = (_a = fileName.controls) === null || _a === void 0 ? void 0 : _a[i].value) === null || _b === void 0 ? void 0 : _b.document_master;
            var selectedFile = (_c = fileName.controls) === null || _c === void 0 ? void 0 : _c[i].value;

            if (!((_e = (_d = fileName.controls) === null || _d === void 0 ? void 0 : _d[i].value) === null || _e === void 0 ? void 0 : _e.id)) {
              var _document = {
                name: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.label_name,
                pk: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.document_master,
                front_back_flag: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.front_back_flag,
                display_name: null,
                display_name_front: (selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.name) + " Front",
                display_name_back: (selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.name) + " Back",
                isdelete: false
              };

              if ((_document === null || _document === void 0 ? void 0 : _document.pk) == 3) {
                this.documentArray.push(_document);
              }

              this.message.success(((_g = (_f = fileName.controls) === null || _f === void 0 ? void 0 : _f[i].value) === null || _g === void 0 ? void 0 : _g.label_name) + " Document Deleted");
              fileName.removeAt(i);
              this.selectedDocument = null;
            } else {
              this.http.deletePartnerDocumentByDocumentId(selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.id).subscribe(function (res) {
                var _a, _b;

                var document = {
                  name: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.label_name,
                  pk: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.document_master,
                  front_back_flag: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.front_back_flag
                };

                if ((document === null || document === void 0 ? void 0 : document.pk) == 3) {
                  _this7.documentArray.push(document);
                }

                _this7.message.success(((_b = (_a = fileName.controls) === null || _a === void 0 ? void 0 : _a[i].value) === null || _b === void 0 ? void 0 : _b.label_name) + " Document Deleted");

                fileName.removeAt(i);
              });
              this.selectedDocument = null;
            }
          }
        }, {
          key: "getListOfDocumentRequired",
          value: function getListOfDocumentRequired() {
            var _this8 = this;

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

                  _this8.documentArray.push(otherDoc);
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
            } // this.documentFlagArray.push(this.selectedDocument);


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
            // return this.fb.group({
            //   id: [data ? data?.id : null],
            //   document_master: [data?.pk],
            //   label_name: [data?.name],
            //   documents: [data?.documents],
            //   document_name:[data?.document_name],
            //   is_verified:[ data?.is_verified ? data?.is_verified : false]
            // })
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
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m; // let fileName = this.addEditProductForm.get('document_data') as FormArray;
            // fileName.controls?.[i].patchValue({document_name: e?.file?.name});
            // let value = this.addEditProductForm.get('document_data') as FormArray;
            // value.controls?.[i].patchValue({documents: e?.file?.originFileObj});


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
            var _this9 = this;

            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;

            var saveDoc = [];

            if (this.addEditProductForm.value.dsa_type === 'Individual') {
              this.addEditProductForm.patchValue({
                contact_person_name: this.addEditProductForm.value.name,
                contact_person_phone: this.addEditProductForm.value.phone,
                // department_id:'',
                // designation_id :'',
                source: 'admin'
              });
            }

            console.log(this.addEditProductForm.value);

            for (var _i in this.addEditProductForm.controls) {
              this.addEditProductForm.controls[_i].markAsDirty();

              this.addEditProductForm.controls[_i].updateValueAndValidity();
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
              this.apiLoader['formSave'] = true;

              if (!this.isEdit) {
                var data = new FormData();
                var sendDate = this.addEditProductForm.value;

                for (var i in sendDate.document_data) {
                  // if(sendDate?.document_data[i]?.documents?.includes('/')){
                  // break;  
                  // }
                  if (!sendDate.document_data[i].id) {
                    (_a = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _a === void 0 ? true : delete _a.id;
                  }

                  if ((_b = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _b === void 0 ? void 0 : _b.front_back_flag) {
                    if ((_c = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _c === void 0 ? void 0 : _c.document_name_front) {
                      data.append("documents", (_d = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _d === void 0 ? void 0 : _d.documents_front);
                      (_e = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _e === void 0 ? true : delete _e.documents_front;
                    }

                    if ((_f = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _f === void 0 ? void 0 : _f.document_name_back) {
                      data.append("documents", (_g = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _g === void 0 ? void 0 : _g.documents_back);
                      (_h = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _h === void 0 ? true : delete _h.documents_back;
                    }
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
                      console.log(i, sendDate[i]);
                    } // data.append(i, sendDate[i])

                  }
                }

                var url = this.http.createMasterPartnerForm(data);
                url.subscribe(function (res) {
                  var _a;

                  if (res.success) {
                    _this9.message.success(res === null || res === void 0 ? void 0 : res.message);

                    _this9.apiLoader['formSave'] = false;

                    _this9.router.navigate(['merchants/DSA']);
                  } else {
                    for (var i in saveDoc) {
                      var value = _this9.addEditProductForm.get("document_data");

                      (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({
                        documents: saveDoc[i]
                      });
                    }

                    _this9.message.error(res === null || res === void 0 ? void 0 : res.message);

                    _this9.apiLoader['formSave'] = false;
                  }
                }, function (error) {
                  var _a;

                  for (var i in saveDoc) {
                    var value = _this9.addEditProductForm.get("document_data");

                    (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({
                      documents: saveDoc[i]
                    });
                  }

                  _this9.apiLoader['formSave'] = false;
                });
              } else {
                var _data2 = new FormData();

                var sendDate = this.addEditProductForm.value;

                for (var i in sendDate.document_data) {
                  if (!sendDate.document_data[i].id) {
                    (_o = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _o === void 0 ? true : delete _o.id;
                  } // console.log('working' + sendDate.document_data +  ' ' +  i);
                  // if(sendDate.document_data[i].documents?.['uid']){
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
                    } // data.append(i, sendDate[i])

                  }
                }

                _data2.append('source', 'admin');

                var _url = this.http.updateMasterPartnerForm(this.masterPartnerId, _data2);

                _url.subscribe(function (res) {
                  if (res.success) {
                    _this9.message.success(res === null || res === void 0 ? void 0 : res.message);

                    _this9.apiLoader['formSave'] = false;

                    _this9.router.navigate(['merchants/DSA']);
                  } else {
                    _this9.message.error(res === null || res === void 0 ? void 0 : res.message);

                    _this9.apiLoader['formSave'] = false;
                  }
                }, function (err) {
                  _this9.apiLoader['formSave'] = false;
                });
              }
            }
          }
        }, {
          key: "onClickSaveExistingForm",
          value: function onClickSaveExistingForm() {
            var _this10 = this;

            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

            var saveDoc = [];

            if (this.addEditProductForm.value.dsa_type === 'Individual') {
              this.addEditProductForm.patchValue({
                contact_person_name: this.addEditProductForm.value.name,
                contact_person_phone: this.addEditProductForm.value.phone
              });
            }

            for (var _i2 in this.addEditProductForm.controls) {
              this.addEditProductForm.controls[_i2].markAsDirty();

              this.addEditProductForm.controls[_i2].updateValueAndValidity();
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
                  (_a = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _a === void 0 ? true : delete _a.id;
                }

                if (!sendDate.unique_code) {
                  sendDate === null || sendDate === void 0 ? true : delete sendDate.unique_code;
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
                  } // data.append(i, sendDate[i])

                }
              }

              data.append('source', 'admin');
              var url = this.http.createMasterPartnerForm(data);
              url.subscribe(function (res) {
                var _a;

                if (res.success) {
                  _this10.message.success(res === null || res === void 0 ? void 0 : res.message);

                  _this10.apiLoader['saveAddNew'] = false;
                  var newRouterLink = '/merchants/DSA/add-dsa';

                  _this10.router.navigate(['/']).then(function () {
                    _this10.router.navigate([newRouterLink]);
                  });
                } else {
                  for (var i in saveDoc) {
                    var value = _this10.addEditProductForm.get("document_data");

                    (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({
                      documents: saveDoc[i]
                    });
                  }

                  _this10.message.error(res === null || res === void 0 ? void 0 : res.message);

                  _this10.apiLoader['saveAddNew'] = false;
                }
              }, function (err) {
                var _a;

                for (var i in saveDoc) {
                  var value = _this10.addEditProductForm.get("document_data");

                  (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({
                    documents: saveDoc[i]
                  });
                }

                _this10.apiLoader['saveAddNew'] = false;
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
          key: "handleChange",
          value: function handleChange(e, index) {
            console.log(index, 'index');
            this.index = index;
            this.addEditProductForm.get('document_data')['controls'][index].controls.documents.setValue(e.file.originFileObj);
          }
        }, {
          key: "skills",
          get: function get() {
            return this.addEditProductForm.get("document_data");
          }
        }]);

        return AddEditDsaComponent;
      }();

      AddEditDsaComponent.ɵfac = function AddEditDsaComponent_Factory(t) {
        return new (t || AddEditDsaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_7__["NzImageService"]));
      };

      AddEditDsaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddEditDsaComponent,
        selectors: [["app-add-edit-dsa"]],
        decls: 161,
        vars: 91,
        consts: [["nz-form", "", 3, "formGroup"], [1, "row", "border-bottom"], [1, "col-12"], ["nzFor", "dsa_type", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please select DSA Type!", 3, "nzSm", "nzXs"], ["formControlName", "dsa_type"], ["nz-radio", "", "nzValue", "Individual"], ["nz-radio", "", "nzValue", "Entity"], [1, "col-md-12"], ["nzFor", "name", "class", "text-left", "nzRequired", "", 3, "nzSm", "nzXs", 4, "ngIf"], ["nzErrorTip", "Please Add Valid Entity Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "name", "placeholder", "Merchant Name"], ["nzFor", "display_name", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add valid Display Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "display_name", "placeholder", "Display Name"], ["nzFor", "address_line_1", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Address!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "address_line_1", "placeholder", "Address Line 1"], ["nzFor", "address_line_2", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Address line 2!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "address_line_2", "placeholder", "Address Line 2"], ["nzFor", "city", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid City!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "city", "placeholder", "City", 3, "keypress"], ["nzFor", "state", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please select Valid Sate", 3, "nzSm", "nzXs"], ["formControlName", "state", "nzPlaceHolder", "Select State", "nzShowSearch", "", "nzAllowClear", "", 3, "nzFocus", "nzOnSearch"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzFor", "pincode", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Pincode!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "pincode", "placeholder", "Pincode"], ["nzFor", "phone", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Phone No.!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "phone", "placeholder", "Phone No."], ["nzFor", "designation_id", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please input Designation!", 3, "nzSm", "nzXs"], ["nzAllowClear", "", "formControlName", "designation_id", "nzPlaceHolder", "Please select Designation", 3, "nzFocus"], ["nzFor", "department_id", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzAllowClear", "", "formControlName", "department_id", "nzPlaceHolder", "Please select Department", 3, "nzFocus"], ["nzFor", "partner_master", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Select Valid Master Partner!", 3, "nzSm", "nzXs"], ["nzAllowClear", "", "nzShowSearch", "", "nzPlaceHolder", "Select Master Partner", "formControlName", "partner_master", 1, "mr-2", "width", 3, "nzAllowClear", "keyup"], ["nzCustomContent", "", 4, "ngFor", "ngForOf"], ["class", "col-md-12", 4, "ngIf"], ["class", "mt-2", 4, "ngIf"], ["class", "row border-bottom", 4, "ngIf"], [1, "mt-2"], [1, "col-md-6"], ["nzFor", "bank_name", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Bank Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "bank_name", "placeholder", "Bank Name", 3, "keypress"], ["nzFor", "account_no", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Account No.!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "account_no", "placeholder", "Account No."], ["nzFor", "ifsc", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add IFSC!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "ifsc", "placeholder", "IFSC"], ["nzFor", "branch", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Branch!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "branch", "placeholder", "Branch", 3, "keypress"], [1, "mt-2", "d-flex"], [1, "mr-2"], ["formArrayName", "document_data", 4, "ngFor", "ngForOf"], [1, "row", "no-gutters"], [1, "col-12", "d-flex", "justify-content-between"], ["nz-button", "", "nzType", "link", 1, "pl-0", 3, "click"], [1, "row", "mt-2", "border-top"], ["nzFor", "employee", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please select Employee!", 3, "nzSm", "nzXs"], ["formControlName", "employee"], ["nz-radio", "", "nzValue", "yes"], ["nz-radio", "", "nzValue", "no"], ["nz-radio", "", "nzValue", "na"], ["nzFor", "payout", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please select Payout!", 3, "nzSm", "nzXs"], ["formControlName", "payout"], [1, "row", "my-3", "justify-content-between"], [1, "col-3"], ["nzType", "primary", "nz-button", "", "type", "submit", 3, "nzLoading", "disabled", "click", 4, "ngIf"], [1, "col-3", "text-right"], ["type", "submit", "nz-button", "", "nzType", "primary", 3, "nzLoading", "disabled", "click"], ["nzTitle", "Add New Document", 3, "nzVisible", "nzWidth", "nzOkDisabled", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nzHeight", "50vw", "nzWidth", "60vw", "nzKeyboard", "true", 3, "nzVisible", "nzTitle", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalFooter", ""], ["nzFor", "name", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], [3, "nzValue", "nzLabel"], ["nzCustomContent", ""], [3, "nzValue", "nzLabel", 4, "ngIf"], ["nzFor", "contact_person_email", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Email!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "contact_person_email", "placeholder", "Person Email", 2, "text-transform", "lowercase"], ["nzFor", "contact_person_name", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "contact_person_name", "placeholder", "Person Name", 3, "keypress"], ["nzFor", "contact_person_phone", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Phone No!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "contact_person_phone", "placeholder", "person Phone No."], ["formArrayName", "document_data"], [1, "col-md-12", 3, "formGroupName"], [1, "d-flex", "flex-row", "bd-highlight", "mb-3"], [1, "px-2", 2, "min-width", "25%"], ["nzFor", "documents", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzErrorTip"], [1, "d-flex"], [3, "nzMultiple", "nzAccept", "nzCustomRequest", "nzChange"], ["nz-button", "", "type", "button"], ["nz-icon", "", "nzType", "upload"], [1, "px-2"], ["formControlName", "is_verified", "nz-checkbox", "", 1, "ml-3", "align-self-center", 3, "nzDisabled"], ["class", "mx-3", "nz-icon", "", "nzType", "delete", "nzTheme", "outline", "style", "font-size: 1rem; cursor: pointer; color: red;", 3, "click", 4, "ngIf"], ["class", " text-primary", "nz-icon", "", "nzType", "eye", "nzTheme", "outline", "style", "font-size: 1rem; cursor: pointer;", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline", 1, "mx-3", 2, "font-size", "1rem", "cursor", "pointer", "color", "red", 3, "click"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline", 1, "text-primary", 2, "font-size", "1rem", "cursor", "pointer", 3, "click"], ["nzType", "primary", "nz-button", "", "type", "submit", 3, "nzLoading", "disabled", "click"], ["nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzPlaceHolder", "Select Document", 1, "ml-4", 2, "min-width", "13rem", 3, "ngModel", "ngModelChange"], [3, "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModelChange"], [1, "pdf_viewer_container"], ["width", "100%", 2, "height", "35rem", 3, "src"], ["nz-button", "", "nzType", "primary", 3, "click"]],
        template: function AddEditDsaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "DSA Type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-form-control", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-radio-group", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Individual");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Entity");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AddEditDsaComponent_nz_form_label_16_Template, 2, 2, "nz-form-label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddEditDsaComponent_nz_form_label_17_Template, 2, 2, "nz-form-label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-form-control", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nz-form-label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Display Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "nz-form-control", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "nz-form-label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Address Line 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "nz-form-control", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "nz-form-label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Address line 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "nz-form-control", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "nz-form-label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "City ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "nz-form-control", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditDsaComponent_Template_input_keypress_43_listener($event) {
              return ctx.omit_special_char($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "nz-form-label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "State ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "nz-form-control", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "nz-select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzFocus", function AddEditDsaComponent_Template_nz_select_nzFocus_49_listener() {
              return ctx.getListOfStates();
            })("nzOnSearch", function AddEditDsaComponent_Template_nz_select_nzOnSearch_49_listener($event) {
              return ctx.onSearchGetList($event, "state");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, AddEditDsaComponent_nz_option_50_Template, 1, 2, "nz-option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "nz-form-label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Pin Code ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "nz-form-control", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "nz-form-label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Phone No ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "nz-form-control", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "nz-form-label", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Designation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "nz-form-control", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "nz-select", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzFocus", function AddEditDsaComponent_Template_nz_select_nzFocus_68_listener() {
              return ctx.fetachMasters("designation");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, AddEditDsaComponent_nz_option_69_Template, 1, 2, "nz-option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "nz-form-label", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Department ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "nz-form-control", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "nz-select", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzFocus", function AddEditDsaComponent_Template_nz_select_nzFocus_75_listener() {
              return ctx.fetachMasters("department");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, AddEditDsaComponent_nz_option_76_Template, 1, 2, "nz-option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "nz-form-label", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Referred By ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "nz-form-control", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "nz-select", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AddEditDsaComponent_Template_nz_select_keyup_82_listener($event) {
              return ctx.getListOfMasterPartner($event == null ? null : $event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, AddEditDsaComponent_ng_container_83_Template, 2, 1, "ng-container", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, AddEditDsaComponent_div_84_Template, 6, 4, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, AddEditDsaComponent_div_85_Template, 3, 0, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, AddEditDsaComponent_div_86_Template, 19, 12, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " Banking Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "nz-form-label", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Bank Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "nz-form-control", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "input", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditDsaComponent_Template_input_keypress_97_listener($event) {
              return ctx.omit_special_char($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "nz-form-label", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "A/c No. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "nz-form-control", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "input", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "nz-form-label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "IFSC Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "nz-form-control", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "input", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "nz-form-label", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Branch");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "nz-form-control", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "input", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditDsaComponent_Template_input_keypress_115_listener($event) {
              return ctx.omit_special_char($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "h5", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, " KYC Documents ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](119, AddEditDsaComponent_ng_container_119_Template, 20, 14, "ng-container", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "button", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditDsaComponent_Template_button_click_122_listener($event) {
              return ctx.onClickOpenPopUp($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "+Add Document");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "nz-form-label", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Employee ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "nz-form-control", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "nz-radio-group", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "label", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "label", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "label", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "N/A");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "nz-form-label", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Payout ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "nz-form-control", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "nz-radio-group", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "label", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "label", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "label", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "N/A");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](151, AddEditDsaComponent_button_151_Template, 2, 2, "button", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "button", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditDsaComponent_Template_button_click_153_listener() {
              return ctx.onClickSubmitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "nz-modal", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function AddEditDsaComponent_Template_nz_modal_nzVisibleChange_155_listener($event) {
              return ctx.isVisible = $event;
            })("nzOnCancel", function AddEditDsaComponent_Template_nz_modal_nzOnCancel_155_listener() {
              return ctx.handleCancel();
            })("nzOnOk", function AddEditDsaComponent_Template_nz_modal_nzOnOk_155_listener() {
              return ctx.addRule();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](156, AddEditDsaComponent_ng_container_156_Template, 5, 4, "ng-container", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "nz-modal", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function AddEditDsaComponent_Template_nz_modal_nzVisibleChange_157_listener($event) {
              return ctx.pdf_viewer_object_values["boolean"] = $event;
            })("nzOnCancel", function AddEditDsaComponent_Template_nz_modal_nzOnCancel_157_listener() {
              return ctx.handleCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](158, AddEditDsaComponent_ng_container_158_Template, 3, 1, "ng-container", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](159, AddEditDsaComponent_ng_template_159_Template, 2, 0, "ng-template", null, 84, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](160);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.addEditProductForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addEditProductForm.get("dsa_type").value == "Individual" || ctx.addEditProductForm.get("dsa_type").value == null);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addEditProductForm.get("dsa_type").value == "Entity");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.roleData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.departmentData);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAllowClear", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listOfMasterPartner);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addEditProductForm.get("dsa_type").value == "Individual");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addEditProductForm.get("dsa_type").value == "Entity" || ctx.addEditProductForm.get("dsa_type").value == null);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.addEditProductForm.get("dsa_type").value == "Entity" || ctx.addEditProductForm.get("dsa_type").value == null);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.get_underwritingArr(ctx.addEditProductForm));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx.apiLoader["formSave"])("disabled", ctx.apiLoader["saveAddNew"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzWidth", "580px")("nzOkDisabled", !ctx.selectedDocument);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", ctx.pdf_viewer_object_values["boolean"])("nzTitle", ctx.pdf_viewer_object_values["title"])("nzFooter", _r13);
          }
        },
        directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__["NzCardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormControlComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_11__["NzRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_11__["NzRadioComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__["NzSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__["NzWaveDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__["NzModalContentDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_14__["NzOptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_19__["NzUploadComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_21__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
        styles: ["[_nghost-%COMP%]     .ant-upload-list-text-container{\n  display: none !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LWRzYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCIiwiZmlsZSI6ImFkZC1lZGl0LWRzYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5hbnQtdXBsb2FkLWxpc3QtdGV4dC1jb250YWluZXJ7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddEditDsaComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-add-edit-dsa',
            templateUrl: './add-edit-dsa.component.html',
            styleUrls: ['./add-edit-dsa.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
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
    "3Kr9":
    /*!****************************************************************************!*\
      !*** ./src/app/users/merchants/merchants-list/merchants-list.component.ts ***!
      \****************************************************************************/

    /*! exports provided: MerchantsListComponent */

    /***/
    function Kr9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MerchantsListComponent", function () {
        return MerchantsListComponent;
      });
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
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


      var _shared_template_double_confirmation_popup_double_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../../shared/template/double-confirmation-popup/double-confirmation-popup.component */
      "thbs");
      /* harmony import */


      var _shared_template_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../../shared/template/change-password/change-password.component */
      "Kz7f");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "TaO5");

      var _c0 = function _c0() {
        return ["/merchants/list/add-merchant"];
      };

      function MerchantsListComponent_button_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "+ Add Merchant");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
        }
      }

      function MerchantsListComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MerchantsListComponent_ng_template_21_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r26.getResultBasedOnSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_td_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzExpandChange", function MerchantsListComponent_ng_container_48_td_2_Template_td_nzExpandChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var data_r28 = ctx_r46.$implicit;
            var i_r29 = ctx_r46.index;

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r45.onExpandChange(data_r28.id, $event, i_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var data_r28 = ctx_r48.$implicit;
          var i_r29 = ctx_r48.index;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzExpand", ctx_r30.expandSet.has(data_r28.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r29 + 1, "");
        }
      }

      function MerchantsListComponent_ng_container_48_td_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzExpandChange", function MerchantsListComponent_ng_container_48_td_3_Template_td_nzExpandChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var data_r28 = ctx_r50.$implicit;
            var i_r29 = ctx_r50.index;

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r49.onExpandChange(data_r28.id, $event, i_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var data_r28 = ctx_r52.$implicit;
          var i_r29 = ctx_r52.index;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzExpand", ctx_r31.expandSet.has(data_r28.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r31.page - 1) * ctx_r31.globalPageSize + (i_r29 + 1), "");
        }
      }

      function MerchantsListComponent_ng_container_48_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_td_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return ["/merchants/list/edit-merchant"];
      };

      var _c2 = function _c2(a0) {
        return {
          id: a0
        };
      };

      function MerchantsListComponent_ng_container_48_li_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c2, data_r28.id));
        }
      }

      function MerchantsListComponent_ng_container_48_ng_container_26_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MerchantsListComponent_ng_container_48_ng_container_26_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57);

            var data_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r55.deleteUserByUserId(data_r28 == null ? null : data_r28.id, false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Inactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_ng_container_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MerchantsListComponent_ng_container_48_ng_container_26_li_1_Template, 3, 0, "li", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !data_r28.is_deleted);
        }
      }

      function MerchantsListComponent_ng_container_48_ng_container_27_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MerchantsListComponent_ng_container_48_ng_container_27_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62);

            var data_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r60.deleteUserByUserId(data_r28 == null ? null : data_r28.id, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_ng_container_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MerchantsListComponent_ng_container_48_ng_container_27_li_1_Template, 3, 0, "li", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r28.is_deleted);
        }
      }

      function MerchantsListComponent_ng_container_48_li_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MerchantsListComponent_ng_container_48_li_28_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66);

            var data_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r64.storeSelectedId(data_r28 == null ? null : data_r28.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-upload", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Upload Agreement ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzMultiple", false)("nzAccept", ".xls, .xlsx, .pdf")("nzBeforeUpload", ctx_r40.beforeUpload);
        }
      }

      function MerchantsListComponent_ng_container_48_li_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MerchantsListComponent_ng_container_48_li_29_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69);

            var data_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r67.storeSelectedId(data_r28 == null ? null : data_r28.id, "get");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Show Agreement");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Submitted ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " & \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Document Not Submitted ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Verified ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_ng_container_8_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnConfirm", function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_ng_container_8_span_1_Template_a_nzOnConfirm_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r89);

            var data_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r87.onClickVerifyDoc(data_r73 == null ? null : data_r73.id);
          })("nzOnCancel", function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_ng_container_8_span_1_Template_a_nzOnCancel_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r89);

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](7);

            return ctx_r90.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Plz Click to verify ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_ng_container_8_span_1_Template, 3, 0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r73 == null ? null : data_r73.is_verified) && (data_r73 == null ? null : data_r73.document_file_front));
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_ng_container_10_i_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_ng_container_10_i_1_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r95);

            var data_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;

            var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r93.onClickDownloadSelectedDocument(data_r73, "front");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_ng_container_10_i_1_Template, 1, 0, "i", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r73 == null ? null : data_r73.document_file_front);
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_ng_container_11_i_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_ng_container_11_i_1_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r100);

            var data_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;

            var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r98.storeSelectedId(data_r73, "submitted", "front");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_ng_container_11_i_1_Template, 1, 0, "i", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r73 == null ? null : data_r73.document_file_front);
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Submitted ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Document Not Submitted ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_i_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_i_19_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r104);

            var data_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r102.onClickDownloadSelectedDocument(data_r73, "back");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_i_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_i_20_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r107);

            var data_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r105.storeSelectedId(data_r73, "submitted", "back");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c3 = function _c3() {
        return ["verify_document_merchant"];
      };

      var _c4 = function _c4() {
        return ["download_document"];
      };

      var _c5 = function _c5() {
        return ["view_document"];
      };

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_span_5_Template, 4, 0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_span_6_Template, 2, 0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_span_7_Template, 2, 0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_ng_container_8_Template, 2, 1, "ng-container", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_ng_container_10_Template, 2, 1, "ng-container", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_ng_container_11_Template, 2, 1, "ng-container", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_span_16_Template, 3, 0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_span_17_Template, 2, 0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_i_19_Template, 1, 0, "i", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_i_20_Template, 1, 0, "i", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r73 == null ? null : data_r73.document_master == null ? null : data_r73.document_master.name) + " Front", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r73 == null ? null : data_r73.document_file_front);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r73 == null ? null : data_r73.document_file_front));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r73 == null ? null : data_r73.is_verified);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r73 == null ? null : data_r73.document_master == null ? null : data_r73.document_master.name) + " Back", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r73 == null ? null : data_r73.document_file_back);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r73 == null ? null : data_r73.document_file_back));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r73 == null ? null : data_r73.document_file_back);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r73 == null ? null : data_r73.document_file_back);
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_2_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Submitted ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " & \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_2_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Document Not Submitted ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_2_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Verified ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_2_span_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnConfirm", function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_2_span_8_Template_a_nzOnConfirm_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117);

            var data_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r115.onClickVerifyDoc(data_r73 == null ? null : data_r73.id);
          })("nzOnCancel", function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_2_span_8_Template_a_nzOnCancel_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117);

            var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](6);

            return ctx_r118.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Plz Click to verify ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_2_i_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_2_i_10_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r121);

            var data_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r119.onClickDownloadSelectedDocument(data_r73, "single");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_2_i_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_2_i_11_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r124);

            var data_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r122.storeSelectedId(data_r73, "submitted", "single");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_2_span_5_Template, 4, 0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_2_span_6_Template, 2, 0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_2_span_7_Template, 2, 0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_2_span_8_Template, 3, 0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_2_i_10_Template, 1, 0, "i", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_2_i_11_Template, 1, 0, "i", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r73 == null ? null : data_r73.document_master == null ? null : data_r73.document_master.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r73 == null ? null : data_r73.document_file);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r73 == null ? null : data_r73.document_file));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r73 == null ? null : data_r73.is_verified);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r73 == null ? null : data_r73.is_verified) && (data_r73 == null ? null : data_r73.document_file));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r73 == null ? null : data_r73.document_file);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r73 == null ? null : data_r73.document_file);
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_1_Template, 21, 15, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_div_2_Template, 12, 7, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r73 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r73 == null ? null : data_r73.document_master == null ? null : data_r73.document_master.require_front_back);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r73 == null ? null : data_r73.document_master == null ? null : data_r73.document_master.require_front_back));
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MerchantsListComponent_ng_container_48_div_97_div_3_div_1_Template, 3, 2, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.documents);
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " No Documents To show ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_div_97_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nz-page-header", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-card", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MerchantsListComponent_ng_container_48_div_97_div_3_Template, 2, 1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MerchantsListComponent_ng_container_48_div_97_div_4_Template, 4, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r42.storeDetailId == data_r28.id ? ctx_r42._apiLoader["detailList"] : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.documents == null ? null : data_r28.expandSet.documents.length) > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.documents == null ? null : data_r28.expandSet.documents.length) <= 0);
        }
      }

      function MerchantsListComponent_ng_container_48_div_101_div_1_div_17_li_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MerchantsListComponent_ng_container_48_div_101_div_1_div_17_li_6_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r136);

            var data_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r134.onClickGetPassword("reset", data_r129);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Reset Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_48_div_101_div_1_div_17_li_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MerchantsListComponent_ng_container_48_div_101_div_1_div_17_li_7_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r139);

            var data_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r137.onClickGetPassword("show", data_r129);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Show Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c6 = function _c6() {
        return ["reset_password_merchant"];
      };

      var _c7 = function _c7() {
        return ["show_password_merchant"];
      };

      function MerchantsListComponent_ng_container_48_div_101_div_1_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MerchantsListComponent_ng_container_48_div_101_div_1_div_17_li_6_Template, 3, 0, "li", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MerchantsListComponent_ng_container_48_div_101_div_1_div_17_li_7_Template, 3, 0, "li", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzClickHide", false)("nzTrigger", "click")("nzPlacement", "bottomRight")("nzDropdownMenu", _r131);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c7));
        }
      }

      var _c8 = function _c8() {
        return ["show_password_merchant", "reset_password_merchant"];
      };

      function MerchantsListComponent_ng_container_48_div_101_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 71);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MerchantsListComponent_ng_container_48_div_101_div_1_div_17_Template, 8, 8, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r129 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r129 == null ? null : data_r129.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r129 == null ? null : data_r129.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c8));
        }
      }

      function MerchantsListComponent_ng_container_48_div_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MerchantsListComponent_ng_container_48_div_101_div_1_Template, 18, 4, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.corporate_admins);
        }
      }

      function MerchantsListComponent_ng_container_48_div_102_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " No Corporate Admin Detail's to show ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c9 = function _c9() {
        return ["edit_merchant"];
      };

      var _c10 = function _c10() {
        return ["toggle_merchants"];
      };

      var _c11 = function _c11() {
        return ["upload_agreement_merchant"];
      };

      var _c12 = function _c12() {
        return ["show_agreement_merchant"];
      };

      var _c13 = function _c13() {
        return ["view_document_merchant"];
      };

      function MerchantsListComponent_ng_container_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MerchantsListComponent_ng_container_48_td_2_Template, 2, 2, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MerchantsListComponent_ng_container_48_td_3_Template, 2, 2, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MerchantsListComponent_ng_container_48_td_15_Template, 3, 0, "td", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MerchantsListComponent_ng_container_48_td_16_Template, 3, 0, "td", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MerchantsListComponent_ng_container_48_td_17_Template, 3, 0, "td", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, MerchantsListComponent_ng_container_48_td_18_Template, 3, 0, "td", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nz-dropdown-menu", null, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ul", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, MerchantsListComponent_ng_container_48_li_25_Template, 3, 5, "li", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, MerchantsListComponent_ng_container_48_ng_container_26_Template, 2, 1, "ng-container", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, MerchantsListComponent_ng_container_48_ng_container_27_Template, 2, 1, "ng-container", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, MerchantsListComponent_ng_container_48_li_28_Template, 3, 3, "li", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, MerchantsListComponent_ng_container_48_li_29_Template, 3, 0, "li", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tr", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "nz-page-header", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "nz-card", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 8);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 8);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "nz-page-header", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "nz-card", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " Bank Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " IFSC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " A/c No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " Branch. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, MerchantsListComponent_ng_container_48_div_97_Template, 5, 4, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "nz-page-header", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "nz-card", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, MerchantsListComponent_ng_container_48_div_101_Template, 2, 1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, MerchantsListComponent_ng_container_48_div_102_Template, 4, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "nz-page-header", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "nz-card", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, " Primary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " Secondary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "nz-page-header", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "nz-card", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, " MDR % ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, " Interest Subvention ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, " Payout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r28 = ctx.$implicit;

          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](50);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](52);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](54);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](58);

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](62);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.page == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.page > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r28.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r28.display_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 50, data_r28.created_at, "dd MMM yyyy"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r28 == null ? null : data_r28.mdr);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r28 == null ? null : data_r28.unique_code);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r28 == null ? null : data_r28.registered);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r28 == null ? null : data_r28.registered));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r28 == null ? null : data_r28.is_deleted));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r28 == null ? null : data_r28.is_deleted);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzClickHide", false)("nzTrigger", "click")("nzPlacement", "bottomRight")("nzDropdownMenu", _r36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](53, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](54, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](55, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](56, _c11));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](57, _c12));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzExpand", ctx_r3.expandSet.has(data_r28.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r3.storeDetailId == data_r28.id ? ctx_r3._apiLoader["detailList"] : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.address_line_1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.phone, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r3.storeDetailId == data_r28.id ? ctx_r3._apiLoader["detailList"] : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.contact_person_name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.contact_person_phone, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.contact_person_email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r3.storeDetailId == data_r28.id ? ctx_r3._apiLoader["detailList"] : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.bank_name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.ifsc, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.account_no, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.branch, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](58, _c13));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r3.storeDetailId == data_r28.id ? ctx_r3._apiLoader["detailList"] : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.corporate_admins == null ? null : data_r28.expandSet.corporate_admins.length) > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.corporate_admins == null ? null : data_r28.expandSet.corporate_admins.length) <= 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r3.storeDetailId == data_r28.id ? ctx_r3._apiLoader["detailList"] : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.primary_upi, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.secondary_upi, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r3.storeDetailId == data_r28.id ? ctx_r3._apiLoader["detailList"] : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.mdr) ? data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.mdr : " -- ", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.interest_subvention) ? data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.interest_subvention : " -- ", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.payout) ? data_r28 == null ? null : data_r28.expandSet == null ? null : data_r28.expandSet.payout : " -- ", " ");
        }
      }

      function MerchantsListComponent_ng_template_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Basic Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_template_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Contact Personal Detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_template_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Banking Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_template_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "KYC Documents");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_template_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Corporate Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_template_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Other Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_template_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "UPI Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_ng_container_64_Template(rf, ctx) {
        if (rf & 1) {
          var _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-double-confirmation-popup", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onOkCall", function MerchantsListComponent_ng_container_64_Template_app_double_confirmation_popup_onOkCall_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r142);

            var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r141.confirmationTrigger();
          })("onCencelCall", function MerchantsListComponent_ng_container_64_Template_app_double_confirmation_popup_onCencelCall_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r142);

            var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            ctx_r143.isDelete = false;
            return ctx_r143.selectedUserId = "";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r18.statusOfSelectedLender ? "This action will Activate this account" : "This action will Deactivate this account")("subTitle", !ctx_r18.statusOfSelectedLender ? "if  required, you can activate this account after 15 days." : "if required, you can Deactivate this account after 15 days.")("alertWarning", ctx_r18.statusOfSelectedLender ? "Are your sure ?" : "Are your sure ?")("icon", "assets/images/activate.png")("cancelBtnTxt", "Cancel")("submitBtnTxt", "OK");
        }
      }

      function MerchantsListComponent_ng_container_66_Template(rf, ctx) {
        if (rf & 1) {
          var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-change-password", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onOkCall", function MerchantsListComponent_ng_container_66_Template_app_change_password_onOkCall_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r145);

            var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r144.onClickChangePassword($event);
          })("onCencelCall", function MerchantsListComponent_ng_container_66_Template_app_change_password_onCencelCall_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r145);

            var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r146.toggleChangePassword = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("userData", ctx_r19.selectedUserData)("cancelBtnTxt", "Cancel")("submitBtnTxt", "Update");
        }
      }

      function MerchantsListComponent_ng_container_68_Template(rf, ctx) {
        if (rf & 1) {
          var _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-double-confirmation-popup", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onOkCall", function MerchantsListComponent_ng_container_68_Template_app_double_confirmation_popup_onOkCall_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r148);

            var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r147.confirmationForUpdation();
          })("onCencelCall", function MerchantsListComponent_ng_container_68_Template_app_double_confirmation_popup_onCencelCall_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r148);

            var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r149.toggleOnUpgradeUser = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Upgrade To Master Partner")("subTitle", "This action will upgrade user in to Master Partner permanently. Are You Sure?")("icon", "assets/images/upgrade-user.png")("cancelBtnTxt", "Cancel")("submitBtnTxt", "  OK  ");
        }
      }

      function MerchantsListComponent_ng_container_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "embed", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r21.sanatizeUrlToSafe(ctx_r21.pdf_viewer_object_values["url"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
        }
      }

      function MerchantsListComponent_ng_template_71_Template(rf, ctx) {
        if (rf & 1) {
          var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MerchantsListComponent_ng_template_71_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r151);

            var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r150.handleCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function MerchantsListComponent_div_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r24.passwordForAdmin["password"] == null ? null : ctx_r24.passwordForAdmin["password"].password, " ");
        }
      }

      function MerchantsListComponent_div_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-label", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-control", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-form-label", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-form-control", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nz-form-label", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Send Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-form-control", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "label", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r25.resetPasswordForm);

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
        }
      }

      var _c14 = function _c14() {
        return ["add_merchant"];
      };

      var _c15 = function _c15() {
        return [100, 200, 300, 400, 500, 600, 750, 1000];
      };

      var _c16 = function _c16() {
        return {
          x: "1200px",
          y: ""
        };
      };

      var MerchantsListComponent = /*#__PURE__*/function () {
        function MerchantsListComponent(http, message, sanitized, fb) {
          var _this11 = this;

          _classCallCheck(this, MerchantsListComponent);

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
          this.isDelete = false;
          this.searchValue = '';
          this.expandSet = new Set();
          this.merchantDetailList = [];
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
            _this11.file = file.name;
            _this11.uploaded_file = file;
            console.log(file);
            console.log(_this11.uploaded_file); // this.updateMCCCodeWithUploadingFile();

            _this11.uploadAndShowAgreement('post');

            return false;
          };
        }

        _createClass(MerchantsListComponent, [{
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
            this.getMerchantList();
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
            var _this12 = this;

            this.selectedUserId = data === null || data === void 0 ? void 0 : data.id;

            if (action == 'show') {
              this.passwordForAdmin['apiLoader'] = true;
              this.passwordForAdmin['isVisibleModal'] = true;
              this.passwordForAdmin['toggleShoePasswordField'] = true;
              this.http.showPasswordOfCorporateAdmin(data === null || data === void 0 ? void 0 : data.id).subscribe(function (res) {
                console.log(res);
                _this12.passwordForAdmin['apiLoader'] = false;
                _this12.passwordForAdmin['password'] = res === null || res === void 0 ? void 0 : res.data;
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
            var _this13 = this;

            for (var _i3 in this.resetPasswordForm.controls) {
              this.resetPasswordForm.controls[_i3].markAsDirty();

              this.resetPasswordForm.controls[_i3].updateValueAndValidity();
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
                _this13.passwordForAdmin['isVisibleModal'] = false;

                if (res === null || res === void 0 ? void 0 : res.success) {
                  _this13.message.success(res === null || res === void 0 ? void 0 : res.message);

                  _this13.passwordForAdmin['apiLoaderOnClick'] = true;
                } else {
                  _this13.message.error(res === null || res === void 0 ? void 0 : res.message);

                  _this13.passwordForAdmin['apiLoaderOnClick'] = true;
                }

                _this13.passwordForAdmin['isVisibleModal'] = false;
              }, function (error) {
                _this13.passwordForAdmin['isVisibleModal'] = false;
              });
            }
          }
        }, {
          key: "onClickChangeTab",
          value: function onClickChangeTab(e) {
            this.selectedTab = e;
            this.getMerchantList();
          }
        }, {
          key: "getResultBasedOnSearch",
          value: function getResultBasedOnSearch() {
            this.page = 1;
            this.getMerchantList();
          }
        }, {
          key: "getMerchantDetail",
          value: function getMerchantDetail(id, i) {
            var _this14 = this;

            this._apiLoader["detailList"] = true;
            this.http.getPartnerListDetail(id).subscribe(function (res) {
              _this14.resetPasswordForm.reset();

              _this14.merchantDetailList.push(res === null || res === void 0 ? void 0 : res.data);

              _this14.merchantList[i].expandSet = res === null || res === void 0 ? void 0 : res.data;
              _this14._apiLoader["detailList"] = false;
            }, function (err) {
              console.log(err);
              _this14._apiLoader["detailList"] = false;
            });
          }
        }, {
          key: "resetFilter",
          value: function resetFilter() {
            this.page = 1;
            this.searchValue = '';
            this.getMerchantList();
          }
        }, {
          key: "getMerchantList",
          value: function getMerchantList(e) {
            var _this15 = this;

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
              'partner_nature': 'Merchant',
              'status': this.selectedTab === 'all' ? 'all' : this.selectedTab === 'active' ? 'active' : this.selectedTab === 'inactive' ? 'inactive' : ''
            }; // if(this.searchValue){
            //   data['']
            // }

            this._apiLoader["list"] = true;
            this.http.getMerchantList(data).subscribe(function (res) {
              var _a, _b;

              console.log(res);
              _this15.merchantList = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.results;
              _this15.total_count = (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.total_count;
              _this15._apiLoader["list"] = false;
            }, function (erro) {
              _this15._apiLoader["list"] = false;
            });
          }
        }, {
          key: "onExpandChange",
          value: function onExpandChange(id, checked, i) {
            if (checked) {
              this.selectedIndexOfExpand = i;
              this.getMerchantDetail(this.storeDetailId = id, i);
              this.expandSet.add(id); // alert('Clicked On Expand ' + id)
            } else {
              this.expandSet["delete"](id);
            }
          }
        }, {
          key: "cancel",
          value: function cancel() {}
        }, {
          key: "onClickVerifyDoc",
          value: function onClickVerifyDoc(id) {
            var _this16 = this;

            var data;
            this.http.verifyUploadedKycDocumentForMasterAndPartner(id, data).subscribe(function (res) {
              _this16.message.success(res === null || res === void 0 ? void 0 : res.message);

              _this16.getMerchantDetail(_this16.storeDetailId, _this16.selectedIndexOfExpand);

              console.log(res);
            });
          }
        }, {
          key: "handleCancel",
          value: function handleCancel() {
            this.isDelete = false;
            this.pdf_viewer_object_values['boolean'] = false;
            this.pdf_viewer_object_values['url'] = '';
          }
        }, {
          key: "confirmationTrigger",
          value: function confirmationTrigger(value) {
            var _this17 = this;

            this.http.deleteUserByUserId(this.selectedUserId).subscribe(function (res) {
              console.log(res);

              if (res.success) {
                _this17.message.success(res === null || res === void 0 ? void 0 : res.message);
              } else {
                _this17.message.error('Unable to Delete User......');
              }

              _this17.getMerchantList();

              _this17.isDelete = false;
            });
          }
        }, {
          key: "deleteUserByUserId",
          value: function deleteUserByUserId(id, action) {
            // if(action === 'delete'){
            this.statusOfSelectedLender = action;
            this.selectedUserId = id;
            this.isDelete = true; // } else {
            //   this.toggleOnUpgradeUser = true;
            // }
          }
        }, {
          key: "confirmationForUpdation",
          value: function confirmationForUpdation() {
            this.toggleOnUpgradeUser = false;
          }
        }, {
          key: "onClickChangePassword",
          value: function onClickChangePassword(e) {
            var _this18 = this;

            console.log('event to execute');
            console.log(e);
            this.http.changePasswordByAdmin(e).subscribe(function (res) {
              _this18.message.success('Password Updated Successfully');

              _this18.toggleChangePassword = false;
            }, function (err) {
              _this18.toggleChangePassword = false;
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
            if (action == 'front') {
              var data = new Blob([e === null || e === void 0 ? void 0 : e.document_file_front], {
                type: 'text/plain;charset=utf-8'
              });
              file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"](data, "Front_Doc");
            } else if (action == 'back') {
              var data = new Blob([e === null || e === void 0 ? void 0 : e.document_file_back], {
                type: 'text/plain;charset=utf-8'
              });
              file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"](data, "Back_Doc");
            } else if (action == 'single') {
              var data = new Blob([e === null || e === void 0 ? void 0 : e.document_file], {
                type: 'text/plain;charset=utf-8'
              });
              file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"](data, "Document_Preview");
            }
          }
        }, {
          key: "uploadAndShowAgreement",
          value: function uploadAndShowAgreement(action) {
            var _this19 = this;

            var data = new FormData();
            var endPoint = 'partner';
            data.append('file', this.uploaded_file);

            if (action === 'post') {
              var generateloader = this.message.loading('Uploading Document..', {
                nzDuration: 0
              }).messageId;
              this.http.uploadAndShowAgreement(endPoint, 'post', this.selectedIdForAgreement, data).subscribe(function (res) {
                var _a;

                console.log(res);

                if (res === null || res === void 0 ? void 0 : res.success) {
                  _this19.message.remove(generateloader);

                  _this19.message.success(res === null || res === void 0 ? void 0 : res.message);
                } else {
                  _this19.message.remove(generateloader);

                  _this19.message.error((_a = res === null || res === void 0 ? void 0 : res.message) === null || _a === void 0 ? void 0 : _a[0]);
                }
              }, function (error) {
                _this19.message.remove(generateloader);

                console.log(error);
              });
            } else {
              var _generateloader = this.message.loading('Generating Report..', {
                nzDuration: 0
              }).messageId;
              this.http.uploadAndShowAgreement(endPoint, 'get', this.selectedIdForAgreement).subscribe(function (res) {
                console.log(res); // pdfViewerAndDownload(){

                if (res.success) {
                  _this19.pdf_viewer_object_values['title'] = 'Show Agreement';
                  _this19.pdf_viewer_object_values['url'] = res === null || res === void 0 ? void 0 : res.data.agreement;
                  _this19.pdf_viewer_object_values['boolean'] = true;

                  _this19.message.remove(_generateloader);
                } else {
                  _this19.message.remove(_generateloader);

                  _this19.message.error('No Reports To Generate..');
                } // }

              }, function (error) {
                _this19.message.remove(_generateloader);

                console.log(error);
              });
            }
          }
        }]);

        return MerchantsListComponent;
      }();

      MerchantsListComponent.ɵfac = function MerchantsListComponent_Factory(t) {
        return new (t || MerchantsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
      };

      MerchantsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MerchantsListComponent,
        selectors: [["app-merchants-list"]],
        decls: 77,
        vars: 44,
        consts: [[1, "row", "mb-md-3"], [1, "col-md-6", "mb-md-0"], [3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "all", 1, "mr-md-2", "mr-2", "px-4", "mb-md-0", "mb-3", "border-radius-2"], ["nz-radio-button", "", "nzValue", "active", 1, "mr-md-2", "mr-2", "px-4", "mb-md-0", "mb-3", "border-radius-2"], ["nz-radio-button", "", "nzValue", "inactive", 1, "mr-md-2", "mr-2", "px-4", "mb-md-0", "mb-3", "border-radius-2"], [1, "col-md-6", "col-12", "my-md-0", "my-3", "d-flex", "justify-content-end"], ["nz-button", "", "class", "text-primary mr-4", 3, "routerLink", 4, "ngxPermissionsOnly"], [1, "row"], [1, "w-100"], [1, "col-md-4", "mb-3", "d-flex"], ["nzSearch", "", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "Search text", 3, "ngModel", "keyup.enter", "ngModelChange"], ["suffixIconButton", ""], ["nz-button", "", "nzType", "default", "nzShape", "circle", "nz-tooltip", "", "nzTooltipTitle", "Reset Filter", 1, "mx-2", 3, "click"], ["nz-icon", "", "nzType", "undo"], [1, "accordianLoanApp"], [3, "nzTotal", "nzFrontPagination", "nzLoading", "nzShowSizeChanger", "nzPageSize", "nzPageIndex", "nzPageSizeOptions", "nzData", "nzScroll", "nzQueryParams"], ["rowspan", "2", "nzWidth", "100px"], ["nzWidth", "5rem", "nzRight", "", 1, "pr-0"], [4, "ngFor", "ngForOf"], ["basicDetail", ""], ["contactPersonDetail", ""], ["bankingDetail", ""], ["kycDocument", ""], ["adminDetail", ""], ["otherDetails", ""], ["upiDetails", ""], [3, "nzWidth", "nzVisible", "nzFooter", "nzClosable", "nzVisibleChange", "nzOnCancel"], [4, "nzModalContent"], ["nzTitle", "Change Password", 3, "nzWidth", "nzVisible", "nzFooter", "nzClosable", "nzOnCancel", "nzVisibleChange"], [3, "nzWidth", "nzVisible", "nzFooter", "nzClosable", "nzVisibleChange"], ["nzHeight", "50vw", "nzWidth", "60vw", "nzKeyboard", "true", 3, "nzVisible", "nzTitle", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalFooter", ""], [3, "nzTitle", "nzWidth", "nzVisible", "nzOkLoading", "nzFooter", "nzClosable", "nzVisibleChange", "nzOnOk", "nzOnCancel"], [3, "nzLoading"], ["class", "row", 4, "ngIf"], ["nz-button", "", 1, "text-primary", "mr-4", 3, "routerLink"], ["nz-button", "", "nzType", "secondary", "nzSearch", "", 3, "click"], ["nz-icon", "", "nzType", "search"], [3, "nzExpand", "nzExpandChange", 4, "ngIf"], [4, "ngIf"], ["nzRight", "", 1, "pr-0"], ["nz-dropdown", "", 1, "text-dark", "font-size-20", 3, "nzClickHide", "nzTrigger", "nzPlacement", "nzDropdownMenu"], ["src", "assets/images/ellipsis.png", "alt", "", "width", "30"], ["latestUploadDropDown", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "routerLink", "queryParams", 4, "ngxPermissionsOnly"], [4, "ngxPermissionsOnly"], ["nz-menu-item", "", 3, "click", 4, "ngxPermissionsOnly"], [3, "nzExpand"], [1, "justify-content-center"], [1, "site-page-header", "acc-bg-light", "mb-2", 3, "nzTitle"], [1, "mb-md-5", 3, "nzLoading"], [1, "col-md-6"], [1, "d-flex", "flex-column"], [1, "col-md-4"], [1, "col-md-4", "mb-2"], ["class", "justify-content-center", 4, "ngxPermissionsOnly"], [1, "d-flex"], [3, "nzExpand", "nzExpandChange"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "outline"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "outline"], ["nz-menu-item", "", 3, "routerLink", "queryParams"], [1, "m-l-5"], ["nz-menu-item", "", 3, "click", 4, "ngIf"], ["nz-menu-item", "", 3, "click"], ["nzSize", "large", 1, "d-flex", "pl-1", "align-items-left", 2, "cursor", "pointer", 3, "nzMultiple", "nzAccept", "nzBeforeUpload"], ["class", "col-md-6 mb-2", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mb-2"], ["class", "d-flex flex-column", 4, "ngIf"], [1, "mb-2"], [1, "mx-2"], ["style", "cursor: pointer;", "class", "mr-3", "nz-icon", "", "nzType", "download", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["style", "cursor: pointer;", "class", "mr-3", "nz-icon", "", "nzType", "eye", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure you want to verify corresponding document ?", "nzPopconfirmPlacement", "bottom", 3, "nzOnConfirm", "nzOnCancel"], ["nz-icon", "", "nzType", "download", "nzTheme", "outline", 1, "mr-3", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline", 1, "mr-3", 2, "cursor", "pointer", 3, "click"], ["class", "col-md-12 mb-2", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mb-2"], [1, "col-4"], ["class", "col-4 align-self-center text-right", 4, "ngxPermissionsOnly"], [1, "col-4", "align-self-center", "text-right"], ["showPassword", "nzDropdownMenu"], [1, "ml-md-2"], [1, "mb-0"], [3, "title", "subTitle", "alertWarning", "icon", "cancelBtnTxt", "submitBtnTxt", "onOkCall", "onCencelCall"], [3, "userData", "cancelBtnTxt", "submitBtnTxt", "onOkCall", "onCencelCall"], [3, "title", "subTitle", "icon", "cancelBtnTxt", "submitBtnTxt", "onOkCall", "onCencelCall"], [1, "pdf_viewer_container"], ["width", "100%", 2, "height", "25rem", 3, "src"], ["nz-button", "", "nzType", "primary", 3, "click"], [1, "col-6"], ["nz-form", "", 3, "formGroup"], [1, "col-md-12"], ["nzFor", "name", "nzRequired", "", 1, "text-left", 3, "nzSm"], ["nzErrorTip", "Please Add New Password!", 3, "nzSm"], ["nz-input", "", "type", "text", "formControlName", "new_password", "placeholder", "New Password"], ["nzErrorTip", "Please Add Confirm Password!", 3, "nzSm"], ["nz-input", "", "type", "text", "formControlName", "retype_password", "placeholder", "Confirm Password"], ["nzErrorTip", "Please Select Action!", 3, "nzSm"], ["nz-checkbox", "", "formControlName", "send_email"]],
        template: function MerchantsListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-radio-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MerchantsListComponent_Template_nz_radio_group_ngModelChange_3_listener($event) {
              return ctx.selectedTab = $event;
            })("ngModelChange", function MerchantsListComponent_Template_nz_radio_group_ngModelChange_3_listener($event) {
              return ctx.onClickChangeTab($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MerchantsListComponent_button_11_Template, 2, 2, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nz-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "nz-input-group", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function MerchantsListComponent_Template_input_keyup_enter_20_listener() {
              return ctx.getResultBasedOnSearch();
            })("ngModelChange", function MerchantsListComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.searchValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, MerchantsListComponent_ng_template_21_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MerchantsListComponent_Template_button_click_23_listener() {
              return ctx.resetFilter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "nz-table", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzQueryParams", function MerchantsListComponent_Template_nz_table_nzQueryParams_26_listener($event) {
              return ctx.getMerchantList($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Merchant Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Display Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Regd. On");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " MDR%");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Merchant ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Registered(KYC)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "System Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, MerchantsListComponent_ng_container_48_Template, 141, 59, "ng-container", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, MerchantsListComponent_ng_template_49_Template, 3, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, MerchantsListComponent_ng_template_51_Template, 3, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, MerchantsListComponent_ng_template_53_Template, 3, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, MerchantsListComponent_ng_template_55_Template, 3, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, MerchantsListComponent_ng_template_57_Template, 3, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, MerchantsListComponent_ng_template_59_Template, 3, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, MerchantsListComponent_ng_template_61_Template, 3, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "nz-modal", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function MerchantsListComponent_Template_nz_modal_nzVisibleChange_63_listener($event) {
              return ctx.isDelete = $event;
            })("nzOnCancel", function MerchantsListComponent_Template_nz_modal_nzOnCancel_63_listener() {
              ctx.isDelete = false;
              return ctx.selectedUserId = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, MerchantsListComponent_ng_container_64_Template, 2, 6, "ng-container", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "nz-modal", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnCancel", function MerchantsListComponent_Template_nz_modal_nzOnCancel_65_listener() {
              return ctx.toggleChangePassword = false;
            })("nzVisibleChange", function MerchantsListComponent_Template_nz_modal_nzVisibleChange_65_listener($event) {
              return ctx.toggleChangePassword = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, MerchantsListComponent_ng_container_66_Template, 2, 3, "ng-container", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "nz-modal", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function MerchantsListComponent_Template_nz_modal_nzVisibleChange_67_listener($event) {
              return ctx.toggleOnUpgradeUser = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, MerchantsListComponent_ng_container_68_Template, 2, 5, "ng-container", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "nz-modal", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function MerchantsListComponent_Template_nz_modal_nzVisibleChange_69_listener($event) {
              return ctx.pdf_viewer_object_values["boolean"] = $event;
            })("nzOnCancel", function MerchantsListComponent_Template_nz_modal_nzOnCancel_69_listener() {
              return ctx.handleCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, MerchantsListComponent_ng_container_70_Template, 3, 1, "ng-container", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, MerchantsListComponent_ng_template_71_Template, 2, 0, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "nz-modal", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function MerchantsListComponent_Template_nz_modal_nzVisibleChange_73_listener($event) {
              return ctx.passwordForAdmin["isVisibleModal"] = $event;
            })("nzOnOk", function MerchantsListComponent_Template_nz_modal_nzOnOk_73_listener() {
              return ctx.onClickResetPassword();
            })("nzOnCancel", function MerchantsListComponent_Template_nz_modal_nzOnCancel_73_listener() {
              ctx.passwordForAdmin["isVisibleModal"] = false;
              return ctx.selectedUserId = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "nz-card", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, MerchantsListComponent_div_75_Template, 5, 1, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, MerchantsListComponent_div_76_Template, 20, 7, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);

            var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedTab);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c14));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.total_count ? ctx.total_count : " 0 ", " Results Found");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnAfter", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTotal", ctx.total_count)("nzFrontPagination", false)("nzLoading", ctx._apiLoader["list"])("nzShowSizeChanger", true)("nzFrontPagination", false)("nzPageSize", ctx.globalPageSize)("nzPageIndex", ctx.page)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c15))("nzShowSizeChanger", true)("nzData", ctx.merchantList)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c16));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.merchantList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzWidth", 500)("nzVisible", ctx.isDelete)("nzFooter", null)("nzClosable", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzWidth", 800)("nzVisible", ctx.toggleChangePassword)("nzFooter", null)("nzClosable", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzWidth", 400)("nzVisible", ctx.toggleOnUpgradeUser)("nzFooter", null)("nzClosable", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", ctx.pdf_viewer_object_values["boolean"])("nzTitle", ctx.pdf_viewer_object_values["title"])("nzFooter", _r22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", ctx.passwordForAdmin["toggleShoePasswordField"] ? "View Password" : "Reset Password")("nzWidth", 500)("nzVisible", ctx.passwordForAdmin["isVisibleModal"])("nzOkLoading", ctx.passwordForAdmin["apiLoader"])("nzFooter", ctx.passwordForAdmin["toggleShoePasswordField"] ? null : "")("nzClosable", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx.passwordForAdmin["apiLoader"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passwordForAdmin["toggleShoePasswordField"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.passwordForAdmin["toggleShoePasswordField"]);
          }
        },
        directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioButtonDirective"], ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__["NzCardComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__["NzWaveDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzCellFixedDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalContentDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterLink"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropDownADirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropDownDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_19__["NzMenuDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTrExpandDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableFixedRowComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_20__["NzPageHeaderComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTdAddOnComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_19__["NzMenuItemDirective"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_21__["NzUploadComponent"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__["NzPopconfirmDirective"], _shared_template_double_confirmation_popup_double_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_23__["DoubleConfirmationPopupComponent"], _shared_template_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_24__["ChangePasswordComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__["NzFormControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_27__["NzCheckboxComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lcmNoYW50cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUciLCJmaWxlIjoibWVyY2hhbnRzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIDpob3N0IDo6bmctZGVlcCAuYW50LXRhYmxlLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MjdweCkgIWltcG9ydGFudDtcbn0gKi8iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MerchantsListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-merchants-list',
            templateUrl: './merchants-list.component.html',
            styleUrls: ['./merchants-list.component.css']
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
    "ICX5":
    /*!************************************************************************************!*\
      !*** ./src/app/users/merchants/add-edit-merchants/add-edit-merchants.component.ts ***!
      \************************************************************************************/

    /*! exports provided: AddEditMerchantsComponent */

    /***/
    function ICX5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEditMerchantsComponent", function () {
        return AddEditMerchantsComponent;
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


      var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-zorro-antd/upload */
      "D9mS");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "FwiY");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "TaO5");
      /* harmony import */


      var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ng-zorro-antd/popconfirm */
      "KupA");

      function AddEditMerchantsComponent_nz_option_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 87);
        }

        if (rf & 2) {
          var item_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r9.id)("nzLabel", item_r9.name);
        }
      }

      function AddEditMerchantsComponent_ng_container_59_nz_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 87);
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r10 == null ? null : item_r10.pk)("nzLabel", item_r10 == null ? null : item_r10.name);
        }
      }

      function AddEditMerchantsComponent_ng_container_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddEditMerchantsComponent_ng_container_59_nz_option_1_Template, 1, 2, "nz-option", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r10 == null ? null : item_r10.name);
        }
      }

      function AddEditMerchantsComponent_ng_container_114_i_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMerchantsComponent_ng_container_114_i_17_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var k_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r17.deleteDocumentByDocumentId(k_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddEditMerchantsComponent_ng_container_114_i_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMerchantsComponent_ng_container_114_i_19_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r20.onClickShowUploadedDocument(item_r13, "documents");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddEditMerchantsComponent_ng_container_114_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-form-label", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-form-control", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-upload", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzChange", function AddEditMerchantsComponent_ng_container_114_Template_nz_upload_nzChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var k_r14 = ctx.index;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.onUpload($event, k_r14, "name");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Verify");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AddEditMerchantsComponent_ng_container_114_i_17_Template, 1, 0, "i", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AddEditMerchantsComponent_ng_container_114_i_19_Template, 1, 0, "i", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r13 = ctx.$implicit;
          var k_r14 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", k_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 13)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r13.controls.display_name.value, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("nzErrorTip", "Please Add ", item_r13.controls.label_name.value, "!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzMultiple", "false")("nzAccept", ".png, .jpg, .pdf")("nzCustomRequest", ctx_r2.customUpload);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r13.controls.document_name.value ? "Re Upload" : " Upload ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzDisabled", item_r13.controls.document_name.value ? false : true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r13.controls.isdelete.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r13.controls.document_name.value);
        }
      }

      function AddEditMerchantsComponent_div_124_nz_form_label_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-label", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Primary UPI ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        }
      }

      function AddEditMerchantsComponent_div_124_nz_form_label_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-form-label", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Additional UPI ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);
        }
      }

      function AddEditMerchantsComponent_div_124_label_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnConfirm", function AddEditMerchantsComponent_div_124_label_8_Template_label_nzOnConfirm_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var item_r25 = ctx_r31.$implicit;
            var k_r26 = ctx_r31.index;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r30.removeMaster(item_r25, k_r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AddEditMerchantsComponent_div_124_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddEditMerchantsComponent_div_124_nz_form_label_4_Template, 2, 2, "nz-form-label", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AddEditMerchantsComponent_div_124_nz_form_label_5_Template, 2, 2, "nz-form-label", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-control", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AddEditMerchantsComponent_div_124_label_8_Template, 2, 0, "label", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var k_r26 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", k_r26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", k_r26 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", k_r26 > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", k_r26 > 0);
        }
      }

      function AddEditMerchantsComponent_button_161_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMerchantsComponent_button_161_Template_button_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r33.onClickSaveExistingForm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Save & Add New");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r4.apiLoader["saveAddNew"])("disabled", ctx_r4.apiLoader["formSave"]);
        }
      }

      function AddEditMerchantsComponent_ng_container_166_ng_container_4_nz_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 87);
        }

        if (rf & 2) {
          var item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r36)("nzLabel", item_r36.name);
        }
      }

      function AddEditMerchantsComponent_ng_container_166_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddEditMerchantsComponent_ng_container_166_ng_container_4_Template_ng_container_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r40.checkItem($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AddEditMerchantsComponent_ng_container_166_ng_container_4_nz_option_1_Template, 1, 2, "nz-option", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r36 = ctx.$implicit;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r35.documentFlagArray.includes(item_r36));
        }
      }

      function AddEditMerchantsComponent_ng_container_166_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-form-label", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Select Document");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-select", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddEditMerchantsComponent_ng_container_166_Template_nz_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r42.selectedDocument = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AddEditMerchantsComponent_ng_container_166_ng_container_4_Template, 2, 1, "ng-container", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.selectedDocument);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.documentArray);
        }
      }

      function AddEditMerchantsComponent_ng_container_168_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "embed", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r6.sanatizeUrlToSafe, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
        }
      }

      function AddEditMerchantsComponent_ng_template_169_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMerchantsComponent_ng_template_169_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r44.handleCancel();
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

      var AddEditMerchantsComponent = /*#__PURE__*/function () {
        function AddEditMerchantsComponent(fb, router, http, route, sanitized, message, nzImageService) {
          _classCallCheck(this, AddEditMerchantsComponent);

          this.fb = fb;
          this.router = router;
          this.http = http;
          this.route = route;
          this.sanitized = sanitized;
          this.message = message;
          this.nzImageService = nzImageService;
          this.documentArray = [];
          this.apiLoader = {
            'formSave': false,
            'saveAddNew': false
          };
          this.pdf_viewer_object_values = {
            'boolean': false,
            'url': '',
            'title': ''
          };
          this.upiData = [];
          this.listOfDocumentWithFlag = [];
          this.documentFlagArray = [];

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

        _createClass(AddEditMerchantsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.getListOfMasterPartner();
            this.createMasterProductForm(); // this.addAdditionalUPI();

            this.route.queryParams.subscribe(function (params) {
              if (params['id']) {
                _this20.isEdit = true;
                _this20.masterPartnerId = params['id'];

                if (_this20.masterPartnerId) {
                  _this20.getMerchantDetailById();

                  _this20.getListOfStates();
                }
              } else {
                // this.masterParnerPayout = null
                _this20.isEdit = false;

                _this20.addAdditionalUPI(); // this.createMasterProductForm();
                // this.getListOfDocumentRequired();

              }
            });
          }
        }, {
          key: "getListOfMasterPartner",
          value: function getListOfMasterPartner(action) {
            var _this21 = this;

            var data = {
              'page': 1,
              'limit': 100
            };
            this.http.fetchMasterPartner(data).subscribe(function (res) {
              var _a;

              _this21.listOfMasterPartner = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.results;
            }, function (err) {});
          }
        }, {
          key: "getMerchantDetailById",
          value: function getMerchantDetailById() {
            var _this22 = this;

            this.http.getPartnerListDetail(this.masterPartnerId).subscribe(function (res) {
              console.log(res);

              _this22.setRetrievedDataInForm(res === null || res === void 0 ? void 0 : res.data); // this.createMasterProductForm(res?.data);

            });
          }
        }, {
          key: "setRetrievedDataInForm",
          value: function setRetrievedDataInForm(data) {
            var _a;

            for (var i in this.addEditProductForm.value) {
              if (i == 'partner_master' || i == 'state') {
                data[i] = (_a = data[i]) === null || _a === void 0 ? void 0 : _a.id;
              }

              if (i != 'document_data' && i != 'upis') {
                if (data[i]) {
                  this.addEditProductForm.controls[i].setValue(data[i], {
                    emitEvent: false
                  });
                }
              }
            }

            this.setFormData(data);
            this.setUpiFormData(data);
          }
        }, {
          key: "setFormData",
          value: function setFormData(data) {
            var _this23 = this;

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
            var _a; //     }
            //     documentArray.push(documents);
            //     this.documentArray?.forEach(( entity, index) => {
            //       if (entity.pk == element?.document_master['id']) {
            //         this.documentArray.splice(index,1)
            //       }
            //     });
            //     this.addSkills(documents)
            //   });
            // }


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

                  _this23.addSkills(documents);
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
                  }; // documentArray.push(documents);

                  if ((documents === null || documents === void 0 ? void 0 : documents.pk) == 3) {
                    (_h = _this23.documentArray) === null || _h === void 0 ? void 0 : _h.forEach(function (entity, index) {
                      if (entity.pk == (element === null || element === void 0 ? void 0 : element.document_master["id"])) {
                        _this23.documentArray.splice(index, 1);
                      }
                    });
                  }

                  _this23.addSkills(documents);
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
          key: "getListOfStates",
          value: function getListOfStates() {
            var _this24 = this;

            var action = 'get-states';
            this.http.fetchDetailForUserModuleDropDown(action).subscribe(function (res) {
              console.log(res);
              _this24.stateArr = res === null || res === void 0 ? void 0 : res.data;
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
          key: "createMasterProductForm",
          value: function createMasterProductForm(data) {
            var _a, _b;

            this.addEditProductForm = this.fb.group({
              name: [data ? data === null || data === void 0 ? void 0 : data.name : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              address_line_1: [data ? data === null || data === void 0 ? void 0 : data.address_line_1 : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              address_line_2: [data ? data === null || data === void 0 ? void 0 : data.address_line_2 : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              city: [data ? data === null || data === void 0 ? void 0 : data.city : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              display_name: [data ? data === null || data === void 0 ? void 0 : data.display_name : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              state: [data ? (_a = data === null || data === void 0 ? void 0 : data.state) === null || _a === void 0 ? void 0 : _a.id : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              pincode: [data ? data === null || data === void 0 ? void 0 : data.pincode : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[1-9][0-9]{5}$')]],
              phone: [data ? data === null || data === void 0 ? void 0 : data.phone : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('([0-9]{8}|[0-9]{10})')]],
              bank_name: [data ? data === null || data === void 0 ? void 0 : data.bank_name : null],
              account_no: [data ? data === null || data === void 0 ? void 0 : data.account_no : null],
              ifsc: [data ? data === null || data === void 0 ? void 0 : data.ifsc : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[A-Z]{4}0[A-Z0-9]{6}$")]],
              branch: [data ? data === null || data === void 0 ? void 0 : data.branch : null],
              // primary_upi: [data ? data?.primary_upi : null, [Validators.required, Validators.pattern('^(.+)@(.+)$')]],
              // ^(.+)@(.+)$
              // secondary_upi: [data ? data?.secondary_upi : null, [ Validators.pattern('^(.+)@(.+)$')]],
              mdr: [data ? data === null || data === void 0 ? void 0 : data.mdr : null],
              interest_subvention: [data ? data === null || data === void 0 ? void 0 : data.interest_subvention : null],
              payout: [data ? data === null || data === void 0 ? void 0 : data.payout : null],
              upis: this.fb.array([]),
              // Attribute Type under business detail
              // business_type: [data ? data?.name : null, [Validators.required]],
              // Attribute Nature under business detail
              // business_nature: [data ? data?.name : null, [Validators.required]],
              partner_master: [data ? (_b = data === null || data === void 0 ? void 0 : data.partner_master) === null || _b === void 0 ? void 0 : _b.id : null],
              contact_person_name: [data ? data === null || data === void 0 ? void 0 : data.contact_person_name : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              contact_person_phone: [data ? data === null || data === void 0 ? void 0 : data.contact_person_phone : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('([0-9]{8}|[0-9]{10})')]],
              contact_person_email: [data ? data === null || data === void 0 ? void 0 : data.contact_person_email : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$')]],
              master: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              document_data: this.fb.array([]),
              partner_nature: ['Merchant', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });

            if (data) {
              this.setFormData(data);
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
          key: "onClickShowUploadedDocument",
          value: function onClickShowUploadedDocument(e, action) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var images, doc, img, _img6, _doc3, _img7, _img8, _doc4, _img9, _img10;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!((_a = e === null || e === void 0 ? void 0 : e.value) === null || _a === void 0 ? void 0 : _a.id)) {
                        _context2.next = 8;
                        break;
                      }

                      this.pdf_viewer_object_values['boolean'] = true;
                      this.pdf_viewer_object_values['title'] = 'Showing ' + ((_b = e === null || e === void 0 ? void 0 : e.value) === null || _b === void 0 ? void 0 : _b.label_name);
                      this.pdf_viewer_object_values['url'] = (_c = e === null || e === void 0 ? void 0 : e.value) === null || _c === void 0 ? void 0 : _c.documents;
                      this.sanatizeUrlToSafe = this.sanitized.bypassSecurityTrustResourceUrl(this.pdf_viewer_object_values['url']);
                      console.log(e);
                      _context2.next = 52;
                      break;

                    case 8:
                      images = [];

                      if (!(action == 'documents')) {
                        _context2.next = 24;
                        break;
                      }

                      if (!((_e = (_d = e === null || e === void 0 ? void 0 : e.value) === null || _d === void 0 ? void 0 : _d.documents) === null || _e === void 0 ? void 0 : _e.uid)) {
                        _context2.next = 19;
                        break;
                      }

                      _context2.next = 13;
                      return getBase64((_f = e === null || e === void 0 ? void 0 : e.value) === null || _f === void 0 ? void 0 : _f.documents);

                    case 13:
                      doc = _context2.sent;
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
                      _context2.next = 22;
                      break;

                    case 19:
                      _img6 = {
                        src: (_g = e === null || e === void 0 ? void 0 : e.value) === null || _g === void 0 ? void 0 : _g.documents,
                        width: "600px",
                        height: "400px",
                        alt: "ng-zorro"
                      };
                      images.push(_img6);
                      this.nzImageService.preview(images, {
                        nzZoom: 1.5,
                        nzRotate: 0
                      });

                    case 22:
                      _context2.next = 52;
                      break;

                    case 24:
                      if (!(action == 'documents_front')) {
                        _context2.next = 39;
                        break;
                      }

                      if (!((_j = (_h = e === null || e === void 0 ? void 0 : e.value) === null || _h === void 0 ? void 0 : _h.documents_front) === null || _j === void 0 ? void 0 : _j.uid)) {
                        _context2.next = 34;
                        break;
                      }

                      _context2.next = 28;
                      return getBase64((_k = e === null || e === void 0 ? void 0 : e.value) === null || _k === void 0 ? void 0 : _k.documents_front);

                    case 28:
                      _doc3 = _context2.sent;
                      // const images = [];
                      _img7 = {
                        src: _doc3,
                        width: "600px",
                        height: "400px",
                        alt: "ng-zorro"
                      };
                      images.push(_img7);
                      this.nzImageService.preview(images, {
                        nzZoom: 1.5,
                        nzRotate: 0
                      });
                      _context2.next = 37;
                      break;

                    case 34:
                      // const images = [];
                      _img8 = {
                        src: (_l = e === null || e === void 0 ? void 0 : e.value) === null || _l === void 0 ? void 0 : _l.documents_front,
                        width: "600px",
                        height: "400px",
                        alt: "ng-zorro"
                      };
                      images.push(_img8);
                      this.nzImageService.preview(images, {
                        nzZoom: 1.5,
                        nzRotate: 0
                      });

                    case 37:
                      _context2.next = 52;
                      break;

                    case 39:
                      if (!(action == 'documents_back')) {
                        _context2.next = 52;
                        break;
                      }

                      if (!((_o = (_m = e === null || e === void 0 ? void 0 : e.value) === null || _m === void 0 ? void 0 : _m.documents_back) === null || _o === void 0 ? void 0 : _o.uid)) {
                        _context2.next = 49;
                        break;
                      }

                      _context2.next = 43;
                      return getBase64((_p = e === null || e === void 0 ? void 0 : e.value) === null || _p === void 0 ? void 0 : _p.documents_back);

                    case 43:
                      _doc4 = _context2.sent;
                      // const images = [];
                      _img9 = {
                        src: _doc4,
                        width: "600px",
                        height: "400px",
                        alt: "ng-zorro"
                      };
                      images.push(_img9);
                      this.nzImageService.preview(images, {
                        nzZoom: 1.5,
                        nzRotate: 0
                      });
                      _context2.next = 52;
                      break;

                    case 49:
                      // const images = [];
                      _img10 = {
                        src: (_q = e === null || e === void 0 ? void 0 : e.value) === null || _q === void 0 ? void 0 : _q.documents_back,
                        width: "600px",
                        height: "400px",
                        alt: "ng-zorro"
                      };
                      images.push(_img10);
                      this.nzImageService.preview(images, {
                        nzZoom: 1.5,
                        nzRotate: 0
                      });

                    case 52:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // onClickShowUploadedDocument(e){
          //   if(e?.value?.documents?.uid){
          //     saveAs(e?.value?.documents);
          //   } else {
          //     var data = new Blob([e?.value?.documents], { type: 'text/plain;charset=utf-8' });
          //     FileSaver.saveAs(data,  `${e?.value?.document_name}`); 
          //   }
          // }

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
          key: "deleteDocumentByDocumentId",
          value: function deleteDocumentByDocumentId(i) {
            var _this25 = this;

            var _a, _b, _c, _d, _e, _f, _g;

            var fileName = this.addEditProductForm.get("document_data");
            var master = (_b = (_a = fileName.controls) === null || _a === void 0 ? void 0 : _a[i].value) === null || _b === void 0 ? void 0 : _b.document_master;
            var selectedFile = (_c = fileName.controls) === null || _c === void 0 ? void 0 : _c[i].value;

            if (!((_e = (_d = fileName.controls) === null || _d === void 0 ? void 0 : _d[i].value) === null || _e === void 0 ? void 0 : _e.id)) {
              var _document2 = {
                name: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.label_name,
                pk: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.document_master,
                front_back_flag: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.front_back_flag,
                display_name: null,
                display_name_front: (selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.name) + " Front",
                display_name_back: (selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.name) + " Back",
                isdelete: false
              };

              if ((_document2 === null || _document2 === void 0 ? void 0 : _document2.pk) == 3) {
                this.documentArray.push(_document2);
              }

              this.message.success(((_g = (_f = fileName.controls) === null || _f === void 0 ? void 0 : _f[i].value) === null || _g === void 0 ? void 0 : _g.label_name) + " Document Deleted");
              fileName.removeAt(i);
              this.selectedDocument = null;
            } else {
              this.http.deletePartnerDocumentByDocumentId(selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.id).subscribe(function (res) {
                var _a, _b;

                var document = {
                  name: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.label_name,
                  pk: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.document_master,
                  front_back_flag: selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.front_back_flag
                };

                if ((document === null || document === void 0 ? void 0 : document.pk) == 3) {
                  _this25.documentArray.push(document);
                }

                _this25.message.success(((_b = (_a = fileName.controls) === null || _a === void 0 ? void 0 : _a[i].value) === null || _b === void 0 ? void 0 : _b.label_name) + " Document Deleted");

                fileName.removeAt(i);
                _this25.selectedDocument = null;
              });
            }
          }
        }, {
          key: "getListOfDocumentRequired",
          value: function getListOfDocumentRequired() {
            var _this26 = this;

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

                  _this26.documentArray.push(otherDoc);
                }
              });
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
              var _data3;

              _data3 = {
                front_back_flag: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.front_back_flag,
                name: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.name,
                display_name: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.name,
                display_name_front: null,
                display_name_back: null,
                isdelete: false,
                pk: storeSelectedData === null || storeSelectedData === void 0 ? void 0 : storeSelectedData.pk
              };
              this.addSkills(_data3);
            }

            this.isVisible = false;
          }
        }, {
          key: "newSkill",
          value: function newSkill(data) {
            // this.selectedDocument = null;
            // return this.fb.group({
            //   id: [data ? data?.id : null],
            //   document_master: [data?.pk],
            //   label_name: [data?.name],
            //   documents: [data?.documents],
            //   document_name:[data?.document_name],
            //   is_verified:[ data?.is_verified ? data?.is_verified : false]
            // })
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
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m; // let fileName = this.addEditProductForm.get('document_data') as FormArray;
            // fileName.controls?.[i].patchValue({document_name: e?.file?.name});
            // let value = this.addEditProductForm.get('document_data') as FormArray;
            // value.controls?.[i].patchValue({documents: e?.file?.originFileObj});


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
            var _this27 = this;

            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;

            console.log(this.addEditProductForm.value); // karan plz refer this code

            var upis = this.addEditProductForm.value.upis;
            var val = [];
            upis.forEach(function (value, key) {
              val.push(value === null || value === void 0 ? void 0 : value.upi_id);
            });
            this.addEditProductForm.patchValue({
              'upis': upis
            });
            console.log('Testings...');
            console.log(val);
            console.log(this.addEditProductForm.value); // return;

            var saveDoc = [];

            for (var _i4 in this.addEditProductForm.controls) {
              this.addEditProductForm.controls[_i4].markAsDirty();

              this.addEditProductForm.controls[_i4].updateValueAndValidity();
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
              this.apiLoader['formSave'] = true;

              if (!this.isEdit) {
                var data = new FormData();
                var sendDate = this.addEditProductForm.value;

                for (var i in sendDate.document_data) {
                  // if(sendDate?.document_data[i]?.documents?.includes('/')){
                  // break;  
                  // }
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
                  } // data.append('documents', sendDate?.document_data[i]?.documents)
                  // delete sendDate?.document_data[i]?.documents

                }

                for (var i in sendDate) {
                  if (i == 'document_data') {
                    data.append(i, JSON.stringify(sendDate[i]));
                  } else if (i == 'upis') {
                    sendDate[i].forEach(function (element) {
                      _this27.upiData.push(element === null || element === void 0 ? void 0 : element.upi_id);
                    });
                    data.append(i, this.upiData);
                  } else {
                    if (sendDate[i]) {
                      data.append(i, sendDate[i]);
                    } // data.append(i, sendDate[i])

                  }
                }

                var url = this.http.createPartnerForm(data);
                url.subscribe(function (res) {
                  var _a;

                  if (res.success) {
                    _this27.router.navigate(['merchants/list']);
                  } else {
                    for (var i in saveDoc) {
                      var value = _this27.addEditProductForm.get("document_data");

                      (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({
                        documents: saveDoc[i]
                      });
                    }

                    _this27.message.error(res === null || res === void 0 ? void 0 : res.message);

                    _this27.apiLoader['formSave'] = false;
                  }
                }, function (err) {
                  var _a;

                  for (var i in saveDoc) {
                    var value = _this27.addEditProductForm.get("document_data");

                    (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({
                      documents: saveDoc[i]
                    });
                  }

                  _this27.apiLoader['formSave'] = false;
                });
              } else {
                var _data4 = new FormData();

                var sendDate = this.addEditProductForm.value;

                for (var i in sendDate.document_data) {
                  // console.log(sendDate.document_data[i]?.documents);
                  // console.log(sendDate.document_data[i].documents?.['uid']);
                  // console.log(sendDate.document_data[i].id);
                  if (!sendDate.document_data[i].id) {
                    (_o = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _o === void 0 ? true : delete _o.id;
                  } // console.log('working' + sendDate.document_data +  ' ' +  i);
                  // if(sendDate.document_data[i].documents?.['uid']){
                  //   data.append('documents', sendDate?.document_data[i]?.documents)  
                  //   delete sendDate?.document_data[i]?.documents
                  // } else {
                  //   delete sendDate?.document_data[i]?.documents
                  // }


                  if ((_p = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _p === void 0 ? void 0 : _p.front_back_flag) {
                    // saveDoc.push(sendDate?.document_data[i]?.documents)
                    if ((_r = (_q = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _q === void 0 ? void 0 : _q.documents_front) === null || _r === void 0 ? void 0 : _r["uid"]) {
                      _data4.append("documents", (_s = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _s === void 0 ? void 0 : _s.documents_front);

                      (_t = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _t === void 0 ? true : delete _t.documents_front;
                    } else {
                      (_u = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _u === void 0 ? true : delete _u.documents_front;
                    }

                    if ((_w = (_v = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _v === void 0 ? void 0 : _v.documents_back) === null || _w === void 0 ? void 0 : _w["uid"]) {
                      _data4.append("documents", (_x = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _x === void 0 ? void 0 : _x.documents_back);

                      (_y = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _y === void 0 ? true : delete _y.documents_back;
                    } else {
                      (_z = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _z === void 0 ? true : delete _z.documents_back;
                    }
                  }

                  if (!((_0 = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _0 === void 0 ? void 0 : _0.front_back_flag)) {
                    if ((_2 = (_1 = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _1 === void 0 ? void 0 : _1.documents) === null || _2 === void 0 ? void 0 : _2["uid"]) {
                      _data4.append("documents", (_3 = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _3 === void 0 ? void 0 : _3.documents);

                      (_4 = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _4 === void 0 ? true : delete _4.documents;
                    } else {
                      (_5 = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _5 === void 0 ? true : delete _5.documents;
                    }
                  }
                }

                for (var i in sendDate) {
                  if (i == 'document_data') {
                    _data4.append(i, JSON.stringify(sendDate[i]));
                  } else if (i == 'upis') {
                    (function () {
                      // this.upiData = null 
                      var upiArr = [];
                      sendDate[i].forEach(function (element) {
                        upiArr.push(element === null || element === void 0 ? void 0 : element.upi_id);
                      });

                      _data4.append(i, JSON.stringify(upiArr));
                    })();
                  } else {
                    if (sendDate[i]) {
                      _data4.append(i, sendDate[i]);
                    } // data.append(i, sendDate[i])

                  }
                }

                var _url2 = this.http.updateMasterPartnerForm(this.masterPartnerId, _data4);

                _url2.subscribe(function (res) {
                  if (res.success) {
                    _this27.message.success(res === null || res === void 0 ? void 0 : res.message);

                    _this27.apiLoader['formSave'] = false;

                    _this27.router.navigate(['merchants/list']);
                  } else {
                    _this27.message.error(res === null || res === void 0 ? void 0 : res.message);

                    _this27.apiLoader['formSave'] = false;
                  }
                }, function (err) {
                  _this27.apiLoader['formSave'] = false;
                });
              }
            }
          }
        }, {
          key: "onClickSaveExistingForm",
          value: function onClickSaveExistingForm() {
            var _this28 = this;

            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

            var saveDoc = [];

            for (var _i5 in this.addEditProductForm.controls) {
              this.addEditProductForm.controls[_i5].markAsDirty();

              this.addEditProductForm.controls[_i5].updateValueAndValidity();
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
                  (_a = sendDate === null || sendDate === void 0 ? void 0 : sendDate.document_data[i]) === null || _a === void 0 ? true : delete _a.id;
                }

                if (!sendDate.unique_code) {
                  sendDate === null || sendDate === void 0 ? true : delete sendDate.unique_code;
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
                console.log(i);
                console.log(sendDate);
                console.log(sendDate[i]);

                if (i == 'document_data') {
                  data.append(i, JSON.stringify(sendDate[i]));
                } else {
                  if (sendDate[i]) {
                    data.append(i, sendDate[i]);
                  }
                }
              }

              var url = this.http.createPartnerForm(data);
              url.subscribe(function (res) {
                var _a;

                if (res.success) {
                  _this28.message.success(res === null || res === void 0 ? void 0 : res.message);

                  _this28.apiLoader['saveAddNew'] = false;
                  var newRouterLink = '/merchants/list/add-merchant';

                  _this28.router.navigate(['/']).then(function () {
                    _this28.router.navigate([newRouterLink]);
                  });
                } else {
                  for (var i in saveDoc) {
                    var value = _this28.addEditProductForm.get("document_data");

                    (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({
                      documents: saveDoc[i]
                    });
                  }

                  _this28.message.error(res === null || res === void 0 ? void 0 : res.message);

                  _this28.apiLoader['saveAddNew'] = false;
                }
              }, function (error) {
                var _a;

                for (var i in saveDoc) {
                  var value = _this28.addEditProductForm.get("document_data");

                  (_a = value.controls) === null || _a === void 0 ? void 0 : _a[i].patchValue({
                    documents: saveDoc[i]
                  });
                }

                _this28.apiLoader['saveAddNew'] = false;
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
          } //   onUpload(e, i){
          // console.log(e)
          // console.log(i)
          //   }
          // beforeUpload = (file: NzUploadFile): boolean => {
          //   // this.newGallery.patchValue({document: file});
          //   // console.log(file)
          //   // this.generateBase64View(file)
          //   // this.galleryDocument = file
          //   // this.logoStockistObject['fileObject'] = file;
          //   // this.handleChange(this.logoStockistObject['fileObject'])
          //   return false;
          // };
          // add(data?) {
          //   this.slab_array.push(this.addSlabControls(data))
          // }

        }, {
          key: "setUpiFormData",
          value: function setUpiFormData(data) {
            var _this29 = this;

            var _a;

            if (data) {
              (_a = data['upis']) === null || _a === void 0 ? void 0 : _a.forEach(function (element) {
                _this29.addAdditionalUPI(element);
              });
            } else {
              this.addAdditionalUPI();
            }
          }
        }, {
          key: "addAdditionalUPI",
          value: function addAdditionalUPI(data) {
            this.upis.push(this.addSlabControlsUPI(data));
          }
        }, {
          key: "addSlabControlsUPI",
          value: function addSlabControlsUPI(data) {
            return this.fb.group({
              upi_id: [data ? data : '']
            });
          }
        }, {
          key: "getUPIForm_arr",
          value: function getUPIForm_arr(form) {
            return form.controls.upis.controls;
          }
        }, {
          key: "removeMaster",
          value: function removeMaster(control, slab_index) {
            control = this.addEditProductForm.get('upis');
            control.value[slab_index].is_deleted = true;
            control.controls.splice(slab_index, 1);
          }
        }, {
          key: "skills",
          get: function get() {
            return this.addEditProductForm.get("document_data");
          }
        }, {
          key: "upis",
          get: function get() {
            return this.addEditProductForm.get('upis');
          }
        }]);

        return AddEditMerchantsComponent;
      }();

      AddEditMerchantsComponent.ɵfac = function AddEditMerchantsComponent_Factory(t) {
        return new (t || AddEditMerchantsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_6__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_7__["NzImageService"]));
      };

      AddEditMerchantsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddEditMerchantsComponent,
        selectors: [["app-add-edit-merchants"]],
        decls: 171,
        vars: 91,
        consts: [["nz-form", "", 3, "formGroup"], [1, "row", "border-bottom"], [1, "col-md-12"], ["nzFor", "name", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add valid Merchant Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "name", "placeholder", "Merchant Name"], ["nzFor", "address_line_1", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add valid Address!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "address_line_1", "placeholder", "Address Line 1"], ["nzFor", "address_line_2", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add valid Address line 2!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "address_line_2", "placeholder", "Address Line 2"], ["nzFor", "display_name", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add valid Display Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "display_name", "placeholder", "Display Name"], ["nzFor", "city", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add valid City!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "city", "placeholder", "City", 3, "keypress"], ["nzFor", "state", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please select Valid Sate", 3, "nzSm", "nzXs"], ["formControlName", "state", "nzPlaceHolder", "Select State", "nzShowSearch", "", "nzAllowClear", "", 3, "nzFocus", "nzOnSearch"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzFor", "pincode", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add valid Pincode!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "pincode", "placeholder", "Pincode"], ["nzFor", "phone", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add valid Phone No.!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "phone", "placeholder", "Phone No."], ["nzFor", "partner_master", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Select Valid Master Partner!", 3, "nzSm", "nzXs"], ["nzAllowClear", "", "nzShowSearch", "", "nzPlaceHolder", "Select Master Partner", "formControlName", "partner_master", 1, "mr-2", "width", 3, "nzAllowClear", "keyup"], ["nzCustomContent", "", 4, "ngFor", "ngForOf"], [1, "mt-2"], [1, "col-md-6"], ["nzFor", "contact_person_name", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add valid Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "contact_person_name", "placeholder", "Person Name", 3, "keypress"], ["nzFor", "contact_person_phone", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Phone No !", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "contact_person_phone", "placeholder", "person Phone No."], ["nzFor", "contact_person_email", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Email!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "contact_person_email", "placeholder", "Person Email", 2, "text-transform", "lowercase"], [1, "col-12"], ["nzFor", "bank_name", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Bank Name!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "bank_name", "placeholder", "Bank Name", 3, "keypress"], ["nzFor", "account_no", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Account No.!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "account_no", "placeholder", "Account No."], ["nzFor", "ifsc", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid IFSC Code!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "ifsc", "placeholder", "IFSC"], ["nzFor", "branch", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Branch!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "branch", "placeholder", "Branch", 3, "keypress"], [1, "mt-2", "d-flex"], [1, "mr-2"], ["class", "border-bottom", "formArrayName", "document_data", 4, "ngFor", "ngForOf"], [1, "row", "no-gutters"], [1, "col-12", "d-flex", "justify-content-between"], ["nz-button", "", "nzType", "link", 1, "pl-0", 3, "click"], [1, "row", "border-top", "border-bottom", "my-2"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "link", 3, "click"], [1, "row", "mt-2"], ["nzFor", "mdr", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid MDR %!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "mdr", "placeholder", "MDR."], ["nzFor", "interest_subvention", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please Add Valid Interest Subvention !", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "number", "formControlName", "interest_subvention", "placeholder", "Interest Subvention"], ["nzFor", "payout", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please select Payout!", 3, "nzSm", "nzXs"], ["formControlName", "payout"], ["nz-radio", "", "nzValue", "yes"], ["nz-radio", "", "nzValue", "no"], ["nz-radio", "", "nzValue", "na"], [1, "row", "my-3", "justify-content-between"], [1, "col-3"], ["nzType", "primary", "nz-button", "", "type", "submit", 3, "nzLoading", "disabled", "click", 4, "ngIf"], [1, "col-3", "text-right"], ["type", "submit", "nz-button", "", "nzType", "primary", 3, "nzLoading", "disabled", "click"], ["nzTitle", "Add New Document", 3, "nzVisible", "nzWidth", "nzOkDisabled", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nzHeight", "50vw", "nzWidth", "60vw", "nzKeyboard", "true", 3, "nzVisible", "nzTitle", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalFooter", ""], [3, "nzValue", "nzLabel"], ["nzCustomContent", ""], [3, "nzValue", "nzLabel", 4, "ngIf"], ["formArrayName", "document_data", 1, "border-bottom"], [1, "col-md-12", 3, "formGroupName"], [1, "d-flex", "flex-row", "bd-highlight", "mb-3"], [1, "px-2", 2, "min-width", "25%"], ["nzFor", "documents", "nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], [3, "nzSm", "nzXs", "nzErrorTip"], [1, "d-flex"], [3, "nzMultiple", "nzAccept", "nzCustomRequest", "nzChange"], ["nz-button", "", "type", "button"], ["nz-icon", "", "nzType", "upload"], [1, "px-2"], ["formControlName", "is_verified", "nz-checkbox", "", 1, "ml-3", "align-self-center", 3, "nzDisabled"], ["class", "mx-3", "nz-icon", "", "nzType", "delete", "nzTheme", "outline", "style", "font-size: 1rem; cursor: pointer; color: red;", 3, "click", 4, "ngIf"], ["class", " text-primary", "nz-icon", "", "nzType", "eye", "nzTheme", "outline", "style", "font-size: 1rem; cursor: pointer;", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline", 1, "mx-3", 2, "font-size", "1rem", "cursor", "pointer", "color", "red", 3, "click"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline", 1, "text-primary", 2, "font-size", "1rem", "cursor", "pointer", 3, "click"], ["formArrayName", "upis"], [3, "formGroupName"], ["nzFor", "secondary_upi", "class", "text-left", 3, "nzSm", "nzXs", 4, "ngIf"], ["nzErrorTip", "Please Add Valid UPI ID!", 3, "nzSm", "nzXs"], ["nz-input", "", "type", "text", "formControlName", "upi_id", "placeholder", "Enter UPI ID"], ["class", "text-left d-flex ml-auto mx-2 mb-2 pointer", "nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure remove UPI ID?", "nzPopconfirmPlacement", "topLeft", 3, "nzOnConfirm", 4, "ngIf"], ["nzFor", "secondary_upi", 1, "text-left", 3, "nzSm", "nzXs"], ["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure remove UPI ID?", "nzPopconfirmPlacement", "topLeft", 1, "text-left", "d-flex", "ml-auto", "mx-2", "mb-2", "pointer", 3, "nzOnConfirm"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "outline", 1, "font-size-24", "text-danger"], ["nzType", "primary", "nz-button", "", "type", "submit", 3, "nzLoading", "disabled", "click"], ["nzRequired", "", 1, "text-left", 3, "nzSm", "nzXs"], ["nzPlaceHolder", "Select Document", 1, "ml-4", 2, "min-width", "13rem", 3, "ngModel", "ngModelChange"], [3, "ngModelChange", 4, "ngFor", "ngForOf"], [3, "ngModelChange"], [1, "pdf_viewer_container"], ["width", "100%", 2, "height", "35rem", 3, "src"], ["nz-button", "", "nzType", "primary", 3, "click"]],
        template: function AddEditMerchantsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Merchant Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nz-form-control", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-form-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Address Line 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nz-form-control", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-form-label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Address line 2");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "City ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nz-form-control", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditMerchantsComponent_Template_input_keypress_33_listener($event) {
              return ctx.omit_special_char($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "nz-form-label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "State ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "nz-form-control", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "nz-select", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzFocus", function AddEditMerchantsComponent_Template_nz_select_nzFocus_39_listener() {
              return ctx.getListOfStates();
            })("nzOnSearch", function AddEditMerchantsComponent_Template_nz_select_nzOnSearch_39_listener($event) {
              return ctx.onSearchGetList($event, "state");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, AddEditMerchantsComponent_nz_option_40_Template, 1, 2, "nz-option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "nz-form-label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Pin Code ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "nz-form-control", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "nz-form-label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Phone No ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "nz-form-control", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "nz-form-label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Referred By ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "nz-form-control", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "nz-select", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AddEditMerchantsComponent_Template_nz_select_keyup_58_listener($event) {
              return ctx.getListOfMasterPartner($event == null ? null : $event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, AddEditMerchantsComponent_ng_container_59_Template, 2, 1, "ng-container", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Contact Personal Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "nz-form-label", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "nz-form-control", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditMerchantsComponent_Template_input_keypress_69_listener($event) {
              return ctx.omit_special_char($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "nz-form-label", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " Phone No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "nz-form-control", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "nz-form-label", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " Email Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "nz-form-control", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "input", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " Banking Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "nz-form-label", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Bank Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "nz-form-control", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "input", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditMerchantsComponent_Template_input_keypress_92_listener($event) {
              return ctx.omit_special_char($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "nz-form-label", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "A/c No. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "nz-form-control", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "input", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "nz-form-label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "IFSC Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "nz-form-control", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "input", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "nz-form-label", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Branch");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "nz-form-control", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "input", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function AddEditMerchantsComponent_Template_input_keypress_110_listener($event) {
              return ctx.omit_special_char($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "h5", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, " KYC Documents ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](114, AddEditMerchantsComponent_ng_container_114_Template, 20, 14, "ng-container", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMerchantsComponent_Template_button_click_117_listener($event) {
              return ctx.onClickOpenPopUp($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "+Add Document");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, " UPI ID ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](124, AddEditMerchantsComponent_div_124_Template, 9, 6, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "button", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMerchantsComponent_Template_button_click_126_listener() {
              return ctx.addAdditionalUPI();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "+Add UPI ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, " Other Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "(to be filled through admin)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "nz-form-label", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "MDR %");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "nz-form-control", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "input", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "nz-form-label", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Interest Subvention");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "nz-form-control", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "input", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "nz-form-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "nz-form-label", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Payout");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "nz-form-control", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "nz-radio-group", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "label", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "label", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "label", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "N/A");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](161, AddEditMerchantsComponent_button_161_Template, 2, 2, "button", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "button", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddEditMerchantsComponent_Template_button_click_163_listener() {
              return ctx.onClickSubmitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "nz-modal", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function AddEditMerchantsComponent_Template_nz_modal_nzVisibleChange_165_listener($event) {
              return ctx.isVisible = $event;
            })("nzOnCancel", function AddEditMerchantsComponent_Template_nz_modal_nzOnCancel_165_listener() {
              return ctx.handleCancel();
            })("nzOnOk", function AddEditMerchantsComponent_Template_nz_modal_nzOnOk_165_listener() {
              return ctx.addRule();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](166, AddEditMerchantsComponent_ng_container_166_Template, 5, 4, "ng-container", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "nz-modal", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function AddEditMerchantsComponent_Template_nz_modal_nzVisibleChange_167_listener($event) {
              return ctx.pdf_viewer_object_values["boolean"] = $event;
            })("nzOnCancel", function AddEditMerchantsComponent_Template_nz_modal_nzOnCancel_167_listener() {
              return ctx.handleCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](168, AddEditMerchantsComponent_ng_container_168_Template, 3, 1, "ng-container", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](169, AddEditMerchantsComponent_ng_template_169_Template, 2, 0, "ng-template", null, 86, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](170);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 7)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAllowClear", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listOfMasterPartner);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getUPIForm_arr(ctx.addEditProductForm));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 14)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 4)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 8)("nzXs", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx.apiLoader["formSave"])("disabled", ctx.apiLoader["saveAddNew"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzWidth", "580px")("nzOkDisabled", !ctx.selectedDocument);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", ctx.pdf_viewer_object_values["boolean"])("nzTitle", ctx.pdf_viewer_object_values["title"])("nzFooter", _r7);
          }
        },
        directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__["NzCardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__["NzRadioGroupComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__["NzRadioComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__["NzWaveDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__["NzModalContentDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzOptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_19__["NzUploadComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_21__["NzCheckboxComponent"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__["NzPopconfirmDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
        styles: ["[_nghost-%COMP%]     .ant-upload-list-text-container{\n    display: none !important;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1lZGl0LW1lcmNoYW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxrRUFBa0U7QUFDbEU7SUFDSSx3QkFBd0I7SUFDeEIiLCJmaWxlIjoiYWRkLWVkaXQtbWVyY2hhbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIG5nLXRucy1jMzc4LTQgYW50LXVwbG9hZC1saXN0LXRleHQtY29udGFpbmVyIG5nLXN0YXItaW5zZXJ0ZWQgKi9cbjpob3N0IDo6bmctZGVlcCAuYW50LXVwbG9hZC1saXN0LXRleHQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddEditMerchantsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-add-edit-merchants',
            templateUrl: './add-edit-merchants.component.html',
            styleUrls: ['./add-edit-merchants.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
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
    "M413":
    /*!*************************************************************!*\
      !*** ./src/app/users/merchants/merchants-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: MerchantsRoutingModule */

    /***/
    function M413(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MerchantsRoutingModule", function () {
        return MerchantsRoutingModule;
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


      var _add_edit_dsa_add_edit_dsa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-edit-dsa/add-edit-dsa.component */
      "21/P");
      /* harmony import */


      var _add_edit_merchants_add_edit_merchants_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-edit-merchants/add-edit-merchants.component */
      "ICX5");
      /* harmony import */


      var _dsa_list_dsa_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dsa-list/dsa-list.component */
      "wh8k");
      /* harmony import */


      var _merchants_list_merchants_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./merchants-list/merchants-list.component */
      "3Kr9");

      var routes = [{
        path: '',
        children: [{
          path: "DSA",
          canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"]],
          component: _dsa_list_dsa_list_component__WEBPACK_IMPORTED_MODULE_5__["DsaListComponent"],
          data: {
            title: "Partner DSA List",
            parent: "Users",
            custom_url: '/merchants/DSA',
            permissions: {
              only: 'view_partner_dsa',
              redirectTo: 'authentication/error-2'
            }
          }
        }, {
          path: "DSA",
          canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"]],
          data: {
            title: "Partner DSA List",
            parent: "Users",
            custom_url: '/merchants/DSA',
            permissions: {
              only: 'view_partner_dsa',
              redirectTo: 'authentication/error-2'
            }
          },
          children: [{
            path: "add-dsa",
            canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"]],
            component: _add_edit_dsa_add_edit_dsa_component__WEBPACK_IMPORTED_MODULE_3__["AddEditDsaComponent"],
            data: {
              title: "Add DSA",
              parent: "Users",
              custom_url: "add-dsa",
              permissions: {
                only: 'add_partner_dsa',
                redirectTo: 'authentication/error-2'
              }
            }
          }, {
            path: "edit-dsa",
            component: _add_edit_dsa_add_edit_dsa_component__WEBPACK_IMPORTED_MODULE_3__["AddEditDsaComponent"],
            canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"]],
            data: {
              title: "Edit DSA",
              parent: "DSA List",
              custom_url: "edit-dsa",
              permissions: {
                only: 'edit_partner_dsa',
                redirectTo: 'authentication/error-2'
              }
            }
          }]
        }, {
          path: "list",
          component: _merchants_list_merchants_list_component__WEBPACK_IMPORTED_MODULE_6__["MerchantsListComponent"],
          canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"]],
          data: {
            title: "Merchant List",
            parent: "Users",
            custom_url: "list",
            permissions: {
              only: 'view_merchant',
              redirectTo: 'authentication/error-2'
            }
          }
        }, {
          path: "list",
          canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"]],
          data: {
            title: 'Merchant List',
            parent: 'Users',
            custom_url: "merchants/list",
            permissions: {
              only: 'view_merchant',
              redirectTo: 'authentication/error-2'
            }
          },
          children: [{
            path: "add-merchant",
            canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"]],
            component: _add_edit_merchants_add_edit_merchants_component__WEBPACK_IMPORTED_MODULE_4__["AddEditMerchantsComponent"],
            data: {
              title: "Add Merchant",
              parent: "Users",
              custom_url: "add-merchant",
              permissions: {
                only: 'add_merchant',
                redirectTo: 'authentication/error-2'
              }
            }
          }, {
            path: "edit-merchant",
            canActivate: [ngx_permissions__WEBPACK_IMPORTED_MODULE_2__["NgxPermissionsGuard"]],
            component: _add_edit_merchants_add_edit_merchants_component__WEBPACK_IMPORTED_MODULE_4__["AddEditMerchantsComponent"],
            data: {
              title: "Edit Merchant",
              parent: "Users",
              custom_url: "add-merchant",
              permissions: {
                only: 'edit_merchant',
                redirectTo: 'authentication/error-2'
              }
            }
          }]
        }]
      }];

      var MerchantsRoutingModule = function MerchantsRoutingModule() {
        _classCallCheck(this, MerchantsRoutingModule);
      };

      MerchantsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MerchantsRoutingModule
      });
      MerchantsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MerchantsRoutingModule_Factory(t) {
          return new (t || MerchantsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MerchantsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MerchantsRoutingModule, [{
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
    "Yyx/":
    /*!*****************************************************!*\
      !*** ./src/app/users/merchants/merchants.module.ts ***!
      \*****************************************************/

    /*! exports provided: MerchantsModule */

    /***/
    function Yyx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MerchantsModule", function () {
        return MerchantsModule;
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


      var _merchants_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./merchants-routing.module */
      "M413");
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


      var _merchants_list_merchants_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./merchants-list/merchants-list.component */
      "3Kr9");
      /* harmony import */


      var _add_edit_merchants_add_edit_merchants_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./add-edit-merchants/add-edit-merchants.component */
      "ICX5");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "dEAy");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/divider */
      "5vDB");
      /* harmony import */


      var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/upload */
      "D9mS");
      /* harmony import */


      var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/dropdown */
      "Nqz0");
      /* harmony import */


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-zorro-antd/page-header */
      "jPNr");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "TaO5");
      /* harmony import */


      var _add_edit_dsa_add_edit_dsa_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./add-edit-dsa/add-edit-dsa.component */
      "21/P");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _dsa_list_dsa_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./dsa-list/dsa-list.component */
      "wh8k");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ng-zorro-antd/popconfirm */
      "KupA");

      var MerchantsModule = function MerchantsModule() {
        _classCallCheck(this, MerchantsModule);
      };

      MerchantsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MerchantsModule
      });
      MerchantsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MerchantsModule_Factory(t) {
          return new (t || MerchantsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _merchants_routing_module__WEBPACK_IMPORTED_MODULE_2__["MerchantsRoutingModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__["NzRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTableModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzSelectModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_20__["NzPageHeaderModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_11__["NzTagModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_14__["NzModalModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__["NzFormModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_16__["NzDividerModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_17__["NzUploadModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropDownModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_21__["NzCheckboxModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__["DragDropModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["SharedModule"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_26__["NzPopconfirmModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_19__["NgxPermissionsModule"].forChild()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MerchantsModule, {
          declarations: [_merchants_list_merchants_list_component__WEBPACK_IMPORTED_MODULE_12__["MerchantsListComponent"], _add_edit_merchants_add_edit_merchants_component__WEBPACK_IMPORTED_MODULE_13__["AddEditMerchantsComponent"], _add_edit_dsa_add_edit_dsa_component__WEBPACK_IMPORTED_MODULE_22__["AddEditDsaComponent"], _dsa_list_dsa_list_component__WEBPACK_IMPORTED_MODULE_24__["DsaListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _merchants_routing_module__WEBPACK_IMPORTED_MODULE_2__["MerchantsRoutingModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__["NzRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTableModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzSelectModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_20__["NzPageHeaderModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_11__["NzTagModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_14__["NzModalModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__["NzFormModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_16__["NzDividerModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_17__["NzUploadModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropDownModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_21__["NzCheckboxModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__["DragDropModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["SharedModule"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_26__["NzPopconfirmModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_19__["NgxPermissionsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MerchantsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_merchants_list_merchants_list_component__WEBPACK_IMPORTED_MODULE_12__["MerchantsListComponent"], _add_edit_merchants_add_edit_merchants_component__WEBPACK_IMPORTED_MODULE_13__["AddEditMerchantsComponent"], _add_edit_dsa_add_edit_dsa_component__WEBPACK_IMPORTED_MODULE_22__["AddEditDsaComponent"], _dsa_list_dsa_list_component__WEBPACK_IMPORTED_MODULE_24__["DsaListComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _merchants_routing_module__WEBPACK_IMPORTED_MODULE_2__["MerchantsRoutingModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_3__["NzRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__["NzTableModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__["NzSelectModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_20__["NzPageHeaderModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_11__["NzTagModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_14__["NzModalModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_15__["NzFormModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_16__["NzDividerModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_17__["NzUploadModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropDownModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_21__["NzCheckboxModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__["DragDropModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["SharedModule"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_26__["NzPopconfirmModule"], ngx_permissions__WEBPACK_IMPORTED_MODULE_19__["NgxPermissionsModule"].forChild()]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wh8k":
    /*!****************************************************************!*\
      !*** ./src/app/users/merchants/dsa-list/dsa-list.component.ts ***!
      \****************************************************************/

    /*! exports provided: DsaListComponent */

    /***/
    function wh8k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DsaListComponent", function () {
        return DsaListComponent;
      });
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
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


      var ngx_permissions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-permissions */
      "qSrz");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "JA5x");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "PTRe");
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


      var _shared_template_double_confirmation_popup_double_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../../shared/template/double-confirmation-popup/double-confirmation-popup.component */
      "thbs");
      /* harmony import */


      var _shared_template_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../../shared/template/change-password/change-password.component */
      "Kz7f");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "ocnv");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "B+r4");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "TaO5");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "zAKX");

      var _c0 = function _c0() {
        return ["/merchants/DSA/add-dsa"];
      };

      function DsaListComponent_button_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "+ Add Partner DSA");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
        }
      }

      function DsaListComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_ng_template_25_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r25.getResultBasedOnSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_td_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzExpandChange", function DsaListComponent_ng_container_52_td_2_Template_td_nzExpandChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var data_r27 = ctx_r46.$implicit;
            var i_r28 = ctx_r46.index;

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r45.onExpandChange(data_r27.id, $event, i_r28);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var data_r27 = ctx_r48.$implicit;
          var i_r28 = ctx_r48.index;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzExpand", ctx_r29.expandSet.has(data_r27.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r28 + 1, "");
        }
      }

      function DsaListComponent_ng_container_52_td_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzExpandChange", function DsaListComponent_ng_container_52_td_3_Template_td_nzExpandChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            var data_r27 = ctx_r50.$implicit;
            var i_r28 = ctx_r50.index;

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r49.onExpandChange(data_r27.id, $event, i_r28);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var data_r27 = ctx_r52.$implicit;
          var i_r28 = ctx_r52.index;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzExpand", ctx_r30.expandSet.has(data_r27.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r30.page - 1) * ctx_r30.globalPageSize + (i_r28 + 1), "");
        }
      }

      function DsaListComponent_ng_container_52_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_td_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return ["/merchants/DSA/edit-dsa"];
      };

      var _c2 = function _c2(a0) {
        return {
          id: a0
        };
      };

      function DsaListComponent_ng_container_52_li_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c2, data_r27.id));
        }
      }

      function DsaListComponent_ng_container_52_ng_container_26_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_ng_container_52_ng_container_26_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57);

            var data_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r55.deleteUserByUserId(data_r27 == null ? null : data_r27.id, false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Inactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_ng_container_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DsaListComponent_ng_container_52_ng_container_26_li_1_Template, 3, 0, "li", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !data_r27.is_deleted);
        }
      }

      function DsaListComponent_ng_container_52_ng_container_27_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_ng_container_52_ng_container_27_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62);

            var data_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r60.deleteUserByUserId(data_r27 == null ? null : data_r27.id, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Active");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_ng_container_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DsaListComponent_ng_container_52_ng_container_27_li_1_Template, 3, 0, "li", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r27.is_deleted);
        }
      }

      function DsaListComponent_ng_container_52_li_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_ng_container_52_li_28_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66);

            var data_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r64.storeSelectedId(data_r27 == null ? null : data_r27.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-upload", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Upload Agreement ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzMultiple", false)("nzAccept", ".xls, .xlsx, .pdf")("nzBeforeUpload", ctx_r39.beforeUpload);
        }
      }

      function DsaListComponent_ng_container_52_li_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_ng_container_52_li_29_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r69);

            var data_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r67.storeSelectedId(data_r27 == null ? null : data_r27.id, "get");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Show Agreement");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_li_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_ng_container_52_li_30_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r71);

            var data_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            ctx_r70._currentDsaId = data_r27 == null ? null : data_r27.id;
            return ctx_r70.createMapForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Product Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Submitted ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " & \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Document Not Submitted ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Verified ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_ng_container_8_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnConfirm", function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_ng_container_8_span_1_Template_a_nzOnConfirm_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r92);

            var data_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r90.onClickVerifyDoc(data_r76 == null ? null : data_r76.id);
          })("nzOnCancel", function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_ng_container_8_span_1_Template_a_nzOnCancel_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r92);

            var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](7);

            return ctx_r93.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Plz Click to verify ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_ng_container_8_span_1_Template, 3, 0, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r76 == null ? null : data_r76.is_verified) && (data_r76 == null ? null : data_r76.document_file_front));
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_ng_container_10_i_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_ng_container_10_i_1_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r98);

            var data_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;

            var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r96.onClickDownloadSelectedDocument(data_r76, "front");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_ng_container_10_i_1_Template, 1, 0, "i", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r76 == null ? null : data_r76.document_file_front);
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_ng_container_11_i_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_ng_container_11_i_1_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r103);

            var data_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;

            var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r101.storeSelectedId(data_r76, "submitted", "front");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_ng_container_11_i_1_Template, 1, 0, "i", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r76 == null ? null : data_r76.document_file_front);
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Submitted ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Document Not Submitted ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_i_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_i_19_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r107);

            var data_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r105.onClickDownloadSelectedDocument(data_r76, "back");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_i_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_i_20_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r110);

            var data_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r108.storeSelectedId(data_r76, "submitted", "back");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c3 = function _c3() {
        return ["verify_document_partner_dsa"];
      };

      var _c4 = function _c4() {
        return ["download_document"];
      };

      var _c5 = function _c5() {
        return ["view_document"];
      };

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_span_5_Template, 4, 0, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_span_6_Template, 2, 0, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_span_7_Template, 2, 0, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_ng_container_8_Template, 2, 1, "ng-container", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_ng_container_10_Template, 2, 1, "ng-container", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_ng_container_11_Template, 2, 1, "ng-container", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_span_16_Template, 3, 0, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_span_17_Template, 2, 0, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_i_19_Template, 1, 0, "i", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_i_20_Template, 1, 0, "i", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r76 == null ? null : data_r76.document_master == null ? null : data_r76.document_master.name) + " Front", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r76 == null ? null : data_r76.document_file_front);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r76 == null ? null : data_r76.document_file_front));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r76 == null ? null : data_r76.is_verified);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r76 == null ? null : data_r76.document_master == null ? null : data_r76.document_master.name) + " Back", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r76 == null ? null : data_r76.document_file_back);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r76 == null ? null : data_r76.document_file_back));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r76 == null ? null : data_r76.document_file_back);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r76 == null ? null : data_r76.document_file_back);
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_2_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Submitted ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " & \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_2_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Document Not Submitted ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_2_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Verified ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_2_span_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnConfirm", function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_2_span_8_Template_a_nzOnConfirm_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120);

            var data_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r118.onClickVerifyDoc(data_r76 == null ? null : data_r76.id);
          })("nzOnCancel", function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_2_span_8_Template_a_nzOnCancel_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120);

            var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](6);

            return ctx_r121.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Plz Click to verify ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_2_i_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_2_i_10_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r124);

            var data_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r122.onClickDownloadSelectedDocument(data_r76, "single");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_2_i_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_2_i_11_Template_i_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r127);

            var data_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r125.storeSelectedId(data_r76, "submitted", "single");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_2_span_5_Template, 4, 0, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_2_span_6_Template, 2, 0, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_2_span_7_Template, 2, 0, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_2_span_8_Template, 3, 0, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_2_i_10_Template, 1, 0, "i", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_2_i_11_Template, 1, 0, "i", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r76 == null ? null : data_r76.document_master == null ? null : data_r76.document_master.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r76 == null ? null : data_r76.document_file);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r76 == null ? null : data_r76.document_file));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r76 == null ? null : data_r76.is_verified);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r76 == null ? null : data_r76.is_verified) && (data_r76 == null ? null : data_r76.document_file));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r76 == null ? null : data_r76.document_file);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r76 == null ? null : data_r76.document_file);
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_1_Template, 21, 15, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DsaListComponent_ng_container_52_div_98_div_3_div_1_div_2_Template, 12, 7, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r76 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r76 == null ? null : data_r76.document_master == null ? null : data_r76.document_master.require_front_back);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r76 == null ? null : data_r76.document_master == null ? null : data_r76.document_master.require_front_back));
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DsaListComponent_ng_container_52_div_98_div_3_div_1_Template, 3, 2, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.documents);
        }
      }

      function DsaListComponent_ng_container_52_div_98_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " No Documents To show ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_div_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nz-page-header", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-card", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DsaListComponent_ng_container_52_div_98_div_3_Template, 2, 1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DsaListComponent_ng_container_52_div_98_div_4_Template, 4, 0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r42.storeDetailId == data_r27.id ? ctx_r42._apiLoader["detailList"] : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.documents == null ? null : data_r27.expandSet.documents.length) > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.documents == null ? null : data_r27.expandSet.documents.length) <= 0);
        }
      }

      function DsaListComponent_ng_container_52_div_102_div_1_div_17_li_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_ng_container_52_div_102_div_1_div_17_li_6_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r139);

            var data_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r137.onClickGetPassword("reset", data_r132);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Reset Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_52_div_102_div_1_div_17_li_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_ng_container_52_div_102_div_1_div_17_li_7_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r142);

            var data_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r140.onClickGetPassword("show", data_r132);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Show Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c6 = function _c6() {
        return ["reset_password_partner_dsa"];
      };

      var _c7 = function _c7() {
        return ["show_password_partner_dsa"];
      };

      function DsaListComponent_ng_container_52_div_102_div_1_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DsaListComponent_ng_container_52_div_102_div_1_div_17_li_6_Template, 3, 0, "li", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DsaListComponent_ng_container_52_div_102_div_1_div_17_li_7_Template, 3, 0, "li", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzClickHide", false)("nzTrigger", "click")("nzPlacement", "bottomRight")("nzDropdownMenu", _r134);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c7));
        }
      }

      var _c8 = function _c8() {
        return ["show_password_partner_dsa", "reset_password_partner_dsa"];
      };

      function DsaListComponent_ng_container_52_div_102_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, DsaListComponent_ng_container_52_div_102_div_1_div_17_Template, 8, 8, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r132 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r132 == null ? null : data_r132.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r132 == null ? null : data_r132.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c8));
        }
      }

      function DsaListComponent_ng_container_52_div_102_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DsaListComponent_ng_container_52_div_102_div_1_Template, 18, 4, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.corporate_admins);
        }
      }

      function DsaListComponent_ng_container_52_div_103_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " No Corporate Admin Detail's to show ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c9 = function _c9() {
        return ["edit_partner_dsa"];
      };

      var _c10 = function _c10() {
        return ["toggle_partner_dsa"];
      };

      var _c11 = function _c11() {
        return ["upload_agreement_partner_dsa"];
      };

      var _c12 = function _c12() {
        return ["show_agreement_partner_dsa"];
      };

      var _c13 = function _c13() {
        return ["view_document_partner_DSA"];
      };

      function DsaListComponent_ng_container_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DsaListComponent_ng_container_52_td_2_Template, 2, 2, "td", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DsaListComponent_ng_container_52_td_3_Template, 2, 2, "td", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, DsaListComponent_ng_container_52_td_15_Template, 3, 0, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DsaListComponent_ng_container_52_td_16_Template, 3, 0, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, DsaListComponent_ng_container_52_td_17_Template, 3, 0, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, DsaListComponent_ng_container_52_td_18_Template, 3, 0, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "nz-dropdown-menu", null, 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ul", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, DsaListComponent_ng_container_52_li_25_Template, 3, 5, "li", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, DsaListComponent_ng_container_52_ng_container_26_Template, 2, 1, "ng-container", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, DsaListComponent_ng_container_52_ng_container_27_Template, 2, 1, "ng-container", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, DsaListComponent_ng_container_52_li_28_Template, 3, 3, "li", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, DsaListComponent_ng_container_52_li_29_Template, 3, 0, "li", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, DsaListComponent_ng_container_52_li_30_Template, 3, 0, "li", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "nz-page-header", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "nz-card", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " NBFC's Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Phone No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "nz-page-header", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "nz-card", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Phone No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Email-Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "nz-page-header", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "nz-card", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, " Bank Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, " IFSC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " A/c No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, " Branch. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, DsaListComponent_ng_container_52_div_98_Template, 5, 4, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "nz-page-header", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "nz-card", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, DsaListComponent_ng_container_52_div_102_Template, 2, 1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, DsaListComponent_ng_container_52_div_103_Template, 4, 0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r27 = ctx.$implicit;

          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](54);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](56);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](58);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.page == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.page > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r27.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r27.display_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r27.dsa_type);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 42, data_r27.created_at, "dd MMM yyyy"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r27 == null ? null : data_r27.unique_code);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r27 == null ? null : data_r27.registered);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r27 == null ? null : data_r27.registered));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(data_r27 == null ? null : data_r27.is_deleted));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r27 == null ? null : data_r27.is_deleted);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzClickHide", false)("nzTrigger", "click")("nzPlacement", "bottomRight")("nzDropdownMenu", _r35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](45, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](46, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](47, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](48, _c11));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](49, _c12));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](50, _c12));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzExpand", ctx_r3.expandSet.has(data_r27.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r3.storeDetailId == data_r27.id ? ctx_r3._apiLoader["detailList"] : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.address_line_2) || (data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.address_line_1) ? (data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.address_line_1) + " " + (data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.address_line_2) : " -- ", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.phone) ? data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.phone : " -- ", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r3.storeDetailId == data_r27.id ? ctx_r3._apiLoader["detailList"] : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.contact_person_name) ? data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.contact_person_name : " -- ", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.contact_person_phone) ? data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.contact_person_phone : " -- ", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.contact_person_email) ? data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.contact_person_email : " -- ", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r3.storeDetailId == data_r27.id ? ctx_r3._apiLoader["detailList"] : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.bank_name) ? data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.bank_name : " -- ", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.ifsc) ? data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.ifsc : " -- ", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.account_no) ? data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.account_no : " -- ", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.branch) ? data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.branch : " -- ", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](51, _c13));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", _r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r3.storeDetailId == data_r27.id ? ctx_r3._apiLoader["detailList"] : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.corporate_admins == null ? null : data_r27.expandSet.corporate_admins.length) > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (data_r27 == null ? null : data_r27.expandSet == null ? null : data_r27.expandSet.corporate_admins == null ? null : data_r27.expandSet.corporate_admins.length) <= 0);
        }
      }

      function DsaListComponent_ng_template_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Basic Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_template_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Contact Personal Detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_template_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Banking Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_template_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "KYC Documents");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_template_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Corporate Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_template_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Other Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_ng_container_66_Template(rf, ctx) {
        if (rf & 1) {
          var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "You are about to delete an User");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "This action will delete the user Permanently");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Are You Sure ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_ng_container_66_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r145);

            var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r144.handleCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_ng_container_66_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r145);

            var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r146.confirmationTrigger(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r16.isCancel ? "Cancel Order" : "Delete");
        }
      }

      function DsaListComponent_ng_container_68_Template(rf, ctx) {
        if (rf & 1) {
          var _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-double-confirmation-popup", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onOkCall", function DsaListComponent_ng_container_68_Template_app_double_confirmation_popup_onOkCall_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r148);

            var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r147.confirmationTrigger();
          })("onCencelCall", function DsaListComponent_ng_container_68_Template_app_double_confirmation_popup_onCencelCall_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r148);

            var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            ctx_r149.isDelete = false;
            return ctx_r149.selectedUserId = "";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r17.statusOfSelectedLender ? "This action will Activate this account" : "This action will Deactivate this account")("subTitle", !ctx_r17.statusOfSelectedLender ? "if  required, you can activate this account after 15 days." : "if required, you can Deactivate this account after 15 days.")("alertWarning", ctx_r17.statusOfSelectedLender ? "Are your sure ?" : "Are your sure ?")("icon", "assets/images/activate.png")("cancelBtnTxt", "Cancel")("submitBtnTxt", "OK");
        }
      }

      function DsaListComponent_ng_container_70_Template(rf, ctx) {
        if (rf & 1) {
          var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-change-password", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onOkCall", function DsaListComponent_ng_container_70_Template_app_change_password_onOkCall_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r151);

            var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r150.onClickChangePassword($event);
          })("onCencelCall", function DsaListComponent_ng_container_70_Template_app_change_password_onCencelCall_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r151);

            var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r152.toggleChangePassword = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("userData", ctx_r18.selectedUserData)("cancelBtnTxt", "Cancel")("submitBtnTxt", "Update");
        }
      }

      function DsaListComponent_ng_container_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "embed", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r19.sanatizeUrlToSafe(ctx_r19.pdf_viewer_object_values["url"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
        }
      }

      function DsaListComponent_ng_template_73_Template(rf, ctx) {
        if (rf & 1) {
          var _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_ng_template_73_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r154);

            var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r153.handleCancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DsaListComponent_div_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r22.passwordForAdmin["password"] == null ? null : ctx_r22.passwordForAdmin["password"].password, " ");
        }
      }

      function DsaListComponent_div_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-label", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-control", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-form-label", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-form-control", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nz-form-label", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Send Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-form-control", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "label", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r23.resetPasswordForm);

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
        }
      }

      function DsaListComponent_section_79_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_section_79_ng_template_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r159);

            var ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r158.handlecancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_section_79_ng_template_1_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r159);

            var ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r160.handleok("dsa_product");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Update ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx_r156.isMapDsaModal.loader)("disabled", ctx_r156.isMapDsaModal.type == "dsa_product" ? ctx_r156.dsaProductForm.invalid ? true : false : !ctx_r156.fileList[0] ? true : false);
        }
      }

      function DsaListComponent_section_79_ng_container_4_div_1_nz_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 117);
        }

        if (rf & 2) {
          var item_r164 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", item_r164.id)("nzLabel", item_r164.name);
        }
      }

      function DsaListComponent_section_79_ng_container_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-form-label", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Select Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-form-control", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-select", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DsaListComponent_section_79_ng_container_4_div_1_nz_option_8_Template, 1, 2, "nz-option", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r161.dsaProductForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 24)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSm", 24)("nzXs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzMaxTagCount", 2)("nzSize", "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r161.productList);
        }
      }

      function DsaListComponent_section_79_ng_container_4_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-upload", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzFileListChange", function DsaListComponent_section_79_ng_container_4_div_2_Template_nz_upload_nzFileListChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r166);

            var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r165.fileList = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Drag and Drop file here");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Browse");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzMultiple", false)("nzFileList", ctx_r162.fileList)("nzBeforeUpload", ctx_r162.beforeUploadName)("nzAccept", ".xls, .xlsx");
        }
      }

      function DsaListComponent_section_79_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DsaListComponent_section_79_ng_container_4_div_1_Template, 9, 8, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DsaListComponent_section_79_ng_container_4_div_2_Template, 7, 4, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r157.isMapDsaModal.type == "dsa_product");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r157.isMapDsaModal.type == "importFile");
        }
      }

      function DsaListComponent_section_79_Template(rf, ctx) {
        if (rf & 1) {
          var _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DsaListComponent_section_79_ng_template_1_Template, 4, 2, "ng-template", null, 107, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-modal", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function DsaListComponent_section_79_Template_nz_modal_nzVisibleChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r168);

            var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r167.isMapDsaModal.isVisible = $event;
          })("nzOnCancel", function DsaListComponent_section_79_Template_nz_modal_nzOnCancel_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r168);

            var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r169.handlecancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DsaListComponent_section_79_ng_container_4_Template, 3, 2, "ng-container", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", ctx_r24.isMapDsaModal.isVisible)("nzTitle", ctx_r24.isMapDsaModal.type == "dsa_product" ? "Map DSA to Product" : "Import Excel File")("nzFooter", _r155);
        }
      }

      var _c14 = function _c14() {
        return ["add_partner_dsa"];
      };

      var _c15 = function _c15() {
        return [100, 200, 300, 400, 500, 600, 750, 1000];
      };

      var _c16 = function _c16() {
        return {
          x: "1200px",
          y: ""
        };
      }; // getPartnerDSAList


      var DsaListComponent = /*#__PURE__*/function () {
        function DsaListComponent(http, message, sanitized, fb) {
          var _this30 = this;

          _classCallCheck(this, DsaListComponent);

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
          this.merchantDetailList = [];
          this.pdf_viewer_object_values = {
            'boolean': false,
            'url': '',
            'title': ''
          };
          this.isMapDsaModal = {
            isVisible: false,
            type: null,
            loader: false
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
            _this30.file = file.name;
            _this30.uploaded_file = file;
            console.log(file);
            console.log(_this30.uploaded_file); // this.updateMCCCodeWithUploadingFile();

            _this30.uploadAndShowAgreement('post');

            return false;
          };

          this.productList = [];
          this.fileList = [];

          this.beforeUploadName = function (file) {
            _this30.fileList = [];
            _this30.fileList = _this30.fileList.concat(file);
            _this30._currentFileName = _this30.fileList[0];
            console.log(_this30._currentFileName, file); // this.generateBase64View(file)

            return false;
          };
        }

        _createClass(DsaListComponent, [{
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
            this.getPartnerDSAList();
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
            var _this31 = this;

            this.selectedUserId = data === null || data === void 0 ? void 0 : data.id;

            if (action == 'show') {
              this.passwordForAdmin['apiLoader'] = true;
              this.passwordForAdmin['isVisibleModal'] = true;
              this.passwordForAdmin['toggleShoePasswordField'] = true;
              this.http.showPasswordOfCorporateAdmin(data === null || data === void 0 ? void 0 : data.id).subscribe(function (res) {
                console.log(res);
                _this31.passwordForAdmin['apiLoader'] = false;
                _this31.passwordForAdmin['password'] = res === null || res === void 0 ? void 0 : res.data;
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
            var _this32 = this;

            for (var _i6 in this.resetPasswordForm.controls) {
              this.resetPasswordForm.controls[_i6].markAsDirty();

              this.resetPasswordForm.controls[_i6].updateValueAndValidity();
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
                _this32.passwordForAdmin['isVisibleModal'] = false;
                console.log(res);

                if (res === null || res === void 0 ? void 0 : res.success) {
                  _this32.message.success(res === null || res === void 0 ? void 0 : res.message);

                  _this32.passwordForAdmin['apiLoaderOnClick'] = true;
                  _this32.passwordForAdmin['isVisibleModal'] = false;
                } else {
                  _this32.message.error(res === null || res === void 0 ? void 0 : res.message);

                  _this32.passwordForAdmin['isVisibleModal'] = false;
                  _this32.passwordForAdmin['apiLoaderOnClick'] = true;
                }
              });
            }
          }
        }, {
          key: "onClickChangeTab",
          value: function onClickChangeTab(e) {
            this.selectedTab = e;
            this.getPartnerDSAList();
          }
        }, {
          key: "getResultBasedOnSearch",
          value: function getResultBasedOnSearch() {
            this.page = 1;
            this.getPartnerDSAList();
          }
        }, {
          key: "cancel",
          value: function cancel() {}
        }, {
          key: "onClickVerifyDoc",
          value: function onClickVerifyDoc(id) {
            var _this33 = this;

            var data;
            this.http.verifyUploadedKycDocumentForMasterAndPartner(id, data).subscribe(function (res) {
              _this33.message.success(res === null || res === void 0 ? void 0 : res.message);

              _this33.getMerchantDetail(_this33.storeDetailId, _this33.selectedIndexOfExpand);

              console.log(res);
            });
          }
        }, {
          key: "getMerchantDetail",
          value: function getMerchantDetail(id, i) {
            var _this34 = this;

            this._apiLoader["detailList"] = true;
            this.http.getPartnerDSAListById(id).subscribe(function (res) {
              // this.merchantDetailList = res?.data;
              _this34.resetPasswordForm.reset();

              _this34.merchantDetailList.push(res === null || res === void 0 ? void 0 : res.data);

              _this34.merchantList[i].expandSet = res === null || res === void 0 ? void 0 : res.data;
              console.log('this.merchantList', _this34.merchantList);
              _this34._apiLoader["detailList"] = false;
            }, function (err) {
              console.log(err);
              _this34._apiLoader["detailList"] = false;
            });
          }
        }, {
          key: "resetFilter",
          value: function resetFilter() {
            this.page = 1;
            this.searchValue = '';
            this.getPartnerDSAList();
          }
        }, {
          key: "getPartnerDSAList",
          value: function getPartnerDSAList(e) {
            var _this35 = this;

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
              'partner_nature': 'DSA',
              'status': this.selectedTab === 'all' ? 'all' : this.selectedTab === 'active' ? 'active' : this.selectedTab === 'inactive' ? 'inactive' : ''
            }; // if(this.searchValue){
            //   data['']
            // }

            this._apiLoader["list"] = true;
            this.http.getPartnerDSAList(data).subscribe(function (res) {
              var _a, _b;

              console.log(res);
              _this35.merchantList = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.results;
              _this35.total_count = (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.total_count;
              _this35._apiLoader["list"] = false;
            }, function (erro) {
              _this35._apiLoader["list"] = false;
            });
          }
        }, {
          key: "onExpandChange",
          value: function onExpandChange(id, checked, i) {
            if (checked) {
              this.selectedIndexOfExpand = i;
              this.getMerchantDetail(this.storeDetailId = id, i);
              this.expandSet.add(id); // alert('Clicked On Expand ' + id)
            } else {
              this.expandSet["delete"](id);
            }
          }
        }, {
          key: "handleCancel",
          value: function handleCancel() {
            this.isDelete = false;
            this.pdf_viewer_object_values['boolean'] = false;
            this.pdf_viewer_object_values['url'] = '';
          }
        }, {
          key: "confirmationTrigger",
          value: function confirmationTrigger(value) {
            var _this36 = this;

            this.http.deleteUserByUserId(this.selectedUserId).subscribe(function (res) {
              var _a;

              if (res === null || res === void 0 ? void 0 : res.success) {
                _this36.message.success(res === null || res === void 0 ? void 0 : res.message);
              } else {
                _this36.message.error((_a = res === null || res === void 0 ? void 0 : res.message) === null || _a === void 0 ? void 0 : _a[0]);
              }

              _this36.getPartnerDSAList();

              _this36.isDelete = false;
            }, function (err) {
              _this36.isDelete = false;
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
            var _this37 = this;

            console.log('event to execute');
            console.log(e);
            this.http.changePasswordByAdmin(e).subscribe(function (res) {
              _this37.message.success('Password Updated Successfully');

              _this37.toggleChangePassword = false;
            }, function (err) {
              _this37.toggleChangePassword = false;
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
            if (action == 'front') {
              var data = new Blob([e === null || e === void 0 ? void 0 : e.document_file_front], {
                type: 'text/plain;charset=utf-8'
              });
              file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"](data, "Front_Doc");
            } else if (action == 'back') {
              var data = new Blob([e === null || e === void 0 ? void 0 : e.document_file_back], {
                type: 'text/plain;charset=utf-8'
              });
              file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"](data, "Back_Doc");
            } else if (action == 'single') {
              var data = new Blob([e === null || e === void 0 ? void 0 : e.document_file], {
                type: 'text/plain;charset=utf-8'
              });
              file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"](data, "Document_Preview");
            }
          }
        }, {
          key: "uploadAndShowAgreement",
          value: function uploadAndShowAgreement(action) {
            var _this38 = this;

            var data = new FormData();
            var endPoint = 'partner';
            data.append('file', this.uploaded_file);

            if (action === 'post') {
              var generateloader = this.message.loading('Uplaoding Document..', {
                nzDuration: 0
              }).messageId;
              this.http.uploadAndShowAgreement(endPoint, 'post', this.selectedIdForAgreement, data).subscribe(function (res) {
                var _a;

                console.log(res);

                if (res === null || res === void 0 ? void 0 : res.success) {
                  _this38.message.remove(generateloader);

                  _this38.message.success(res === null || res === void 0 ? void 0 : res.message);
                } else {
                  _this38.message.remove(generateloader);

                  _this38.message.error((_a = res === null || res === void 0 ? void 0 : res.message) === null || _a === void 0 ? void 0 : _a[0]);
                }
              }, function (error) {
                _this38.message.remove(generateloader);

                console.log(error);
              });
            } else {
              var _generateloader2 = this.message.loading('Generating Report..', {
                nzDuration: 0
              }).messageId;
              this.http.uploadAndShowAgreement(endPoint, 'get', this.selectedIdForAgreement).subscribe(function (res) {
                console.log(res); // pdfViewerAndDownload(){

                if (res.success) {
                  _this38.pdf_viewer_object_values['title'] = 'Show Agreement';
                  _this38.pdf_viewer_object_values['url'] = res === null || res === void 0 ? void 0 : res.data.agreement;
                  _this38.pdf_viewer_object_values['boolean'] = true;

                  _this38.message.remove(_generateloader2);
                } else {
                  _this38.message.remove(_generateloader2);

                  _this38.message.error('No Reports To Generate..');
                } // }

              }, function (error) {
                _this38.message.remove(_generateloader2);

                console.log(error);
              });
            }
          }
        }, {
          key: "getProducts",
          value: function getProducts() {
            var _this39 = this;

            this.http.getProducts().subscribe(function (res) {
              if (res.success) {
                _this39.productList = res.data;
              }
            });
          }
        }, {
          key: "createMapForm",
          value: function createMapForm() {
            this.dsaProductForm = this.fb.group({
              product_ids: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
            this.getProducts();
            this.isMapDsaModal.type = 'dsa_product';
            this.isMapDsaModal.isVisible = true;
          }
        }, {
          key: "handlecancel",
          value: function handlecancel() {
            this.isMapDsaModal.isVisible = false;
            this.isMapDsaModal.type = null;
            this._currentFileName = null;
            this._currentDsaId = null;
            this.dsaProductForm.reset();
          }
        }, {
          key: "handleok",
          value: function handleok() {
            var _this40 = this;

            if (this.isMapDsaModal.isVisible) {
              if (this.isMapDsaModal.type == 'dsa_product') {
                this.isMapDsaModal.loader = true;
                var data = {
                  'product_ids': this.dsaProductForm.get('product_ids').value,
                  'dsa_id': this._currentDsaId
                };
                this.http.mapDSAtoProduct(data).subscribe(function (res) {
                  if (res.success) {
                    _this40.message.success(res.message);

                    _this40.getPartnerDSAList();

                    _this40.isMapDsaModal.loader = false;

                    _this40.handlecancel();
                  } else {
                    _this40.isMapDsaModal.loader = false;

                    _this40.handlecancel();
                  }
                }, function (error) {
                  _this40.message.error(error);

                  _this40.isMapDsaModal.loader = false;

                  _this40.handlecancel();
                });
              } else if (this.isMapDsaModal.type == 'importFile') {
                this.isMapDsaModal.loader = true;
                var formData = new FormData();
                formData.append('file', this._currentFileName);
                this.http.uploadCommissionDsa(formData).subscribe(function (res) {
                  if (res.success) {
                    _this40.message.success(res.message);

                    _this40.getPartnerDSAList();

                    _this40.isMapDsaModal.loader = false;

                    _this40.handlecancel();
                  } else {
                    _this40.isMapDsaModal.loader = false;

                    _this40.handlecancel();
                  }
                }, function (error) {
                  _this40.message.error(error);

                  _this40.isMapDsaModal.loader = false;

                  _this40.handlecancel();
                });
              }
            }
          }
        }, {
          key: "downloadSampleFile",
          value: function downloadSampleFile() {
            var link = document.createElement('a');
            link.href = 'assets/static files/sample_file_commission.xlsx';
            link.download = 'sample_file_commission.xlsx';
            link.click();
          }
        }]);

        return DsaListComponent;
      }();

      DsaListComponent.ɵfac = function DsaListComponent_Factory(t) {
        return new (t || DsaListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
      };

      DsaListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DsaListComponent,
        selectors: [["app-dsa-list"]],
        decls: 80,
        vars: 45,
        consts: [[1, "row", "mb-md-3"], [1, "col-md-6", "mb-md-0"], [3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "all", 1, "mr-md-2", "mr-2", "px-4", "mb-md-0", "mb-3", "border-radius-2"], ["nz-radio-button", "", "nzValue", "active", 1, "mr-md-2", "mr-2", "px-4", "mb-md-0", "mb-3", "border-radius-2"], ["nz-radio-button", "", "nzValue", "inactive", 1, "mr-md-2", "mr-2", "px-4", "mb-md-0", "mb-3", "border-radius-2"], [1, "col-md-6", "col-12", "my-md-0", "my-3", "d-flex", "justify-content-end"], ["nz-button", "", 1, "text-primary", 3, "click"], ["nz-button", "", "nzType", "primary", 1, "mx-2", 3, "click"], ["nz-button", "", "class", "text-primary", 3, "routerLink", 4, "ngxPermissionsOnly"], [1, "row"], [1, "w-100"], [1, "col-md-4", "mb-3", "d-flex"], ["nzSearch", "", 3, "nzAddOnAfter"], ["type", "text", "nz-input", "", "placeholder", "Search text", 3, "ngModel", "keyup.enter", "ngModelChange"], ["suffixIconButton", ""], ["nz-button", "", "nzType", "default", "nzShape", "circle", "nz-tooltip", "", "nzTooltipTitle", "Reset Filter", 1, "mx-2", 3, "click"], ["nz-icon", "", "nzType", "undo"], [1, "accordianLoanApp"], [3, "nzTotal", "nzFrontPagination", "nzLoading", "nzShowSizeChanger", "nzPageSize", "nzPageIndex", "nzPageSizeOptions", "nzData", "nzScroll", "nzQueryParams"], ["rowspan", "2", "nzWidth", "100px"], ["nzWidth", "5rem", "nzRight", "", 1, "pr-0"], [4, "ngFor", "ngForOf"], ["basicDetail", ""], ["contactPersonDetail", ""], ["bankingDetail", ""], ["kycDocument", ""], ["adminDetail", ""], ["otherDetails", ""], ["nzOkLoading", "true", "nzWidth", "25rem", 3, "nzVisible", "nzTitle", "nzClosable", "nzFooter", "nzVisibleChange", "nzOnCancel"], [4, "nzModalContent"], [3, "nzWidth", "nzVisible", "nzFooter", "nzClosable", "nzVisibleChange", "nzOnCancel"], ["nzTitle", "Change Password", 3, "nzWidth", "nzVisible", "nzFooter", "nzClosable", "nzOnCancel", "nzVisibleChange"], ["nzHeight", "50vw", "nzWidth", "60vw", "nzKeyboard", "true", 3, "nzVisible", "nzTitle", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalFooter", ""], [3, "nzTitle", "nzWidth", "nzVisible", "nzOkLoading", "nzFooter", "nzClosable", "nzVisibleChange", "nzOnOk", "nzOnCancel"], [3, "nzLoading"], ["class", "row", 4, "ngIf"], [4, "ngIf"], ["nz-button", "", 1, "text-primary", 3, "routerLink"], ["nz-button", "", "nzType", "secondary", "nzSearch", "", 3, "click"], ["nz-icon", "", "nzType", "search"], [3, "nzExpand", "nzExpandChange", 4, "ngIf"], ["nzRight", "", 1, "pr-0"], ["nz-dropdown", "", 1, "text-dark", "font-size-20", 3, "nzClickHide", "nzTrigger", "nzPlacement", "nzDropdownMenu"], ["src", "assets/images/ellipsis.png", "alt", "", "width", "30"], ["latestUploadDropDown", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "routerLink", "queryParams", 4, "ngxPermissionsOnly"], [4, "ngxPermissionsOnly"], ["nz-menu-item", "", 3, "click", 4, "ngxPermissionsOnly"], [3, "nzExpand"], [1, "justify-content-center"], [1, "site-page-header", "acc-bg-light", "mb-2", 3, "nzTitle"], [1, "mb-md-5", 3, "nzLoading"], [1, "col-md-6"], [1, "d-flex", "flex-column"], [1, "col-md-4"], ["class", "justify-content-center", 4, "ngxPermissionsOnly"], [3, "nzExpand", "nzExpandChange"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "outline"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "outline"], ["nz-menu-item", "", 3, "routerLink", "queryParams"], [1, "m-l-5"], ["nz-menu-item", "", 3, "click", 4, "ngIf"], ["nz-menu-item", "", 3, "click"], ["nzSize", "large", 1, "d-flex", "pl-1", "align-items-left", 2, "cursor", "pointer", 3, "nzMultiple", "nzAccept", "nzBeforeUpload"], ["class", "col-md-6 mb-2", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mb-2"], ["class", "d-flex flex-column", 4, "ngIf"], [1, "mb-2"], [1, "d-flex"], [1, "mx-2"], ["style", "cursor: pointer;", "class", "mr-3", "nz-icon", "", "nzType", "download", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["style", "cursor: pointer;", "class", "mr-3", "nz-icon", "", "nzType", "eye", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["nz-popconfirm", "", "nzPopconfirmTitle", "Are you sure you want to verify corresponding document ?", "nzPopconfirmPlacement", "bottom", 3, "nzOnConfirm", "nzOnCancel"], ["nz-icon", "", "nzType", "download", "nzTheme", "outline", 1, "mr-3", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline", 1, "mr-3", 2, "cursor", "pointer", 3, "click"], ["class", "col-md-12 mb-2", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mb-2"], [1, "col-4"], ["class", "col-4 align-self-center text-right", 4, "ngxPermissionsOnly"], [1, "col-4", "align-self-center", "text-right"], ["showPassword", "nzDropdownMenu"], [1, "ml-md-2"], [1, "mb-0"], [1, "py-4", "text-center"], [1, "font-weight-bold", "text-dark", "mt-4"], [1, "font-size-12", "font-weight-semibold", "text-dark"], [1, "row", "pt-4"], [1, "col-6"], ["nz-button", "", "nzType", "default", "nzBlock", "", 3, "click"], ["nz-button", "", "nzType", "primary", "nzBlock", "", 3, "click"], [3, "title", "subTitle", "alertWarning", "icon", "cancelBtnTxt", "submitBtnTxt", "onOkCall", "onCencelCall"], [3, "userData", "cancelBtnTxt", "submitBtnTxt", "onOkCall", "onCencelCall"], [1, "pdf_viewer_container"], ["width", "100%", 2, "height", "25rem", 3, "src"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nz-form", "", 3, "formGroup"], [1, "col-md-12"], ["nzFor", "name", "nzRequired", "", 1, "text-left", 3, "nzSm"], ["nzErrorTip", "Please Add New Password!", 3, "nzSm"], ["nz-input", "", "type", "text", "formControlName", "new_password", "placeholder", "New Password"], ["nzErrorTip", "Please Add Confirm Password!", 3, "nzSm"], ["nz-input", "", "type", "text", "formControlName", "retype_password", "placeholder", "Confirm Password"], ["nzErrorTip", "Please Select Action!", 3, "nzSm"], ["nz-checkbox", "", "formControlName", "send_email"], ["mapDsaModal", ""], [3, "nzVisible", "nzTitle", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["nz-button", "", "nzType", "link", 1, "border", 3, "click"], ["nz-button", "", "nzType", "primary", 1, "mx-2", 3, "nzLoading", "disabled", "click"], [1, "col-md-12", "mb-3"], [3, "formGroup"], ["nzFor", "stage", 1, "text-left", 3, "nzSm", "nzXs"], ["nzErrorTip", "Please select product!", 3, "nzSm", "nzXs"], ["nzAllowClear", "", "formControlName", "product_ids", "nzPlaceHolder", "Please select product", "nzMode", "multiple", 3, "nzMaxTagCount", "nzSize"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], ["nzType", "drag", 3, "nzMultiple", "nzFileList", "nzBeforeUpload", "nzAccept", "nzFileListChange"], [1, "ant-upload-text"], ["nz-button", "", "nzType", "primary", 1, "mt-md-5"]],
        template: function DsaListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-radio-group", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DsaListComponent_Template_nz_radio_group_ngModelChange_3_listener($event) {
              return ctx.selectedTab = $event;
            })("ngModelChange", function DsaListComponent_Template_nz_radio_group_ngModelChange_3_listener($event) {
              return ctx.onClickChangeTab($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_Template_button_click_11_listener() {
              ctx.isMapDsaModal.type = "importFile";
              return ctx.isMapDsaModal.isVisible = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Import File");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_Template_button_click_13_listener() {
              return ctx.downloadSampleFile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Download Sample ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, DsaListComponent_button_15_Template, 2, 2, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "nz-input-group", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function DsaListComponent_Template_input_keyup_enter_24_listener() {
              return ctx.getResultBasedOnSearch();
            })("ngModelChange", function DsaListComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.searchValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, DsaListComponent_ng_template_25_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DsaListComponent_Template_button_click_27_listener() {
              return ctx.resetFilter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "nz-table", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzQueryParams", function DsaListComponent_Template_nz_table_nzQueryParams_30_listener($event) {
              return ctx.getPartnerDSAList($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Merchant Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Display Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Regd. On");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Merchant ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Registered(KYC)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "System Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, DsaListComponent_ng_container_52_Template, 104, 52, "ng-container", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, DsaListComponent_ng_template_53_Template, 3, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, DsaListComponent_ng_template_55_Template, 3, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, DsaListComponent_ng_template_57_Template, 3, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, DsaListComponent_ng_template_59_Template, 3, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, DsaListComponent_ng_template_61_Template, 3, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, DsaListComponent_ng_template_63_Template, 3, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "nz-modal", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function DsaListComponent_Template_nz_modal_nzVisibleChange_65_listener($event) {
              return ctx.isDelete = $event;
            })("nzOnCancel", function DsaListComponent_Template_nz_modal_nzOnCancel_65_listener() {
              return ctx.handleCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, DsaListComponent_ng_container_66_Template, 15, 1, "ng-container", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "nz-modal", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function DsaListComponent_Template_nz_modal_nzVisibleChange_67_listener($event) {
              return ctx.isDelete = $event;
            })("nzOnCancel", function DsaListComponent_Template_nz_modal_nzOnCancel_67_listener() {
              ctx.isDelete = false;
              return ctx.selectedUserId = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, DsaListComponent_ng_container_68_Template, 2, 6, "ng-container", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "nz-modal", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnCancel", function DsaListComponent_Template_nz_modal_nzOnCancel_69_listener() {
              return ctx.toggleChangePassword = false;
            })("nzVisibleChange", function DsaListComponent_Template_nz_modal_nzVisibleChange_69_listener($event) {
              return ctx.toggleChangePassword = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, DsaListComponent_ng_container_70_Template, 2, 3, "ng-container", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "nz-modal", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function DsaListComponent_Template_nz_modal_nzVisibleChange_71_listener($event) {
              return ctx.pdf_viewer_object_values["boolean"] = $event;
            })("nzOnCancel", function DsaListComponent_Template_nz_modal_nzOnCancel_71_listener() {
              return ctx.handleCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, DsaListComponent_ng_container_72_Template, 3, 1, "ng-container", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, DsaListComponent_ng_template_73_Template, 2, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "nz-modal", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function DsaListComponent_Template_nz_modal_nzVisibleChange_75_listener($event) {
              return ctx.passwordForAdmin["isVisibleModal"] = $event;
            })("nzOnOk", function DsaListComponent_Template_nz_modal_nzOnOk_75_listener() {
              return ctx.onClickResetPassword();
            })("nzOnCancel", function DsaListComponent_Template_nz_modal_nzOnCancel_75_listener() {
              ctx.passwordForAdmin["isVisibleModal"] = false;
              return ctx.selectedUserId = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "nz-card", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, DsaListComponent_div_77_Template, 5, 1, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, DsaListComponent_div_78_Template, 20, 7, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, DsaListComponent_section_79_Template, 5, 3, "section", 38);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);

            var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedTab);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c14));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.total_count ? ctx.total_count : " 0 ", " Results Found");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAddOnAfter", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTotal", ctx.total_count)("nzFrontPagination", false)("nzLoading", ctx._apiLoader["list"])("nzShowSizeChanger", true)("nzFrontPagination", false)("nzPageSize", ctx.globalPageSize)("nzPageIndex", ctx.page)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c15))("nzShowSizeChanger", true)("nzData", ctx.merchantList)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c16));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.merchantList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", ctx.isDelete)("nzTitle", null)("nzClosable", false)("nzFooter", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzWidth", 500)("nzVisible", ctx.isDelete)("nzFooter", null)("nzClosable", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzWidth", 800)("nzVisible", ctx.toggleChangePassword)("nzFooter", null)("nzClosable", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", ctx.pdf_viewer_object_values["boolean"])("nzTitle", ctx.pdf_viewer_object_values["title"])("nzFooter", _r20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzTitle", ctx.passwordForAdmin["toggleShoePasswordField"] ? "View Password" : "Reset Password")("nzWidth", 500)("nzVisible", ctx.passwordForAdmin["isVisibleModal"])("nzOkLoading", ctx.passwordForAdmin["apiLoader"])("nzFooter", ctx.passwordForAdmin["toggleShoePasswordField"] ? null : "")("nzClosable", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLoading", ctx.passwordForAdmin["apiLoader"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passwordForAdmin["toggleShoePasswordField"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.passwordForAdmin["toggleShoePasswordField"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMapDsaModal.isVisible);
          }
        },
        directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_6__["NzRadioButtonDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ngx_permissions__WEBPACK_IMPORTED_MODULE_10__["NgxPermissionsDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__["NzCardComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzCellFixedDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__["NzModalContentDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterLink"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropDownADirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropDownDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_18__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_19__["NzMenuDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTrExpandDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableFixedRowComponent"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_20__["NzPageHeaderComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTdAddOnComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_19__["NzMenuItemDirective"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_21__["NzUploadComponent"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__["NzPopconfirmDirective"], _shared_template_double_confirmation_popup_double_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_23__["DoubleConfirmationPopupComponent"], _shared_template_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_24__["ChangePasswordComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_25__["NzFormControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_27__["NzCheckboxComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__["NzSelectComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__["NzOptionComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRzYS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUciLCJmaWxlIjoiZHNhLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIDpob3N0IDo6bmctZGVlcCAuYW50LXRhYmxlLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MjdweCkgIWltcG9ydGFudDtcbn0gKi8iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DsaListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-dsa-list',
            templateUrl: './dsa-list.component.html',
            styleUrls: ['./dsa-list.component.css']
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

    }
  }]);
})();
//# sourceMappingURL=users-merchants-merchants-module-es5.js.map