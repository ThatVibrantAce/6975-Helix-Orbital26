import { describe, it, expect } from 'vitest';
import { addMinutes } from './util';

describe('addMinutes', () => {
    it('adds 120 minutes to a 3pm UTC time, returning 5pm UTC', () => {
        const result = addMinutes('2026-05-28T15:00:00.000Z', 120);
        expect(result).toBe('2026-05-28T17:00:00.000Z');
    });

    it('handles crossing midnight', () => {
        const result = addMinutes('2026-05-28T23:30:00.000Z', 60);
        expect(result).toBe('2026-05-29T00:30:00.000Z');
    });
});