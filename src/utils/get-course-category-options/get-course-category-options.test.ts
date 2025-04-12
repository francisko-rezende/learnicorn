import { getCourseCategoryOptions } from '@/utils/get-course-category-options';
import { expect, describe, it } from 'vitest';
import { Course } from '@/types/course';

export const mockCourses: Course[] = [
  {
    id: 1,
    title: 'Introduction to UI Design',
    short_description: 'Learn basic UI design principles',
    full_description: 'Comprehensive course covering UI design fundamentals',
    category: 'Design',
    level: 'iniciante',
    duration_hours: 20,
    modules: [
      { title: 'Design Basics', lessons: 5 },
      { title: 'Color Theory', lessons: 3 },
    ],
  },
  {
    id: 2,
    title: 'Advanced React Development',
    short_description: 'Master React with advanced patterns',
    full_description: 'Deep dive into React hooks, context, and performance',
    category: 'Desenvolvimento',
    level: 'avancado',
    duration_hours: 30,
    modules: [
      { title: 'React Hooks', lessons: 6 },
      { title: 'Context API', lessons: 4 },
    ],
  },
  {
    id: 3,
    title: 'Data Science Fundamentals',
    short_description: 'Introduction to data analysis',
    full_description: 'Learn pandas, numpy and basic machine learning',
    category: 'Dados',
    level: 'iniciante',
    duration_hours: 25,
    modules: [
      { title: 'Python for Data', lessons: 4 },
      { title: 'Pandas Basics', lessons: 5 },
    ],
  },
  {
    id: 4,
    title: 'Product Management 101',
    short_description: 'Essentials of product management',
    full_description: 'Learn agile methodologies and product roadmaps',
    category: 'Produto',
    level: 'intermediario',
    duration_hours: 15,
    modules: [
      { title: 'Agile Basics', lessons: 3 },
      { title: 'User Stories', lessons: 2 },
    ],
  },
  {
    id: 5,
    title: 'UX Research Methods',
    short_description: 'Learn user research techniques',
    full_description: 'Conduct effective user interviews and usability tests',
    category: 'Design',
    level: 'intermediario',
    duration_hours: 18,
    modules: [
      { title: 'User Interviews', lessons: 4 },
      { title: 'Usability Testing', lessons: 3 },
    ],
  },
  {
    id: 6,
    title: 'Python Backend Development',
    short_description: 'Build APIs with Python',
    full_description: 'Create RESTful APIs with Django and Flask',
    category: 'Desenvolvimento',
    level: 'intermediario',
    duration_hours: 22,
    modules: [
      { title: 'Django Basics', lessons: 5 },
      { title: 'REST Principles', lessons: 4 },
    ],
  },
];

export const emptyCourses: Course[] = [];

export const duplicateCategoryCourses: Course[] = [
  {
    id: 7,
    title: 'Data Visualization',
    short_description: 'Visualize data effectively',
    full_description: 'Learn Tableau and other visualization tools',
    category: 'Dados',
    level: 'intermediario',
    duration_hours: 12,
    modules: [
      { title: 'Tableau Basics', lessons: 3 },
      { title: 'Chart Types', lessons: 2 },
    ],
  },
  {
    id: 8,
    title: 'Machine Learning Intro',
    short_description: 'Basic ML concepts',
    full_description: 'Introduction to supervised and unsupervised learning',
    category: 'Dados',
    level: 'avancado',
    duration_hours: 28,
    modules: [
      { title: 'Supervised Learning', lessons: 6 },
      { title: 'Model Evaluation', lessons: 4 },
    ],
  },
];

describe('getCourseCategoryOptions', () => {
  it('should return an array of unique category options sorted alphabetically', () => {
    const result = getCourseCategoryOptions(mockCourses);

    expect(result.length).toBe(4);

    const categories = result.map(option => option.value);
    expect(categories).toContain('Dados');
    expect(categories).toContain('Design');
    expect(categories).toContain('Desenvolvimento');
    expect(categories).toContain('Produto');

    expect(categories).toEqual(
      categories.slice().sort((a, b) => a.localeCompare(b)),
    );
  });

  it('should return an empty array when no courses are provided', () => {
    const result = getCourseCategoryOptions(emptyCourses);
    expect(result).toEqual([]);
  });

  it('should handle duplicate categories and return unique values', () => {
    const result = getCourseCategoryOptions(duplicateCategoryCourses);
    expect(result).toEqual([{ value: 'Dados', label: 'Dados' }]);
  });

  it('should return options sorted alphabetically regardless of input order', () => {
    const shuffledCourses = [...mockCourses].sort(() => Math.random() - 0.5);
    const result = getCourseCategoryOptions(shuffledCourses);

    for (let i = 0; i < result.length - 1; i++) {
      expect(
        result[i].value.localeCompare(result[i + 1].value),
      ).toBeLessThanOrEqual(0);
    }
  });

  it('should return options with correct value and label properties', () => {
    const result = getCourseCategoryOptions(mockCourses);

    result.forEach(option => {
      expect(option).toHaveProperty('value');
      expect(option).toHaveProperty('label');
      expect(option.value).toEqual(option.label);
    });
  });

  it('should handle a single course input', () => {
    const singleCourse = [mockCourses[0]];
    const result = getCourseCategoryOptions(singleCourse);

    expect(result).toEqual([{ value: 'Design', label: 'Design' }]);
  });
});
