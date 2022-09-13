import {View, StyleProp, ViewStyle} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import {styles} from "./styles"

interface CheckBoxProps {
    checked: boolean
    value?: boolean
}

export function CheckBox(props: CheckBoxProps) {
    const checkStyles: StyleProp<ViewStyle>[] = [styles.container]

    if (props.checked) {
        checkStyles.push(styles.done)
    }

    return (
        <View style={checkStyles}>
            {props.checked && (
                <Icon name="check" size={14} color='#FFF' />
            )}
        </View>
    )
}
