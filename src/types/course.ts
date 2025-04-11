import { Category } from './category';
import { Level } from './level';
import { CourseModule } from './course-module';

export type Course = {
  id: number;
  title: string;
  short_description: string;
  full_description: string;
  category: Category;
  level: Level;
  duration_hours: number;
  modules: CourseModule[];
};
