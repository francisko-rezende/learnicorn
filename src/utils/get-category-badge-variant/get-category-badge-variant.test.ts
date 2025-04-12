import { describe, it, expect } from 'vitest';
import { getCategoryBadgeVariant } from './get-category-badge-variant';

describe('getCategoryBadgeVariant', () => {
  it('should return "data" when category is "Dados"', () => {
    const categoryBadgeVariant = getCategoryBadgeVariant('Dados');
    expect(categoryBadgeVariant).toBe('data');
  });

  it('should return "design" when category is "Design"', () => {
    const categoryBadgeVariant = getCategoryBadgeVariant('Design');
    expect(categoryBadgeVariant).toBe('design');
  });

  it('should return "development" when category is "Desenvolvimento"', () => {
    const categoryBadgeVariant = getCategoryBadgeVariant('Desenvolvimento');
    expect(categoryBadgeVariant).toBe('development');
  });

  it('should return "product" when category is "Produto"', () => {
    const categoryBadgeVariant = getCategoryBadgeVariant('Produto');
    expect(categoryBadgeVariant).toBe('product');
  });

  it('should return undefined when category is unknown', () => {
    const categoryBadgeVariant = getCategoryBadgeVariant('unknown');
    expect(categoryBadgeVariant).toBeUndefined();
  });
});
