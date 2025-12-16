import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { router} from "expo-router";

const logoImage = require('../assets/images/Logo.png');

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            {/* Gambar Logo */}
            <Image source={logoImage} style={styles.logoImg} />
            {/* Teks Logo */}
            <Text style={styles.logoText}>Mini Shop</Text>
            {/* Teks Login Sebagai(customer/seller) */}
            <Text style={styles.loginAs}>Login As</Text>

            {/* tombol buyyer */}
            <Pressable 
            style={styles.buttonCustomer}
            onPress={() => router.push("/loginform")}>
                <Text style={styles.buttonText}>Customer</Text>
            </Pressable>
    

            {/* tombol seller */}
            <Pressable 
            style={styles.buttonMerchant}
            onPress={() => router.push("/loginform")}>
                <Text style={styles.buttonText}>Merchant</Text>
            </Pressable>
        </View>
    );
}

// STYLES
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    // TeksLogo
    logoText: {
        fontSize: 80,
        fontWeight: 'bold',
        color: '#ff8c00',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 4, height: 6 },
        textShadowRadius: 3,
    },
    // Gambar Logo
    logoImg: {
        width: 200,
        height: 100,
        resizeMode: "contain",
    },
    // beliSebagai
    loginAs: {
        fontSize: 20,
        marginBottom: 20,
        marginTop: 50,
        fontWeight: "900",
    },
    // Tombol buyer
    buttonCustomer: {
        width: "50%",
        padding: 5,
        borderRadius: 10,
        backgroundColor: "#ff8c00",
        alignItems: "center",
        marginBottom: 12,
    },
    // tombol penjual
    buttonMerchant: {
        width: "50%",
        padding: 5,
        borderRadius: 10,
        backgroundColor: "#333",
        alignItems: "center",
    },
    // teks Tombol
    buttonText: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "600",
    },
});



