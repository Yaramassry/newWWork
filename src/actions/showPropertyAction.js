import { SHOWPROPERTY } from './types';
import axios from 'axios';


export const getShowProperty = (id) => async (dispatch) => {

    let res = {};
    let errorRes = {
      errorStatus: '',
      errorMessage: '',
    };
    await axios.get("http://207.180.233.248/ikar_api/v1/property?reference_id=" + id)

    .then(function (response) {
      if (
        response !== null &&
        response !== undefined &&
        Object.keys(response).length > 0
      ) 
      
      { 
        res = response.data;
      } else res = {};
    })
    .catch(function (error) {
      if (error.response) {
        errorRes = {
          errorStatus: error.response.status,
          errorMessage: error.response,
        };
      } else if (error.request) {
        errorRes = {
          errorMessage: error.request,
        };
      } else {
        errorRes = { errorMessage: error.message };
      }
      res = errorRes;
    });
    // console.log(res);
    // console.log("1111111111111");
  dispatch({
    type: SHOWPROPERTY,
    payload: res,
  });
};

