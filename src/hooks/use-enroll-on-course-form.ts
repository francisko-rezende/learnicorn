import { enrollOnCourseAction } from '@/actions/enroll-on-course';
import { type EnrollOnCourseFormProps } from '@/components/enroll-on-course-form/enroll-on-course-form.types';
import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

type useEnrollOnCourseFormProps = EnrollOnCourseFormProps;

export const useEnrollOnCourseForm = ({
  courseId,
  courseTitle,
}: useEnrollOnCourseFormProps) => {
  const enrollOnCourse = enrollOnCourseAction.bind(null, {
    courseId,
    courseTitle,
  });

  const [state, formAction, isPending] = useActionState(enrollOnCourse, {
    success: false,
    timestamp: new Date().getTime(),
    courseTitleFromAction: '',
  });

  useEffect(() => {
    if (state.success) {
      toast.success(
        `Matrícula no curso "${state.courseTitleFromAction}" feita!`,
      );
    }
  }, [state.success, state.timestamp, state.courseTitleFromAction]);

  return { formAction, isPending };
};
