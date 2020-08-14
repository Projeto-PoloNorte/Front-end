import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    blueContainer: {
        backgroundColor: "#001435",
        flex: 1
    },

    mainContainer: {
        flex: 1
    },

    imgContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    headerImage: {
        width: 360,
        
    },

    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2
    },

    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonScanContainer: {
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textBox: {
        width: 250,
        height: 40,
        backgroundColor: "#C4C4C4",
        borderRadius: 5,
        padding: 10,
        margin: 20,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#C4C4C4',
        alignSelf: 'center',
        margin: 10
    },

    headerScannerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#001435',
        alignSelf: 'center',
        margin: 10
    },

    buttonScanContainer: {
        marginVertical: 20
    },
    
    largeTextBox: {
        width: 300,
        height: 100,
        backgroundColor: "#C4C4C4",
        borderRadius: 5,
        padding: 10,
        margin: 5
    },
    detailsContainer: {
        marginVertical: 10,
        padding: 30,
    },
    descriptionContainer: {
        flexDirection: 'row',
        marginVertical: 20
    },
    description: {
        fontSize: 18,
        fontWeight: 'bold',   
        color: '#001435',
        margin: 5
    },

    descriptionText: {
        fontSize: 18,  
        color: '#001435',
        margin: 5,
        marginLeft: 10
    },
    maintenanceContainer: {
        marginLeft: 20,
        marginTop: -40
     },

});

export default styles
