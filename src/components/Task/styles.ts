import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        borderColor: THEME.COLORS.BACKGROUND_400,
        borderBottomWidth: 1,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    checkContainer: {
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
    },
    desc: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.SM,
        lineHeight: 20,
    },
    date: {
        color: THEME.COLORS.TEXT_SECONDARY,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: 12,
    },
})
