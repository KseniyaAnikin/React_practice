webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".searchblock__searchBlock--3aDPv {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 14px 20px;\\n  background-color: var(--white);\\n  border-radius: 0 0 7px 7px;\\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\\n  margin: 0 0 38px;\\n}\\n\\n@media all and (min-width: 1024px) {\\n  .searchblock__searchBlock--3aDPv {\\n    padding: 0;\\n    margin: 0 0 0 auto;\\n    background-color: transparent;\\n    border-radius: 0;\\n    box-shadow: none;\\n    order: 3;\\n  }\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"searchBlock\": \"searchblock__searchBlock--3aDPv\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock/SearchBlock. */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\");\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\nfunction Header() {\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SearchBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\nfunction SearchBlock() {\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock }, \"search block\"));\n}\nexports.SearchBlock = SearchBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./searchblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SearchBlock/searchblock.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./searchblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SearchBlock/searchblock.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./searchblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SearchBlock/searchblock.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ })

})