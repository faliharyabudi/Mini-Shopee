import { View, Text, StyleSheet, Image } from "react-native";

const logoImage = require('../assets/images/Logo.png');

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            {/* Gambar Logo */}
            <Image source={logoImage} style={styles.logoImg} />
            {/* Teks Logo */}
            <Text style={styles.logoText}>Mini Shop</Text>

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
    
});

