import { useState } from "react";
import { View, Text, Pressable, Image, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import { styles } from "@/styles/home.styles";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const storyData = [
  { id: '1', label: 'New Drop', image: require('./assets/story1.jpg'), viewed: false },
  { id: '2', label: 'Summer Sale', image: require('./assets/story2.jpeg'), viewed: true },
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
  { id: '2', label: 'Summer Sale', image: require('./assets/story3.jpeg'), viewed: true },
  { id: '3', label: 'Designers', image: require('./assets/story2.jpeg'), viewed: false },
  { id: '4', label: 'Styling Tips', image: require('./assets/story1.jpg'), viewed: true },
];

export default function HomeScreen() {
  const [query, setQuery] = useState("");
  const [notifications, setNotifications] = useState(3);
  const [activeCategory, setActiveCategory] = useState('stories'); 

  // render stori
  const renderCategoryContent = () => {
    if (activeCategory === 'stories') {
      return (
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
                <View
                  style={[
                    styles.storyRing,
                    !story.viewed && styles.storyRingUnviewed
                  ]}
                >
                  <Image source={story.image} style={styles.storyImage} />
                </View>
                <Text style={styles.storyLabel} numberOfLines={1}>
                  {story.label}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      );
    }
    return null;
  };

  return (
    // header welcome
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <View>
          <Text style={styles.welcome}>Welcome Back!</Text>
          <Text style={styles.nameUser}>Alliya Fajrin</Text>
        </View>
        {/* keranjang */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable style={styles.cartButton} onPress={() => console.log("Keranjang clicked")}>
            <Ionicons name="cart-outline" size={24} color="#333" />
          </Pressable>
          {/* notifikasi */}
          <Pressable style={[styles.cartButton, { marginLeft: 12 }]} onPress={() => console.log("Notifikasi clicked")}>
            <Ionicons name="notifications-outline" size={24} color="#333" />
          </Pressable>
        </View>
      </View>
      
      {/* searchBar */}
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
            {/* button promo */}
            <Pressable style={styles.tombolPromo} onPress={() => console.log("Shop Now clicked")}>
              <Text style={styles.promoButtonText}>Shop now</Text>
            </Pressable>
          </View>
          <Image
            source={require('./assets/gambarBanner.png')}
            style={styles.imageBanner}
          />
        </View>
      </View>

      {renderCategoryContent()}
    </View>
  );
}
