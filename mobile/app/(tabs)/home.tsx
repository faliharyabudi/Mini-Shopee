import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Searchbar } from "react-native-paper";
import { styles } from "@/styles/home.styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const [query, setQuery] = useState("");
  const [notifications, setNotifications] = useState(3);

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        {/* Header welcome */}
        <View>
          <Text style={styles.welcome}>Welcome Back!</Text>
          <Text style={styles.nameUser}>Alliya Fajrin</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* Keranjang */}
          <Pressable style={styles.cartButton} onPress={() => console.log("Keranjang clicked")}>
            <Ionicons name="cart-outline" size={24} color="#333" />
          </Pressable>
          {/* Notifikasi */}
          <Pressable
            style={[styles.cartButton, { marginLeft: 12 }]}
            onPress={() => console.log("Notifikasi clicked")}>
            <View style={{ position: "relative" }}>
              <Ionicons name="notifications-outline" size={24} color="#333" />
            </View>
          </Pressable>
        </View>
      </View>

      {/* Searchbar */}
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

      {/* banner promo */}
      <Pressable style={styles.promoBanner} onPress={() => console.log("Promo clicked")}>
        <Text style={styles.promoTitle}>Hello, Sport !</Text>
        <Text style={styles.promoSubtitle}>
          Get Your Special Sale Up 50% Off
        </Text>
        {/* Tombol promo */}
        <Pressable style={styles.tombolPromo} onPress={() => console.log("Shop Now clicked")}>
          <Text style={styles.promoButtonText}>Shop now</Text>
        </Pressable>
      </Pressable>


    </View>
  );
}
