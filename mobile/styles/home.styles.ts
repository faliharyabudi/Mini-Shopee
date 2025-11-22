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
        marginTop: 24,
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
        borderRadius: 24,
        elevation: 0,
        marginTop: 12,
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

    promoBanner: {
        backgroundColor: '#FF8C00', 
        marginTop: 20,
        borderRadius: 16,
        padding: 12,
        height: 165, 
        shadowColor: "#FF8C00",
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
    promoTitle: {
        fontSize: 22, 
        fontWeight: 'bold',
        color: '#fff',
    },
    promoSubtitle: {
        fontSize: 28,
        color: '#fff',
        fontWeight: '800',
        lineHeight: 36,
        maxWidth: '60%',
        marginTop: 8
    },
    tombolPromo: {
        backgroundColor: '#fff',
        borderRadius: 24,
        paddingVertical: 6,
        paddingHorizontal: 16,
        marginTop: 10,
        alignSelf: 'flex-start', 
    },
    promoButtonText: {
        color: '#FF8C00',
        fontWeight: 'bold',
        fontSize: 20,
    },
    imageBanner: {
        width: 200, 
        height: 200,
        borderRadius: 0, 
        position: 'absolute',
        right: 0,
        bottom: -19, 
        zIndex: 5, 
    },

    storyContainer: {
        marginBottom: 20,
        marginTop: 10,
        marginStart: -20,
    },
    storyItem: {
        alignItems: 'center',
        marginRight: 15, 
        width: 70, 
    },
    storyRing: {
        width: 65,
        height: 65,
        borderRadius: 32.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    storyRingUnviewed: {
        borderWidth: 3,
        borderColor: '#FF5733', 
        padding: 2,
    },
    storyImage: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#fff', 
    },
    storyLabel: {
        fontSize: 12,
        color: '#333',
        fontWeight: '500',
        textAlign: 'center',
    },

    // Wadah konten ProductCart
    productRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16, 
        marginBottom: 20,
    },
    // ProdukCart
    productCard: {
        width: '48%', 
        borderRadius: 12, 
        elevation: 4, 
        overflow: 'hidden', 
    },
    // Gambar ProductCart
    productCover: {
        height: 180, 
    },
    // Teks prductCart
    productBrand: {
        fontSize: 12,
        color: '#777',
        fontWeight: '500',
    },
    productName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginTop: 2,
    },
    productRating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 5,
    },
    heartIcon: {
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 15,
        padding: 4,
    },

});
