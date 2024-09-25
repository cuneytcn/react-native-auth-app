// Create a function to return a promise

import axios from "axios";

//Login

const loginUser = async ({ email, password }) => {
   try {
      const response = await axios.post("https://your-api-url.com/login", {
         email,
         password,
      });

      return response.data;
   } catch (error) {
      //
      throw new Error("Failed to log in");
   }
};

// Register

const registerUser = async ({ email, password, confirmPassword }) => {
   if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
   }

   try {
      const response = await axios.post("https://your-api-url.com/register", {
         email,
         password,
      });

      return response.data;
   } catch (error) {
      //
      throw new Error("Failed to register");
   }
};

export { loginUser, registerUser };
