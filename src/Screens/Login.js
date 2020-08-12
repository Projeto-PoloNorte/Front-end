import 'react-native-gesture-handler'
import React from "react"
import { View, Image } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from '../styles/styles'

import TextBox from '../Components/TextBox'
import MainButton from '../Components/MainButton'
import TextButton from '../Components/TextButton'
import logo from '../img/polonortelogo.png'

export default function Login({ navigation }) {

    return (
        <KeyboardAwareScrollView
            style={{ backgroundColor: "#001435" }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={{ flex: 1 }}
            scrollEnabled={false}
        >
            <View style={styles.imgContainer}>
                <Image source={logo} style={styles.headerImage} />
            </View>
            <View style={styles.inputContainer}>
                <TextBox
                    placeholder='CPF'
                />
                <TextBox
                    placeholder='Senha'
                />
            </View>
            <View style={styles.buttonContainer}>
                <MainButton backgroundColor={'#4DB9C8'} title={'Entrar'} textColor={'#001435'} onPress={() => { navigation.navigate('scan') }} />
                <TextButton title={'Esqueci a senha'} textColor={'#C4C4C4'} onPress={() => { navigation.navigate('forgot') }} />
            </View>
        </KeyboardAwareScrollView>
    )
}
