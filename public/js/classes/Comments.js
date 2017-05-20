/**
 * Created by Ilya on 09.04.2017.
 */
import { monthMap } from '../consts';

export class Comment {
    constructor(comment) {
        this.text = comment.text;
        this.date = this.getFormattedDate(comment.date);
        this.user = comment.user;
    }

    getFormattedDateNumber(num) {
        //add 0 before 1-digit numbers
        return (num.toString().length > 1) ? num : '0' + num;
    }

    getFormattedDate(date) {
        let date_full = new Date(date);
        if ( isNaN(date_full.valueOf()) ) {
            return 'Wrong Date!';
        }
        let day = this.getFormattedDateNumber(date_full.getDate());
        let minutes = this.getFormattedDateNumber(date_full.getMinutes());

        return `${day} ${monthMap[date_full.getMonth()]} ${date_full.getFullYear()}, ${date_full.getHours()}:${minutes}`;
    }

    getComment() {
        return `
            <div class="comments-block">
                <div class="flex-item avatar">
                    <div class="avatar__wrapper"></div>
                    <div class="avatar__username"><a href="profile.html?id=${this.user.id}">${this.user.name}</a></div>
                </div>
                <div class="flex-item comment">
                    <div class="comment__text">${this.text}</div>
                    <div class="comment__date">${this.date}</div>
                </div>
            </div>
        `;
    }
}