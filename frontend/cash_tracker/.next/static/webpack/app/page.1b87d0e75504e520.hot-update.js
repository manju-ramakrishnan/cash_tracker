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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"(app-pages-browser)/./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _TotalProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TotalProduct */ \"(app-pages-browser)/./src/app/components/TotalProduct.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProductList() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredProducts, setFilteredProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [nameFilter, setNameFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for name filter\n    const [categoryFilter, setCategoryFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for category filter\n    const [minPrice, setMinPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for minimum price\n    const [maxPrice, setMaxPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for maximum price\n    const API_URL = \"http://localhost:8080/api/products\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch products\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(API_URL)).then((response)=>{\n            setProducts(response.data);\n            setFilteredProducts(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching data: \", error);\n        });\n    }, []);\n    // Apply filters whenever the filter states change\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handler = setTimeout(applyFilters, 300);\n        return ()=>clearTimeout(handler);\n    }, [\n        nameFilter,\n        categoryFilter,\n        minPrice,\n        maxPrice,\n        products\n    ]);\n    // Function to apply filters\n    const applyFilters = ()=>{\n        const filtered = products.filter((product)=>{\n            const withinName = product.name.toLowerCase().includes(nameFilter.toLowerCase());\n            const withinCategory = product.category.toLowerCase().includes(categoryFilter.toLowerCase());\n            const withinPriceRange = (minPrice === \"\" || product.price >= parseFloat(minPrice)) && (maxPrice === \"\" || product.price <= parseFloat(maxPrice));\n            return withinName && withinCategory && withinPriceRange;\n        });\n        setFilteredProducts(filtered);\n    };\n    const deleteProduct = (id)=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].delete(\"\".concat(API_URL, \"/\").concat(id)).then(()=>{\n            setProducts((prevProducts)=>prevProducts.filter((product)=>product.id !== id));\n            setFilteredProducts((prevFiltered)=>prevFiltered.filter((product)=>product.id !== id));\n        }).catch((error)=>console.error(\"Error deleting product: \", error));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold\",\n                children: \"Product List\"\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 flex flex-row md:flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Filter by name\",\n                        value: nameFilter,\n                        onChange: (e)=>setNameFilter(e.target.value),\n                        className: \"border p-2 rounded mb-2\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Filter by category\",\n                        value: categoryFilter,\n                        onChange: (e)=>setCategoryFilter(e.target.value),\n                        className: \"border p-2 rounded mb-2\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex space-x-2 mb-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                placeholder: \"Min Price\",\n                                value: minPrice,\n                                onChange: (e)=>setMinPrice(e.target.value),\n                                className: \"border p-2 rounded w-full\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                placeholder: \"Max Price\",\n                                value: maxPrice,\n                                onChange: (e)=>setMaxPrice(e.target.value),\n                                className: \"border p-2 rounded w-full\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: applyFilters,\n                        className: \"bg-blue-500 text-white p-2 rounded\",\n                        children: \"Apply Filters\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TotalProduct__WEBPACK_IMPORTED_MODULE_2__.TotalProduct, {\n                filteredProducts: filteredProducts\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-4\",\n                children: filteredProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product border p-4 rounded\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl\",\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Category: \",\n                                    product.category\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Price: $\",\n                                    product.price.toFixed(2)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                                        to: \"/edit-product/\".concat(product.id),\n                                        className: \"text-blue-500\",\n                                        children: \"Edit\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>deleteProduct(product.id),\n                                        className: \"ml-4 text-red-500\",\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, product.id, true, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                    to: \"/add-product\",\n                    className: \"bg-green-500 text-white p-2 rounded\",\n                    children: \"Add New Product\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductList, \"tGk39Jhw+8Jq3ho6YYZW1HeYXVU=\");\n_c = ProductList;\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9kdWN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDd0M7QUFDSTtBQUNsQjtBQUNvQjtBQUUvQixTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDTyxrQkFBa0JDLG9CQUFvQixHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNELE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLLHdCQUF3QjtJQUMxRSxNQUFNLENBQUNXLGdCQUFnQkMsa0JBQWtCLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUssNEJBQTRCO0lBQ3RGLE1BQU0sQ0FBQ2EsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQyxLQUFLLDBCQUEwQjtJQUN4RSxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDLEtBQUssMEJBQTBCO0lBQ3hFLE1BQU1pQixVQUFVQyxvQ0FBK0I7SUFDL0NqQixnREFBU0EsQ0FBQztRQUNSLGlCQUFpQjtRQUNqQkMsNkNBQUtBLENBQUNtQixHQUFHLENBQUMsR0FBVyxPQUFSSixVQUNWSyxJQUFJLENBQUNDLENBQUFBO1lBQ0pqQixZQUFZaUIsU0FBU0MsSUFBSTtZQUN6QmhCLG9CQUFvQmUsU0FBU0MsSUFBSTtRQUNuQyxHQUNDQyxLQUFLLENBQUNDLENBQUFBO1lBQ0xDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3pDO0lBQ0osR0FBRyxFQUFFO0lBRUwsa0RBQWtEO0lBQ2xEekIsZ0RBQVNBLENBQUM7UUFDUixNQUFNMkIsVUFBVUMsV0FBV0MsY0FBYztRQUN6QyxPQUFPLElBQU1DLGFBQWFIO0lBQzVCLEdBQUc7UUFBQ25CO1FBQVlFO1FBQWdCRTtRQUFVRTtRQUFVVjtLQUFTO0lBRTdELDRCQUE0QjtJQUM1QixNQUFNeUIsZUFBZTtRQUNu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QUFHSyxXQUFVO2tEQUFvQjs7Ozs7Ozs7Ozs7Ozt1QkFOMUVoQixRQUFRVyxFQUFFOzs7Ozs7Ozs7OzBCQWN4Qiw4REFBQ0k7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNuRCxrREFBSUE7b0JBQUNrRSxJQUFHO29CQUFlZixXQUFVOzhCQUFzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEY7R0F0SHdCOUM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1Byb2R1Y3QuanN4PzcxYjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgVG90YWxQcm9kdWN0IH0gZnJvbSAnLi9Ub3RhbFByb2R1Y3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdExpc3QoKSB7XHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ZpbHRlcmVkUHJvZHVjdHMsIHNldEZpbHRlcmVkUHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuYW1lRmlsdGVyLCBzZXROYW1lRmlsdGVyXSA9IHVzZVN0YXRlKFwiXCIpOyAvLyBTdGF0ZSBmb3IgbmFtZSBmaWx0ZXJcclxuICBjb25zdCBbY2F0ZWdvcnlGaWx0ZXIsIHNldENhdGVnb3J5RmlsdGVyXSA9IHVzZVN0YXRlKFwiXCIpOyAvLyBTdGF0ZSBmb3IgY2F0ZWdvcnkgZmlsdGVyXHJcbiAgY29uc3QgW21pblByaWNlLCBzZXRNaW5QcmljZV0gPSB1c2VTdGF0ZShcIlwiKTsgLy8gU3RhdGUgZm9yIG1pbmltdW0gcHJpY2VcclxuICBjb25zdCBbbWF4UHJpY2UsIHNldE1heFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpOyAvLyBTdGF0ZSBmb3IgbWF4aW11bSBwcmljZVxyXG4gIGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBGZXRjaCBwcm9kdWN0c1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSV9VUkx9YClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHNldEZpbHRlcmVkUHJvZHVjdHMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6IFwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBcclxuICAvLyBBcHBseSBmaWx0ZXJzIHdoZW5ldmVyIHRoZSBmaWx0ZXIgc3RhdGVzIGNoYW5nZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gc2V0VGltZW91dChhcHBseUZpbHRlcnMsIDMwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGhhbmRsZXIpO1xyXG4gIH0sIFtuYW1lRmlsdGVyLCBjYXRlZ29yeUZpbHRlciwgbWluUHJpY2UsIG1heFByaWNlLCBwcm9kdWN0c10pO1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBhcHBseSBmaWx0ZXJzXHJcbiAgY29uc3QgYXBwbHlGaWx0ZXJzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZmlsdGVyZWQgPSBwcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiB7XHJcbiAgICAgIGNvbnN0IHdpdGhpbk5hbWUgPSBwcm9kdWN0Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhuYW1lRmlsdGVyLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICBjb25zdCB3aXRoaW5DYXRlZ29yeSA9IHByb2R1Y3QuY2F0ZWdvcnkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhjYXRlZ29yeUZpbHRlci50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgY29uc3Qgd2l0aGluUHJpY2VSYW5nZSA9IChtaW5QcmljZSA9PT0gXCJcIiB8fCBwcm9kdWN0LnByaWNlID49IHBhcnNlRmxvYXQobWluUHJpY2UpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtYXhQcmljZSA9PT0gXCJcIiB8fCBwcm9kdWN0LnByaWNlIDw9IHBhcnNlRmxvYXQobWF4UHJpY2UpKTtcclxuICAgICAgcmV0dXJuIHdpdGhpbk5hbWUgJiYgd2l0aGluQ2F0ZWdvcnkgJiYgd2l0aGluUHJpY2VSYW5nZTtcclxuICAgIH0pO1xyXG4gICAgc2V0RmlsdGVyZWRQcm9kdWN0cyhmaWx0ZXJlZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlUHJvZHVjdCA9IChpZCkgPT4ge1xyXG4gICAgYXhpb3MuZGVsZXRlKGAke0FQSV9VUkx9LyR7aWR9YClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHNldFByb2R1Y3RzKHByZXZQcm9kdWN0cyA9PiBwcmV2UHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCAhPT0gaWQpKTtcclxuICAgICAgICBzZXRGaWx0ZXJlZFByb2R1Y3RzKHByZXZGaWx0ZXJlZCA9PiBwcmV2RmlsdGVyZWQuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCAhPT0gaWQpKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBwcm9kdWN0OiBcIiwgZXJyb3IpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPlByb2R1Y3QgTGlzdDwvaDE+XHJcblxyXG4gICAgICB7LyogRmlsdGVyIElucHV0cyAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IGZsZXggZmxleC1yb3cgbWQ6ZmxleC1yb3dcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlsdGVyIGJ5IG5hbWVcIlxyXG4gICAgICAgICAgdmFsdWU9e25hbWVGaWx0ZXJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWVGaWx0ZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHAtMiByb3VuZGVkIG1iLTJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpbHRlciBieSBjYXRlZ29yeVwiXHJcbiAgICAgICAgICB2YWx1ZT17Y2F0ZWdvcnlGaWx0ZXJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENhdGVnb3J5RmlsdGVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBwLTIgcm91bmRlZCBtYi0yXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgbWItMlwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1pbiBQcmljZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXttaW5QcmljZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNaW5QcmljZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBwLTIgcm91bmRlZCB3LWZ1bGxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNYXggUHJpY2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bWF4UHJpY2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWF4UHJpY2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcC0yIHJvdW5kZWQgdy1mdWxsXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17YXBwbHlGaWx0ZXJzfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQXBwbHkgRmlsdGVyc1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBCdXR0b24gdG8gc2hvdyB0b3RhbCBwcmljZSAqL31cclxuICAgICAgPFRvdGFsUHJvZHVjdCBmaWx0ZXJlZFByb2R1Y3RzPXtmaWx0ZXJlZFByb2R1Y3RzfSAvPlxyXG5cclxuICAgICAgey8qIFByb2R1Y3QgTGlzdCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00XCI+XHJcbiAgICAgICAge2ZpbHRlcmVkUHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cInByb2R1Y3QgYm9yZGVyIHAtNCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+e3Byb2R1Y3QubmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8cD5DYXRlZ29yeToge3Byb2R1Y3QuY2F0ZWdvcnl9PC9wPlxyXG4gICAgICAgICAgICA8cD5QcmljZTogJHtwcm9kdWN0LnByaWNlLnRvRml4ZWQoMil9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2VkaXQtcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPkVkaXQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVQcm9kdWN0KHByb2R1Y3QuaWQpfSBjbGFzc05hbWU9XCJtbC00IHRleHQtcmVkLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02XCI+XHJcbiAgICAgICAgPExpbmsgdG89XCIvYWRkLXByb2R1Y3RcIiBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgQWRkIE5ldyBQcm9kdWN0XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiVG90YWxQcm9kdWN0IiwiUHJvZHVjdExpc3QiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZmlsdGVyZWRQcm9kdWN0cyIsInNldEZpbHRlcmVkUHJvZHVjdHMiLCJuYW1lRmlsdGVyIiwic2V0TmFtZUZpbHRlciIsImNhdGVnb3J5RmlsdGVyIiwic2V0Q2F0ZWdvcnlGaWx0ZXIiLCJtaW5QcmljZSIsInNldE1pblByaWNlIiwibWF4UHJpY2UiLCJzZXRNYXhQcmljZSIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZXIiLCJzZXRUaW1lb3V0IiwiYXBwbHlGaWx0ZXJzIiwiY2xlYXJUaW1lb3V0IiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJwcm9kdWN0Iiwid2l0aGluTmFtZSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwid2l0aGluQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsIndpdGhpblByaWNlUmFuZ2UiLCJwcmljZSIsInBhcnNlRmxvYXQiLCJkZWxldGVQcm9kdWN0IiwiaWQiLCJkZWxldGUiLCJwcmV2UHJvZHVjdHMiLCJwcmV2RmlsdGVyZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiaDIiLCJwIiwidG9GaXhlZCIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Product.jsx\n"));

/***/ })

});