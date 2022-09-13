import {useState, useEffect} from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

export function usePersistedState<T>(
    key: string,
    initialState: any
): [T, React.Dispatch<React.SetStateAction<T>>, boolean] {
    const [state, setState] = useState<T>(initialState)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchPersistedState = async () => {
            const persistedState = await AsyncStorage.getItem(key)

            if (persistedState) {
                setState(JSON.parse(persistedState))
            }

            setIsLoading(false)
        }

        fetchPersistedState()
    }, [])

    useEffect(() => {
        const store = async () => {
            await AsyncStorage.setItem(key, JSON.stringify(state))
        }

        store()
    }, [key, state])

    return [state, setState, isLoading]
}
