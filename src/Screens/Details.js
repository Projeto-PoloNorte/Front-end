import 'react-native-gesture-handler'
import React from "react"
import { ScrollView, Image, View, Text } from "react-native"
import styles from '../styles/styles'
import LargeTextBox from '../Components/LargeTextBox'
import LargeTextButton from '../Components/LargeTextButton'
import MainButton from '../Components/MainButton'

export default function Details({navigation}) {
    return(
        <ScrollView style={styles.mainContainer}>
            <Image source={require('../img/polo-norte-logo.png')} style={styles.headerImage} />
            <View style={styles.detailsContainer}>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>
                        Fabricante:   
                    </Text>
                    <Text style={styles.descriptionText}>
                        new  
                    </Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>
                        Ano:   
                    </Text>
                    <Text style={styles.descriptionText}>
                        2020 
                    </Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>
                        Modelo:   
                    </Text>
                    <Text style={styles.descriptionText}>
                        top 
                    </Text>
                </View>     
            </View>
            <View style={styles.maintenanceContainer}>
                <Text style={styles.description} >
                    Descrição da manutenção:
                </Text>
                <LargeTextBox placeholder={'Insira aqui a descrição da manutenção'} />
            </View>
            <View style={{alignSelf: 'center'}}>
                <MainButton backgroundColor={'#001435'} title={'Cadastrar'} textColor={'#4DB9C8'} />
            </View>
            <View style={{alignSelf: 'center'}}>
                <LargeTextButton title={'Voltar'} textColor={'#001434'} onPress={()=> navigation.navigate('scan')}/>
            </View>
        </ScrollView>
    )
}