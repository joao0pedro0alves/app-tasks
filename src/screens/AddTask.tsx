import {useState} from "react"
import {
    Modal,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Text,
} from "react-native"
import DateTimeField from "../components/DateTimeField"
import TextInputField from "../components/TextInputField"
import global from "../styles/global"

const initialState = {
    descr: "Tarefa #01",
    date: new Date(),
}

interface AddTaskProps {
    isVisible: boolean
    onCancel: () => void
    onSave: (data: typeof initialState) => void
}

function AddTask({isVisible, onSave, onCancel}: AddTaskProps) {
    const [formValues, setFormValues] = useState({
        ...initialState,
    })

    const handleChangeFormValue = (name: string, newValue: any) => {
        setFormValues((previousValues) => ({
            ...previousValues,
            [name]: newValue,
        }))
    }

    return (
        <Modal
            transparent
            visible={isVisible}
            onRequestClose={onCancel}
            animationType="slide"
        >
            <TouchableWithoutFeedback onPress={onCancel}>
                <View style={styles.backdrop}></View>
            </TouchableWithoutFeedback>
            <View style={styles.backdrop}>
                <View style={styles.container}>
                    <Text style={styles.header}>Nova Tarefa</Text>

                    <View style={styles.form}>
                        <TextInputField
                            placeholder="Informe a descrição..."
                            value={formValues.descr}
                            onChangeText={(newText: string) =>
                                handleChangeFormValue("descr", newText)
                            }
                        />
                        <DateTimeField
                            placeholder="Informe a data de conclusão..."
                            value={formValues.date}
                            onChange={(_, newDate) =>
                                handleChangeFormValue("date", newDate)
                            }
                        />
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onSave(formValues)}>
                            <Text style={[styles.button, styles.buttonSave]}>
                                Salvar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingVertical: 32,
        backgroundColor: global.colors.background,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        elevation: 15,
    },
    header: {
        fontFamily: global.fontFamilyBold,
        color: global.colors.primary,
        fontSize: 20,
    },
    form: {
        flex: 1,
        zIndex: 2,
    },
    buttons: {
        zIndex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        fontFamily: global.fontFamilyBold,
        paddingHorizontal: 16,
        paddingVertical: 8,
        color: global.colors.primary,
        borderRadius: 4,
        fontSize: 14,
    },
    buttonSave: {
        backgroundColor: global.colors.primary,
        color: global.colors.secondary,
        elevation: 1,
    },
})

export default AddTask
