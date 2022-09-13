import {useState} from "react"
import {
    View,
    Text,
    ImageBackground,
    FlatList,
    TouchableOpacity,
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

import todayBanner from "../../assets/today.jpg"
import {THEME} from "../../theme"
import {formatDate} from "../../services/utils"

import {TaskForm} from "../TaskForm"
import {Task, TaskData} from "../../components/Task"
import {styles} from "./styles"

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

export function Home() {
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
            <TaskForm
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
                            color={THEME.COLORS.SECONDARY}
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
                <Icon name="plus" size={24} color={THEME.COLORS.SECONDARY} />
            </TouchableOpacity>
        </View>
    )
}
