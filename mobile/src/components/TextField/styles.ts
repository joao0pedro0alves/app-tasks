import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        backgroundColor: THEME.COLORS.BACKGROUND,
        borderColor: THEME.COLORS.BACKGROUND_200,
        fontSize: 14,
        height: 42,
        marginTop: 8,
        marginBottom: 4,
        borderRadius: 4,
        elevation: 2,
        paddingLeft: 16,
    },
})
