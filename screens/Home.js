import React, {useEffect} from 'react';
import { ListItem, Header } from 'react-native-elements'
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import apiCall from '../store/actions';
import MyHeader from "../components/MyHeader";

const Home = props => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiReducer.data);
  const loading = useSelector((state) => state.apiReducer.loading);

  useEffect(() => {
    dispatch(apiCall('http://jsonplaceholder.typicode.com/posts'));
  }, []);


  const keyExtractor = (item, index) => index.toString()

 const renderItem = ({ item }) => (
  <ListItem onPress={() => props.navigation.navigate('Detail')} bottomDivider>
    <ListItem.Content>
      <ListItem.Title>{item.title}</ListItem.Title>
      <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
)

  return (
    <View style={{flex: 1, backgroundColor: 'white',}}>
        <MyHeader navigation={props.navigation} title="Home" />
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
          
        <FlatList
        keyExtractor={keyExtractor}
        data={data}
        renderItem={renderItem}
      />
      )}
    </View>
  );
};

export default Home;