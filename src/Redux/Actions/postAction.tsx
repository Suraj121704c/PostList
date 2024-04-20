import axios from 'axios';
import {BaseUrl, BaseUrl2} from '../Api';
import {
  Data_Failed,
  Data_Request,
  Data_Success,
  Post_Data_Success,
  Post_Error,
} from '../types';
import {Alert} from 'react-native';

export const postActions = () => {
  return (dispatch: any) => {
    const url = BaseUrl2;
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
      });
  };
};

export const postActionById = (id: any) => {
  return (dispatch: any) => {
    dispatch({
      type: Data_Request,
    });
    const url = BaseUrl2 + `?id=${id}`;
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
    const url = `https://post-backend-2.onrender.com/post?title=${name}`;
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

export const CreatePostAction = (data: any) => {
  return (dispatch: any) => {
    const url = BaseUrl2;
    axios
      .post(url, data)
      .then((res: any) => {
        console.log(data);
        Alert.alert('Data Added Successfully', 'success');
        // dispatch({
        //   type: Data_Success,
        //   payload: res?.data,
        // });
      })
      .catch((err: any) => {
        dispatch({
          type: Post_Error,
          postCreationError: err,
        });
        Alert.alert(err, 'Error');
      });
  };
};

export const DeletePostAction = (id: any) => {
  return (dispatch: any) => {
    const url = `${BaseUrl2}/${id}`;
    axios
      .delete(url)
      .then((res: any) => {
        console.log(res);
        Alert.alert('Data Deleted Successfully', 'success');
        dispatch(postActions());
      })
      .catch((err: any) => {
        Alert.alert(err, 'Error');
      });
  };
};

export const putPostAction = (id: any, data: any) => {
  return (dispatch: any) => {
    const url = `${BaseUrl2}/${id}`;
    axios
      .put(url, data)
      .then((res: any) => {
        console.log(res);
        Alert.alert('Data Updated Successfully', 'success');
        dispatch(postActions());
      })
      .catch((err: any) => {
        Alert.alert(err, 'Error');
      });
  };
};
