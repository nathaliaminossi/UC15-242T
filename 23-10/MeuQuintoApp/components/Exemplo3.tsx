import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function Exemplo3() {
  const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);

  useEffect(() => {
    console.log("o contador mudou para:", contador);
  }, [contador]); // a funçao para vai ter chamada  apenas quando o contador mudar

  return (
    <View>
      <Text>Exemplo3 {contador}</Text>
      <Text
        onPress={() => setContador(contador + 1)}
        style={{ marginTop: 10, color: "blue" }} >Adicionar</Text>
      <Text
        onPress={() => setContador2(contador2 + 1)}
        style={{ marginTop: 10, color: "blue" }} >Adicionar</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
