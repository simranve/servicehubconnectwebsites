import * as actionTypes from "../actions/actionTypes";
import axios from "../../axios-config";

export const startAdminUserAction = () => {
  return {
    type: actionTypes.START_ADMIN_USER_ACTION
  };
};

export const firstAdminUserActionFail = message => {
  return {
    type: actionTypes.ADMIN_USER_ACTION_FAIL,
    message
  };
};

export const fetchAdminUserListSUCCESS = (adminUserList,message = '') => {
  return {
    type: actionTypes.FETCH_ADMIN_USER_LIST_SUCCESS,
    listing: adminUserList,
    message: message ? message : ''
  };
};

export const fetchAdminUserObject = (adminUserList,message = '') => {
  return {
    type: actionTypes.FETCH_ADMIN_USER_LIST_OBJECT,
    listing: adminUserList,
    message: message ? message : ''
  };
};
export const fetchAdminUserListAction = (message = '') => {
  return dispatch => {
    dispatch(startAdminUserAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .get("/admin/get-admin-user", {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            dispatch(fetchAdminUserListSUCCESS(response.data.data,message));
          } else {
            dispatch(firstAdminUserActionFail(response.data.message));
          }
        } else {
          dispatch(firstAdminUserActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(firstAdminUserActionFail(err.message));
      });
  };
};

export const addAdminUserAction = (data,history) => {
  return dispatch => {
    dispatch(startAdminUserAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .post("/admin/add-admin-user", data, {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            history.push('./adminuser')
            dispatch(fetchAdminUserListAction())
          } else {
            dispatch(firstAdminUserActionFail(response.data.message));
          }
        } else {
          dispatch(firstAdminUserActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(firstAdminUserActionFail(err.message));
      });
  };
};
export const editAdminUserAction = (adminUserId,data,history) => {
  return dispatch => {
    dispatch(startAdminUserAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .put("/admin/edit-admin-user/"+adminUserId, data, {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            history.push('./adminuser')
            dispatch(fetchAdminUserListAction())
          } else {
            dispatch(firstAdminUserActionFail(response.data.message));
          }
        } else {
          dispatch(firstAdminUserActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(firstAdminUserActionFail(err.message));
      });
  };
};

export const deleteAdminUserAction = (adminUserId) => {
  return dispatch => {
    dispatch(startAdminUserAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .delete("/admin/delete-admin-user/"+adminUserId, {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            dispatch(fetchAdminUserListAction())
          } else {
            dispatch(firstAdminUserActionFail(response.data.message));
          }
        } else {
          dispatch(firstAdminUserActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(firstAdminUserActionFail(err.message));
      });
  };
};
export const fetchAdminUserById = (data) => {
  return dispatch => {
    dispatch(startAdminUserAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .get("/admin/get-admin-user-byId/"+data, {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            dispatch(fetchAdminUserObject(response.data.data,""));
          } else {
            dispatch(firstAdminUserActionFail(response.data.message));
          }
        } else {
          dispatch(firstAdminUserActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(firstAdminUserActionFail(err.message));
      });
  };
};
