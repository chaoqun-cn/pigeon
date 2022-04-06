"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!********************************************************************!*\
  !*** E:/repos/HBuilderProjects/pigeon/main.js?{"type":"appStyle"} ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*********************************************************************************!*\
  !*** E:/repos/HBuilderProjects/pigeon/App.vue?vue&type=style&index=0&lang=scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/repos/HBuilderProjects/pigeon/App.vue?vue&type=style&index=0&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".u-line-1": {
    "": {
      "lines": [
        1,
        0,
        0,
        18
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        18
      ],
      "overflow": [
        "hidden",
        0,
        0,
        18
      ],
      "flex": [
        1,
        0,
        0,
        18
      ]
    }
  },
  ".u-line-2": {
    "": {
      "lines": [
        2,
        0,
        0,
        19
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        19
      ],
      "overflow": [
        "hidden",
        0,
        0,
        19
      ],
      "flex": [
        1,
        0,
        0,
        19
      ]
    }
  },
  ".u-line-3": {
    "": {
      "lines": [
        3,
        0,
        0,
        20
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        20
      ],
      "overflow": [
        "hidden",
        0,
        0,
        20
      ],
      "flex": [
        1,
        0,
        0,
        20
      ]
    }
  },
  ".u-line-4": {
    "": {
      "lines": [
        4,
        0,
        0,
        21
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        21
      ],
      "overflow": [
        "hidden",
        0,
        0,
        21
      ],
      "flex": [
        1,
        0,
        0,
        21
      ]
    }
  },
  ".u-line-5": {
    "": {
      "lines": [
        5,
        0,
        0,
        22
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        22
      ],
      "overflow": [
        "hidden",
        0,
        0,
        22
      ],
      "flex": [
        1,
        0,
        0,
        22
      ]
    }
  },
  ".u-border": {
    "": {
      "borderWidth": [
        "0.5",
        1,
        0,
        23
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        23
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        23
      ]
    }
  },
  ".u-border-top": {
    "": {
      "borderTopWidth": [
        "0.5",
        1,
        0,
        24
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        24
      ],
      "borderTopStyle": [
        "solid",
        0,
        0,
        24
      ]
    }
  },
  ".u-border-left": {
    "": {
      "borderLeftWidth": [
        "0.5",
        1,
        0,
        25
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        25
      ],
      "borderLeftStyle": [
        "solid",
        0,
        0,
        25
      ]
    }
  },
  ".u-border-right": {
    "": {
      "borderRightWidth": [
        "0.5",
        1,
        0,
        26
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        26
      ],
      "borderRightStyle": [
        "solid",
        0,
        0,
        26
      ]
    }
  },
  ".u-border-bottom": {
    "": {
      "borderBottomWidth": [
        "0.5",
        1,
        0,
        27
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        27
      ],
      "borderBottomStyle": [
        "solid",
        0,
        0,
        27
      ]
    }
  },
  ".u-border-top-bottom": {
    "": {
      "borderTopWidth": [
        "0.5",
        1,
        0,
        28
      ],
      "borderBottomWidth": [
        "0.5",
        1,
        0,
        28
      ],
      "borderColor": [
        "#dadbde",
        1,
        0,
        28
      ],
      "borderTopStyle": [
        "solid",
        0,
        0,
        28
      ],
      "borderBottomStyle": [
        "solid",
        0,
        0,
        28
      ]
    }
  },
  ".u-reset-button": {
    "": {
      "paddingTop": [
        0,
        0,
        0,
        29
      ],
      "paddingRight": [
        0,
        0,
        0,
        29
      ],
      "paddingBottom": [
        0,
        0,
        0,
        29
      ],
      "paddingLeft": [
        0,
        0,
        0,
        29
      ],
      "backgroundColor": [
        "rgba(0,0,0,0)",
        0,
        0,
        29
      ],
      "borderWidth": [
        0,
        0,
        0,
        29
      ]
    }
  },
  ".u-hover-class": {
    "": {
      "opacity": [
        0.7,
        0,
        0,
        30
      ]
    }
  },
  ".u-primary-light": {
    "": {
      "color": [
        "#ecf5ff",
        0,
        0,
        31
      ]
    }
  },
  ".u-warning-light": {
    "": {
      "color": [
        "#fdf6ec",
        0,
        0,
        32
      ]
    }
  },
  ".u-success-light": {
    "": {
      "color": [
        "#f5fff0",
        0,
        0,
        33
      ]
    }
  },
  ".u-error-light": {
    "": {
      "color": [
        "#fef0f0",
        0,
        0,
        34
      ]
    }
  },
  ".u-info-light": {
    "": {
      "color": [
        "#f4f4f5",
        0,
        0,
        35
      ]
    }
  },
  ".u-primary-light-bg": {
    "": {
      "backgroundColor": [
        "#ecf5ff",
        0,
        0,
        36
      ]
    }
  },
  ".u-warning-light-bg": {
    "": {
      "backgroundColor": [
        "#fdf6ec",
        0,
        0,
        37
      ]
    }
  },
  ".u-success-light-bg": {
    "": {
      "backgroundColor": [
        "#f5fff0",
        0,
        0,
        38
      ]
    }
  },
  ".u-error-light-bg": {
    "": {
      "backgroundColor": [
        "#fef0f0",
        0,
        0,
        39
      ]
    }
  },
  ".u-info-light-bg": {
    "": {
      "backgroundColor": [
        "#f4f4f5",
        0,
        0,
        40
      ]
    }
  },
  ".u-primary-dark": {
    "": {
      "color": [
        "#398ade",
        0,
        0,
        41
      ]
    }
  },
  ".u-warning-dark": {
    "": {
      "color": [
        "#f1a532",
        0,
        0,
        42
      ]
    }
  },
  ".u-success-dark": {
    "": {
      "color": [
        "#53c21d",
        0,
        0,
        43
      ]
    }
  },
  ".u-error-dark": {
    "": {
      "color": [
        "#e45656",
        0,
        0,
        44
      ]
    }
  },
  ".u-info-dark": {
    "": {
      "color": [
        "#767a82",
        0,
        0,
        45
      ]
    }
  },
  ".u-primary-dark-bg": {
    "": {
      "backgroundColor": [
        "#398ade",
        0,
        0,
        46
      ]
    }
  },
  ".u-warning-dark-bg": {
    "": {
      "backgroundColor": [
        "#f1a532",
        0,
        0,
        47
      ]
    }
  },
  ".u-success-dark-bg": {
    "": {
      "backgroundColor": [
        "#53c21d",
        0,
        0,
        48
      ]
    }
  },
  ".u-error-dark-bg": {
    "": {
      "backgroundColor": [
        "#e45656",
        0,
        0,
        49
      ]
    }
  },
  ".u-info-dark-bg": {
    "": {
      "backgroundColor": [
        "#767a82",
        0,
        0,
        50
      ]
    }
  },
  ".u-primary-disabled": {
    "": {
      "color": [
        "#9acafc",
        0,
        0,
        51
      ]
    }
  },
  ".u-warning-disabled": {
    "": {
      "color": [
        "#f9d39b",
        0,
        0,
        52
      ]
    }
  },
  ".u-success-disabled": {
    "": {
      "color": [
        "#a9e08f",
        0,
        0,
        53
      ]
    }
  },
  ".u-error-disabled": {
    "": {
      "color": [
        "#f7b2b2",
        0,
        0,
        54
      ]
    }
  },
  ".u-info-disabled": {
    "": {
      "color": [
        "#c4c6c9",
        0,
        0,
        55
      ]
    }
  },
  ".u-primary": {
    "": {
      "color": [
        "#3c9cff",
        0,
        0,
        56
      ]
    }
  },
  ".u-warning": {
    "": {
      "color": [
        "#f9ae3d",
        0,
        0,
        57
      ]
    }
  },
  ".u-success": {
    "": {
      "color": [
        "#5ac725",
        0,
        0,
        58
      ]
    }
  },
  ".u-error": {
    "": {
      "color": [
        "#f56c6c",
        0,
        0,
        59
      ]
    }
  },
  ".u-info": {
    "": {
      "color": [
        "#909399",
        0,
        0,
        60
      ]
    }
  },
  ".u-primary-bg": {
    "": {
      "backgroundColor": [
        "#3c9cff",
        0,
        0,
        61
      ]
    }
  },
  ".u-warning-bg": {
    "": {
      "backgroundColor": [
        "#f9ae3d",
        0,
        0,
        62
      ]
    }
  },
  ".u-success-bg": {
    "": {
      "backgroundColor": [
        "#5ac725",
        0,
        0,
        63
      ]
    }
  },
  ".u-error-bg": {
    "": {
      "backgroundColor": [
        "#f56c6c",
        0,
        0,
        64
      ]
    }
  },
  ".u-info-bg": {
    "": {
      "backgroundColor": [
        "#909399",
        0,
        0,
        65
      ]
    }
  },
  ".u-main-color": {
    "": {
      "color": [
        "#303133",
        0,
        0,
        66
      ]
    }
  },
  ".u-content-color": {
    "": {
      "color": [
        "#606266",
        0,
        0,
        67
      ]
    }
  },
  ".u-tips-color": {
    "": {
      "color": [
        "#909193",
        0,
        0,
        68
      ]
    }
  },
  ".u-light-color": {
    "": {
      "color": [
        "#c0c4cc",
        0,
        0,
        69
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 10 */
/*!**********************************************************************************************!*\
  !*** E:/repos/HBuilderProjects/pigeon/main.js?{"page":"pages%2Ftabbar%2Fhotspot%2Fhotspot"} ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_tabbar_hotspot_hotspot_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/tabbar/hotspot/hotspot.nvue?mpType=page */ 11);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_tabbar_hotspot_hotspot_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_tabbar_hotspot_hotspot_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/tabbar/hotspot/hotspot'\n        _pages_tabbar_hotspot_hotspot_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_tabbar_hotspot_hotspot_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQXlFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsc0ZBQUc7QUFDWCxRQUFRLHNGQUFHO0FBQ1gsUUFBUSxzRkFBRztBQUNYLGdCQUFnQixzRkFBRyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvdGFiYmFyL2hvdHNwb3QvaG90c3BvdC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL3RhYmJhci9ob3RzcG90L2hvdHNwb3QnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!**************************************************************************************!*\
  !*** E:/repos/HBuilderProjects/pigeon/pages/tabbar/hotspot/hotspot.nvue?mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hotspot_nvue_vue_type_template_id_728a9c37_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hotspot.nvue?vue&type=template&id=728a9c37&scoped=true&mpType=page */ 12);\n/* harmony import */ var _hotspot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hotspot.nvue?vue&type=script&lang=js&mpType=page */ 14);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hotspot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hotspot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 9);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./hotspot.nvue?vue&type=style&index=0&id=728a9c37&lang=scss&scoped=true&mpType=page */ 24).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./hotspot.nvue?vue&type=style&index=0&id=728a9c37&lang=scss&scoped=true&mpType=page */ 24).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _hotspot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _hotspot_nvue_vue_type_template_id_728a9c37_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _hotspot_nvue_vue_type_template_id_728a9c37_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"728a9c37\",\n  \"60d0342d\",\n  false,\n  _hotspot_nvue_vue_type_template_id_728a9c37_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/tabbar/hotspot/hotspot.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEk7QUFDNUk7QUFDdUU7QUFDTDtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDZGQUFxRjtBQUN6SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNkZBQXFGO0FBQzlJOztBQUVBOztBQUVBO0FBQ2dNO0FBQ2hNLGdCQUFnQix3TUFBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSwwR0FBTTtBQUNSLEVBQUUsbUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaG90c3BvdC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcyOGE5YzM3JnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ob3RzcG90Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaG90c3BvdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9ob3RzcG90Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MjhhOWMzNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vaG90c3BvdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzI4YTljMzcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxEZXZUb29sc1xcXFxIYnVpbGRlclgzLjMuMTNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjcyOGE5YzM3XCIsXG4gIFwiNjBkMDM0MmRcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdGFiYmFyL2hvdHNwb3QvaG90c3BvdC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!********************************************************************************************************************************!*\
  !*** E:/repos/HBuilderProjects/pigeon/pages/tabbar/hotspot/hotspot.nvue?vue&type=template&id=728a9c37&scoped=true&mpType=page ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hotspot_nvue_vue_type_template_id_728a9c37_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./hotspot.nvue?vue&type=template&id=728a9c37&scoped=true&mpType=page */ 13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hotspot_nvue_vue_type_template_id_728a9c37_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hotspot_nvue_vue_type_template_id_728a9c37_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hotspot_nvue_vue_type_template_id_728a9c37_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hotspot_nvue_vue_type_template_id_728a9c37_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 13 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/repos/HBuilderProjects/pigeon/pages/tabbar/hotspot/hotspot.nvue?vue&type=template&id=728a9c37&scoped=true&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: false,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        { staticClass: ["content"] },
        [
          _c(
            "swiper",
            {
              staticClass: ["video-swiper"],
              attrs: { current: _vm.current, circular: true, vertical: true },
              on: {
                touchstart: _vm.onTouchStart,
                touchend: _vm.onTouchEnd,
                change: _vm.onChange
              }
            },
            _vm._l(_vm.swiperList, function(item, index) {
              return _c(
                "swiper-item",
                { key: index, staticClass: ["video-swiper-item"] },
                [
                  _c("vbox", {
                    ref: "vbox",
                    refInFor: true,
                    attrs: { video: item },
                    on: { finish: _vm.onFinish }
                  })
                ],
                1
              )
            }),
            1
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 14 */
/*!**************************************************************************************************************!*\
  !*** E:/repos/HBuilderProjects/pigeon/pages/tabbar/hotspot/hotspot.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hotspot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./hotspot.nvue?vue&type=script&lang=js&mpType=page */ 15);\n/* harmony import */ var _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hotspot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hotspot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hotspot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hotspot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hotspot_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtnQixDQUFnQix3aUJBQUcsRUFBQyIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcRGV2VG9vbHNcXFxcSGJ1aWxkZXJYMy4zLjEzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXERldlRvb2xzXFxcXEhidWlsZGVyWDMuMy4xM1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXERldlRvb2xzXFxcXEhidWlsZGVyWDMuMy4xM1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ob3RzcG90Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxEZXZUb29sc1xcXFxIYnVpbGRlclgzLjMuMTNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRDpcXFxcRGV2VG9vbHNcXFxcSGJ1aWxkZXJYMy4zLjEzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcRGV2VG9vbHNcXFxcSGJ1aWxkZXJYMy4zLjEzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hvdHNwb3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/repos/HBuilderProjects/pigeon/pages/tabbar/hotspot/hotspot.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _vbox = _interopRequireDefault(__webpack_require__(/*! ./vbox/vbox */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}\n\nvar THREE = 3;var _default =\n\n{\n  components: {\n    vbox: _vbox.default },\n\n  data: function data() {\n    return {\n      playingIndex: 0,\n      playOffset: 0,\n      current: 1,\n\n      startY: 0,\n      endY: 0,\n      videoList: [\n      {\n        id: 1,\n        src: 'http://vfx.mtime.cn/Video/2019/03/17/mp4/190317150237409904.mp4' },\n\n\n      {\n        id: 2,\n        src: 'http://vfx.mtime.cn/Video/2019/03/18/mp4/190318214226685784.mp4' },\n\n      {\n        id: 3,\n        src: 'http://vfx.mtime.cn/Video/2019/03/18/mp4/190318231014076505.mp4' },\n\n      {\n        id: 4,\n        src: 'http://vfx.mtime.cn/Video/2019/03/19/mp4/190319212559089721.mp4' },\n\n      {\n        id: 5,\n        src: 'http://vfx.mtime.cn/Video/2019/03/19/mp4/190319222227698228.mp4' },\n\n      {\n        id: 6,\n        src: 'http://vfx.mtime.cn/Video/2019/03/21/mp4/190321153853126488.mp4' },\n\n      {\n        id: 7,\n        src: 'http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4' },\n\n      {\n        id: 8,\n        src: 'http://vfx.mtime.cn/Video/2019/03/12/mp4/190312083533415853.mp4' }],\n\n\n\n      swiperList: [] };\n\n  },\n  watch: {\n    videoList: {\n      handler: function handler(list) {\n        var len = list.length;\n        if (len >= THREE) {\n          if (this.playingIndex === 0) {\n            this.swiperList.push(list[len - 1], list[0], list[1]);\n          } else if (this.playingIndex === list.length - 1) {\n            this.swiperList.push(list[len - 2], list[len - 1], list[0]);\n          } else {var _this$swiperList;\n            (_this$swiperList = this.swiperList).push.apply(_this$swiperList, _toConsumableArray(list.slice(this.playingIndex - 1, this.playingIndex + THREE)));\n          }\n        } else {var _this$swiperList2;\n          (_this$swiperList2 = this.swiperList).push.apply(_this$swiperList2, _toConsumableArray(list));\n        }\n      },\n      immediate: true } },\n\n\n  mounted: function mounted() {var _this = this;\n    __f__(\"log\", 'mounted', \" at pages/tabbar/hotspot/hotspot.nvue:97\");\n    this.$nextTick(function () {\n      _this.$refs.vbox[_this.current].playback();\n    });\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'onShow', \" at pages/tabbar/hotspot/hotspot.nvue:103\");\n    if (this.$refs.vbox) {\n      this.$refs.vbox[this.current].play();\n    }\n    plus.navigator.setStatusBarStyle('light');\n    uni.setTabBarStyle({\n      color: '#FFFFFF',\n      selectedColor: '#3c9cff',\n      backgroundColor: '#000000',\n      borderStyle: 'black' });\n\n  },\n\n  onHide: function onHide() {\n    __f__(\"log\", 'onHide', \" at pages/tabbar/hotspot/hotspot.nvue:117\");\n    this.$refs.vbox[this.current].pause();\n    uni.setTabBarStyle({\n      color: '#2c2c2c',\n      selectedColor: '#3c9cff',\n      backgroundColor: '#fbfbfb',\n      borderStyle: 'white' });\n\n  },\n  methods: {\n    onChange: function onChange(e) {var _this2 = this;var _e$detail =\n      e.detail,source = _e$detail.source,current = _e$detail.current;\n      __f__(\"log\", 'onChange', source, this.playingIndex, current, \" at pages/tabbar/hotspot/hotspot.nvue:129\");\n      if (this.playingIndex == this.videoList.length) {\n        this.playingIndex = 0;\n      }\n      if (this.playingIndex == -1) {\n        this.playingIndex = this.videoList.length - 1;\n      }\n      this.$nextTick(function () {\n        _this2.current = current;\n        if (source === 'touch') {\n          // touch 用户划动引起swiper变化\n          if (_this2.endY < _this2.startY) {\n            // swipeup\n            _this2.playingIndex++;\n            _this2.swiperList.splice(\n            (current + 1) % THREE,\n            1,\n            _this2.videoList[(_this2.playingIndex + 1) % _this2.videoList.length]);\n\n          } else {\n            // swipedown\n            _this2.playingIndex--;\n            _this2.swiperList.splice(\n            (current - 1 + THREE) % THREE,\n            1,\n            _this2.videoList[(_this2.playingIndex - 1 + _this2.videoList.length) % _this2.videoList.length]);\n\n          }\n        } else {\n\n\n        } // 直接改变current属性导致的change事件\n        // pass(见onFinish方法)\n        // this.playOrPause()\n        _this2.startY = 0;_this2.endY = 0;\n      });\n    },\n    // playOrPause() {\n    // \tconst videoinPlaying = this.swiperList[this.playingIndex]\n    // \tthis.$refs.vbox.forEach(vbox => {\n    // \t\tvbox.video.id === videoinPlaying.id ? vbox.play() : vbox.pause()\n    // \t})\n    // },\n    onTouchStart: function onTouchStart(e) {\n      this.startY = e.changedTouches[0].screenY;\n    },\n    onTouchEnd: function onTouchEnd(e) {\n      this.endY = e.changedTouches[0].screenY;\n    },\n\n    onFinish: function onFinish() {\n      // console.log('onFinish')\n      // this.playingIndex++\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 16)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGFiYmFyL2hvdHNwb3QvaG90c3BvdC5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSwrRTs7QUFFQSxjOztBQUVBO0FBQ0E7QUFDQSx1QkFEQSxFQURBOztBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBLHFCQURBO0FBRUEsbUJBRkE7QUFHQSxnQkFIQTs7QUFLQSxlQUxBO0FBTUEsYUFOQTtBQU9BO0FBQ0E7QUFDQSxhQURBO0FBRUEsOEVBRkEsRUFEQTs7O0FBTUE7QUFDQSxhQURBO0FBRUEsOEVBRkEsRUFOQTs7QUFVQTtBQUNBLGFBREE7QUFFQSw4RUFGQSxFQVZBOztBQWNBO0FBQ0EsYUFEQTtBQUVBLDhFQUZBLEVBZEE7O0FBa0JBO0FBQ0EsYUFEQTtBQUVBLDhFQUZBLEVBbEJBOztBQXNCQTtBQUNBLGFBREE7QUFFQSw4RUFGQSxFQXRCQTs7QUEwQkE7QUFDQSxhQURBO0FBRUEsOEVBRkEsRUExQkE7O0FBOEJBO0FBQ0EsYUFEQTtBQUVBLDhFQUZBLEVBOUJBLENBUEE7Ozs7QUEyQ0Esb0JBM0NBOztBQTZDQSxHQWxEQTtBQW1EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLFNBUkEsTUFRQTtBQUNBO0FBQ0E7QUFDQSxPQWRBO0FBZUEscUJBZkEsRUFEQSxFQW5EQTs7O0FBc0VBLFNBdEVBLHFCQXNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQSxHQTNFQTtBQTRFQSxRQTVFQSxvQkE0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLDhCQUZBO0FBR0EsZ0NBSEE7QUFJQSwwQkFKQTs7QUFNQSxHQXhGQTs7QUEwRkEsUUExRkEsb0JBMEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSw4QkFGQTtBQUdBLGdDQUhBO0FBSUEsMEJBSkE7O0FBTUEsR0FuR0E7QUFvR0E7QUFDQSxZQURBLG9CQUNBLENBREEsRUFDQTtBQUNBLGNBREEsQ0FDQSxNQURBLGFBQ0EsTUFEQSxDQUNBLE9BREEsYUFDQSxPQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSxhQUZBO0FBR0EsaUZBSEE7O0FBS0EsV0FSQSxNQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBREE7QUFFQSxhQUZBO0FBR0EsMkdBSEE7O0FBS0E7QUFDQSxTQW5CQSxNQW1CQTs7O0FBR0EsU0F0QkEsQ0FvQkE7QUFDQTtBQUVBO0FBQ0EsMEJBQ0E7QUFDQSxPQTVCQTtBQTZCQSxLQXZDQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkE5Q0Esd0JBOENBLENBOUNBLEVBOENBO0FBQ0E7QUFDQSxLQWhEQTtBQWlEQSxjQWpEQSxzQkFpREEsQ0FqREEsRUFpREE7QUFDQTtBQUNBLEtBbkRBOztBQXFEQSxZQXJEQSxzQkFxREE7QUFDQTtBQUNBO0FBQ0EsS0F4REEsRUFwR0EsRSIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0PHN3aXBlclxyXG5cdFx0XHRAdG91Y2hzdGFydD1cIm9uVG91Y2hTdGFydFwiXHJcblx0XHRcdEB0b3VjaGVuZD1cIm9uVG91Y2hFbmRcIlxyXG5cdFx0XHRAY2hhbmdlPVwib25DaGFuZ2VcIlxyXG5cdFx0XHRjbGFzcz1cInZpZGVvLXN3aXBlclwiIFxyXG5cdFx0XHQ6Y3VycmVudD1cImN1cnJlbnRcIlxyXG5cdFx0XHRjaXJjdWxhclxyXG5cdFx0XHR2ZXJ0aWNhbD5cclxuXHRcdFx0PHN3aXBlci1pdGVtIFxyXG5cdFx0XHRcdHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBzd2lwZXJMaXN0XCIgOmtleT1cImluZGV4XCJcclxuXHRcdFx0XHRjbGFzcz1cInZpZGVvLXN3aXBlci1pdGVtXCI+XHJcblx0XHRcdFx0PHZib3ggcmVmPVwidmJveFwiIDp2aWRlbz1cIml0ZW1cIlxyXG5cdFx0XHRcdFx0QGZpbmlzaD1cIm9uRmluaXNoXCI+PC92Ym94PlxyXG5cdFx0XHQ8L3N3aXBlci1pdGVtPlxyXG5cdFx0PC9zd2lwZXI+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHZib3ggZnJvbSAnLi92Ym94L3Zib3gnXHJcblx0XHJcblx0Y29uc3QgVEhSRUUgPSAzXHJcblx0XG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0dmJveFxyXG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRwbGF5aW5nSW5kZXg6IDAsIFxyXG5cdFx0XHRcdHBsYXlPZmZzZXQ6IDAsXHJcblx0XHRcdFx0Y3VycmVudDogMSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzdGFydFk6IDAsXHJcblx0XHRcdFx0ZW5kWTogMCxcblx0XHRcdFx0dmlkZW9MaXN0OiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdFx0XHRzcmM6ICdodHRwOi8vdmZ4Lm10aW1lLmNuL1ZpZGVvLzIwMTkvMDMvMTcvbXA0LzE5MDMxNzE1MDIzNzQwOTkwNC5tcDQnXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWQ6IDIsXHJcblx0XHRcdFx0XHRcdHNyYzogJ2h0dHA6Ly92ZngubXRpbWUuY24vVmlkZW8vMjAxOS8wMy8xOC9tcDQvMTkwMzE4MjE0MjI2Njg1Nzg0Lm1wNCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlkOiAzLFxyXG5cdFx0XHRcdFx0XHRzcmM6ICdodHRwOi8vdmZ4Lm10aW1lLmNuL1ZpZGVvLzIwMTkvMDMvMTgvbXA0LzE5MDMxODIzMTAxNDA3NjUwNS5tcDQnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZDogNCxcclxuXHRcdFx0XHRcdFx0c3JjOiAnaHR0cDovL3ZmeC5tdGltZS5jbi9WaWRlby8yMDE5LzAzLzE5L21wNC8xOTAzMTkyMTI1NTkwODk3MjEubXA0J1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWQ6IDUsXHJcblx0XHRcdFx0XHRcdHNyYzogJ2h0dHA6Ly92ZngubXRpbWUuY24vVmlkZW8vMjAxOS8wMy8xOS9tcDQvMTkwMzE5MjIyMjI3Njk4MjI4Lm1wNCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlkOiA2LFxyXG5cdFx0XHRcdFx0XHRzcmM6ICdodHRwOi8vdmZ4Lm10aW1lLmNuL1ZpZGVvLzIwMTkvMDMvMjEvbXA0LzE5MDMyMTE1Mzg1MzEyNjQ4OC5tcDQnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZDogNyxcclxuXHRcdFx0XHRcdFx0c3JjOiAnaHR0cDovL3ZmeC5tdGltZS5jbi9WaWRlby8yMDE5LzAyLzA0L21wNC8xOTAyMDQwODQyMDg3NjUxNjEubXA0J1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWQ6IDgsXHJcblx0XHRcdFx0XHRcdHNyYzogJ2h0dHA6Ly92ZngubXRpbWUuY24vVmlkZW8vMjAxOS8wMy8xMi9tcDQvMTkwMzEyMDgzNTMzNDE1ODUzLm1wNCdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFxuXHRcdFx0XHJcblx0XHRcdFx0c3dpcGVyTGlzdDogW10sXHJcblx0XHRcdH1cblx0XHR9LFxyXG5cdFx0d2F0Y2g6IHtcclxuXHRcdFx0dmlkZW9MaXN0OiB7XHJcblx0XHRcdFx0aGFuZGxlcjogZnVuY3Rpb24obGlzdCkge1xyXG5cdFx0XHRcdFx0Y29uc3QgbGVuID0gbGlzdC5sZW5ndGhcclxuXHRcdFx0XHRcdGlmIChsZW4gPj0gVEhSRUUpIHtcclxuXHRcdFx0XHRcdFx0aWYodGhpcy5wbGF5aW5nSW5kZXggPT09IDApIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnN3aXBlckxpc3QucHVzaChsaXN0W2xlbiAtIDFdLCBsaXN0WzBdLCBsaXN0WzFdKVxyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMucGxheWluZ0luZGV4ID09PSBsaXN0Lmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnN3aXBlckxpc3QucHVzaChsaXN0W2xlbiAtIDJdLCBsaXN0W2xlbiAtIDFdLCBsaXN0WzBdKVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3dpcGVyTGlzdC5wdXNoKC4uLmxpc3Quc2xpY2UodGhpcy5wbGF5aW5nSW5kZXggLSAxLCB0aGlzLnBsYXlpbmdJbmRleCArIFRIUkVFKSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3dpcGVyTGlzdC5wdXNoKC4uLmxpc3QpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRpbW1lZGlhdGU6IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdtb3VudGVkJylcclxuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT57XHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLiRyZWZzLnZib3hbdGhpcy5jdXJyZW50XS5wbGF5YmFjaygpXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0b25TaG93KCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnb25TaG93JylcclxuXHRcdFx0aWYodGhpcy4kcmVmcy52Ym94KSB7XHJcblx0XHRcdFx0dGhpcy4kcmVmcy52Ym94W3RoaXMuY3VycmVudF0ucGxheSgpXHJcblx0XHRcdH1cclxuXHRcdFx0cGx1cy5uYXZpZ2F0b3Iuc2V0U3RhdHVzQmFyU3R5bGUoJ2xpZ2h0JylcclxuXHRcdFx0dW5pLnNldFRhYkJhclN0eWxlKHtcclxuXHRcdFx0XHRjb2xvcjogJyNGRkZGRkYnLFxyXG5cdFx0XHRcdHNlbGVjdGVkQ29sb3I6ICcjM2M5Y2ZmJyxcclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyxcdFx0XHRcdFxyXG5cdFx0XHRcdGJvcmRlclN0eWxlOiAnYmxhY2snXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRvbkhpZGUoKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdvbkhpZGUnKVxyXG5cdFx0XHR0aGlzLiRyZWZzLnZib3hbdGhpcy5jdXJyZW50XS5wYXVzZSgpXHJcblx0XHRcdHVuaS5zZXRUYWJCYXJTdHlsZSh7XHJcblx0XHRcdFx0Y29sb3I6ICcjMmMyYzJjJyxcclxuXHRcdFx0XHRzZWxlY3RlZENvbG9yOiAnIzNjOWNmZicsXHJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI2ZiZmJmYicsXHRcdFx0XHRcclxuXHRcdFx0XHRib3JkZXJTdHlsZTogJ3doaXRlJ1xyXG5cdFx0XHR9KVxyXG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRvbkNoYW5nZShlKSB7XHJcblx0XHRcdFx0Y29uc3QgeyBzb3VyY2UgLCBjdXJyZW50IH0gPSBlLmRldGFpbFxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdvbkNoYW5nZScsIHNvdXJjZSwgdGhpcy5wbGF5aW5nSW5kZXgsIGN1cnJlbnQpIFxyXG5cdFx0XHRcdGlmKHRoaXMucGxheWluZ0luZGV4ID09IHRoaXMudmlkZW9MaXN0Lmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5aW5nSW5kZXggPSAwXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKHRoaXMucGxheWluZ0luZGV4ID09IC0xKSB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXlpbmdJbmRleCA9IHRoaXMudmlkZW9MaXN0Lmxlbmd0aCAtMVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnQgPSBjdXJyZW50XHJcblx0XHRcdFx0XHRpZihzb3VyY2UgPT09ICd0b3VjaCcpIHtcclxuXHRcdFx0XHRcdFx0Ly8gdG91Y2gg55So5oi35YiS5Yqo5byV6LW3c3dpcGVy5Y+Y5YyWXHJcblx0XHRcdFx0XHRcdGlmKHRoaXMuZW5kWSA8IHRoaXMuc3RhcnRZKSB7XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQvLyBzd2lwZXVwXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wbGF5aW5nSW5kZXgrK1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3dpcGVyTGlzdC5zcGxpY2UoXHJcblx0XHRcdFx0XHRcdFx0XHQoY3VycmVudCArIDEpICUgVEhSRUUsXHJcblx0XHRcdFx0XHRcdFx0XHQxLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy52aWRlb0xpc3RbKHRoaXMucGxheWluZ0luZGV4ICsgMSkgJSB0aGlzLnZpZGVvTGlzdC5sZW5ndGhdXHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHR9ZWxzZSB7XHRcclxuXHRcdFx0XHRcdFx0XHQvLyBzd2lwZWRvd25cclxuXHRcdFx0XHRcdFx0XHR0aGlzLnBsYXlpbmdJbmRleC0tXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zd2lwZXJMaXN0LnNwbGljZShcclxuXHRcdFx0XHRcdFx0XHRcdChjdXJyZW50IC0gMSArIFRIUkVFKSAlIFRIUkVFLFxyXG5cdFx0XHRcdFx0XHRcdFx0MSxcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMudmlkZW9MaXN0Wyh0aGlzLnBsYXlpbmdJbmRleCAtIDEgKyB0aGlzLnZpZGVvTGlzdC5sZW5ndGgpICUgdGhpcy52aWRlb0xpc3QubGVuZ3RoXVxyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fWVsc2Uge1xyXG5cdFx0XHRcdFx0XHQvLyDnm7TmjqXmlLnlj5hjdXJyZW505bGe5oCn5a+86Ie055qEY2hhbmdl5LqL5Lu2XHJcblx0XHRcdFx0XHRcdC8vIHBhc3Mo6KeBb25GaW5pc2jmlrnms5UpXHJcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly8gdGhpcy5wbGF5T3JQYXVzZSgpXHJcblx0XHRcdFx0XHR0aGlzLnN0YXJ0WSA9IDBcclxuXHRcdFx0XHRcdHRoaXMuZW5kWSA9IDBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyBwbGF5T3JQYXVzZSgpIHtcclxuXHRcdFx0Ly8gXHRjb25zdCB2aWRlb2luUGxheWluZyA9IHRoaXMuc3dpcGVyTGlzdFt0aGlzLnBsYXlpbmdJbmRleF1cclxuXHRcdFx0Ly8gXHR0aGlzLiRyZWZzLnZib3guZm9yRWFjaCh2Ym94ID0+IHtcclxuXHRcdFx0Ly8gXHRcdHZib3gudmlkZW8uaWQgPT09IHZpZGVvaW5QbGF5aW5nLmlkID8gdmJveC5wbGF5KCkgOiB2Ym94LnBhdXNlKClcclxuXHRcdFx0Ly8gXHR9KVxyXG5cdFx0XHQvLyB9LFxyXG5cdFx0XHRvblRvdWNoU3RhcnQoZSkge1xyXG5cdFx0XHRcdHRoaXMuc3RhcnRZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5ZXHJcblx0XHRcdH0sXHJcblx0XHRcdG9uVG91Y2hFbmQoZSkge1xyXG5cdFx0XHRcdHRoaXMuZW5kWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0b25GaW5pc2goKSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ29uRmluaXNoJylcclxuXHRcdFx0XHQvLyB0aGlzLnBsYXlpbmdJbmRleCsrXHJcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0LmNvbnRlbnQge1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGZsZXg6IDE7XHJcblxyXG5cdFx0LnZpZGVvLXN3aXBlciB7XHJcblx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdCYtaXRlbSB7XHRcdFx0XHJcblx0XHRcdFx0ZmxleDogMTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cblxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 17 */
/*!***************************************************************************!*\
  !*** E:/repos/HBuilderProjects/pigeon/pages/tabbar/hotspot/vbox/vbox.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vbox_vue_vue_type_template_id_114680d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vbox.vue?vue&type=template&id=114680d2&scoped=true& */ 18);\n/* harmony import */ var _vbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vbox.vue?vue&type=script&lang=js& */ 20);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 9);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./vbox.vue?vue&type=style&index=0&id=114680d2&lang=scss&scoped=true& */ 22).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./vbox.vue?vue&type=style&index=0&id=114680d2&lang=scss&scoped=true& */ 22).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _vbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _vbox_vue_vue_type_template_id_114680d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _vbox_vue_vue_type_template_id_114680d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"114680d2\",\n  \"5fee088e\",\n  false,\n  _vbox_vue_vue_type_template_id_114680d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/tabbar/hotspot/vbox/vbox.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDd0Q7QUFDTDtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDhFQUFzRTtBQUMxSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsOEVBQXNFO0FBQy9IOztBQUVBOztBQUVBO0FBQ2dNO0FBQ2hNLGdCQUFnQix3TUFBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdmJveC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTE0NjgwZDImc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92Ym94LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdmJveC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi92Ym94LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTExNDY4MGQyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdmJveC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMTQ2ODBkMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxEZXZUb29sc1xcXFxIYnVpbGRlclgzLjMuMTNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjExNDY4MGQyXCIsXG4gIFwiNWZlZTA4OGVcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdGFiYmFyL2hvdHNwb3QvdmJveC92Ym94LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!**********************************************************************************************************************!*\
  !*** E:/repos/HBuilderProjects/pigeon/pages/tabbar/hotspot/vbox/vbox.vue?vue&type=template&id=114680d2&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vbox_vue_vue_type_template_id_114680d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./vbox.vue?vue&type=template&id=114680d2&scoped=true& */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vbox_vue_vue_type_template_id_114680d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vbox_vue_vue_type_template_id_114680d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vbox_vue_vue_type_template_id_114680d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vbox_vue_vue_type_template_id_114680d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 19 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/repos/HBuilderProjects/pigeon/pages/tabbar/hotspot/vbox/vbox.vue?vue&type=template&id=114680d2&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["vbox"] },
    [
      _c("u-video", {
        staticClass: ["vbox-player"],
        attrs: { id: "player", src: _vm.video.src, controls: true },
        on: { click: _vm.onClick, ended: _vm.onEnded }
      }),
      _c("view", [
        _c(
          "u-text",
          {
            staticStyle: { color: "#fff" },
            appendAsTree: true,
            attrs: { append: "tree" }
          },
          [_vm._v(_vm._s(_vm.video.id))]
        )
      ])
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 20 */
/*!****************************************************************************************************!*\
  !*** E:/repos/HBuilderProjects/pigeon/pages/tabbar/hotspot/vbox/vbox.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./vbox.vue?vue&type=script&lang=js& */ 21);\n/* harmony import */ var _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1mLENBQWdCLHloQkFBRyxFQUFDIiwiZmlsZSI6IjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxEZXZUb29sc1xcXFxIYnVpbGRlclgzLjMuMTNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRDpcXFxcRGV2VG9vbHNcXFxcSGJ1aWxkZXJYMy4zLjEzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcRGV2VG9vbHNcXFxcSGJ1aWxkZXJYMy4zLjEzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Zib3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXERldlRvb2xzXFxcXEhidWlsZGVyWDMuMy4xM1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxEZXZUb29sc1xcXFxIYnVpbGRlclgzLjMuMTNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFEOlxcXFxEZXZUb29sc1xcXFxIYnVpbGRlclgzLjMuMTNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmJveC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/repos/HBuilderProjects/pigeon/pages/tabbar/hotspot/vbox/vbox.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: ['video'],\n  data: function data() {\n    return {\n      playing: false };\n\n  },\n  computed: {},\n\n\n  created: function created() {\n    __f__(\"log\", 'vbox created', \" at pages/tabbar/hotspot/vbox/vbox.vue:29\");\n  },\n  mounted: function mounted() {\n    this.ctx = uni.createVideoContext('player', this);\n  },\n  beforeDestroy: function beforeDestroy() {\n    this.pause();\n    __f__(\"log\", 'beforeDestroy', \" at pages/tabbar/hotspot/vbox/vbox.vue:36\");\n  },\n  methods: {\n    onClick: function onClick() {\n      if (this.playing) {\n        this.pause();\n      } else {\n        this.play();\n      }\n    },\n    play: function play() {\n      if (!this.playing) {\n        this.ctx.play();\n        this.playing = true;\n      }\n    },\n    pause: function pause() {\n      if (this.playing) {\n        this.ctx.pause();\n        this.playing = false;\n      }\n    },\n    playback: function playback() {\n      if (!this.playing) {\n        this.ctx.seek(0);\n        this.play();\n      }\n    },\n    onEnded: function onEnded() {\n      this.$emit('finish');\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 16)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGFiYmFyL2hvdHNwb3QvdmJveC92Ym94LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBLGtCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0Esb0JBREE7O0FBR0EsR0FOQTtBQU9BLGNBUEE7OztBQVVBLFNBVkEscUJBVUE7QUFDQTtBQUNBLEdBWkE7QUFhQSxTQWJBLHFCQWFBO0FBQ0E7QUFDQSxHQWZBO0FBZ0JBLGVBaEJBLDJCQWdCQTtBQUNBO0FBQ0E7QUFDQSxHQW5CQTtBQW9CQTtBQUNBLFdBREEscUJBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEtBUEE7QUFRQSxRQVJBLGtCQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWJBO0FBY0EsU0FkQSxtQkFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FuQkE7QUFvQkEsWUFwQkEsc0JBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXpCQTtBQTBCQSxXQTFCQSxxQkEwQkE7QUFDQTtBQUNBLEtBNUJBLEVBcEJBLEUiLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ2Ym94XCI+XHJcblx0XHQ8dmlkZW9cclxuXHRcdFx0aWQ9XCJwbGF5ZXJcIlxyXG5cdFx0XHRjbGFzcz1cInZib3gtcGxheWVyXCJcclxuXHRcdFx0OnNyYz1cInZpZGVvLnNyY1wiXHJcblx0XHRcdGNvbnRyb2xzXHJcblx0XHRcdEBjbGljaz1cIm9uQ2xpY2tcIlxyXG5cdFx0XHRAZW5kZWQ9XCJvbkVuZGVkXCJcclxuXHRcdC8+XHJcblx0XHQ8dmlldz5cclxuXHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogI2ZmZjtcIj57e3ZpZGVvLmlkfX08L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczogWyd2aWRlbyddLFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRwbGF5aW5nOiBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3Zib3ggY3JlYXRlZCcpXHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy5jdHggPSB1bmkuY3JlYXRlVmlkZW9Db250ZXh0KCdwbGF5ZXInLCB0aGlzKVxyXG5cdFx0fSxcclxuXHRcdGJlZm9yZURlc3Ryb3koKSB7XHJcblx0XHRcdHRoaXMucGF1c2UoKVxyXG5cdFx0XHRjb25zb2xlLmxvZygnYmVmb3JlRGVzdHJveScpXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRvbkNsaWNrKCkge1xyXG5cdFx0XHRcdGlmKHRoaXMucGxheWluZyl7XHJcblx0XHRcdFx0XHR0aGlzLnBhdXNlKClcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoaXMucGxheSgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwbGF5KCkge1xyXG5cdFx0XHRcdGlmKCF0aGlzLnBsYXlpbmcpe1xyXG5cdFx0XHRcdFx0dGhpcy5jdHgucGxheSgpXHJcblx0XHRcdFx0XHR0aGlzLnBsYXlpbmcgPSB0cnVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYXVzZSgpIHtcclxuXHRcdFx0XHRpZih0aGlzLnBsYXlpbmcpe1xyXG5cdFx0XHRcdFx0dGhpcy5jdHgucGF1c2UoKVxyXG5cdFx0XHRcdFx0dGhpcy5wbGF5aW5nID0gZmFsc2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHBsYXliYWNrKCkge1xyXG5cdFx0XHRcdGlmKCF0aGlzLnBsYXlpbmcpe1xyXG5cdFx0XHRcdFx0dGhpcy5jdHguc2VlaygwKVxyXG5cdFx0XHRcdFx0dGhpcy5wbGF5KClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uRW5kZWQoKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnZmluaXNoJylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0LnZib3gge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFxyXG5cdFx0Ji1wbGF5ZXIge1xyXG5cdFx0XHRmbGV4OiAxO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRcclxuXHRcdC5wZW5kYW50IHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcclxuXHRcdFx0Ji1ib3R0b20ge1xyXG5cdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!*************************************************************************************************************************************!*\
  !*** E:/repos/HBuilderProjects/pigeon/pages/tabbar/hotspot/vbox/vbox.vue?vue&type=style&index=0&id=114680d2&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vbox_vue_vue_type_style_index_0_id_114680d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./vbox.vue?vue&type=style&index=0&id=114680d2&lang=scss&scoped=true& */ 23);
/* harmony import */ var _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vbox_vue_vue_type_style_index_0_id_114680d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vbox_vue_vue_type_style_index_0_id_114680d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vbox_vue_vue_type_style_index_0_id_114680d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vbox_vue_vue_type_style_index_0_id_114680d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_vbox_vue_vue_type_style_index_0_id_114680d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/repos/HBuilderProjects/pigeon/pages/tabbar/hotspot/vbox/vbox.vue?vue&type=style&index=0&id=114680d2&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".vbox": {
    "": {
      "flex": [
        1,
        0,
        0,
        17
      ],
      "position": [
        "relative",
        0,
        0,
        17
      ]
    }
  },
  ".vbox-player": {
    "": {
      "flex": [
        1,
        0,
        0,
        18
      ]
    }
  },
  ".pendant": {
    ".vbox ": {
      "position": [
        "absolute",
        0,
        1,
        19
      ]
    }
  },
  ".pendant-bottom": {
    ".vbox ": {
      "left": [
        0,
        0,
        1,
        20
      ],
      "bottom": [
        0,
        0,
        1,
        20
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 24 */
/*!***********************************************************************************************************************************************!*\
  !*** E:/repos/HBuilderProjects/pigeon/pages/tabbar/hotspot/hotspot.nvue?vue&type=style&index=0&id=728a9c37&lang=scss&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hotspot_nvue_vue_type_style_index_0_id_728a9c37_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./hotspot.nvue?vue&type=style&index=0&id=728a9c37&lang=scss&scoped=true&mpType=page */ 25);
/* harmony import */ var _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hotspot_nvue_vue_type_style_index_0_id_728a9c37_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hotspot_nvue_vue_type_style_index_0_id_728a9c37_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hotspot_nvue_vue_type_style_index_0_id_728a9c37_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hotspot_nvue_vue_type_style_index_0_id_728a9c37_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_D_DevTools_HbuilderX3_3_13_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_hotspot_nvue_vue_type_style_index_0_id_728a9c37_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 25 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/repos/HBuilderProjects/pigeon/pages/tabbar/hotspot/hotspot.nvue?vue&type=style&index=0&id=728a9c37&lang=scss&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".content": {
    "": {
      "width": [
        "750rpx",
        0,
        0,
        17
      ],
      "flex": [
        1,
        0,
        0,
        17
      ]
    }
  },
  ".video-swiper": {
    ".content ": {
      "flex": [
        1,
        0,
        1,
        18
      ]
    }
  },
  ".video-swiper-item": {
    ".content ": {
      "flex": [
        1,
        0,
        1,
        19
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);