import {StatusBar} from "expo-status-bar"
import {StyleSheet, SafeAreaView} from "react-native"

import "moment/locale/pt-br"

import SplashScreen from "./src/components/SplashScreen"
import TaskList from "./src/screens/TaskList"
import global from "./src/styles/global"

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <SplashScreen>
                <TaskList />
            </SplashScreen>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: global.colors.background,
    },
})
