import * as actionTypes from "../actions/actionTypes";
import axios from "../../axios-config";

export const startdisountAction = () => {
  return {
    type: actionTypes.START_FIRST_ORDER_DISCOUNT_ACTION
  };
};

export const firstorderdiscountActionFail = message => {
  return {
    type: actionTypes.FIRST_ORDER_DISCOUNT_ACTION_FAIL,
    message
  };
};

export const fetchfirstorderdiscountListSUCCESS = (firstorderdiscountList,message = '') => {
  return {
    type: actionTypes.FETCH_FIRST_ORDER_DISCOUNT_LIST_SUCCESS,
    listing: firstorderdiscountList,
    message: message ? message : ''
  };
};

export const fetchfirstorderdiscountListAction = (message = '') => {
  return dispatch => {
    dispatch(startdisountAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .get("/admin/get-first-order-discount", {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            dispatch(fetchfirstorderdiscountListSUCCESS(response.data.data,message));
          } else {
            dispatch(firstorderdiscountActionFail(response.data.message));
          }
        } else {
          dispatch(firstorderdiscountActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(firstorderdiscountActionFail(err.message));
      });
  };
};

export const addFirstOrderDiscountAction = (data) => {
  return dispatch => {
    dispatch(startdisountAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .post("/admin/add-first-order-discount", data, {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            dispatch(fetchfirstorderdiscountListAction())
          } else {
            dispatch(firstorderdiscountActionFail(response.data.message));
          }
        } else {
          dispatch(firstorderdiscountActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(firstorderdiscountActionFail(err.message));
      });
  };
};
