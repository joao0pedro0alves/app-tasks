import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        borderColor: THEME.colors.borderColor,
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
    },
    checkContainer: {
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
    },
    desc: {
        color: THEME.colors.textPrimary,
        fontFamily: THEME.fontFamily,
        fontSize: 14,
        lineHeight: 20,
    },
    date: {
        color: THEME.colors.textSecondary,
        fontFamily: THEME.fontFamily,
        fontSize: 12,
    },
})
