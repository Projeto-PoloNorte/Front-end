import 'react-native-gesture-handler'
import React, { useState } from "react"
import { View, Image, AsyncStorage, Alert } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from '../styles/styles'

import TextBox from '../Components/TextBox'
import MainButton from '../Components/MainButton'
import TextButton from '../Components/TextButton'
import loginValidation from '../api/login'

export default function Login({ navigation }) {
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')
    return (
        <KeyboardAwareScrollView
            style={{ backgroundColor: "#001435" }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={{ flex: 1 }}
            scrollEnabled={false}
        >
            <View style={styles.imgContainer}>
             <Image source={require('../img/polo-norte-logo.png')} style={styles.headerImage}/>
            </View>
            <View style={styles.inputContainer}>
                <TextBox
                    placeholder='CPF'
                    value={cpf}
                    onChangeText={cpf => setCpf(cpf)}
                    
                />
                <TextBox
                    placeholder='Senha'
                    placeholder='Senha'
                    value={password}
                    onChangeText={password => setPassword(password)}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.buttonContainer}>
                <MainButton backgroundColor={'#4DB9C8'} title={'Entrar'} textColor={'#001435'} onPress={() => { 
                    loginValidation(cpf, password)
                    .then((res)=>{
                        console.log(res.data.token)
                        return AsyncStorage.setItem('userToken', JSON.stringify(res.data.token))
                    })
                    .then(()=>{
                        navigation.push('scan')
                        setCpf('')
                        setPassword('')
                    })
                    .catch(err => Alert.alert('Dados incorretos'))
                    }} 
                />
                <TextButton title={'Esqueci a senha'} textColor={'#C4C4C4'} onPress={() => { navigation.navigate('forgot') }} />
            </View>
        </KeyboardAwareScrollView>
    )
}
