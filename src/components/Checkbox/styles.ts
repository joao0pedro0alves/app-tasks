import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: THEME.colors.borderColor,
        alignItems: "center",
        justifyContent: "center",
    },
    done: {
        backgroundColor: THEME.colors.success,
    },
})
