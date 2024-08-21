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

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/.pnpm/axios@1.7.4/node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [origin, setOrigin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [destination, setDestination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [distance, setDistance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [fuelCost, setFuelCost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fuelConsumption = 8.5; // Consommation en litres/100 km pour un Mercedes GLE 350\n    const fuelPrice = 1.8; // Prix du litre de carburant en euros\n    const getDistance = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/get-distance?origin=\".concat(encodeURIComponent(origin), \"&destination=\").concat(encodeURIComponent(destination)));\n            const distanceInKm = response.data.distance;\n            setDistance(distanceInKm);\n            // Calcul du coût en carburant\n            const cost = distanceInKm / 100 * fuelConsumption * fuelPrice;\n            setFuelCost(cost.toFixed(2)); // Coût en euros, arrondi à deux décimales\n        } catch (error) {\n            console.error(\"Erreur lors de la r\\xe9cup\\xe9ration de la distance:\", error);\n            setError(\"Erreur ou ville non trouv\\xe9e\");\n        }\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setDistance(null);\n        setFuelCost(null);\n        setError(null);\n        getDistance();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col items-center justify-center p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/img/map.jpg\",\n                alt: \"Map\",\n                className: \"w-50 h-50 rounded-full mb-2\"\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold text-center mt-8 mb-16\",\n                children: \"Calculateur de distance\"\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"bg-white p-8 rounded-xl shadow-md shadow-gray-400 w-full max-w-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block text-gray-700 text-sm font-bold mb-2\",\n                        children: [\n                            \"Ville de d\\xe9part :\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: origin,\n                                onChange: (e)=>setOrigin(e.target.value),\n                                required: true,\n                                className: \"mt-2 p-3 border rounded w-full\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block text-gray-700 text-sm font-bold mb-2 mt-4\",\n                        children: [\n                            \"Ville d'arriv\\xe9e :\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: destination,\n                                onChange: (e)=>setDestination(e.target.value),\n                                required: true,\n                                className: \"mt-2 p-3 border rounded w-full\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-sm shadow-black mt-4 w-full\",\n                        children: \"Calculer\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            distance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 text-xl text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-4\",\n                        children: [\n                            \"Distance de \",\n                            origin,\n                            \" \\xe0 \",\n                            destination,\n                            \": \",\n                            distance,\n                            \" km\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                        lineNumber: 91,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Co\\xfbt en carburant : \",\n                            fuelCost,\n                            \" €\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                        lineNumber: 94,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                lineNumber: 90,\n                columnNumber: 17\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-8 text-lg text-red-500\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                lineNumber: 97,\n                columnNumber: 23\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"jwNVoJYm1UlrLb15f3Qtg/e+Sps=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRWlDO0FBQ1A7QUFFWCxTQUFTRTs7SUFDcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ssYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNYSxrQkFBa0IsS0FBSyx5REFBeUQ7SUFDdEYsTUFBTUMsWUFBWSxLQUFLLHNDQUFzQztJQUU3RCxNQUFNQyxjQUFjO1FBQ2hCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1mLDZDQUFLQSxDQUFDZ0IsR0FBRyxDQUM1Qiw0QkFFaUJDLE9BRldBLG1CQUN4QmYsU0FDRixpQkFBK0MsT0FBaENlLG1CQUFtQmI7WUFFeEMsTUFBTWMsZUFBZUgsU0FBU0ksSUFBSSxDQUFDYixRQUFRO1lBRTNDQyxZQUFZVztZQUVaLDhCQUE4QjtZQUM5QixNQUFNRSxPQUFPLGVBQWdCLE1BQU9SLGtCQUFrQkM7WUFDdERKLFlBQVlXLEtBQUtDLE9BQU8sQ0FBQyxLQUFLLDBDQUEwQztRQUM1RSxFQUFFLE9BQU9YLE9BQU87WUFDWlksUUFBUVosS0FBSyxDQUNULHdEQUNBQTtZQUVKQyxTQUFTO1FBQ2I7SUFDSjtJQUVBLE1BQU1ZLGVBQWUsQ0FBQ0M7UUFDbEJBLEVBQUVDLGNBQWM7UUFDaEJsQixZQUFZO1FBQ1pFLFlBQVk7UUFDWkUsU0FBUztRQUNURztJQUNKO0lBRUEscUJBQ0ksOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFDR0MsS0FBSTtnQkFDSkMsS0FBSTtnQkFDSkgsV0FBVTs7Ozs7OzBCQUdkLDhEQUFDSTtnQkFBR0osV0FBVTswQkFBNEM7Ozs7OzswQkFHMUQsOERBQUNLO2dCQUNHQyxVQUFVVjtnQkFDVkksV0FBVTs7a0NBRVYsOERBQUNPO3dCQUFNUCxXQUFVOzs0QkFBNkM7MENBRTFELDhEQUFDUTtnQ0FDR0MsTUFBSztnQ0FDTEMsT0FBT25DO2dDQUNQb0MsVUFBVSxDQUFDZCxJQUFNckIsVUFBVXFCLEVBQUVlLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDekNHLFFBQVE7Z0NBQ1JiLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FHbEIsOERBQUNPO3dCQUFNUCxXQUFVOzs0QkFBa0Q7MENBRS9ELDhEQUFDUTtnQ0FDR0MsTUFBSztnQ0FDTEMsT0FBT2pDO2dDQUNQa0MsVUFBVSxDQUFDZCxJQUFNbkIsZUFBZW1CLEVBQUVlLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDOUNHLFFBQVE7Z0NBQ1JiLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FHbEIsOERBQUNjO3dCQUNHTCxNQUFLO3dCQUNMVCxXQUFVO2tDQUNiOzs7Ozs7Ozs7Ozs7WUFJSnJCLDBCQUNHLDhEQUFDb0I7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDZTt3QkFBRWYsV0FBVTs7NEJBQU87NEJBQ0h6Qjs0QkFBTzs0QkFBSUU7NEJBQVk7NEJBQUdFOzRCQUFTOzs7Ozs7O2tDQUVwRCw4REFBQ29DOzs0QkFBRTs0QkFBcUJsQzs0QkFBUzs7Ozs7Ozs7Ozs7OztZQUd4Q0UsdUJBQVMsOERBQUNnQztnQkFBRWYsV0FBVTswQkFBNkJqQjs7Ozs7Ozs7Ozs7O0FBR2hFO0dBOUZ3QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW29yaWdpbiwgc2V0T3JpZ2luXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtkZXN0aW5hdGlvbiwgc2V0RGVzdGluYXRpb25dID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2Rpc3RhbmNlLCBzZXREaXN0YW5jZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZnVlbENvc3QsIHNldEZ1ZWxDb3N0XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBmdWVsQ29uc3VtcHRpb24gPSA4LjU7IC8vIENvbnNvbW1hdGlvbiBlbiBsaXRyZXMvMTAwIGttIHBvdXIgdW4gTWVyY2VkZXMgR0xFIDM1MFxuICAgIGNvbnN0IGZ1ZWxQcmljZSA9IDEuODsgLy8gUHJpeCBkdSBsaXRyZSBkZSBjYXJidXJhbnQgZW4gZXVyb3NcblxuICAgIGNvbnN0IGdldERpc3RhbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICAgICAgICAgYC9hcGkvZ2V0LWRpc3RhbmNlP29yaWdpbj0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luXG4gICAgICAgICAgICAgICAgKX0mZGVzdGluYXRpb249JHtlbmNvZGVVUklDb21wb25lbnQoZGVzdGluYXRpb24pfWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZUluS20gPSByZXNwb25zZS5kYXRhLmRpc3RhbmNlO1xuXG4gICAgICAgICAgICBzZXREaXN0YW5jZShkaXN0YW5jZUluS20pO1xuXG4gICAgICAgICAgICAvLyBDYWxjdWwgZHUgY2/Du3QgZW4gY2FyYnVyYW50XG4gICAgICAgICAgICBjb25zdCBjb3N0ID0gKGRpc3RhbmNlSW5LbSAvIDEwMCkgKiBmdWVsQ29uc3VtcHRpb24gKiBmdWVsUHJpY2U7XG4gICAgICAgICAgICBzZXRGdWVsQ29zdChjb3N0LnRvRml4ZWQoMikpOyAvLyBDb8O7dCBlbiBldXJvcywgYXJyb25kaSDDoCBkZXV4IGTDqWNpbWFsZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgXCJFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkZSBsYSBkaXN0YW5jZTpcIixcbiAgICAgICAgICAgICAgICBlcnJvclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNldEVycm9yKFwiRXJyZXVyIG91IHZpbGxlIG5vbiB0cm91dsOpZVwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldERpc3RhbmNlKG51bGwpO1xuICAgICAgICBzZXRGdWVsQ29zdChudWxsKTtcbiAgICAgICAgc2V0RXJyb3IobnVsbCk7XG4gICAgICAgIGdldERpc3RhbmNlKCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNFwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvbWFwLmpwZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiTWFwXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTUwIGgtNTAgcm91bmRlZC1mdWxsIG1iLTJcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtdC04IG1iLTE2XCI+XG4gICAgICAgICAgICAgICAgQ2FsY3VsYXRldXIgZGUgZGlzdGFuY2VcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC04IHJvdW5kZWQteGwgc2hhZG93LW1kIHNoYWRvdy1ncmF5LTQwMCB3LWZ1bGwgbWF4LXctbWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgVmlsbGUgZGUgZMOpcGFydCA6XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29yaWdpbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0T3JpZ2luKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHAtMyBib3JkZXIgcm91bmRlZCB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMiBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIFZpbGxlIGQnYXJyaXbDqWUgOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXN0aW5hdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzdGluYXRpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgcC0zIGJvcmRlciByb3VuZGVkIHctZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsIHNoYWRvdy1zbSBzaGFkb3ctYmxhY2sgbXQtNCB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ2FsY3VsZXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIHtkaXN0YW5jZSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHRleHQteGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzdGFuY2UgZGUge29yaWdpbn0gw6Age2Rlc3RpbmF0aW9ufToge2Rpc3RhbmNlfSBrbVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNvw7t0IGVuIGNhcmJ1cmFudCA6IHtmdWVsQ29zdH0g4oKsPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJtdC04IHRleHQtbGcgdGV4dC1yZWQtNTAwXCI+e2Vycm9yfTwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIkhvbWUiLCJvcmlnaW4iLCJzZXRPcmlnaW4iLCJkZXN0aW5hdGlvbiIsInNldERlc3RpbmF0aW9uIiwiZGlzdGFuY2UiLCJzZXREaXN0YW5jZSIsImZ1ZWxDb3N0Iiwic2V0RnVlbENvc3QiLCJlcnJvciIsInNldEVycm9yIiwiZnVlbENvbnN1bXB0aW9uIiwiZnVlbFByaWNlIiwiZ2V0RGlzdGFuY2UiLCJyZXNwb25zZSIsImdldCIsImVuY29kZVVSSUNvbXBvbmVudCIsImRpc3RhbmNlSW5LbSIsImRhdGEiLCJjb3N0IiwidG9GaXhlZCIsImNvbnNvbGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwiYnV0dG9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});