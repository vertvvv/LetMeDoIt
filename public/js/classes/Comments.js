/**
 * Created by Ilya on 09.04.2017.
 */

export class Comments {
    constructor() {

    }

    getComment() {
        return `
            <div class="comments-block">
                <div class="flex-item avatar">
                    <div class="avatar__wrapper"></div>
                    <div class="avatar__username"><a href="profile.html">Username</a></div>
                </div>
                <div class="flex-item comment">
                    <div class="comment__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar massa in fermentum sagittis. Aliquam congue commodo ligula, quis pretium dui pellentesque a. Donec eget porta nibh, sed ullamcorper odio. Vivamus euismod leo ante, nec vestibulum sapien blandit sed. Mauris vel hendrerit mauris. Vestibulum vulputate metus sit amet urna facilisis euismod. Maecenas eget sapien ut arcu cursus lobortis. Curabitur vel quam porttitor, convallis odio interdum, iaculis tellus. Pellentesque pretium risus id volutpat maximus. Duis blandit tempus rutrum. Proin bibendum nibh quam, ac mattis massa bibendum congue.</div>
                    <div class="comment__date">31 Aug 2018, 18:02</div>
                </div>
            </div>
        `;
    }

    getAllComments() {
        return `
            ${this.getComment()}
            ${this.getComment()}
        `;
    }
}