import { describe, expect, it, vi } from 'vitest';
import { initSpaceInvadersGame } from './spaceInvadersGame';

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
