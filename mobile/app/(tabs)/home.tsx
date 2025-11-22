import React, { useState } from "react";
import { View, Text, Pressable, Image, ScrollView, FlatList } from "react-native";
import { Card, Searchbar } from "react-native-paper";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { styles } from "@/styles/home.styles";

const storyData = [
  { id: 'story1', label: 'New Drop', image: require('./assets/story1.jpg'), viewed: false },
  { id: 'story2', label: 'Summer Sale', image: require('./assets/story2.jpeg'), viewed: true },
  { id: 'story3', label: 'Designers', image: require('./assets/story3.jpeg'), viewed: false },
  { id: 'story4', label: 'Styling Tips', image: require('./assets/story4.jpg'), viewed: true },
  { id: 'story1', label: 'New Drop', image: require('./assets/story1.jpg'), viewed: false },
  { id: 'story2', label: 'Summer Sale', image: require('./assets/story2.jpeg'), viewed: true },
  { id: 'story3', label: 'Designers', image: require('./assets/story3.jpeg'), viewed: false },
  { id: 'story4', label: 'Styling Tips', image: require('./assets/story4.jpg'), viewed: true },
];

const bottomNavItems = [
  { name: 'Home', icon: 'home', key: 'home', active: true },
  { name: 'Favorites', icon: 'heart-outline', key: 'favorites', active: false },
  { name: 'History', icon: 'time-outline', key: 'history', active: false },
  { name: 'Profile', icon: 'person-outline', key: 'profile', active: false },
];

const products = [
  { brand: 'Dior', name: 'Classic Cotton T-Shirt with Logo Print', rating: '4.8 (292)', price: 'Rp.499.000,00', image: require('./assets/produkCart2.jpeg') },
  { brand: 'Reebok', name: 'Reebok Graphic Tee Summer Collection 2025', rating: '4.5 (262)', price: 'Rp.699.000,00', image: require('./assets/produkCart1.jpeg') },
  { brand: 'Nike', name: 'Nike Air Max Limited Edition Tee', rating: '4.6 (180)', price: 'Rp.550.000,00', image: require('./assets/produkCart3.jpeg') },
  { brand: 'Supreme', name: 'Supreme Logo Print Streetwear Tee', rating: '4.7 (210)', price: 'Rp.620.000,00', image: require('./assets/produkCart4.jpg') },
];

export default function HomeScreen() {
  const [query, setQuery] = useState("");

  const renderProduct = ({ item }: any) => (
    <Card style={[styles.productCard, { flex: 1, margin: 8 }]} onPress={() => console.log(`${item.brand} clicked`)}>
      <Ionicons name="heart-outline" size={20} style={styles.heartIcon} />
      <Card.Cover source={item.image} style={styles.productCover} resizeMode="cover" />
      <Card.Content style={{ padding: 10 }}>
        {/* Baris Brand dan Rating */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.productBrand}>{item.brand}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="star" size={14} color="#FFB347" />
            <Text style={{ fontSize: 13, color: '#777', marginLeft: 4 }}>{item.rating}</Text>
          </View>
        </View>
        {/* Nama Produk */}
        <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
        {/* Harga */}
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#FF0000', marginTop: 4 }}>{item.price}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.welcomeContainer}>
        <View>
          <Text style={styles.welcome}>Welcome Back!</Text>
          <Text style={styles.nameUser}>Alliya Fajrin</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable style={styles.cartButton} onPress={() => console.log("Keranjang clicked")}>
            <Ionicons name="cart-outline" size={24} color="#333" />
          </Pressable>
          <Pressable style={[styles.cartButton, { marginLeft: 12 }]} onPress={() => console.log("Notifikasi clicked")}>
            <Ionicons name="notifications-outline" size={24} color="#333" />
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
          right={() => <MaterialIcons name="mic" size={22} color="#555" style={{ marginRight: 10 }} />}
        />
      </View>

      {/* Banner */}
      <View style={styles.promoBanner}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.promoTitle}>Hello, Sport!</Text>
            <Text style={styles.promoSubtitle}>Get Your Special Sale Up 50% Off</Text>
            <Pressable style={styles.tombolPromo} onPress={() => console.log("Shop Now clicked")}>
              <Text style={styles.promoButtonText}>Shop now</Text>
            </Pressable>
          </View>
          <Image source={require('./assets/gambarBanner.png')} style={styles.imageBanner} />
        </View>
      </View>

      {/* Main Scroll */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Story */}
        <View style={styles.storyContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16 }}>
            {storyData.map((story) => (
              <Pressable key={story.id} style={styles.storyItem} onPress={() => console.log(`Open story Rp.{st.000,00ory.id}`)}>
                <View style={[styles.storyRing, !story.viewed && styles.storyRingUnviewed]}>
                  <Image source={story.image} style={styles.storyImage} />
                </View>
                <Text style={styles.storyLabel} numberOfLines={1}>{story.label}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* HOT PICKS */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, marginBottom: 2, marginTop: 16 }}>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#333' }}>HOT PICKS</Text>
          <Pressable onPress={() => console.log('See All clicked')}>
            <Text style={{ fontSize: 14, color: '#ff8c00', marginTop: 10 }}>See All</Text>
          </Pressable>
        </View>

        {/* Produk Grid 2 kolom */}
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 8 }}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#e5e5e5',
      }}>
        {bottomNavItems.map((item) => (
          <Pressable key={item.key} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={() => console.log(`Rp.{it.000,00em.name} Nav Clicked`)}>
            <Ionicons name={item.icon as any} size={24} color={item.active ? '#ff8c00' : '#888'} />
            <Text style={{ fontSize: 12, marginTop: 4, color: item.active ? '#ff8c00' : '#888' }}>{item.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
