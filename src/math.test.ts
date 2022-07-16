import { describe, it, expect } from 'vitest';
import { add } from './math';

describe("add", () => {
    it('should add 2 numbers', () => {
        expect(add(1,2)).toEqual(3);
    })
})