import React from "react"
import { TouchableOpacity, Text, View } from "react-native"
import styles from '../styles/styles'

const TextButton = ({title, onPress, textColor}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={{
                fontSize: 14,
                color: textColor,
                marginTop: 10,
                fontWeight: 'bold'
                }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default TextButton