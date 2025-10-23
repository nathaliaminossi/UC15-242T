import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Exemplo1() {


    const [contador, setContador] = useState(0);

      // ✅ useEffect sem dependências = roda em toda renderização
      useEffect(() => {
        console.log("O componente foi renderixado.")
      })
  return (
    <View>
      <Text>Exemplo1</Text>
    </View>
  )
}

const styles = StyleSheet.create({})