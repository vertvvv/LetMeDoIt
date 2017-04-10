/**
 * Created by Ilya on 09.04.2017.
 */

export class ShortIdea {
    constructor(idea) {
        this.name = idea.name;
        this.mainIdea = idea['main-idea'];
        this.rating = idea.rating;
    }

    getIdeaHeader() {
        return `<div class="idea__header">
                    <div class="idea__header__name">${this.name}</div>
                    <div class="idea__header__rating">
                        <span class="rating rating__minus">-</span>
                        <span>${this.rating}</span>
                        <span class="rating rating__plus">+</span>
                    </div>
                </div>`;
    }

    getFullIdea() {
        return `<div class="idea">
                    ${this.getIdeaHeader()}
                    <div class="idea__text">${this.mainIdea}</div>
                    <div class="idea__footer">
                        <a href="../../assets/idea.html" class="idea__footer__full">Read more..</a>
                        <a href="../../assets/idea.html#comments" class="idea__footer__comments"><span class="comment-icon">111</span>
                            0</a>
                    </div>
                </div>`;
    }
}