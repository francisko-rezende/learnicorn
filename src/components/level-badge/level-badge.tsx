import { Level } from '@/types/level';
import { Badge } from '../badge';
import { getLevelBadgeVariant } from '@/utils/getLevelBadgeVariant';
import { getLevelLabel } from '@/utils/getLevelLabel';

type LevelBadgeProps = {
  level: Level;
};

export const LevelBadge = ({ level }: LevelBadgeProps) => {
  const badgeVariant = getLevelBadgeVariant(level);
  const levelLabel = getLevelLabel(level);

  return (
    <Badge variant={badgeVariant}>
      <span className="sr-only">Categoria: </span>
      {levelLabel}
    </Badge>
  );
};
