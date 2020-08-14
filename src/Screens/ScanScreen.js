import 'react-native-gesture-handler'
import React, { useState, useEffect } from "react"
import { SafeAreaView, View, Text, Image, AsyncStorage } from "react-native"
import styles from '../styles/styles'
import QrCodeScan from '../Components/QrCodeScan'
import MainButton from '../Components/MainButton'
import getEquipament from '../api/getEquipament'
import LargeTextButton from '../Components/LargeTextButton'

export default function ScanScreen({route, navigation }) {
    const [scannerVisible, setScannerVisibel] = useState(false)
    const [userToken, setUserToken] = useState('')
    const url = 'https://apipolonorte.herokuapp.com/equipments/40'

    useEffect(() => {
        AsyncStorage.getItem('userToken')
            .then(token => {
                if (token != null) {
                    const parsed = JSON.parse(token)
                    setUserToken(token)
                } else {
                    navigation.navigate('login')
                }
            })
    }, [])

    return (
        <View style={styles.mainContainer}>
            <Image source={require('../img/polo-norte-logo.png')} style={styles.headerImage} />
            <View style={styles.buttonScanContainer}>
                <View style={{ alignSelf: 'center', marginTop: 10 }}>
                    {scannerVisible
                        ? <QrCodeScan onPress={()=> setScannerVisibel(false) } token={userToken} callBack={(token)=>{
                            navigation.navigate('details', {userToken})
                        }}/>
                        : <View>
                            <View style={{marginVertical: 100}}>
                                <MainButton
                                    backgroundColor={'#001435'}
                                    title={'Nova Manutenção'}
                                    textColor={'#1DE4FF'}
                                    onPress={() => setScannerVisibel(true)}
                                /> 

                            </View>
                            <MainButton
                                backgroundColor={'#001435'}
                                title={'Redefinir Senha'}
                                textColor={'#1DE4FF'}
                                onPress={() => navigation.navigate('change')}
                            /> 
                        </View> 
                    }

                </View>
            </View>
            <View style={{alignSelf: 'center'}}>
                <LargeTextButton title={'Sair'} textColor={'#001435'} onPress={()=> {
                    AsyncStorage.removeItem('userToken')
					.then((token)=> {navigation.navigate('login')})
                }}/>
            </View>
        </View>
    )
}