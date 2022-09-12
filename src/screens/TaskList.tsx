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
import Task, {TaskData} from "../components/Task"

import todayBanner from "../assets/today.jpg"
import global from "../styles/global"
import {formatDate} from "../services/utils"

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

    const filteredTasks = !showDoneTasks
        ? tasks.filter((t) => t.doneAt === null || t.doneAt === undefined)
        : tasks

    return (
        <View style={styles.container}>
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
})

export default TaskList
