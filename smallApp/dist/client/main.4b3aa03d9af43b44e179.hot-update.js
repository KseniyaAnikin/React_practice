webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".sortblock__sortBlock--141aZ {\\n  background-color: var(--white);\\n  padding: 11px 20px;\\n  border-radius: 7px;\\n  margin: 0 0 20px;\\n}\\n\\n@media all and (min-width: 1024px) {\\n  .sortblock__sortBlock--141aZ {\\n    background-color: transparent;\\n    padding: 0;\\n    margin: 0;\\n    border-radius: 0;\\n  }\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"sortBlock\": \"sortblock__sortBlock--141aZ\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\nvar SearchBlock_tsx_1 = __webpack_require__(/*! ./SearchBlock/SearchBlock.tsx */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\");\nvar SortBlock_tsx_1 = __webpack_require__(/*! ./SortBlock/SortBlock.tsx */ \"./src/shared/Header/SortBlock/SortBlock.tsx\");\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\nfunction Header() {\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\n        react_1.default.createElement(SearchBlock_tsx_1.SearchBlock, null),\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\n        react_1.default.createElement(SortBlock_tsx_1.SortBlock, null)));\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SortBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\nfunction SortBlock() {\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortBlock }, \"sorting dropdown\"));\n}\nexports.SortBlock = SortBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./sortblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SortBlock/sortblock.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./sortblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SortBlock/sortblock.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./sortblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/Header/SortBlock/sortblock.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?");

/***/ })

})