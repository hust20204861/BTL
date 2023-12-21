import api from "./api";

const getCourses = async () => {
  const { data } = await api({
    method: "GET",
    url: `/course`,
  });
  return data;
};

export { getCourses };
