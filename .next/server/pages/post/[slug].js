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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @portabletext/react */ \"@portabletext/react\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client */ \"./client.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__]);\n_portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// [slug].js\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).image(source);\n}\nconst ptComponents = {\n    types: {\n        image: ({ value  })=>{\n            var ref;\n            if (!(value === null || value === void 0 ? void 0 : (ref = value.asset) === null || ref === void 0 ? void 0 : ref._ref)) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined);\n        }\n    }\n};\nconst Post = ({ post  })=>{\n    const { title =\"Missing title\" , name =\"Missing name\" , categories , authorImage , body =[]  } = post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: category\n                        }, category, false, {\n                            fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n                            lineNumber: 43,\n                            columnNumber: 39\n                        }, undefined)\n                    )\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(50).url(),\n                    alt: `${name}'s picture`\n                }, void 0, false, {\n                    fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                value: body,\n                components: ptComponents\n            }, void 0, false, {\n                fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macuser/Desktop/san/web/pages/post/[slug].js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0]{\n  title,\n  \"name\": author->name,\n  \"categories\": categories[]->title,\n  \"authorImage\": author->image,\n  body\n}`;\nasync function getStaticPaths() {\n    const paths = await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch((groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })\n        ),\n        fallback: false\n    };\n}\nasync function getStaticProps(context) {\n    // It's important to default the slug so that it doesn't return \"undefined\"\n    const { slug =\"\"  } = context.params;\n    const post = await _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch(query, {\n        slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBREEsWUFBWTtBQUNXO0FBQ3dCO0FBQ0M7QUFDZjtBQUVqQyxTQUFTSSxNQUFNLENBQUVDLE1BQU0sRUFBRTtJQUN2QixPQUFPSix3REFBZSxDQUFDRSwrQ0FBTSxDQUFDLENBQUNHLEtBQUssQ0FBQ0QsTUFBTSxDQUFDO0NBQzdDO0FBRUQsTUFBTUUsWUFBWSxHQUFHO0lBQ25CQyxLQUFLLEVBQUU7UUFDTEYsS0FBSyxFQUFFLENBQUMsRUFBRUcsS0FBSyxHQUFFLEdBQUs7Z0JBQ2ZBLEdBQVk7WUFBakIsSUFBSSxDQUFDQSxDQUFBQSxLQUFLLGFBQUxBLEtBQUssV0FBTyxHQUFaQSxLQUFBQSxDQUFZLEdBQVpBLENBQUFBLEdBQVksR0FBWkEsS0FBSyxDQUFFQyxLQUFLLGNBQVpELEdBQVksY0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxHQUFZLENBQUVFLElBQUksQ0FBTixFQUFRO2dCQUN2QixPQUFPLElBQUk7YUFDWjtZQUNELHFCQUNFLDhEQUFDQyxLQUFHO2dCQUNGQyxHQUFHLEVBQUVKLEtBQUssQ0FBQ0ksR0FBRyxJQUFJLEdBQUc7Z0JBQ3JCQyxPQUFPLEVBQUMsTUFBTTtnQkFDZEMsR0FBRyxFQUFFWCxNQUFNLENBQUNLLEtBQUssQ0FBQyxDQUFDTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDOzs7Ozt5QkFDbkUsQ0FDSDtTQUNGO0tBQ0Y7Q0FDRjtBQUVELE1BQU1DLElBQUksR0FBRyxDQUFDLEVBQUNDLElBQUksR0FBQyxHQUFLO0lBQ3ZCLE1BQU0sRUFDSkMsS0FBSyxFQUFHLGVBQWUsR0FDdkJDLElBQUksRUFBRyxjQUFjLEdBQ3JCQyxVQUFVLEdBQ1ZDLFdBQVcsR0FDWEMsSUFBSSxFQUFHLEVBQUUsR0FDVixHQUFHTCxJQUFJO0lBQ1IscUJBQ0UsOERBQUNNLFNBQU87OzBCQUNOLDhEQUFDQyxJQUFFOzBCQUFFTixLQUFLOzs7Ozt5QkFBTTswQkFDaEIsOERBQUNPLE1BQUk7O29CQUFDLEtBQUc7b0JBQUNOLElBQUk7Ozs7Ozt5QkFBUTtZQUNyQkMsVUFBVSxrQkFDVCw4REFBQ00sSUFBRTs7b0JBQUMsV0FFRjtvQkFBQ04sVUFBVSxDQUFDTyxHQUFHLENBQUNDLENBQUFBLFFBQVEsaUJBQUksOERBQUNDLElBQUU7c0NBQWlCRCxRQUFROzJCQUFuQkEsUUFBUTs7OztxQ0FBaUI7b0JBQUEsQ0FBQzs7Ozs7O3lCQUM1RDtZQUVOUCxXQUFXLGtCQUNWLDhEQUFDUyxLQUFHOzBCQUNGLDRFQUFDdEIsS0FBRztvQkFDRkcsR0FBRyxFQUFFWCxNQUFNLENBQUNxQixXQUFXLENBQUMsQ0FDckJULEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FDVG1CLEdBQUcsRUFBRTtvQkFDUnRCLEdBQUcsRUFBRSxDQUFDLEVBQUVVLElBQUksQ0FBQyxVQUFVLENBQUM7Ozs7OzZCQUN4Qjs7Ozs7eUJBQ0U7MEJBRVIsOERBQUNyQiw2REFBWTtnQkFDWE8sS0FBSyxFQUFFaUIsSUFBSTtnQkFDWFUsVUFBVSxFQUFFN0IsWUFBWTs7Ozs7eUJBQ3hCOzs7Ozs7aUJBQ00sQ0FDWDtDQUNGO0FBRUQsTUFBTThCLEtBQUssR0FBR3JDLDZDQUFJLENBQUM7Ozs7OztDQU1sQixDQUFDO0FBQ0ssZUFBZXNDLGNBQWMsR0FBRztJQUNyQyxNQUFNQyxLQUFLLEdBQUcsTUFBTXBDLHFEQUFZLENBQzlCSCw2Q0FBSSxDQUFDLDBEQUEwRCxDQUFDLENBQ2pFO0lBRUQsT0FBTztRQUNMdUMsS0FBSyxFQUFFQSxLQUFLLENBQUNSLEdBQUcsQ0FBQyxDQUFDVSxJQUFJLEdBQUssQ0FBQztnQkFBQ0MsTUFBTSxFQUFFO29CQUFDRCxJQUFJO2lCQUFDO2FBQUMsQ0FBQztRQUFBLENBQUM7UUFDOUNFLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0NBQ0Y7QUFFTSxlQUFlQyxjQUFjLENBQUNDLE9BQU8sRUFBRTtJQUM1QywyRUFBMkU7SUFDM0UsTUFBTSxFQUFFSixJQUFJLEVBQUcsRUFBRSxHQUFFLEdBQUdJLE9BQU8sQ0FBQ0gsTUFBTTtJQUNwQyxNQUFNckIsSUFBSSxHQUFHLE1BQU1sQixxREFBWSxDQUFDa0MsS0FBSyxFQUFFO1FBQUVJLElBQUk7S0FBRSxDQUFDO0lBQ2hELE9BQU87UUFDTEssS0FBSyxFQUFFO1lBQ0x6QixJQUFJO1NBQ0w7S0FDRjtDQUNGO0FBQ0QsaUVBQWVELElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz8zNDVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFtzbHVnXS5qc1xuaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5pbXBvcnQge1BvcnRhYmxlVGV4dH0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50J1xuXG5mdW5jdGlvbiB1cmxGb3IgKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxufVxuXG5jb25zdCBwdENvbXBvbmVudHMgPSB7XG4gIHR5cGVzOiB7XG4gICAgaW1hZ2U6ICh7IHZhbHVlIH0pID0+IHtcbiAgICAgIGlmICghdmFsdWU/LmFzc2V0Py5fcmVmKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgYWx0PXt2YWx1ZS5hbHQgfHwgJyAnfVxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICBzcmM9e3VybEZvcih2YWx1ZSkud2lkdGgoMzIwKS5oZWlnaHQoMjQwKS5maXQoJ21heCcpLmF1dG8oJ2Zvcm1hdCcpfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBQb3N0ID0gKHtwb3N0fSkgPT4ge1xuICBjb25zdCB7XG4gICAgdGl0bGUgPSAnTWlzc2luZyB0aXRsZScsXG4gICAgbmFtZSA9ICdNaXNzaW5nIG5hbWUnLFxuICAgIGNhdGVnb3JpZXMsXG4gICAgYXV0aG9ySW1hZ2UsXG4gICAgYm9keSA9IFtdXG4gIH0gPSBwb3N0XG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+XG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICA8c3Bhbj5CeSB7bmFtZX08L3NwYW4+XG4gICAgICB7Y2F0ZWdvcmllcyAmJiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICBQb3N0ZWQgaW5cbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gPGxpIGtleT17Y2F0ZWdvcnl9PntjYXRlZ29yeX08L2xpPil9XG4gICAgICAgIDwvdWw+XG4gICAgICApfVxuICAgICAge2F1dGhvckltYWdlICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3VybEZvcihhdXRob3JJbWFnZSlcbiAgICAgICAgICAgICAgLndpZHRoKDUwKVxuICAgICAgICAgICAgICAudXJsKCl9XG4gICAgICAgICAgICBhbHQ9e2Ake25hbWV9J3MgcGljdHVyZWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPFBvcnRhYmxlVGV4dFxuICAgICAgICB2YWx1ZT17Ym9keX1cbiAgICAgICAgY29tcG9uZW50cz17cHRDb21wb25lbnRzfVxuICAgICAgLz5cbiAgICA8L2FydGljbGU+XG4gIClcbn1cblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcbiAgdGl0bGUsXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG4gIGJvZHlcbn1gXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhdGhzID0gYXdhaXQgY2xpZW50LmZldGNoKFxuICAgIGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBkZWZpbmVkKHNsdWcuY3VycmVudCldW10uc2x1Zy5jdXJyZW50YFxuICApXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHMubWFwKChzbHVnKSA9PiAoe3BhcmFtczoge3NsdWd9fSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnBhcmFtc1xuICBjb25zdCBwb3N0ID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7IHNsdWcgfSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdFxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJuYW1lcyI6WyJncm9xIiwiaW1hZ2VVcmxCdWlsZGVyIiwiUG9ydGFibGVUZXh0IiwiY2xpZW50IiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJwdENvbXBvbmVudHMiLCJ0eXBlcyIsInZhbHVlIiwiYXNzZXQiLCJfcmVmIiwiaW1nIiwiYWx0IiwibG9hZGluZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiZml0IiwiYXV0byIsIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJuYW1lIiwiY2F0ZWdvcmllcyIsImF1dGhvckltYWdlIiwiYm9keSIsImFydGljbGUiLCJoMSIsInNwYW4iLCJ1bCIsIm1hcCIsImNhdGVnb3J5IiwibGkiLCJkaXYiLCJ1cmwiLCJjb21wb25lbnRzIiwicXVlcnkiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmV0Y2giLCJzbHVnIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

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