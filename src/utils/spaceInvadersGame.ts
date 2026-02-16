import * as d3 from 'd3';
import { clamp, createInvaderGrid, rectanglesOverlap } from './spaceInvaders';

/**
 * Represents a projectile fired by the player or invaders.
 */
interface Bullet {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  velocityY: number;
  isPlayerBullet: boolean;
}

const TARGET_FRAME_TIME = 1000 / 60;

/**
 * Convert elapsed animation time into a safe frame scale.
 */
export function calculateFrameScale(previousFrameTime: number | null, currentFrameTime: number): number {
  const elapsed = previousFrameTime === null ? TARGET_FRAME_TIME : currentFrameTime - previousFrameTime;
  return clamp(elapsed / TARGET_FRAME_TIME, 0.6, 1.6);
}

/**
 * Start the Space Invaders mini-game in the provided container.
 * Returns a cleanup function that removes listeners and stops animation.
 */
export function initSpaceInvadersGame(container: HTMLElement): () => void {
  const STAR_COUNT = 70;
  const gameStatus = container.querySelector('#game-status') as HTMLElement | null;
  const mobileControls = container.querySelector('#mobile-game-controls') as HTMLElement | null;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (mobileControls) {
    mobileControls.hidden = !(isTouchDevice || window.innerWidth < 768);
  }

  const width = container.clientWidth;
  const height = container.clientHeight;

  const svg = d3.select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('style', 'position: absolute; top: 0; left: 0;')
    .attr('aria-label', 'Space Invaders mini game');

  const player = {
    x: width / 2 - 24,
    y: height - 56,
    width: 48,
    height: 12,
    speed: isTouchDevice ? 7 : 8
  };

  const controlState = {
    moveLeft: false,
    moveRight: false,
    shoot: false
  };

  const bullets: Bullet[] = [];
  const invaders = createInvaderGrid(width, 70);
  let invaderDirection = 1;
  let lastPlayerShot = 0;
  let lastInvaderShot = 0;
  let nextBulletId = 0;
  let score = 0;
  let gameOverMessage = '';
  let gameAnimationFrameId: number | null = null;
  let previousFrameTime: number | null = null;

  const stars = Array.from({ length: STAR_COUNT }, (_, index) => ({
    id: index,
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.4 + 0.4,
  }));

  svg.append('g')
    .selectAll('circle')
    .data(stars)
    .enter()
    .append('circle')
    .attr('cx', (star) => star.x)
    .attr('cy', (star) => star.y)
    .attr('r', (star) => star.r)
    .attr('fill', 'rgba(163, 255, 171, 0.35)');

  const invaderLayer = svg.append('g');
  const bulletLayer = svg.append('g');
  const playerLayer = svg.append('g');

  function updateGameStatus() {
    if (!gameStatus) {
      return;
    }

    gameStatus.textContent = gameOverMessage ? `${gameOverMessage} | Score: ${score}` : `Score: ${score}`;
  }

  function shootPlayerBullet() {
    bullets.push({
      id: nextBulletId++,
      x: player.x + player.width / 2 - 2,
      y: player.y - 10,
      width: 4,
      height: 10,
      velocityY: -9,
      isPlayerBullet: true,
    });
  }

  function shootInvaderBullet() {
    const aliveInvaders = invaders.filter((invader) => invader.isAlive);
    if (aliveInvaders.length === 0) {
      return;
    }

    const shooter = aliveInvaders[Math.floor(Math.random() * aliveInvaders.length)];
    bullets.push({
      id: nextBulletId++,
      x: shooter.x + shooter.width / 2 - 2,
      y: shooter.y + shooter.height,
      width: 6,
      height: 10,
      velocityY: 4.5,
      isPlayerBullet: false,
    });
  }

  function render() {
    const aliveInvaders = invaders.filter((invader) => invader.isAlive);

    const invaderSelection = invaderLayer
      .selectAll('rect')
      .data(aliveInvaders, (invader: any) => invader.id);

    invaderSelection.exit().remove();

    invaderSelection
      .enter()
      .append('rect')
      .attr('rx', 2)
      .attr('ry', 2)
      .attr('fill', '#98f7a8')
      .attr('stroke', '#335c3e')
      .merge(invaderSelection as any)
      .attr('x', (invader) => invader.x)
      .attr('y', (invader) => invader.y)
      .attr('width', (invader) => invader.width)
      .attr('height', (invader) => invader.height);

    const bulletSelection = bulletLayer
      .selectAll('rect')
      .data(bullets, (bullet: any) => bullet.id);

    bulletSelection.exit().remove();

    bulletSelection
      .enter()
      .append('rect')
      .merge(bulletSelection as any)
      .attr('x', (bullet) => bullet.x)
      .attr('y', (bullet) => bullet.y)
      .attr('width', (bullet) => bullet.width)
      .attr('height', (bullet) => bullet.height)
      .attr('rx', (bullet) => bullet.isPlayerBullet ? 0 : 2)
      .attr('fill', (bullet) => bullet.isPlayerBullet ? '#f4ff7a' : '#ff9d4d');

    const playerSelection = playerLayer.selectAll('rect').data([player]);
    playerSelection
      .enter()
      .append('rect')
      .attr('rx', 2)
      .attr('ry', 2)
      .attr('fill', '#bbf86f')
      .attr('stroke', '#4b662d')
      .merge(playerSelection as any)
      .attr('x', player.x)
      .attr('y', player.y)
      .attr('width', player.width)
      .attr('height', player.height);
  }

  function animate(now: number) {
    if (gameOverMessage) {
      disableInputListeners();
      updateGameStatus();
      render();
      return;
    }

    const frameScale = calculateFrameScale(previousFrameTime, now);
    previousFrameTime = now;

    if (controlState.moveLeft) {
      player.x -= player.speed * frameScale;
    }

    if (controlState.moveRight) {
      player.x += player.speed * frameScale;
    }

    player.x = clamp(player.x, 0, width - player.width);

    if (controlState.shoot && now - lastPlayerShot > 250) {
      shootPlayerBullet();
      lastPlayerShot = now;
    }

    const aliveInvaders = invaders.filter((invader) => invader.isAlive);
    const horizontalMove = 1.2 * invaderDirection * frameScale;
    let reachedEdge = false;

    aliveInvaders.forEach((invader) => {
      invader.x += horizontalMove;
      if (invader.x <= 0 || invader.x + invader.width >= width) {
        reachedEdge = true;
      }
    });

    if (reachedEdge) {
      invaderDirection *= -1;
      aliveInvaders.forEach((invader) => {
        invader.y += 18;
      });
    }

    if (now - lastInvaderShot > 900) {
      shootInvaderBullet();
      lastInvaderShot = now;
    }

    bullets.forEach((bullet) => {
      bullet.y += bullet.velocityY * frameScale;
    });

    for (let index = bullets.length - 1; index >= 0; index--) {
      const bullet = bullets[index];

      if (bullet.y + bullet.height < 0 || bullet.y > height) {
        bullets.splice(index, 1);
        continue;
      }

      if (bullet.isPlayerBullet) {
        const hitInvader = invaders.find((invader) => {
          if (!invader.isAlive) {
            return false;
          }

          return rectanglesOverlap(bullet, invader);
        });

        if (hitInvader) {
          hitInvader.isAlive = false;
          bullets.splice(index, 1);
          score += 10;
        }
        continue;
      }

      if (rectanglesOverlap(bullet, player)) {
        bullets.splice(index, 1);
        gameOverMessage = 'Game Over';
      }
    }

    const hasInvaderReachedPlayer = invaders.some((invader) => invader.isAlive && invader.y + invader.height >= player.y);
    const hasClearedAllInvaders = invaders.every((invader) => !invader.isAlive);

    if (hasInvaderReachedPlayer) {
      gameOverMessage = 'Game Over';
    } else if (hasClearedAllInvaders) {
      gameOverMessage = 'You Win';
    }

    updateGameStatus();
    render();
    gameAnimationFrameId = requestAnimationFrame(animate);
  }

  function setControl(control: 'moveLeft' | 'moveRight' | 'shoot', value: boolean) {
    controlState[control] = value;
  }

  const keyDownListener = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      setControl('moveLeft', true);
    }

    if (event.key === 'ArrowRight') {
      setControl('moveRight', true);
    }

    if (event.key === ' ') {
      event.preventDefault();
      setControl('shoot', true);
    }
  };

  const keyUpListener = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      setControl('moveLeft', false);
    }

    if (event.key === 'ArrowRight') {
      setControl('moveRight', false);
    }

    if (event.key === ' ') {
      setControl('shoot', false);
    }
  };

  const leftButton = document.getElementById('move-left');
  const rightButton = document.getElementById('move-right');
  const shootButton = document.getElementById('shoot');

  const bindPointerControl = (element: HTMLElement | null, control: 'moveLeft' | 'moveRight' | 'shoot') => {
    if (!element) {
      return () => {};
    }

    const start = (event: Event) => {
      event.preventDefault();
      setControl(control, true);
    };

    const end = (event: Event) => {
      event.preventDefault();
      setControl(control, false);
    };

    element.addEventListener('touchstart', start, { passive: false });
    element.addEventListener('touchend', end, { passive: false });
    element.addEventListener('touchcancel', end, { passive: false });
    element.addEventListener('mousedown', start);
    element.addEventListener('mouseup', end);
    element.addEventListener('mouseleave', end);

    return () => {
      element.removeEventListener('touchstart', start);
      element.removeEventListener('touchend', end);
      element.removeEventListener('touchcancel', end);
      element.removeEventListener('mousedown', start);
      element.removeEventListener('mouseup', end);
      element.removeEventListener('mouseleave', end);
    };
  };

  const releaseLeftControl = bindPointerControl(leftButton, 'moveLeft');
  const releaseRightControl = bindPointerControl(rightButton, 'moveRight');
  const releaseShootControl = bindPointerControl(shootButton, 'shoot');
  let areInputListenersActive = false;

  function disableInputListeners() {
    if (!areInputListenersActive) {
      return;
    }

    areInputListenersActive = false;
    controlState.moveLeft = false;
    controlState.moveRight = false;
    controlState.shoot = false;
    window.removeEventListener('keydown', keyDownListener);
    window.removeEventListener('keyup', keyUpListener);
    releaseLeftControl();
    releaseRightControl();
    releaseShootControl();
  }

  window.addEventListener('keydown', keyDownListener);
  window.addEventListener('keyup', keyUpListener);
  areInputListenersActive = true;

  updateGameStatus();
  render();
  gameAnimationFrameId = requestAnimationFrame(animate);

  return () => {
    disableInputListeners();

    if (mobileControls) {
      mobileControls.hidden = true;
    }

    svg.remove();

    if (gameAnimationFrameId !== null) {
      cancelAnimationFrame(gameAnimationFrameId);
      gameAnimationFrameId = null;
    }
  };
}
