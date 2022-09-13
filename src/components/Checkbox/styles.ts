import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        borderColor: THEME.COLORS.BACKGROUND_400,
    },
    done: {
        backgroundColor: THEME.COLORS.SUCCESS,
    },
})
