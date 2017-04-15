/**
 * Created by Ilya on 09.04.2017.
 */

export class Comment {
    constructor(comment) {
        this.text = comment.text;
        this.data = comment.data;
    }

    getComment() {
        return `
            <div class="comments-block">
                <div class="flex-item avatar">
                    <div class="avatar__wrapper"></div>
                    <div class="avatar__username"><a href="profile.html">Username</a></div>
                </div>
                <div class="flex-item comment">
                    <div class="comment__text">${this.text}</div>
                    <div class="comment__date">${this.data}</div>
                </div>
            </div>
        `;
    }
}