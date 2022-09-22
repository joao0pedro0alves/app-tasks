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
        padding: 32,
        marginHorizontal: 16,
        borderRadius: 16,
        elevation: 15,
    },
    header: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        color: THEME.COLORS.PRIMARY,
        fontSize: 20,
        marginBottom: 16
    },
    form: {
        flex: 1,
        zIndex: 2,
        paddingBottom: 16,
    },
    buttons: {
        zIndex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,

        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonTitle: {
        fontSize: 14,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        color: THEME.COLORS.SECONDARY,
        marginHorizontal: 6
    },
    buttonSave: {
        backgroundColor: THEME.COLORS.PRIMARY,
        // color: THEME.COLORS.SECONDARY,
        elevation: 1,
    },
})
