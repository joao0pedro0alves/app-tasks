import {
    View,
    Text,
    StyleProp,
    TextStyle,
    TouchableWithoutFeedback,
    GestureResponderEvent,
} from "react-native"

import {CheckBox} from "../Checkbox"

import {THEME} from "../../theme"
import {formatDate} from "../../services/utils"

import {styles} from "./styles"

export interface TaskData {
    id: number
    descr: string
    estimateAt: Date
    doneAt?: Date | null
}

interface TaskProps {
    task: TaskData
    onToggleTask: (id: TaskData["id"], e: GestureResponderEvent) => void
}

export function Task({task, onToggleTask}: TaskProps) {
    const donned = task.doneAt !== null && task.doneAt !== undefined
    const titleStyles: StyleProp<TextStyle>[] = [styles.desc]

    if (donned) {
        titleStyles.push({
            textDecorationLine: "line-through",
            color: THEME.colors.textSecondary,
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
