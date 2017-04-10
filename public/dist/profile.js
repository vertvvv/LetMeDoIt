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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPageContent = getPageContent;

var _consts = __webpack_require__(3);

var _Header = __webpack_require__(2);

var _Footer = __webpack_require__(1);

function getPageContent(renderContent) {
    return new Promise(function (resolve, reject) {
        var query = $.get(_consts.API_URL + 'data');

        query.done(renderPage).error(function (data) {
            $('body').html('We have some technical troubles, sorry.');
        });

        function renderPage(json) {
            var header = new _Header.Header(json.users[0].username);
            var footer = new _Footer.Footer();

            $('body').prepend(header.getFullHeader()).append(footer.getFooter()).on('click', '#profile-bar', function () {
                $('.dropdown-menu').toggleClass('invisible-element');
                $(this).toggleClass('active');
            });

            resolve(json);
        }
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
            return "\n            <div class=\"nav__left-side\">\n                <a id=\"logo\" href=\"../index.html\" class=\"logo\">\n                    <img src=\"../img/logo.png\">\n                    <span class=\"nav__profile-name\">Let me do it!</span>\n                </a>\n            </div>\n        ";
        }
    }, {
        key: "getLoginElement",
        value: function getLoginElement() {
            return "\n                <div id=\"loginModal\" class=\"nav__right-side\">\n                    <a class=\"nav__img-wrapper\">\n                        <span>Sign in</span>\n                    </a>\n                </div>\n            ";
        }
    }, {
        key: "getProfileElement",
        value: function getProfileElement() {
            return "\n                <div id=\"profile-bar\" class=\"nav__right-side\">\n                    <a class=\"nav__img-wrapper\">\n                        <img src=\"../img/profile.jpg\">\n                        <span class=\"nav__profile-name\">Username</span>\n                        <span class=\"caret\"></span>\n                    </a>\n                    <ul class=\"dropdown-menu invisible-element\">\n                        <li><a href=\"../assets/new_idea.html\">New idea</a></li>\n                        <li><a href=\"../assets/profile.html\">My profile</a></li>\n                        <li><a href=\"../assets/settings.html\">Settings</a></li>\n                        <li><a href=\"../index.html\">Logout</a></li>\n                    </ul>\n                </div>\n            ";
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

var ShortIdea = exports.ShortIdea = function () {
    function ShortIdea(idea) {
        _classCallCheck(this, ShortIdea);

        this.name = idea.name;
        this.mainIdea = idea['main-idea'];
        this.rating = idea.rating;
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

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _all = __webpack_require__(0);

var _Profile = __webpack_require__(12);

var _ShortIdea = __webpack_require__(4);

(0, _all.getPageContent)().then(renderContent); /**
                                                 * Created by Ilya on 09.04.2017.
                                                 */

function renderContent(data) {
    var profile = new _Profile.Profile(data.users[0]);

    $('.user-section').append(profile.getFullProfile());

    data.ideas.forEach(function (item) {
        var idea = new _ShortIdea.ShortIdea(item);
        $('.ideas-user-section').append(idea.getFullIdea());
    });
}

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
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

var Profile = exports.Profile = function () {
    function Profile(user) {
        _classCallCheck(this, Profile);

        this.username = user.username;
        this.name = user.name;
        this.surname = user.surname;
        this.info = user.info;
        this.stats = user.stats;
        this.avatar = user.avatar;
    }

    _createClass(Profile, [{
        key: 'getFullName',
        value: function getFullName() {
            var name = this.name,
                surname = this.surname;
            if (name && surname) {
                return name + ' ' + surname;
            } else if (name) {
                return name;
            } else if (surname) {
                return surname;
            } else {
                return null;
            }
        }
    }, {
        key: 'getUserMain',
        value: function getUserMain() {
            return '\n            <div class="user-bio__main">\n                <div class="user-bio__main__avatar">\n                </div>\n                <div class="user-bio__main__username">\n                    ' + this.getFullName() + '\n                </div>\n            </div>\n        ';
        }
    }, {
        key: 'getUserBioStats',
        value: function getUserBioStats() {
            return '\n            <div class="user-bio__info__stats">\n                <div class="stats-button">\n                    <span class="stats-button__name">Ideas</span>\n                    <span class="stats-button__value">' + this.stats.ideas + '</span>\n                </div>\n                <div class="stats-button">\n                    <span class="stats-button__name">Comments</span>\n                    <span class="stats-button__value">' + this.stats.comments + '</span>\n                </div>\n                <div class="stats-button">\n                    <span class="stats-button__name">Rating</span>\n                    <span class="stats-button__value">' + this.stats.rating + '</span>\n                </div>\n            </div>\n        ';
        }
    }, {
        key: 'getUserBioDesc',
        value: function getUserBioDesc() {
            return !this.info ? '' : '\n            <div class="user-bio__info__desc">\n                <span><i>User bio: </i>' + this.info + '</span>\n            </div>\n        ';
        }
    }, {
        key: 'getUserFullBio',
        value: function getUserFullBio() {
            return '\n            <div class="user-bio__info">\n                ' + this.getUserBioDesc() + '\n                ' + this.getUserBioStats() + '\n            </div>\n        ';
        }
    }, {
        key: 'getFullProfile',
        value: function getFullProfile() {
            return '\n             <div class="user-bio">\n             ' + this.getUserMain() + '\n             ' + this.getUserFullBio() + '\n            </div>\n        ';
        }
    }]);

    return Profile;
}();

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ })
/******/ ]);