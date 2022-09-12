import {
    View,
    Text,
    StyleSheet,
    StyleProp,
    TextStyle,
    TouchableWithoutFeedback,
    GestureResponderEvent,
} from "react-native"
import CheckBox from "./CheckBox"

import global from "../styles/global"
import {formatDate} from "../services/utils"

export interface TaskData {
    id: number
    descr: string
    estimateAt: Date
    doneAt?: Date | null
}
export interface TaskProps {
    task: TaskData
    onToggleTask: (id: TaskData["id"], e: GestureResponderEvent) => void
}

function TaskRow({task, onToggleTask}: TaskProps) {
    const donned = task.doneAt !== null && task.doneAt !== undefined
    const titleStyles: StyleProp<TextStyle>[] = [styles.desc]

    if (donned) {
        titleStyles.push({
            textDecorationLine: "line-through",
            color: global.colors.textSecondary,
        })
    }

    const formattedDate = formatDate(
        "ddd, D [de] MMMM",
        task.doneAt || task.estimateAt
    )

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={(e) => onToggleTask(task.id, e)}>
                <View style={styles.checkContainer}>
                    <CheckBox checked={donned} />
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text style={titleStyles}>{task.descr}</Text>
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

export default TaskRow
