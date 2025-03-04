import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    console.log('Navigating to Scan...');
    navigation.navigate('Scan');
  };

  return (
    <View style={styles.container}>
      {/* Adding the logo */}
      <Image source={require('../../assets/NutriAID logo pixel.png')} style={styles.logo} />

      <Text style={styles.title}>NutriAID</Text>
      <Text style={styles.subtitle}>Calorie & Nutrition Tracker</Text>

      <TouchableOpacity style={styles.button} onPress={handleNavigation}>
        <Text style={styles.buttonText}>Go to Scan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDFADB', // New background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,  // Adjust the logo size
    height: 150,
    marginBottom: 20,  // Space between the logo and title
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3C3F4D',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#7A7A7A',
    marginBottom: 20,
    textAlign: 'center',
    width: 300,
  },
  button: {
    backgroundColor: '#3C3F4D',
    padding: 15,
    borderRadius: 10,
    width: 120,  // Set Button Width
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;
