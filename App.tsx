import {StatusBar} from "expo-status-bar"
import {StyleSheet, View} from "react-native"
import TaskList from "./components/TaskList"

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TaskList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
    },
})
