import api from "./api";

const login = async (email, password) => {
  const { data } = await api({
    method: "POST",
    url: `/auth/login`,
    data: {
      email,
      password,
    },
  });
  return data;
};

const getAccessToken = async (
  email = "minhtuyenvp02@gmail.com",
  password = "123456"
) => {
  const { access_token } = await login(email, password);

  return access_token;
};

const getUserId = async (
  email = "minhtuyenvp02@gmail.com",
  password = "123456"
) => {
  const { user_id } = await login(email, password);

  return user_id;
};

export { login, getAccessToken, getUserId };
