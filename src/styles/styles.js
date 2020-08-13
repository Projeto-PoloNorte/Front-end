import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    blueContainer: {
        backgroundColor: "#001435",
        flex: 1
    },

    imgContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    headerImage: {
        flex: 1,
        width: 350,
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

    textBox: {
        width: 250,
        height: 40,
        backgroundColor: "#C4C4C4",
        borderRadius: 5,
        padding: 10,
        margin: 20
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#C4C4C4',
        alignSelf: 'center',
        margin: 10
    }
});

export default styles
