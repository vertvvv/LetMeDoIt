/**
 * Created by Ilya on 09.04.2017.
 */

import { Comments } from './Comments';

export class ShortIdea {
    constructor(name, mainIdea, rating) {
        this.name = name;
        this.mainIdea = mainIdea;
        this.rating = rating;
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

export class FullIdea extends ShortIdea {
    constructor(name, mainIdea, rating, functionality, mockups, other, tags) {
        super(name, mainIdea, rating);
        this.functionality = functionality;
        this.mockups = mockups;
        this.other = other;
        this.tags = tags;
    }

    getMainIdea() {
        return `<section class="idea__text__main">
                    <h1>Main idea</h1>
                    <p>${this.mainIdea}</p>
                </section>`;
    }

    getFunctionsList() {
        let func = this.functionality;

        return func.reduce((res, item) => res + `<li>${item}</li>` , '');
    }

    getFunctionality() {
        return `<section class="idea__text__functions">
                    <h1>Functionality</h1>
                    <ul>
                        ${this.getFunctionsList()}
                    </ul>
                </section>`;
    }

    getMockupsGrid() {
        let mockups = this.mockups;

        return mockups.reduce((res, item) => {
            return res + `
                    <div class="img-grid__wrapper">
                        <img class="mockup" src="${item}">
                    </div>
            `;
        }, '');
    }

    getMockups() {
        return `<section class="idea__text__mockups">
                    <h1>Mockups</h1>
                    <div class="img-grid">
                        ${this.getMockupsGrid()}
                    </div>
                </section>`;
    }

    getOtherFormatted() {
        let other = this.other;

        return other.reduce((res, item) => {
            return res + `
                    <h3>${item.name}</h3>
                    <p>${item.text}</p>
            `;
        }, '');
    }

    getOther() {
        return `<section class="idea__text__other">
                    <h2>Other wishes</h2>
                    ${this.getOtherFormatted()}
                </section>`;
    }

    getTagsFormatted() {
        let tags = this.tags;

        return tags.reduce((res, item) => res + `<div class="tag">${item}</div>`, '');
    }

    getTags() {
        return `<section class="idea__text__tags">
                    ${this.getTagsFormatted()}
                </section>`;
    }

    getFullIdea() {
        let comments = new Comments();

        return `<div class="idea">
                   ${this.getIdeaHeader()}
                    <div class="idea__text">
                        ${this.getMainIdea()}
                        ${this.getFunctionality()}
                        ${this.getMockups()}
                        ${this.getOther()}
                        ${this.getTags()}
                        <div id="comments" class="idea__footer">
                            <hr>
                            <div class="comments">
                                <div class="answer-block">
                                    <div class="flex-item input-place">
                                        <textarea id="new-comment" placeholder="Write your comment here.."></textarea>
                                        <button class="input-place__button">Send</button>
                                    </div>
                                </div>
                                <div id="commentsPlace">
                                    ${comments.getAllComments()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>` //comments temp desicion
    }
}