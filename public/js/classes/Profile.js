/**
 * Created by Ilya on 09.04.2017.
 */

export class Profile {
    constructor(user) {
        this.username = user.username;
        this.name = user.name;
        this.surname = user.surname;
        this.info = user.info;
        this.stats = user.stats;
        this.avatar = user.avatar;
    }

    getFullName() {
        let name = this.name, surname = this.surname;
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

    getUserMain() {
        let avatar = '';
        if (this.avatar) {
            avatar = `style="background-image: url(${this.avatar});"`
        }

        return `
            <div class="user-bio__main">
                <div class="user-bio__main__avatar" ${avatar}>
                </div>
                <div class="user-bio__main__username">
                    ${this.getFullName()}
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