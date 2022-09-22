import {
    View,
    Text,
    StyleProp,
    TextStyle,
    TouchableWithoutFeedback,
    GestureResponderEvent,
    TouchableOpacity,
} from "react-native"
import {GestureHandlerRootView} from "react-native-gesture-handler"
import Swipeable from "react-native-gesture-handler/Swipeable"
import Icon from "react-native-vector-icons/FontAwesome"

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
    onRemoveTask: (id: TaskData["id"], e: GestureResponderEvent) => void
}

export function Task({task, onToggleTask, onRemoveTask}: TaskProps) {
    const donned = task.doneAt !== null && task.doneAt !== undefined
    const titleStyles: StyleProp<TextStyle>[] = [styles.desc]

    if (donned) {
        titleStyles.push({
            textDecorationLine: "line-through",
            color: THEME.COLORS.TEXT_SECONDARY,
        })
    }

    const formattedDate = formatDate(
        "ddd, D [de] MMMM",
        task.doneAt || task.estimateAt
    )

    const getRightContent = () => {
        return (
            <TouchableOpacity
                style={styles.rightContent}
                onPress={(e) => onRemoveTask(task.id, e)}
            >
                <Icon name="trash" size={30} color="#FFF" />
            </TouchableOpacity>
        )
    }

    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={getRightContent}>
                <View style={styles.container}>
                    <TouchableWithoutFeedback
                        onPress={(e) => onToggleTask(task.id, e)}
                    >
                        <View style={styles.checkContainer}>
                            <CheckBox checked={donned} />
                        </View>
                    </TouchableWithoutFeedback>
                    <View>
                        <Text style={titleStyles}>{task.descr}</Text>
                        <Text style={styles.date}>{formattedDate}</Text>
                    </View>
                </View>
            </Swipeable>
        </GestureHandlerRootView>
    )
}
