webpackHotUpdate("main",{

/***/ "./src sync recursive":
false,

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\nvar Layout_tsx_1 = __webpack_require__(/*! ./shared/Layout/Layout.tsx */ \"./src/shared/Layout/Layout.tsx\");\nvar _1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module ''\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nfunction AppComponent() {\n    return (react_1.default.createElement(Layout_tsx_1.Layout, null,\n        react_1.default.createElement(_1.Header, null)));\n}\nexports.App = root_1.hot(AppComponent);\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar ReactDom = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\nvar App_tsx_1 = __webpack_require__(/*! ../App.tsx */ \"./src/App.tsx\");\nwindow.addEventListener(\"load\", function () {\n    ReactDom.hydrate(React.createElement(App_tsx_1.App, null), document.getElementById('react_root'));\n});\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ })

})