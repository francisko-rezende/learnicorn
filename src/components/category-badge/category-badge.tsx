import { Category } from '@/types/category';
import { Badge } from '../badge';
import { getCategoryBadgeVariant } from '@/utils/getCategoryBadgeVariant';

type CategoryBadgeProps = {
  category: Category;
};

export const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const badgeVariant = getCategoryBadgeVariant(category);

  return (
    <Badge variant={badgeVariant}>
      <span className="sr-only">Categoria: </span>
      {category}
    </Badge>
  );
};
