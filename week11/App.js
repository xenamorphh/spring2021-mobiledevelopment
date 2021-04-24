import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Card, Button} from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
     <Card>
       <Card.Title>Kayla Meguin</Card.Title>
       <Text>Sushi</Text>
       <Card.Divider/>
       <Text>Pizza</Text>
       <Button title="Food"/>
     </Card>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
