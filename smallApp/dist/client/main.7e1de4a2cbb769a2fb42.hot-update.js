webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Content/content.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/Content/content.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".content__content--2O9-S {\\n  overflow: hidden;\\n}\\n\\n@media all and (min-width: 1024px) {\\n  .content__content--2O9-S {\\n    background-color: var(--white);\\n    border-radius: 7px 7px 0 0;\\n  }\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"content\": \"content__content--2O9-S\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\nvar Layout_tsx_1 = __webpack_require__(/*! ./shared/Layout/Layout.tsx */ \"./src/shared/Layout/Layout.tsx\");\nvar Header_tsx_1 = __webpack_require__(/*! ./shared/Header/Header.tsx */ \"./src/shared/Header/Header.tsx\");\nvar Content_tsx_1 = __webpack_require__(/*! ./shared/Content/Content.tsx */ \"./src/shared/Content/Content.tsx\");\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nfunction AppComponent() {\n    return (react_1.default.createElement(Layout_tsx_1.Layout, null,\n        react_1.default.createElement(Header_tsx_1.Header, null),\n        react_1.default.createElement(Content_tsx_1.Content, null)));\n}\nexports.App = root_1.hot(AppComponent);\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Content = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\nfunction Content(_a) {\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content }, \"content\"));\n}\nexports.Content = Content;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./content.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Content/content.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./content.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Content/content.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./content.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Content/content.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ })

})