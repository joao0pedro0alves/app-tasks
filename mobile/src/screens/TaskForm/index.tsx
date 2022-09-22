import {useState, useEffect} from "react"
import {
    Modal,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Text,
    Keyboard,
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"

import {DateField} from "../../components/DateField"
import {TextField} from "../../components/TextField"
import THEME from "../../theme"

import {styles} from "./styles"

const initialState = {
    descr: "",
    date: new Date(),
}

interface TaskFormProps {
    isVisible: boolean
    onCancel: () => void
    onSave: (data: typeof initialState) => void
}

export function TaskForm({isVisible, onSave, onCancel}: TaskFormProps) {
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setIsKeyboardOpen(true)
        })
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setIsKeyboardOpen(false)
        })

        return () => {
            showSubscription.remove()
            hideSubscription.remove()
        }
    }, [])

    const [formValues, setFormValues] = useState({
        ...initialState,
    })

    const handleChangeFormValue = (name: string, newValue: any) => {
        setFormValues((previousValues) => ({
            ...previousValues,
            [name]: newValue,
        }))
    }

    const handleSave = () => {
        onSave({...formValues})
        setFormValues({...initialState})
    }

    return (
        <Modal
            transparent
            visible={isVisible}
            onRequestClose={onCancel}
            animationType="fade"
        >
            <TouchableWithoutFeedback onPress={onCancel}>
                <View style={styles.backdrop}></View>
            </TouchableWithoutFeedback>

            <View style={[styles.backdrop, {flex: 2}]}>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa {isKeyboardOpen}</Text>

                    <View style={styles.form}>
                        <TextField
                            placeholder="Informe a descrição..."
                            value={formValues.descr}
                            onChangeText={(newText: string) =>
                                handleChangeFormValue("descr", newText)
                            }
                        />
                        <DateField
                            placeholder="Informe a data de conclusão..."
                            value={formValues.date}
                            onChange={(_, newDate) =>
                                handleChangeFormValue("date", newDate)
                            }
                        />
                    </View>

                    <View style={[styles.buttons, {display: isKeyboardOpen ? 'none' : 'flex'}]}>
                        <TouchableOpacity
                            onPress={onCancel}
                            style={styles.button}
                        >
                            <Icon
                                name="chevron-left"
                                size={14}
                                color={THEME.COLORS.PRIMARY}
                            />

                            <Text
                                style={[
                                    styles.buttonTitle,
                                    {color: THEME.COLORS.PRIMARY},
                                ]}
                            >
                                Cancelar
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={handleSave}
                            style={[styles.button, styles.buttonSave]}
                        >
                            <Text style={styles.buttonTitle}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TouchableWithoutFeedback onPress={onCancel}>
                <View style={styles.backdrop}></View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
