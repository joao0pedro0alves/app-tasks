import {View} from "react-native"
import {styles} from "./styles"

interface BackgroundProps {
    children: React.ReactNode
}

export function Background(props: BackgroundProps) {
    return <View style={styles.container}>{props.children}</View>
}
