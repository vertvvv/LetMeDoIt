/**
 * Created by Ilya on 15.04.2017.
 */

let chai = require('../../../node_modules/chai/chai');

import { Comment } from '../../js/classes/Comments';
import { ShortIdea } from '../../js/classes/ShortIdea';
import { FullIdea } from '../../js/classes/FullIdea';

let should = chai.should();

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            [1,2,3].indexOf(5).should.equal(-1);
            [1,2,3].indexOf(1).should.equal(0);
        });
    });
});

describe('Comment', function() {
    describe('#getFormattedDate(date)', function() {
        let comment = new Comment({text: 'lil', date: '2017-02-31 18:22'});
        it('should return formatted date or WrongDate!', function() {
            comment.getFormattedDate('2017-02-15 18:22').should.equal('15 Feb 2017, 18:22');
            comment.getFormattedDate().should.equal('Wrong Date!');
        });
    });
});

describe('Short Idea', function() {
    describe('#getId()', function() {
        let shortIdea = new ShortIdea({id: 1, comments: []});
        it('should return id with "#" before', function() {
            shortIdea.getId().should.equal('#1');
        });
    });
});

describe('Full Idea', function() {
    describe('#getMainIdea()', function() {
        let fullIdea = new FullIdea({id: 1, comments: [], ['main-idea']: 'text'});
        it('should return id with "#" before', function() {
            fullIdea.getMainIdea().should.equal(`<section class="idea__text__main">
                    <h1>Main idea</h1>
                    <p>text</p>
                </section>`);
        });
    });
});