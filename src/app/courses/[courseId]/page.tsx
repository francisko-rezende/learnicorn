import { notFound } from 'next/navigation';
import { CourseDetailsScreen } from '@/screens/course-details-screen';
import { courseClient } from '@/data-access/course-client';

export async function generateStaticParams() {
  const courses = courseClient.getAllCourses();

  return courses.map(course => ({
    slug: course.id,
  }));
}

type CourseDetailsPageProps = {
  params: Promise<{
    courseId: string;
  }>;
};

export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { courseId } = await params;

  const course = courseClient.getCourseById(Number(courseId));

  if (!course) {
    notFound();
  }

  return <CourseDetailsScreen course={course} />;
}
