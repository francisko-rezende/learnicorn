import { describe, it, expect } from 'vitest';
import { getLevelLabel } from './get-level-label';

describe('getLevelLabel', () => {
  it('should return "Iniciante" for "iniciante" input', () => {
    const levelLabel = getLevelLabel('iniciante');
    expect(levelLabel).toBe('Iniciante');
  });

  it('should return "Intermediário" when level is "intermediario"', () => {
    const levelLabel = getLevelLabel('intermediario');
    expect(levelLabel).toBe('Intermediário');
  });

  it('should return "Avançado" when level is "avancado"', () => {
    const levelLabel = getLevelLabel('avancado');
    expect(levelLabel).toBe('Avançado');
  });

  it('should return undefined when level is unknown', () => {
    const levelLabel = getLevelLabel('unknown');
    expect(levelLabel).toBeUndefined();
  });
});
