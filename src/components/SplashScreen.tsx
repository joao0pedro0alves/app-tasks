import {View, Text} from "react-native"
import {
    useFonts,
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
} from "@expo-google-fonts/lato"

interface SplashScreenProps {
    children: JSX.Element
}

function SplashScreen(props: SplashScreenProps) {
    const [fontsLoaded] = useFonts({
        Lato_100Thin,
        Lato_300Light,
        Lato_400Regular,
        Lato_700Bold,
        Lato_900Black,
    })

    return (
        <>
            {!fontsLoaded ? (
                <View>
                    <Text>Carregando...</Text>
                </View>
            ) : (
                props.children
            )}
        </>
    )
}

export default SplashScreen
