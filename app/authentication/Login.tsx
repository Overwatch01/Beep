import React, { useState } from "react";
import {
    StyleSheet,
    TextInput,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/icon.png")} /> 
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <View style={styles.loginButtonView}>
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        
   
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity> 
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 40,
      borderColor: "#f1ea09",
      borderWidth: 1,
      height: 100,
      width: 100
    },
   
    inputView: {
    //  backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      borderColor: "#f1ea09",
      borderWidth: 1,
   
      alignItems: "center",
    },

    loginButtonView: {  
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
       
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      width: "70%",

      //marginLeft: 20,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#f1ea09",
    },

    loginText: {
        fontSize: 20
    }
});