"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n// client.js\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"9n9rrysx\",\n    apiVersion: \"2022-04-19\",\n    dataset: \"production\",\n    useCdn: true // `false` if you want to ensure fresh data\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsWUFBWTtBQUM2QjtBQUV6QyxpRUFBZUEscURBQVksQ0FBQztJQUMxQkMsU0FBUyxFQUFFLFVBQVU7SUFDckJDLFVBQVUsRUFBRSxZQUFZO0lBQ3hCQyxPQUFPLEVBQUUsWUFBWTtJQUNyQkMsTUFBTSxFQUFFLElBQUksQ0FBQywyQ0FBMkM7Q0FDekQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL2NsaWVudC5qcz85NzE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNsaWVudC5qc1xuaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCdcblxuZXhwb3J0IGRlZmF1bHQgc2FuaXR5Q2xpZW50KHtcbiAgcHJvamVjdElkOiAnOW45cnJ5c3gnLCAvLyB5b3UgY2FuIGZpbmQgdGhpcyBpbiBzYW5pdHkuanNvblxuICBhcGlWZXJzaW9uOiAnMjAyMi0wNC0xOScsXG4gIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJywgLy8gb3IgdGhlIG5hbWUgeW91IGNob3NlIGluIHN0ZXAgMVxuICB1c2VDZG46IHRydWUgLy8gYGZhbHNlYCBpZiB5b3Ugd2FudCB0byBlbnN1cmUgZnJlc2ggZGF0YVxufSkiXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwicHJvamVjdElkIiwiYXBpVmVyc2lvbiIsImRhdGFzZXQiLCJ1c2VDZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client.js\n");

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @portabletext/react */ \"@portabletext/react\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__]);\n_portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).image(source);\n}\nconst ptComponents = {\n    types: {\n        image: ({ value  })=>{\n            var ref;\n            if (!(value === null || value === void 0 ? void 0 : (ref = value.asset) === null || ref === void 0 ? void 0 : ref._ref)) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined);\n        }\n    }\n};\nconst Post = ({ post  })=>{\n    const { title =\"Missing title\" , name =\"Missing name\" , categories , authorImage , body =[]  } = post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        \"PR - \",\n                        title\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"By \",\n                            name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            \"Posted in\",\n                            categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: category\n                                }, category, false, {\n                                    fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n                                    lineNumber: 47,\n                                    columnNumber: 41\n                                }, undefined)\n                            )\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined),\n                    authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: urlFor(authorImage).width(50).url(),\n                            alt: `${name}'s picture`\n                        }, void 0, false, {\n                            fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                        value: body,\n                        components: ptComponents\n                    }, void 0, false, {\n                        fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0]{\n  title,\n  \"name\": author->name,\n  \"categories\": categories[]->title,\n  \"authorImage\": author->image,\n  body\n}`;\nasync function getServerSideProps(context) {\n    // It's important to default the slug so that it doesn't return \"undefined\"\n    const { slug =\"\"  } = context.params;\n    const post = await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch(query, {\n        slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF1QjtBQUN3QjtBQUNDO0FBQ2Y7QUFDTDtBQUU1QixTQUFTSyxNQUFNLENBQUVDLE1BQU0sRUFBRTtJQUN2QixPQUFPTCx3REFBZSxDQUFDRSwrQ0FBTSxDQUFDLENBQUNJLEtBQUssQ0FBQ0QsTUFBTSxDQUFDO0NBQzdDO0FBRUQsTUFBTUUsWUFBWSxHQUFHO0lBQ25CQyxLQUFLLEVBQUU7UUFDTEYsS0FBSyxFQUFFLENBQUMsRUFBRUcsS0FBSyxHQUFFLEdBQUs7Z0JBQ2ZBLEdBQVk7WUFBakIsSUFBSSxDQUFDQSxDQUFBQSxLQUFLLGFBQUxBLEtBQUssV0FBTyxHQUFaQSxLQUFBQSxDQUFZLEdBQVpBLENBQUFBLEdBQVksR0FBWkEsS0FBSyxDQUFFQyxLQUFLLGNBQVpELEdBQVksY0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxHQUFZLENBQUVFLElBQUksQ0FBTixFQUFRO2dCQUN2QixPQUFPLElBQUk7YUFDWjtZQUNELHFCQUNFLDhEQUFDQyxLQUFHO2dCQUNGQyxHQUFHLEVBQUVKLEtBQUssQ0FBQ0ksR0FBRyxJQUFJLEdBQUc7Z0JBQ3JCQyxPQUFPLEVBQUMsTUFBTTtnQkFDZEMsR0FBRyxFQUFFWCxNQUFNLENBQUNLLEtBQUssQ0FBQyxDQUFDTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDOzs7Ozt5QkFDbkUsQ0FDSDtTQUNGO0tBQ0Y7Q0FDRjtBQUVELE1BQU1DLElBQUksR0FBRyxDQUFDLEVBQUNDLElBQUksR0FBQyxHQUFLO0lBQ3ZCLE1BQU0sRUFDSkMsS0FBSyxFQUFHLGVBQWUsR0FDdkJDLElBQUksRUFBRyxjQUFjLEdBQ3JCQyxVQUFVLEdBQ1ZDLFdBQVcsR0FDWEMsSUFBSSxFQUFHLEVBQUUsR0FDVixHQUFHTCxJQUFJO0lBQ1IscUJBQ0U7OzBCQUNFLDhEQUFDbEIsa0RBQUk7MEJBQ0gsNEVBQUNtQixPQUFLOzt3QkFBQyxPQUFLO3dCQUFDQSxLQUFLOzs7Ozs7NkJBQVM7Ozs7O3lCQUN0QjswQkFDUCw4REFBQ0ssU0FBTzs7a0NBQ04sOERBQUNDLElBQUU7a0NBQUVOLEtBQUs7Ozs7O2lDQUFNO2tDQUNoQiw4REFBQ08sTUFBSTs7NEJBQUMsS0FBRzs0QkFBQ04sSUFBSTs7Ozs7O2lDQUFRO29CQUNyQkMsVUFBVSxrQkFDVCw4REFBQ00sSUFBRTs7NEJBQUMsV0FFRjs0QkFBQ04sVUFBVSxDQUFDTyxHQUFHLENBQUNDLENBQUFBLFFBQVEsaUJBQUksOERBQUNDLElBQUU7OENBQWlCRCxRQUFRO21DQUFuQkEsUUFBUTs7Ozs2Q0FBaUI7NEJBQUEsQ0FBQzs7Ozs7O2lDQUM1RDtvQkFFTlAsV0FBVyxrQkFDViw4REFBQ1MsS0FBRztrQ0FDRiw0RUFBQ3RCLEtBQUc7NEJBQ0ZHLEdBQUcsRUFBRVgsTUFBTSxDQUFDcUIsV0FBVyxDQUFDLENBQ3JCVCxLQUFLLENBQUMsRUFBRSxDQUFDLENBQ1RtQixHQUFHLEVBQUU7NEJBQ1J0QixHQUFHLEVBQUUsQ0FBQyxFQUFFVSxJQUFJLENBQUMsVUFBVSxDQUFDOzs7OztxQ0FDeEI7Ozs7O2lDQUNFO2tDQUVSLDhEQUFDdEIsNkRBQVk7d0JBQ1hRLEtBQUssRUFBRWlCLElBQUk7d0JBQ1hVLFVBQVUsRUFBRTdCLFlBQVk7Ozs7O2lDQUN4Qjs7Ozs7O3lCQUNNOztvQkFDVCxDQUNKO0NBQ0Y7QUFFRCxNQUFNOEIsS0FBSyxHQUFHdEMsNkNBQUksQ0FBQzs7Ozs7O0NBTWxCLENBQUM7QUFDSyxlQUFldUMsa0JBQWtCLENBQUNDLE9BQU8sRUFBRTtJQUNoRCwyRUFBMkU7SUFDM0UsTUFBTSxFQUFFQyxJQUFJLEVBQUcsRUFBRSxHQUFFLEdBQUdELE9BQU8sQ0FBQ0UsTUFBTTtJQUNwQyxNQUFNcEIsSUFBSSxHQUFHLE1BQU1uQixxREFBWSxDQUFDbUMsS0FBSyxFQUFFO1FBQUVHLElBQUk7S0FBRSxDQUFDO0lBQ2hELE9BQU87UUFDTEcsS0FBSyxFQUFFO1lBQ0x0QixJQUFJO1NBQ0w7S0FDRjtDQUNGO0FBQ0QsaUVBQWVELElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz8zNDVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncm9xIGZyb20gJ2dyb3EnXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gJ0BzYW5pdHkvaW1hZ2UtdXJsJ1xuaW1wb3J0IHtQb3J0YWJsZVRleHR9IGZyb20gJ0Bwb3J0YWJsZXRleHQvcmVhY3QnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2NsaWVudCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cblxuY29uc3QgcHRDb21wb25lbnRzID0ge1xuICB0eXBlczoge1xuICAgIGltYWdlOiAoeyB2YWx1ZSB9KSA9PiB7XG4gICAgICBpZiAoIXZhbHVlPy5hc3NldD8uX3JlZikge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIGFsdD17dmFsdWUuYWx0IHx8ICcgJ31cbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgc3JjPXt1cmxGb3IodmFsdWUpLndpZHRoKDMyMCkuaGVpZ2h0KDI0MCkuZml0KCdtYXgnKS5hdXRvKCdmb3JtYXQnKX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgUG9zdCA9ICh7cG9zdH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHRpdGxlID0gJ01pc3NpbmcgdGl0bGUnLFxuICAgIG5hbWUgPSAnTWlzc2luZyBuYW1lJyxcbiAgICBjYXRlZ29yaWVzLFxuICAgIGF1dGhvckltYWdlLFxuICAgIGJvZHkgPSBbXVxuICB9ID0gcG9zdFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBSIC0ge3RpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICA8c3Bhbj5CeSB7bmFtZX08L3NwYW4+XG4gICAgICAgIHtjYXRlZ29yaWVzICYmIChcbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICBQb3N0ZWQgaW5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiA8bGkga2V5PXtjYXRlZ29yeX0+e2NhdGVnb3J5fTwvbGk+KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICApfVxuICAgICAgICB7YXV0aG9ySW1hZ2UgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17dXJsRm9yKGF1dGhvckltYWdlKVxuICAgICAgICAgICAgICAgIC53aWR0aCg1MClcbiAgICAgICAgICAgICAgICAudXJsKCl9XG4gICAgICAgICAgICAgIGFsdD17YCR7bmFtZX0ncyBwaWN0dXJlYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxQb3J0YWJsZVRleHRcbiAgICAgICAgICB2YWx1ZT17Ym9keX1cbiAgICAgICAgICBjb21wb25lbnRzPXtwdENvbXBvbmVudHN9XG4gICAgICAgIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcbiAgdGl0bGUsXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG4gIGJvZHlcbn1gXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5wYXJhbXNcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwibmFtZXMiOlsiZ3JvcSIsImltYWdlVXJsQnVpbGRlciIsIlBvcnRhYmxlVGV4dCIsImNsaWVudCIsIkhlYWQiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsInB0Q29tcG9uZW50cyIsInR5cGVzIiwidmFsdWUiLCJhc3NldCIsIl9yZWYiLCJpbWciLCJhbHQiLCJsb2FkaW5nIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJmaXQiLCJhdXRvIiwiUG9zdCIsInBvc3QiLCJ0aXRsZSIsIm5hbWUiLCJjYXRlZ29yaWVzIiwiYXV0aG9ySW1hZ2UiLCJib2R5IiwiYXJ0aWNsZSIsImgxIiwic3BhbiIsInVsIiwibWFwIiwiY2F0ZWdvcnkiLCJsaSIsImRpdiIsInVybCIsImNvbXBvbmVudHMiLCJxdWVyeSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJzbHVnIiwicGFyYW1zIiwiZmV0Y2giLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("groq");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@portabletext/react":
/*!**************************************!*\
  !*** external "@portabletext/react" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@portabletext/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post/[slug].js"));
module.exports = __webpack_exports__;

})();