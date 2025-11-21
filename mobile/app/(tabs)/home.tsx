import { useState } from "react";
import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { styles } from "@/styles/home.styles";
import { MaterialIcons } from "@expo/vector-icons";


export default function HomeScreen() {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcome}>Welcome Back !</Text>
        <Text style={styles.nameUser}>Alliya Fajrin</Text>
      </View>


      {/* searchBar */}
      <View style={styles.searchRow}>
      <Searchbar
        placeholder="Search products..."
        value={query}
        onChangeText={setQuery}
        style={styles.searchBar}
        inputStyle={{ fontSize: 15, marginVertical: -4 }}
        iconColor="#777"
        placeholderTextColor="#999"
        // Mic 
        right={() => (
          <MaterialIcons name="mic" size={22} color="#555" style={{ marginRight: 10 }} />
        )}
      />
      </View>
    </View>
  );
}
