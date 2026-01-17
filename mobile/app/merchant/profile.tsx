import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button, Provider as PaperProvider } from "react-native-paper";
import { useState } from "react";
import { router } from "expo-router";

export default function ProfileScreen() {
  const [storeName, setStoreName] = useState("Mini Shop");
  const [address, setAddress] = useState("Bandar Lampung");

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Profil Toko</Text>

        <TextInput
          label="Nama Toko"
          mode="outlined"
          value={storeName}
          onChangeText={setStoreName}
          style={styles.input}
        />

        <TextInput
          label="Alamat"
          mode="outlined"
          value={address}
          onChangeText={setAddress}
          style={styles.input}
        />

        <Button mode="contained" style={{ marginTop: 10 }}>
          Simpan
        </Button>

        <Button mode="text" onPress={() => router.back()}>
          Kembali
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { marginBottom: 15 },
});
