import { Level } from '@/types/level';
import { Badge } from '../badge';
import { getLevelBadgeVariant } from '@/utils/get-level-badge-variant';
import { getLevelLabel } from '@/utils/get-level-label';

type LevelBadgeProps = {
  level: Level;
};

export const LevelBadge = ({ level }: LevelBadgeProps) => {
  const badgeVariant = getLevelBadgeVariant(level);
  const levelLabel = getLevelLabel(level);

  return (
    <Badge variant={badgeVariant}>
      <span className="sr-only">Nível de dificuldade: </span>
      {levelLabel}
    </Badge>
  );
};
