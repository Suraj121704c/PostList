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
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    dispatch(postActions());
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(postActions());
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView>
      {loading && <Loader />}
      <FlatList
        onRefresh={onRefresh}
        refreshing={refreshing}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ShowPosts item={item} />}
      />
    </SafeAreaView>
  );
}
