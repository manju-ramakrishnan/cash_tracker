"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/TotalProduct.jsx":
/*!*********************************************!*\
  !*** ./src/app/components/TotalProduct.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TotalProduct: function() { return /* binding */ TotalProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst TotalProduct = (param)=>{\n    let { filteredProducts } = param;\n    _s();\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const calculateTotalPrice = ()=>{\n        return filteredProducts.reduce((total, product)=>total + product.price, 0);\n    };\n    const handleShowTotal = ()=>{\n        setIsModalOpen(true);\n    };\n    const handleCloseModal = ()=>{\n        setIsModalOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"z-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleShowTotal,\n                className: \"bg-green-500 text-white p-2 rounded\",\n                children: \"Show Total Price\"\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\TotalProduct.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            isModalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white p-6 rounded shadow-lg w-1/3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-xl font-bold mb-4\",\n                            children: \"Total Price\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\TotalProduct.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-4\",\n                            children: [\n                                \"Total Price: $\",\n                                calculateTotalPrice().toFixed(2)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\TotalProduct.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleCloseModal,\n                            className: \"bg-red-500 text-white p-2 rounded\",\n                            children: \"Close\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\TotalProduct.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\TotalProduct.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\TotalProduct.jsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\TotalProduct.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TotalProduct, \"mLsII5HRP5G63IA/8vjZ5YHXWr8=\");\n_c = TotalProduct;\nvar _c;\n$RefreshReg$(_c, \"TotalProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ub3RhbFByb2R1Y3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQUVqQyxNQUFNRSxlQUFlO1FBQUMsRUFBRUMsZ0JBQWdCLEVBQUU7O0lBQy9DLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNSyxzQkFBc0I7UUFDMUIsT0FBT0gsaUJBQWlCSSxNQUFNLENBQUMsQ0FBQ0MsT0FBT0MsVUFBWUQsUUFBUUMsUUFBUUMsS0FBSyxFQUFFO0lBQzVFO0lBRUEsTUFBTUMsa0JBQWtCO1FBQ3RCTixlQUFlO0lBQ2pCO0lBRUEsTUFBTU8sbUJBQW1CO1FBQ3ZCUCxlQUFlO0lBQ2pCO0lBRUEscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFDQ0MsU0FBU0w7Z0JBQ1RHLFdBQVU7MEJBQ1g7Ozs7OztZQUtBViw2QkFDQyw4REFBQ1M7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQUdILFdBQVU7c0NBQXlCOzs7Ozs7c0NBQ3ZDLDhEQUFDSTs0QkFBRUosV0FBVTs7Z0NBQU87Z0NBQWVSLHNCQUFzQmEsT0FBTyxDQUFDOzs7Ozs7O3NDQUNqRSw4REFBQ0o7NEJBQ0NDLFNBQVNKOzRCQUNURSxXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiLEVBQUU7R0F6Q1daO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ub3RhbFByb2R1Y3QuanN4PzQwNzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvdGFsUHJvZHVjdCA9ICh7IGZpbHRlcmVkUHJvZHVjdHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gIGNvbnN0IGNhbGN1bGF0ZVRvdGFsUHJpY2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmlsdGVyZWRQcm9kdWN0cy5yZWR1Y2UoKHRvdGFsLCBwcm9kdWN0KSA9PiB0b3RhbCArIHByb2R1Y3QucHJpY2UsIDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dUb3RhbCA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSd6LTEwJz5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNob3dUb3RhbH1cclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZFwiXHJcbiAgICAgID5cclxuICAgICAgICBTaG93IFRvdGFsIFByaWNlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgey8qIE1vZGFsICovfVxyXG4gICAgICB7aXNNb2RhbE9wZW4gJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjayBiZy1vcGFjaXR5LTUwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNiByb3VuZGVkIHNoYWRvdy1sZyB3LTEvM1wiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItNFwiPlRvdGFsIFByaWNlPC9oMj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPlRvdGFsIFByaWNlOiAke2NhbGN1bGF0ZVRvdGFsUHJpY2UoKS50b0ZpeGVkKDIpfTwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRvdGFsUHJvZHVjdCIsImZpbHRlcmVkUHJvZHVjdHMiLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwiY2FsY3VsYXRlVG90YWxQcmljZSIsInJlZHVjZSIsInRvdGFsIiwicHJvZHVjdCIsInByaWNlIiwiaGFuZGxlU2hvd1RvdGFsIiwiaGFuZGxlQ2xvc2VNb2RhbCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMiIsInAiLCJ0b0ZpeGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TotalProduct.jsx\n"));

/***/ })

});