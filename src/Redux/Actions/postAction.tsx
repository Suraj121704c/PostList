import axios from 'axios';
import {BaseUrl} from '../Api';
import {Data_Failed, Data_Request, Data_Success} from '../types';

export const postActions = () => {
  return (dispatch: any) => {
    const url = BaseUrl;
    dispatch({
      type: Data_Request,
    });
    axios
      .get(url)
      .then((res: any) => {
        dispatch({
          type: Data_Success,
          payload: res?.data,
        });
      })
      .catch((err: any) => {
        dispatch({
          type: Data_Failed,
        });
        console.log(err, "-------------")
      });
  };
};
