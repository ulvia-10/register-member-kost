import { memberAxios } from "../api/data";

export const deleteMemberAction = (id) => async (dispatch) => {
  try {
    let response = await memberAxios.delete(`member/${id}`);
    response = response.data;
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const fetchMemberByid = (id) => async (dispatch) => {
  try {
    let response = await memberAxios.get(`/member/${id}`);
    response = response.data; //ini diambil krn pada response ada data! dan data disimpan di sana 
    dispatch({
      type: "DETAIL_MEMBER",
      payload: response,
    });
    return true;
  } catch (err) {
    console.err(err);
    return false;
  }
};

export const fetchMemberAction = () => async (dispatch) => {
  try {
    let response = await memberAxios.get("/member");
    response = response.data;
    dispatch({
      type: "MEMBER_LIST",
      payload: response,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
