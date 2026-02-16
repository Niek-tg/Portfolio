import { describe, expect, it } from 'vitest';
import { clamp, createInvaderGrid, rectanglesOverlap } from './spaceInvaders';

describe('spaceInvaders utilities', () => {
  describe('clamp', () => {
    it('should keep a value within the min and max range', () => {
      const result = clamp(14, 0, 10);

      expect(result).toBe(10);
    });
  });

  describe('rectanglesOverlap', () => {
    it('should return true when rectangles intersect', () => {
      const first = { x: 10, y: 10, width: 20, height: 20 };
      const second = { x: 25, y: 20, width: 20, height: 20 };

      const result = rectanglesOverlap(first, second);

      expect(result).toBe(true);
    });
  });

  describe('createInvaderGrid', () => {
    it('should create a centered 4x8 invader formation', () => {
      const invaders = createInvaderGrid(800, 70);

      expect(invaders).toHaveLength(32);
    });

    it('should position the first invader at the expected starting point', () => {
      const invaders = createInvaderGrid(800, 70);

      expect(invaders[0]).toMatchObject({ x: 239, y: 70 });
    });
  });
});
