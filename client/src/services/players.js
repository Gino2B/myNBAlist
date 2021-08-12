import api from "./apiConfig";

export const getAllPlayers = async () => {
  const res = await api.get("/players");
  return res.data;
};

export const getOnePlayer = async (playerID) => {
  const res = await api.get(`/players/${playerID}`);
  return res.data;
};

export const deletePlayer = async (playerID) => {
  await api.delete(`/players/${playerID}`);
};

export const createPlayer = async (playerData) => {
  const res = await api.post("/players", { player: playerData });
  return res.data;
};

export const updatePlayer = async (playerData, playerID) => {
  const res = await api.put(`/players/${playerID}`, { player: playerData });
  return res.data;
};

export const addMomentToPlayer = async (momentData, playerID) => {
  const res = await api.put(`/players/${playerID}/add_moment`, {
    moment: momentData,
  });
  return res.data;
};
