/**
 * Created by Ilya on 09.04.2017.
 */

export class ShortIdea {
    constructor(idea) {
        this.id = idea.id;
        this.user = {
            id: idea.user.id,
            name: idea.user.name
        };
        this.name = idea.name;
        this.mainIdea = idea['main-idea'];
        this.rating = idea.rating;
        this.voteCounter = 0;
        this.commentsCounter = idea.comments.length;
    }

    init() {
        $('body')
            .on('click', this.getId() + ' .rating__minus', () => {
                if (this.voteCounter !== -1) {
                    this.rating--;
                    this.voteCounter--;
                    this.headerReRender('minus').then(this.addVoted('minus'));
                }
            })
            .on('click', this.getId() + ' .rating__plus', () => {
                if (this.voteCounter !== 1) {
                    this.rating++;
                    this.voteCounter++;
                    this.headerReRender('minus').then(this.addVoted('plus'));
                }
            });

        return this.getFullIdea();
    }

    addVoted(votedClass) {
        if (this.voteCounter !== 0) {
            $(this.getId() + ' .rating__' + votedClass).addClass('voted');
        }
    }

    headerReRender(voted = '') {
        return new Promise(() => {
            $(this.getId() + ' .idea__header__rating').remove();
            $(this.getId() + ' .idea__header').append(this.getIdeaRating());
        })
    }

    getId() {
        return '#' + this.id;
    }

    getIdeaRating() {
        return `
                <div class="idea__header__rating">
                    <span class="rating rating__minus">-</span>
                    <span>${this.rating}</span>
                    <span class="rating rating__plus">+</span>
                </div>
        `;
    }

    getIdeaHeader() {
        return `<div class="idea__header">
                    <a class="idea__header__name" href="../assets/idea.html?id=${this.id}">${this.name}</a>
                    ${this.getIdeaRating()}
                </div>`;
    }

    getIdeaFooter() {
        return `
            <div class="idea__footer footer-short">
                <div class="idea__footer__author">
                    <span>From:</span><a href="../../assets/profile.html?id=${this.user.id}" class="idea__footer__full">${this.user.name}</a>
                </div>
                <a href="../../assets/idea.html?id=${this.id}#comments" class="idea__footer__comments"><span class="comment-icon">111</span>
                    ${this.commentsCounter}</a>
            </div>`
    }

    getFullIdea() {
        return `<div id="${this.id}" class="idea">
                    ${this.getIdeaHeader()}
                    <div class="idea__text">${this.mainIdea}</div>
                    ${this.getIdeaFooter()}
                </div>`;
    }
}