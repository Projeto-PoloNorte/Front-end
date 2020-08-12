import 'react-native-gesture-handler'
import React from "react"
import { Image, View, Text, ScrollView } from "react-native"
import styles from '../styles/styles'
import TextBox from '../Components/TextBox'
import MainButton from '../Components/MainButton'
import LargeTextButton from '../Components/LargeTextButton'

export default function ChangePassword({ navigation }) {

    return (
        <ScrollView style={styles.blueContainer}>
            <View style={styles.blueContainer}>
                <Image source={require('../img/polonortelogo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>
                    Redefinir senha!
            </Text>
                <View style={styles.inputContainer}>
                    <TextBox placeholder={'CPF'} />
                    <TextBox placeholder={'Senha atual'} />
                    <TextBox placeholder={'Nova senha'} />
                    <TextBox placeholder={'Repetir nova senha'} />
                    <MainButton backgroundColor={'#4DB9C8'} title={'Redefinir'} textColor={'#001435'} />
                    <LargeTextButton title={'Voltar'} textColor={'#C4C4C4'}/>
                </View>
                
            </View>
        </ScrollView>
    )
}