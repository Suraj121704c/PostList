import {
  Data_Failed,
  Data_Request,
  Data_Success,
  Post_Data_Success,
} from '../types';

const Initial_State = {
  data: '',
  loading: false,
  error: false,
  id_data: '',
};

export const postReducer = (state = Initial_State, action: any) => {
  switch (action.type) {
    case Data_Request: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case Data_Success: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case Data_Failed: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case Post_Data_Success: {
      return {
        ...state,
        loading: false,
        id_data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
