/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/beauty-mountains-font/BeautyMountainsPersonalUse-od7z.ttf */ "./src/fonts/beauty-mountains-font/BeautyMountainsPersonalUse-od7z.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "mountains";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 400;
  font-style: normal;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  display: flex;
  flex-direction: column;
  padding-inline: 2rem;
  padding-block: 1rem;
  justify-content: center;
  align-items: center;
  background-color: #F8F7FF;
}

.title {
  text-decoration: underline;
  font-family: "mountains", Arial, Helvetica, sans-serif;
  font-size: 60px;
  margin: 0;
  font-weight: bolder;
  font-style: italic;
}

.game-boards {
  display: grid;
  gap: 2rem;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(2, 1fr);
  width: min(50rem, 100%);
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.board {
  display: grid;
  grid-template: repeat(10, 1fr)/repeat(10, 1fr);
  aspect-ratio: 1/1;
  grid-auto-flow: dense;
  transform: scaleY(-1); /* mirror vertically */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}

.boardCell {
  width: 100%;
  aspect-ratio: 1/1;
  margin: 0;
  border: solid 0.2px paleturquoise;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  padding: 0;
  font-weight: bold;
}

.ship-cell {
  background-color: paleturquoise;
  border: none;
}

.disable {
  opacity: 0.5;
}

.winner {
  min-width: 5rem;
  min-height: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-family: "mountains", Arial, Helvetica, sans-serif;
  color: green;
  font-size: 32px;
}

.piece {
  width: 2rem;
  aspect-ratio: 1/1;
  background-color: paleturquoise;
}

.hor {
  display: flex;
}

.game-pieces {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
  width: 100%;
}
.game-pieces > * {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}

.valid-hit {
  border: solid green 0.2px;
  color: green;
}

.miss {
  border: crimson solid 0.2px;
  color: red;
}

.highlight {
  background-color: thistle;
}

.not-visible {
  display: none;
}

.btn {
  padding: 0.25rem 1rem;
  font-size: 20px;
  font-weight: bold;
  border-radius: 2rem;
  background-color: green;
  border: none;
}

.gamePiece:hover {
  cursor: pointer;
}

.announce1 {
  color: green;
  font-size: 32px;
}

.announce {
  color: turquoise;
  font-size: 32px;
}`, "",{"version":3,"sources":["webpack://./src/sass/main.scss"],"names":[],"mappings":"AAGA;EACE,wBAAA;EACA,4CAAA;EACA,gBAAA;EACA,kBAAA;AAFF;AAKA;EACE,sBAAA;EACA,UAAA;EACA,SAAA;AAHF;;AAKA;EACE,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AAFF;;AAIA;EACE,0BAAA;EACA,sDAAA;EACA,eAAA;EACA,SAAA;EACA,mBAAA;EACA,kBAAA;AADF;;AAGA;EACE,aAAA;EACA,SAAA;EACA,kCAAA;EACA,qCAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;AAAF;;AAEA;EACE,aAAA;EACA,8CAAA;EACE,iBAAA;EACA,qBAAA;EACA,qBAAA,EAAA,sBAAA;EAEA,sFAAA;AAAJ;;AAEA;EACE,WAAA;EACA,iBAAA;EACE,SAAA;EACF,iCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,iBAAA;EACA,UAAA;EACA,iBAAA;AACF;;AACA;EACE,+BAAA;EACA,YAAA;AAEF;;AACA;EACE,YAAA;AAEF;;AACA;EACE,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,qBAAA;EACA,sDAAA;EACA,YAAA;EACA,eAAA;AAEF;;AAEA;EACE,WAAA;EACA,iBAAA;EACA,+BAAA;AACF;;AACA;EACE,aAAA;AAEF;;AAAA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,oBAAA;EACA,WAAA;AAGF;AAFE;EAEE,sFAAA;AAGJ;;AAEA;EACE,yBAAA;EACA,YAAA;AACF;;AACA;EACE,2BAAA;EACA,UAAA;AAEF;;AAEA;EACE,yBAAA;AACF;;AAEA;EACE,aAAA;AACF;;AAEA;EACE,qBAAA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;AACF;;AAEE;EACE,eAAA;AACJ;;AAEA;EACE,YAAA;EACA,eAAA;AACF;;AACA;EACE,gBAAA;EACA,eAAA;AAEF","sourcesContent":["$borderColor: purple;\n$borderSize: 1px;\n\n@font-face {\n  font-family: 'mountains';\n  src: url('../fonts/beauty-mountains-font/BeautyMountainsPersonalUse-od7z.ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n\n*{\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nbody{\n  display: flex;\n  flex-direction: column;\n  padding-inline: 2rem;\n  padding-block: 1rem;\n  justify-content: center;\n  align-items: center;\n  background-color: #F8F7FF;\n}\n.title{\n  text-decoration: underline;\n  font-family: 'mountains', Arial, Helvetica, sans-serif;\n  font-size: 60px;\n  margin: 0;\n  font-weight: bolder;\n  font-style: italic;\n}\n.game-boards{\n  display: grid;\n  gap: 2rem;\n  grid-template-rows: repeat(1, 1fr);\n  grid-template-columns: repeat(2, 1fr);\n  width: min(50rem,100%);\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.board{\n  display: grid;\n  grid-template: repeat(10, 1fr)/repeat(10, 1fr);\n    aspect-ratio: 1/1;\n    grid-auto-flow: dense;\n    transform: scaleY(-1); /* mirror vertically */\n    // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;\n}\n.boardCell{\n  width: 100%;\n  aspect-ratio: 1/1;\n    margin:0;\n  border: solid .2px paleturquoise;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 1.2rem;\n  padding: 0;\n  font-weight: bold;\n}\n.ship-cell{\n  background-color: paleturquoise;\n  border: none;\n}\n\n.disable{\n  opacity: .5;\n}\n\n.winner{\n  min-width: 5rem;\n  min-height: 2rem;\n  padding: .5rem 1rem;\n  border-radius: 0.5rem;\n  font-family: 'mountains', Arial, Helvetica, sans-serif;\n  color: green;\n  font-size: 32px;\n}\n\n\n.piece{\n  width: 2rem;\n  aspect-ratio: 1/1;\n  background-color: paleturquoise;\n}\n.hor{\n  display: flex;\n}\n.game-pieces{\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  align-items: center;\n  justify-content: center;\n  align-self: center;\n  justify-self: center;\n  width: 100%;\n  &>*{\n    // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;\n\n  }\n}\n\n.valid-hit{\n  border: solid green .2px;\n  color: green;\n}\n.miss{\n  border: crimson solid .2px;\n  color:red;\n\n}\n\n.highlight{\n  background-color: thistle;\n}\n\n.not-visible{\n  display: none;\n}\n\n.btn{\n  padding: .25rem 1rem;\n  font-size: 20px;\n  font-weight: bold;\n  border-radius: 2rem;\n  background-color: green;\n  border: none;\n}\n.gamePiece{\n  &:hover{\n    cursor: pointer;\n  }\n}\n.announce1{\n  color: green;\n  font-size: 32px;\n}\n.announce{\n  color: turquoise;\n  font-size: 32px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/class.js":
/*!**********************!*\
  !*** ./src/class.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship),
/* harmony export */   deFlatten: () => (/* binding */ deFlatten),
/* harmony export */   flatten: () => (/* binding */ flatten)
/* harmony export */ });
const boardLength = 10;
const boardArea = 100;

function exclude(list1, list) {
  return list1.filter(function (el) {
    return list.indexOf(el) < 0;
  });
}

function flatten([y, x]) {
  return y * boardLength + x;
}

function deFlatten(value) {
  const x = value % boardLength;
  const y = Math.floor(value / boardLength);

  return [y, x];
}

class Ship {
  constructor(length) {
    this.length = length;
    this.numberOfHits = 0;
    this.sunk = false;
  }
  get length() {
    return this._length;
  }
  set length(value) {
    if (value <= 0) {
      throw new Error("Ship can't have negative or zero length");
    }
    this._length = value;
    this.isSunk();
  }
  hit() {
    this.numberOfHits++;
    if (this.numberOfHits >= this.length) {
      this.sunk = true;
    }
    return this.numberOfHits;
  }
  isSunk() {
    if (this.numberOfHits >= this.length) {
      this.sunk = true;
      return this.sunk;
    }
    this.sunk = false;
    return this.sunk;
  }
}

class Gameboard {
  constructor() {
    this.ships = [];
    this.missedMoves = [];
    this.sunk = [];
    this.id = 0;
  }
  place(length, [y, x], isVert = true) {
    if (x < 0 || x > 9 || y < 0 || y > 9) throw new Error("You are overboard");

    const places = [];
    const ship = new Ship(length);
    for (let i = 0; i < length; i++) {
      if (isVert) {
        const newY = y - i;
        if (newY < 0 || newY > 9) throw new Error("Gone overboard");
        places.push(flatten([newY, x]));
      } else {
        const newX = x + i;
        if (newX < 0 || newX > 9) throw new Error("Gone overboard");
        places.push(flatten([y, newX]));
      }
    }

    this.ships.push({ id: this.id++, ship, places });
  }
  receiveAttack([y, x]) {
    if (x < 0 || x > 9 || y < 0 || y > 9) throw new Error("You are overboard");
    const flat = flatten([y, x]);
    let wasHit = false;
    this.ships.forEach((val) => {
      if (val.places.includes(flat)) {
        val.ship.hit();
        wasHit = true;
      }
      if (val.ship.isSunk()) {
        this.sunk.push(val);
      }
    });

    if (!wasHit) {
      this.missedMoves.push(flat);
    }
    return wasHit;
  }
  allSunk() {
    return this.ships.every((val) => val.ship.isSunk());
  }
}

class Player {
  constructor() {
    this.enemy = null;
    this.movesPlayed = [];
    this.Gameboard = new Gameboard();
  }
  addEnemy(player) {
    this.enemy = player;
  }
  attack([y, x]) {
    if (this.enemy === null) {
      throw new Error("Must add new enemy before attacking");
    }
    this.enemy.Gameboard.receiveAttack([y, x]);
    this.movesPlayed.push(flatten([y, x]));
  }
  randomPlay() {
    if (this.enemy === null)
      throw new Error("Can not do random play without  an enemy");

    let remaingMoves = [];
    for (let i = 0; i < boardArea; i++) {
      remaingMoves.push(i);
    }
    remaingMoves = exclude(remaingMoves, this.movesPlayed);
    // remaingMoves = exclude(remaingMoves, this.enemy.movesPlayed);
    if (remaingMoves.length == 0) {
      return;
    }
    const index = Math.floor(Math.random() * remaingMoves.length);
    const flat = remaingMoves[index];
    const [y, x] = deFlatten(flat);
    this.attack([y, x]);
    return [y, x];
  }
}




/***/ }),

/***/ "./src/fonts/beauty-mountains-font/BeautyMountainsPersonalUse-od7z.ttf":
/*!*****************************************************************************!*\
  !*** ./src/fonts/beauty-mountains-font/BeautyMountainsPersonalUse-od7z.ttf ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fffdced81aa2a22b57a.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ "./src/class.js");



/**
 * seting up
 */

const player1 = new _class__WEBPACK_IMPORTED_MODULE_1__.Player();
const player2 = new _class__WEBPACK_IMPORTED_MODULE_1__.Player();

player1.addEnemy(player2);
player2.addEnemy(player1);

function isNegative(num) {
  const val = Math.abs(num) + num;
  return val === 0;
}

// const sizes1 = [4, 3, -3, -2, -2, 2, 1, 1, 1, 1];
const sizes1 = [];
const location1 = [];
const sizes2 = [4, -3, 3, 2, 2, -2, 1, 1, 1, 1];
const location2 = [
  [3, 6],
  [2, 2],
  [2, 8],
  [1, 0],
  [5, 1],
  [5, 4],
  [7, 5],
  [7, 7],
  [4, 8],
  [8, 1],
];

function buildGameboard() {
  for (let i in sizes2) {
    // console.log(i);
    // player1.Gameboard.place(
    //   Math.abs(sizes1[i]),
    //   location1[i],
    //   !isNegative(sizes1[i]),
    // );
    player2.Gameboard.place(
      Math.abs(sizes2[i]),
      location2[i],
      !isNegative(sizes2[i])
    );
  }
}

/*
 * Done with setup
 */

const board1 = document.querySelector(".board-1");
const board2 = document.querySelector(".board-2");

function createBoards() {
  for (let i = 0; i < 100; i++) {
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    div1.setAttribute("id", `0-${i}`);
    div2.setAttribute("id", `1-${i}`);
    div1.setAttribute("data-cellId", i);
    div2.setAttribute("data-cellId", i);
    div1.addEventListener("drop", drop);
    div1.addEventListener("dragover", allowDrop);
    div2.addEventListener("click", () => {
      if (player2.Gameboard.allSunk() || player1.Gameboard.allSunk()) {
        return;
      }
      const len = player1.enemy.Gameboard.missedMoves.length;
      player1.attack((0,_class__WEBPACK_IMPORTED_MODULE_1__.deFlatten)(i));
      
      handlePlay(i, player2.Gameboard);
      
      if (player1.enemy.Gameboard.missedMoves.length - len === 0) {
        if (player1.Gameboard.allSunk() || player2.Gameboard.allSunk()) {
          document.querySelector(".board-2").classList.add("disable");
          const winner = document.querySelector(".winner");
          winner.innerText = player1.Gameboard.allSunk()
            ? "Player two won"
            : "Player one won";
        }
        return};
      const len1 = player2.enemy.Gameboard.missedMoves.length;
      do {
        const play = player2.randomPlay();
        if (play) {
          handlePlay((0,_class__WEBPACK_IMPORTED_MODULE_1__.flatten)(play), player1.Gameboard, (i = 0));
        }
      } while (len1 - player2.enemy.Gameboard.missedMoves.length == 0);
      // console.log(player2.Gameboard)
      if (player1.Gameboard.allSunk() || player2.Gameboard.allSunk()) {
        document.querySelector(".board-2").classList.add("disable");
        const winner = document.querySelector(".winner");
        winner.innerText = player1.Gameboard.allSunk()
          ? "Player two won"
          : "Player one won";
      }
    });
    div1.classList.add("boardCell");
    div1.classList.add("board1-cell");
    div2.classList.add("boardCell");
    div2.classList.add("board2-cell");
    board1.appendChild(div1);
    board2.appendChild(div2);
  }
}

createBoards();

function colorShip(player, id = 0) {
  player.Gameboard.ships.forEach((ship) => {
    // let isVertical = false;
    ship.places.forEach((place, index) => {
      const elId = `${id}-${place}`;
      const cell = document.getElementById(elId);
      cell.classList.add("ship-cell");
      // console.log(cell);
    });
  });
}
// colorShip(player1);
// colorShip(player2, 1);
function handlePlay(flatVal, Gameboard, boardId = 1) {
  const el = document.getElementById(`${boardId}-${flatVal}`);
  if (Gameboard.missedMoves.includes(flatVal)) {
    // el.innerHTML = "&#8231;";
    el.innerHTML = "&#8226;";
    el.classList.add("miss");
    // el.innerHTML = "&#176;";
    return;
  }

  Gameboard.ships.forEach((ship) => {
    if (ship.places.includes(flatVal)) {
      // el.innerHTML = "&#10005;";
      el.innerHTML = "&#10036;";
      el.classList.add("valid-hit");
    }
  });
}

let currentLength = 0

function allowDrop(event) {
  event.preventDefault();

  document.querySelectorAll(".board1-cell").forEach((node) => {
    node.classList.remove('highlight')
  })
  const point = (0,_class__WEBPACK_IMPORTED_MODULE_1__.deFlatten)(event.target.id.split("-")[1]);
  try {
    const area = validMoves(Math.abs(currentLength), point, !isNegative(currentLength))
    area.forEach((id) => {
      const el = document.getElementById(`0-${id}`)
      el.classList.add('highlight')
    })
  } catch (e) {
  }
}

function drag(event) {
  event.dataTransfer.setData("id", event.target.id);
  event.dataTransfer.setData("length", event.target.dataset.length);
  currentLength = parseInt(event.target.dataset.length)
}
function drop(event) {
  event.preventDefault();
  document.querySelectorAll(".board1-cell").forEach((node) => {
    node.classList.remove('highlight')
  })
  const itemId = event.dataTransfer.getData("id")
  const el = document.getElementById(itemId)
  const length = parseInt(event.dataTransfer.getData("length"));
  sizes1.push(length);
  const point = (0,_class__WEBPACK_IMPORTED_MODULE_1__.deFlatten)(event.target.id.split("-")[1]);
  location1.push(point)
  try {
    // const area = validMoves(Math.abs(length), point, !isNegative(length));
    player1.Gameboard.place(Math.abs(length), point, !isNegative(length))
    colorShip(player1);
    el.remove()
    if (isFinished()) {
      // console.log("wtf")
      makeGame()
      // console.log(player2.Gameboard)
    }
  } catch { }
}
const pieces = document.querySelectorAll(".gamePiece");
pieces.forEach((piece) => {
  piece.addEventListener("dragstart", drag);
});


function validMoves(length, [y, x], isVert = true) {
  if (x < 0 || x > 9 || y < 0 || y > 9) throw new Error("You are overboard");

  const places = [];
  for (let i = 0; i < length; i++) {
    if (isVert) {
      const newY = y - i;
      if (newY < 0 || newY > 9) throw new Error("Gone overboard");
      places.push((0,_class__WEBPACK_IMPORTED_MODULE_1__.flatten)([newY, x]));
    } else {
      const newX = x + i;
      if (newX < 0 || newX > 9) throw new Error("Gone overboard");
      places.push((0,_class__WEBPACK_IMPORTED_MODULE_1__.flatten)([y, newX]));
    }
  }
  return places;
}
function isFinished() {
  const nodes = document.getElementsByClassName('gamePiece')
  return nodes.length == 0
}
function makeGame() {
  buildGameboard()
  changeLabel()
}

function changeLabel(){
  const ann1=document.querySelector('.announce')
  const ann2=document.querySelector('.announce1')
  ann1.classList.add('not-visible')
  ann2.classList.remove('not-visible')
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQiw2QkFBNkI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVEOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVJdkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNzQzs7QUFFaEU7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiwwQ0FBTTtBQUMxQixvQkFBb0IsMENBQU07O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBLGlDQUFpQyxFQUFFO0FBQ25DLGlDQUFpQyxFQUFFO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpREFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwrQ0FBTztBQUM1QjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsR0FBRyxHQUFHLE1BQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxRQUFRLEdBQUcsUUFBUTtBQUMzRDtBQUNBLDhCQUE4QjtBQUM5QiwyQkFBMkI7QUFDM0I7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxnQkFBZ0IsaURBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsOENBQThDLEdBQUc7QUFDakQ7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtDQUFPO0FBQ3pCLE1BQU07QUFDTjtBQUNBO0FBQ0Esa0JBQWtCLCtDQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZV9zaGlwLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovL2JhdHRsZV9zaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVfc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlX3NoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVfc2hpcC8uL3NyYy9zYXNzL21haW4uc2Nzcz82YTE3Iiwid2VicGFjazovL2JhdHRsZV9zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZV9zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVfc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVfc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVfc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZV9zaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlX3NoaXAvLi9zcmMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlX3NoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlX3NoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlX3NoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZV9zaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlX3NoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVfc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZV9zaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZV9zaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZV9zaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVfc2hpcC8uL3NyYy9nYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9iZWF1dHktbW91bnRhaW5zLWZvbnQvQmVhdXR5TW91bnRhaW5zUGVyc29uYWxVc2Utb2Q3ei50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJtb3VudGFpbnNcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWlubGluZTogMnJlbTtcbiAgcGFkZGluZy1ibG9jazogMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEY3RkY7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LWZhbWlseTogXCJtb3VudGFpbnNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmdhbWUtYm9hcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAycmVtO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB3aWR0aDogbWluKDUwcmVtLCAxMDAlKTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLCAxZnIpL3JlcGVhdCgxMCwgMWZyKTtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIGdyaWQtYXV0by1mbG93OiBkZW5zZTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoLTEpOyAvKiBtaXJyb3IgdmVydGljYWxseSAqL1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxMHB4IDM2cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAwcHggMHB4IDFweDtcbn1cblxuLmJvYXJkQ2VsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IHNvbGlkIDAuMnB4IHBhbGV0dXJxdW9pc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNoaXAtY2VsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGV0dXJxdW9pc2U7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmRpc2FibGUge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi53aW5uZXIge1xuICBtaW4td2lkdGg6IDVyZW07XG4gIG1pbi1oZWlnaHQ6IDJyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIm1vdW50YWluc1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLnBpZWNlIHtcbiAgd2lkdGg6IDJyZW07XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldHVycXVvaXNlO1xufVxuXG4uaG9yIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmdhbWUtcGllY2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5nYW1lLXBpZWNlcyA+ICoge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxMHB4IDM2cHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAwcHggMHB4IDFweDtcbn1cblxuLnZhbGlkLWhpdCB7XG4gIGJvcmRlcjogc29saWQgZ3JlZW4gMC4ycHg7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm1pc3Mge1xuICBib3JkZXI6IGNyaW1zb24gc29saWQgMC4ycHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGlzdGxlO1xufVxuXG4ubm90LXZpc2libGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZ2FtZVBpZWNlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYW5ub3VuY2UxIHtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi5hbm5vdW5jZSB7XG4gIGNvbG9yOiB0dXJxdW9pc2U7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLHdCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRkY7QUFLQTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFIRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFGRjs7QUFJQTtFQUNFLDBCQUFBO0VBQ0Esc0RBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhDQUFBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBLEVBQUEsc0JBQUE7RUFFQSxzRkFBQTtBQUFKOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0UsU0FBQTtFQUNGLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwrQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxzREFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRUY7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBR0Y7QUFGRTtFQUVFLHNGQUFBO0FBR0o7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFRTtFQUNFLGVBQUE7QUFDSjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYm9yZGVyQ29sb3I6IHB1cnBsZTtcXG4kYm9yZGVyU2l6ZTogMXB4O1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdtb3VudGFpbnMnO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL2JlYXV0eS1tb3VudGFpbnMtZm9udC9CZWF1dHlNb3VudGFpbnNQZXJzb25hbFVzZS1vZDd6LnR0ZicpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKntcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLWlubGluZTogMnJlbTtcXG4gIHBhZGRpbmctYmxvY2s6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGN0ZGO1xcbn1cXG4udGl0bGV7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtZmFtaWx5OiAnbW91bnRhaW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5nYW1lLWJvYXJkc3tcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDJyZW07XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIHdpZHRoOiBtaW4oNTByZW0sMTAwJSk7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuLmJvYXJke1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgxMCwgMWZyKS9yZXBlYXQoMTAsIDFmcik7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKC0xKTsgLyogbWlycm9yIHZlcnRpY2FsbHkgKi9cXG4gICAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDEwcHggMzZweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDBweCAwcHggMXB4O1xcbn1cXG4uYm9hcmRDZWxse1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgbWFyZ2luOjA7XFxuICBib3JkZXI6IHNvbGlkIC4ycHggcGFsZXR1cnF1b2lzZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnNoaXAtY2VsbHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGV0dXJxdW9pc2U7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kaXNhYmxle1xcbiAgb3BhY2l0eTogLjU7XFxufVxcblxcbi53aW5uZXJ7XFxuICBtaW4td2lkdGg6IDVyZW07XFxuICBtaW4taGVpZ2h0OiAycmVtO1xcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnbW91bnRhaW5zJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXFxuXFxuLnBpZWNle1xcbiAgd2lkdGg6IDJyZW07XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGV0dXJxdW9pc2U7XFxufVxcbi5ob3J7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZ2FtZS1waWVjZXN7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gICY+KntcXG4gICAgLy8gYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDEwcHggMzZweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDBweCAwcHggMXB4O1xcblxcbiAgfVxcbn1cXG5cXG4udmFsaWQtaGl0e1xcbiAgYm9yZGVyOiBzb2xpZCBncmVlbiAuMnB4O1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG4ubWlzc3tcXG4gIGJvcmRlcjogY3JpbXNvbiBzb2xpZCAuMnB4O1xcbiAgY29sb3I6cmVkO1xcblxcbn1cXG5cXG4uaGlnaGxpZ2h0e1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdGhpc3RsZTtcXG59XFxuXFxuLm5vdC12aXNpYmxle1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ0bntcXG4gIHBhZGRpbmc6IC4yNXJlbSAxcmVtO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5nYW1lUGllY2V7XFxuICAmOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcbi5hbm5vdW5jZTF7XFxuICBjb2xvcjogZ3JlZW47XFxuICBmb250LXNpemU6IDMycHg7XFxufVxcbi5hbm5vdW5jZXtcXG4gIGNvbG9yOiB0dXJxdW9pc2U7XFxuICBmb250LXNpemU6IDMycHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBib2FyZExlbmd0aCA9IDEwO1xuY29uc3QgYm9hcmRBcmVhID0gMTAwO1xuXG5mdW5jdGlvbiBleGNsdWRlKGxpc3QxLCBsaXN0KSB7XG4gIHJldHVybiBsaXN0MS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuIGxpc3QuaW5kZXhPZihlbCkgPCAwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbihbeSwgeF0pIHtcbiAgcmV0dXJuIHkgKiBib2FyZExlbmd0aCArIHg7XG59XG5cbmZ1bmN0aW9uIGRlRmxhdHRlbih2YWx1ZSkge1xuICBjb25zdCB4ID0gdmFsdWUgJSBib2FyZExlbmd0aDtcbiAgY29uc3QgeSA9IE1hdGguZmxvb3IodmFsdWUgLyBib2FyZExlbmd0aCk7XG5cbiAgcmV0dXJuIFt5LCB4XTtcbn1cblxuY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMubnVtYmVyT2ZIaXRzID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgfVxuICBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG4gIH1cbiAgc2V0IGxlbmd0aCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA8PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaGlwIGNhbid0IGhhdmUgbmVnYXRpdmUgb3IgemVybyBsZW5ndGhcIik7XG4gICAgfVxuICAgIHRoaXMuX2xlbmd0aCA9IHZhbHVlO1xuICAgIHRoaXMuaXNTdW5rKCk7XG4gIH1cbiAgaGl0KCkge1xuICAgIHRoaXMubnVtYmVyT2ZIaXRzKys7XG4gICAgaWYgKHRoaXMubnVtYmVyT2ZIaXRzID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5udW1iZXJPZkhpdHM7XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLm51bWJlck9mSGl0cyA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLnN1bms7XG4gICAgfVxuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgIHJldHVybiB0aGlzLnN1bms7XG4gIH1cbn1cblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIHRoaXMubWlzc2VkTW92ZXMgPSBbXTtcbiAgICB0aGlzLnN1bmsgPSBbXTtcbiAgICB0aGlzLmlkID0gMDtcbiAgfVxuICBwbGFjZShsZW5ndGgsIFt5LCB4XSwgaXNWZXJ0ID0gdHJ1ZSkge1xuICAgIGlmICh4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSkgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBvdmVyYm9hcmRcIik7XG5cbiAgICBjb25zdCBwbGFjZXMgPSBbXTtcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaXNWZXJ0KSB7XG4gICAgICAgIGNvbnN0IG5ld1kgPSB5IC0gaTtcbiAgICAgICAgaWYgKG5ld1kgPCAwIHx8IG5ld1kgPiA5KSB0aHJvdyBuZXcgRXJyb3IoXCJHb25lIG92ZXJib2FyZFwiKTtcbiAgICAgICAgcGxhY2VzLnB1c2goZmxhdHRlbihbbmV3WSwgeF0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld1ggPSB4ICsgaTtcbiAgICAgICAgaWYgKG5ld1ggPCAwIHx8IG5ld1ggPiA5KSB0aHJvdyBuZXcgRXJyb3IoXCJHb25lIG92ZXJib2FyZFwiKTtcbiAgICAgICAgcGxhY2VzLnB1c2goZmxhdHRlbihbeSwgbmV3WF0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNoaXBzLnB1c2goeyBpZDogdGhpcy5pZCsrLCBzaGlwLCBwbGFjZXMgfSk7XG4gIH1cbiAgcmVjZWl2ZUF0dGFjayhbeSwgeF0pIHtcbiAgICBpZiAoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpIHRocm93IG5ldyBFcnJvcihcIllvdSBhcmUgb3ZlcmJvYXJkXCIpO1xuICAgIGNvbnN0IGZsYXQgPSBmbGF0dGVuKFt5LCB4XSk7XG4gICAgbGV0IHdhc0hpdCA9IGZhbHNlO1xuICAgIHRoaXMuc2hpcHMuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICBpZiAodmFsLnBsYWNlcy5pbmNsdWRlcyhmbGF0KSkge1xuICAgICAgICB2YWwuc2hpcC5oaXQoKTtcbiAgICAgICAgd2FzSGl0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWwuc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICB0aGlzLnN1bmsucHVzaCh2YWwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCF3YXNIaXQpIHtcbiAgICAgIHRoaXMubWlzc2VkTW92ZXMucHVzaChmbGF0KTtcbiAgICB9XG4gICAgcmV0dXJuIHdhc0hpdDtcbiAgfVxuICBhbGxTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KCh2YWwpID0+IHZhbC5zaGlwLmlzU3VuaygpKTtcbiAgfVxufVxuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVuZW15ID0gbnVsbDtcbiAgICB0aGlzLm1vdmVzUGxheWVkID0gW107XG4gICAgdGhpcy5HYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIH1cbiAgYWRkRW5lbXkocGxheWVyKSB7XG4gICAgdGhpcy5lbmVteSA9IHBsYXllcjtcbiAgfVxuICBhdHRhY2soW3ksIHhdKSB7XG4gICAgaWYgKHRoaXMuZW5lbXkgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgYWRkIG5ldyBlbmVteSBiZWZvcmUgYXR0YWNraW5nXCIpO1xuICAgIH1cbiAgICB0aGlzLmVuZW15LkdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFt5LCB4XSk7XG4gICAgdGhpcy5tb3Zlc1BsYXllZC5wdXNoKGZsYXR0ZW4oW3ksIHhdKSk7XG4gIH1cbiAgcmFuZG9tUGxheSgpIHtcbiAgICBpZiAodGhpcy5lbmVteSA9PT0gbnVsbClcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgZG8gcmFuZG9tIHBsYXkgd2l0aG91dCAgYW4gZW5lbXlcIik7XG5cbiAgICBsZXQgcmVtYWluZ01vdmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZEFyZWE7IGkrKykge1xuICAgICAgcmVtYWluZ01vdmVzLnB1c2goaSk7XG4gICAgfVxuICAgIHJlbWFpbmdNb3ZlcyA9IGV4Y2x1ZGUocmVtYWluZ01vdmVzLCB0aGlzLm1vdmVzUGxheWVkKTtcbiAgICAvLyByZW1haW5nTW92ZXMgPSBleGNsdWRlKHJlbWFpbmdNb3ZlcywgdGhpcy5lbmVteS5tb3Zlc1BsYXllZCk7XG4gICAgaWYgKHJlbWFpbmdNb3Zlcy5sZW5ndGggPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlbWFpbmdNb3Zlcy5sZW5ndGgpO1xuICAgIGNvbnN0IGZsYXQgPSByZW1haW5nTW92ZXNbaW5kZXhdO1xuICAgIGNvbnN0IFt5LCB4XSA9IGRlRmxhdHRlbihmbGF0KTtcbiAgICB0aGlzLmF0dGFjayhbeSwgeF0pO1xuICAgIHJldHVybiBbeSwgeF07XG4gIH1cbn1cblxuZXhwb3J0IHsgU2hpcCwgZmxhdHRlbiwgZGVGbGF0dGVuLCBHYW1lYm9hcmQsIFBsYXllciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3Nhc3MvbWFpbi5zY3NzXCI7XG5pbXBvcnQgeyBHYW1lYm9hcmQsIFBsYXllciwgZGVGbGF0dGVuLCBmbGF0dGVuIH0gZnJvbSBcIi4vY2xhc3NcIjtcblxuLyoqXG4gKiBzZXRpbmcgdXBcbiAqL1xuXG5jb25zdCBwbGF5ZXIxID0gbmV3IFBsYXllcigpO1xuY29uc3QgcGxheWVyMiA9IG5ldyBQbGF5ZXIoKTtcblxucGxheWVyMS5hZGRFbmVteShwbGF5ZXIyKTtcbnBsYXllcjIuYWRkRW5lbXkocGxheWVyMSk7XG5cbmZ1bmN0aW9uIGlzTmVnYXRpdmUobnVtKSB7XG4gIGNvbnN0IHZhbCA9IE1hdGguYWJzKG51bSkgKyBudW07XG4gIHJldHVybiB2YWwgPT09IDA7XG59XG5cbi8vIGNvbnN0IHNpemVzMSA9IFs0LCAzLCAtMywgLTIsIC0yLCAyLCAxLCAxLCAxLCAxXTtcbmNvbnN0IHNpemVzMSA9IFtdO1xuY29uc3QgbG9jYXRpb24xID0gW107XG5jb25zdCBzaXplczIgPSBbNCwgLTMsIDMsIDIsIDIsIC0yLCAxLCAxLCAxLCAxXTtcbmNvbnN0IGxvY2F0aW9uMiA9IFtcbiAgWzMsIDZdLFxuICBbMiwgMl0sXG4gIFsyLCA4XSxcbiAgWzEsIDBdLFxuICBbNSwgMV0sXG4gIFs1LCA0XSxcbiAgWzcsIDVdLFxuICBbNywgN10sXG4gIFs0LCA4XSxcbiAgWzgsIDFdLFxuXTtcblxuZnVuY3Rpb24gYnVpbGRHYW1lYm9hcmQoKSB7XG4gIGZvciAobGV0IGkgaW4gc2l6ZXMyKSB7XG4gICAgLy8gY29uc29sZS5sb2coaSk7XG4gICAgLy8gcGxheWVyMS5HYW1lYm9hcmQucGxhY2UoXG4gICAgLy8gICBNYXRoLmFicyhzaXplczFbaV0pLFxuICAgIC8vICAgbG9jYXRpb24xW2ldLFxuICAgIC8vICAgIWlzTmVnYXRpdmUoc2l6ZXMxW2ldKSxcbiAgICAvLyApO1xuICAgIHBsYXllcjIuR2FtZWJvYXJkLnBsYWNlKFxuICAgICAgTWF0aC5hYnMoc2l6ZXMyW2ldKSxcbiAgICAgIGxvY2F0aW9uMltpXSxcbiAgICAgICFpc05lZ2F0aXZlKHNpemVzMltpXSlcbiAgICApO1xuICB9XG59XG5cbi8qXG4gKiBEb25lIHdpdGggc2V0dXBcbiAqL1xuXG5jb25zdCBib2FyZDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLTFcIik7XG5jb25zdCBib2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLTJcIik7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkcygpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdjEuc2V0QXR0cmlidXRlKFwiaWRcIiwgYDAtJHtpfWApO1xuICAgIGRpdjIuc2V0QXR0cmlidXRlKFwiaWRcIiwgYDEtJHtpfWApO1xuICAgIGRpdjEuc2V0QXR0cmlidXRlKFwiZGF0YS1jZWxsSWRcIiwgaSk7XG4gICAgZGl2Mi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNlbGxJZFwiLCBpKTtcbiAgICBkaXYxLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyb3ApO1xuICAgIGRpdjEuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGFsbG93RHJvcCk7XG4gICAgZGl2Mi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHBsYXllcjIuR2FtZWJvYXJkLmFsbFN1bmsoKSB8fCBwbGF5ZXIxLkdhbWVib2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbGVuID0gcGxheWVyMS5lbmVteS5HYW1lYm9hcmQubWlzc2VkTW92ZXMubGVuZ3RoO1xuICAgICAgcGxheWVyMS5hdHRhY2soZGVGbGF0dGVuKGkpKTtcbiAgICAgIFxuICAgICAgaGFuZGxlUGxheShpLCBwbGF5ZXIyLkdhbWVib2FyZCk7XG4gICAgICBcbiAgICAgIGlmIChwbGF5ZXIxLmVuZW15LkdhbWVib2FyZC5taXNzZWRNb3Zlcy5sZW5ndGggLSBsZW4gPT09IDApIHtcbiAgICAgICAgaWYgKHBsYXllcjEuR2FtZWJvYXJkLmFsbFN1bmsoKSB8fCBwbGF5ZXIyLkdhbWVib2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLTJcIikuY2xhc3NMaXN0LmFkZChcImRpc2FibGVcIik7XG4gICAgICAgICAgY29uc3Qgd2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5uZXJcIik7XG4gICAgICAgICAgd2lubmVyLmlubmVyVGV4dCA9IHBsYXllcjEuR2FtZWJvYXJkLmFsbFN1bmsoKVxuICAgICAgICAgICAgPyBcIlBsYXllciB0d28gd29uXCJcbiAgICAgICAgICAgIDogXCJQbGF5ZXIgb25lIHdvblwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybn07XG4gICAgICBjb25zdCBsZW4xID0gcGxheWVyMi5lbmVteS5HYW1lYm9hcmQubWlzc2VkTW92ZXMubGVuZ3RoO1xuICAgICAgZG8ge1xuICAgICAgICBjb25zdCBwbGF5ID0gcGxheWVyMi5yYW5kb21QbGF5KCk7XG4gICAgICAgIGlmIChwbGF5KSB7XG4gICAgICAgICAgaGFuZGxlUGxheShmbGF0dGVuKHBsYXkpLCBwbGF5ZXIxLkdhbWVib2FyZCwgKGkgPSAwKSk7XG4gICAgICAgIH1cbiAgICAgIH0gd2hpbGUgKGxlbjEgLSBwbGF5ZXIyLmVuZW15LkdhbWVib2FyZC5taXNzZWRNb3Zlcy5sZW5ndGggPT0gMCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIyLkdhbWVib2FyZClcbiAgICAgIGlmIChwbGF5ZXIxLkdhbWVib2FyZC5hbGxTdW5rKCkgfHwgcGxheWVyMi5HYW1lYm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtMlwiKS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgY29uc3Qgd2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5uZXJcIik7XG4gICAgICAgIHdpbm5lci5pbm5lclRleHQgPSBwbGF5ZXIxLkdhbWVib2FyZC5hbGxTdW5rKClcbiAgICAgICAgICA/IFwiUGxheWVyIHR3byB3b25cIlxuICAgICAgICAgIDogXCJQbGF5ZXIgb25lIHdvblwiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGRpdjEuY2xhc3NMaXN0LmFkZChcImJvYXJkQ2VsbFwiKTtcbiAgICBkaXYxLmNsYXNzTGlzdC5hZGQoXCJib2FyZDEtY2VsbFwiKTtcbiAgICBkaXYyLmNsYXNzTGlzdC5hZGQoXCJib2FyZENlbGxcIik7XG4gICAgZGl2Mi5jbGFzc0xpc3QuYWRkKFwiYm9hcmQyLWNlbGxcIik7XG4gICAgYm9hcmQxLmFwcGVuZENoaWxkKGRpdjEpO1xuICAgIGJvYXJkMi5hcHBlbmRDaGlsZChkaXYyKTtcbiAgfVxufVxuXG5jcmVhdGVCb2FyZHMoKTtcblxuZnVuY3Rpb24gY29sb3JTaGlwKHBsYXllciwgaWQgPSAwKSB7XG4gIHBsYXllci5HYW1lYm9hcmQuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIC8vIGxldCBpc1ZlcnRpY2FsID0gZmFsc2U7XG4gICAgc2hpcC5wbGFjZXMuZm9yRWFjaCgocGxhY2UsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBlbElkID0gYCR7aWR9LSR7cGxhY2V9YDtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbElkKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXAtY2VsbFwiKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNlbGwpO1xuICAgIH0pO1xuICB9KTtcbn1cbi8vIGNvbG9yU2hpcChwbGF5ZXIxKTtcbi8vIGNvbG9yU2hpcChwbGF5ZXIyLCAxKTtcbmZ1bmN0aW9uIGhhbmRsZVBsYXkoZmxhdFZhbCwgR2FtZWJvYXJkLCBib2FyZElkID0gMSkge1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2JvYXJkSWR9LSR7ZmxhdFZhbH1gKTtcbiAgaWYgKEdhbWVib2FyZC5taXNzZWRNb3Zlcy5pbmNsdWRlcyhmbGF0VmFsKSkge1xuICAgIC8vIGVsLmlubmVySFRNTCA9IFwiJiM4MjMxO1wiO1xuICAgIGVsLmlubmVySFRNTCA9IFwiJiM4MjI2O1wiO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgIC8vIGVsLmlubmVySFRNTCA9IFwiJiMxNzY7XCI7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgR2FtZWJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBpZiAoc2hpcC5wbGFjZXMuaW5jbHVkZXMoZmxhdFZhbCkpIHtcbiAgICAgIC8vIGVsLmlubmVySFRNTCA9IFwiJiMxMDAwNTtcIjtcbiAgICAgIGVsLmlubmVySFRNTCA9IFwiJiMxMDAzNjtcIjtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZC1oaXRcIik7XG4gICAgfVxuICB9KTtcbn1cblxubGV0IGN1cnJlbnRMZW5ndGggPSAwXG5cbmZ1bmN0aW9uIGFsbG93RHJvcChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmQxLWNlbGxcIikuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0JylcbiAgfSlcbiAgY29uc3QgcG9pbnQgPSBkZUZsYXR0ZW4oZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiLVwiKVsxXSk7XG4gIHRyeSB7XG4gICAgY29uc3QgYXJlYSA9IHZhbGlkTW92ZXMoTWF0aC5hYnMoY3VycmVudExlbmd0aCksIHBvaW50LCAhaXNOZWdhdGl2ZShjdXJyZW50TGVuZ3RoKSlcbiAgICBhcmVhLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAwLSR7aWR9YClcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpXG4gICAgfSlcbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYWcoZXZlbnQpIHtcbiAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJpZFwiLCBldmVudC50YXJnZXQuaWQpO1xuICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImxlbmd0aFwiLCBldmVudC50YXJnZXQuZGF0YXNldC5sZW5ndGgpO1xuICBjdXJyZW50TGVuZ3RoID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQubGVuZ3RoKVxufVxuZnVuY3Rpb24gZHJvcChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkMS1jZWxsXCIpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpXG4gIH0pXG4gIGNvbnN0IGl0ZW1JZCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiaWRcIilcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtSWQpXG4gIGNvbnN0IGxlbmd0aCA9IHBhcnNlSW50KGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwibGVuZ3RoXCIpKTtcbiAgc2l6ZXMxLnB1c2gobGVuZ3RoKTtcbiAgY29uc3QgcG9pbnQgPSBkZUZsYXR0ZW4oZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiLVwiKVsxXSk7XG4gIGxvY2F0aW9uMS5wdXNoKHBvaW50KVxuICB0cnkge1xuICAgIC8vIGNvbnN0IGFyZWEgPSB2YWxpZE1vdmVzKE1hdGguYWJzKGxlbmd0aCksIHBvaW50LCAhaXNOZWdhdGl2ZShsZW5ndGgpKTtcbiAgICBwbGF5ZXIxLkdhbWVib2FyZC5wbGFjZShNYXRoLmFicyhsZW5ndGgpLCBwb2ludCwgIWlzTmVnYXRpdmUobGVuZ3RoKSlcbiAgICBjb2xvclNoaXAocGxheWVyMSk7XG4gICAgZWwucmVtb3ZlKClcbiAgICBpZiAoaXNGaW5pc2hlZCgpKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInd0ZlwiKVxuICAgICAgbWFrZUdhbWUoKVxuICAgICAgLy8gY29uc29sZS5sb2cocGxheWVyMi5HYW1lYm9hcmQpXG4gICAgfVxuICB9IGNhdGNoIHsgfVxufVxuY29uc3QgcGllY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nYW1lUGllY2VcIik7XG5waWVjZXMuZm9yRWFjaCgocGllY2UpID0+IHtcbiAgcGllY2UuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnKTtcbn0pO1xuXG5cbmZ1bmN0aW9uIHZhbGlkTW92ZXMobGVuZ3RoLCBbeSwgeF0sIGlzVmVydCA9IHRydWUpIHtcbiAgaWYgKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgYXJlIG92ZXJib2FyZFwiKTtcblxuICBjb25zdCBwbGFjZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChpc1ZlcnQpIHtcbiAgICAgIGNvbnN0IG5ld1kgPSB5IC0gaTtcbiAgICAgIGlmIChuZXdZIDwgMCB8fCBuZXdZID4gOSkgdGhyb3cgbmV3IEVycm9yKFwiR29uZSBvdmVyYm9hcmRcIik7XG4gICAgICBwbGFjZXMucHVzaChmbGF0dGVuKFtuZXdZLCB4XSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdYID0geCArIGk7XG4gICAgICBpZiAobmV3WCA8IDAgfHwgbmV3WCA+IDkpIHRocm93IG5ldyBFcnJvcihcIkdvbmUgb3ZlcmJvYXJkXCIpO1xuICAgICAgcGxhY2VzLnB1c2goZmxhdHRlbihbeSwgbmV3WF0pKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBsYWNlcztcbn1cbmZ1bmN0aW9uIGlzRmluaXNoZWQoKSB7XG4gIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2FtZVBpZWNlJylcbiAgcmV0dXJuIG5vZGVzLmxlbmd0aCA9PSAwXG59XG5mdW5jdGlvbiBtYWtlR2FtZSgpIHtcbiAgYnVpbGRHYW1lYm9hcmQoKVxuICBjaGFuZ2VMYWJlbCgpXG59XG5cbmZ1bmN0aW9uIGNoYW5nZUxhYmVsKCl7XG4gIGNvbnN0IGFubjE9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFubm91bmNlJylcbiAgY29uc3QgYW5uMj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5ub3VuY2UxJylcbiAgYW5uMS5jbGFzc0xpc3QuYWRkKCdub3QtdmlzaWJsZScpXG4gIGFubjIuY2xhc3NMaXN0LnJlbW92ZSgnbm90LXZpc2libGUnKVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==