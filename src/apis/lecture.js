import api from "./api";

const getLecture = async (id, accessToken) => {
  const { data } = await api({
    method: "GET",
    url: `/lecture/${id}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

const getAllLectures = async (accessToken) => {
  const { data } = await api({
    method: "GET",
    url: `/lecture`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

const getLectureByCourseId = async (courseId, accessToken) => {
  const { data } = await api({
    method: "GET",
    url: `/lecture/filter`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      course_id: courseId,
    },
  });

  return data;
};

const getLectureByCourseIdAndSectionId = async (
  courseId,
  sectionId,
  accessToken
) => {
  const { data } = await api({
    method: "GET",
    url: `/lecture/filter`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      course_id: courseId,
      section_id: sectionId,
    },
  });

  return data;
};

const updateLecture = async ({ lectureData, accessToken }) => {
  const { data } = await api({
    method: "PUT",
    url: `/lecture`,
    data: lectureData,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

const deleteLecture = async ({ lectureId, accessToken }) => {
  const { data } = await api({
    method: "DELETE",
    url: `/lecture/${lectureId}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

const createLecture = async ({ lectureData, accessToken }) => {
  const { data } = await api({
    method: "POST",
    url: `/lecture`,
    data: lectureData,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export {
  getLecture,
  getAllLectures,
  getLectureByCourseId,
  getLectureByCourseIdAndSectionId,
  updateLecture,
  deleteLecture,
  createLecture,
};
