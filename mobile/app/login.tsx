import { View, Text, StyleSheet } from "react-native";

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.logoText}>MiniShop</Text>
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
    logoText: {
        fontSize: 80,
        fontWeight: 'bold',
        color: '#ff8c00', 
    }
});



