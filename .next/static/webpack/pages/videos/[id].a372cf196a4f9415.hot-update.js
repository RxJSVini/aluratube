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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Videos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/Menu */ \"./src/components/Menu/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./pages/videos/styles.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSP = true;\nfunction Videos(param) {\n    let { data  } = param;\n    _s();\n    const { query: { id  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const videoDetails = data.map((a)=>a).filter((b)=>b.url.includes(id))[0];\n    const videoRelationPlaylist = data.map((c)=>c).filter((d)=>d.playlist === videoDetails.playlist);\n    console.log(videoRelationPlaylist);\n    const getDetailsData = (value)=>{\n        const dateNew = new Date(value).toLocaleDateString(\"pt-BR\", {\n            day: \"2-digit\",\n            month: \"2-digit\",\n            year: \"numeric\"\n        });\n        return \"Video enviado \".concat(dateNew);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Menu__WEBPACK_IMPORTED_MODULE_2__.StyledMenu, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.StyledVideoPage, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            flex: 1\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                src: \"https://www.youtube.com/embed/\".concat(id),\n                                title: \"videoDetails.title\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: videoDetails.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: getDetailsData(videoDetails.created_at)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                style: {\n                                    marginBottom: \"16px\"\n                                },\n                                children: \"V\\xeddeos relacionados\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            videoRelationPlaylist.map((rel)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"link\",\n                                            href: \"/videos/\".concat(rel.url.split(\"v=\")[1]),\n                                            children: rel.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                            lineNumber: 49,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: rel.thumb,\n                                            alt: rel.playlist\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                            lineNumber: 50,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: rel.playlist\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                            lineNumber: 51,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Videos, \"IaUfvF8OKOd/LJo4hVGJ63oTCpE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Videos;\nvar _c;\n$RefreshReg$(_c, \"Videos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWRlb3MvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUF3QztBQUNlO0FBRVo7O0FBRTVCLFNBQVNHLE9BQU8sS0FBUSxFQUFFO1FBQVYsRUFBRUMsS0FBSSxFQUFFLEdBQVI7O0lBQzdCLE1BQU0sRUFDSkMsT0FBTyxFQUFFQyxHQUFFLEVBQUUsR0FDZCxHQUFHTixzREFBU0E7SUFDYixNQUFNTyxlQUFlSCxLQUFLSSxHQUFHLENBQUMsQ0FBQ0MsSUFBTUEsR0FBR0MsTUFBTSxDQUFDLENBQUNDLElBQU1BLEVBQUVDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDUCxJQUFJLENBQUMsRUFBRTtJQUM1RSxNQUFNUSx3QkFBd0JWLEtBQzNCSSxHQUFHLENBQUMsQ0FBQ08sSUFBTUEsR0FDWEwsTUFBTSxDQUFDLENBQUNNLElBQU1BLEVBQUVDLFFBQVEsS0FBS1YsYUFBYVUsUUFBUTtJQUVyREMsUUFBUUMsR0FBRyxDQUFDTDtJQUVaLE1BQU1NLGlCQUFpQixDQUFDQyxRQUFVO1FBQ2hDLE1BQU1DLFVBQVUsSUFBSUMsS0FBS0YsT0FBT0csa0JBQWtCLENBQUMsU0FBUztZQUMxREMsS0FBSztZQUNMQyxPQUFPO1lBQ1BDLE1BQU07UUFDUjtRQUNBLE9BQU8saUJBQXlCLE9BQVJMO0lBQzFCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDckIsNERBQVVBOzs7OzswQkFDWCw4REFBQ0Msb0RBQWVBOztrQ0FDZCw4REFBQzBCO3dCQUNDQyxPQUFPOzRCQUNMQyxTQUFTOzRCQUNUQyxlQUFlOzRCQUNmQyxNQUFNO3dCQUNSOzswQ0FFQSw4REFBQ0M7Z0NBQ0NDLEtBQUssaUNBQW9DLE9BQUg1QjtnQ0FDdEM2QixPQUFPOzs7Ozs7MENBRVQsOERBQUNDOzBDQUFJN0IsYUFBYTRCLEtBQUs7Ozs7OzswQ0FDdkIsOERBQUNFOzBDQUFNakIsZUFBZWIsYUFBYStCLFVBQVU7Ozs7Ozs7Ozs7OztrQ0FFL0MsOERBQUNDOzswQ0FDQyw4REFBQ0M7Z0NBQUdYLE9BQU87b0NBQUVZLGNBQWM7Z0NBQU87MENBQUc7Ozs7Ozs0QkFFcEMzQixzQkFBc0JOLEdBQUcsQ0FBQ2tDLENBQUFBLG9CQUN6Qiw4REFBQ0g7O3NEQUNELDhEQUFDOUI7NENBQUVrQyxXQUFVOzRDQUFPQyxNQUFNLFdBQWtDLE9BQXZCRixJQUFJOUIsR0FBRyxDQUFDaUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO3NEQUFLSCxJQUFJUCxLQUFLOzs7Ozs7c0RBQ3pFLDhEQUFDVzs0Q0FBSVosS0FBS1EsSUFBSUssS0FBSzs0Q0FBRUMsS0FBS04sSUFBSXpCLFFBQVE7Ozs7OztzREFDdEMsOERBQUNvQjtzREFBTUssSUFBSXpCLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTy9CLENBQUM7R0FwRHVCZDs7UUFHbEJILGtEQUFTQTs7O0tBSFNHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZpZGVvcy9baWRdLmpzPzExMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFN0eWxlZE1lbnUgfSBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVudVwiO1xyXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi8uLi9zcmMvc3VwYWJhc2VcIjtcclxuaW1wb3J0IHsgU3R5bGVkVmlkZW9QYWdlIH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb3MoeyBkYXRhIH0pIHtcclxuICBjb25zdCB7XHJcbiAgICBxdWVyeTogeyBpZCB9LFxyXG4gIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB2aWRlb0RldGFpbHMgPSBkYXRhLm1hcCgoYSkgPT4gYSkuZmlsdGVyKChiKSA9PiBiLnVybC5pbmNsdWRlcyhpZCkpWzBdO1xyXG4gIGNvbnN0IHZpZGVvUmVsYXRpb25QbGF5bGlzdCA9IGRhdGFcclxuICAgIC5tYXAoKGMpID0+IGMpXHJcbiAgICAuZmlsdGVyKChkKSA9PiBkLnBsYXlsaXN0ID09PSB2aWRlb0RldGFpbHMucGxheWxpc3QpO1xyXG5cclxuICBjb25zb2xlLmxvZyh2aWRlb1JlbGF0aW9uUGxheWxpc3QpXHJcblxyXG4gIGNvbnN0IGdldERldGFpbHNEYXRhID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlTmV3ID0gbmV3IERhdGUodmFsdWUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcInB0LUJSXCIsIHtcclxuICAgICAgZGF5OiBcIjItZGlnaXRcIixcclxuICAgICAgbW9udGg6IFwiMi1kaWdpdFwiLFxyXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGBWaWRlbyBlbnZpYWRvICR7ZGF0ZU5ld31gO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U3R5bGVkTWVudSAvPlxyXG4gICAgICA8U3R5bGVkVmlkZW9QYWdlPlxyXG4gICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke2lkfWB9XHJcbiAgICAgICAgICAgIHRpdGxlPXtcInZpZGVvRGV0YWlscy50aXRsZVwifVxyXG4gICAgICAgICAgPjwvaWZyYW1lPlxyXG4gICAgICAgICAgPGgyPnt2aWRlb0RldGFpbHMudGl0bGV9PC9oMj5cclxuICAgICAgICAgIDxzcGFuPntnZXREZXRhaWxzRGF0YSh2aWRlb0RldGFpbHMuY3JlYXRlZF9hdCl9PC9zcGFuPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgzIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxNnB4XCIgfX0+VsOtZGVvcyByZWxhY2lvbmFkb3M8L2gzPlxyXG5cclxuICAgICAgICAgIHt2aWRlb1JlbGF0aW9uUGxheWxpc3QubWFwKHJlbCA9PiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIiBocmVmPXtgL3ZpZGVvcy8ke3JlbC51cmwuc3BsaXQoJ3Y9JylbMV19YH0+e3JlbC50aXRsZX08L2E+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtyZWwudGh1bWJ9IGFsdD17cmVsLnBsYXlsaXN0fS8+XHJcbiAgICAgICAgICAgIDxzcGFuPntyZWwucGxheWxpc3R9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1N0eWxlZFZpZGVvUGFnZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwidmlkZW9zXCIpLnNlbGVjdChcIipcIik7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlN0eWxlZE1lbnUiLCJTdHlsZWRWaWRlb1BhZ2UiLCJWaWRlb3MiLCJkYXRhIiwicXVlcnkiLCJpZCIsInZpZGVvRGV0YWlscyIsIm1hcCIsImEiLCJmaWx0ZXIiLCJiIiwidXJsIiwiaW5jbHVkZXMiLCJ2aWRlb1JlbGF0aW9uUGxheWxpc3QiLCJjIiwiZCIsInBsYXlsaXN0IiwiY29uc29sZSIsImxvZyIsImdldERldGFpbHNEYXRhIiwidmFsdWUiLCJkYXRlTmV3IiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsInNlY3Rpb24iLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImlmcmFtZSIsInNyYyIsInRpdGxlIiwiaDIiLCJzcGFuIiwiY3JlYXRlZF9hdCIsImRpdiIsImgzIiwibWFyZ2luQm90dG9tIiwicmVsIiwiY2xhc3NOYW1lIiwiaHJlZiIsInNwbGl0IiwiaW1nIiwidGh1bWIiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/videos/[id].js\n"));

/***/ })

});