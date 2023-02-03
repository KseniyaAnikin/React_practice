webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\nvar Layout_tsx_1 = __webpack_require__(/*! ./shared/Layout/Layout.tsx */ \"./src/shared/Layout/Layout.tsx\");\nvar Header_tsx_1 = __webpack_require__(/*! ./shared/Header/Header.tsx */ \"./src/shared/Header/Header.tsx\");\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nfunction AppComponent() {\n    return (react_1.default.createElement(Layout_tsx_1.Layout, null,\n        react_1.default.createElement(Header_tsx_1.Header, null)));\n}\nexports.App = root_1.hot(AppComponent);\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\nvar SearchBlock_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './SearchBlock/SearchBlock'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\nfunction Header() {\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
false

})