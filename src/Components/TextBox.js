import React from "react"
import { View, Text, Image, TextInput } from "react-native"
import styles from '../styles/styles'   

 const TextBox = ({placeholder }) => {
    return (
        <TextInput
            placeholder={placeholder}
            style={styles.textBox}

        />
    )
}

export default TextBox