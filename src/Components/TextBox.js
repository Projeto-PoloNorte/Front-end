import React from "react"
import { View, Text, Image, TextInput } from "react-native"
import styles from '../styles/styles'   

 const TextBox = ({placeholder, onChangeText, value, secureTextEntry }) => {
    return (
        <TextInput
            placeholder={placeholder}
            style={styles.textBox}
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={secureTextEntry}
            placeholderTextColor='grey'
        />
    )
}

export default TextBox