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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Videos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/Menu */ \"./src/components/Menu/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./pages/videos/styles.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction Videos(param) {\n    let { data  } = param;\n    _s();\n    const [relaction, setRelation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const { query: { id  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const videoDetails = data.map((a)=>a).filter((b)=>b.url.includes(id))[0];\n    const videoRelationPlaylist = data.map((c)=>c).filter((d)=>d.playlist === videoDetails.playlist);\n    setRelation(videoRelationPlaylist);\n    const getDetailsData = (value)=>{\n        const dateNew = new Date(value).toLocaleDateString(\"pt-BR\", {\n            day: \"2-digit\",\n            month: \"2-digit\",\n            year: \"numeric\"\n        });\n        return \"Video enviado \".concat(dateNew);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Menu__WEBPACK_IMPORTED_MODULE_3__.StyledMenu, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.StyledVideoPage, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            flex: 1\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                src: \"https://www.youtube.com/embed/\".concat(id),\n                                title: \"videoDetails.title\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: videoDetails.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: getDetailsData(videoDetails.created_at)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                style: {\n                                    marginBottom: \"16px\"\n                                },\n                                children: \"V\\xeddeos relacionados\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            relaction.map((item)=>{\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, item.id, false, {\n                                    fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\videos\\\\[id].js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Videos, \"fTyGaU8kTKn7Iu6HutscTPciiGI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Videos;\nvar _c;\n$RefreshReg$(_c, \"Videos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aWRlb3MvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ1A7QUFDc0I7QUFFWjs7QUFFNUIsU0FBU0ksT0FBTyxLQUFRLEVBQUU7UUFBVixFQUFFQyxLQUFJLEVBQUUsR0FBUjs7SUFFN0IsTUFBTSxDQUFDQyxXQUFXQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFFNUMsTUFBTSxFQUNKTyxPQUFPLEVBQUVDLEdBQUUsRUFBRSxHQUNkLEdBQUdULHNEQUFTQTtJQUNiLE1BQU1VLGVBQWVMLEtBQUtNLEdBQUcsQ0FBQyxDQUFDQyxJQUFNQSxHQUFHQyxNQUFNLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsR0FBRyxDQUFDQyxRQUFRLENBQUNQLElBQUksQ0FBQyxFQUFFO0lBQzVFLE1BQU1RLHdCQUF3QlosS0FDM0JNLEdBQUcsQ0FBQyxDQUFDTyxJQUFNQSxHQUNYTCxNQUFNLENBQUMsQ0FBQ00sSUFBTUEsRUFBRUMsUUFBUSxLQUFLVixhQUFhVSxRQUFRO0lBRXJEYixZQUFZVTtJQUVaLE1BQU1JLGlCQUFpQixDQUFDQyxRQUFVO1FBQ2hDLE1BQU1DLFVBQVUsSUFBSUMsS0FBS0YsT0FBT0csa0JBQWtCLENBQUMsU0FBUztZQUMxREMsS0FBSztZQUNMQyxPQUFPO1lBQ1BDLE1BQU07UUFDUjtRQUNBLE9BQU8saUJBQXlCLE9BQVJMO0lBQzFCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDckIsNERBQVVBOzs7OzswQkFDWCw4REFBQ0Msb0RBQWVBOztrQ0FDZCw4REFBQzBCO3dCQUNDQyxPQUFPOzRCQUNMQyxTQUFTOzRCQUNUQyxlQUFlOzRCQUNmQyxNQUFNO3dCQUNSOzswQ0FFQSw4REFBQ0M7Z0NBQ0NDLEtBQUssaUNBQW9DLE9BQUgxQjtnQ0FDdEMyQixPQUFPOzs7Ozs7MENBRVQsOERBQUNDOzBDQUFJM0IsYUFBYTBCLEtBQUs7Ozs7OzswQ0FDdkIsOERBQUNFOzBDQUFNakIsZUFBZVgsYUFBYTZCLFVBQVU7Ozs7Ozs7Ozs7OztrQ0FFL0MsOERBQUNDOzswQ0FDQyw4REFBQ0M7Z0NBQUdYLE9BQU87b0NBQUVZLGNBQWM7Z0NBQU87MENBQUc7Ozs7Ozs0QkFDcENwQyxVQUFVSyxHQUFHLENBQUMsQ0FBQ2dDLE9BQVE7OENBQ3RCLDhEQUFDSCxXQUFTRyxLQUFLbEMsRUFBRTs7Ozs7NEJBS25COzs7Ozs7Ozs7Ozs7Ozs7QUFXVixDQUFDO0dBNUR1Qkw7O1FBTWxCSixrREFBU0E7OztLQU5TSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92aWRlb3MvW2lkXS5qcz8xMTI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdHlsZWRNZW51IH0gZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL01lbnVcIjtcclxuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tIFwiLi4vLi4vc3JjL3N1cGFiYXNlXCI7XHJcbmltcG9ydCB7IFN0eWxlZFZpZGVvUGFnZSB9IGZyb20gXCIuL3N0eWxlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlkZW9zKHsgZGF0YSB9KSB7XHJcblxyXG4gIGNvbnN0IFtyZWxhY3Rpb24sIHNldFJlbGF0aW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgcXVlcnk6IHsgaWQgfSxcclxuICB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdmlkZW9EZXRhaWxzID0gZGF0YS5tYXAoKGEpID0+IGEpLmZpbHRlcigoYikgPT4gYi51cmwuaW5jbHVkZXMoaWQpKVswXTtcclxuICBjb25zdCB2aWRlb1JlbGF0aW9uUGxheWxpc3QgPSBkYXRhXHJcbiAgICAubWFwKChjKSA9PiBjKVxyXG4gICAgLmZpbHRlcigoZCkgPT4gZC5wbGF5bGlzdCA9PT0gdmlkZW9EZXRhaWxzLnBsYXlsaXN0KTtcclxuXHJcbiAgc2V0UmVsYXRpb24odmlkZW9SZWxhdGlvblBsYXlsaXN0KTtcclxuXHJcbiAgY29uc3QgZ2V0RGV0YWlsc0RhdGEgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGRhdGVOZXcgPSBuZXcgRGF0ZSh2YWx1ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwicHQtQlJcIiwge1xyXG4gICAgICBkYXk6IFwiMi1kaWdpdFwiLFxyXG4gICAgICBtb250aDogXCIyLWRpZ2l0XCIsXHJcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYFZpZGVvIGVudmlhZG8gJHtkYXRlTmV3fWA7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTdHlsZWRNZW51IC8+XHJcbiAgICAgIDxTdHlsZWRWaWRlb1BhZ2U+XHJcbiAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aWZyYW1lXHJcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7aWR9YH1cclxuICAgICAgICAgICAgdGl0bGU9e1widmlkZW9EZXRhaWxzLnRpdGxlXCJ9XHJcbiAgICAgICAgICA+PC9pZnJhbWU+XHJcbiAgICAgICAgICA8aDI+e3ZpZGVvRGV0YWlscy50aXRsZX08L2gyPlxyXG4gICAgICAgICAgPHNwYW4+e2dldERldGFpbHNEYXRhKHZpZGVvRGV0YWlscy5jcmVhdGVkX2F0KX08L3NwYW4+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjE2cHhcIiB9fT5Ww61kZW9zIHJlbGFjaW9uYWRvczwvaDM+XHJcbiAgICAgICAgICB7cmVsYWN0aW9uLm1hcCgoaXRlbSkgPT57XHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIHsvKiB7cmVjb21lbmRhZG9zLmZpbHRlcihyZWNvbWVuZGFkbyA9PiByZWNvbWVuZGFkby5pZCAhPT0gaWQpLm1hcCgocmVsKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGtleT17cmVsLmlkfSBjbGFzc05hbWU9XCJsaW5rXCIgaHJlZj17YC92aWRlbz8ke3JlbC5pZH0ke3JlbC5wbGF5bGlzdH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZWwudGh1bWJ9IGFsdD17cmVsLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cmVsLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1N0eWxlZFZpZGVvUGFnZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwidmlkZW9zXCIpLnNlbGVjdChcIipcIik7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwiU3R5bGVkTWVudSIsIlN0eWxlZFZpZGVvUGFnZSIsIlZpZGVvcyIsImRhdGEiLCJyZWxhY3Rpb24iLCJzZXRSZWxhdGlvbiIsInF1ZXJ5IiwiaWQiLCJ2aWRlb0RldGFpbHMiLCJtYXAiLCJhIiwiZmlsdGVyIiwiYiIsInVybCIsImluY2x1ZGVzIiwidmlkZW9SZWxhdGlvblBsYXlsaXN0IiwiYyIsImQiLCJwbGF5bGlzdCIsImdldERldGFpbHNEYXRhIiwidmFsdWUiLCJkYXRlTmV3IiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsInNlY3Rpb24iLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImlmcmFtZSIsInNyYyIsInRpdGxlIiwiaDIiLCJzcGFuIiwiY3JlYXRlZF9hdCIsImRpdiIsImgzIiwibWFyZ2luQm90dG9tIiwiaXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/videos/[id].js\n"));

/***/ })

});