import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

export default function TabLayout() {
   return (
      <Tabs
         screenOptions={{
            tabBarStyle: {
               height: 60,
               paddingVertical: 10,
            },
         }}>
         <Tabs.Screen
            name="index"
            options={{
               headerShown: false,
               title: "Home",
               tabBarIcon: ({ color }) => (
                  <AntDesign
                     name="home"
                     size={28}
                     color={color}
                  />
               ),
            }}
         />

         <Tabs.Screen
            name="profile"
            options={{
               headerShown: false,
               title: "Profile",
               tabBarIcon: ({ color }) => (
                  <AntDesign
                     name="user"
                     size={28}
                     color={color}
                  />
               ),
            }}
         />

         <Tabs.Screen
            name="settings"
            options={{
               headerShown: false,
               title: "Settings",
               tabBarIcon: ({ color }) => (
                  <Feather
                     name="settings"
                     size={28}
                     color={color}
                  />
               ),
            }}
         />
      </Tabs>
   );
}
