import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";

// PATH ASSET YANG BENAR
const logoImage = require("./assets/images/Logo.png");

export default function SplashScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={logoImage} style={styles.logoImg} />

      {/* Judul */}
      <Text style={styles.logoText}>Mini Shop</Text>

      {/* Sub Judul */}
      <Text style={styles.loginAs}>Login As</Text>

      {/* Tombol Customer */}
      <Pressable
        style={styles.buttonCustomer}
        onPress={() =>
          router.push({
            pathname: "/loginform",
            params: { role: "customer" },
          })
        }
      >
        <Text style={styles.buttonText}>Customer</Text>
      </Pressable>

      {/* Tombol Merchant */}
      <Pressable
        style={styles.buttonMerchant}
        onPress={() =>
          router.push({
            pathname: "/loginform",
            params: { role: "merchant" },
          })
        }
      >
        <Text style={styles.buttonText}>Merchant</Text>
      </Pressable>
    </View>
  );
}

// ================= STYLES =================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logoText: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#ff8c00",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 4 },
    textShadowRadius: 3,
    marginBottom: 20,
  },
  logoImg: {
    width: 220,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },
  loginAs: {
    fontSize: 22,
    marginBottom: 20,
    marginTop: 30,
    fontWeight: "700",
  },
  buttonCustomer: {
    width: "60%",
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#ff8c00",
    alignItems: "center",
    marginBottom: 12,
  },
  buttonMerchant: {
    width: "60%",
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#333",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "600",
  },
});
