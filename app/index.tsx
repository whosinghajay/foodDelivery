import { Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Categories from "@/Components/Categories";
import { SafeAreaView } from "react-native-safe-area-context";
import Restaurant from "@/Components/Restaurant";
import Colors from "@/constants/Colors";

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom:90}}>
        <Categories />
        <Text style={styles.header}>Top picks in your neigbhourhood</Text>
        <Restaurant />
        <Text style={styles.header}>Offers near you</Text>
        <Restaurant />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 80,
    backgroundColor: Colors.lightGrey,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});

export default Page;
