import api from "./api";

const createDiscussion = async ({
  lectureId,
  userId,
  discussionData,
  accessToken,
}) => {
  const { data } = await api({
    method: "POST",
    url: `/discussion/${lectureId}/${userId}`,
    data: discussionData,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

const getListDiscussion = async ({ lectureId, userId, accessToken }) => {
  const { data } = await api({
    method: "GET",
    url: `/discussion/${lectureId}/${userId}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export { createDiscussion, getListDiscussion };
