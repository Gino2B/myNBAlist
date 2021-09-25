import api from "./apiConfig";

export const getAllUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};

export const getOneUser = async (userID) => {
  const res = await api.get(`/users/${userID}`);
  return res.data;
};

export const updateUser = async (userData, userID) => {
  const res = await api.put(`/users/${userID}`, { user: userData });
  return res.data;
};

export const register = async (userData) => {
  const res = await api.post("/users", { user: userData });
  const { token } = res.data;
  if (token) {
    localStorage.setItem("authToken", token);
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    return res.data.user;
  }
};

export const addPlayerToUser = async (playerData, userID) => {
  const res = await api.put(`/users/${userID}/add_player`, {
    player: playerData,
  });
  return res.data;
};

export const deletePlayerFromUser = async (playerID, userID) => {
  const res = await api.delete(`/users/${userID}/delete_fav/${playerID}`);
  return res.data;
};

export const login = async (userData) => {
  const res = await api.post("/users/login", { user: userData });
  const { token } = res.data;
  if (token) {
    localStorage.setItem("authToken", token);
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    return res.data.user;
  }
};

export const verify = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const res = await api.get("/users/verify");
    return res.data;
  }
};

export const logout = () => {
  localStorage.removeItem("authToken");
  api.defaults.headers.common.authorization = null;
};
