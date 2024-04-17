import {View, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// user defined imports
import {postActions} from '../Redux/Actions/postAction';
import ShowPosts from '../Components/ShowPosts';
import Posts from '../Data/Posts';
import {Loader} from '../Components/Loader';

export default function Home() {
  const dispatch = useDispatch<any>();
  const {data, loading, error} = useSelector((state: any) => state.postReducer);

  useEffect(() => {
    dispatch(postActions());
  }, []);

  console.log(loading)

  return (
    <SafeAreaView>
      {loading && <Loader />}
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ShowPosts item={item} />}
      />
    </SafeAreaView>
  );
}
