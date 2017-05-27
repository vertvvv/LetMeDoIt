/**
 * Created by Ilya on 09.04.2017.
 */

export class Footer {
    constructor() {

    }

    getFooter() {
        return `
            <hr class="footer-hr">
        
            <footer class="page-footer">
                <ul class="page-footer__links">
                    <li>
                        © 2017, Let me do it!
                    </li>
                    <li>
                        <a href="https://gitlab.com/vertvvv/js-practice-ilya-trokhin">Gitlab link</a>
                    </li>
                </ul>
            </footer>
        `;
    }
}