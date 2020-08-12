import React from "react"
import { TouchableOpacity, Text, View } from "react-native"
import styles from '../styles/styles'

const MainButton = ({ backgroundColor, title, onPress, textColor }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                backgroundColor: backgroundColor,
                width: 200,
                height: 50,
                borderRadius: 5
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    margin: 10,
                    color: textColor
                }}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default MainButton