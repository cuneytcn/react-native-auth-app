import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { View, Text, TextInput, Pressable } from "react-native";
import { router, Stack } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

//Schema
const registerSchema = Yup.object({
   email: Yup.string().email().required("Email is required").label("Email"),
   password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
      .label("Password"),
   confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
});

export default function Register() {
   return (
      <SafeAreaView className="flex-1">
         <Stack.Screen options={{ headerShown: false }} />
         <View className="h-auto w-full flex-row items-center gap-2 px-10">
            <Pressable onPress={() => router.push("/auth/login")}>
               <Ionicons
                  name="arrow-back"
                  size={24}
                  color="#6379F1"
               />
            </Pressable>
            <Text>Go to login page</Text>
         </View>
         <View className="flex-1 items-start justify-center px-10">
            <Text className="mb-10 text-3xl font-medium">Register</Text>
            <Formik
               initialValues={{ email: "", password: "" }}
               validationSchema={registerSchema}
               onSubmit={(values) => {
                  console.log(values);
               }}>
               {({
                  handleChange,
                  handleSubmit,
                  handleBlur,
                  errors,
                  touched,
                  values,
               }) => (
                  <View className="w-full gap-4">
                     <TextInput
                        placeholder="Email"
                        autoCapitalize="none"
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                        keyboardType="email-address"
                        className="h-10 w-full border-b bg-transparent"
                     />
                     {errors.email && touched.email && (
                        <Text className="text-sm font-light text-red-500/70">
                           {errors.email}
                        </Text>
                     )}

                     <TextInput
                        placeholder="Password"
                        autoCapitalize="none"
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        secureTextEntry
                        className="h-10 w-full border-b bg-transparent"
                     />
                     {errors.password && touched.password && (
                        <Text className="text-sm font-light text-red-500/70">
                           {errors.password}
                        </Text>
                     )}

                     <TextInput
                        placeholder="Confirm Password"
                        autoCapitalize="none"
                        onChangeText={handleChange("confirmPassword")}
                        onBlur={handleBlur("confirmPassword")}
                        value={values.confirmPassword}
                        secureTextEntry
                        className="h-10 w-full border-b bg-transparent"
                     />
                     {errors.confirmPassword && touched.confirmPassword && (
                        <Text className="text-sm font-light text-red-500/70">
                           {errors.confirmPassword}
                        </Text>
                     )}

                     <View className="h-2.5 w-full"></View>

                     <Pressable
                        title="Login"
                        onPress={handleSubmit}
                        className="h-10 w-full items-center justify-center rounded-full bg-purple-700 px-8 transition-all active:bg-purple-500">
                        <Text className="font-medium text-white">Sign up</Text>
                     </Pressable>
                  </View>
               )}
            </Formik>
         </View>
      </SafeAreaView>
   );
}
