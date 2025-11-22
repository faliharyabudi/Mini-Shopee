import React, { useState } from "react";
import { View, Text, Pressable, Image, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { styles } from "@/styles/home.styles";

// Story data dengan id unik
const storyData = [
  { id: 'story1', label: 'New Drop', image: require('./assets/story1.jpg'), viewed: false },
  { id: 'story2', label: 'Summer Sale', image: require('./assets/story2.jpeg'), viewed: true },
  { id: 'story3', label: 'Designers', image: require('./assets/story3.jpeg'), viewed: false },
  { id: 'story4', label: 'Styling Tips', image: require('./assets/story4.jpg'), viewed: true },
  { id: '3', label: 'Designers', image: require('./assets/story3.jpeg'), viewed: false },
  { id: '4', label: 'Styling Tips', image: require('./assets/story1.jpg'), viewed: true },
  { id: '1', label: 'New Drop', image: require('./assets/story4.jpg'), viewed: false },
  { id: '2', label: 'Summer Sale', image: require('./assets/story3.jpeg'), viewed: true },
  { id: '3', label: 'Designers', image: require('./assets/story2.jpeg'), viewed: false },
  { id: '4', label: 'Styling Tips', image: require('./assets/story1.jpg'), viewed: true },
  { id: '1', label: 'New Drop', image: require('./assets/story1.jpg'), viewed: false },
  { id: '2', label: 'Summer Sale', image: require('./assets/story2.jpeg'), viewed: true },
  { id: '3', label: 'Designers', image: require('./assets/story3.jpeg'), viewed: false },
  { id: '4', label: 'Styling Tips', image: require('./assets/story1.jpg'), viewed: true },
  { id: '1', label: 'New Drop', image: require('./assets/story4.jpg'), viewed: false },
];

// Bottom navigation items
const bottomNavItems = [
  { name: 'Home', icon: 'home', key: 'home', active: true },
  { name: 'Favorites', icon: 'heart-outline', key: 'favorites', active: false },
  { name: 'History', icon: 'time-outline', key: 'history', active: false },
  { name: 'Profile', icon: 'person-outline', key: 'profile', active: false },
];

export default function HomeScreen() {
  const [query, setQuery] = useState("");
  const [notifications, setNotifications] = useState(3);
  const [activeCategory, setActiveCategory] = useState('stories');

  // Render story content
  const renderCategoryContent = () => {
    if (activeCategory === 'stories') {
      return (
        <View>
          {/* Scroll story */}
          <View style={styles.storyContainer}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 16 }}
            >
              {storyData.map((story) => (
                <Pressable
                  key={story.id}
                  style={styles.storyItem}
                  onPress={() => console.log(`Open story ${story.id}`)}
                >
                  {/* Cincin story */}
                  <View
                    style={[
                      styles.storyRing,
                      !story.viewed && styles.storyRingUnviewed
                    ]}
                  >
                    <Image source={story.image} style={styles.storyImage} />
                  </View>

                  {/* Label story */}
                  <Text style={styles.storyLabel} numberOfLines={1}>
                    {story.label}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>

          {/* hot picks*/}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, marginBottom: 8 }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#333' }}>HOT PICKS</Text>
            <Pressable onPress={() => console.log('See All clicked')}>
              <Text style={{ fontSize: 14, color: '#ff8c00', marginTop: 10, }}>See All</Text>
            </Pressable>
          </View>

        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {/* Header welcome */}
      <View style={styles.welcomeContainer}>
        <View>
          <Text style={styles.welcome}>Welcome Back!</Text>
          <Text style={styles.nameUser}>Alliya Fajrin</Text>
        </View>

        {/* Keranjang + Notifikasi */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* Keranjang */}
          <Pressable style={styles.cartButton} onPress={() => console.log("Keranjang clicked")}>
            <Ionicons name="cart-outline" size={24} color="#333" />
          </Pressable>
          {/* Notifikasi */}
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

      {/* Banner promo */}
      <View style={styles.promoBanner}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.promoTitle}>Hello, Sport!</Text>
            <Text style={styles.promoSubtitle}>Get Your Special Sale Up 50% Off</Text>
            {/* Tombol promo */}
            <Pressable style={styles.tombolPromo} onPress={() => console.log("Shop Now clicked")}>
              <Text style={styles.promoButtonText}>Shop now</Text>
            </Pressable>
          </View>

          {/* Gambar banner */}
          <Image
            source={require('./assets/gambarBanner.png')}
            style={styles.imageBanner}
          />
        </View>
      </View>

      {/* Render kategori */}
      {renderCategoryContent()}

      {/* Navigasi di bawah */}
      <View
        style={{
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
          <Pressable
            key={item.key}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={() => console.log(`${item.name} Nav Clicked`)}>
            <Ionicons
              name={item.icon as any}
              size={24}
              color={item.active ? '#ff8c00' : '#888'} />
            <Text style={{ fontSize: 12, marginTop: 4, color: item.active ? '#ff8c00' : '#888' }}>
              {item.name}
            </Text>
          </Pressable>
        ))}
      </View>


    </View>
  );
}
