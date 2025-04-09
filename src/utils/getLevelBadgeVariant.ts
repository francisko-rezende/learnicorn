type LevelVariant = 'beginner' | 'intermediate' | 'advanced';

export const getLevelBadgeVariant = (level: string): LevelVariant => {
  const variantMap: Record<string, LevelVariant> = {
    iniciante: 'beginner',
    intermediario: 'intermediate',
    avancado: 'advanced',
  };

  return variantMap[level];
};
