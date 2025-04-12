import { expect, describe, it } from 'vitest';
import { getLevelBadgeVariant } from './get-level-badge-variant';

describe('getLevelBadgeVariant', () => {
  it('should return "beginner" when level is "iniciante"', () => {
    const badgeVariant = getLevelBadgeVariant('iniciante');
    expect(badgeVariant).toBe('beginner');
  });

  it('should return "intermediate" when level is "intermediario"', () => {
    const badgeVariant = getLevelBadgeVariant('intermediario');
    expect(badgeVariant).toBe('intermediate');
  });

  it('should return "advanced" when level is "avancado"', () => {
    const badgeVariant = getLevelBadgeVariant('avancado');
    expect(badgeVariant).toBe('advanced');
  });

  it('should return undefined when category is unknown', () => {
    const badgeVariant = getLevelBadgeVariant('unknown');
    expect(badgeVariant).toBeUndefined();
  });
});
