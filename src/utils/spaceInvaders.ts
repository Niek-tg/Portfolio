export interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Invader extends Rectangle {
  id: number;
  isAlive: boolean;
}

/**
 * Keep a numeric value inside a range.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

/**
 * Detect overlap between two axis-aligned rectangles.
 */
export function rectanglesOverlap(first: Rectangle, second: Rectangle): boolean {
  return (
    first.x < second.x + second.width &&
    first.x + first.width > second.x &&
    first.y < second.y + second.height &&
    first.y + first.height > second.y
  );
}

/**
 * Build a centered invader formation.
 */
export function createInvaderGrid(fieldWidth: number, startY: number): Invader[] {
  const rows = 4;
  const columns = 8;
  const invaderWidth = 28;
  const invaderHeight = 18;
  const horizontalSpacing = 14;
  const verticalSpacing = 16;

  const formationWidth = columns * invaderWidth + (columns - 1) * horizontalSpacing;
  const startX = (fieldWidth - formationWidth) / 2;

  const invaders: Invader[] = [];

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const id = row * columns + column;
      invaders.push({
        id,
        x: startX + column * (invaderWidth + horizontalSpacing),
        y: startY + row * (invaderHeight + verticalSpacing),
        width: invaderWidth,
        height: invaderHeight,
        isAlive: true,
      });
    }
  }

  return invaders;
}
