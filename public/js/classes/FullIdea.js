/**
 * Created by Ilya on 10.04.2017.
 */

import { ShortIdea } from './ShortIdea';
import { Comments } from './Comments';

export class FullIdea extends ShortIdea {
    constructor(idea) {
        super(idea);
        this.functionality = idea.functionality;
        this.mockups = idea.mockups;
        this.other = idea.other;
        this.tags = idea.tags;
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