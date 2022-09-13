import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        fontFamily: THEME.fontFamily,
        backgroundColor: THEME.colors.input.background,
        borderColor: THEME.colors.input.borderColor,
        fontSize: 16,
        height: 64,
        marginTop: 16,
        marginBottom: 8,
        borderRadius: 4,
        elevation: 2,
        paddingLeft: 16,
    },
})
