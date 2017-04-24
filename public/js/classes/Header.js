/**
 * Created by Ilya on 09.04.2017.
 */

export class Header {
    constructor(username = null) {
        this.username = username;
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
                    <a class="nav__img-wrapper">
                        <span>Sign in</span>
                    </a>
                </div>
            `;
    }

    getProfileElement() {
        return `
                <div id="profile-bar" class="nav__right-side">
                    <a class="nav__img-wrapper">
                        <img src="../img/profile.jpg">
                        <span class="nav__profile-name">username</span>
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu invisible-element">
                        <li><a href="../assets/new_idea.html">New idea</a></li>
                        <li><a href="../assets/profile.html?id=1">My profile</a></li>
                        <li><a href="../assets/settings.html">Settings</a></li>
                        <li><a href="../index.html">Logout</a></li>
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