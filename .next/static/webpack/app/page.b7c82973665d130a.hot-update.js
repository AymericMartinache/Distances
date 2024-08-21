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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/.pnpm/axios@1.7.4/node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [origin, setOrigin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // Nouveau champ pour la ville de départ\n    const [destination, setDestination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [distance, setDistance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [fuelCost, setFuelCost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fuelConsumption = 8.5; // Consommation en litres/100 km\n    const fuelPrice = 1.8; // Prix du litre de carburant en euros\n    const getDistance = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/get-distance?origin=\".concat(encodeURIComponent(origin), \"&destination=\").concat(encodeURIComponent(destination)));\n            const distanceInKm = response.data.distance;\n            setDistance(distanceInKm);\n            // Calcul du coût en carburant\n            const cost = distanceInKm / 100 * fuelConsumption * fuelPrice;\n            setFuelCost(cost.toFixed(2)); // Coût en euros, arrondi à deux décimales\n        } catch (error) {\n            console.error(\"Erreur lors de la r\\xe9cup\\xe9ration de la distance:\", error);\n            setError(\"Erreur ou ville non trouv\\xe9e\");\n        }\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setDistance(null);\n        setFuelCost(null);\n        setError(null);\n        getDistance();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold text-center mt-8 mb-16\",\n                children: \"Calculateur de distance et co\\xfbt en carburant\"\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"bg-white p-8 rounded shadow-md w-full max-w-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block text-gray-700 text-sm font-bold mb-2\",\n                        children: [\n                            \"Ville de d\\xe9part :\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: origin,\n                                onChange: (e)=>setOrigin(e.target.value),\n                                required: true,\n                                className: \"mt-2 p-3 border rounded w-full\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block text-gray-700 text-sm font-bold mb-2 mt-4\",\n                        children: [\n                            \"Ville d'arriv\\xe9e :\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: destination,\n                                onChange: (e)=>setDestination(e.target.value),\n                                required: true,\n                                className: \"mt-2 p-3 border rounded w-full\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                                lineNumber: 68,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 w-full\",\n                        children: \"Calculer la distance et le co\\xfbt en carburant\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            distance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 text-lg text-green-500\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Distance de \",\n                            origin,\n                            \" \\xe0 \",\n                            destination,\n                            \": \",\n                            distance,\n                            \" km\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                        lineNumber: 85,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Co\\xfbt en carburant : \",\n                            fuelCost,\n                            \" €\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                        lineNumber: 88,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                lineNumber: 84,\n                columnNumber: 17\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-8 text-lg text-red-500\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                lineNumber: 91,\n                columnNumber: 23\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"jwNVoJYm1UlrLb15f3Qtg/e+Sps=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRWlDO0FBQ1A7QUFFWCxTQUFTRTs7SUFDcEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDLEtBQUssd0NBQXdDO0lBQ2xGLE1BQU0sQ0FBQ0ssYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNYSxrQkFBa0IsS0FBSyxnQ0FBZ0M7SUFDN0QsTUFBTUMsWUFBWSxLQUFLLHNDQUFzQztJQUU3RCxNQUFNQyxjQUFjO1FBQ2hCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1mLDZDQUFLQSxDQUFDZ0IsR0FBRyxDQUM1Qiw0QkFFaUJDLE9BRldBLG1CQUN4QmYsU0FDRixpQkFBK0MsT0FBaENlLG1CQUFtQmI7WUFFeEMsTUFBTWMsZUFBZUgsU0FBU0ksSUFBSSxDQUFDYixRQUFRO1lBRTNDQyxZQUFZVztZQUVaLDhCQUE4QjtZQUM5QixNQUFNRSxPQUFPLGVBQWdCLE1BQU9SLGtCQUFrQkM7WUFDdERKLFlBQVlXLEtBQUtDLE9BQU8sQ0FBQyxLQUFLLDBDQUEwQztRQUM1RSxFQUFFLE9BQU9YLE9BQU87WUFDWlksUUFBUVosS0FBSyxDQUNULHdEQUNBQTtZQUVKQyxTQUFTO1FBQ2I7SUFDSjtJQUVBLE1BQU1ZLGVBQWUsQ0FBQ0M7UUFDbEJBLEVBQUVDLGNBQWM7UUFDaEJsQixZQUFZO1FBQ1pFLFlBQVk7UUFDWkUsU0FBUztRQUNURztJQUNKO0lBRUEscUJBQ0ksOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBNEM7Ozs7OzswQkFHMUQsOERBQUNFO2dCQUNHQyxVQUFVUDtnQkFDVkksV0FBVTs7a0NBRVYsOERBQUNJO3dCQUFNSixXQUFVOzs0QkFBNkM7MENBRTFELDhEQUFDSztnQ0FDR0MsTUFBSztnQ0FDTEMsT0FBT2hDO2dDQUNQaUMsVUFBVSxDQUFDWCxJQUFNckIsVUFBVXFCLEVBQUVZLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDekNHLFFBQVE7Z0NBQ1JWLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FHbEIsOERBQUNJO3dCQUFNSixXQUFVOzs0QkFBa0Q7MENBRS9ELDhEQUFDSztnQ0FDR0MsTUFBSztnQ0FDTEMsT0FBTzlCO2dDQUNQK0IsVUFBVSxDQUFDWCxJQUFNbkIsZUFBZW1CLEVBQUVZLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDOUNHLFFBQVE7Z0NBQ1JWLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FHbEIsOERBQUNXO3dCQUNHTCxNQUFLO3dCQUNMTixXQUFVO2tDQUNiOzs7Ozs7Ozs7Ozs7WUFJSnJCLDBCQUNHLDhEQUFDb0I7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDWTs7NEJBQUU7NEJBQ2NyQzs0QkFBTzs0QkFBSUU7NEJBQVk7NEJBQUdFOzRCQUFTOzs7Ozs7O2tDQUVwRCw4REFBQ2lDOzs0QkFBRTs0QkFBcUIvQjs0QkFBUzs7Ozs7Ozs7Ozs7OztZQUd4Q0UsdUJBQVMsOERBQUM2QjtnQkFBRVosV0FBVTswQkFBNkJqQjs7Ozs7Ozs7Ozs7O0FBR2hFO0dBeEZ3QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW29yaWdpbiwgc2V0T3JpZ2luXSA9IHVzZVN0YXRlKFwiXCIpOyAvLyBOb3V2ZWF1IGNoYW1wIHBvdXIgbGEgdmlsbGUgZGUgZMOpcGFydFxuICAgIGNvbnN0IFtkZXN0aW5hdGlvbiwgc2V0RGVzdGluYXRpb25dID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2Rpc3RhbmNlLCBzZXREaXN0YW5jZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZnVlbENvc3QsIHNldEZ1ZWxDb3N0XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBmdWVsQ29uc3VtcHRpb24gPSA4LjU7IC8vIENvbnNvbW1hdGlvbiBlbiBsaXRyZXMvMTAwIGttXG4gICAgY29uc3QgZnVlbFByaWNlID0gMS44OyAvLyBQcml4IGR1IGxpdHJlIGRlIGNhcmJ1cmFudCBlbiBldXJvc1xuXG4gICAgY29uc3QgZ2V0RGlzdGFuY2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgICAgICAgICBgL2FwaS9nZXQtZGlzdGFuY2U/b3JpZ2luPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5cbiAgICAgICAgICAgICAgICApfSZkZXN0aW5hdGlvbj0ke2VuY29kZVVSSUNvbXBvbmVudChkZXN0aW5hdGlvbil9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlSW5LbSA9IHJlc3BvbnNlLmRhdGEuZGlzdGFuY2U7XG5cbiAgICAgICAgICAgIHNldERpc3RhbmNlKGRpc3RhbmNlSW5LbSk7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bCBkdSBjb8O7dCBlbiBjYXJidXJhbnRcbiAgICAgICAgICAgIGNvbnN0IGNvc3QgPSAoZGlzdGFuY2VJbkttIC8gMTAwKSAqIGZ1ZWxDb25zdW1wdGlvbiAqIGZ1ZWxQcmljZTtcbiAgICAgICAgICAgIHNldEZ1ZWxDb3N0KGNvc3QudG9GaXhlZCgyKSk7IC8vIENvw7t0IGVuIGV1cm9zLCBhcnJvbmRpIMOgIGRldXggZMOpY2ltYWxlc1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICBcIkVycmV1ciBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGRlIGxhIGRpc3RhbmNlOlwiLFxuICAgICAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgc2V0RXJyb3IoXCJFcnJldXIgb3UgdmlsbGUgbm9uIHRyb3V2w6llXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0RGlzdGFuY2UobnVsbCk7XG4gICAgICAgIHNldEZ1ZWxDb3N0KG51bGwpO1xuICAgICAgICBzZXRFcnJvcihudWxsKTtcbiAgICAgICAgZ2V0RGlzdGFuY2UoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgbXQtOCBtYi0xNlwiPlxuICAgICAgICAgICAgICAgIENhbGN1bGF0ZXVyIGRlIGRpc3RhbmNlIGV0IGNvw7t0IGVuIGNhcmJ1cmFudFxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTggcm91bmRlZCBzaGFkb3ctbWQgdy1mdWxsIG1heC13LW1kXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIFZpbGxlIGRlIGTDqXBhcnQgOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcmlnaW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE9yaWdpbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBwLTMgYm9yZGVyIHJvdW5kZWQgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICBWaWxsZSBkJ2Fycml2w6llIDpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzdGluYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc3RpbmF0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHAtMyBib3JkZXIgcm91bmRlZCB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgbXQtNCB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ2FsY3VsZXIgbGEgZGlzdGFuY2UgZXQgbGUgY2/Du3QgZW4gY2FyYnVyYW50XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICB7ZGlzdGFuY2UgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LWxnIHRleHQtZ3JlZW4tNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzdGFuY2UgZGUge29yaWdpbn0gw6Age2Rlc3RpbmF0aW9ufToge2Rpc3RhbmNlfSBrbVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNvw7t0IGVuIGNhcmJ1cmFudCA6IHtmdWVsQ29zdH0g4oKsPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJtdC04IHRleHQtbGcgdGV4dC1yZWQtNTAwXCI+e2Vycm9yfTwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIkhvbWUiLCJvcmlnaW4iLCJzZXRPcmlnaW4iLCJkZXN0aW5hdGlvbiIsInNldERlc3RpbmF0aW9uIiwiZGlzdGFuY2UiLCJzZXREaXN0YW5jZSIsImZ1ZWxDb3N0Iiwic2V0RnVlbENvc3QiLCJlcnJvciIsInNldEVycm9yIiwiZnVlbENvbnN1bXB0aW9uIiwiZnVlbFByaWNlIiwiZ2V0RGlzdGFuY2UiLCJyZXNwb25zZSIsImdldCIsImVuY29kZVVSSUNvbXBvbmVudCIsImRpc3RhbmNlSW5LbSIsImRhdGEiLCJjb3N0IiwidG9GaXhlZCIsImNvbnNvbGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwiYnV0dG9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});