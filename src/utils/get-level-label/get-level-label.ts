type LevelLabel = 'Iniciante' | 'Intermediário' | 'Avançado';

export const getLevelLabel = (level: string): LevelLabel => {
  const labelMap: Record<string, LevelLabel> = {
    iniciante: 'Iniciante',
    intermediario: 'Intermediário',
    avancado: 'Avançado',
  };

  return labelMap[level];
};
