import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function AboutScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>O arthur é gay</Text>
       <Button title="Voltar para home" onPress={() => navigation.navigate('Home')}>
      
            </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems: "center",
  }, 
  text:{
      color:"blue",
      fontSize:18,
      fontWeight:"bold",
  }
})