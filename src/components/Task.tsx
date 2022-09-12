import {View, Text, StyleSheet, StyleProp, TextStyle} from "react-native"
import CheckBox from "./CheckBox"

import global from "../styles/global"
import {formatDate} from "../services/utils"

export interface TaskProps {
    id: number
    descr: string
    estimateAt: Date
    doneAt?: Date | null
}

function Task(props: TaskProps) {
    const donned = props.doneAt !== null && props.doneAt !== undefined
    const titleStyles: StyleProp<TextStyle>[] = [styles.desc]

    if (donned) {
        titleStyles.push({
            textDecorationLine: "line-through",
        })
    }

    const formattedDate = formatDate(
        "ddd, D [de] MMMM",
        props.doneAt || props.estimateAt
    )

    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>
                <CheckBox checked={donned} />
            </View>
            <View>
                <Text style={titleStyles}>{props.descr}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: global.colors.borderColor,
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
        color: global.colors.textPrimary,
        fontFamily: global.fontFamily,
        fontSize: 14,
        lineHeight: 20,
    },
    date: {
        color: global.colors.textSecondary,
        fontFamily: global.fontFamily,
        fontSize: 12,
    },
})

export default Task
