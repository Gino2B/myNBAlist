import api from "./apiConfig";

export const createMoment = async (momentData) => {
  const res = await api.post("/moments", { moment: momentData });
  return res.data;
};
