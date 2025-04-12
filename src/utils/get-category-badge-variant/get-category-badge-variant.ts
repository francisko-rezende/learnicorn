type BadgeVariant = 'data' | 'design' | 'development' | 'product';

export const getCategoryBadgeVariant = (category: string): BadgeVariant => {
  const variantMap: Record<string, BadgeVariant> = {
    Dados: 'data',
    Design: 'design',
    Desenvolvimento: 'development',
    Produto: 'product',
  };

  return variantMap[category];
};
