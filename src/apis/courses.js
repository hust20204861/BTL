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

export { getCourses, getCourse };
