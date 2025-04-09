import { Category } from './category';
import { Level } from './level';

export type Course = {
  id: number;
  title: string;
  short_description: string;
  full_description: string;
  category: Category;
  level: Level;
  duration_hours: number;
  modules: {
    title: string;
    lessons: number;
  }[];
};
