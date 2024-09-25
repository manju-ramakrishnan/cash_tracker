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

/***/ "(app-pages-browser)/./src/app/components/AddProduct.jsx":
/*!*******************************************!*\
  !*** ./src/app/components/AddProduct.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"(app-pages-browser)/./node_modules/react-router/dist/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction AddProduct() {\n    _s();\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        category: \"\",\n        price: \"\",\n        status: 1\n    });\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();\n    const API_URL = \"http://localhost:8080/api/products\";\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setProduct((prevProduct)=>({\n                ...prevProduct,\n                [name]: value\n            }));\n    };\n    //Cancel Button\n    const cancelSubmit = ()=>{\n        navigate(\"/\");\n    };\n    //Form Submission\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (!product.name || !product.category) {\n            setError(\"Name and category are required\");\n            return;\n        }\n        if (product.price <= 0) {\n            setError(\"Price must be a positive number\");\n            return;\n        }\n        //Add Products \n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"\".concat(API_URL), product).then(()=>{\n            navigate(\"/\");\n        }).catch((error)=>setError(\"Error adding product: \" + error.message));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-28 bg-white shadow-md rounded-lg p-15 md:w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-6 text-black\",\n                children: \"Add New Product\"\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                lineNumber: 48,\n                columnNumber: 5\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-red-500 mb-4\",\n                children: error\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                lineNumber: 49,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: \"Product Name\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                name: \"name\",\n                                value: product.name,\n                                onChange: handleChange,\n                                className: \"text-black mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"category\",\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: \"Category\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"category\",\n                                name: \"category\",\n                                value: product.category,\n                                onChange: handleChange,\n                                className: \" text-black mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"price\",\n                                className: \"block text-sm font-medium text-gray-700\",\n                                children: \"Price\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                id: \"price\",\n                                name: \"price\",\n                                value: product.price,\n                                onChange: handleChange,\n                                className: \"text-black mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\",\n                            children: \"Add Product\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: cancelSubmit,\n                            className: \"w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500\",\n                            children: \"Cancel\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                            lineNumber: 104,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\AddProduct.jsx\",\n        lineNumber: 47,\n        columnNumber: 3\n    }, this);\n}\n_s(AddProduct, \"B7q8x2bZnWPVUFZN0f9io72q2AQ=\", false, function() {\n    return [\n        react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate\n    ];\n});\n_c = AddProduct;\nvar _c;\n$RefreshReg$(_c, \"AddProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRQcm9kdWN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNpQztBQUNjO0FBQ3JCO0FBRVgsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztRQUFFTSxNQUFNO1FBQUlDLFVBQVU7UUFBSUMsT0FBTztRQUFJQyxRQUFRO0lBQUU7SUFDdEYsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1ZLFdBQVdYLDZEQUFXQTtJQUM1QixNQUFNWSxVQUFVQyxvQ0FBK0I7SUFHL0MsTUFBTUcsZUFBZSxDQUFDQztRQUNwQixNQUFNLEVBQUVaLElBQUksRUFBRWEsS0FBSyxFQUFFLEdBQUdELEVBQUVFLE1BQU07UUFDaENmLFdBQVdnQixDQUFBQSxjQUFnQjtnQkFDekIsR0FBR0EsV0FBVztnQkFDZCxDQUFDZixLQUFLLEVBQUVhO1lBQ1Y7SUFDRjtJQUVBLGVBQWU7SUFDZixNQUFNRyxlQUFlO1FBQ25CVixTQUFTO0lBQ1g7SUFFQSxpQkFBaUI7SUFDakIsTUFBTVcsZUFBZSxDQUFDTDtRQUNwQkEsRUFBRU0sY0FBYztRQUNoQixJQUFJLENBQUNwQixRQUFRRSxJQUFJLElBQUksQ0FBQ0YsUUFBUUcsUUFBUSxFQUFFO1lBQ3RDSSxTQUFTO1lBQ1Q7UUFDRjtRQUNBLElBQUlQLFFBQVFJLEtBQUssSUFBSSxHQUFHO1lBQ3RCRyxTQUFTO1lBQ1Q7UUFDRjtRQUVBLGVBQWU7UUFDZlQsNkNBQUtBLENBQUN1QixJQUFJLENBQUMsR0FBVyxPQUFSWixVQUFXVCxTQUN0QnNCLElBQUksQ0FBQztZQUNKZCxTQUFTO1FBQ1gsR0FDQ2UsS0FBSyxDQUFDakIsQ0FBQUEsUUFBU0MsU0FBUywyQkFBMkJELE1BQU1rQixPQUFPO0lBQ3JFO0lBRUEscUJBQ0EsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBcUM7Ozs7OztZQUNoRHBCLHVCQUFTLDhEQUFDc0I7Z0JBQUVGLFdBQVU7MEJBQXFCcEI7Ozs7OzswQkFFNUMsOERBQUN1QjtnQkFBS0MsVUFBVVg7Z0JBQWNPLFdBQVU7O2tDQUV0Qyw4REFBQ0Q7OzBDQUNDLDhEQUFDTTtnQ0FBTUMsU0FBUTtnQ0FBT04sV0FBVTswQ0FBMEM7Ozs7OzswQ0FDMUUsOERBQUNPO2dDQUNDQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIakMsTUFBSztnQ0FDTGEsT0FBT2YsUUFBUUUsSUFBSTtnQ0FDbkJrQyxVQUFVdkI7Z0NBQ1ZhLFdBQVU7Z0NBQ1ZXLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FLWiw4REFBQ1o7OzBDQUNDLDhEQUFDTTtnQ0FBTUMsU0FBUTtnQ0FBV04sV0FBVTswQ0FBMEM7Ozs7OzswQ0FDOUUsOERBQUNPO2dDQUNDQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIakMsTUFBSztnQ0FDTGEsT0FBT2YsUUFBUUcsUUFBUTtnQ0FDdkJpQyxVQUFVdkI7Z0NBQ1ZhLFdBQVU7Z0NBQ1ZXLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FLWiw4REFBQ1o7OzBDQUNDLDhEQUFDTTtnQ0FBTUMsU0FBUTtnQ0FBUU4sV0FBVTswQ0FBMEM7Ozs7OzswQ0FDM0UsOERBQUNPO2dDQUNDQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIakMsTUFBSztnQ0FDTGEsT0FBT2YsUUFBUUksS0FBSztnQ0FDcEJnQyxVQUFVdkI7Z0NBQ1ZhLFdBQVU7Z0NBQ1ZXLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FLWiw4REFBQ1o7a0NBQ0MsNEVBQUNhOzRCQUNDSixNQUFLOzRCQUNMUixXQUFVO3NDQUNYOzs7Ozs7Ozs7OztrQ0FJSCw4REFBQ0Q7a0NBQ0QsNEVBQUNhOzRCQUNDSixNQUFLOzRCQUFTSyxTQUFTckI7NEJBQ3ZCUSxXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9UO0dBNUd3QjNCOztRQUdMRix5REFBV0E7OztLQUhORSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQWRkUHJvZHVjdC5qc3g/NGZhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRQcm9kdWN0KCkge1xyXG4gIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKHsgbmFtZTogJycsIGNhdGVnb3J5OiAnJywgcHJpY2U6ICcnLCBzdGF0dXM6IDEgfSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgc2V0UHJvZHVjdChwcmV2UHJvZHVjdCA9PiAoe1xyXG4gICAgICAuLi5wcmV2UHJvZHVjdCxcclxuICAgICAgW25hbWVdOiB2YWx1ZVxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIC8vQ2FuY2VsIEJ1dHRvblxyXG4gIGNvbnN0IGNhbmNlbFN1Ym1pdCA9ICgpID0+IHtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcblxyXG4gIC8vRm9ybSBTdWJtaXNzaW9uXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghcHJvZHVjdC5uYW1lIHx8ICFwcm9kdWN0LmNhdGVnb3J5KSB7XHJcbiAgICAgIHNldEVycm9yKFwiTmFtZSBhbmQgY2F0ZWdvcnkgYXJlIHJlcXVpcmVkXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAocHJvZHVjdC5wcmljZSA8PSAwKSB7XHJcbiAgICAgIHNldEVycm9yKFwiUHJpY2UgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0FkZCBQcm9kdWN0cyBcclxuICAgIGF4aW9zLnBvc3QoYCR7QVBJX1VSTH1gLCBwcm9kdWN0KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHNldEVycm9yKFwiRXJyb3IgYWRkaW5nIHByb2R1Y3Q6IFwiICsgZXJyb3IubWVzc2FnZSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJ3LTI4IGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkLWxnIHAtMTUgbWQ6dy1mdWxsXCI+XHJcbiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTYgdGV4dC1ibGFja1wiPkFkZCBOZXcgUHJvZHVjdDwvaDE+XHJcbiAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgbWItNFwiPntlcnJvcn08L3A+fVxyXG4gICAgICBcclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgey8qIFByb2R1Y3QgTmFtZSAqL31cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+UHJvZHVjdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBtdC0xIGJsb2NrIHctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcC0yIHNoYWRvdy1zbSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgc206dGV4dC1zbVwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogUHJvZHVjdCBDYXRlZ29yeSAqL31cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYXRlZ29yeVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPkNhdGVnb3J5PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvZHVjdC5jYXRlZ29yeX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHRleHQtYmxhY2sgbXQtMSBibG9jayB3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHAtMiBzaGFkb3ctc20gZm9jdXM6cmluZy1pbmRpZ28tNTAwIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwIHNtOnRleHQtc21cIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIFByb2R1Y3QgUHJpY2UgKi99XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGlkPVwicHJpY2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvZHVjdC5wcmljZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBtdC0xIGJsb2NrIHctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcC0yIHNoYWRvdy1zbSBmb2N1czpyaW5nLWluZGlnby01MDAgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgc206dGV4dC1zbVwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogU3VibWl0IEJ1dHRvbiAqL31cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWluZGlnby02MDAgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZC1tZCBob3ZlcjpiZy1pbmRpZ28tNzAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBQcm9kdWN0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjYW5jZWxTdWJtaXR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctcmVkLTYwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkLW1kIGhvdmVyOmJnLXJlZC03MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1yZWQtNTAwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZU5hdmlnYXRlIiwiYXhpb3MiLCJBZGRQcm9kdWN0IiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJuYW1lIiwiY2F0ZWdvcnkiLCJwcmljZSIsInN0YXR1cyIsImVycm9yIiwic2V0RXJyb3IiLCJuYXZpZ2F0ZSIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZQcm9kdWN0IiwiY2FuY2VsU3VibWl0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwidGhlbiIsImNhdGNoIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AddProduct.jsx\n"));

/***/ })

});