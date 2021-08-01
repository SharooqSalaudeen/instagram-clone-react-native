import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";

import db, { auth } from "../../firebase";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        db.collection("users").doc(auth.currentUser.uid).set({
          name: name,
          email: email,
        });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <TextInput placeholder="name" onChangeText={(name) => setName(name)} />
      <TextInput
        xtInput
        placeholder="email"
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder="password"
        secureTextEntry
        onChangeText={(password) => setPassword(password)}
      />
      <Button onPress={SignUp} title="Sign Up" />
    </View>
  );
}
