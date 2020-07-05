const initState = {
  number: 0,
  firstName: "Komphet",
  lastName: "Meesab",
  first_name: "",
  last_name: "",
  avatar: ""

};

export default function reducer(state = initState, action) {
  //   if(action.type === "SET_NUMBER"){
  //     return {
  //         ...state,
  //         number: state.number+1
  //     }
  //   }

  switch (action.type) {
    case "SET_NUMBER": {
      return {
        ...state,
        number: state.number + 1,
      };
    }
    case "SET_NAME": {
        return {
          ...state,
          ...action.payload
        };
      }
    default: return state;
  }
  
}
