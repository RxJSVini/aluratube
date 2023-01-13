"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _src_components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Menu */ \"./src/components/Menu/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _src_components_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/SEO */ \"./src/components/SEO.js\");\n/* harmony import */ var _src_components_TimeLine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/TimeLine */ \"./src/components/TimeLine.js\");\n/* harmony import */ var _src_components_Favoritos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Favoritos */ \"./src/components/Favoritos.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_components_Banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/Banner */ \"./src/components/Banner.js\");\n/* harmony import */ var _src_services_videoServiceSupaBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/services/videoServiceSupaBase */ \"./src/services/videoServiceSupaBase.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background-color: \",\n        \";\\n  img {\\n    width: 80px;\\n    height: 80px;\\n    border-radius: 50%;\\n  }\\n  .user-info {\\n    display: flex;\\n    align-items: center;\\n    width: 100%;\\n    padding: 16px 32px;\\n    gap: 16px;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [valorDoFiltro, setValorDoFiltro] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [playlist, setPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({});\n    const service = (0,_src_services_videoServiceSupaBase__WEBPACK_IMPORTED_MODULE_9__.videoService)();\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        service.getAllVideos().then((response)=>{\n            const novasPlaylists = {\n                ...playlist\n            };\n            response.data.forEach((video)=>{\n                if (!novasPlaylists[video.playlist]) {\n                    novasPlaylists[video.playlist] = [];\n                }\n                ;\n                novasPlaylists[video.playlist].push(video);\n            });\n            setPlaylist(novasPlaylists);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            flex: 1\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_SEO__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    title: \"Aluratube\",\n                    description: \"Projeto Desenvolvido durante a imers\\xe3o React.js da Alura\",\n                    author: \"Vinicius P\",\n                    keywords: \"Javascript, Nodejs, Reactjs\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\index.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    valorDoFiltro: valorDoFiltro,\n                    setValorDoFiltro: setValorDoFiltro\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\index.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\index.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_TimeLine__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    playlist: playlist,\n                    searchValue: valorDoFiltro\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\index.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_Favoritos__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    favoritos: _config_json__WEBPACK_IMPORTED_MODULE_3__.channels.favorites\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\index.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\index.js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\index.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"dfKX7JIoccFc3IZ1EGYz7nNegyA=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nconst StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div.withConfig({\n    displayName: \"pages__StyledHeader\",\n    componentId: \"sc-6c32610-0\"\n})(_templateObject(), (param)=>{\n    let { theme  } = param;\n    return theme.backgroundLevel1;\n});\n_c1 = StyledHeader;\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledHeader, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_components_Banner__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                imageLink: _config_json__WEBPACK_IMPORTED_MODULE_3__.bg\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\index.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: \"user-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: \"https://github.com/\".concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.github, \".png\"),\n                        alt: \"fotinho-do-perfil\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\index.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_3__.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\index.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_3__.job\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\index.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\index.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vinicius.pereira\\\\Downloads\\\\Dev\\\\aluratube\\\\pages\\\\index.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_c2 = Header;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c1, \"StyledHeader\");\n$RefreshReg$(_c2, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0c7QUFDTjtBQUNJO0FBQ1U7QUFDRTtBQUNSO0FBQ0U7QUFDc0I7QUFHcEUsU0FBU1UsV0FBVzs7SUFDbEIsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR04sK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDLENBQUM7SUFDMUMsTUFBTVMsVUFBVU4sZ0ZBQVlBO0lBRTVCRixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RRLFFBQ0tDLFlBQVksR0FDWkMsSUFBSSxDQUFDLENBQUNDLFdBQWE7WUFFaEIsTUFBTUMsaUJBQWlCO2dCQUFDLEdBQUdOLFFBQVE7WUFBQTtZQUNuQ0ssU0FBU0UsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQ0MsUUFBVTtnQkFDN0IsSUFBSSxDQUFDSCxjQUFjLENBQUNHLE1BQU1ULFFBQVEsQ0FBQyxFQUFFO29CQUNqQ00sY0FBYyxDQUFDRyxNQUFNVCxRQUFRLENBQUMsR0FBRyxFQUFFO2dCQUN2QyxDQUFDOztnQkFDRE0sY0FBYyxDQUFDRyxNQUFNVCxRQUFRLENBQUMsQ0FBQ1UsSUFBSSxDQUFDRDtZQUN4QztZQUNBUixZQUFZSztRQUNoQjtJQUNSLEdBQ0ksRUFBRTtJQUdKLHFCQUNFLDhEQUFDSztRQUNDQyxPQUFPO1lBQ0xDLFNBQVM7WUFDVEMsZUFBZTtZQUNmQyxNQUFNO1FBQ1I7a0JBRUEsNEVBQUNKOzs4QkFDQyw4REFBQ3JCLDJEQUFHQTtvQkFDRjBCLE9BQU07b0JBQ05DLGFBQVk7b0JBQ1pDLFFBQU87b0JBQ1BDLFVBQVM7Ozs7Ozs4QkFFWCw4REFBQy9CLDREQUFJQTtvQkFDSFUsZUFBZUE7b0JBQ2ZDLGtCQUFrQkE7Ozs7Ozs4QkFFcEIsOERBQUNxQjs7Ozs7OEJBRUQsOERBQUM3QixnRUFBUUE7b0JBQUNTLFVBQVVBO29CQUFVcUIsYUFBYXZCOzs7Ozs7OEJBQzNDLDhEQUFDTixpRUFBU0E7b0JBQUM4QixXQUFXakMsNERBQXlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl2RDtHQWpEU1E7S0FBQUE7QUFtRFQsK0RBQWVBLFFBQVFBLEVBQUM7QUFFeEIsTUFBTTRCLGVBQWV0Qyx5RUFBVTs7O3NCQUNULFNBQWV1QztRQUFkLEVBQUVBLE1BQUssRUFBRTtXQUFLQSxNQUFNQyxnQkFBZ0I7QUFBRDtNQURwREY7QUFlTixTQUFTTCxTQUFTO0lBQ2hCLHFCQUNFLDhEQUFDSzs7MEJBQ0MsOERBQUM5Qiw4REFBTUE7Z0JBQUNpQyxXQUFXdkMsNENBQVM7Ozs7OzswQkFDNUIsOERBQUN5QztnQkFBUUMsV0FBVTs7a0NBQ2pCLDhEQUFDQzt3QkFDQ0MsS0FBSyxzQkFBb0MsT0FBZDVDLGdEQUFhLEVBQUM7d0JBQ3pDOEMsS0FBSTs7Ozs7O2tDQUVOLDhEQUFDeEI7OzBDQUNDLDhEQUFDeUI7MENBQUkvQyw4Q0FBVzs7Ozs7OzBDQUNoQiw4REFBQ2lEOzBDQUFHakQsNkNBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt4QjtNQWhCUytCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL01lbnVcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcclxuaW1wb3J0IFNFTyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvU0VPXCI7XHJcbmltcG9ydCBUaW1lTGluZSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmVcIjtcclxuaW1wb3J0IEZhdm9yaXRvcyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvRmF2b3JpdG9zXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQmFubmVyXCI7XHJcbmltcG9ydCB7IHZpZGVvU2VydmljZSB9IGZyb20gXCIuLi9zcmMvc2VydmljZXMvdmlkZW9TZXJ2aWNlU3VwYUJhc2VcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICBjb25zdCBbdmFsb3JEb0ZpbHRybywgc2V0VmFsb3JEb0ZpbHRyb10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGxheWxpc3QsIHNldFBsYXlsaXN0XSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBzZXJ2aWNlID0gdmlkZW9TZXJ2aWNlKCk7ICBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNlcnZpY2VcclxuICAgICAgICAuZ2V0QWxsVmlkZW9zKClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICBcclxuICAgICAgICAgICAgY29uc3Qgbm92YXNQbGF5bGlzdHMgPSB7Li4ucGxheWxpc3R9O1xyXG4gICAgICAgICAgICByZXNwb25zZS5kYXRhLmZvckVhY2goKHZpZGVvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW5vdmFzUGxheWxpc3RzW3ZpZGVvLnBsYXlsaXN0XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdmFzUGxheWxpc3RzW3ZpZGVvLnBsYXlsaXN0XSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIG5vdmFzUGxheWxpc3RzW3ZpZGVvLnBsYXlsaXN0XS5wdXNoKHZpZGVvKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldFBsYXlsaXN0KG5vdmFzUGxheWxpc3RzKTtcclxuICAgICAgICB9KTtcclxufSxcclxuICAgIFtdLFxyXG4pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgZmxleDogMSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8U0VPXHJcbiAgICAgICAgICB0aXRsZT1cIkFsdXJhdHViZVwiXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlByb2pldG8gRGVzZW52b2x2aWRvIGR1cmFudGUgYSBpbWVyc8OjbyBSZWFjdC5qcyBkYSBBbHVyYVwiXHJcbiAgICAgICAgICBhdXRob3I9XCJWaW5pY2l1cyBQXCJcclxuICAgICAgICAgIGtleXdvcmRzPVwiSmF2YXNjcmlwdCwgTm9kZWpzLCBSZWFjdGpzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxNZW51XHJcbiAgICAgICAgICB2YWxvckRvRmlsdHJvPXt2YWxvckRvRmlsdHJvfVxyXG4gICAgICAgICAgc2V0VmFsb3JEb0ZpbHRybz17c2V0VmFsb3JEb0ZpbHRyb31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuXHJcbiAgICAgICAgPFRpbWVMaW5lIHBsYXlsaXN0PXtwbGF5bGlzdH0gc2VhcmNoVmFsdWU9e3ZhbG9yRG9GaWx0cm99IC8+XHJcbiAgICAgICAgPEZhdm9yaXRvcyBmYXZvcml0b3M9e2NvbmZpZy5jaGFubmVscy5mYXZvcml0ZXN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcblxyXG5jb25zdCBTdHlsZWRIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZExldmVsMX07XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAudXNlci1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbiAgICBnYXA6IDE2cHg7XHJcbiAgfVxyXG5gO1xyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRIZWFkZXI+XHJcbiAgICAgIDxCYW5uZXIgaW1hZ2VMaW5rPXtjb25maWcuYmd9IC8+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInVzZXItaW5mb1wiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke2NvbmZpZy5naXRodWJ9LnBuZ2B9XHJcbiAgICAgICAgICBhbHQ9XCJmb3RpbmhvLWRvLXBlcmZpbFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgyPntjb25maWcubmFtZX08L2gyPlxyXG4gICAgICAgICAgPHA+e2NvbmZpZy5qb2J9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L1N0eWxlZEhlYWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJNZW51IiwiY29uZmlnIiwiU0VPIiwiVGltZUxpbmUiLCJGYXZvcml0b3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJhbm5lciIsInZpZGVvU2VydmljZSIsIkhvbWVQYWdlIiwidmFsb3JEb0ZpbHRybyIsInNldFZhbG9yRG9GaWx0cm8iLCJwbGF5bGlzdCIsInNldFBsYXlsaXN0Iiwic2VydmljZSIsImdldEFsbFZpZGVvcyIsInRoZW4iLCJyZXNwb25zZSIsIm5vdmFzUGxheWxpc3RzIiwiZGF0YSIsImZvckVhY2giLCJ2aWRlbyIsInB1c2giLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdXRob3IiLCJrZXl3b3JkcyIsIkhlYWRlciIsInNlYXJjaFZhbHVlIiwiZmF2b3JpdG9zIiwiY2hhbm5lbHMiLCJmYXZvcml0ZXMiLCJTdHlsZWRIZWFkZXIiLCJ0aGVtZSIsImJhY2tncm91bmRMZXZlbDEiLCJpbWFnZUxpbmsiLCJiZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJnaXRodWIiLCJhbHQiLCJoMiIsIm5hbWUiLCJwIiwiam9iIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});