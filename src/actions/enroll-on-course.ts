'use server';

type EnrollOnCourseArgs = {
  courseId: number;
  courseTitle: string;
};

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const enrollOnCourseAction = async ({
  courseId,
  courseTitle,
}: EnrollOnCourseArgs) => {
  const delay = 1500 + Math.random() * 2000;
  await wait(delay);
  const successMessage = `Enrollment on course "${courseTitle}" with id ${courseId} confirmed`;
  console.log(successMessage);
  return {
    success: true,
    timestamp: new Date().getTime(),
    courseTitleFromAction: courseTitle,
  };
};
