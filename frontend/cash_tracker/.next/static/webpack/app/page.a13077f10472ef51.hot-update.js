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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"(app-pages-browser)/./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _TotalProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TotalProduct */ \"(app-pages-browser)/./src/app/components/TotalProduct.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProductList() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredProducts, setFilteredProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [nameFilter, setNameFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for name filter\n    const [categoryFilter, setCategoryFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for category filter\n    const [minPrice, setMinPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for minimum price\n    const [maxPrice, setMaxPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for maximum price\n    const API_URL = \"http://localhost:8080/api/products\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch products\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(API_URL)).then((response)=>{\n            setProducts(response.data);\n            setFilteredProducts(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching data: \", error);\n        });\n    }, []);\n    // Apply filters whenever the filter states change\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handler = setTimeout(applyFilters, 300);\n        return ()=>clearTimeout(handler);\n    }, [\n        nameFilter,\n        categoryFilter,\n        minPrice,\n        maxPrice,\n        products\n    ]);\n    // Function to apply filters\n    const applyFilters = ()=>{\n        const filtered = products.filter((product)=>{\n            const withinName = product.name.toLowerCase().includes(nameFilter.toLowerCase());\n            const withinCategory = product.category.toLowerCase().includes(categoryFilter.toLowerCase());\n            const withinPriceRange = (minPrice === \"\" || product.price >= parseFloat(minPrice)) && (maxPrice === \"\" || product.price <= parseFloat(maxPrice));\n            return withinName && withinCategory && withinPriceRange;\n        });\n        setFilteredProducts(filtered);\n    };\n    const deleteProduct = (id)=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].delete(\"\".concat(API_URL, \"/\").concat(id)).then(()=>{\n            setProducts((prevProducts)=>prevProducts.filter((product)=>product.id !== id));\n            setFilteredProducts((prevFiltered)=>prevFiltered.filter((product)=>product.id !== id));\n        }).catch((error)=>console.error(\"Error deleting product: \", error));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold\",\n                children: \"Product List\"\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                    to: \"/add-product\",\n                    className: \"bg-green-500 text-white p-2 rounded\",\n                    children: \"Add New Product\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Filter by name\",\n                        value: nameFilter,\n                        onChange: (e)=>setNameFilter(e.target.value),\n                        className: \"border p-2 rounded w-full md:w-1/3\" // Use w-1/3 for a fixed width in a row\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Filter by category\",\n                        value: categoryFilter,\n                        onChange: (e)=>setCategoryFilter(e.target.value),\n                        className: \"border p-2 rounded w-full md:w-1/3\" // Same fixed width\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                placeholder: \"Min Price\",\n                                value: minPrice,\n                                onChange: (e)=>setMinPrice(e.target.value),\n                                className: \"border p-2 rounded w-full md:w-1/2\" // Use w-1/2 for a fixed width in a row\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                placeholder: \"Max Price\",\n                                value: maxPrice,\n                                onChange: (e)=>setMaxPrice(e.target.value),\n                                className: \"border p-2 rounded w-full md:w-1/2\" // Same fixed width\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: applyFilters,\n                        className: \"bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150\",\n                        children: \"Apply Filters\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TotalProduct__WEBPACK_IMPORTED_MODULE_2__.TotalProduct, {\n                filteredProducts: filteredProducts\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8\",\n                children: filteredProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product bg-white bg-opacity-10 backdrop-blur-md  p-4 rounded shadow-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl\",\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 117,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\",\n                                children: [\n                                    \"Category: \",\n                                    product.category\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 118,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\",\n                                children: [\n                                    \"Price: $\",\n                                    product.price.toFixed(2)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 119,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                                        to: \"/edit-product/\".concat(product.id),\n                                        className: \"text-blue-500\",\n                                        children: \"Edit\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>deleteProduct(product.id),\n                                        className: \"ml-4 text-red-500\",\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 120,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, product.id, true, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 5\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 111,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductList, \"tGk39Jhw+8Jq3ho6YYZW1HeYXVU=\");\n_c = ProductList;\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9kdWN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDd0M7QUFDSTtBQUNsQjtBQUNvQjtBQUUvQixTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDTyxrQkFBa0JDLG9CQUFvQixHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNELE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLLHdCQUF3QjtJQUMxRSxNQUFNLENBQUNXLGdCQUFnQkMsa0JBQWtCLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUssNEJBQTRCO0lBQ3RGLE1BQU0sQ0FBQ2EsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQyxLQUFLLDBCQUEwQjtJQUN4RSxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDLEtBQUssMEJBQTBCO0lBQ3hFLE1BQU1pQixVQUFVQyxvQ0FBK0I7SUFDL0NqQixnREFBU0EsQ0FBQztRQUNSLGlCQUFpQjtRQUNqQkMsNkNBQUtBLENBQUNtQixHQUFHLENBQUMsR0FBVyxPQUFSSixVQUNWSyxJQUFJLENBQUNDLENBQUFBO1lBQ0pqQixZQUFZaUIsU0FBU0MsSUFBSTtZQUN6QmhCLG9CQUFvQmUsU0FBU0MsSUFBSTtRQUNuQyxHQUNDQyxLQUFLLENBQUNDLENBQUFBO1lBQ0xDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3pDO0lBQ0osR0FBRyxFQUFFO0lBRUwsa0RBQWtEO0lBQ2xEekIsZ0RBQVNBLENBQUM7UUFDUixNQUFNMkIsVUFBVUMsV0FBV0MsY0FBYztRQUN6QyxPQUFPLElBQU1DLGFBQWFIO0lBQzVCLEdBQUc7UUFBQ25CO1FBQVlFO1FBQWdCRTtRQUFVRTtRQUFVVjtLQUFTO0lBRTdELDRCQUE0QjtJQUM1QixNQUFNeUIsZUFBZTtRQUNu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QUFDdUIsT0FBTyxDQUFDOzs7Ozs7OzBDQUMvQyw4REFBQ2hCOztrREFDQyw4REFBQ2xELGtEQUFJQTt3Q0FDSHFELElBQUksaUJBQTRCLE9BQVhsQixRQUFRVyxFQUFFO3dDQUMvQkssV0FBVTtrREFDWDs7Ozs7O2tEQUdELDhEQUFDVTt3Q0FDQ0MsU0FBUyxJQUFNakIsY0FBY1YsUUFBUVcsRUFBRTt3Q0FDdkNLLFdBQVU7a0RBQ1g7Ozs7Ozs7Ozs7Ozs7dUJBaEJFaEIsUUFBUVcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQXlCckI7R0FwSXdCekM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1Byb2R1Y3QuanN4PzcxYjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgVG90YWxQcm9kdWN0IH0gZnJvbSAnLi9Ub3RhbFByb2R1Y3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdExpc3QoKSB7XHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ZpbHRlcmVkUHJvZHVjdHMsIHNldEZpbHRlcmVkUHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuYW1lRmlsdGVyLCBzZXROYW1lRmlsdGVyXSA9IHVzZVN0YXRlKFwiXCIpOyAvLyBTdGF0ZSBmb3IgbmFtZSBmaWx0ZXJcclxuICBjb25zdCBbY2F0ZWdvcnlGaWx0ZXIsIHNldENhdGVnb3J5RmlsdGVyXSA9IHVzZVN0YXRlKFwiXCIpOyAvLyBTdGF0ZSBmb3IgY2F0ZWdvcnkgZmlsdGVyXHJcbiAgY29uc3QgW21pblByaWNlLCBzZXRNaW5QcmljZV0gPSB1c2VTdGF0ZShcIlwiKTsgLy8gU3RhdGUgZm9yIG1pbmltdW0gcHJpY2VcclxuICBjb25zdCBbbWF4UHJpY2UsIHNldE1heFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpOyAvLyBTdGF0ZSBmb3IgbWF4aW11bSBwcmljZVxyXG4gIGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBGZXRjaCBwcm9kdWN0c1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSV9VUkx9YClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHNldEZpbHRlcmVkUHJvZHVjdHMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6IFwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBcclxuICAvLyBBcHBseSBmaWx0ZXJzIHdoZW5ldmVyIHRoZSBmaWx0ZXIgc3RhdGVzIGNoYW5nZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gc2V0VGltZW91dChhcHBseUZpbHRlcnMsIDMwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZXIpO1xyXG4gIH0sIFtuYW1lRmlsdGVyLCBjYXRlZ29yeUZpbHRlciwgbWluUHJpY2UsIG1heFByaWNlLCBwcm9kdWN0c10pO1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBhcHBseSBmaWx0ZXJzXHJcbiAgY29uc3QgYXBwbHlGaWx0ZXJzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZmlsdGVyZWQgPSBwcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiB7XHJcbiAgICAgIGNvbnN0IHdpdGhpbk5hbWUgPSBwcm9kdWN0Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhuYW1lRmlsdGVyLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICBjb25zdCB3aXRoaW5DYXRlZ29yeSA9IHByb2R1Y3QuY2F0ZWdvcnkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhjYXRlZ29yeUZpbHRlci50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgY29uc3Qgd2l0aGluUHJpY2VSYW5nZSA9IChtaW5QcmljZSA9PT0gXCJcIiB8fCBwcm9kdWN0LnByaWNlID49IHBhcnNlRmxvYXQobWluUHJpY2UpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtYXhQcmljZSA9PT0gXCJcIiB8fCBwcm9kdWN0LnByaWNlIDw9IHBhcnNlRmxvYXQobWF4UHJpY2UpKTtcclxuICAgICAgcmV0dXJuIHdpdGhpbk5hbWUgJiYgd2l0aGluQ2F0ZWdvcnkgJiYgd2l0aGluUHJpY2VSYW5nZTtcclxuICAgIH0pO1xyXG4gICAgc2V0RmlsdGVyZWRQcm9kdWN0cyhmaWx0ZXJlZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlUHJvZHVjdCA9IChpZCkgPT4ge1xyXG4gICAgYXhpb3MuZGVsZXRlKGAke0FQSV9VUkx9LyR7aWR9YClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHNldFByb2R1Y3RzKHByZXZQcm9kdWN0cyA9PiBwcmV2UHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCAhPT0gaWQpKTtcclxuICAgICAgICBzZXRGaWx0ZXJlZFByb2R1Y3RzKHByZXZGaWx0ZXJlZCA9PiBwcmV2RmlsdGVyZWQuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCAhPT0gaWQpKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBwcm9kdWN0OiBcIiwgZXJyb3IpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPlByb2R1Y3QgTGlzdDwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxyXG4gICAgICAgIDxMaW5rIHRvPVwiL2FkZC1wcm9kdWN0XCIgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgcC0yIHJvdW5kZWRcIj5cclxuICAgICAgICAgIEFkZCBOZXcgUHJvZHVjdFxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBGaWx0ZXIgSW5wdXRzICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTIgc3BhY2UteS0yIG1kOnNwYWNlLXktMFwiPlxyXG4gIDxpbnB1dFxyXG4gICAgdHlwZT1cInRleHRcIlxyXG4gICAgcGxhY2Vob2xkZXI9XCJGaWx0ZXIgYnkgbmFtZVwiXHJcbiAgICB2YWx1ZT17bmFtZUZpbHRlcn1cclxuICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZUZpbHRlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICBjbGFzc05hbWU9XCJib3JkZXIgcC0yIHJvdW5kZWQgdy1mdWxsIG1kOnctMS8zXCIgLy8gVXNlIHctMS8zIGZvciBhIGZpeGVkIHdpZHRoIGluIGEgcm93XHJcbiAgLz5cclxuICA8aW5wdXRcclxuICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIHBsYWNlaG9sZGVyPVwiRmlsdGVyIGJ5IGNhdGVnb3J5XCJcclxuICAgIHZhbHVlPXtjYXRlZ29yeUZpbHRlcn1cclxuICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2F0ZWdvcnlGaWx0ZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgY2xhc3NOYW1lPVwiYm9yZGVyIHAtMiByb3VuZGVkIHctZnVsbCBtZDp3LTEvM1wiIC8vIFNhbWUgZml4ZWQgd2lkdGhcclxuICAvPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBzcGFjZS15LTIgbWQ6c3BhY2UteS0wIG1kOnNwYWNlLXgtMiB3LWZ1bGxcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgcGxhY2Vob2xkZXI9XCJNaW4gUHJpY2VcIlxyXG4gICAgICB2YWx1ZT17bWluUHJpY2V9XHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWluUHJpY2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICBjbGFzc05hbWU9XCJib3JkZXIgcC0yIHJvdW5kZWQgdy1mdWxsIG1kOnctMS8yXCIgLy8gVXNlIHctMS8yIGZvciBhIGZpeGVkIHdpZHRoIGluIGEgcm93XHJcbiAgICAvPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICBwbGFjZWhvbGRlcj1cIk1heCBQcmljZVwiXHJcbiAgICAgIHZhbHVlPXttYXhQcmljZX1cclxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNYXhQcmljZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBwLTIgcm91bmRlZCB3LWZ1bGwgbWQ6dy0xLzJcIiAvLyBTYW1lIGZpeGVkIHdpZHRoXHJcbiAgICAvPlxyXG4gIDwvZGl2PlxyXG4gIDxidXR0b25cclxuICBvbkNsaWNrPXthcHBseUZpbHRlcnN9XHJcbiAgY2xhc3NOYW1lPVwiYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHB5LTIgcHgtNCByb3VuZGVkIHNoYWRvdy1tZCBob3ZlcjpiZy1ibHVlLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6cmluZy1vcGFjaXR5LTUwIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwXCJcclxuPlxyXG4gIEFwcGx5IEZpbHRlcnNcclxuPC9idXR0b24+XHJcblxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICB7LyogQnV0dG9uIHRvIHNob3cgdG90YWwgcHJpY2UgKi99XHJcbiAgICAgIDxUb3RhbFByb2R1Y3QgZmlsdGVyZWRQcm9kdWN0cz17ZmlsdGVyZWRQcm9kdWN0c30gLz5cclxuXHJcbnsvKiBQcm9kdWN0IExpc3QgKi99XHJcbjxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNCBtdC04XCI+XHJcbiAge2ZpbHRlcmVkUHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxyXG4gICAgPGRpdiBcclxuICAgICAga2V5PXtwcm9kdWN0LmlkfSBcclxuICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdCBiZy13aGl0ZSBiZy1vcGFjaXR5LTEwIGJhY2tkcm9wLWJsdXItbWQgIHAtNCByb3VuZGVkIHNoYWRvdy1sZ1wiXHJcbiAgICA+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+e3Byb2R1Y3QubmFtZX08L2gyPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJcIj5DYXRlZ29yeToge3Byb2R1Y3QuY2F0ZWdvcnl9PC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJcIj5QcmljZTogJHtwcm9kdWN0LnByaWNlLnRvRml4ZWQoMil9PC9wPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgdG89e2AvZWRpdC1wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfSBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEVkaXRcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVByb2R1Y3QocHJvZHVjdC5pZCl9IFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWwtNCB0ZXh0LXJlZC01MDBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICkpfVxyXG48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiVG90YWxQcm9kdWN0IiwiUHJvZHVjdExpc3QiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZmlsdGVyZWRQcm9kdWN0cyIsInNldEZpbHRlcmVkUHJvZHVjdHMiLCJuYW1lRmlsdGVyIiwic2V0TmFtZUZpbHRlciIsImNhdGVnb3J5RmlsdGVyIiwic2V0Q2F0ZWdvcnlGaWx0ZXIiLCJtaW5QcmljZSIsInNldE1pblByaWNlIiwibWF4UHJpY2UiLCJzZXRNYXhQcmljZSIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZXIiLCJzZXRUaW1lb3V0IiwiYXBwbHlGaWx0ZXJzIiwiY2xlYXJUaW1lb3V0IiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJwcm9kdWN0Iiwid2l0aGluTmFtZSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwid2l0aGluQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsIndpdGhpblByaWNlUmFuZ2UiLCJwcmljZSIsInBhcnNlRmxvYXQiLCJkZWxldGVQcm9kdWN0IiwiaWQiLCJkZWxldGUiLCJwcmV2UHJvZHVjdHMiLCJwcmV2RmlsdGVyZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInRvIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJoMiIsInAiLCJ0b0ZpeGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Product.jsx\n"));

/***/ })

});