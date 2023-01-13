"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/videos/[id]",{

/***/ "./pages/videos/[id].js":
/*!******************************!*\
  !*** ./pages/videos/[id].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Videos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/Menu */ \"./src/components/Menu/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./pages/videos/styles.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSP = true;\nfunction Videos(param) {\n    let { data  } = param;\n    _s();\n    const { query: { id  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const videoDetails = data.map((a)=>a).filter((b)=>b.url.includes(id))[0];\n    const videoRelationPlaylist = data.map((c)=>c).filter((d)=>d.playlist === videoDetails.playlist);\n    const getDetailsData = (value)=>{\n        const dateNew = new Date(value).toLocaleDateString(\"pt-BR\", {\n            day: \"2-digit\",\n            month: \"2-digit\",\n            year: \"numeric\"\n        });\n        return \"Video enviado \".concat(dateNew);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Menu__WEBPACK_IMPORTED_MODULE_2__.StyledMenu, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.StyledVideoPage, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            flex: 1\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                src: \"https://www.youtube.com/embed/\".concat(id),\n                                title: \"videoDetails.title\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: videoDetails.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: getDetailsData(videoDetails.created_at)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            style: {\n                                marginBottom: \"16px\"\n                            },\n                            children: \"V\\xeddeos relacionados\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Videos, \"IaUfvF8OKOd/LJo4hVGJ63oTCpE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Videos;\nvar _c;\n$RefreshReg$(_c, \"Videos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWRlb3MvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNlO0FBRVo7O0FBRzVCLFNBQVNHLE9BQU8sS0FBUyxFQUFFO1FBQVgsRUFBRUMsS0FBSSxFQUFHLEdBQVQ7O0lBRTdCLE1BQU0sRUFDSkMsT0FBTyxFQUFFQyxHQUFFLEVBQUUsR0FDZCxHQUFHTixzREFBU0E7SUFDYixNQUFNTyxlQUFlSCxLQUFLSSxHQUFHLENBQUMsQ0FBQ0MsSUFBS0EsR0FBR0MsTUFBTSxDQUFFQyxDQUFBQSxJQUFLQSxFQUFFQyxHQUFHLENBQUNDLFFBQVEsQ0FBQ1AsSUFBSSxDQUFDLEVBQUU7SUFDMUUsTUFBTVEsd0JBQXdCVixLQUFLSSxHQUFHLENBQUMsQ0FBQ08sSUFBTUEsR0FBR0wsTUFBTSxDQUFDTSxDQUFBQSxJQUFLQSxFQUFFQyxRQUFRLEtBQUtWLGFBQWFVLFFBQVE7SUFDakcsTUFBTUMsaUJBQWlCQyxDQUFBQSxRQUFRO1FBQzVCLE1BQU1DLFVBQVUsSUFBSUMsS0FBS0YsT0FBT0csa0JBQWtCLENBQUMsU0FBUztZQUMzREMsS0FBSTtZQUNKQyxPQUFNO1lBQ05DLE1BQUs7UUFDTjtRQUNBLE9BQU8saUJBQXlCLE9BQVJMO0lBQzNCO0lBR0EscUJBQ0U7OzBCQUNFLDhEQUFDbkIsNERBQVVBOzs7OzswQkFDWCw4REFBQ0Msb0RBQWVBOztrQ0FDZCw4REFBQ3dCO3dCQUNDQyxPQUFPOzRCQUNMQyxTQUFTOzRCQUNUQyxlQUFlOzRCQUNmQyxNQUFNO3dCQUNSOzswQ0FFQSw4REFBQ0M7Z0NBQ0NDLEtBQUssaUNBQW9DLE9BQUgxQjtnQ0FDdEMyQixPQUFPOzs7Ozs7MENBRVQsOERBQUNDOzBDQUFJM0IsYUFBYTBCLEtBQUs7Ozs7OzswQ0FDdkIsOERBQUNFOzBDQUFNakIsZUFBZVgsYUFBYTZCLFVBQVU7Ozs7Ozs7Ozs7OztrQ0FFL0MsOERBQUNDO2tDQUNDLDRFQUFDQzs0QkFBR1gsT0FBTztnQ0FBRVksY0FBYzs0QkFBTztzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVcvQyxDQUFDO0dBL0N1QnBDOztRQUlsQkgsa0RBQVNBOzs7S0FKU0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlkZW9zL1tpZF0uanM/MTEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3R5bGVkTWVudSB9IGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9NZW51XCI7XHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIi4uLy4uL3NyYy9zdXBhYmFzZVwiO1xyXG5pbXBvcnQgeyBTdHlsZWRWaWRlb1BhZ2UgfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb3MoeyBkYXRhICB9KSB7XHJcbiBcclxuICBjb25zdCB7XHJcbiAgICBxdWVyeTogeyBpZCB9LFxyXG4gIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB2aWRlb0RldGFpbHMgPSBkYXRhLm1hcCgoYSkgPT5hKS5maWx0ZXIoIGIgPT4gYi51cmwuaW5jbHVkZXMoaWQpKVswXTtcclxuICBjb25zdCB2aWRlb1JlbGF0aW9uUGxheWxpc3QgPSBkYXRhLm1hcCgoYykgPT4gYykuZmlsdGVyKGQgPT4gZC5wbGF5bGlzdCA9PT0gdmlkZW9EZXRhaWxzLnBsYXlsaXN0KVxyXG4gIGNvbnN0IGdldERldGFpbHNEYXRhID0gdmFsdWUgPT57XHJcbiAgICAgY29uc3QgZGF0ZU5ldyA9IG5ldyBEYXRlKHZhbHVlKS50b0xvY2FsZURhdGVTdHJpbmcoJ3B0LUJSJywge1xyXG4gICAgICBkYXk6JzItZGlnaXQnLFxyXG4gICAgICBtb250aDonMi1kaWdpdCcsXHJcbiAgICAgIHllYXI6J251bWVyaWMnXHJcbiAgICAgfSlcclxuICAgICByZXR1cm4gYFZpZGVvIGVudmlhZG8gJHtkYXRlTmV3fWBcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFN0eWxlZE1lbnUgLz5cclxuICAgICAgPFN0eWxlZFZpZGVvUGFnZT5cclxuICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHtpZH1gfVxyXG4gICAgICAgICAgICB0aXRsZT17J3ZpZGVvRGV0YWlscy50aXRsZSd9XHJcbiAgICAgICAgICA+PC9pZnJhbWU+XHJcbiAgICAgICAgICA8aDI+e3ZpZGVvRGV0YWlscy50aXRsZX08L2gyPlxyXG4gICAgICAgICAgPHNwYW4+e2dldERldGFpbHNEYXRhKHZpZGVvRGV0YWlscy5jcmVhdGVkX2F0KX08L3NwYW4+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjE2cHhcIiB9fT5Ww61kZW9zIHJlbGFjaW9uYWRvczwvaDM+XHJcbiAgICAgICAgICB7Lyoge3JlY29tZW5kYWRvcy5maWx0ZXIocmVjb21lbmRhZG8gPT4gcmVjb21lbmRhZG8uaWQgIT09IGlkKS5tYXAoKHJlbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBrZXk9e3JlbC5pZH0gY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9e2AvdmlkZW8/JHtyZWwuaWR9JHtyZWwucGxheWxpc3R9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVsLnRodW1ifSBhbHQ9e3JlbC5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3JlbC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9TdHlsZWRWaWRlb1BhZ2U+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG5cclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJ2aWRlb3NcIikuc2VsZWN0KFwiKlwiKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiU3R5bGVkTWVudSIsIlN0eWxlZFZpZGVvUGFnZSIsIlZpZGVvcyIsImRhdGEiLCJxdWVyeSIsImlkIiwidmlkZW9EZXRhaWxzIiwibWFwIiwiYSIsImZpbHRlciIsImIiLCJ1cmwiLCJpbmNsdWRlcyIsInZpZGVvUmVsYXRpb25QbGF5bGlzdCIsImMiLCJkIiwicGxheWxpc3QiLCJnZXREZXRhaWxzRGF0YSIsInZhbHVlIiwiZGF0ZU5ldyIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJzZWN0aW9uIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCJpZnJhbWUiLCJzcmMiLCJ0aXRsZSIsImgyIiwic3BhbiIsImNyZWF0ZWRfYXQiLCJkaXYiLCJoMyIsIm1hcmdpbkJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/videos/[id].js\n"));

/***/ })

});