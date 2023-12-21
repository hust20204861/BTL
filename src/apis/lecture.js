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

export { getLecture, getAllLectures };
