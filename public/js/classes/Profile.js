/**
 * Created by Ilya on 09.04.2017.
 */

export class Profile {
    constructor(user) {
        this.username = user.username;
        let name = user.name, surname = user.surname;
        this.fullname = (name && surname) ? (name + ' ' + surname) : ((name) ? name : ((surname) ? surname : null));
        this.info = user.info;
        this.stats = user.stats;
        this.avatar = user.avatar;
    }

    getUserMain() {
        return `
            <div class="user-bio__main">
                <div class="user-bio__main__avatar">
                </div>
                <div class="user-bio__main__username">
                    ${this.fullname}
                </div>
            </div>
        `
    }

    getUserBioStats() {
        return `
            <div class="user-bio__info__stats">
                <div class="stats-button">
                    <span class="stats-button__name">Ideas</span>
                    <span class="stats-button__value">${this.stats.ideas}</span>
                </div>
                <div class="stats-button">
                    <span class="stats-button__name">Comments</span>
                    <span class="stats-button__value">${this.stats.comments}</span>
                </div>
                <div class="stats-button">
                    <span class="stats-button__name">Rating</span>
                    <span class="stats-button__value">${this.stats.rating}</span>
                </div>
            </div>
        `;
    }

    getUserBioDesc() {
        return (!this.info) ? '' : `
            <div class="user-bio__info__desc">
                <span><i>User bio: </i>${this.info}</span>
            </div>
        `;
    }

    getUserFullBio() {
        return `
            <div class="user-bio__info">
                ${this.getUserBioDesc()}
                ${this.getUserBioStats()}
            </div>
        `;
    }

    getFullProfile() {
        return `
             <div class="user-bio">
             ${this.getUserMain()}
             ${this.getUserFullBio()}
            </div>
        `;
    }
}