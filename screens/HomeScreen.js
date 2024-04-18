import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { FitnessItems } from '../Context';
import FitnessCards from '../components/FitnessCards';

const HomeScreen = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { calories, minutes, workout } = useContext(FitnessItems);
  const navigation = useNavigation(); // Initialize navigation

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>
      <View style={{ backgroundColor: "#000000d7", paddingTop: 40, paddingHorizontal: 20, height: 160, width: "100%" }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 50 }}>
          <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
            <Ionicons name="menu-outline" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>Train & Gain</Text>

          {/* Dark Mode */}
          <TouchableOpacity onPress={() => setShowIcon(!showIcon)}>
            {showIcon ? <Ionicons name="sunny" size={24} color="white" /> : <Ionicons name="moon" size={24} color="white" />}
          </TouchableOpacity>
        </View>

        {/* Cards Row */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 30 }}>
          {/* First Card */}
          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{calories.toFixed(2)}</Text>
            <Text>KCAL</Text>
          </View>

          {/* Second Card */}
          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{workout}</Text>
            <Text>WORKOUTS</Text>
          </View>

          {/* Third Card */}
          <View style={styles.shadowCards}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{minutes}</Text>
            <Text>MINUTES</Text>
          </View>
        </View>
      </View>
      {showMenu && <Menu onClose={() => setShowMenu(false)} />} 
      <FitnessCards />
    </ScrollView>
  )
}

const Menu = ({ onClose }) => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <TouchableWithoutFeedback onPress={onClose}>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Nutrition')}>
          <Text style={styles.menuText}>Nutritions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.menuText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.menuText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  shadowCards: {
    backgroundColor: "#ffffff",
    width: "32%",
    height: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  menuContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "80%",
    height: "150%",
    backgroundColor: "white",
    zIndex: 100,
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 10,
  },
  menuItem: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  menuText: {
    fontSize: 18,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});

export default HomeScreen;
