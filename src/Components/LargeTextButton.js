import React from "react"
import { TouchableOpacity, Text, View } from "react-native"
import styles from '../styles/styles'

const LargeTextButton = ({title, onPress, textColor}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={{
                fontSize: 22,
                color: textColor,
                marginTop: 10
                }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default LargeTextButton