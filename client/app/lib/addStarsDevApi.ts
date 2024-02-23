import axiosClient from "../utils/api";
const addStarDevApi = async (devId: any, userId: any, status: any) => {
  try {
    await axiosClient
      .post("/starts/dev", { devId, userId, status })
      .then((res) => {
        console.log(res);
      });
  } catch (error) {
    console.log(error);
  }
};

export default addStarDevApi;
