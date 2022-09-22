import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    headerContainer: {
        flex: 3,
    },
    taskListContainer: {
        flex: 7,
    },
    iconBar: {
        marginTop: "15%",
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    titleBar: {
        flex: 1,
        justifyContent: "flex-end",
        marginLeft: 20,
        marginBottom: 30,
    },
    title: {
        fontFamily: THEME.FONT_FAMILY.THIN,
        color: THEME.COLORS.SECONDARY,
        fontSize: 50,
        marginBottom: 20,
    },
    subtitle: {
        fontFamily: THEME.FONT_FAMILY.THIN,
        color: THEME.COLORS.SECONDARY,
        fontSize: 20,
    },
    addButton: {
        backgroundColor: THEME.COLORS.PRIMARY,
        position: "absolute",
        bottom: 32,
        right: 32,
        height: 50,
        width: 50,
        borderRadius: 32,
        justifyContent: "center",
        alignItems: "center",
    },
})
