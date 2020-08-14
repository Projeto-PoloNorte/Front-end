import 'react-native-gesture-handler'
import React, { useState } from "react"
import { ScrollView, Image, View, Text, Alert } from "react-native"
import styles from '../styles/styles'
import LargeTextBox from '../Components/LargeTextBox'
import LargeTextButton from '../Components/LargeTextButton'
import MainButton from '../Components/MainButton'
import postMaintenance from '../api/postMaintenance'

export default function Details({route, navigation}) {
    const {userToken} = route.params
    const [description, setDescription] = useState('')
    const [equipment_id, setEquipment_id] = useState(40)
    const [cancelable, setCancelabel] = useState(false)

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
                <LargeTextBox 
                    placeholder={'Insira aqui a descrição da manutenção'} 
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                />
            </View>
            <View style={{alignSelf: 'center'}}>
                <MainButton backgroundColor={'#001435'} title={'Cadastrar'} textColor={'#4DB9C8'} 
                    onPress={()=> {
                        Alert.alert(
                            'Deseja cadastrar a manutenção',
                            '',
                          [
                            {
                              text: 'Não',
                              onPress: () =>  setCancelabel(true)

                            },
                            {
                              text: 'sim',
                              onPress: ()=> postMaintenance(userToken, equipment_id, description)
                                .then(res=> Alert.alert('Manutenção cadastrada com sucesso'))
                                .catch(err => {Alert.alert('Erro ao cadastrar, tente novamente')
                                console.log('erro do post manutençao',err)
                            } )
                            }   
                          ], {cancelable: cancelable})
                    }}    
                />
            </View>
            <View style={{alignSelf: 'center'}}>
                <LargeTextButton title={'Voltar'} textColor={'#001434'} onPress={()=> navigation.navigate('scan')}/>
            </View>
        </ScrollView>
    )
}