import { describe, expect, it, vi } from 'vitest';
import { calculateFrameScale, initSpaceInvadersGame } from './spaceInvadersGame';

describe('calculateFrameScale', () => {
  it('should use a 1x scale when there is no previous frame time', () => {
    const frameScale = calculateFrameScale(null, 100);

    expect(frameScale).toBe(1);
  });

  it('should clamp very fast frames to keep movement readable', () => {
    const frameScale = calculateFrameScale(100, 108);

    expect(frameScale).toBe(0.6);
  });

  it('should clamp very slow frames to avoid big movement jumps', () => {
    const frameScale = calculateFrameScale(100, 160);

    expect(frameScale).toBe(1.6);
  });
});

describe('initSpaceInvadersGame', () => {
  it('should return a cleanup function', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const cleanup = initSpaceInvadersGame(container);

    expect(typeof cleanup).toBe('function');

    cleanup();
    document.body.removeChild(container);
  });

  it('should remove the game svg when cleanup is called', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const cleanup = initSpaceInvadersGame(container);

    expect(container.querySelector('svg')).not.toBeNull();

    cleanup();

    expect(container.querySelector('svg')).toBeNull();
    document.body.removeChild(container);
  });

  it('should unregister controls on cleanup without errors', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const keydownSpy = vi.spyOn(window, 'removeEventListener');
    const cleanup = initSpaceInvadersGame(container);

    cleanup();

    expect(keydownSpy).toHaveBeenCalledWith('keydown', expect.any(Function));

    keydownSpy.mockRestore();
    document.body.removeChild(container);
  });
});
