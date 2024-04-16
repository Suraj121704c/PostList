import {View, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import Posts from '../Data/Posts';
import ShowPosts from '../Components/ShowPosts';

export default function Home() {
  return (
    <SafeAreaView>
      <FlatList
        data={Posts}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ShowPosts item={item} />}
      />
    </SafeAreaView>
  );
}
