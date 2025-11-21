import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Searchbar } from "react-native-paper";
import { styles } from "@/styles/home.styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        {/* header welcome */}
        <View>
          <Text style={styles.welcome}>Welcome Back !</Text>
          <Text style={styles.nameUser}>Alliya Fajrin</Text>
        </View>

        {/* Keranjang */}
        <Pressable style={styles.cartButton}>
          <Ionicons name="cart-outline" size={24} color="#333" />
        </Pressable>
      </View>

      {/* Searchbar: */}
      <View style={styles.searchRow}>
        <Searchbar
          placeholder="Search products..."
          value={query}
          onChangeText={setQuery}
          style={styles.searchBar}
          inputStyle={{ fontSize: 15, marginVertical: -4 }}
          iconColor="#777"
          placeholderTextColor="#999"
          // mic
          right={() => (
            <MaterialIcons
              name="mic"
              size={22}
              color="#555"
              style={{ marginRight: 10 }}
            />
          )}
        />
      </View>
    </View>
  );
}
