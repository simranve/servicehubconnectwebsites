import * as actionTypes from "../actions/actionTypes";
import axios from "../../axios-config";

export const startcitysAction = () => {
  return {
    type: actionTypes.START_CITY_ACTION
  };
};

export const citysActionFail = message => {
  return {
    type: actionTypes.CITY_ACTION_FAIL,
    message
  };
};

export const fetchcitysListSUCCESS = (citysList,message = '') => {
  return {
    type: actionTypes.FETCH_CITY_LIST_SUCCESS,
    listing: citysList,
    message: message ? message : ''
  };
};
export const fetchcitysListAction = (data) => {
    return dispatch => {
      dispatch(startcitysAction());
      const authCode = "Bearer " + localStorage.getItem("token");
      axios
        .get("/admin/get-city", {
          headers: { Authorization: authCode }
        })
        .then(response => {
          if (response.status === 200) {
            if (response.data.status === 200) {
              dispatch(fetchcitysListSUCCESS(response.data.data,""));
            } else {
              dispatch(citysActionFail(response.data.message));
            }
          } else {
            dispatch(citysActionFail(response.message));
          }
        })
        .catch(err => {
          dispatch(citysActionFail(err.message));
        });
    };
};

export const addcitysAction = (data,history) => {
  return dispatch => {
    dispatch(startcitysAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .post("/admin/add-city",data, {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            dispatch(fetchcitysListSUCCESS(response.data.data,""));
            history.push('./settings')
          } else {
            dispatch(citysActionFail(response.data.message));
          }
        } else {
          dispatch(citysActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(citysActionFail(err.message));
      });
  };
};

export const activeInactiveCityAction = (data) => {
  return dispatch => {
    dispatch(startcitysAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .get("/admin/change-status-active-Inactive/"+data, {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            dispatch(fetchcitysListAction(""));
          } else {
            dispatch(citysActionFail(response.data.message));
          }
        } else {
          dispatch(citysActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(citysActionFail(err.message));
      });
  };
};

export const deleteCityAction = (data) => {
  return dispatch => {
    dispatch(startcitysAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .delete("/admin/delete-city/"+data, {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            dispatch(fetchcitysListAction(""));
          } else {
            dispatch(citysActionFail(response.data.message));
          }
        } else {
          dispatch(citysActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(citysActionFail(err.message));
      });
  };
};
export const updateCityAction = (id,data) => {
  return dispatch => {
    dispatch(startcitysAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .put("/admin/edit-city/"+id, data,{
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            dispatch(fetchcitysListAction(""));
          } else {
            dispatch(citysActionFail(response.data.message));
          }
        } else {
          dispatch(citysActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(citysActionFail(err.message));
      });
  };
};
export const fetchcitysIdListAction = (data) => {
  return dispatch => {
    dispatch(startcitysAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .get("/admin/get-city/"+data, {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            dispatch(fetchcitysListSUCCESS(response.data.data,""));
          } else {
            dispatch(citysActionFail(response.data.message));
          }
        } else {
          dispatch(citysActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(citysActionFail(err.message));
      });
  };
};