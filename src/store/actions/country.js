import * as actionTypes from "../actions/actionTypes";
import axios from "../../axios-config";

export const startcountrysAction = () => {
  return {
    type: actionTypes.START_COUNTRY_ACTION
  };
};

export const countrysActionFail = message => {
  return {
    type: actionTypes.COUNTRY_ACTION_FAIL,
    message
  };
};

export const fetchcountrysListSUCCESS = (countrysList,message = '') => {
  return {
    type: actionTypes.FETCH_COUNTRY_LIST_SUCCESS,
    listing: countrysList,
    message: message ? message : ''
  };
};
export const fetchcountrysListAction = () => {
    return dispatch => {
      dispatch(startcountrysAction());
      const authCode = "Bearer " + localStorage.getItem("token");
      axios
        .get("/admin/get-country", {
          headers: { Authorization: authCode }
        })
        .then(response => {
          if (response.status === 200) {
            if (response.data.status === 200) {
              dispatch(fetchcountrysListSUCCESS(response.data.data,""));
            } else {
              dispatch(countrysActionFail(response.data.message));
            }
          } else {
            dispatch(countrysActionFail(response.message));
          }
        })
        .catch(err => {
          dispatch(countrysActionFail(err.message));
        });
    };
};
  