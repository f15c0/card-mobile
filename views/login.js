import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Login = () => {
  return (
    <View>
      <View style={styles.loginImage}>
        <Image source={require("../assets/hacker.png")} />
      </View>

      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: "#fff",
    height: "100%",
    borderRadius: 12,
    // Shadow properties for iOS
    shadowColor: "#dcb31e",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 30,
    // Elevation for Android
    elevation: 5,
  },
  welcome: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "500",
  },
  loginImage: {
    alignItems: "center",
  },
});
