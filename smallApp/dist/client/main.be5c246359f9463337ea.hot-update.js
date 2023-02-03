webpackHotUpdate("main",{

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
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Content = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\nfunction Content(_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content }, IContentProps));\n}\nexports.Content = Content;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ })

})