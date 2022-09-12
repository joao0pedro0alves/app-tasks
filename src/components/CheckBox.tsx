import {View, StyleProp, ViewStyle, StyleSheet} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import global from "../styles/global"

interface CheckBoxProps {
    checked: boolean
    value?: boolean
}

function CheckBox(props: CheckBoxProps) {
    const checkStyles: StyleProp<ViewStyle>[] = [styles.container]

    if (props.checked) {
        checkStyles.push(styles.done)
    }

    return (
        <View style={checkStyles}>
            {props.checked && (
                <Icon name="check" size={14} color={global.colors.checkIcon} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: global.colors.borderColor,
        alignItems: "center",
        justifyContent: "center",
    },
    done: {
        backgroundColor: global.colors.success,
    },
})

export default CheckBox
