import {TextInput, TextInputProps, StyleSheet} from "react-native"
import global from "../styles/global"

interface TextInputFieldProps extends TextInputProps {}

function TextInputField(props: TextInputFieldProps) {
    return <TextInput style={styles.container} {...props} />
}

const styles = StyleSheet.create({
    container: {
        fontFamily: global.fontFamily,
        backgroundColor: global.colors.input.background,
        borderColor: global.colors.input.borderColor,
        fontSize: 16,
        height: 64,
        marginTop: 16,
        marginBottom: 8,
        borderRadius: 4,
        elevation: 2,
        paddingLeft: 16,
    },
})

export default TextInputField
