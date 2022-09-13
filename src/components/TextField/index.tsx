import {TextInput, TextInputProps} from "react-native"
import {styles} from "./styles"

interface TextFieldProps extends TextInputProps {}

export function TextField(props: TextFieldProps) {
    return <TextInput style={styles.container} {...props} />
}
