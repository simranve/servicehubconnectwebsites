import * as actionTypes from "../actions/actionTypes";
import axios from "../../axios-config";

export const startpagesAction = () => {
  return {
    type: actionTypes.START_PAGES_ACTION
  };
};
export const startPromoCode = () => {
  return {
    type: actionTypes.START_PROMO_CODE
  };
};
export const pagesActionFail = message => {
  return {
    type: actionTypes.PAGES_ACTION_FAIL,
    message
  };
};

export const fetchpagesListSUCCESS = (pages,message = '') => {
  return {
    type: actionTypes.FETCH_PAGES_LIST_SUCCESS,
    listing: pages,
    message: message ? message : ''
  };
};
export const fetchPromoCode = (pages,message = '') => {
  return {
    type: actionTypes.FETCH_PROMO_CODE_LIST_SUCCESS,
    listing: pages,
    message: message ? message : ''
  };
};
export const startcontactAction = () => {
  return {
    type: actionTypes.START_CONTACT_ACTION
  };
};

export const contactActionFail = message => {
  return {
    type: actionTypes.CONTACT_ACTION_FAIL,
    message
  };
};

export const fetchcontactListSUCCESS = (contact,message = '') => {
  return {
    type: actionTypes.FETCH_CONTACT_LIST_SUCCESS,
    listing: contact,
    message: message ? message : ''
  };
};
export const fetchpagesListAction = (data) => {  
  return dispatch => {
      dispatch(startpagesAction());
      const authCode = "Bearer " + localStorage.getItem("token");
      axios
        .post("/admin/page/get-page", data,{
          headers: { Authorization: authCode }
        })
        .then(response => {
          if (response.status === 200) {
            if (response.data.status === 200) {
              dispatch(fetchpagesListSUCCESS(response.data.data,""));
            } else {
              dispatch(pagesActionFail(response.data.message));
            }
          } else {
            dispatch(pagesActionFail(response.message));
          }
        })
        .catch(err => {
          dispatch(pagesActionFail(err.message));
        });
    };
};
export const addPage = (data,data2) => {
  return dispatch => {
    dispatch(startpagesAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .post("/admin/page/add-page",data, {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            dispatch(fetchpagesListAction(data2))
            // dispatch(fetchprofessionalListSUCCESS(response.data.data,"Professional deleted sucessfully"));
          } else {
            dispatch(pagesActionFail(response.data.message));
          }
        } else {
          dispatch(pagesActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(pagesActionFail(err.message));
      });
  };
};
export const getConactUs = () => {  
  return dispatch => {
      dispatch(startcontactAction());
      const authCode = "Bearer " + localStorage.getItem("token");
      axios
        .get("/admin/page/get-contact-support-details",{
          headers: { Authorization: authCode }
        })
        .then(response => {
          if (response.status === 200) {
            if (response.data.status === 200) {
              dispatch(fetchcontactListSUCCESS(response.data.data,""));
            } else {
              dispatch(contactActionFail(response.data.message));
            }
          } else {
            dispatch(contactActionFail(response.message));
          }
        })
        .catch(err => {
          dispatch(contactActionFail(err.message));
        });
    };
};
export const addConactUs = (data) => {
  return dispatch => {
    dispatch(startcontactAction());
    const authCode = "Bearer " + localStorage.getItem("token");
    axios
      .post("/admin/page/create-contact-support-details",data, {
        headers: { Authorization: authCode }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data.status === 200) {
            dispatch(getConactUs())
            // dispatch(fetchprofessionalListSUCCESS(response.data.data,"Professional deleted sucessfully"));
          } else {
            dispatch(contactActionFail(response.data.message));
          }
        } else {
          dispatch(contactActionFail(response.message));
        }
      })
      .catch(err => {
        dispatch(contactActionFail(err.message));
      });
  };
};
export const fetchprmocode = () => {  
  return dispatch => {
      dispatch(startPromoCode());
      const authCode = "Bearer " + localStorage.getItem("token");
      axios
        .get("/admin/get-promo-code",{
          headers: { Authorization: authCode }
        })
        .then(response => {
          if (response.status === 200) {
            if (response.data.status === 200) {
              dispatch(fetchPromoCode(response.data.data,""));
            } else {
              dispatch(pagesActionFail(response.data.message));
            }
          } else {
            dispatch(pagesActionFail(response.message));
          }
        })
        .catch(err => {
          dispatch(pagesActionFail(err.message));
        });
    };
};