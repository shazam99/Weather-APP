import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet, Pressable } from "react-native";

// Functional component for the search input and button
const SearchComponent = ({ onSearch }) => {
  // State variable to store the input value
  const [city, setCity] = useState('');

  // Function to handle the search button press
  const handleSearch = () => {
    if (city) {
      onSearch(city); // function from props
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter city name"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <Pressable style={styles.buttonContainer} underlayColor="#0056b3" onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: "#e5e5e5",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: "#007BFF",
    borderRadius: 10,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SearchComponent;
