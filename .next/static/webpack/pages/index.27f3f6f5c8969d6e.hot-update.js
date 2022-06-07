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

/***/ "./components/masthead.tsx":
/*!*********************************!*\
  !*** ./components/masthead.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_scroll_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/scroll-observer */ \"./utils/scroll-observer.tsx\");\n/* harmony import */ var _typewriter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typewriter */ \"./components/typewriter.tsx\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Masthead = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), imageLoaded = ref[0], setImageLoaded = ref[1];\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var scrollY = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_scroll_observer__WEBPACK_IMPORTED_MODULE_3__.ScrollContext).scrollY;\n    var progress = 0;\n    var elContainer = refContainer.current;\n    if (elContainer) {\n        progress = Math.min(1, scrollY / elContainer.clientHeight);\n    }\n    var handleImageLoaded = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        setTimeout(function() {\n            setImageLoaded(true);\n        }, 5200);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: refContainer,\n        className: \"sticky top-0 -z-10 flex min-h-screen flex-col items-center justify-center\",\n        style: {\n            transform: \"translateY(-\".concat(progress * 20, \"vh)\")\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                autoPlay: true,\n                loop: true,\n                muted: true,\n                playsInline: true,\n                className: \"absolute h-full w-full object-cover\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: \"/assets/porsche.mp4\",\n                    type: \"video/mp4\"\n                }, void 0, false, {\n                    fileName: \"/Users/gaute/SideProjects/geerondev/porsche-take-home-geeron/components/masthead.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/gaute/SideProjects/geerondev/porsche-take-home-geeron/components/masthead.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10 flex flex-1 flex-col items-center justify-center p-12 text-center font-bold text-white drop-shadow-sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"mb-6 px-2 text-4xl xl:text-5xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"tracking-widest bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text font-extrabold text-transparent\",\n                            children: \"Gaute Rongve\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gaute/SideProjects/geerondev/porsche-take-home-geeron/components/masthead.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/gaute/SideProjects/geerondev/porsche-take-home-geeron/components/masthead.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mb-2 w-full text-xl tracking-tight xl:text-3xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ml-1 -mt-4 flex justify-items-start xl:-ml-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_typewriter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/gaute/SideProjects/geerondev/porsche-take-home-geeron/components/masthead.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/gaute/SideProjects/geerondev/porsche-take-home-geeron/components/masthead.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/gaute/SideProjects/geerondev/porsche-take-home-geeron/components/masthead.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gaute/SideProjects/geerondev/porsche-take-home-geeron/components/masthead.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"duration-2000 flex-grow-0 animate-bounce pb-20 transition-opacity md:pb-10  \".concat(imageLoaded ? \" opacity-100\" : \"opacity-0\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/assets/arrow.png\",\n                    width: 80,\n                    height: 80,\n                    alt: \"scroll down\",\n                    onLoad: handleImageLoaded\n                }, void 0, false, {\n                    fileName: \"/Users/gaute/SideProjects/geerondev/porsche-take-home-geeron/components/masthead.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/gaute/SideProjects/geerondev/porsche-take-home-geeron/components/masthead.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gaute/SideProjects/geerondev/porsche-take-home-geeron/components/masthead.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(Masthead, \"Dda9bXs29YYRXuAmS+2TU4r4G24=\");\n_c = Masthead;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Masthead);\nvar _c;\n$RefreshReg$(_c, \"Masthead\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21hc3RoZWFkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBeUU7QUFDMUM7QUFDMEI7QUFDbkI7O0FBRXRDLElBQU1RLFFBQVEsR0FBYSxXQUFNOztJQUMvQixJQUFzQ0wsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQU52RCxXQU1vQixHQUFvQkEsR0FBZSxHQUFuQyxFQU5wQixjQU1vQyxHQUFJQSxHQUFlLEdBQW5CO0lBQ2xDLElBQU1RLFlBQVksR0FBR1YsNkNBQU0sQ0FBaUIsSUFBSSxDQUFDO0lBQ2pELElBQU0sT0FBUyxHQUFLQyxpREFBVSxDQUFDSSxpRUFBYSxDQUFDLENBQXJDTSxPQUFPO0lBRWYsSUFBSUMsUUFBUSxHQUFHLENBQUM7SUFFaEIsSUFBUUMsV0FBb0IsR0FBS0gsWUFBWSxDQUFyQ0csT0FBTztJQUNmLElBQUlDLFdBQVcsRUFBRTtRQUNmRixRQUFRLEdBQUdHLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsRUFBRUwsT0FBTyxHQUFHRyxXQUFXLENBQUNHLFlBQVksQ0FBQyxDQUFDO0tBQzVEO0lBRUQsSUFBTUMsaUJBQWlCLEdBQUdmLGtEQUFXLENBQUMsV0FBTTtRQUMxQ2dCLFVBQVUsQ0FBQyxXQUFNO1lBQ2ZWLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QixFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ1YsRUFBRSxFQUFFLENBQUM7SUFFTixxQkFDRSw4REFBQ1csS0FBRztRQUNGQyxHQUFHLEVBQUVYLFlBQVk7UUFDakJZLFNBQVMsRUFBQywyRUFBMkU7UUFDckZDLEtBQUssRUFBRTtZQUNMQyxTQUFTLEVBQUUsY0FBYSxDQUFnQixNQUFHLENBQWpCWixRQUFRLEdBQUcsRUFBRSxFQUFDLEtBQUcsQ0FBQztTQUM3Qzs7MEJBRUQsOERBQUNhLE9BQUs7Z0JBQ0pDLFFBQVE7Z0JBQ1JDLElBQUk7Z0JBQ0pDLEtBQUs7Z0JBQ0xDLFdBQVc7Z0JBQ1hQLFNBQVMsRUFBQyxxQ0FBcUM7MEJBRS9DLDRFQUFDUSxRQUFNO29CQUFDQyxHQUFHLEVBQUMscUJBQXFCO29CQUFDQyxJQUFJLEVBQUMsV0FBVzs7Ozs7eUJBQUc7Ozs7O3FCQUMvQzswQkFFUiw4REFBQ1osS0FBRztnQkFBQ0UsU0FBUyxFQUFDLDRHQUE0Rzs7a0NBQ3pILDhEQUFDVyxJQUFFO3dCQUFDWCxTQUFTLEVBQUMsZ0NBQWdDO2tDQUM1Qyw0RUFBQ1ksTUFBSTs0QkFBQ1osU0FBUyxFQUFDLDRHQUE0RztzQ0FBQyxjQUU3SDs7Ozs7aUNBQU87Ozs7OzZCQUNKO2tDQUNMLDhEQUFDYSxJQUFFO3dCQUFDYixTQUFTLEVBQUMsZ0RBQWdEO2tDQUM1RCw0RUFBQ0YsS0FBRzs0QkFBQ0UsU0FBUyxFQUFDLDhDQUE4QztzQ0FDM0QsNEVBQUNoQixtREFBVTs7OztxQ0FBYzs7Ozs7aUNBQ3JCOzs7Ozs2QkFDSDs7Ozs7O3FCQUNEOzBCQUNOLDhEQUFDYyxLQUFHO2dCQUNGRSxTQUFTLEVBQUUsOEVBQTZFLENBRXZGLE9BRENkLFdBQVcsR0FBRyxjQUFjLEdBQUcsV0FBVyxDQUMxQzswQkFFRiw0RUFBQ0osbURBQUs7b0JBQ0oyQixHQUFHLEVBQUMsbUJBQW1CO29CQUN2QkssS0FBSyxFQUFFLEVBQUU7b0JBQ1RDLE1BQU0sRUFBRSxFQUFFO29CQUNWQyxHQUFHLEVBQUMsYUFBYTtvQkFDakJDLE1BQU0sRUFBRXJCLGlCQUFpQjs7Ozs7eUJBQ2xCOzs7OztxQkFDTDs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBL0RLWCxRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFpRWQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21hc3RoZWFkLnRzeD8wNWE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBTY3JvbGxDb250ZXh0IH0gZnJvbSBcIi4uL3V0aWxzL3Njcm9sbC1vYnNlcnZlclwiO1xuaW1wb3J0IFR5cGVXcml0ZXIgZnJvbSBcIi4vdHlwZXdyaXRlclwiO1xuXG5jb25zdCBNYXN0aGVhZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtpbWFnZUxvYWRlZCwgc2V0SW1hZ2VMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByZWZDb250YWluZXIgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCB7IHNjcm9sbFkgfSA9IHVzZUNvbnRleHQoU2Nyb2xsQ29udGV4dCk7XG5cbiAgbGV0IHByb2dyZXNzID0gMDtcblxuICBjb25zdCB7IGN1cnJlbnQ6IGVsQ29udGFpbmVyIH0gPSByZWZDb250YWluZXI7XG4gIGlmIChlbENvbnRhaW5lcikge1xuICAgIHByb2dyZXNzID0gTWF0aC5taW4oMSwgc2Nyb2xsWSAvIGVsQ29udGFpbmVyLmNsaWVudEhlaWdodCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVJbWFnZUxvYWRlZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEltYWdlTG9hZGVkKHRydWUpO1xuICAgIH0sIDUyMDApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByZWY9e3JlZkNvbnRhaW5lcn1cbiAgICAgIGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCAtei0xMCBmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtJHtwcm9ncmVzcyAqIDIwfXZoKWAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDx2aWRlb1xuICAgICAgICBhdXRvUGxheVxuICAgICAgICBsb29wXG4gICAgICAgIG11dGVkXG4gICAgICAgIHBsYXlzSW5saW5lXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyXCJcbiAgICAgID5cbiAgICAgICAgPHNvdXJjZSBzcmM9XCIvYXNzZXRzL3BvcnNjaGUubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICA8L3ZpZGVvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTAgZmxleCBmbGV4LTEgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMTIgdGV4dC1jZW50ZXIgZm9udC1ib2xkIHRleHQtd2hpdGUgZHJvcC1zaGFkb3ctc21cIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTYgcHgtMiB0ZXh0LTR4bCB4bDp0ZXh0LTV4bFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyYWNraW5nLXdpZGVzdCBiZy1ncmFkaWVudC10by1yIGZyb20tb3JhbmdlLTUwMCB0by1hbWJlci01MDAgYmctY2xpcC10ZXh0IGZvbnQtZXh0cmFib2xkIHRleHQtdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgIEdhdXRlIFJvbmd2ZVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTIgdy1mdWxsIHRleHQteGwgdHJhY2tpbmctdGlnaHQgeGw6dGV4dC0zeGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTEgLW10LTQgZmxleCBqdXN0aWZ5LWl0ZW1zLXN0YXJ0IHhsOi1tbC0zXCI+XG4gICAgICAgICAgICA8VHlwZVdyaXRlcj48L1R5cGVXcml0ZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgZHVyYXRpb24tMjAwMCBmbGV4LWdyb3ctMCBhbmltYXRlLWJvdW5jZSBwYi0yMCB0cmFuc2l0aW9uLW9wYWNpdHkgbWQ6cGItMTAgICR7XG4gICAgICAgICAgaW1hZ2VMb2FkZWQgPyBcIiBvcGFjaXR5LTEwMFwiIDogXCJvcGFjaXR5LTBcIlxuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPVwiL2Fzc2V0cy9hcnJvdy5wbmdcIlxuICAgICAgICAgIHdpZHRoPXs4MH1cbiAgICAgICAgICBoZWlnaHQ9ezgwfVxuICAgICAgICAgIGFsdD1cInNjcm9sbCBkb3duXCJcbiAgICAgICAgICBvbkxvYWQ9e2hhbmRsZUltYWdlTG9hZGVkfVxuICAgICAgICA+PC9JbWFnZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFzdGhlYWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsIkltYWdlIiwiU2Nyb2xsQ29udGV4dCIsIlR5cGVXcml0ZXIiLCJNYXN0aGVhZCIsImltYWdlTG9hZGVkIiwic2V0SW1hZ2VMb2FkZWQiLCJyZWZDb250YWluZXIiLCJzY3JvbGxZIiwicHJvZ3Jlc3MiLCJjdXJyZW50IiwiZWxDb250YWluZXIiLCJNYXRoIiwibWluIiwiY2xpZW50SGVpZ2h0IiwiaGFuZGxlSW1hZ2VMb2FkZWQiLCJzZXRUaW1lb3V0IiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJ2aWRlbyIsImF1dG9QbGF5IiwibG9vcCIsIm11dGVkIiwicGxheXNJbmxpbmUiLCJzb3VyY2UiLCJzcmMiLCJ0eXBlIiwiaDEiLCJzcGFuIiwiaDIiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIm9uTG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/masthead.tsx\n");

/***/ })

});