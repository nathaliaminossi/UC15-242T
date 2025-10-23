import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function Exemplo2() {

    useEffect(() => {
        console.log("Compinente apareceu")
    }, []) // vai ser chamado uma vez só, quando o componente for montado na tela
  return (
      <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>👋 Componente montado!</Text>
    </View>
  )
}

const styles = StyleSheet.create({})