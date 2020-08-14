import React from "react"
import { View, Text, Image, TextInput } from "react-native"
import styles from '../styles/styles'   

 const LargeTextBox = ({placeholder, value, onChangeText }) => {
    return (
        <TextInput
            placeholder={placeholder}
            style={styles.largeTextBox}
            multiline= {true}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={'grey'}
        />
    )
}

export default LargeTextBox