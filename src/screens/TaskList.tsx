import {useState} from "react"
import {View, Text, ImageBackground, StyleSheet, FlatList} from "react-native"
import Task, {TaskProps} from "../components/Task"

import todayBanner from "../assets/today.jpg"
import global from "../styles/global"
import {formatDate} from "../services/utils"

const initialTasks: TaskProps[] = [
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
    const [tasks] = useState<TaskProps[]>([...initialTasks])

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.headerContainer}
                source={todayBanner}
            >
                <View style={styles.titleBar}>
                    <Text style={styles.title}>Hoje</Text>
                    <Text style={styles.subtitle}>
                        {formatDate("ddd, D [de] MMMM")}
                    </Text>
                </View>
            </ImageBackground>
            <View style={styles.taskListContainer}>
                <FlatList
                    data={tasks}
                    keyExtractor={(task) => `${task.id}`}
                    renderItem={({item}) => <Task {...item} />}
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
