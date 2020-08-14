import 'react-native-gesture-handler'
import React from "react"
import { SafeAreaView, View, Text } from "react-native"
import styles from '../styles/styles'
import QrCodeScan from '../Components/QrCodeScan'

export default function ScanScreen({ navigation }) {
    
    return (
        <SafeAreaView style={styles.blueContainer}>
            <View>
                <QrCodeScan onReaded={(data)=>{

                }}/>
            </View>
        </SafeAreaView>
    )
}