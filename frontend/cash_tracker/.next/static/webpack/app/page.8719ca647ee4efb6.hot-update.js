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

/***/ "(app-pages-browser)/./src/app/components/Product.jsx":
/*!****************************************!*\
  !*** ./src/app/components/Product.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"(app-pages-browser)/./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _TotalProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TotalProduct */ \"(app-pages-browser)/./src/app/components/TotalProduct.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProductList() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredProducts, setFilteredProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [nameFilter, setNameFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for name filter\n    const [categoryFilter, setCategoryFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for category filter\n    const [minPrice, setMinPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for minimum price\n    const [maxPrice, setMaxPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for maximum price\n    const API_URL = \"http://localhost:8080/api/products\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch products\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(API_URL)).then((response)=>{\n            setProducts(response.data);\n            setFilteredProducts(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching data: \", error);\n        });\n    }, []);\n    // Apply filters whenever the filter states change\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handler = setTimeout(applyFilters, 300);\n        return ()=>clearTimeout(handler);\n    }, [\n        nameFilter,\n        categoryFilter,\n        minPrice,\n        maxPrice,\n        products\n    ]);\n    // Function to apply filters\n    const applyFilters = ()=>{\n        const filtered = products.filter((product)=>{\n            const withinName = product.name.toLowerCase().includes(nameFilter.toLowerCase());\n            const withinCategory = product.category.toLowerCase().includes(categoryFilter.toLowerCase());\n            const withinPriceRange = (minPrice === \"\" || product.price >= parseFloat(minPrice)) && (maxPrice === \"\" || product.price <= parseFloat(maxPrice));\n            return withinName && withinCategory && withinPriceRange;\n        });\n        setFilteredProducts(filtered);\n    };\n    const deleteProduct = (id)=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].delete(\"\".concat(API_URL, \"/\").concat(id)).then(()=>{\n            setProducts((prevProducts)=>prevProducts.filter((product)=>product.id !== id));\n            setFilteredProducts((prevFiltered)=>prevFiltered.filter((product)=>product.id !== id));\n        }).catch((error)=>console.error(\"Error deleting product: \", error));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold\",\n                children: \"Product List\"\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                    to: \"/add-product\",\n                    className: \"bg-green-500 text-white p-2 rounded\",\n                    children: \"Add New Product\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TotalProduct__WEBPACK_IMPORTED_MODULE_2__.TotalProduct, {\n                        filteredProducts: filteredProducts\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Filter by name\",\n                        value: nameFilter,\n                        onChange: (e)=>setNameFilter(e.target.value),\n                        className: \"border p-2 rounded w-full md:w-1/3\" // Use w-1/3 for a fixed width in a row\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Filter by category\",\n                        value: categoryFilter,\n                        onChange: (e)=>setCategoryFilter(e.target.value),\n                        className: \"border p-2 rounded w-full md:w-1/3\" // Same fixed width\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                placeholder: \"Min Price\",\n                                value: minPrice,\n                                onChange: (e)=>setMinPrice(e.target.value),\n                                className: \"border p-2 rounded w-full md:w-1/2\" // Use w-1/2 for a fixed width in a row\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                placeholder: \"Max Price\",\n                                value: maxPrice,\n                                onChange: (e)=>setMaxPrice(e.target.value),\n                                className: \"border p-2 rounded w-full md:w-1/2\" // Same fixed width\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: applyFilters,\n                        className: \"bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150\",\n                        children: \"Apply Filters\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8\",\n                children: filteredProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product bg-white bg-opacity-10 backdrop-blur-md  p-4 rounded shadow-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl\",\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 116,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\",\n                                children: [\n                                    \"Category: \",\n                                    product.category\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 117,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\",\n                                children: [\n                                    \"Price: $\",\n                                    product.price.toFixed(2)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 118,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                                        to: \"/edit-product/\".concat(product.id),\n                                        className: \"text-blue-500\",\n                                        children: \"Edit\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>deleteProduct(product.id),\n                                        className: \"ml-4 text-red-500\",\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 119,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, product.id, true, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 112,\n                        columnNumber: 5\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 110,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductList, \"tGk39Jhw+8Jq3ho6YYZW1HeYXVU=\");\n_c = ProductList;\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9kdWN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDd0M7QUFDSTtBQUNsQjtBQUNvQjtBQUUvQixTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDTyxrQkFBa0JDLG9CQUFvQixHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNELE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLLHdCQUF3QjtJQUMxRSxNQUFNLENBQUNXLGdCQUFnQkMsa0JBQWtCLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUssNEJBQTRCO0lBQ3RGLE1BQU0sQ0FBQ2EsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQyxLQUFLLDBCQUEwQjtJQUN4RSxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDLEtBQUssMEJBQTBCO0lBQ3hFLE1BQU1pQixVQUFVQyxvQ0FBK0I7SUFDL0NqQixnREFBU0EsQ0FBQztRQUNSLGlCQUFpQjtRQUNqQkMsNkNBQUtBLENBQUNtQixHQUFHLENBQUMsR0FBVyxPQUFSSixVQUNWSyxJQUFJLENBQUNDLENBQUFBO1lBQ0pqQixZQUFZaUIsU0FBU0MsSUFBSTtZQUN6QmhCLG9CQUFvQmUsU0FBU0MsSUFBSTtRQUNuQyxHQUNDQyxLQUFLLENBQUNDLENBQUFBO1lBQ0xDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3pDO0lBQ0osR0FBRyxFQUFFO0lBRUwsa0RBQWtEO0lBQ2xEekIsZ0RBQVNBLENBQUM7UUFDUixNQUFNMkIsVUFBVUMsV0FBV0MsY0FBYztRQUN6QyxPQUFPLElBQU1DLGFBQWFIO0lBQzVCLEdBQUc7UUFBQ25CO1FBQVlFO1FBQWdCRTtRQUFVRTtRQUFVVjtLQUFTO0lBRTdELDRCQUE0QjtJQUM1QixNQUFNeUIsZUFBZTtRQUNu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b0NBQUc7b0NBQVNoQixRQUFRUSxLQUFLLENBQUN1QixPQUFPLENBQUM7Ozs7Ozs7MENBQy9DLDhEQUFDaEI7O2tEQUNDLDhEQUFDbEQsa0RBQUlBO3dDQUNIcUQsSUFBSSxpQkFBNEIsT0FBWGxCLFFBQVFXLEVBQUU7d0NBQy9CSyxXQUFVO2tEQUNYOzs7Ozs7a0RBR0QsOERBQUNVO3dDQUNDQyxTQUFTLElBQU1qQixjQUFjVixRQUFRVyxFQUFFO3dDQUN2Q0ssV0FBVTtrREFDWDs7Ozs7Ozs7Ozs7Ozt1QkFoQkVoQixRQUFRVyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBeUJyQjtHQW5Jd0J6QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUHJvZHVjdC5qc3g/NzFiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBUb3RhbFByb2R1Y3QgfSBmcm9tICcuL1RvdGFsUHJvZHVjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0TGlzdCgpIHtcclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZmlsdGVyZWRQcm9kdWN0cywgc2V0RmlsdGVyZWRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW25hbWVGaWx0ZXIsIHNldE5hbWVGaWx0ZXJdID0gdXNlU3RhdGUoXCJcIik7IC8vIFN0YXRlIGZvciBuYW1lIGZpbHRlclxyXG4gIGNvbnN0IFtjYXRlZ29yeUZpbHRlciwgc2V0Q2F0ZWdvcnlGaWx0ZXJdID0gdXNlU3RhdGUoXCJcIik7IC8vIFN0YXRlIGZvciBjYXRlZ29yeSBmaWx0ZXJcclxuICBjb25zdCBbbWluUHJpY2UsIHNldE1pblByaWNlXSA9IHVzZVN0YXRlKFwiXCIpOyAvLyBTdGF0ZSBmb3IgbWluaW11bSBwcmljZVxyXG4gIGNvbnN0IFttYXhQcmljZSwgc2V0TWF4UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7IC8vIFN0YXRlIGZvciBtYXhpbXVtIHByaWNlXHJcbiAgY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkw7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEZldGNoIHByb2R1Y3RzXHJcbiAgICBheGlvcy5nZXQoYCR7QVBJX1VSTH1gKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgc2V0RmlsdGVyZWRQcm9kdWN0cyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTogXCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIFxyXG4gIC8vIEFwcGx5IGZpbHRlcnMgd2hlbmV2ZXIgdGhlIGZpbHRlciBzdGF0ZXMgY2hhbmdlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSBzZXRUaW1lb3V0KGFwcGx5RmlsdGVycywgMzAwKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaGFuZGxlcik7XHJcbiAgfSwgW25hbWVGaWx0ZXIsIGNhdGVnb3J5RmlsdGVyLCBtaW5QcmljZSwgbWF4UHJpY2UsIHByb2R1Y3RzXSk7XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIGFwcGx5IGZpbHRlcnNcclxuICBjb25zdCBhcHBseUZpbHRlcnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZCA9IHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHtcclxuICAgICAgY29uc3Qgd2l0aGluTmFtZSA9IHByb2R1Y3QubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5hbWVGaWx0ZXIudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgIGNvbnN0IHdpdGhpbkNhdGVnb3J5ID0gcHJvZHVjdC5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGNhdGVnb3J5RmlsdGVyLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICBjb25zdCB3aXRoaW5QcmljZVJhbmdlID0gKG1pblByaWNlID09PSBcIlwiIHx8IHByb2R1Y3QucHJpY2UgPj0gcGFyc2VGbG9hdChtaW5QcmljZSkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1heFByaWNlID09PSBcIlwiIHx8IHByb2R1Y3QucHJpY2UgPD0gcGFyc2VGbG9hdChtYXhQcmljZSkpO1xyXG4gICAgICByZXR1cm4gd2l0aGluTmFtZSAmJiB3aXRoaW5DYXRlZ29yeSAmJiB3aXRoaW5QcmljZVJhbmdlO1xyXG4gICAgfSk7XHJcbiAgICBzZXRGaWx0ZXJlZFByb2R1Y3RzKGZpbHRlcmVkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVQcm9kdWN0ID0gKGlkKSA9PiB7XHJcbiAgICBheGlvcy5kZWxldGUoYCR7QVBJX1VSTH0vJHtpZH1gKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgc2V0UHJvZHVjdHMocHJldlByb2R1Y3RzID0+IHByZXZQcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LmlkICE9PSBpZCkpO1xyXG4gICAgICAgIHNldEZpbHRlcmVkUHJvZHVjdHMocHJldkZpbHRlcmVkID0+IHByZXZGaWx0ZXJlZC5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LmlkICE9PSBpZCkpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIHByb2R1Y3Q6IFwiLCBlcnJvcikpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+UHJvZHVjdCBMaXN0PC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02XCI+XHJcbiAgICAgICAgPExpbmsgdG89XCIvYWRkLXByb2R1Y3RcIiBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgQWRkIE5ldyBQcm9kdWN0XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj4gPFRvdGFsUHJvZHVjdCBmaWx0ZXJlZFByb2R1Y3RzPXtmaWx0ZXJlZFByb2R1Y3RzfSAvPjwvZGl2PlxyXG5cclxuICAgICAgIHsvKiBCdXR0b24gdG8gc2hvdyB0b3RhbCBwcmljZSAqL31cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgey8qIEZpbHRlciBJbnB1dHMgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOnNwYWNlLXgtMiBzcGFjZS15LTIgbWQ6c3BhY2UteS0wXCI+XHJcbiAgPGlucHV0XHJcbiAgICB0eXBlPVwidGV4dFwiXHJcbiAgICBwbGFjZWhvbGRlcj1cIkZpbHRlciBieSBuYW1lXCJcclxuICAgIHZhbHVlPXtuYW1lRmlsdGVyfVxyXG4gICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lRmlsdGVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgIGNsYXNzTmFtZT1cImJvcmRlciBwLTIgcm91bmRlZCB3LWZ1bGwgbWQ6dy0xLzNcIiAvLyBVc2Ugdy0xLzMgZm9yIGEgZml4ZWQgd2lkdGggaW4gYSByb3dcclxuICAvPlxyXG4gIDxpbnB1dFxyXG4gICAgdHlwZT1cInRleHRcIlxyXG4gICAgcGxhY2Vob2xkZXI9XCJGaWx0ZXIgYnkgY2F0ZWdvcnlcIlxyXG4gICAgdmFsdWU9e2NhdGVnb3J5RmlsdGVyfVxyXG4gICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDYXRlZ29yeUZpbHRlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICBjbGFzc05hbWU9XCJib3JkZXIgcC0yIHJvdW5kZWQgdy1mdWxsIG1kOnctMS8zXCIgLy8gU2FtZSBmaXhlZCB3aWR0aFxyXG4gIC8+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IHNwYWNlLXktMiBtZDpzcGFjZS15LTAgbWQ6c3BhY2UteC0yIHctZnVsbFwiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICBwbGFjZWhvbGRlcj1cIk1pbiBQcmljZVwiXHJcbiAgICAgIHZhbHVlPXttaW5QcmljZX1cclxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNaW5QcmljZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBwLTIgcm91bmRlZCB3LWZ1bGwgbWQ6dy0xLzJcIiAvLyBVc2Ugdy0xLzIgZm9yIGEgZml4ZWQgd2lkdGggaW4gYSByb3dcclxuICAgIC8+XHJcbiAgICA8aW5wdXRcclxuICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwiTWF4IFByaWNlXCJcclxuICAgICAgdmFsdWU9e21heFByaWNlfVxyXG4gICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1heFByaWNlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHAtMiByb3VuZGVkIHctZnVsbCBtZDp3LTEvMlwiIC8vIFNhbWUgZml4ZWQgd2lkdGhcclxuICAgIC8+XHJcbiAgPC9kaXY+XHJcbiAgPGJ1dHRvblxyXG4gIG9uQ2xpY2s9e2FwcGx5RmlsdGVyc31cclxuICBjbGFzc05hbWU9XCJiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IHJvdW5kZWQgc2hhZG93LW1kIGhvdmVyOmJnLWJsdWUtNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpyaW5nLW9wYWNpdHktNTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTBcIlxyXG4+XHJcbiAgQXBwbHkgRmlsdGVyc1xyXG48L2J1dHRvbj5cclxuXHJcbjwvZGl2PlxyXG5cclxuey8qIFByb2R1Y3QgTGlzdCAqL31cclxuPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC00IG10LThcIj5cclxuICB7ZmlsdGVyZWRQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXHJcbiAgICA8ZGl2IFxyXG4gICAgICBrZXk9e3Byb2R1Y3QuaWR9IFxyXG4gICAgICBjbGFzc05hbWU9XCJwcm9kdWN0IGJnLXdoaXRlIGJnLW9wYWNpdHktMTAgYmFja2Ryb3AtYmx1ci1tZCAgcC00IHJvdW5kZWQgc2hhZG93LWxnXCJcclxuICAgID5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGxcIj57cHJvZHVjdC5uYW1lfTwvaDI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPkNhdGVnb3J5OiB7cHJvZHVjdC5jYXRlZ29yeX08L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPlByaWNlOiAke3Byb2R1Y3QucHJpY2UudG9GaXhlZCgyKX08L3A+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICB0bz17YC9lZGl0LXByb2R1Y3QvJHtwcm9kdWN0LmlkfWB9IFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRWRpdFxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlUHJvZHVjdChwcm9kdWN0LmlkKX0gXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtbC00IHRleHQtcmVkLTUwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKSl9XHJcbjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJUb3RhbFByb2R1Y3QiLCJQcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJmaWx0ZXJlZFByb2R1Y3RzIiwic2V0RmlsdGVyZWRQcm9kdWN0cyIsIm5hbWVGaWx0ZXIiLCJzZXROYW1lRmlsdGVyIiwiY2F0ZWdvcnlGaWx0ZXIiLCJzZXRDYXRlZ29yeUZpbHRlciIsIm1pblByaWNlIiwic2V0TWluUHJpY2UiLCJtYXhQcmljZSIsInNldE1heFByaWNlIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlciIsInNldFRpbWVvdXQiLCJhcHBseUZpbHRlcnMiLCJjbGVhclRpbWVvdXQiLCJmaWx0ZXJlZCIsImZpbHRlciIsInByb2R1Y3QiLCJ3aXRoaW5OYW1lIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ3aXRoaW5DYXRlZ29yeSIsImNhdGVnb3J5Iiwid2l0aGluUHJpY2VSYW5nZSIsInByaWNlIiwicGFyc2VGbG9hdCIsImRlbGV0ZVByb2R1Y3QiLCJpZCIsImRlbGV0ZSIsInByZXZQcm9kdWN0cyIsInByZXZGaWx0ZXJlZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidG8iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsImgyIiwicCIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Product.jsx\n"));

/***/ })

});