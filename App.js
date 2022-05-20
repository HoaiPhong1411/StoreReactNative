import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CategoryListItem from './component/CategoryListItem';

import muffin from './assets/muffin.png'
import watermelon from './assets/watermelon.png'
import avacado from './assets/avocado.png'
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={{paddingLeft: 15, paddingRight: 15}}>
        <CategoryListItem image={muffin} content="Cải lộn cát không" style={styles.box}/>
        <CategoryListItem image={watermelon} content="Cái gì vậy trời" style={styles.box}/>
        <CategoryListItem image={avacado} content="Thiệt luôn hả" style={styles.box}/>
        <CategoryListItem image={avacado} content="Thiệt luôn hả" style={styles.box}/>
        <CategoryListItem image={avacado} content="Thiệt luôn hả" style={styles.box}/>
        <CategoryListItem image={avacado} content="Thiệt luôn hả" style={styles.box}/>
        <CategoryListItem image={avacado} content="Thiệt luôn hả" style={styles.box}/>
        <CategoryListItem image={avacado} content="Thiệt luôn hả" style={styles.box}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    
  },
  
});
