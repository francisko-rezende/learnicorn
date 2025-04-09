'use server';

type EnrollOnCourseArgs = {
  courseId: string;
  courseTitle: string;
};

export const enrollOnCourseAction = async ({
  courseId,
  courseTitle,
}: EnrollOnCourseArgs) => {
  console.log(
    `Enrollment on course "${courseTitle}" with id ${courseId} confirmed`,
  );
};
