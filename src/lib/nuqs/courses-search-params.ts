import { createLoader, parseAsStringLiteral } from 'nuqs/server';

const categoryOptions = [
  '',
  'Design',
  'Desenvolvimento',
  'Produto',
  'Dados',
] as const;

const levelOptions = ['', 'iniciante', 'intermediario', 'avancado'] as const;

export const coursesSearchParams = {
  category: parseAsStringLiteral(categoryOptions).withDefault(''),
  level: parseAsStringLiteral(levelOptions).withDefault(''),
};

export const loadFilters = createLoader(coursesSearchParams);
