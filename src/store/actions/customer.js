import * as actionTypes from "../actions/actionTypes";
import axios from "../../axios-config";

export const startcustomerAction = () => {
  return {
    type: actionTypes.START_CUSTOMER_ACTION
  };
};

export const customerActionFail = message => {
  return {
    type: actionTypes.CUSTOMER_ACTION_FAIL,
    message
  };
};

export const fetchcustomerListSUCCESS = (customer,message = '') => {
  return {
    type: actionTypes.FETCH_CUSTOMER_LIST_SUCCESS,
    listing: customer,
    message: message ? message : ''
  };
};
export const fetchcustomerListAction = () => {
    return dispatch => {
      dispatch(startcustomerAction());
      const authCode = "Bearer " + localStorage.getItem("token");
      axios
        .get("/admin/get-customer", {
          headers: { Authorization: authCode }
        })
        .then(response => {
          if (response.status === 200) {
            if (response.data.status === 200) {
              dispatch(fetchcustomerListSUCCESS(response.data.data,""));
            } else {
              dispatch(customerActionFail(response.data.message));
            }
          } else {
            dispatch(customerActionFail(response.message));
          }
        })
        .catch(err => {
          dispatch(customerActionFail(err.message));
        });
    };
};
export const customerActiveInactive = (data) => {
  return dispatch => {
    dispatch(startcustomerAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .put("/admin/update-customer-toActiveInactive/"+data,{}, {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            dispatch(fetchcustomerListAction(response.data.message))
            // dispatch(fetchprofessionalListSUCCESS(response.data.data,"Professional deleted sucessfully"));
          } else {
            dispatch(customerActionFail(response.data.message));
          }
        } else {
          dispatch(customerActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(customerActionFail(err.message));
      });
  };
};