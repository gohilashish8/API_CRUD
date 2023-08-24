import Axios from "../../../Axios/axios";

export const AddStudent = (data) => {
  return {
    type: "ADD_STUDENT",
    payload: data,
  };
};
export const deleteStudent = (data) => {
  return {
    type: "DELETE_STUDENT",
    payload: data,
  };
};

export const updateStudent = (data) => {
  return {
    type: "UPDATE_STUDENT",
    payload: data,
  };
};

export const getData = (data) => {
  return {
    type: "ALL_STUDENTS",
    payload: data,
  };
};
export const getSingleData = (data) => {
  return {
    type: "SINGLE_DATA",
    payload: data,
  };
};
export const loading = () => {
  return {
    type: "IS_LOADING",
  };
};

export const getAllAsyncData = () => {
  return (dispatch) => {
    dispatch(loading());
    Axios.get("/students")
      .then((res) => {
        // console.log(res, "action res data for axios");
        dispatch(getData(res.data));
      })
      .catch((ere) => {
        console.log(ere);
      });
  };
};
export const getsinglestudentAsyncData = (id) => {
  return (dispatch) => {
    dispatch(loading());
    Axios.get(`/students/${id}`)
      .then((res) => {
        // console.log(res, "action res data for axios");
        dispatch(getSingleData(res.data));
      })
      .catch((ere) => {
        console.log(ere);
      });
  };
};
export const deletestudentAsyncData = (id) => {
  return dispatch => {
    dispatch(loading());
    Axios.delete(`/students/${id}`)
      .then((res) => {
        dispatch(deleteStudent(id));
      })
      .catch((ere) => {
        console.log(ere);
      });
  };
};

export const addStudentasync = (data) => {
  return  dispatch => {
    dispatch(loading());
    Axios.post("/students", data)
      .then((res) => {
        dispatch(AddStudent(res.data));
      })
      .catch((ere) => {
        console.log(ere, "this is a add student error");
      });
  };
};

export const updatestudentasync = (data, id) => {
  return dispatch => {
    dispatch(loading());
    Axios.put(`/students/${id}`, data)
      .then((res) => {
        dispatch(updateStudent(res.data));
      })
      .catch((ere) => {
        console.log(ere, "this is a add student error");
      });
  }
};
