import {useState} from "react"
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

import todayBanner from "../assets/today.jpg"
import global from "../styles/global"
import {formatDate} from "../services/utils"

import AddTask from "./AddTask"
import Task, {TaskData} from "../components/Task"

const initialTasks: TaskData[] = [
    {
        id: Math.random(),
        descr: "Comprar Livro de React Native",
        estimateAt: new Date(),
        doneAt: null,
    },
    {
        id: Math.random(),
        descr: "Ler Livro de React Native",
        estimateAt: new Date(),
        doneAt: new Date(),
    },
]

function TaskList() {
    const [tasks, setTasks] = useState<TaskData[]>([...initialTasks])
    const [showDoneTasks, setShowDoneTasks] = useState(true)
    const [showAddTask, setShowAddTask] = useState(false)

    const handleToggleShowDone = () => setShowDoneTasks(!showDoneTasks)

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

        setTasks((previousTasks) => previousTasks.concat(newTask))
        handleClose()
    }

    const filteredTasks = !showDoneTasks
        ? tasks.filter((t) => t.doneAt === null || t.doneAt === undefined)
        : tasks

    return (
        <View style={styles.container}>
            <AddTask
                onSave={handleSave}
                onCancel={handleClose}
                isVisible={showAddTask}
            />
            <ImageBackground
                style={styles.headerContainer}
                source={todayBanner}
            >
                <View style={styles.iconBar}>
                    <TouchableOpacity onPress={handleToggleShowDone}>
                        <Icon
                            name={showDoneTasks ? "eye" : "eye-slash"}
                            color={global.colors.secondary}
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleBar}>
                    <Text style={styles.title}>Hoje</Text>
                    <Text style={styles.subtitle}>
                        {formatDate("ddd, D [de] MMMM")}
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
                        />
                    )}
                />
            </View>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.addButton}
                onPress={handleAdd}
            >
                <Icon name="plus" size={24} color={global.colors.secondary} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
        fontFamily: global.fontFamilyThin,
        color: global.colors.secondary,
        fontSize: 50,
        marginBottom: 20,
    },
    subtitle: {
        fontFamily: global.fontFamilyThin,
        color: global.colors.secondary,
        fontSize: 20,
    },
    addButton: {
        backgroundColor: global.colors.primary,
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

export default TaskList
