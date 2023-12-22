import api from "./api";

const getTeacherCourses = async (teacherId, accessToken) => {
  const { data } = await api({
    method: "GET",
    url: `/course/create/list/${teacherId}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export { getTeacherCourses };
