import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: '#fff',
  },

  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 8,
  },

  searchBar: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    borderRadius: 12,
    elevation: 0,
  },
});
