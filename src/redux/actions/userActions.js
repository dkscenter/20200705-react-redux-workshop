import Axios from 'axios';

export const setName =  (payload) => {
  return async (dispatch)=>{
    const res = await Axios.get('https://reqres.in/api/users/2');
    dispatch({
      type: "SET_NAME",
      payload: res.data.data,
    }) 
  }
};

export const setNumber = () => {
  return {
    type: "SET_NUMBER",
    number: 100,
  };
};
