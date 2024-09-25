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

/***/ "(app-pages-browser)/./src/app/components/EditProduct.jsx":
/*!********************************************!*\
  !*** ./src/app/components/EditProduct.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"(app-pages-browser)/./node_modules/react-router/dist/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction EditProduct() {\n    _s();\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { id } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();\n    const API_URL = \"http://localhost:8080/api/products\";\n    //Get the Product \n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(API_URL, \"/\").concat(id)).then((response)=>setProduct(response.data)).catch((error)=>setError(\"Error fetching product: \" + error.message));\n    }, [\n        id\n    ]);\n    //handle Change\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setProduct((prevProduct)=>({\n                ...prevProduct,\n                [name]: value\n            }));\n    };\n    //Cancel Button\n    const cancelSubmit = ()=>{\n        navigate(\"/\");\n    };\n    //Form Submission\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (product.price <= 0) {\n            setError(\"Price must be a positive number\");\n            return;\n        }\n        //Update the Product\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"\".concat(API_URL, \"/\").concat(id), product).then(()=>{\n            navigate(\"/\");\n        }).catch((error)=>setError(\"Error updating product: \" + error.message));\n    };\n    if (!product) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center text-lg font-semibold mt-5\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\EditProduct.jsx\",\n            lineNumber: 50,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto custom-width bg-white shadow-md rounded-lg p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-6 text-black\",\n                children: \"Edit Product\"\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\EditProduct.jsx\",\n                lineNumber: 55,\n                columnNumber: 5\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-red-500 mb-4\",\n                children: error\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\EditProduct.jsx\",\n                lineNumber: 56,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: \"Product Name\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\EditProduct.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                name: \"name\",\n                                value: product.name,\n                                onChange: handleChange,\n                                className: \"text-gray mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\EditProduct.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\EditProduct.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"category\",\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: \"Category\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\EditProduct.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"category\",\n                                name: \"category\",\n                                value: product.category,\n                                onChange: handleChange,\n                                className: \"mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\EditProduct.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\EditProduct.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"price\",\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: \"Price\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\EditProduct.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                id: \"price\",\n                                name: \"price\",\n                                value: product.price,\n                                onChange: handleChange,\n                                className: \"mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\EditProduct.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\EditProduct.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\",\n                            children: \"Update Product\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\EditProduct.jsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\EditProduct.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: cancelSubmit,\n                            className: \"w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500\",\n                            children: \"Cancel\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\EditProduct.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\EditProduct.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 8\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\EditProduct.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\EditProduct.jsx\",\n        lineNumber: 54,\n        columnNumber: 3\n    }, this);\n}\n_s(EditProduct, \"a1G/IdztE9I2KV+6VsBXknqYPMQ=\", false, function() {\n    return [\n        react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams,\n        react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate\n    ];\n});\n_c = EditProduct;\nvar _c;\n$RefreshReg$(_c, \"EditProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9FZGl0UHJvZHVjdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNEM7QUFDYztBQUNoQztBQUVYLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sRUFBRVUsRUFBRSxFQUFFLEdBQUdSLDJEQUFTQTtJQUN4QixNQUFNUyxXQUFXUiw2REFBV0E7SUFDNUIsTUFBTVMsVUFBVUMsb0NBQStCO0lBRS9DLGtCQUFrQjtJQUNsQlosZ0RBQVNBLENBQUM7UUFDUkcsNkNBQUtBLENBQUNZLEdBQUcsQ0FBQyxHQUFjTixPQUFYRSxTQUFRLEtBQU0sT0FBSEYsS0FDckJPLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWVgsV0FBV1csU0FBU0MsSUFBSSxHQUN6Q0MsS0FBSyxDQUFDWixDQUFBQSxRQUFTQyxTQUFTLDZCQUE2QkQsTUFBTWEsT0FBTztJQUN2RSxHQUFHO1FBQUNYO0tBQUc7SUFFUCxlQUFlO0lBQ2YsTUFBTVksZUFBZSxDQUFDQztRQUNwQixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdGLEVBQUVHLE1BQU07UUFDaENuQixXQUFXb0IsQ0FBQUEsY0FBZ0I7Z0JBQ3pCLEdBQUdBLFdBQVc7Z0JBQ2QsQ0FBQ0gsS0FBSyxFQUFFQztZQUNWO0lBQ0Y7SUFFQSxlQUFlO0lBQ2YsTUFBTUcsZUFBZTtRQUNuQmpCLFNBQVM7SUFDWDtJQUVBLGlCQUFpQjtJQUNqQixNQUFNa0IsZUFBZSxDQUFDTjtRQUNwQkEsRUFBRU8sY0FBYztRQUNoQixJQUFJeEIsUUFBUXlCLEtBQUssSUFBSSxHQUFHO1lBQ3RCdEIsU0FBUztZQUNUO1FBQ0Y7UUFDRCxvQkFBb0I7UUFDbkJMLDZDQUFLQSxDQUFDNEIsR0FBRyxDQUFDLEdBQWN0QixPQUFYRSxTQUFRLEtBQU0sT0FBSEYsS0FBTUosU0FDM0JXLElBQUksQ0FBQztZQUNKTixTQUFTO1FBQ1gsR0FDQ1MsS0FBSyxDQUFDWixDQUFBQSxRQUFTQyxTQUFTLDZCQUE2QkQsTUFBTWEsT0FBTztJQUN2RTtJQUVBLElBQUksQ0FBQ2YsU0FBUztRQUNaLHFCQUFPLDhEQUFDMkI7WUFBSUMsV0FBVTtzQkFBeUM7Ozs7OztJQUNqRTtJQUVBLHFCQUNBLDhEQUFDRDtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXFDOzs7Ozs7WUFDaEQxQix1QkFBUyw4REFBQzRCO2dCQUFFRixXQUFVOzBCQUFxQjFCOzs7Ozs7MEJBRTVDLDhEQUFDNkI7Z0JBQUtDLFVBQVVUO2dCQUFjSyxXQUFVOztrQ0FFdEMsOERBQUNEOzswQ0FDQyw4REFBQ007Z0NBQU1DLFNBQVE7Z0NBQU9OLFdBQVU7MENBQTBDOzs7Ozs7MENBQzFFLDhEQUFDTztnQ0FDQ0MsTUFBSztnQ0FDTGhDLElBQUc7Z0NBQ0hjLE1BQUs7Z0NBQ0xDLE9BQU9uQixRQUFRa0IsSUFBSTtnQ0FDbkJtQixVQUFVckI7Z0NBQ1ZZLFdBQVU7Z0NBQ1ZVLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FLWiw4REFBQ1g7OzBDQUNDLDhEQUFDTTtnQ0FBTUMsU0FBUTtnQ0FBV04sV0FBVTswQ0FBMEM7Ozs7OzswQ0FDOUUsOERBQUNPO2dDQUNDQyxNQUFLO2dDQUNMaEMsSUFBRztnQ0FDSGMsTUFBSztnQ0FDTEMsT0FBT25CLFFBQVF1QyxRQUFRO2dDQUN2QkYsVUFBVXJCO2dDQUNWWSxXQUFVO2dDQUNWVSxRQUFROzs7Ozs7Ozs7Ozs7a0NBS1osOERBQUNYOzswQ0FDQyw4REFBQ007Z0NBQU1DLFNBQVE7Z0NBQVFOLFdBQVU7MENBQTBDOzs7Ozs7MENBQzNFLDhEQUFDTztnQ0FDQ0MsTUFBSztnQ0FDTGhDLElBQUc7Z0NBQ0hjLE1BQUs7Z0NBQ0xDLE9BQU9uQixRQUFReUIsS0FBSztnQ0FDcEJZLFVBQVVyQjtnQ0FDVlksV0FBVTtnQ0FDVlUsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUtaLDhEQUFDWDtrQ0FDQyw0RUFBQ2E7NEJBQ0NKLE1BQUs7NEJBQ0xSLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7O2tDQU1KLDhEQUFDRDtrQ0FDQSw0RUFBQ2E7NEJBQ0NKLE1BQUs7NEJBQ0xLLFNBQVNuQjs0QkFDVE0sV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRVDtHQXZId0I3Qjs7UUFHUEgsdURBQVNBO1FBQ1BDLHlEQUFXQTs7O0tBSk5FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9FZGl0UHJvZHVjdC5qc3g/YzMxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdFByb2R1Y3QoKSB7XHJcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xyXG5cclxuICAvL0dldCB0aGUgUHJvZHVjdCBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSV9VUkx9LyR7aWR9YClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gc2V0UHJvZHVjdChyZXNwb25zZS5kYXRhKSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHNldEVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdDogXCIgKyBlcnJvci5tZXNzYWdlKSk7XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIC8vaGFuZGxlIENoYW5nZVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldFByb2R1Y3QocHJldlByb2R1Y3QgPT4gKHtcclxuICAgICAgLi4ucHJldlByb2R1Y3QsXHJcbiAgICAgIFtuYW1lXTogdmFsdWVcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICAvL0NhbmNlbCBCdXR0b25cclxuICBjb25zdCBjYW5jZWxTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG5cclxuICAvL0Zvcm0gU3VibWlzc2lvblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAocHJvZHVjdC5wcmljZSA8PSAwKSB7XHJcbiAgICAgIHNldEVycm9yKFwiUHJpY2UgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAvL1VwZGF0ZSB0aGUgUHJvZHVjdFxyXG4gICAgYXhpb3MucHV0KGAke0FQSV9VUkx9LyR7aWR9YCwgcHJvZHVjdClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBzZXRFcnJvcihcIkVycm9yIHVwZGF0aW5nIHByb2R1Y3Q6IFwiICsgZXJyb3IubWVzc2FnZSkpO1xyXG4gIH07XHJcblxyXG4gIGlmICghcHJvZHVjdCkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1sZyBmb250LXNlbWlib2xkIG10LTVcIj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gY3VzdG9tLXdpZHRoIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkLWxnIHAtOFwiPlxyXG4gICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi02IHRleHQtYmxhY2tcIj5FZGl0IFByb2R1Y3Q8L2gxPlxyXG4gICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIG1iLTRcIj57ZXJyb3J9PC9wPn1cclxuICAgICAgXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgIHsvKiBQcm9kdWN0IE5hbWUgKi99XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlByb2R1Y3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheSBtdC0xIGJsb2NrIHctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcC0yIHNoYWRvdy1zbSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgc206dGV4dC1zbVwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogUHJvZHVjdCBDYXRlZ29yeSAqL31cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYXRlZ29yeVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPkNhdGVnb3J5PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvZHVjdC5jYXRlZ29yeX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHAtMiBzaGFkb3ctc20gZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIHNtOnRleHQtc21cIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIFByb2R1Y3QgUHJpY2UgKi99XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGlkPVwicHJpY2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvZHVjdC5wcmljZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHAtMiBzaGFkb3ctc20gZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIHNtOnRleHQtc21cIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIFN1Ym1pdCBCdXR0b24gKi99XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1pbmRpZ28tNjAwIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQtbWQgaG92ZXI6YmctaW5kaWdvLTcwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBVcGRhdGUgUHJvZHVjdFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKkNhbmNlbCBCdXR0b24gKi99XHJcbiAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgb25DbGljaz17Y2FuY2VsU3VibWl0fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXJlZC02MDAgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZC1tZCBob3ZlcjpiZy1yZWQtNzAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctcmVkLTUwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VQYXJhbXMiLCJ1c2VOYXZpZ2F0ZSIsImF4aW9zIiwiRWRpdFByb2R1Y3QiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsImVycm9yIiwic2V0RXJyb3IiLCJpZCIsIm5hdmlnYXRlIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwibWVzc2FnZSIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2UHJvZHVjdCIsImNhbmNlbFN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicHJpY2UiLCJwdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiY2F0ZWdvcnkiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/EditProduct.jsx\n"));

/***/ })

});