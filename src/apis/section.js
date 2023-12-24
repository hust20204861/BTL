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

const updateSection = async ({
  sectionId,
  courseId,
  sectionData,
  accessToken,
}) => {
  const { data } = await api({
    method: "PUT",
    url: `/section/${sectionId}/${courseId}`,
    data: sectionData,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

const createSection = async ({ courseId, sectionData, accessToken }) => {
  const { data } = await api({
    method: "POST",
    url: `/section/${courseId}`,
    data: sectionData,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

const deleteSection = async ({ sectionId, courseId, accessToken }) => {
  const { data } = await api({
    method: "DELETE",
    url: `/section/${sectionId}/${courseId}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export { getSectionFromCourse, updateSection, deleteSection, createSection };
