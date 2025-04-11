import { courses } from '@/data/courses';

export const courseClient = {
  getAllCourses: () => {
    return courses;
  },

  getCourseById: (courseId: number) => {
    const course = courses.find(({ id }) => id === courseId);

    return course;
  },
};
