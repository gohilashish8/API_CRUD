const initialState = {
  students: [],
  student: "",
  isLoader: false,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_STUDENTS":
      return {
        ...state,
        students: [...action.payload],
        isLoader: false,
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoader: true,
      };
    case "ADD_STUDENT":
      return {
        ...state,
        students: [...action.payload],
        isLoader: false,
      };
    case "SINGLE_DATA":
      return {
        ...state,
        student: action.payload,
      };

    case "DELETE_STUDENT":


      return {

        students: state.students.filter((val) => val.id  !== action.payload ),

      };
    case "UPDATE_STUDENT":
      const update = state.students.map((val) =>
        val.id === action.payload.id ? action.payload : val
      );

      return {
        ...state,
        students: update,
      };

    default:
      return state;
  }
};

export default studentReducer;
