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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Videos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/Menu */ \"./src/components/Menu/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./pages/videos/styles.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSP = true;\nfunction Videos(param) {\n    let { data  } = param;\n    _s();\n    const { query: { id  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const videoDetails = data.map((a)=>a).filter((b)=>b.url.includes(id))[0];\n    const formatDateTime = (date)=>{\n        const newDate = new Date(date);\n        const day = newDate.getDate();\n        const month = newDate.getMonth() + 1;\n        const year = newDate.getFullYear();\n        const hours = newDate.getHours();\n        const minutes = newDate.getMinutes();\n        return \"Enviado \".concat(day, \"/\").concat(month, \"/\").concat(year, \" \\xe0s \").concat(hours, \":\").concat(minutes);\n    };\n    const getDetailsData = (value)=>{\n        const date = new Date(value).toLocaleDateString(\"pt-BR\", {\n            day: \"2-digit\",\n            month: \"2-digit\",\n            year: \"numeric\"\n        });\n        return data;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Menu__WEBPACK_IMPORTED_MODULE_2__.StyledMenu, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.StyledVideoPage, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            flex: 1\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                src: \"https://www.youtube.com/embed/\".concat(id),\n                                title: \"videoDetails.title\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: videoDetails.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: getDetailsData(videoDetails.created_at)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            style: {\n                                marginBottom: \"16px\"\n                            },\n                            children: \"V\\xeddeos relacionados\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Videos, \"IaUfvF8OKOd/LJo4hVGJ63oTCpE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Videos;\nvar _c;\n$RefreshReg$(_c, \"Videos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWRlb3MvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNlO0FBRVo7O0FBQzVCLFNBQVNHLE9BQU8sS0FBUyxFQUFFO1FBQVgsRUFBRUMsS0FBSSxFQUFHLEdBQVQ7O0lBRTdCLE1BQU0sRUFDSkMsT0FBTyxFQUFFQyxHQUFFLEVBQUUsR0FDZCxHQUFHTixzREFBU0E7SUFDYixNQUFNTyxlQUFlSCxLQUFLSSxHQUFHLENBQUMsQ0FBQ0MsSUFBS0EsR0FBR0MsTUFBTSxDQUFFQyxDQUFBQSxJQUFLQSxFQUFFQyxHQUFHLENBQUNDLFFBQVEsQ0FBQ1AsSUFBSSxDQUFDLEVBQUU7SUFFMUUsTUFBTVEsaUJBQWlCLENBQUNDLE9BQVM7UUFDL0IsTUFBTUMsVUFBVSxJQUFJQyxLQUFLRjtRQUN6QixNQUFNRyxNQUFNRixRQUFRRyxPQUFPO1FBQzNCLE1BQU1DLFFBQVFKLFFBQVFLLFFBQVEsS0FBSztRQUNuQyxNQUFNQyxPQUFPTixRQUFRTyxXQUFXO1FBQ2hDLE1BQU1DLFFBQVFSLFFBQVFTLFFBQVE7UUFDOUIsTUFBTUMsVUFBVVYsUUFBUVcsVUFBVTtRQUNsQyxPQUFPLFdBQWtCUCxPQUFQRixLQUFJLEtBQVlJLE9BQVRGLE9BQU0sS0FBY0ksT0FBWEYsTUFBSyxXQUFlSSxPQUFURixPQUFNLEtBQVcsT0FBUkU7SUFDMUQ7SUFHRSxNQUFNRSxpQkFBaUJDLENBQUFBLFFBQVE7UUFDNUIsTUFBTWQsT0FBTyxJQUFJRSxLQUFLWSxPQUFPQyxrQkFBa0IsQ0FBQyxTQUFTO1lBQ3hEWixLQUFJO1lBQ0pFLE9BQU07WUFDTkUsTUFBSztRQUNOO1FBR0EsT0FBT2xCO0lBQ1Y7SUFHQSxxQkFDRTs7MEJBQ0UsOERBQUNILDREQUFVQTs7Ozs7MEJBQ1gsOERBQUNDLG9EQUFlQTs7a0NBQ2QsOERBQUM2Qjt3QkFDQ0MsT0FBTzs0QkFDTEMsU0FBUzs0QkFDVEMsZUFBZTs0QkFDZkMsTUFBTTt3QkFDUjs7MENBRUEsOERBQUNDO2dDQUNDQyxLQUFLLGlDQUFvQyxPQUFIL0I7Z0NBQ3RDZ0MsT0FBTzs7Ozs7OzBDQUVULDhEQUFDQzswQ0FBSWhDLGFBQWErQixLQUFLOzs7Ozs7MENBQ3ZCLDhEQUFDRTswQ0FBTVosZUFBZXJCLGFBQWFrQyxVQUFVOzs7Ozs7Ozs7Ozs7a0NBRS9DLDhEQUFDQztrQ0FDQyw0RUFBQ0M7NEJBQUdYLE9BQU87Z0NBQUVZLGNBQWM7NEJBQU87c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXL0MsQ0FBQztHQTVEdUJ6Qzs7UUFJbEJILGtEQUFTQTs7O0tBSlNHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZpZGVvcy9baWRdLmpzPzExMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN0eWxlZE1lbnUgfSBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVudVwiO1xyXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi8uLi9zcmMvc3VwYWJhc2VcIjtcclxuaW1wb3J0IHsgU3R5bGVkVmlkZW9QYWdlIH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvcyh7IGRhdGEgIH0pIHtcclxuIFxyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHZpZGVvRGV0YWlscyA9IGRhdGEubWFwKChhKSA9PmEpLmZpbHRlciggYiA9PiBiLnVybC5pbmNsdWRlcyhpZCkpWzBdO1xyXG5cclxuICBjb25zdCBmb3JtYXREYXRlVGltZSA9IChkYXRlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICBjb25zdCBkYXkgPSBuZXdEYXRlLmdldERhdGUoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gbmV3RGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgIGNvbnN0IHllYXIgPSBuZXdEYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBob3VycyA9IG5ld0RhdGUuZ2V0SG91cnMoKTtcclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBuZXdEYXRlLmdldE1pbnV0ZXMoKTtcclxuICAgIHJldHVybiBgRW52aWFkbyAke2RheX0vJHttb250aH0vJHt5ZWFyfSDDoHMgJHtob3Vyc306JHttaW51dGVzfWA7XHJcbn1cclxuXHJcblxyXG4gIGNvbnN0IGdldERldGFpbHNEYXRhID0gdmFsdWUgPT57XHJcbiAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKS50b0xvY2FsZURhdGVTdHJpbmcoJ3B0LUJSJywge1xyXG4gICAgICBkYXk6JzItZGlnaXQnLFxyXG4gICAgICBtb250aDonMi1kaWdpdCcsXHJcbiAgICAgIHllYXI6J251bWVyaWMnXHJcbiAgICAgfSlcclxuXHJcblxyXG4gICAgIHJldHVybiBkYXRhXHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTdHlsZWRNZW51IC8+XHJcbiAgICAgIDxTdHlsZWRWaWRlb1BhZ2U+XHJcbiAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7aWR9YH1cclxuICAgICAgICAgICAgdGl0bGU9eyd2aWRlb0RldGFpbHMudGl0bGUnfVxyXG4gICAgICAgICAgPjwvaWZyYW1lPlxyXG4gICAgICAgICAgPGgyPnt2aWRlb0RldGFpbHMudGl0bGV9PC9oMj5cclxuICAgICAgICAgIDxzcGFuPntnZXREZXRhaWxzRGF0YSh2aWRlb0RldGFpbHMuY3JlYXRlZF9hdCl9PC9zcGFuPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgzIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxNnB4XCIgfX0+VsOtZGVvcyByZWxhY2lvbmFkb3M8L2gzPlxyXG4gICAgICAgICAgey8qIHtyZWNvbWVuZGFkb3MuZmlsdGVyKHJlY29tZW5kYWRvID0+IHJlY29tZW5kYWRvLmlkICE9PSBpZCkubWFwKChyZWwpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEga2V5PXtyZWwuaWR9IGNsYXNzTmFtZT1cImxpbmtcIiBocmVmPXtgL3ZpZGVvPyR7cmVsLmlkfSR7cmVsLnBsYXlsaXN0fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlbC50aHVtYn0gYWx0PXtyZWwubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntyZWwubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICApKX0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU3R5bGVkVmlkZW9QYWdlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcInZpZGVvc1wiKS5zZWxlY3QoXCIqXCIpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJTdHlsZWRNZW51IiwiU3R5bGVkVmlkZW9QYWdlIiwiVmlkZW9zIiwiZGF0YSIsInF1ZXJ5IiwiaWQiLCJ2aWRlb0RldGFpbHMiLCJtYXAiLCJhIiwiZmlsdGVyIiwiYiIsInVybCIsImluY2x1ZGVzIiwiZm9ybWF0RGF0ZVRpbWUiLCJkYXRlIiwibmV3RGF0ZSIsIkRhdGUiLCJkYXkiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImdldERldGFpbHNEYXRhIiwidmFsdWUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzZWN0aW9uIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCJpZnJhbWUiLCJzcmMiLCJ0aXRsZSIsImgyIiwic3BhbiIsImNyZWF0ZWRfYXQiLCJkaXYiLCJoMyIsIm1hcmdpbkJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/videos/[id].js\n"));

/***/ })

});