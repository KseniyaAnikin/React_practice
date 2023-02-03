webpackHotUpdate("main",{

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\nvar SearchBlock_tsx_1 = __webpack_require__(/*! ./SearchBlock/SearchBlock.tsx */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\");\nvar SortBlock_tsx_1 = __webpack_require__(/*! ./SortBlock/SortBlock.tsx */ \"./src/shared/Header/SortBlock/SortBlock.tsx\");\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle/ */ \"./src/shared/Header/ThreadTitle/index.ts\");\nfunction Header() {\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\n        react_1.default.createElement(SearchBlock_tsx_1.SearchBlock, null),\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\n        react_1.default.createElement(SortBlock_tsx_1.SortBlock, null)));\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './ThreadTitle'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ })

})