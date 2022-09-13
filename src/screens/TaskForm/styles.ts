import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingVertical: 32,
        backgroundColor: THEME.colors.background,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        elevation: 15,
    },
    header: {
        fontFamily: THEME.fontFamilyBold,
        color: THEME.colors.primary,
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
        fontFamily: THEME.fontFamilyBold,
        paddingHorizontal: 16,
        paddingVertical: 8,
        color: THEME.colors.primary,
        borderRadius: 4,
        fontSize: 14,
    },
    buttonSave: {
        backgroundColor: THEME.colors.primary,
        color: THEME.colors.secondary,
        elevation: 1,
    },
})
