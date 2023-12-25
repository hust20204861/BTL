import api from "./api";

const getCourses = async () => {
  const { data } = await api({
    method: "GET",
    url: `/course`,
  });
  return data;
};

const getCourse = async (id, accessToken) => {
  const { data } = await api({
    method: "GET",
    url: `/course/${id}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

const updateCourse = async (courseData, accessToken) => {
  const { data } = await api({
    method: "PUT",
    url: `/course/${courseData.id}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    data: courseData,
  });
  return data;
};

const createCourse = async (courseData, accessToken) => {
  const { data } = await api({
    method: "POST",
    url: `/course`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    data: courseData,
  });
  return data;
};

const deleteCourse = async (id, accessToken) => {
  const { data } = await api({
    method: "DELETE",
    url: `/course/${id}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export { getCourses, getCourse, updateCourse, deleteCourse, createCourse };
