import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },

    welcomeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 16,
    },

    searchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        gap: 4,
    },

    searchBar: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        borderRadius: 12,
        elevation: 0,
    },

    welcome: {
        fontSize: 30,
        color: "#777",
        marginBottom: 2,
        textShadowColor: "#FFB347",
    },

    nameUser: {
        fontSize: 20,
        fontWeight: "700",
        color: "#FF8C00",
    },

    cartButton: {
        backgroundColor: "#f2f2f2",
        width: 42,
        height: 42,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",

        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },

    notificationBadge: {
        position: "absolute",
        right: -2,
        top: -2,
        backgroundColor: "red",
        borderRadius: 8,
        width: 16,
        height: 16,
        justifyContent: "center",
        alignItems: "center",
    },
});
