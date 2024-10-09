import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Svg, { Circle } from 'react-native-svg'; // Import from react-native-svg

const ScanScreen = () => {
  const [carbs, setCarbs] = useState(0); // Default value for Carbs
  const [protein, setProtein] = useState(0); // Default value for Protein
  const [fats, setFats] = useState(0); // Default value for Fats

  const totalCalories = 2000; // Default total calories
  const caloriesEaten = 1200; // Example calories eaten
  const progress = (caloriesEaten / totalCalories) * 100; // Calculate percentage

  // Function to calculate color based on progress
  const getProgressColor = (progress) => {
    if (progress <= 50) {
      // Red to yellow
      const red = 255;
      const green = Math.floor((progress / 50) * 255);
      return `rgb(${red},${green},0)`;
    } else {
      // Yellow to green
      const red = Math.floor(255 - ((progress - 50) / 50) * 255);
      const green = 255;
      return `rgb(${red},${green},0)`;
    }
  };

  const handleImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera is required!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      console.log(result.uri); // URI for the selected image
    }
  };

  const handleCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera is required!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
      console.log(result.uri); // URI for the taken photo
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        {/* Progress Circle */}
        <View style={styles.circleContainer}>
          <Svg height={120} width={120}>
            <Circle
              stroke="#e0e0e0"
              fill="transparent"
              strokeWidth={10}
              r={50}
              cx={60}
              cy={60}
            />
            <Circle
              stroke={getProgressColor(progress)} // Dynamic color based on progress
              fill="transparent"
              strokeWidth={10}
              strokeDasharray={`${Math.PI * 100}`}
              strokeDashoffset={`${Math.PI * 100 - (progress / 100) * Math.PI * 100}`}
              r={50}
              cx={60}
              cy={60}
            />
          </Svg>
          <Text style={styles.circleText}>{caloriesEaten}</Text>
          <Text style={styles.circleLabel}>Calories</Text>
        </View>

        {/* Nutrient Info */}
        <View style={styles.nutrientInfo}>
          <View style={styles.nutrientRow}>
            <Image source={require('../../assets/bread.png')} style={styles.icon} />
            <Text style={styles.nutrientText}>Carbs</Text>
            <Text style={styles.nutrientValue}>{carbs}g</Text>
          </View>
          <View style={styles.nutrientRow}>
            <Image source={require('../../assets/steak.png')} style={styles.icon} />
            <Text style={styles.nutrientText}>Protein</Text>
            <Text style={styles.nutrientValue}>{protein}g</Text>
          </View>
          <View style={styles.nutrientRow}>
            <Image source={require('../../assets/milk2.png')} style={styles.icon} />
            <Text style={styles.nutrientText}>Fats</Text>
            <Text style={styles.nutrientValue}>{fats}g</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.title}>Scan Food Item</Text>
        
        {/* "Select an image" button */}
        <TouchableOpacity style={styles.selectButton} onPress={handleImagePicker}>
          <Text style={styles.buttonText}>Select an image</Text>
        </TouchableOpacity>

        {/* "Snap a photo" button */}
        <TouchableOpacity style={styles.snapButton} onPress={handleCamera}>
          <Text style={styles.buttonText}>Snap a photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  topSection: {
    height: 200, 
    backgroundColor: '#DAF5FF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20, // Moved the progress circle to the right
  },
  circleText: {
    position: 'absolute',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    top: 35, // Moved text up
  },
  circleLabel: {
    position: 'absolute',
    top: 60, // Moved label up
    fontSize: 16,
    color: '#666',
    width: 60,
  },
  nutrientInfo: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 60,
  },
  nutrientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  nutrientText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  nutrientValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
    marginLeft: 50
  },
  // Style for the "Select an image" button
  selectButton: {
    backgroundColor: '#3C3F4D',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: 150,
  },
  // Style for the "Snap a photo" button
  snapButton: {
    backgroundColor: '#3C3F4D',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: 150,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ScanScreen;
