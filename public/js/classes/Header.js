/**
 * Created by Ilya on 09.04.2017.
 */

import { auth } from '../api';
import { MAIN_PAGE_URL } from '../consts';

export class Header {
    constructor(username = null) {
        this.username = username;
    }

    init() {
        let self = this;

        $('body')
            .on('click', '#signin', showElement)
            .on('click', '#signup', showElement)
            .on('click', '#signin-button', self.authorizeUser)
            .on('click', '#signup-button', self.signUpUser)
            .on('click', '#logout', function(e) {
                e.preventDefault();
                localStorage.clear();
                window.location.href = MAIN_PAGE_URL;
            })
            .on('keyup', '.sign', function(e) {
                if(e.keyCode == 13){
                    $(this).find('button').click();
                }
            });

        function showElement() {
            let id = '#' + $(this).attr('id') + '-window';
            let el = $(id); //element
            if (el.css('display') === 'flex') {
                el.fadeOut('1000');
            } else {
                $('.sign').css('display', 'none');
                el.fadeIn('1000')
                    .css('display', 'flex');
            }
        }

        return this.getFullHeader();
    }

    authorizeUser() {
        let element = $('#signin-email');
        let login = element.val();
        let password = $('#signin-password').val();
        auth.authorizeUser(login, password)
            .done(data => {
                console.log(data);
                localStorage.setItem('login', login);
                localStorage.setItem('token', data.token);
                localStorage.setItem('id', data.id);
                location.reload();
            })
            .error(err =>
                element.val('').attr('placeholder', err.responseText)
            );
    }

    signUpUser() {
        let login = $('#signup-email').val();
        let password = $('#signup-password').val();
        let passwordConfirmation = $('#signup-confirm-password').val();
        if (password === passwordConfirmation && password !== '') {
            auth.signUpUser(login, password).done(data => {
                if (data != 'This login is already taken!') {
                    localStorage.setItem('login', login);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('id', data.id);
                    location.reload();
                } else {
                    $('#signup-email').val('').attr('placeholder', data);
                }
            });
        }
    }

    getHeaderLeftSide() {
        return `
            <div class="nav__left-side">
                <a id="logo" href="../index.html" class="logo">
                    <img src="../img/logo.png">
                    <span class="nav__profile-name">Let me do it!</span>
                </a>
            </div>
        `
    }

    getLoginElement() {
        return `
            <div id="loginModal" class="nav__right-side">
                
                <a class="nav__img-wrapper sign-wrapper">
                    <span id="signin">Sign in</span>
                    <span id="signup">Sign up</span>
                </a>
                <div id="signin-window" class="sign no-display">
                    <input id="signin-email" type="email" placeholder="E-Mail">
                    <input id="signin-password" type="password" placeholder="Password">
                    <button id="signin-button">Sign in</button>
                </div>
                <div id="signup-window" class="sign no-display">
                    <input id="signup-email" type="email" placeholder="E-Mail">
                    <input id="signup-password" type="password" placeholder="Password">
                    <input id="signup-confirm-password" type="password" placeholder="Confirm password">
                    <button id="signup-button">Sign up</button>
                </div>
            </div>
            `;
    }

    getProfileElement() {
        return `
            <div id="profile-bar" class="nav__right-side">
                <a class="nav__img-wrapper">
                    <img src="../img/profile.jpg">
                    <span class="nav__profile-name">${this.username}</span>
                    <span class="caret"></span>
                </a>
                <ul class="dropdown-menu invisible-element">
                    <li><a href="../assets/new_idea.html">New idea</a></li>
                    <li><a href="../assets/profile.html">My profile</a></li>
                    <li><a href="../assets/settings.html">Settings</a></li>
                    <li><a id="logout" href="../index.html">Logout</a></li>
                </ul>
            </div>
            `;
    }

    getHeaderRightSide() {
        return (this.username) ? this.getProfileElement() : this.getLoginElement();
    }

    getFullHeader() {
        return `
            <nav>
                <div class="nav-wrapper">
                    ${this.getHeaderLeftSide()}
                    ${this.getHeaderRightSide()}
                </div>
            </nav>
        `;
    }
}