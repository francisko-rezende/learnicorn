import { unstable_ViewTransition as ViewTransition } from 'react';
import { CategoryBadge } from '@/components/category-badge/category-badge';
import { LevelBadge } from '@/components/level-badge/level-badge';
import { Title } from '@/components/title';
import { Course } from '@/types/course';
import { enrollOnCourseAction } from '@/actions/enroll-on-course';
import { EnrollOnCourseForm } from '@/components/enroll-on-course-form';

type CourseDetailsTitleSection = {
  courseWithoutModules: Omit<Course, 'modules'>;
};

export const CourseDetailsTitleSection = ({
  courseWithoutModules,
}: CourseDetailsTitleSection) => {
  const {
    id: courseId,
    category,
    duration_hours,
    short_description,
    full_description,
    level,
    title,
  } = courseWithoutModules;

  return (
    <section className="space-y-2">
      <div className="mb-4 flex gap-1">
        <ViewTransition name={`card-${courseId}-category`}>
          <CategoryBadge category={category} />
        </ViewTransition>

        <ViewTransition name={`card-${courseId}-level`}>
          <LevelBadge level={level} />
        </ViewTransition>
      </div>
      <ViewTransition name={`card-${courseId}-title`}>
        <Title>{title}</Title>
      </ViewTransition>
      <ViewTransition name={`card-${courseId}-short-description`}>
        <p className="italic">{short_description}</p>
      </ViewTransition>
      <p className="motion-safe:animate-fade-in-up max-w-4xl text-lg">
        {full_description}
      </p>
      <dl className="motion-safe:animate-fade-in-up flex gap-1">
        <dt className="font-semibold">Duração:</dt>
        <dd>
          <time dateTime={`PT${duration_hours}H`}>{duration_hours}h</time>
        </dd>
      </dl>
      <EnrollOnCourseForm courseId={courseId} courseTitle={title} />{' '}
    </section>
  );
};
