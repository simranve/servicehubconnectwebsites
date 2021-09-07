import * as actionTypes from "../actions/actionTypes";
import axios from "../../axios-config";

export const startsubscriptionAction = () => {
  return {
    type: actionTypes.START_SUBSCRIPTION_ACTION
  };
};

export const subscriptionActionFail = message => {
  return {
    type: actionTypes.SUBSCRIPTION_ACTION_FAIL,
    message
  };
};

export const fetchSubscriptionListSUCCESS = (subscription,message = '') => {
  return {
    type: actionTypes.FETCH_SUBSCRIPTION_LIST_SUCCESS,
    listing: subscription,
    message: message ? message : ''
  };
};
export const fetchSubscriptionListAction = () => {
    return dispatch => {
      dispatch(startsubscriptionAction());
      const authCode = "Bearer " + localStorage.getItem("token");
      axios
        .get("/admin/get-subscription", {
          headers: { Authorization: authCode }
        })
        .then(response => {
          if (response.status === 200) {
            if (response.data.status === 200) {
              dispatch(fetchSubscriptionListSUCCESS(response.data.data,""));
            } else {
              dispatch(subscriptionActionFail(response.data.message));
            }
          } else {
            dispatch(subscriptionActionFail(response.message));
          }
        })
        .catch(err => {
          dispatch(subscriptionActionFail(err.message));
        });
    };
};
export const addSubscription = (data) => {
  return dispatch => {
    dispatch(startsubscriptionAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .post("/admin/add-subscription",data, {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            dispatch(fetchSubscriptionListAction(response.data.message))
          } else {
            dispatch(subscriptionActionFail(response.data.message));
          }
        } else {
          dispatch(subscriptionActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(subscriptionActionFail(err.message));
      });
  };
};
export const deleteSubscription = (data) => {
    return dispatch => {
      dispatch(startsubscriptionAction());
      const authCode = "Bearer " + localStorage.getItem("token");
      axios
        .delete("/admin/delete-subscription/"+data, {
          headers: { Authorization: authCode }
        })
        .then(response => {
          if (response.status === 200) {
            if (response.data.status === 200) {
              dispatch(fetchSubscriptionListAction(response.data.message))
            } else {
              dispatch(subscriptionActionFail(response.data.message));
            }
          } else {
            dispatch(subscriptionActionFail(response.message));
          }
        })
        .catch(err => {
          dispatch(subscriptionActionFail(err.message));
        });
    };
  };
  export const editSubscription = (subscriptionId,data) => {
    return dispatch => {
      console.log(data)
      console.log(subscriptionId)
      dispatch(startsubscriptionAction());
      const authCode = "Bearer " + localStorage.getItem("token");
      axios
        .put("/admin/edit-subscription/"+subscriptionId,data, {
          headers: { Authorization: authCode }
        })
        .then(response => {
          if (response.status === 200) {
            if (response.data.status === 200) {
              dispatch(fetchSubscriptionListAction(response.data.message))
            } else {
              dispatch(subscriptionActionFail(response.data.message));
            }
          } else {
            dispatch(subscriptionActionFail(response.message));
          }
        })
        .catch(err => {
          dispatch(subscriptionActionFail(err.message));
        });
    };
  };