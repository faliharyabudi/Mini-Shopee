import { View, Text, StyleSheet, Image, Alert, Pressable, TouchableOpacity } from "react-native";
import { TextInput, Button, Provider as PaperProvider } from "react-native-paper";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const logoImage = require('../assets/images/Logo.png');

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert("Error", "Email dan Password wajib diisi");
            return;
        }
    }
    return (
        <PaperProvider>
            <View style={styles.container}>
                {/* Gambar Logo */}
                <Image source={logoImage} style={styles.logoImg} />
                {/* Teks Logo */}
                <Text style={styles.logoText}>Mini Shop</Text>
                {/* Teks Login */}
                <Text style={styles.teksLogin}>Login</Text>
                {/* Username */}
                <TextInput
                    label="Username"
                    mode="outlined"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.input}
                    textColor="#000"
                    activeOutlineColor="#ff8c00"
                    maxLength={30}
                />
                {/* Password */}
                <TextInput
                    label="Password"
                    mode="outlined"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!passwordVisible}
                    style={styles.input}
                    textColor="#000"
                    activeOutlineColor="#ff8c00"
                    maxLength={30}
                    right={
                        <TextInput.Icon
                            icon={passwordVisible ? "eye-off" : "eye"}
                            onPress={() => setPasswordVisible(!passwordVisible)}
                        />
                    }
                />
                {/* Teks Lupa Password */}
                <Pressable
                    style={styles.forgotPasswordContainer}
                >
                    <Text style={styles.forgotPasswordText}>Forget password?</Text>
                </Pressable>
                {/* tombol login */}
                <Button
                    mode="contained"
                    style={styles.loginButton}
                    labelStyle={{ fontSize: 25, fontWeight: 900, height: 20 }}
                    contentStyle={{ paddingVertical: 5 }}
                    textColor="#fff"
                >
                    Login
                </Button>

                <View style={styles.signupRow}>
                    {/* Teks belum punya akun */}
                    <Pressable>
                        <Text style={styles.havenotaccountText}>
                            Have not account yet?
                        </Text>
                    </Pressable>

                    {/* Teks sign up */}
                    <Pressable>
                        <Text style={styles.signupText}>SIGN UP</Text>
                    </Pressable>
                </View>

                <View style={styles.socialSection}>
                    <Text style={styles.socialLabel}>Or Sign Up Using</Text>
                    <View style={styles.socialIconsRow}>
                        <TouchableOpacity style={[styles.iconCircle, { backgroundColor: '#3b5998' }]}>
                            <FontAwesome name="facebook" size={24} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.iconCircle, { backgroundColor: '#1da1f2' }]}>
                            <FontAwesome name="twitter" size={24} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.iconCircle, { backgroundColor: '#ea4335' }]}>
                            <FontAwesome name="google" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </PaperProvider>
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
    // TeksLogin
    teksLogin: {
        fontSize: 30,
        fontWeight: "900",
        textAlign: "center",
        marginTop: 50,
        marginBottom: 20,
    },
    // input username dan password
    input: {
        width: "85%",
        marginBottom: 15,
        backgroundColor: "#fff",
    },
    // tombol login
    loginButton: {
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: "#ff8c00",
        width: "85%",
    },
    forgotPasswordContainer: {
        alignSelf: 'flex-end',
        marginRight: 40,
    },
    // teks lupa password
    forgotPasswordText: {
        color: '#ff8c00',
        fontSize: 14,
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
    signupRow: {
        flexDirection: "row",        
        alignItems: "center",
        marginTop: 10,
    },
    // teks belum punya akun
    havenotaccountText: {
        color: '#000',
        fontSize: 14,
        fontWeight: '300',
        marginRight: 5,
    },
    // teks belum punya akun
    signupText: {
        color: '#ff8c00',
        fontSize: 20,
        fontWeight: '700',
    },
    // social signup  
    socialSection: {
        marginTop: 30,
        alignItems: 'center',
    },
    socialLabel: {
        color: '#666',
        fontSize: 14,
        marginBottom: 15,
    },
    socialIconsRow: {
        flexDirection: 'row',
        gap: 20, 
    },
    iconCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    }
});

