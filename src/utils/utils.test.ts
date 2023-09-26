import {describe, expect, test} from '@jest/globals';
import api from './api';

describe('api.getArticleUrl', () => {
    test('should generate appropriate url', () => {
        expect(api.getArticleUrl('123')).toBe("https://hacker-news.firebaseio.com/v0/item/123.json?print=pretty");
    });
});