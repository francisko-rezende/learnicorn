import { courses } from '@/data/courses';
import { notFound } from 'next/navigation';
import { CourseDetailsScreen } from '@/screens/course-details-screen';

export async function generateStaticParams() {
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

  const course = courses.find(({ id }) => id === Number(courseId));

  if (!course) {
    notFound();
  }

  return <CourseDetailsScreen course={course} />;
}
