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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"(app-pages-browser)/./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _TotalProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TotalProduct */ \"(app-pages-browser)/./src/app/components/TotalProduct.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProductList() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // State for products\n    const [filteredProducts, setFilteredProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // State for filtered products\n    const [nameFilter, setNameFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for name filter\n    const [categoryFilter, setCategoryFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for category filter\n    const [minPrice, setMinPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for minimum price\n    const [maxPrice, setMaxPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for maximum price\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State for error messages\n    const API_URL = \"http://localhost:8080/api/products\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch products\n        const fetchProducts = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(API_URL));\n                setProducts(response.data);\n                setFilteredProducts(response.data);\n            } catch (error) {\n                setErrorMessage(\"Error fetching products. Please try again later.\");\n                console.error(\"Error fetching data: \", error);\n            }\n        };\n        fetchProducts();\n    }, []);\n    // Apply filters whenever the filter states change\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handler = setTimeout(applyFilters, 300);\n        return ()=>clearTimeout(handler);\n    }, [\n        nameFilter,\n        categoryFilter,\n        minPrice,\n        maxPrice,\n        products\n    ]);\n    // Function to apply filters\n    const applyFilters = ()=>{\n        try {\n            const filtered = products.filter((product)=>{\n                const withinName = product.name.toLowerCase().includes(nameFilter.toLowerCase());\n                const withinCategory = product.category.toLowerCase().includes(categoryFilter.toLowerCase());\n                const withinPriceRange = (minPrice === \"\" || product.price >= parseFloat(minPrice)) && (maxPrice === \"\" || product.price <= parseFloat(maxPrice));\n                return withinName && withinCategory && withinPriceRange;\n            });\n            setFilteredProducts(filtered);\n            setErrorMessage(\"\"); // Clear error message on successful filtering\n        } catch (error) {\n            setErrorMessage(\"Error applying filters. Please check your input.\");\n            console.error(\"Error applying filters: \", error);\n        }\n    };\n    const deleteProduct = async (id)=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].delete(\"\".concat(API_URL, \"/\").concat(id));\n            setProducts((prevProducts)=>prevProducts.filter((product)=>product.id !== id));\n            setFilteredProducts((prevFiltered)=>prevFiltered.filter((product)=>product.id !== id));\n            setErrorMessage(\"\"); // Clear error message on successful deletion\n        } catch (error) {\n            setErrorMessage(\"Error deleting product. Please try again.\");\n            console.error(\"Error deleting product: \", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold text-center\",\n                children: \"Product List\"\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-red-500 mb-4\",\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 75,\n                columnNumber: 24\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                        to: \"/add-product\",\n                        className: \"bg-blue-500 text-white p-2 rounded\",\n                        children: \"Add New Product\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TotalProduct__WEBPACK_IMPORTED_MODULE_2__.TotalProduct, {\n                            filteredProducts: filteredProducts\n                        }, void 0, false, {\n                            fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-3 mb-4 flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Filter by name\",\n                        value: nameFilter,\n                        onChange: (e)=>setNameFilter(e.target.value),\n                        className: \"text-black border p-2 rounded w-full md:w-1/3\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Filter by category\",\n                        value: categoryFilter,\n                        onChange: (e)=>setCategoryFilter(e.target.value),\n                        className: \"text-black border p-2 rounded w-full md:w-1/3\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                placeholder: \"Min Price\",\n                                value: minPrice,\n                                onChange: (e)=>setMinPrice(e.target.value),\n                                className: \"text-black border p-2 rounded w-full md:w-1/2\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                placeholder: \"Max Price\",\n                                value: maxPrice,\n                                onChange: (e)=>setMaxPrice(e.target.value),\n                                className: \"text-black border p-2 rounded w-full md:w-1/2\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: applyFilters,\n                        className: \"bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150\",\n                        children: \"Apply Filters\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8\",\n                children: filteredProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product bg-white bg-opacity-10 backdrop-blur-md p-4 rounded shadow-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl\",\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 137,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Category: \",\n                                    product.category\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 138,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Price: $\",\n                                    product.price.toFixed(2)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 139,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                                        to: \"/edit-product/\".concat(product.id),\n                                        className: \"text-blue-500\",\n                                        children: \"Edit\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                        lineNumber: 141,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>deleteProduct(product.id),\n                                        className: \"ml-4 text-red-500\",\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                        lineNumber: 147,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                                lineNumber: 140,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, product.id, true, {\n                        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                        lineNumber: 133,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\cash_tracker_project\\\\frontend\\\\cash_tracker\\\\src\\\\app\\\\components\\\\Product.jsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductList, \"qlDkJEpa1x2wG3l2ZQG6c2OfmFk=\");\n_c = ProductList;\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9kdWN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDd0M7QUFDSTtBQUNsQjtBQUNvQjtBQUUvQixTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUUsR0FBRyxxQkFBcUI7SUFDbkUsTUFBTSxDQUFDTyxrQkFBa0JDLG9CQUFvQixHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFLEdBQUcsOEJBQThCO0lBQzVGLE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLLHdCQUF3QjtJQUMxRSxNQUFNLENBQUNXLGdCQUFnQkMsa0JBQWtCLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUssNEJBQTRCO0lBQ3RGLE1BQU0sQ0FBQ2EsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQyxLQUFLLDBCQUEwQjtJQUN4RSxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDLEtBQUssMEJBQTBCO0lBQ3hFLE1BQU0sQ0FBQ2lCLGNBQWNDLGdCQUFnQixHQUFHbEIsK0NBQVFBLENBQUMsS0FBSywyQkFBMkI7SUFDakYsTUFBTW1CLFVBQVVDLG9DQUErQjtJQUUvQ25CLGdEQUFTQSxDQUFDO1FBQ1IsaUJBQWlCO1FBQ2pCLE1BQU1zQixnQkFBZ0I7WUFDcEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU10Qiw2Q0FBS0EsQ0FBQ3VCLEdBQUcsQ0FBQyxHQUFXLE9BQVJOO2dCQUNwQ2IsWUFBWWtCLFNBQVNFLElBQUk7Z0JBQ3pCbEIsb0JBQW9CZ0IsU0FBU0UsSUFBSTtZQUNuQyxFQUFFLE9BQU9DLE9BQU87Z0JBQ2RULGdCQUFnQjtnQkFDaEJVLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1lBQ3pDO1FBQ0Y7UUFFQUo7SUFDRixHQUFHLEVBQUU7SUFFTCxrREFBa0Q7SUFDbER0QixnREFBU0EsQ0FBQztR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LDhEQUFDVTt3QkFDQ0MsU0FBUy9CO3dCQUNUb0IsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7OzBCQU1ILDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWjVDLGlCQUFpQndELEdBQUcsQ0FBQzVCLENBQUFBLHdCQUNwQiw4REFBQ2U7d0JBRUNDLFdBQVU7OzBDQUVWLDhEQUFDYTtnQ0FBR2IsV0FBVTswQ0FBV2hCLFFBQVFFLElBQUk7Ozs7OzswQ0FDckMsOERBQUM0Qjs7b0NBQUU7b0NBQVc5QixRQUFRTSxRQUFROzs7Ozs7OzBDQUM5Qiw4REFBQ3dCOztvQ0FBRTtvQ0FBUzlCLFFBQVFRLEtBQUssQ0FBQ3VCLE9BQU8sQ0FBQzs7Ozs7OzswQ0FDbEMsOERBQUNoQjs7a0RBQ0MsOERBQUNuRCxrREFBSUE7d0NBQ0hzRCxJQUFJLGlCQUE0QixPQUFYbEIsUUFBUVcsRUFBRTt3Q0FDL0JLLFdBQVU7a0RBQ1g7Ozs7OztrREFHRCw4REFBQ1U7d0NBQ0NDLFNBQVMsSUFBTWpCLGNBQWNWLFFBQVFXLEVBQUU7d0NBQ3ZDSyxXQUFVO2tEQUNYOzs7Ozs7Ozs7Ozs7O3VCQWhCRWhCLFFBQVFXLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QjNCO0dBeEp3QjFDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9kdWN0LmpzeD83MWIxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFRvdGFsUHJvZHVjdCB9IGZyb20gJy4vVG90YWxQcm9kdWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RMaXN0KCkge1xyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pOyAvLyBTdGF0ZSBmb3IgcHJvZHVjdHNcclxuICBjb25zdCBbZmlsdGVyZWRQcm9kdWN0cywgc2V0RmlsdGVyZWRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7IC8vIFN0YXRlIGZvciBmaWx0ZXJlZCBwcm9kdWN0c1xyXG4gIGNvbnN0IFtuYW1lRmlsdGVyLCBzZXROYW1lRmlsdGVyXSA9IHVzZVN0YXRlKFwiXCIpOyAvLyBTdGF0ZSBmb3IgbmFtZSBmaWx0ZXJcclxuICBjb25zdCBbY2F0ZWdvcnlGaWx0ZXIsIHNldENhdGVnb3J5RmlsdGVyXSA9IHVzZVN0YXRlKFwiXCIpOyAvLyBTdGF0ZSBmb3IgY2F0ZWdvcnkgZmlsdGVyXHJcbiAgY29uc3QgW21pblByaWNlLCBzZXRNaW5QcmljZV0gPSB1c2VTdGF0ZShcIlwiKTsgLy8gU3RhdGUgZm9yIG1pbmltdW0gcHJpY2VcclxuICBjb25zdCBbbWF4UHJpY2UsIHNldE1heFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpOyAvLyBTdGF0ZSBmb3IgbWF4aW11bSBwcmljZVxyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTsgLy8gU3RhdGUgZm9yIGVycm9yIG1lc3NhZ2VzXHJcbiAgY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkw7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBGZXRjaCBwcm9kdWN0c1xyXG4gICAgY29uc3QgZmV0Y2hQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUElfVVJMfWApO1xyXG4gICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHNldEZpbHRlcmVkUHJvZHVjdHMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdHMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOiBcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoUHJvZHVjdHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIEFwcGx5IGZpbHRlcnMgd2hlbmV2ZXIgdGhlIGZpbHRlciBzdGF0ZXMgY2hhbmdlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSBzZXRUaW1lb3V0KGFwcGx5RmlsdGVycywgMzAwKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaGFuZGxlcik7XHJcbiAgfSwgW25hbWVGaWx0ZXIsIGNhdGVnb3J5RmlsdGVyLCBtaW5QcmljZSwgbWF4UHJpY2UsIHByb2R1Y3RzXSk7XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIGFwcGx5IGZpbHRlcnNcclxuICBjb25zdCBhcHBseUZpbHRlcnMgPSAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHtcclxuICAgICAgICBjb25zdCB3aXRoaW5OYW1lID0gcHJvZHVjdC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobmFtZUZpbHRlci50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICBjb25zdCB3aXRoaW5DYXRlZ29yeSA9IHByb2R1Y3QuY2F0ZWdvcnkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhjYXRlZ29yeUZpbHRlci50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICBjb25zdCB3aXRoaW5QcmljZVJhbmdlID0gKG1pblByaWNlID09PSBcIlwiIHx8IHByb2R1Y3QucHJpY2UgPj0gcGFyc2VGbG9hdChtaW5QcmljZSkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWF4UHJpY2UgPT09IFwiXCIgfHwgcHJvZHVjdC5wcmljZSA8PSBwYXJzZUZsb2F0KG1heFByaWNlKSk7XHJcbiAgICAgICAgcmV0dXJuIHdpdGhpbk5hbWUgJiYgd2l0aGluQ2F0ZWdvcnkgJiYgd2l0aGluUHJpY2VSYW5nZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEZpbHRlcmVkUHJvZHVjdHMoZmlsdGVyZWQpO1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7IC8vIENsZWFyIGVycm9yIG1lc3NhZ2Ugb24gc3VjY2Vzc2Z1bCBmaWx0ZXJpbmdcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIkVycm9yIGFwcGx5aW5nIGZpbHRlcnMuIFBsZWFzZSBjaGVjayB5b3VyIGlucHV0LlwiKTtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFwcGx5aW5nIGZpbHRlcnM6IFwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlUHJvZHVjdCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAke0FQSV9VUkx9LyR7aWR9YCk7XHJcbiAgICAgIHNldFByb2R1Y3RzKHByZXZQcm9kdWN0cyA9PiBwcmV2UHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCAhPT0gaWQpKTtcclxuICAgICAgc2V0RmlsdGVyZWRQcm9kdWN0cyhwcmV2RmlsdGVyZWQgPT4gcHJldkZpbHRlcmVkLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QuaWQgIT09IGlkKSk7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTsgLy8gQ2xlYXIgZXJyb3IgbWVzc2FnZSBvbiBzdWNjZXNzZnVsIGRlbGV0aW9uXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoXCJFcnJvciBkZWxldGluZyBwcm9kdWN0LiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIHByb2R1Y3Q6IFwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1jZW50ZXJcIj5Qcm9kdWN0IExpc3Q8L2gxPlxyXG4gICAgICBcclxuICAgICAgey8qIERpc3BsYXkgZXJyb3IgbWVzc2FnZSBpZiBleGlzdHMgKi99XHJcbiAgICAgIHtlcnJvck1lc3NhZ2UgJiYgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgbWItNFwiPntlcnJvck1lc3NhZ2V9PC9kaXY+fVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IGZsZXggZmxleC1jb2wgc3BhY2UteS00IG1kOmZsZXgtcm93IG1kOnNwYWNlLXgtNCBtZDpzcGFjZS15LTBcIj4gXHJcbiAgICAgICAgPExpbmsgXHJcbiAgICAgICAgICB0bz1cIi9hZGQtcHJvZHVjdFwiIFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIE5ldyBQcm9kdWN0XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIHsvKiBCdXR0b24gdG8gc2hvdyB0b3RhbCBwcmljZSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+IFxyXG4gICAgICAgICAgPFRvdGFsUHJvZHVjdCBmaWx0ZXJlZFByb2R1Y3RzPXtmaWx0ZXJlZFByb2R1Y3RzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBGaWx0ZXIgSW5wdXRzICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgbWItNCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOnNwYWNlLXgtMiBzcGFjZS15LTIgbWQ6c3BhY2UteS0wXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpbHRlciBieSBuYW1lXCJcclxuICAgICAgICAgIHZhbHVlPXtuYW1lRmlsdGVyfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lRmlsdGVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgYm9yZGVyIHAtMiByb3VuZGVkIHctZnVsbCBtZDp3LTEvM1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlsdGVyIGJ5IGNhdGVnb3J5XCJcclxuICAgICAgICAgIHZhbHVlPXtjYXRlZ29yeUZpbHRlcn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2F0ZWdvcnlGaWx0ZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBib3JkZXIgcC0yIHJvdW5kZWQgdy1mdWxsIG1kOnctMS8zXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBzcGFjZS15LTIgbWQ6c3BhY2UteS0wIG1kOnNwYWNlLXgtMiB3LWZ1bGxcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNaW4gUHJpY2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bWluUHJpY2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWluUHJpY2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGJvcmRlciBwLTIgcm91bmRlZCB3LWZ1bGwgbWQ6dy0xLzJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNYXggUHJpY2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bWF4UHJpY2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWF4UHJpY2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGJvcmRlciBwLTIgcm91bmRlZCB3LWZ1bGwgbWQ6dy0xLzJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXthcHBseUZpbHRlcnN9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IHJvdW5kZWQgc2hhZG93LW1kIGhvdmVyOmJnLWJsdWUtNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpyaW5nLW9wYWNpdHktNTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFwcGx5IEZpbHRlcnNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogUHJvZHVjdCBMaXN0ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTQgbXQtOFwiPlxyXG4gICAgICAgIHtmaWx0ZXJlZFByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcclxuICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH0gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QgYmctd2hpdGUgYmctb3BhY2l0eS0xMCBiYWNrZHJvcC1ibHVyLW1kIHAtNCByb3VuZGVkIHNoYWRvdy1sZ1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+e3Byb2R1Y3QubmFtZX08L2gyPlxyXG4gICAgICAgICAgICA8cD5DYXRlZ29yeToge3Byb2R1Y3QuY2F0ZWdvcnl9PC9wPlxyXG4gICAgICAgICAgICA8cD5QcmljZTogJHtwcm9kdWN0LnByaWNlLnRvRml4ZWQoMil9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgdG89e2AvZWRpdC1wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVByb2R1Y3QocHJvZHVjdC5pZCl9IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtNCB0ZXh0LXJlZC01MDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiVG90YWxQcm9kdWN0IiwiUHJvZHVjdExpc3QiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZmlsdGVyZWRQcm9kdWN0cyIsInNldEZpbHRlcmVkUHJvZHVjdHMiLCJuYW1lRmlsdGVyIiwic2V0TmFtZUZpbHRlciIsImNhdGVnb3J5RmlsdGVyIiwic2V0Q2F0ZWdvcnlGaWx0ZXIiLCJtaW5QcmljZSIsInNldE1pblByaWNlIiwibWF4UHJpY2UiLCJzZXRNYXhQcmljZSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImZldGNoUHJvZHVjdHMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVyIiwic2V0VGltZW91dCIsImFwcGx5RmlsdGVycyIsImNsZWFyVGltZW91dCIsImZpbHRlcmVkIiwiZmlsdGVyIiwicHJvZHVjdCIsIndpdGhpbk5hbWUiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIndpdGhpbkNhdGVnb3J5IiwiY2F0ZWdvcnkiLCJ3aXRoaW5QcmljZVJhbmdlIiwicHJpY2UiLCJwYXJzZUZsb2F0IiwiZGVsZXRlUHJvZHVjdCIsImlkIiwiZGVsZXRlIiwicHJldlByb2R1Y3RzIiwicHJldkZpbHRlcmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0byIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiaDIiLCJwIiwidG9GaXhlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Product.jsx\n"));

/***/ })

});