import { Stack, useNavigation } from "expo-router";
import CustomHeader from "@/Components/CustomHeader";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const nav = useNavigation();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              header: () => <CustomHeader />,
            }}
          />
          <Stack.Screen
            name="(modal)/filter"
            options={{
              presentation: "modal",
              headerTitle: "Filter",
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: Colors.lightGrey,
              },
              // headerLeft: () => (
              //   <TouchableOpacity
              //     onPress={() => {
              //       nav.goBack();
              //     }}
              //   >
              //     <Ionicons
              //       name="close-outline"
              //       size={20}
              //       color={Colors.primary}
              //     />
              //   </TouchableOpacity>
              // ),
            }}
          />
          <Stack.Screen
            name="(modal)/location-search"
            options={{
              presentation: "fullScreenModal",
              headerTitle: "Select Location",
              // headerLeft: () => (
              //   <TouchableOpacity
              //     onPress={() => {
              //       nav.goBack();
              //     }}
              //   >
              //     <Ionicons
              //       name="close-outline"
              //       size={20}
              //       color={Colors.primary}
              //     />
              //   </TouchableOpacity>
              // ),
            }}
          />
          <Stack.Screen
            name="(modal)/dish"
            options={{
              presentation: "modal",
              headerTitle: "",
              headerTransparent: true,
              // headerLeft: () => (
              //   <TouchableOpacity
              //     onPress={() => {
              //       nav.goBack();
              //     }}
              //   >
              //     <Ionicons
              //       name="close-outline"
              //       size={20}
              //       color={Colors.primary}
              //     />
              //   </TouchableOpacity>
              // ),
            }}
          />

           <Stack.Screen
            name="(modal)/basket"
            options={{
              presentation: "modal",
              headerTitle: "Basket",
              headerTransparent: true,
              // headerLeft: () => (
              //   <TouchableOpacity
              //     onPress={() => {
              //       nav.goBack();
              //     }}
              //   >
              //     <Ionicons
              //       name="close-outline"
              //       size={20}
              //       color={Colors.primary}
              //     />
              //   </TouchableOpacity>
              // ),
            }}
          />
          
        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
