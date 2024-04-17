import axios from 'axios';
import {BaseUrl} from '../Api';
import {
  Data_Failed,
  Data_Request,
  Data_Success,
  Post_Data_Success,
} from '../types';

export const postActions = () => {
  return (dispatch: any) => {
    const url = BaseUrl;
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
      });
  };
};

export const postActionById = (id: any) => {
  return (dispatch: any) => {
    const url = BaseUrl + `?id=${id}`;
    axios
      .get(url)
      .then((res: any) => {
        dispatch({
          type: Post_Data_Success,
          payload: res?.data,
        });
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
};

export const searchAction = (name: any) => {
  return (dispatch: any) => {
    const url = `https://plum-motionless-shrimp.cyclic.app/post?name=${name}`;
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
      });
  };
};
