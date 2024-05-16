
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
      <View style={styles.IMG}>
        <Image
          source={{ uri: 'https://logos-download.com/wp-content/uploads/2018/02/Clube_de_Regatas_Flamengo_do_Rio_de_Janeiro_RJ_logo.png' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://logos-download.com/wp-content/uploads/2018/02/Clube_de_Regatas_Flamengo_do_Rio_de_Janeiro_RJ_logo.png' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://logos-download.com/wp-content/uploads/2018/02/Clube_de_Regatas_Flamengo_do_Rio_de_Janeiro_RJ_logo.png' }}
          style={styles.image}
        />
      </View>

      <View style={styles.img}>
        <Image
          source={{ uri: 'https://logos-download.com/wp-content/uploads/2018/02/Clube_de_Regatas_Flamengo_do_Rio_de_Janeiro_RJ_logo.png' }}
          style={styles.image1}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <Button
        title="Login"
        color={'red'}
      />
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
  IMG: {
    flexDirection: 'row',
    gap: 5
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  image1: {
    width: 300,
    height: 300,
    margin: 0,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: '80%',
  },
});
