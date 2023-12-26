import api from "./api";

const getEnrolledCourses = async ({ userId, accessToken }) => {
  const res = await api({
    method: "GET",
    url: `/course/enrolled/${userId}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res;
};

const buyCourse = async ({ userId, courseId, accessToken }) => {
  const res = await api({
    method: "POST",
    url: `/enroll/create/${courseId}/${userId}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    data: {
      userId,
      courseId,
    },
  });

  return res;
};

export { getEnrolledCourses, buyCourse };
