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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Videos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/Menu */ \"./src/components/Menu/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./pages/videos/styles.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction Videos(param) {\n    let { data  } = param;\n    _s();\n    const { query: { id  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const videoDetails = data.map((a)=>a).filter((b)=>b.url.includes(id))[0];\n    const videoRelationPlaylist = data.map((c)=>c).filter((d)=>d.playlist === videoDetails.playlist);\n    console.log(data.map((c)=>c).filter((d)=>d.playlist === videoDetails.playlist));\n    const getDetailsData = (value)=>{\n        const dateNew = new Date(value).toLocaleDateString(\"pt-BR\", {\n            day: \"2-digit\",\n            month: \"2-digit\",\n            year: \"numeric\"\n        });\n        return \"Video enviado \".concat(dateNew);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Menu__WEBPACK_IMPORTED_MODULE_3__.StyledMenu, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.StyledVideoPage, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            flex: 1\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                src: \"https://www.youtube.com/embed/\".concat(id),\n                                title: \"videoDetails.title\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: videoDetails.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: getDetailsData(videoDetails.created_at)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            style: {\n                                marginBottom: \"16px\"\n                            },\n                            children: \"V\\xeddeos relacionados\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Videos, \"IaUfvF8OKOd/LJo4hVGJ63oTCpE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Videos;\nvar _c;\n$RefreshReg$(_c, \"Videos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWRlb3MvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ1A7QUFDc0I7QUFFWjs7QUFFNUIsU0FBU0ksT0FBTyxLQUFRLEVBQUU7UUFBVixFQUFFQyxLQUFJLEVBQUUsR0FBUjs7SUFJN0IsTUFBTSxFQUNKQyxPQUFPLEVBQUVDLEdBQUUsRUFBRSxHQUNkLEdBQUdQLHNEQUFTQTtJQUNiLE1BQU1RLGVBQWVILEtBQUtJLEdBQUcsQ0FBQyxDQUFDQyxJQUFNQSxHQUFHQyxNQUFNLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsR0FBRyxDQUFDQyxRQUFRLENBQUNQLElBQUksQ0FBQyxFQUFFO0lBQzVFLE1BQU1RLHdCQUF3QlYsS0FDM0JJLEdBQUcsQ0FBQyxDQUFDTyxJQUFNQSxHQUNYTCxNQUFNLENBQUMsQ0FBQ00sSUFBTUEsRUFBRUMsUUFBUSxLQUFLVixhQUFhVSxRQUFRO0lBS3JEQyxRQUFRQyxHQUFHLENBQUNmLEtBQUtJLEdBQUcsQ0FBQyxDQUFDTyxJQUFNQSxHQUFHTCxNQUFNLENBQUMsQ0FBQ00sSUFBTUEsRUFBRUMsUUFBUSxLQUFLVixhQUFhVSxRQUFRO0lBRWpGLE1BQU1HLGlCQUFpQixDQUFDQyxRQUFVO1FBQ2hDLE1BQU1DLFVBQVUsSUFBSUMsS0FBS0YsT0FBT0csa0JBQWtCLENBQUMsU0FBUztZQUMxREMsS0FBSztZQUNMQyxPQUFPO1lBQ1BDLE1BQU07UUFDUjtRQUNBLE9BQU8saUJBQXlCLE9BQVJMO0lBQzFCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDckIsNERBQVVBOzs7OzswQkFDWCw4REFBQ0Msb0RBQWVBOztrQ0FDZCw4REFBQzBCO3dCQUNDQyxPQUFPOzRCQUNMQyxTQUFTOzRCQUNUQyxlQUFlOzRCQUNmQyxNQUFNO3dCQUNSOzswQ0FFQSw4REFBQ0M7Z0NBQ0NDLEtBQUssaUNBQW9DLE9BQUg1QjtnQ0FDdEM2QixPQUFPOzs7Ozs7MENBRVQsOERBQUNDOzBDQUFJN0IsYUFBYTRCLEtBQUs7Ozs7OzswQ0FDdkIsOERBQUNFOzBDQUFNakIsZUFBZWIsYUFBYStCLFVBQVU7Ozs7Ozs7Ozs7OztrQ0FFL0MsOERBQUNDO2tDQUNDLDRFQUFDQzs0QkFBR1gsT0FBTztnQ0FBRVksY0FBYzs0QkFBTztzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVkvQyxDQUFDO0dBekR1QnRDOztRQU1sQkosa0RBQVNBOzs7S0FOU0kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlkZW9zL1tpZF0uanM/MTEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3R5bGVkTWVudSB9IGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9NZW51XCI7XHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIi4uLy4uL3NyYy9zdXBhYmFzZVwiO1xyXG5pbXBvcnQgeyBTdHlsZWRWaWRlb1BhZ2UgfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvcyh7IGRhdGEgfSkge1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHZpZGVvRGV0YWlscyA9IGRhdGEubWFwKChhKSA9PiBhKS5maWx0ZXIoKGIpID0+IGIudXJsLmluY2x1ZGVzKGlkKSlbMF07XHJcbiAgY29uc3QgdmlkZW9SZWxhdGlvblBsYXlsaXN0ID0gZGF0YVxyXG4gICAgLm1hcCgoYykgPT4gYylcclxuICAgIC5maWx0ZXIoKGQpID0+IGQucGxheWxpc3QgPT09IHZpZGVvRGV0YWlscy5wbGF5bGlzdCk7XHJcblxyXG5cclxuXHJcblxyXG4gIGNvbnNvbGUubG9nKGRhdGEubWFwKChjKSA9PiBjKS5maWx0ZXIoKGQpID0+IGQucGxheWxpc3QgPT09IHZpZGVvRGV0YWlscy5wbGF5bGlzdCkpXHJcblxyXG4gIGNvbnN0IGdldERldGFpbHNEYXRhID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlTmV3ID0gbmV3IERhdGUodmFsdWUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcInB0LUJSXCIsIHtcclxuICAgICAgZGF5OiBcIjItZGlnaXRcIixcclxuICAgICAgbW9udGg6IFwiMi1kaWdpdFwiLFxyXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGBWaWRlbyBlbnZpYWRvICR7ZGF0ZU5ld31gO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U3R5bGVkTWVudSAvPlxyXG4gICAgICA8U3R5bGVkVmlkZW9QYWdlPlxyXG4gICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke2lkfWB9XHJcbiAgICAgICAgICAgIHRpdGxlPXtcInZpZGVvRGV0YWlscy50aXRsZVwifVxyXG4gICAgICAgICAgPjwvaWZyYW1lPlxyXG4gICAgICAgICAgPGgyPnt2aWRlb0RldGFpbHMudGl0bGV9PC9oMj5cclxuICAgICAgICAgIDxzcGFuPntnZXREZXRhaWxzRGF0YSh2aWRlb0RldGFpbHMuY3JlYXRlZF9hdCl9PC9zcGFuPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgzIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxNnB4XCIgfX0+VsOtZGVvcyByZWxhY2lvbmFkb3M8L2gzPlxyXG5cclxuICAgICAgICAgIHsvKiB7cmVjb21lbmRhZG9zLmZpbHRlcihyZWNvbWVuZGFkbyA9PiByZWNvbWVuZGFkby5pZCAhPT0gaWQpLm1hcCgocmVsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGtleT17cmVsLmlkfSBjbGFzc05hbWU9XCJsaW5rXCIgaHJlZj17YC92aWRlbz8ke3JlbC5pZH0ke3JlbC5wbGF5bGlzdH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZWwudGh1bWJ9IGFsdD17cmVsLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cmVsLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1N0eWxlZFZpZGVvUGFnZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwidmlkZW9zXCIpLnNlbGVjdChcIipcIik7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwiU3R5bGVkTWVudSIsIlN0eWxlZFZpZGVvUGFnZSIsIlZpZGVvcyIsImRhdGEiLCJxdWVyeSIsImlkIiwidmlkZW9EZXRhaWxzIiwibWFwIiwiYSIsImZpbHRlciIsImIiLCJ1cmwiLCJpbmNsdWRlcyIsInZpZGVvUmVsYXRpb25QbGF5bGlzdCIsImMiLCJkIiwicGxheWxpc3QiLCJjb25zb2xlIiwibG9nIiwiZ2V0RGV0YWlsc0RhdGEiLCJ2YWx1ZSIsImRhdGVOZXciLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwic2VjdGlvbiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiaWZyYW1lIiwic3JjIiwidGl0bGUiLCJoMiIsInNwYW4iLCJjcmVhdGVkX2F0IiwiZGl2IiwiaDMiLCJtYXJnaW5Cb3R0b20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/videos/[id].js\n"));

/***/ })

});