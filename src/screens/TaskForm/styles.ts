import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    container: {
        backgroundColor: THEME.COLORS.BACKGROUND_100,
        flex: 1,
        paddingHorizontal: 32,
        paddingVertical: 32,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        elevation: 15,
    },
    header: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        color: THEME.COLORS.PRIMARY,
        fontSize: 20,
    },
    form: {
        flex: 1,
        zIndex: 2,
    },
    buttons: {
        zIndex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        color: THEME.COLORS.PRIMARY,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,
        fontSize: 14,
    },
    buttonSave: {
        backgroundColor: THEME.COLORS.PRIMARY,
        color: THEME.COLORS.SECONDARY,
        elevation: 1,
    },
})
