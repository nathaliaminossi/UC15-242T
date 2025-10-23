import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

export default function Exemplo5() {
  // Estado para armazenar os usuários
  const [usuarios, setUsuarios] = useState<any>([]);

  useEffect(() => {
    console.log("");
    const buscarUsuario = async () => {
        try{ 
      const resposta = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const dados = resposta.json();
      setUsuarios(dados);
    } catch (e) {
        console.log("Erro ao buscar usuários:", e);

    
    }
    

    };

    buscarUsuario()
  }, []);

  return (
       <View style={styles.container}>
      <Text style={styles.titulo}>👥 Lista de Usuários</Text>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>• {item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, marginTop: 30 },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  item: { fontSize: 18, marginVertical: 4 },
});
