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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Videos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/Menu */ \"./src/components/Menu/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./pages/videos/styles.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction Videos(param) {\n    let { data  } = param;\n    _s();\n    const [relation, setRelation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const { query: { id  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const videoDetails = data.map((a)=>a).filter((b)=>b.url.includes(id))[0];\n    const videoRelationPlaylist = data.map((c)=>c).filter((d)=>d.playlist === videoDetails.playlist);\n    console.log(videoRelationPlaylist);\n    const getDetailsData = (value)=>{\n        const dateNew = new Date(value).toLocaleDateString(\"pt-BR\", {\n            day: \"2-digit\",\n            month: \"2-digit\",\n            year: \"numeric\"\n        });\n        return \"Video enviado \".concat(dateNew);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Menu__WEBPACK_IMPORTED_MODULE_3__.StyledMenu, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.StyledVideoPage, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            flex: 1\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                src: \"https://www.youtube.com/embed/\".concat(id),\n                                title: \"videoDetails.title\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: videoDetails.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: getDetailsData(videoDetails.created_at)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                style: {\n                                    marginBottom: \"16px\"\n                                },\n                                children: \"V\\xeddeos relacionados\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            videoRelationPlaylist.map((rel)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"link\",\n                                            children: rel.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                            lineNumber: 53,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: rel.thumb,\n                                            alt: rel.playlist,\n                                            href: \"/videos/\".concat(rel.url.split(\"v=\")[1])\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                            lineNumber: 54,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: rel.playlist\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                            lineNumber: 55,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Videos, \"HS30qLuNBBz0zN9Qi4r+wDKAZxw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Videos;\nvar _c;\n$RefreshReg$(_c, \"Videos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWRlb3MvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ1A7QUFDc0I7QUFFWjs7QUFFNUIsU0FBU0ksT0FBTyxLQUFRLEVBQUU7UUFBVixFQUFFQyxLQUFJLEVBQUUsR0FBUjs7SUFDN0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFHM0MsTUFBTSxFQUNKTyxPQUFPLEVBQUVDLEdBQUUsRUFBRSxHQUNkLEdBQUdULHNEQUFTQTtJQUNiLE1BQU1VLGVBQWVMLEtBQUtNLEdBQUcsQ0FBQyxDQUFDQyxJQUFNQSxHQUFHQyxNQUFNLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsR0FBRyxDQUFDQyxRQUFRLENBQUNQLElBQUksQ0FBQyxFQUFFO0lBQzVFLE1BQU1RLHdCQUF3QlosS0FDM0JNLEdBQUcsQ0FBQyxDQUFDTyxJQUFNQSxHQUNYTCxNQUFNLENBQUMsQ0FBQ00sSUFBTUEsRUFBRUMsUUFBUSxLQUFLVixhQUFhVSxRQUFRO0lBRXJEQyxRQUFRQyxHQUFHLENBQUNMO0lBRVosTUFBTU0saUJBQWlCLENBQUNDLFFBQVU7UUFDaEMsTUFBTUMsVUFBVSxJQUFJQyxLQUFLRixPQUFPRyxrQkFBa0IsQ0FBQyxTQUFTO1lBQzFEQyxLQUFLO1lBQ0xDLE9BQU87WUFDUEMsTUFBTTtRQUNSO1FBQ0EsT0FBTyxpQkFBeUIsT0FBUkw7SUFDMUI7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUN2Qiw0REFBVUE7Ozs7OzBCQUNYLDhEQUFDQyxvREFBZUE7O2tDQUNkLDhEQUFDNEI7d0JBQ0NDLE9BQU87NEJBQ0xDLFNBQVM7NEJBQ1RDLGVBQWU7NEJBQ2ZDLE1BQU07d0JBQ1I7OzBDQUVBLDhEQUFDQztnQ0FDQ0MsS0FBSyxpQ0FBb0MsT0FBSDVCO2dDQUN0QzZCLE9BQU87Ozs7OzswQ0FFVCw4REFBQ0M7MENBQUk3QixhQUFhNEIsS0FBSzs7Ozs7OzBDQUN2Qiw4REFBQ0U7MENBQU1qQixlQUFlYixhQUFhK0IsVUFBVTs7Ozs7Ozs7Ozs7O2tDQUUvQyw4REFBQ0M7OzBDQUNDLDhEQUFDQztnQ0FBR1gsT0FBTztvQ0FBRVksY0FBYztnQ0FBTzswQ0FBRzs7Ozs7OzRCQUVwQzNCLHNCQUFzQk4sR0FBRyxDQUFDa0MsQ0FBQUEsb0JBQ3pCLDhEQUFDSDs7c0RBQ0QsOERBQUM5Qjs0Q0FBRWtDLFdBQVU7c0RBQVFELElBQUlQLEtBQUs7Ozs7OztzREFDOUIsOERBQUNTOzRDQUFJVixLQUFLUSxJQUFJRyxLQUFLOzRDQUFFQyxLQUFLSixJQUFJekIsUUFBUTs0Q0FBRThCLE1BQU0sV0FBa0MsT0FBdkJMLElBQUk5QixHQUFHLENBQUNvQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Ozs7OztzREFDL0UsOERBQUNYO3NEQUFNSyxJQUFJekIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPL0IsQ0FBQztHQXZEdUJoQjs7UUFNbEJKLGtEQUFTQTs7O0tBTlNJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3ZpZGVvcy9baWRdLmpzPzExMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN0eWxlZE1lbnUgfSBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVudVwiO1xyXG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi8uLi9zcmMvc3VwYWJhc2VcIjtcclxuaW1wb3J0IHsgU3R5bGVkVmlkZW9QYWdlIH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb3MoeyBkYXRhIH0pIHtcclxuICBjb25zdCBbcmVsYXRpb24sIHNldFJlbGF0aW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IGlkIH0sXHJcbiAgfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHZpZGVvRGV0YWlscyA9IGRhdGEubWFwKChhKSA9PiBhKS5maWx0ZXIoKGIpID0+IGIudXJsLmluY2x1ZGVzKGlkKSlbMF07XHJcbiAgY29uc3QgdmlkZW9SZWxhdGlvblBsYXlsaXN0ID0gZGF0YVxyXG4gICAgLm1hcCgoYykgPT4gYylcclxuICAgIC5maWx0ZXIoKGQpID0+IGQucGxheWxpc3QgPT09IHZpZGVvRGV0YWlscy5wbGF5bGlzdCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHZpZGVvUmVsYXRpb25QbGF5bGlzdClcclxuXHJcbiAgY29uc3QgZ2V0RGV0YWlsc0RhdGEgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGRhdGVOZXcgPSBuZXcgRGF0ZSh2YWx1ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwicHQtQlJcIiwge1xyXG4gICAgICBkYXk6IFwiMi1kaWdpdFwiLFxyXG4gICAgICBtb250aDogXCIyLWRpZ2l0XCIsXHJcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYFZpZGVvIGVudmlhZG8gJHtkYXRlTmV3fWA7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTdHlsZWRNZW51IC8+XHJcbiAgICAgIDxTdHlsZWRWaWRlb1BhZ2U+XHJcbiAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7aWR9YH1cclxuICAgICAgICAgICAgdGl0bGU9e1widmlkZW9EZXRhaWxzLnRpdGxlXCJ9XHJcbiAgICAgICAgICA+PC9pZnJhbWU+XHJcbiAgICAgICAgICA8aDI+e3ZpZGVvRGV0YWlscy50aXRsZX08L2gyPlxyXG4gICAgICAgICAgPHNwYW4+e2dldERldGFpbHNEYXRhKHZpZGVvRGV0YWlscy5jcmVhdGVkX2F0KX08L3NwYW4+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjE2cHhcIiB9fT5Ww61kZW9zIHJlbGFjaW9uYWRvczwvaDM+XHJcblxyXG4gICAgICAgICAge3ZpZGVvUmVsYXRpb25QbGF5bGlzdC5tYXAocmVsID0+IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiPntyZWwudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cmVsLnRodW1ifSBhbHQ9e3JlbC5wbGF5bGlzdH0gaHJlZj17YC92aWRlb3MvJHtyZWwudXJsLnNwbGl0KCd2PScpWzFdfWB9Lz5cclxuICAgICAgICAgICAgPHNwYW4+e3JlbC5wbGF5bGlzdH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU3R5bGVkVmlkZW9QYWdlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJ2aWRlb3NcIikuc2VsZWN0KFwiKlwiKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJTdHlsZWRNZW51IiwiU3R5bGVkVmlkZW9QYWdlIiwiVmlkZW9zIiwiZGF0YSIsInJlbGF0aW9uIiwic2V0UmVsYXRpb24iLCJxdWVyeSIsImlkIiwidmlkZW9EZXRhaWxzIiwibWFwIiwiYSIsImZpbHRlciIsImIiLCJ1cmwiLCJpbmNsdWRlcyIsInZpZGVvUmVsYXRpb25QbGF5bGlzdCIsImMiLCJkIiwicGxheWxpc3QiLCJjb25zb2xlIiwibG9nIiwiZ2V0RGV0YWlsc0RhdGEiLCJ2YWx1ZSIsImRhdGVOZXciLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwic2VjdGlvbiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiaWZyYW1lIiwic3JjIiwidGl0bGUiLCJoMiIsInNwYW4iLCJjcmVhdGVkX2F0IiwiZGl2IiwiaDMiLCJtYXJnaW5Cb3R0b20iLCJyZWwiLCJjbGFzc05hbWUiLCJpbWciLCJ0aHVtYiIsImFsdCIsImhyZWYiLCJzcGxpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/videos/[id].js\n"));

/***/ })

});