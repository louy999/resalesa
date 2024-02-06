import axiosClient from "../utils/api";
const addStarDevApi = async (devId, userId, status) => {
  try {
    await axiosClient
      .post("/starts/dev", { devId, userID, status })
      .then((res) => {
        console.log(res);
      });
  } catch (error) {
    console.log(error);
  }
};

export default addStarDevApi;
