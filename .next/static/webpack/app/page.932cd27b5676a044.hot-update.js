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

/***/ "(app-pages-browser)/./public/img/map.jpg":
/*!****************************!*\
  !*** ./public/img/map.jpg ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/map.dc9ed896.jpg\",\"height\":1024,\"width\":1024,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap.dc9ed896.jpg&w=8&q=70\",\"blurWidth\":8,\"blurHeight\":8});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3B1YmxpYy9pbWcvbWFwLmpwZyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsQ0FBQyw0TEFBNEwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2ltZy9tYXAuanBnP2YwNjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL21lZGlhL21hcC5kYzllZDg5Ni5qcGdcIixcImhlaWdodFwiOjEwMjQsXCJ3aWR0aFwiOjEwMjQsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRm1lZGlhJTJGbWFwLmRjOWVkODk2LmpwZyZ3PTgmcT03MFwiLFwiYmx1cldpZHRoXCI6OCxcImJsdXJIZWlnaHRcIjo4fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./public/img/map.jpg\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/.pnpm/axios@1.7.4/node_modules/axios/lib/axios.js\");\n/* harmony import */ var _public_img_map_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/img/map.jpg */ \"(app-pages-browser)/./public/img/map.jpg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [origin, setOrigin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [destination, setDestination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [distance, setDistance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [fuelCost, setFuelCost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fuelConsumption = 8.5; // Consommation en litres/100 km pour un Mercedes GLE 350\n    const fuelPrice = 1.8; // Prix du litre de carburant en euros\n    const getDistance = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/get-distance?origin=\".concat(encodeURIComponent(origin), \"&destination=\").concat(encodeURIComponent(destination)));\n            const distanceInKm = response.data.distance;\n            setDistance(distanceInKm);\n            // Calcul du coût en carburant\n            const cost = distanceInKm / 100 * fuelConsumption * fuelPrice;\n            setFuelCost(cost.toFixed(2)); // Coût en euros, arrondi à deux décimales\n        } catch (error) {\n            console.error(\"Erreur lors de la r\\xe9cup\\xe9ration de la distance:\", error);\n            setError(\"Erreur ou ville non trouv\\xe9e\");\n        }\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setDistance(null);\n        setFuelCost(null);\n        setError(null);\n        getDistance();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col items-center justify-center p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: _public_img_map_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                alt: \"Map\",\n                className: \"w-32 h-32 rounded-full mb-4\"\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold text-center mt-8 mb-16\",\n                children: \"Calculateur de distance\"\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"bg-white p-8 rounded-xl shadow-md shadow-gray-400 w-full max-w-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block text-gray-700 text-sm font-bold mb-2\",\n                        children: [\n                            \"Ville de d\\xe9part :\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: origin,\n                                onChange: (e)=>setOrigin(e.target.value),\n                                required: true,\n                                className: \"mt-2 p-3 border rounded w-full\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block text-gray-700 text-sm font-bold mb-2 mt-4\",\n                        children: [\n                            \"Ville d'arriv\\xe9e :\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: destination,\n                                onChange: (e)=>setDestination(e.target.value),\n                                required: true,\n                                className: \"mt-2 p-3 border rounded w-full\"\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-sm shadow-black mt-4 w-full\",\n                        children: \"Calculer\"\n                    }, void 0, false, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            distance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 text-xl text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-4\",\n                        children: [\n                            \"Distance de \",\n                            origin,\n                            \" \\xe0 \",\n                            destination,\n                            \": \",\n                            distance,\n                            \" km\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                        lineNumber: 88,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Co\\xfbt en carburant : \",\n                            fuelCost,\n                            \" €\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                        lineNumber: 91,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                lineNumber: 87,\n                columnNumber: 17\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-8 text-lg text-red-500\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n                lineNumber: 94,\n                columnNumber: 23\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/Opti/Distances/src/app/page.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"jwNVoJYm1UlrLb15f3Qtg/e+Sps=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVpQztBQUNQO0FBQ2lCO0FBRTVCLFNBQVNHOztJQUNwQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1jLGtCQUFrQixLQUFLLHlEQUF5RDtJQUN0RixNQUFNQyxZQUFZLEtBQUssc0NBQXNDO0lBRTdELE1BQU1DLGNBQWM7UUFDaEIsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTWhCLDZDQUFLQSxDQUFDaUIsR0FBRyxDQUM1Qiw0QkFFaUJDLE9BRldBLG1CQUN4QmYsU0FDRixpQkFBK0MsT0FBaENlLG1CQUFtQmI7WUFFeEMsTUFBTWMsZUFBZUgsU0FBU0ksSUFBSSxDQUFDYixRQUFRO1lBRTNDQyxZQUFZVztZQUVaLDhCQUE4QjtZQUM5QixNQUFNRSxPQUFPLGVBQWdCLE1BQU9SLGtCQUFrQkM7WUFDdERKLFlBQVlXLEtBQUtDLE9BQU8sQ0FBQyxLQUFLLDBDQUEwQztRQUM1RSxFQUFFLE9BQU9YLE9BQU87WUFDWlksUUFBUVosS0FBSyxDQUNULHdEQUNBQTtZQUVKQyxTQUFTO1FBQ2I7SUFDSjtJQUVBLE1BQU1ZLGVBQWUsQ0FBQ0M7UUFDbEJBLEVBQUVDLGNBQWM7UUFDaEJsQixZQUFZO1FBQ1pFLFlBQVk7UUFDWkUsU0FBUztRQUNURztJQUNKO0lBRUEscUJBQ0ksOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBSUMsS0FBSzdCLDJEQUFHQTtnQkFBRThCLEtBQUk7Z0JBQU1ILFdBQVU7Ozs7OzswQkFFbkMsOERBQUNJO2dCQUFHSixXQUFVOzBCQUE0Qzs7Ozs7OzBCQUcxRCw4REFBQ0s7Z0JBQ0dDLFVBQVVWO2dCQUNWSSxXQUFVOztrQ0FFViw4REFBQ087d0JBQU1QLFdBQVU7OzRCQUE2QzswQ0FFMUQsOERBQUNRO2dDQUNHQyxNQUFLO2dDQUNMQyxPQUFPbkM7Z0NBQ1BvQyxVQUFVLENBQUNkLElBQU1yQixVQUFVcUIsRUFBRWUsTUFBTSxDQUFDRixLQUFLO2dDQUN6Q0csUUFBUTtnQ0FDUmIsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUdsQiw4REFBQ087d0JBQU1QLFdBQVU7OzRCQUFrRDswQ0FFL0QsOERBQUNRO2dDQUNHQyxNQUFLO2dDQUNMQyxPQUFPakM7Z0NBQ1BrQyxVQUFVLENBQUNkLElBQU1uQixlQUFlbUIsRUFBRWUsTUFBTSxDQUFDRixLQUFLO2dDQUM5Q0csUUFBUTtnQ0FDUmIsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUdsQiw4REFBQ2M7d0JBQ0dMLE1BQUs7d0JBQ0xULFdBQVU7a0NBQ2I7Ozs7Ozs7Ozs7OztZQUlKckIsMEJBQ0csOERBQUNvQjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNlO3dCQUFFZixXQUFVOzs0QkFBTzs0QkFDSHpCOzRCQUFPOzRCQUFJRTs0QkFBWTs0QkFBR0U7NEJBQVM7Ozs7Ozs7a0NBRXBELDhEQUFDb0M7OzRCQUFFOzRCQUFxQmxDOzRCQUFTOzs7Ozs7Ozs7Ozs7O1lBR3hDRSx1QkFBUyw4REFBQ2dDO2dCQUFFZixXQUFVOzBCQUE2QmpCOzs7Ozs7Ozs7Ozs7QUFHaEU7R0ExRndCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBNYXAgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWcvbWFwLmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFtvcmlnaW4sIHNldE9yaWdpbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbZGVzdGluYXRpb24sIHNldERlc3RpbmF0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtkaXN0YW5jZSwgc2V0RGlzdGFuY2VdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2Z1ZWxDb3N0LCBzZXRGdWVsQ29zdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgZnVlbENvbnN1bXB0aW9uID0gOC41OyAvLyBDb25zb21tYXRpb24gZW4gbGl0cmVzLzEwMCBrbSBwb3VyIHVuIE1lcmNlZGVzIEdMRSAzNTBcbiAgICBjb25zdCBmdWVsUHJpY2UgPSAxLjg7IC8vIFByaXggZHUgbGl0cmUgZGUgY2FyYnVyYW50IGVuIGV1cm9zXG5cbiAgICBjb25zdCBnZXREaXN0YW5jZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgICAgIGAvYXBpL2dldC1kaXN0YW5jZT9vcmlnaW49JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpblxuICAgICAgICAgICAgICAgICl9JmRlc3RpbmF0aW9uPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGRlc3RpbmF0aW9uKX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VJbkttID0gcmVzcG9uc2UuZGF0YS5kaXN0YW5jZTtcblxuICAgICAgICAgICAgc2V0RGlzdGFuY2UoZGlzdGFuY2VJbkttKTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsIGR1IGNvw7t0IGVuIGNhcmJ1cmFudFxuICAgICAgICAgICAgY29uc3QgY29zdCA9IChkaXN0YW5jZUluS20gLyAxMDApICogZnVlbENvbnN1bXB0aW9uICogZnVlbFByaWNlO1xuICAgICAgICAgICAgc2V0RnVlbENvc3QoY29zdC50b0ZpeGVkKDIpKTsgLy8gQ2/Du3QgZW4gZXVyb3MsIGFycm9uZGkgw6AgZGV1eCBkw6ljaW1hbGVzXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgIFwiRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGUgbGEgZGlzdGFuY2U6XCIsXG4gICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRFcnJvcihcIkVycmV1ciBvdSB2aWxsZSBub24gdHJvdXbDqWVcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXREaXN0YW5jZShudWxsKTtcbiAgICAgICAgc2V0RnVlbENvc3QobnVsbCk7XG4gICAgICAgIHNldEVycm9yKG51bGwpO1xuICAgICAgICBnZXREaXN0YW5jZSgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtNYXB9IGFsdD1cIk1hcFwiIGNsYXNzTmFtZT1cInctMzIgaC0zMiByb3VuZGVkLWZ1bGwgbWItNFwiIC8+XG5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgbXQtOCBtYi0xNlwiPlxuICAgICAgICAgICAgICAgIENhbGN1bGF0ZXVyIGRlIGRpc3RhbmNlXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtOCByb3VuZGVkLXhsIHNoYWRvdy1tZCBzaGFkb3ctZ3JheS00MDAgdy1mdWxsIG1heC13LW1kXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIFZpbGxlIGRlIGTDqXBhcnQgOlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcmlnaW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE9yaWdpbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBwLTMgYm9yZGVyIHJvdW5kZWQgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTIgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICBWaWxsZSBkJ2Fycml2w6llIDpcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzdGluYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc3RpbmF0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHAtMyBib3JkZXIgcm91bmRlZCB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbCBzaGFkb3ctc20gc2hhZG93LWJsYWNrIG10LTQgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENhbGN1bGVyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICB7ZGlzdGFuY2UgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LXhsIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERpc3RhbmNlIGRlIHtvcmlnaW59IMOgIHtkZXN0aW5hdGlvbn06IHtkaXN0YW5jZX0ga21cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5Db8O7dCBlbiBjYXJidXJhbnQgOiB7ZnVlbENvc3R9IOKCrDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LWxnIHRleHQtcmVkLTUwMFwiPntlcnJvcn08L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJNYXAiLCJIb21lIiwib3JpZ2luIiwic2V0T3JpZ2luIiwiZGVzdGluYXRpb24iLCJzZXREZXN0aW5hdGlvbiIsImRpc3RhbmNlIiwic2V0RGlzdGFuY2UiLCJmdWVsQ29zdCIsInNldEZ1ZWxDb3N0IiwiZXJyb3IiLCJzZXRFcnJvciIsImZ1ZWxDb25zdW1wdGlvbiIsImZ1ZWxQcmljZSIsImdldERpc3RhbmNlIiwicmVzcG9uc2UiLCJnZXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkaXN0YW5jZUluS20iLCJkYXRhIiwiY29zdCIsInRvRml4ZWQiLCJjb25zb2xlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImJ1dHRvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});