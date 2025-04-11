import { CourseListScreen } from '@/screens/course-list-screen/course-list-screen';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <Suspense>
      <CourseListScreen />
    </Suspense>
  );
}
