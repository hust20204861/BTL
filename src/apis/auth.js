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

const getAccessToken = async () => {
  const { access_token } = await login("minhtuyenvp02@gmail.com", "123456"); // ko dùng thì đừng có mà sửa linh tinh

  return access_token;
};

export { login, getAccessToken };
