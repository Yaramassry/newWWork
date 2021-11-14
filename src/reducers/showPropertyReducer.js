import { SHOWPROPERTY } from '../actions/types';
const initialState = {
    property:{}
};


export default function (state = initialState, action) {
    switch (action.type) {
      case SHOWPROPERTY:
        // console.log(action.payload);
        // console.log("99999999999999");
        if (
          Object.keys(action.payload).length > 0 &&
          (action.payload.errorMessage === '' ||
            action.payload.errorMessage === undefined)
        ) {
          return {
            property: {
                title:action.payload.title,
                type:action.payload.type,
                description:action.payload.description,
                reference_id:action.payload.reference_id,
                province:action.payload.province,
                thumbnails:action.payload.thumbnails
            },
             
           
          };
        } else {
          return {
            property:{},
          };
        }

      default:
        return state;
    }
  }
