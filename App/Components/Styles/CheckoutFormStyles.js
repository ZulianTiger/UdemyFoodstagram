import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
    FormContainer: {
        marginTop: 30,
        marginLeft: 50,
        marginRight: 50,
    },
    FormIcon: {
        color: 'green',
        fontSize: 20,
    },
    FormText: {
        fontSize: 16,
        fontWeight: '500',
    },
    TextAreaContainer: {
        marginTop: 20,
    },
    TextArea: {
        borderRadius: 20,
        fontSize: 16,
        fontWeight: '500',
    },
    SubmitButton: {
        marginTop: 20,
        backgroundColor: 'green',
        borderRadius: 20,
    },
    SubmitText: {
        fontSize: 22,
        fontWeight: '500',
    },
})
