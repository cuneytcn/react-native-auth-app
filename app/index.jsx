import { Video } from "expo-av";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function Welcome() {
   const videoRef = React.useRef(null);

   return (
      <View className="relative flex-1">
         <Video
            ref={videoRef}
            source={{
               uri: "https://cdn.pixabay.com/video/2024/08/27/228447_large.mp4",
               type: "video/mp4",
            }}
            isLooping
            isMuted
            shouldPlay
            resizeMode="cover"
            className="absolute left-0 top-0 h-full w-full"
         />
         <View className="absolute left-0 top-0 h-full w-full flex-1 items-center justify-center bg-black/30 px-10">
            <Text className="text-4xl text-white">Masynctech</Text>
            <Text className="text-lg text-white">Coding Scholl</Text>
            <Text className="text-xl text-white">
               Build Apps, Build Futures
            </Text>
         </View>

         <View className="isolate mt-auto w-full flex-row justify-between p-10">
            <Pressable
               onPress={() => router.push("/auth/login")}
               className="items-center justify-center rounded-full bg-purple-700 px-8 py-3 leading-[2.5rem] shadow transition-all active:bg-purple-500">
               <Text className="font-medium text-white">Login</Text>
            </Pressable>

            <Pressable
               onPress={() => router.push("/auth/register")}
               className="items-center justify-center rounded-full bg-purple-700 px-8 py-3 leading-[2.5rem] shadow">
               <Text className="font-medium text-white">Register</Text>
            </Pressable>
         </View>
      </View>
   );
}
