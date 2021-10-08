import * as actionTypes from "../actions/actionTypes";
import axios from "../../axios-config";

export const startcategoryAction = () => {
  return {
    type: actionTypes.START_CATEGORY_ACTION
  };
};

export const categoryActionFail = message => {
  return {
    type: actionTypes.CATEGORY_ACTION_FAIL,
    message
  };
};

export const fetchcategoryListSUCCESS = (categoryList,message = '') => {
  return {
    type: actionTypes.FETCH_CATEGORY_LIST_SUCCESS,
    listing: categoryList,
    message: message ? message : ''
  };
};

export const fetchcategoryListAction = (message = '') => {
  return dispatch => {
    dispatch(startcategoryAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .get("/webUser/category/get-category", {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            dispatch(fetchcategoryListSUCCESS(response.data.data,message));
          } else {
            dispatch(categoryActionFail(response.data.message));
          }
        } else {
          dispatch(categoryActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(categoryActionFail(err.message));
      });
  };
};

export const addCategoryAction = (data) => {
  return dispatch => {
    dispatch(startcategoryAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .post("/admin/category/add-category", data, {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            dispatch(fetchcategoryListAction())
          } else {
            dispatch(categoryActionFail(response.data.message));
          }
        } else {
          dispatch(categoryActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(categoryActionFail(err.message));
      });
  };
};

export const categoryDeleteAction = (data) => {
  return dispatch => {
    dispatch(startcategoryAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .delete("/admin/category/delete-category/"+data, {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            dispatch(fetchcategoryListAction())
          } else {
            dispatch(categoryActionFail(response.data.message));
          }
        } else {
          dispatch(categoryActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(categoryActionFail(err.message));
      });
  };
};

export const updateCategoryAction = (data) => {
  return dispatch => {
    dispatch(startcategoryAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    
    axios
      .put("/admin/category/edit-category/"+data.categoryId, data, {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            dispatch(fetchcategoryListAction())
          } else {
            dispatch(categoryActionFail(response.data.message));
          }
        } else {
          dispatch(categoryActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(categoryActionFail(err.message));
      });
  };
};
export const updateCategoryImageAction = (data, categoryId) => {
  return dispatch => {
    dispatch(startcategoryAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .put("/admin/category/update-category-image/"+categoryId, data, {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            dispatch(fetchcategoryListAction())
          } else {
            dispatch(categoryActionFail(response.data.message));
          }
        } else {
          dispatch(categoryActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(categoryActionFail(err.message));
      });
  };
};