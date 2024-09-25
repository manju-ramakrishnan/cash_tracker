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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"(app-pages-browser)/./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _TotalProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TotalProduct */ \"(app-pages-browser)/./src/app/components/TotalProduct.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProductList() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredProducts, setFilteredProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [nameFilter, setNameFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for name filter\n    const [categoryFilter, setCategoryFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for category filter\n    const [minPrice, setMinPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for minimum price\n    const [maxPrice, setMaxPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for maximum price\n    const API_URL = \"http://localhost:8080/api/products\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch products\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(API_URL)).then((response)=>{\n            setProducts(response.data);\n            setFilteredProducts(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching data: \", error);\n        });\n    }, []);\n    // Apply filters whenever the filter states change\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handler = setTimeout(applyFilters, 300);\n        return ()=>clearTimeout(handler);\n    }, [\n        nameFilter,\n        categoryFilter,\n        minPrice,\n        maxPrice,\n        products\n    ]);\n    // Function to apply filters\n    const applyFilters = ()=>{\n        const filtered = products.filter((product)=>{\n            const withinName = product.name.toLowerCase().includes(nameFilter.toLowerCase());\n            const withinCategory = product.category.toLowerCase().includes(categoryFilter.toLowerCase());\n            const withinPriceRange = (minPrice === \"\" || product.price >= parseFloat(minPrice)) && (maxPrice === \"\" || product.price <= parseFloat(maxPrice));\n            return withinName && withinCategory && withinPriceRange;\n        });\n        setFilteredProducts(filtered);\n    };\n    const deleteProduct = (id)=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].delete(\"\".concat(API_URL, \"/\").concat(id)).then(()=>{\n            setProducts((prevProducts)=>prevProducts.filter((product)=>product.id !== id));\n            setFilteredProducts((prevFiltered)=>prevFiltered.filter((product)=>product.id !== id));\n        }).catch((error)=>console.error(\"Error deleting product: \", error));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold\",\n                children: \"Product List\"\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4 flex flex-row flex-wrap space-x-2 md:space-y-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Filter by name\",\n                        value: nameFilter,\n                        onChange: (e)=>setNameFilter(e.target.value),\n                        className: \"border p-2 rounded w-full md:w-auto\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Filter by category\",\n                        value: categoryFilter,\n                        onChange: (e)=>setCategoryFilter(e.target.value),\n                        className: \"border p-2 rounded w-full md:w-auto\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row space-x-2 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                placeholder: \"Min Price\",\n                                value: minPrice,\n                                onChange: (e)=>setMinPrice(e.target.value),\n                                className: \"border p-2 rounded w-full md:w-auto\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                placeholder: \"Max Price\",\n                                value: maxPrice,\n                                onChange: (e)=>setMaxPrice(e.target.value),\n                                className: \"border p-2 rounded w-full md:w-auto\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 5\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: applyFilters,\n                        className: \"bg-blue-500 text-white p-2 rounded w-full md:w-auto\",\n                        children: \"Apply Filters\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 3\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TotalProduct__WEBPACK_IMPORTED_MODULE_2__.TotalProduct, {\n                filteredProducts: filteredProducts\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-4\",\n                children: filteredProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product border p-4 rounded\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl\",\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Category: \",\n                                    product.category\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Price: $\",\n                                    product.price.toFixed(2)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                                        to: \"/edit-product/\".concat(product.id),\n                                        className: \"text-blue-500\",\n                                        children: \"Edit\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>deleteProduct(product.id),\n                                        className: \"ml-4 text-red-500\",\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, product.id, true, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                    to: \"/add-product\",\n                    className: \"bg-green-500 text-white p-2 rounded\",\n                    children: \"Add New Product\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductList, \"tGk39Jhw+8Jq3ho6YYZW1HeYXVU=\");\n_c = ProductList;\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9kdWN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDd0M7QUFDSTtBQUNsQjtBQUNvQjtBQUUvQixTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDTyxrQkFBa0JDLG9CQUFvQixHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNELE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLLHdCQUF3QjtJQUMxRSxNQUFNLENBQUNXLGdCQUFnQkMsa0JBQWtCLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUssNEJBQTRCO0lBQ3RGLE1BQU0sQ0FBQ2EsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQyxLQUFLLDBCQUEwQjtJQUN4RSxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDLEtBQUssMEJBQTBCO0lBQ3hFLE1BQU1pQixVQUFVQyxvQ0FBK0I7SUFDL0NqQixnREFBU0EsQ0FBQztRQUNSLGlCQUFpQjtRQUNqQkMsNkNBQUtBLENBQUNtQixHQUFHLENBQUMsR0FBVyxPQUFSSixVQUNWSyxJQUFJLENBQUNDLENBQUFBO1lBQ0pqQixZQUFZaUIsU0FBU0MsSUFBSTtZQUN6QmhCLG9CQUFvQmUsU0FBU0MsSUFBSTtRQUNuQyxHQUNDQyxLQUFLLENBQUNDLENBQUFBO1lBQ0xDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3pDO0lBQ0osR0FBRyxFQUFFO0lBRUwsa0RBQWtEO0lBQ2xEekIsZ0RBQVNBLENBQUM7UUFDUixNQUFNMkIsVUFBVUMsV0FBV0MsY0FBYztRQUN6QyxPQUFPLElBQU1DLGFBQWFIO0lBQzVCLEdBQUc7UUFBQ25CO1FBQVlFO1FBQWdCRTtRQUFVRTtRQUFVVjtLQUFTO0lBRTdELDRCQUE0QjtJQUM1QixNQUFNeUIsZUFBZTtRQUNuQixNQUFNRSxXQUFXM0IsU0FBUzRCLE1BQU0sQ0FBQ0MsQ0FBQUE7WUFDL0IsTUFBTUMsYUFBYUQsUUFBUUUsSUFBSSxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQzdCLFdBQVc0QixXQUFXO1lBQzdFLE1BQU1FLGlCQUFpQkwsUUFBUU0sUUFBUSxDQUFDSCxXQUFXLEdBQUdDLFFBQVEsQ0FBQzNCLGVBQWUwQixXQUFXO1lBQ3pGLE1BQU1JLG1CQUFtQixDQUFDNUIsYUFBYSxNQUFNcUIsUUFBUVEsS0FBSyxJQUFJQyxXQUFXOUIsU0FBUSxLQUN0REUsQ0FBQUEsYUFBYSxNQUFNbUIsUUFBUVEsS0FBSyxJQUFJQyxXQUFXNUIsU0FBUTtZQUNsRixPQUFPb0IsY0FBY0ksa0JBQWtCRTtRQUN6QztRQUNBakMsb0JBQW9Cd0I7SUFDdEI7SUFFQSxNQUFNWSxnQkFBZ0IsQ0FBQ0M7UUFDckIzQyw2Q0FBS0EsQ0FBQzRDLE1BQU0sQ0FBQyxHQUFjRCxPQUFYNUIsU0FBUSxLQUFNLE9BQUg0QixLQUN4QnZCLElBQUksQ0FBQztZQUNKaEIsWUFBWXlDLENBQUFBLGVBQWdCQSxhQUFhZCxNQUFNLENBQUNDLENBQUFBLFVBQVdBLFFBQVFXLEVBQUUsS0FBS0E7WUFDMUVyQyxvQkFBb0J3QyxDQUFBQSxlQUFnQkEsYUFBYWYsTUFBTSxDQUFDQyxDQUFBQSxVQUFXQSxRQUFRVyxFQUFFLEtBQUtBO1FBQ3BGLEdBQ0NwQixLQUFLLENBQUNDLENBQUFBLFFBQVNDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO0lBQzlEO0lBRUEscUJBQ0UsOERBQUN1QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXFCOzs7Ozs7MEJBR25DLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ25CLDhEQUFDRTt3QkFDQ0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBTzlDO3dCQUNQK0MsVUFBVSxDQUFDQyxJQUFNL0MsY0FBYytDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDN0NMLFdBQVU7Ozs7OztrQ0FFWiw4REFBQ0U7d0JBQ0NDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE9BQU81Qzt3QkFDUDZDLFVBQVUsQ0FBQ0MsSUFBTTdDLGtCQUFrQjZDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDakRMLFdBQVU7Ozs7OztrQ0FFWiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FDQ0MsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsT0FBTzFDO2dDQUNQMkMsVUFBVSxDQUFDQyxJQUFNM0MsWUFBWTJDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQ0FDM0NMLFdBQVU7Ozs7OzswQ0FFWiw4REFBQ0U7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLE9BQU94QztnQ0FDUHlDLFVBQVUsQ0FBQ0MsSUFBTXpDLFlBQVl5QyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQzNDTCxXQUFVOzs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUNTO3dCQUNDQyxTQUFTOUI7d0JBQ1RvQixXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7MEJBU0csOERBQUMvQyx1REFBWUE7Z0JBQUNJLGtCQUFrQkE7Ozs7OzswQkFHaEMsOERBQUMwQztnQkFBSUMsV0FBVTswQkFDWjNDLGlCQUFpQnNELEdBQUcsQ0FBQzNCLENBQUFBLHdCQUNwQiw4REFBQ2U7d0JBQXFCQyxXQUFVOzswQ0FDOUIsOERBQUNZO2dDQUFHWixXQUFVOzBDQUFXaEIsUUFBUUUsSUFBSTs7Ozs7OzBDQUNyQyw4REFBQzJCOztvQ0FBRTtvQ0FBVzdCLFFBQVFNLFFBQVE7Ozs7Ozs7MENBQzlCLDhEQUFDdUI7O29DQUFFO29DQUFTN0IsUUFBUVEsS0FBSyxDQUFDc0IsT0FBTyxDQUFDOzs7Ozs7OzBDQUNsQyw4REFBQ2Y7O2tEQUNDLDhEQUFDbEQsa0RBQUlBO3dDQUFDa0UsSUFBSSxpQkFBNEIsT0FBWC9CLFFBQVFXLEVBQUU7d0NBQUlLLFdBQVU7a0RBQWdCOzs7Ozs7a0RBQ25FLDhEQUFDUzt3Q0FBT0MsU0FBUyxJQUFNaEIsY0FBY1YsUUFBUVcsRUFBRTt3Q0FBR0ssV0FBVTtrREFBb0I7Ozs7Ozs7Ozs7Ozs7dUJBTjFFaEIsUUFBUVcsRUFBRTs7Ozs7Ozs7OzswQkFjeEIsOERBQUNJO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDbkQsa0RBQUlBO29CQUFDa0UsSUFBRztvQkFBZWYsV0FBVTs4QkFBc0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhGO0dBekh3QjlDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9kdWN0LmpzeD83MWIxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFRvdGFsUHJvZHVjdCB9IGZyb20gJy4vVG90YWxQcm9kdWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RMaXN0KCkge1xyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZFByb2R1Y3RzLCBzZXRGaWx0ZXJlZFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbmFtZUZpbHRlciwgc2V0TmFtZUZpbHRlcl0gPSB1c2VTdGF0ZShcIlwiKTsgLy8gU3RhdGUgZm9yIG5hbWUgZmlsdGVyXHJcbiAgY29uc3QgW2NhdGVnb3J5RmlsdGVyLCBzZXRDYXRlZ29yeUZpbHRlcl0gPSB1c2VTdGF0ZShcIlwiKTsgLy8gU3RhdGUgZm9yIGNhdGVnb3J5IGZpbHRlclxyXG4gIGNvbnN0IFttaW5QcmljZSwgc2V0TWluUHJpY2VdID0gdXNlU3RhdGUoXCJcIik7IC8vIFN0YXRlIGZvciBtaW5pbXVtIHByaWNlXHJcbiAgY29uc3QgW21heFByaWNlLCBzZXRNYXhQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTsgLy8gU3RhdGUgZm9yIG1heGltdW0gcHJpY2VcclxuICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gRmV0Y2ggcHJvZHVjdHNcclxuICAgIGF4aW9zLmdldChgJHtBUElfVVJMfWApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBzZXRQcm9kdWN0cyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBzZXRGaWx0ZXJlZFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOiBcIiwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgXHJcbiAgLy8gQXBwbHkgZmlsdGVycyB3aGVuZXZlciB0aGUgZmlsdGVyIHN0YXRlcyBjaGFuZ2VcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHNldFRpbWVvdXQoYXBwbHlGaWx0ZXJzLCAzMDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChoYW5kbGVyKTtcclxuICB9LCBbbmFtZUZpbHRlciwgY2F0ZWdvcnlGaWx0ZXIsIG1pblByaWNlLCBtYXhQcmljZSwgcHJvZHVjdHNdKTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gYXBwbHkgZmlsdGVyc1xyXG4gIGNvbnN0IGFwcGx5RmlsdGVycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZpbHRlcmVkID0gcHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4ge1xyXG4gICAgICBjb25zdCB3aXRoaW5OYW1lID0gcHJvZHVjdC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobmFtZUZpbHRlci50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgY29uc3Qgd2l0aGluQ2F0ZWdvcnkgPSBwcm9kdWN0LmNhdGVnb3J5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoY2F0ZWdvcnlGaWx0ZXIudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgIGNvbnN0IHdpdGhpblByaWNlUmFuZ2UgPSAobWluUHJpY2UgPT09IFwiXCIgfHwgcHJvZHVjdC5wcmljZSA+PSBwYXJzZUZsb2F0KG1pblByaWNlKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWF4UHJpY2UgPT09IFwiXCIgfHwgcHJvZHVjdC5wcmljZSA8PSBwYXJzZUZsb2F0KG1heFByaWNlKSk7XHJcbiAgICAgIHJldHVybiB3aXRoaW5OYW1lICYmIHdpdGhpbkNhdGVnb3J5ICYmIHdpdGhpblByaWNlUmFuZ2U7XHJcbiAgICB9KTtcclxuICAgIHNldEZpbHRlcmVkUHJvZHVjdHMoZmlsdGVyZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVByb2R1Y3QgPSAoaWQpID0+IHtcclxuICAgIGF4aW9zLmRlbGV0ZShgJHtBUElfVVJMfS8ke2lkfWApXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBzZXRQcm9kdWN0cyhwcmV2UHJvZHVjdHMgPT4gcHJldlByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QuaWQgIT09IGlkKSk7XHJcbiAgICAgICAgc2V0RmlsdGVyZWRQcm9kdWN0cyhwcmV2RmlsdGVyZWQgPT4gcHJldkZpbHRlcmVkLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QuaWQgIT09IGlkKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgcHJvZHVjdDogXCIsIGVycm9yKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5Qcm9kdWN0IExpc3Q8L2gxPlxyXG5cclxuICAgICAgey8qIEZpbHRlciBJbnB1dHMgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBzcGFjZS14LTIgbWQ6c3BhY2UteS0yIFwiPlxyXG4gIDxpbnB1dFxyXG4gICAgdHlwZT1cInRleHRcIlxyXG4gICAgcGxhY2Vob2xkZXI9XCJGaWx0ZXIgYnkgbmFtZVwiXHJcbiAgICB2YWx1ZT17bmFtZUZpbHRlcn1cclxuICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZUZpbHRlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICBjbGFzc05hbWU9XCJib3JkZXIgcC0yIHJvdW5kZWQgdy1mdWxsIG1kOnctYXV0b1wiXHJcbiAgLz5cclxuICA8aW5wdXRcclxuICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIHBsYWNlaG9sZGVyPVwiRmlsdGVyIGJ5IGNhdGVnb3J5XCJcclxuICAgIHZhbHVlPXtjYXRlZ29yeUZpbHRlcn1cclxuICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2F0ZWdvcnlGaWx0ZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgY2xhc3NOYW1lPVwiYm9yZGVyIHAtMiByb3VuZGVkIHctZnVsbCBtZDp3LWF1dG9cIlxyXG4gIC8+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHNwYWNlLXgtMiBcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgcGxhY2Vob2xkZXI9XCJNaW4gUHJpY2VcIlxyXG4gICAgICB2YWx1ZT17bWluUHJpY2V9XHJcbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWluUHJpY2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICBjbGFzc05hbWU9XCJib3JkZXIgcC0yIHJvdW5kZWQgdy1mdWxsIG1kOnctYXV0b1wiXHJcbiAgICAvPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICBwbGFjZWhvbGRlcj1cIk1heCBQcmljZVwiXHJcbiAgICAgIHZhbHVlPXttYXhQcmljZX1cclxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNYXhQcmljZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBwLTIgcm91bmRlZCB3LWZ1bGwgbWQ6dy1hdXRvXCJcclxuICAgIC8+XHJcbiAgPC9kaXY+XHJcbiAgPGJ1dHRvblxyXG4gICAgb25DbGljaz17YXBwbHlGaWx0ZXJzfVxyXG4gICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZCB3LWZ1bGwgbWQ6dy1hdXRvXCJcclxuICA+XHJcbiAgICBBcHBseSBGaWx0ZXJzXHJcbiAgPC9idXR0b24+XHJcbjwvZGl2PlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgey8qIEJ1dHRvbiB0byBzaG93IHRvdGFsIHByaWNlICovfVxyXG4gICAgICA8VG90YWxQcm9kdWN0IGZpbHRlcmVkUHJvZHVjdHM9e2ZpbHRlcmVkUHJvZHVjdHN9IC8+XHJcblxyXG4gICAgICB7LyogUHJvZHVjdCBMaXN0ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTRcIj5cclxuICAgICAgICB7ZmlsdGVyZWRQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdC5pZH0gY2xhc3NOYW1lPVwicHJvZHVjdCBib3JkZXIgcC00IHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGxcIj57cHJvZHVjdC5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIDxwPkNhdGVnb3J5OiB7cHJvZHVjdC5jYXRlZ29yeX08L3A+XHJcbiAgICAgICAgICAgIDxwPlByaWNlOiAke3Byb2R1Y3QucHJpY2UudG9GaXhlZCgyKX08L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89e2AvZWRpdC1wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+RWRpdDwvTGluaz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVByb2R1Y3QocHJvZHVjdC5pZCl9IGNsYXNzTmFtZT1cIm1sLTQgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTZcIj5cclxuICAgICAgICA8TGluayB0bz1cIi9hZGQtcHJvZHVjdFwiIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkXCI+XHJcbiAgICAgICAgICBBZGQgTmV3IFByb2R1Y3RcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJUb3RhbFByb2R1Y3QiLCJQcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJmaWx0ZXJlZFByb2R1Y3RzIiwic2V0RmlsdGVyZWRQcm9kdWN0cyIsIm5hbWVGaWx0ZXIiLCJzZXROYW1lRmlsdGVyIiwiY2F0ZWdvcnlGaWx0ZXIiLCJzZXRDYXRlZ29yeUZpbHRlciIsIm1pblByaWNlIiwic2V0TWluUHJpY2UiLCJtYXhQcmljZSIsInNldE1heFByaWNlIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlciIsInNldFRpbWVvdXQiLCJhcHBseUZpbHRlcnMiLCJjbGVhclRpbWVvdXQiLCJmaWx0ZXJlZCIsImZpbHRlciIsInByb2R1Y3QiLCJ3aXRoaW5OYW1lIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ3aXRoaW5DYXRlZ29yeSIsImNhdGVnb3J5Iiwid2l0aGluUHJpY2VSYW5nZSIsInByaWNlIiwicGFyc2VGbG9hdCIsImRlbGV0ZVByb2R1Y3QiLCJpZCIsImRlbGV0ZSIsInByZXZQcm9kdWN0cyIsInByZXZGaWx0ZXJlZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJoMiIsInAiLCJ0b0ZpeGVkIiwidG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Product.jsx\n"));

/***/ })

});