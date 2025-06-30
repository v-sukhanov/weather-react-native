import React from "react";
import { Text, View } from "react-native";
/**
 * Loading component to display a loading state.
 * This can be used while fetching data or performing any asynchronous operations.
 */ 
export const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
      <Text style={{ fontSize: 20, color: '#333' }}>Loading...</Text>
    </View>
  );
}       

export default Loading;