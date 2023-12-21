import api from "./api";

const getSectionFromCourse = async (courseId, accessToken) => {
  const { data } = await api({
    method: "GET",
    url: `/section/course-id/${courseId}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export { getSectionFromCourse };
