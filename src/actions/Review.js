import { memberAxios } from "../api/data";

export const fetchReview = () => async (dispatch) => {
  try {
    let response = await memberAxios.get(`/review`);
    response = response.data;
    dispatch({
      type: "LIST_REVIEW",
      payload: response,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const fetchDeleteReview = (id) => async (dispatch) => {
  try {
    let response = await memberAxios.delete(`/review/${id}`);
    response = response.data;
    dispatch({
      type: "DELETE_REVIEW",
      payload: id,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
