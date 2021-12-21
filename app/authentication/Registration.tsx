import React, { useState } from "react";
import {
    StyleSheet,
    TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [DoB, setDoB] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [openHours, setOpenHours] = useState("");
    const [closingHours, setClosingHours] = useState("");
    const [officeLocation, setOfficeLocation] = useState("");
    const [officeLocation2, setOfficeLocation2] = useState("");

    return(
        <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/icon.png")} /> 
 
        <ScrollView style={styles.scrollViewOuter} contentContainerStyle={styles.scrollView}>
            <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="First Name."
                    placeholderTextColor="#003f5c"
                    onChangeText={(firstName) => setFirstName(firstName)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="First Name."
                    placeholderTextColor="#003f5c"
                    onChangeText={(firstName) => setFirstName(firstName)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="First Name."
                    placeholderTextColor="#003f5c"
                    onChangeText={(firstName) => setFirstName(firstName)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="First Name."
                    placeholderTextColor="#003f5c"
                    onChangeText={(firstName) => setFirstName(firstName)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="First Name."
                    placeholderTextColor="#003f5c"
                    onChangeText={(firstName) => setFirstName(firstName)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="First Name."
                    placeholderTextColor="#003f5c"
                    onChangeText={(firstName) => setFirstName(firstName)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="First Name."
                    placeholderTextColor="#003f5c"
                    onChangeText={(firstName) => setFirstName(firstName)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="First Name."
                    placeholderTextColor="#003f5c"
                    onChangeText={(firstName) => setFirstName(firstName)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="First Name."
                    placeholderTextColor="#003f5c"
                    onChangeText={(firstName) => setFirstName(firstName)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="First Name."
                    placeholderTextColor="#003f5c"
                    onChangeText={(firstName) => setFirstName(firstName)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="First Name."
                    placeholderTextColor="#003f5c"
                    onChangeText={(firstName) => setFirstName(firstName)}
                    />
                </View>

        </ScrollView>
      {/* <View style={styles.loginButtonView}>
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Login</Text>
            </TouchableOpacity>
        </View> */}
        
   
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Sign Up</Text>
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
      padding: 20,
      marginTop: 20
    },
   
    scrollViewOuter: {
        width: "100%"
    },

    scrollView: {
        display: "flex",
        alignItems: "center",
         justifyContent: "center",
      },
     
    image: {
      marginBottom: 40,
      width: 100,
      height: 100
    },
   
    inputView: {
    //  backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "100%",
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