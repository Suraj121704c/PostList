import {View, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// user defined imports
import {postActions} from '../Redux/Actions/postAction';
import ShowPosts from '../Components/ShowPosts';
import Posts from '../Data/Posts';

export default function Home() {
  const dispatch = useDispatch<any>();
  const {data, loading, error} = useSelector((state: any) => state.postReducer);

  useEffect(() => {
    dispatch(postActions());
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ShowPosts item={item} />}
      />
    </SafeAreaView>
  );
}
