import {createDrawerNavigator} from "@react-navigation/drawer"

import {TaskList} from "../screens/TaskList"

const {Navigator, Screen} = createDrawerNavigator()

export function AppRoutes() {
    return (
        <Navigator 
            initialRouteName="today" 
            screenOptions={{
                headerShown: false
            }}
        >

            <Screen
                name="today"
                component={TaskList}
                initialParams={{ title: "Hoje", daysAhead: 0 }}
                options={{ title: "Hoje" }}
            />

            <Screen
                name="tomorrow"
                component={TaskList}
                initialParams={{ title: "Amanhã", daysAhead: 1 }}
                options={{ title: "Amanhã" }}
            />

            <Screen
                name="week"
                component={TaskList}
                initialParams={{ title: "Semana", daysAhead: 7 }}
                options={{ title: "Semana" }}
            />

            <Screen
                name="month"
                component={TaskList}
                initialParams={{ title: "Mês", daysAhead: 31 }}
                options={{ title: "Mês" }}
            />

        </Navigator>
    )
}
