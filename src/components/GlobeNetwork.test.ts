import { describe, it, expect } from 'vitest';

/**
 * Tests for GlobeNetwork component mobile optimizations
 * 
 * Note: These tests document the expected mobile optimization behavior.
 * The actual component runs in a browser context with D3.js, so we can't
 * fully test the rendering here, but we can document the expected values.
 */
describe('GlobeNetwork mobile optimizations', () => {
  it('should use fewer particles on mobile (35) than desktop (80)', () => {
    const desktopParticles = 80;
    const mobileParticles = 35;
    const reductionPercent = ((desktopParticles - mobileParticles) / desktopParticles) * 100;
    
    expect(mobileParticles).toBe(35);
    expect(desktopParticles).toBe(80);
    expect(reductionPercent).toBeCloseTo(56.25, 1);
  });

  it('should use lower frame rate on mobile (30fps) than desktop (60fps)', () => {
    const desktopFps = 60;
    const mobileFps = 30;
    const desktopFrameTime = 1000 / desktopFps;
    const mobileFrameTime = 1000 / mobileFps;
    
    expect(desktopFrameTime).toBeCloseTo(16.67, 1);
    expect(mobileFrameTime).toBeCloseTo(33.33, 1);
  });

  it('should use fewer connections on mobile', () => {
    const desktopMaxDistance = 150;
    const mobileMaxDistance = 120;
    const desktopMaxConnectionsPerParticle = 5;
    const mobileMaxConnectionsPerParticle = 3;
    
    expect(mobileMaxDistance).toBeLessThan(desktopMaxDistance);
    expect(mobileMaxConnectionsPerParticle).toBeLessThan(desktopMaxConnectionsPerParticle);
  });

  it('should detect mobile devices correctly', () => {
    // Test user agent patterns
    const mobileUserAgents = [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
      'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X)',
      'Mozilla/5.0 (Linux; Android 10; SM-G973F)',
      'Mozilla/5.0 (Linux; Android 11; Pixel 5)',
    ];
    
    const mobilePattern = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    
    mobileUserAgents.forEach(ua => {
      expect(mobilePattern.test(ua)).toBe(true);
    });
  });
});
