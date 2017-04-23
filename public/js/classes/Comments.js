/**
 * Created by Ilya on 09.04.2017.
 */
import { monthMap } from '../consts';

export class Comment {
    constructor(comment) {
        this.text = comment.text;
        this.date = this.getFormattedDate(comment.date);
        console.log(this.date);
    }

    getFormattedDateNumber(num) {
        //add 0 before 1-digit numbers
        return (num.toString().length > 1) ? num : '0' + num;
    }

    getFormattedDate(date) {
        let df = new Date(date); //date_full
        if ( isNaN(df.valueOf()) ) {
            return 'Wrong Date!';
        }
        let day = this.getFormattedDateNumber(df.getDate());
        let minutes = this.getFormattedDateNumber(df.getMinutes());

        return `${day} ${monthMap[df.getMonth()]} ${df.getFullYear()}, ${df.getHours()}:${minutes}`;
    }

    getComment() {

        return `
            <div class="comments-block">
                <div class="flex-item avatar">
                    <div class="avatar__wrapper"></div>
                    <div class="avatar__username"><a href="profile.html?id=1">Username</a></div>
                </div>
                <div class="flex-item comment">
                    <div class="comment__text">${this.text}</div>
                    <div class="comment__date">${this.date}</div>
                </div>
            </div>
        `;
    }
}