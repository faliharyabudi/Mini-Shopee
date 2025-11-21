import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
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

  welcomeContainer: {
  marginTop: 20,
  marginBottom: 10,
  paddingHorizontal: 16,
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
});
