import {useState} from "react"
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Alert,
} from "react-native"
import moment from "moment"

import Icon from "react-native-vector-icons/FontAwesome"

import todayBanner from "../../assets/today.jpg"
import tomorrowBanner from "../../assets/tomorrow.jpg"
import weekBanner from "../../assets/week.jpg"
import monthBanner from "../../assets/month.jpg"

import {TASKS_KEY} from "../../utils/storageKeys"
import {THEME} from "../../theme"
import {formatDate} from "../../services/utils"
import {usePersistedState} from "../../hooks/usePersistedState"

import {TaskForm} from "../TaskForm"
import {Task, TaskData} from "../../components/Task"
import {styles} from "./styles"

const BANNERS = {
    today: todayBanner,
    tomorrow: tomorrowBanner,
    week: weekBanner,
    month: monthBanner,
}

interface TaskListParams {
    title: string
    daysAhead: number
}

export function TaskList({route, navigation}: any) {
    const params = route.params as TaskListParams

    const [tasks, setTasks] = usePersistedState<TaskData[]>(TASKS_KEY, [])
    const [showDoneTasks, setShowDoneTasks] = useState(true)
    const [showAddTask, setShowAddTask] = useState(false)

    const filteredTasks = !showDoneTasks
        ? tasks.filter((t) => t.doneAt === null || t.doneAt === undefined)
        : tasks

    const currentDate = moment().add({days: params.daysAhead})

    const handleOpenDrawer = () => {
        navigation.openDrawer()
    }

    const handleToggleShowDone = () => setShowDoneTasks(!showDoneTasks)

    const handleAdd = () => {
        setShowAddTask(true)
    }

    const handleClose = () => {
        setShowAddTask(false)
    }

    const handleSave = (params: any) => {
        const newTask = {
            id: Math.random(),
            descr: params.descr,
            estimateAt: params.date,
            doneAt: null,
        }

        if (!newTask.descr?.trim()) {
            Alert.alert("Descrição não informada!")
            return
        }

        setTasks((previousTasks) => previousTasks.concat(newTask))
        handleClose()
    }

    const handleToggleTask = (taskId: number) => {
        const updateTask = (task: TaskData) => ({
            ...task,
            doneAt: task.doneAt ? null : new Date(),
        })

        setTasks((previousTasks) =>
            previousTasks.map((task) =>
                task.id === taskId ? updateTask(task) : task
            )
        )
    }

    const handleRemoveTask = (taskId: number) => {
        setTasks((previousTasks) =>
            previousTasks.filter((task) => task.id !== taskId)
        )
    }

    return (
        <View style={styles.container}>
            <TaskForm
                onSave={handleSave}
                onCancel={handleClose}
                isVisible={showAddTask}
            />
            <ImageBackground
                style={styles.headerContainer}
                source={
                    route.name
                        ? BANNERS[route.name as keyof typeof BANNERS]
                        : todayBanner
                }
            >
                <View style={styles.iconBar}>
                    <TouchableOpacity onPress={handleToggleShowDone}>
                        <Icon
                            name={showDoneTasks ? "eye" : "eye-slash"}
                            color={THEME.COLORS.SECONDARY}
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleBar}>
                    <TouchableOpacity onPress={handleOpenDrawer}>
                        <Text style={styles.title}>{params.title}</Text>
                    </TouchableOpacity>
                    <Text style={styles.subtitle}>
                        {formatDate("ddd, D [de] MMMM", currentDate)}
                    </Text>
                </View>
            </ImageBackground>
            <View style={styles.taskListContainer}>
                <FlatList
                    data={filteredTasks}
                    keyExtractor={(task) => `${task.id}`}
                    renderItem={({item}) => (
                        <Task
                            task={{...item}}
                            onToggleTask={handleToggleTask}
                            onRemoveTask={handleRemoveTask}
                        />
                    )}
                />
            </View>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.addButton}
                onPress={handleAdd}
            >
                <Icon name="plus" size={24} color={THEME.COLORS.SECONDARY} />
            </TouchableOpacity>
        </View>
    )
}
