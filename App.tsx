import {StatusBar} from "react-native"
import "moment/locale/pt-br"

import {
    useFonts,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
} from "@expo-google-fonts/lato"

import {Background} from "./src/components/Background"
import {Loading} from "./src/components/Loading"

import {Home} from "./src/screens/Home"

export default function App() {
    const [fontsLoaded] = useFonts({
        Lato_300Light,
        Lato_400Regular,
        Lato_700Bold,
        Lato_900Black,
    })

    return (
        <Background>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            {fontsLoaded ? <Home /> : <Loading />}
        </Background>
    )
}
