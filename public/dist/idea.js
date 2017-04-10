/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderPage = renderPage;

var _consts = __webpack_require__(3);

var _Header = __webpack_require__(2);

var _Footer = __webpack_require__(1);

function renderPage(renderContent) {
    $.get(_consts.API_URL + 'data', function (json) {
        var header = new _Header.Header(json.users.username);
        var footer = new _Footer.Footer();

        $('body').prepend(header.getFullHeader()).append(footer.getFooter());
        if (renderContent) renderContent(json);
    });

    $('body').on('click', '#profile-bar', function () {
        $('.dropdown-menu').toggleClass('invisible-element');
        $(this).toggleClass('active');
    });
} /**
   * Created by Ilya on 27.03.2017.
   */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Ilya on 09.04.2017.
 */

var Footer = exports.Footer = function () {
    function Footer() {
        _classCallCheck(this, Footer);
    }

    _createClass(Footer, [{
        key: "getFooter",
        value: function getFooter() {
            return "\n            <hr class=\"footer-hr\">\n        \n            <footer class=\"page-footer\">\n                <ul class=\"page-footer__links\">\n                    <li>\n                        \xA9 2017, Let me do it!\n                    </li>\n                    <li>\n                        <a href=\"https://gitlab.com/vertvvv/js-practice-ilya-trokhin\">Gitlab link</a>\n                    </li>\n                </ul>\n            </footer>\n        ";
        }
    }]);

    return Footer;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Ilya on 09.04.2017.
 */

var Header = exports.Header = function () {
    function Header() {
        var username = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        _classCallCheck(this, Header);

        this.username = username;
    }

    _createClass(Header, [{
        key: "getHeaderLeftSide",
        value: function getHeaderLeftSide() {
            return "\n            <div class=\"nav__left-side\">\n                <a id=\"logo\" href=\"../../assets/index.html\" class=\"logo\">\n                    <img src=\"../../img/logo.png\">\n                    <span class=\"nav__profile-name\">Let me do it!</span>\n                </a>\n            </div>\n        ";
        }
    }, {
        key: "getLoginElement",
        value: function getLoginElement() {
            return "\n                <div id=\"loginModal\" class=\"nav__right-side\">\n                    <a class=\"nav__img-wrapper\">\n                        <span>Sign in</span>\n                    </a>\n                </div>\n            ";
        }
    }, {
        key: "getProfileElement",
        value: function getProfileElement() {
            return "\n                <div id=\"profile-bar\" class=\"nav__right-side\">\n                    <a class=\"nav__img-wrapper\">\n                        <img src=\"../../img/profile.jpg\">\n                        <span class=\"nav__profile-name\">Username</span>\n                        <span class=\"caret\"></span>\n                    </a>\n                    <ul class=\"dropdown-menu invisible-element\">\n                        <li><a href=\"../../assets/new_idea.html\">New idea</a></li>\n                        <li><a href=\"../../assets/profile.html\">My profile</a></li>\n                        <li><a href=\"../../assets/settings.html\">Settings</a></li>\n                        <li><a href=\"#\">Logout</a></li>\n                    </ul>\n                </div>\n            ";
        }
    }, {
        key: "getHeaderRightSide",
        value: function getHeaderRightSide() {
            return this.username ? this.getProfileElement() : this.getLoginElement();
        }
    }, {
        key: "getFullHeader",
        value: function getFullHeader() {
            return "\n            <nav>\n                <div class=\"nav-wrapper\">\n                    " + this.getHeaderLeftSide() + "\n                    " + this.getHeaderRightSide() + "\n                </div>\n            </nav>\n        ";
        }
    }]);

    return Header;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by Ilya on 09.04.2017.
 */

var API_URL = exports.API_URL = "http://localhost:3000/";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Ilya on 09.04.2017.
 */

var Comments = exports.Comments = function () {
    function Comments() {
        _classCallCheck(this, Comments);
    }

    _createClass(Comments, [{
        key: "getComment",
        value: function getComment() {
            return "\n            <div class=\"comments-block\">\n                <div class=\"flex-item avatar\">\n                    <div class=\"avatar__wrapper\"></div>\n                    <div class=\"avatar__username\"><a href=\"profile.html\">Username</a></div>\n                </div>\n                <div class=\"flex-item comment\">\n                    <div class=\"comment__text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar massa in fermentum sagittis. Aliquam congue commodo ligula, quis pretium dui pellentesque a. Donec eget porta nibh, sed ullamcorper odio. Vivamus euismod leo ante, nec vestibulum sapien blandit sed. Mauris vel hendrerit mauris. Vestibulum vulputate metus sit amet urna facilisis euismod. Maecenas eget sapien ut arcu cursus lobortis. Curabitur vel quam porttitor, convallis odio interdum, iaculis tellus. Pellentesque pretium risus id volutpat maximus. Duis blandit tempus rutrum. Proin bibendum nibh quam, ac mattis massa bibendum congue.</div>\n                    <div class=\"comment__date\">31 Aug 2018, 18:02</div>\n                </div>\n            </div>\n        ";
        }
    }, {
        key: "getAllComments",
        value: function getAllComments() {
            return "\n            " + this.getComment() + "\n            " + this.getComment() + "\n        ";
        }
    }]);

    return Comments;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FullIdea = exports.ShortIdea = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Ilya on 09.04.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Comments = __webpack_require__(4);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShortIdea = exports.ShortIdea = function () {
    function ShortIdea(name, mainIdea, rating) {
        _classCallCheck(this, ShortIdea);

        this.name = name;
        this.mainIdea = mainIdea;
        this.rating = rating;
    }

    _createClass(ShortIdea, [{
        key: 'getIdeaHeader',
        value: function getIdeaHeader() {
            return '<div class="idea__header">\n                    <div class="idea__header__name">' + this.name + '</div>\n                    <div class="idea__header__rating">\n                        <span class="rating rating__minus">-</span>\n                        <span>' + this.rating + '</span>\n                        <span class="rating rating__plus">+</span>\n                    </div>\n                </div>';
        }
    }, {
        key: 'getFullIdea',
        value: function getFullIdea() {
            return '<div class="idea">\n                    ' + this.getIdeaHeader() + '\n                    <div class="idea__text">' + this.mainIdea + '</div>\n                    <div class="idea__footer">\n                        <a href="../../assets/idea.html" class="idea__footer__full">Read more..</a>\n                        <a href="../../assets/idea.html#comments" class="idea__footer__comments"><span class="comment-icon">111</span>\n                            0</a>\n                    </div>\n                </div>';
        }
    }]);

    return ShortIdea;
}();

var FullIdea = exports.FullIdea = function (_ShortIdea) {
    _inherits(FullIdea, _ShortIdea);

    function FullIdea(name, mainIdea, rating, functionality, mockups, other, tags) {
        _classCallCheck(this, FullIdea);

        var _this = _possibleConstructorReturn(this, (FullIdea.__proto__ || Object.getPrototypeOf(FullIdea)).call(this, name, mainIdea, rating));

        _this.functionality = functionality;
        _this.mockups = mockups;
        _this.other = other;
        _this.tags = tags;
        return _this;
    }

    _createClass(FullIdea, [{
        key: 'getMainIdea',
        value: function getMainIdea() {
            return '<section class="idea__text__main">\n                    <h1>Main idea</h1>\n                    <p>' + this.mainIdea + '</p>\n                </section>';
        }
    }, {
        key: 'getFunctionsList',
        value: function getFunctionsList() {
            var func = this.functionality;

            return func.reduce(function (res, item) {
                return res + ('<li>' + item + '</li>');
            }, '');
        }
    }, {
        key: 'getFunctionality',
        value: function getFunctionality() {
            return '<section class="idea__text__functions">\n                    <h1>Functionality</h1>\n                    <ul>\n                        ' + this.getFunctionsList() + '\n                    </ul>\n                </section>';
        }
    }, {
        key: 'getMockupsGrid',
        value: function getMockupsGrid() {
            var mockups = this.mockups;

            return mockups.reduce(function (res, item) {
                return res + ('\n                    <div class="img-grid__wrapper">\n                        <img class="mockup" src="' + item + '">\n                    </div>\n            ');
            }, '');
        }
    }, {
        key: 'getMockups',
        value: function getMockups() {
            return '<section class="idea__text__mockups">\n                    <h1>Mockups</h1>\n                    <div class="img-grid">\n                        ' + this.getMockupsGrid() + '\n                    </div>\n                </section>';
        }
    }, {
        key: 'getOtherFormatted',
        value: function getOtherFormatted() {
            var other = this.other;

            return other.reduce(function (res, item) {
                return res + ('\n                    <h3>' + item.name + '</h3>\n                    <p>' + item.text + '</p>\n            ');
            }, '');
        }
    }, {
        key: 'getOther',
        value: function getOther() {
            return '<section class="idea__text__other">\n                    <h2>Other wishes</h2>\n                    ' + this.getOtherFormatted() + '\n                </section>';
        }
    }, {
        key: 'getTagsFormatted',
        value: function getTagsFormatted() {
            var tags = this.tags;

            return tags.reduce(function (res, item) {
                return res + ('<div class="tag">' + item + '</div>');
            }, '');
        }
    }, {
        key: 'getTags',
        value: function getTags() {
            return '<section class="idea__text__tags">\n                    ' + this.getTagsFormatted() + '\n                </section>';
        }
    }, {
        key: 'getFullIdea',
        value: function getFullIdea() {
            var comments = new _Comments.Comments();

            return '<div class="idea">\n                   ' + this.getIdeaHeader() + '\n                    <div class="idea__text">\n                        ' + this.getMainIdea() + '\n                        ' + this.getFunctionality() + '\n                        ' + this.getMockups() + '\n                        ' + this.getOther() + '\n                        ' + this.getTags() + '\n                        <div id="comments" class="idea__footer">\n                            <hr>\n                            <div class="comments">\n                                <div class="answer-block">\n                                    <div class="flex-item input-place">\n                                        <textarea id="new-comment" placeholder="Write your comment here.."></textarea>\n                                        <button class="input-place__button">Send</button>\n                                    </div>\n                                </div>\n                                <div id="commentsPlace">\n                                    ' + comments.getAllComments() + '\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>'; //comments temp desicion
        }
    }]);

    return FullIdea;
}(ShortIdea);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Idea = __webpack_require__(5);

var _all = __webpack_require__(0);

/**
 * Created by Ilya on 09.04.2017.
 */

(0, _all.renderPage)(renderContent);

$('body').on('click', '.mockup', function () {
    var self = $(this).parent();

    $('.img-grid__wrapper').each(function (i, item) {
        if (!$(item).is(self)) {
            $(item).removeClass('mockup-full-width');
        }
    });

    $(this).parent().toggleClass('mockup-full-width');
});

function renderContent(json) {
    var data = json.users.ideas[0];
    var idea = new _Idea.FullIdea(data.name, data['main-idea'], data.rating, data.functionality, data.mockups, data.other, data.tags);

    $('.single-idea-section').append(idea.getFullIdea());
}

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ })
/******/ ]);